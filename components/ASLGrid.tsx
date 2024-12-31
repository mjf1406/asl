"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SkinToneSelector, {
    SkinTone,
    getRandomSkinTone,
    SKIN_TONES,
} from "./SkinTonePicker";
import { signs } from "@/lib/constants";
import { getSignIcon } from "@/app/asl-icons/getSignIcon";
import { Button } from "./ui/button";
import {
    CircleAlert,
    Download,
    FileDown,
    Grid,
    Layout,
    Loader,
    PrinterIcon,
} from "lucide-react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import JSZip from "jszip";

// ShadCN Dialog
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

// ShadCN Dropdown
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const ASLGrid = () => {
    // Existing state variables
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
    const [selectedTone, setSelectedTone] = useState<SkinTone>("3");
    const [customColor, setCustomColor] = useState("#e3b38d");
    const [randomTones, setRandomTones] = useState<Record<number, string>>({});
    const [randomKey, setRandomKey] = useState(0);
    const [signComponents, setSignComponents] = useState<
        Record<number, React.LazyExoticComponent<SVGComponent> | null>
    >({});
    const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set());

    // Print dialog
    const [isPrintDialogOpen, setIsPrintDialogOpen] = useState(false);
    const [printTitle, setPrintTitle] = useState("");
    const [printSubtitle, setPrintSubtitle] = useState("");

    // Customization
    const [numColumns, setNumColumns] = useState<number>(4); // Default to 4 columns
    const [cardSize, setCardSize] = useState<
        "very-small" | "small" | "medium" | "large" | "very-large"
    >("medium"); // Default to medium

    // New: stroke size
    const [strokeSize, setStrokeSize] = useState<number>(5); // default stroke width

    const gridRef = useRef<HTMLDivElement>(null);
    const printableRef = useRef<HTMLDivElement>(null);

    // NEW / UPDATED: Loading states for each download button
    const [isLoadingGrid, setIsLoadingGrid] = useState(false);
    const [isLoadingCards, setIsLoadingCards] = useState(false);
    const [isLoadingIcons, setIsLoadingIcons] = useState(false);

    useEffect(() => {
        const loadSigns = async () => {
            const componentsPromises = signs.map(async (sign) => {
                const component = await getSignIcon(sign.sign);
                return { id: sign.id, component } as const;
            });

            const results = await Promise.all(componentsPromises);
            const newComponents: Record<
                number,
                React.LazyExoticComponent<SVGComponent> | null
            > = {};

            results.forEach(({ id, component }) => {
                newComponents[id] = component;
            });

            setSignComponents(newComponents);
        };

        loadSigns();
    }, []);

    useEffect(() => {
        if (selectedTone === "random") {
            const newRandomTones: Record<number, string> = {};
            signs.forEach((sign) => {
                newRandomTones[sign.id] = getRandomSkinTone();
            });
            setRandomTones(newRandomTones);
        } else {
            setRandomTones({});
        }
    }, [selectedTone, randomKey]);

    const handleSkinToneChange = (tone: SkinTone) => {
        setSelectedTone(tone);
        if (tone === "random") {
            // Force new random generation
            setRandomKey((prev) => prev + 1);
        }
    };

    const getSkinToneForSign = (signId: number) => {
        if (selectedTone === "random") {
            return randomTones[signId] || getRandomSkinTone();
        }
        if (selectedTone === "custom") {
            return customColor;
        }
        return SKIN_TONES[selectedTone];
    };

    const handleImageError = (signId: number) => {
        setFailedImages((prev) => new Set([...prev, signId]));
    };

    const toggleSelectCard = (signId: number) => {
        setSelectedCards((prev) => {
            const newSelected = new Set(prev);
            if (newSelected.has(signId)) {
                newSelected.delete(signId);
            } else {
                newSelected.add(signId);
            }
            return newSelected;
        });
    };

    // Print Flow
    const handlePrint = () => {
        setIsPrintDialogOpen(true);
    };

    const triggerPrint = () => {
        const printableContent = printableRef.current;
        if (!printableContent) return;

        const printWindow = window.open("", "PRINT", "height=600,width=800");
        if (printWindow) {
            printWindow.document.write(
                "<html><head><title>Print ASL Signs</title>"
            );
            // Include necessary styles
            printWindow.document.write(`
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .print-title { text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .print-subtitle { text-align: center; font-size: 18px; margin-bottom: 20px; }
          .print-grid { display: grid; grid-template-columns: repeat(${numColumns}, 1fr); gap: 20px; }
          .print-card { border: 1px solid #ccc; padding: 10px; text-align: center; }
          .print-card svg { 
            width: ${
                cardSize === "very-small"
                    ? "60px"
                    : cardSize === "small"
                    ? "80px"
                    : cardSize === "large"
                    ? "120px"
                    : cardSize === "very-large"
                    ? "160px"
                    : "100px"
            };
            height: ${
                cardSize === "very-small"
                    ? "60px"
                    : cardSize === "small"
                    ? "80px"
                    : cardSize === "large"
                    ? "120px"
                    : cardSize === "very-large"
                    ? "160px"
                    : "100px"
            };
          }
        </style>
      `);
            printWindow.document.write("</head><body>");
            // Insert title and subtitle
            printWindow.document.write(
                `<div class="print-title">${printTitle}</div>`
            );
            printWindow.document.write(
                `<div class="print-subtitle">${printSubtitle}</div>`
            );
            // Insert the ASL signs
            printWindow.document.write(printableContent.innerHTML);
            printWindow.document.write("</body></html>");
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }
    };

    // Download the entire grid as one PNG
    const handleDownloadGrid = async () => {
        // NEW / UPDATED: show loading
        setIsLoadingGrid(true);
        try {
            if (!gridRef.current) return;
            const canvas = await html2canvas(gridRef.current, {
                backgroundColor: null, // Transparent
                scale: 2,
            });
            canvas.toBlob((blob) => {
                if (blob) {
                    saveAs(blob, "ASL_Grid.png");
                }
            }, "image/png");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingGrid(false);
        }
    };

    // Download each selected card (or all if none selected)
    const handleDownloadEach = async () => {
        // NEW / UPDATED: show loading
        setIsLoadingCards(true);
        try {
            if (!gridRef.current) return;
            const zip = new JSZip();
            const cards = Array.from(
                gridRef.current.querySelectorAll(".download-card") || []
            );

            const selectedOrAllCards = selectedCards.size
                ? cards.filter((card) => {
                      const signId = Number(card.getAttribute("data-sign-id"));
                      return selectedCards.has(signId);
                  })
                : cards;

            if (selectedOrAllCards.length === 0) {
                alert("No cards to download.");
                return;
            }

            for (const card of selectedOrAllCards) {
                const canvas = await html2canvas(card as HTMLElement, {
                    backgroundColor: null,
                    scale: 2,
                });
                const blob = await new Promise<Blob | null>((resolve) =>
                    canvas.toBlob(resolve, "image/png")
                );

                if (blob) {
                    const signId = card.getAttribute("data-sign-id");
                    const signMeaning = card.getAttribute("data-sign-meaning");
                    zip.file(`${signMeaning}_${signId}.png`, blob, {
                        binary: true,
                    });
                }
            }

            const content = await zip.generateAsync({ type: "blob" });
            saveAs(content, "ASL_Cards.zip");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingCards(false);
        }
    };

    // Download *only* the SignSVG (in PNG, or SVG)
    const handleDownloadIcons = async (format: "png" | "svg") => {
        // NEW / UPDATED: show loading
        setIsLoadingIcons(true);

        try {
            if (!gridRef.current) return;
            const zip = new JSZip();
            const signElements = Array.from(
                gridRef.current.querySelectorAll(".download-card") || []
            );

            // If user has selected cards, only download those. Otherwise, download all.
            const selectedOrAllCards = selectedCards.size
                ? signElements.filter((el) => {
                      const signId = Number(el.getAttribute("data-sign-id"));
                      return selectedCards.has(signId);
                  })
                : signElements;

            if (selectedOrAllCards.length === 0) {
                alert("No icons to download.");
                return;
            }

            for (const el of selectedOrAllCards) {
                const signId = Number(el.getAttribute("data-sign-id"));
                const signMeaning =
                    el.getAttribute("data-sign-meaning") || "asl_sign";
                const SignSVG = signComponents[signId];
                if (!SignSVG) continue;

                // 1) Grab the actual <svg> element from the card.
                const existingSVG = el.querySelector("svg");
                if (!existingSVG) continue;

                // If user wants .svg format, just clone the raw svg markup directly.
                if (format === "svg") {
                    const clonedSVG = existingSVG.cloneNode(
                        true
                    ) as SVGSVGElement;
                    // Save in the zip
                    zip.file(
                        `${signMeaning}_${signId}.svg`,
                        clonedSVG.outerHTML
                    );
                } else {
                    // For PNG, we can rasterize the *SVG only* inside a small container
                    // rather than the entire card.
                    const wrapper = document.createElement("div");
                    wrapper.style.display = "inline-block";
                    wrapper.style.backgroundColor = "transparent";
                    document.body.appendChild(wrapper);

                    // Clone the existing svg so we can style it as we like
                    const clonedSVG = existingSVG.cloneNode(
                        true
                    ) as SVGSVGElement;

                    // Optionally, we can tweak the width/height before we append
                    let svgSize = 100;
                    switch (cardSize) {
                        case "very-small":
                            svgSize = 60;
                            break;
                        case "small":
                            svgSize = 80;
                            break;
                        case "medium":
                            svgSize = 100;
                            break;
                        case "large":
                            svgSize = 120;
                            break;
                        case "very-large":
                            svgSize = 160;
                            break;
                        default:
                            svgSize = 100;
                    }
                    clonedSVG.setAttribute("width", svgSize.toString());
                    clonedSVG.setAttribute("height", svgSize.toString());

                    wrapper.appendChild(clonedSVG);

                    // Now rasterize it
                    const canvas = await html2canvas(wrapper, {
                        backgroundColor: null,
                        scale: 2,
                    });

                    // Convert canvas to requested format
                    const mimeType = "image/png";
                    const blob = await new Promise<Blob | null>((resolve) =>
                        canvas.toBlob(resolve, mimeType, 1)
                    );

                    if (blob) {
                        zip.file(`${signMeaning}_${signId}.${format}`, blob, {
                            binary: true,
                        });
                    }

                    // Clean up
                    document.body.removeChild(wrapper);
                }
            }

            // Generate ZIP and trigger download
            const content = await zip.generateAsync({ type: "blob" });
            saveAs(content, `ASL_Icons_${format.toUpperCase()}.zip`);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingIcons(false);
        }
    };

    return (
        <div className="container mx-auto p-6 space-y-10">
            {/* Skin Tone Selector and Customization Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
                {/* Skin Tone Selector */}
                <SkinToneSelector
                    selectedTone={selectedTone}
                    customColor={customColor}
                    onChange={handleSkinToneChange}
                    onCustomColorChange={setCustomColor}
                />
            </div>

            {/* Customization Controls */}
            <div className="flex flex-col md:flex-row flex-wrap items-center md:items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Number of Columns */}
                <div className="flex flex-col">
                    <label
                        htmlFor="numColumns"
                        className="text-sm font-medium"
                    >
                        Number of Columns
                    </label>
                    <select
                        id="numColumns"
                        value={numColumns}
                        onChange={(e) => setNumColumns(Number(e.target.value))}
                        className="mt-1 p-2 border border-gray-300 rounded"
                    >
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                    </select>
                </div>

                {/* Card Size */}
                <div className="flex flex-col">
                    <label
                        htmlFor="cardSize"
                        className="text-sm font-medium"
                    >
                        Card Size
                    </label>
                    <select
                        id="cardSize"
                        value={cardSize}
                        onChange={(e) =>
                            setCardSize(
                                e.target.value as
                                    | "very-small"
                                    | "small"
                                    | "medium"
                                    | "large"
                                    | "very-large"
                            )
                        }
                        className="mt-1 p-2 border border-gray-300 rounded"
                    >
                        <option value="very-small">Very Small</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="very-large">Very Large</option>
                    </select>
                </div>

                {/* Stroke Size */}
                <div className="flex flex-col">
                    <label
                        htmlFor="strokeSize"
                        className="text-sm font-medium"
                    >
                        Stroke Size
                    </label>
                    <select
                        id="strokeSize"
                        value={strokeSize}
                        onChange={(e) => setStrokeSize(Number(e.target.value))}
                        className="mt-1 p-2 border border-gray-300 rounded"
                    >
                        {[...Array(21).keys()].map((val) => (
                            <option
                                key={val}
                                value={val}
                            >
                                {val}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {numColumns >= 6 && (
                <div className="w-full flex items-center justify-center lg:hidden">
                    <div className="mt-5 flex w-fit items-center justify-center gap-2 rounded-xl bg-orange-400/50 border-2 border-orange-600">
                        <div className="rounded-l-xl bg-orange-400 p-4">
                            <CircleAlert size={48} />
                        </div>
                        <div className="pr-4 font-medium">
                            <span className="font-[family-name:var(--font-fredoka)]">
                                Are the cards getting squished?
                            </span>
                            <p className="text-xs">
                                Try making the window bigger or zooming out.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ASL Signs Grid */}
            <div
                className="grid gap-4"
                ref={gridRef}
                style={{
                    gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
                }}
            >
                {signs.map((sign) => {
                    if (failedImages.has(sign.id)) {
                        return null;
                    }

                    const SignSVG = signComponents[sign.id];
                    if (!SignSVG) {
                        return null;
                    }

                    const skinTone = getSkinToneForSign(sign.id);
                    const isSelected = selectedCards.has(sign.id);

                    let sizeClasses = "";
                    let svgSize = 100; // Default
                    switch (cardSize) {
                        case "very-small":
                            sizeClasses = "p-2";
                            svgSize = 60;
                            break;
                        case "small":
                            sizeClasses = "p-3";
                            svgSize = 80;
                            break;
                        case "medium":
                            sizeClasses = "p-4";
                            svgSize = 100;
                            break;
                        case "large":
                            sizeClasses = "p-6";
                            svgSize = 120;
                            break;
                        case "very-large":
                            sizeClasses = "p-8";
                            svgSize = 160;
                            break;
                        default:
                            sizeClasses = "p-4";
                            svgSize = 100;
                    }

                    return (
                        <Card
                            key={sign.id}
                            className={`overflow-hidden cursor-pointer relative download-card ${sizeClasses} ${
                                isSelected ? "border-4 border-blue-500" : ""
                            }`}
                            onClick={() => toggleSelectCard(sign.id)}
                            data-sign-id={sign.id}
                            data-sign-meaning={sign.meaning}
                        >
                            <CardContent className="flex h-full gap-2 flex-col items-center justify-center">
                                <div className="relative">
                                    <Suspense
                                        fallback={
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                Loading...
                                            </div>
                                        }
                                    >
                                        <SignSVG
                                            width={`${svgSize}`}
                                            height={`${svgSize}`}
                                            style={{
                                                fill: skinTone,
                                                stroke: "#000",
                                                strokeWidth: strokeSize,
                                            }}
                                            onError={() =>
                                                handleImageError(sign.id)
                                            }
                                            aria-label={`ASL sign for ${sign.meaning}`}
                                        />
                                    </Suspense>
                                </div>
                                <p
                                    className="text-center font-medium sm:text-base text-lg"
                                    style={{
                                        fontFamily: "var(--font-fredoka)",
                                    }}
                                >
                                    {sign.meaning}
                                </p>
                                {isSelected && (
                                    <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                                        ✓
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Action Buttons at the Bottom */}
            <div className="space-y-2">
                <div className="text-sm text-center">
                    Click the signs that you want, else click none to get them
                    all!
                </div>

                <div className="flex md:flex-row flex-col items-center justify-center gap-3 sm:text-base text-xl">
                    {/* Print Button */}
                    <Button
                        onClick={handlePrint}
                        variant={"secondary"}
                        className="h-14 grow"
                    >
                        <PrinterIcon className="!w-6 !h-6" />
                        <span className="font-[family-name:var(--font-fredoka)]">
                            Print
                        </span>
                    </Button>
                    {/* New Segmented Download Controls */}
                    <div className="flex gap-2 items-center justify-start bg-primary py-2 px-4 rounded-md">
                        <div className="flex gap-2 items-center justify-center font-[family-name:var(--font-fredoka)]">
                            <Download className="!w-6 !h-6" /> Download
                        </div>
                        <div className="inline-flex rounded-lg border bg-card text-card-foreground shadow">
                            {/* Download Grid Button */}
                            <Button
                                variant="ghost"
                                className="rounded-none rounded-l-lg border-r hover:bg-accent h-10"
                                onClick={handleDownloadGrid}
                                disabled={isLoadingGrid}
                            >
                                {isLoadingGrid ? (
                                    <div className="flex items-center gap-2">
                                        <Loader className="w-4 h-4 animate-spin" />
                                        <span className="font-[family-name:var(--font-fredoka)]">
                                            Grid
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Grid className="w-4 h-4" />
                                        <span className="font-[family-name:var(--font-fredoka)]">
                                            Grid
                                        </span>
                                    </div>
                                )}
                            </Button>

                            {/* Download Cards Button */}
                            <Button
                                variant="ghost"
                                className="rounded-none border-r hover:bg-accent h-10"
                                onClick={handleDownloadEach}
                                disabled={isLoadingCards}
                            >
                                {isLoadingCards ? (
                                    <div className="flex items-center gap-2">
                                        <Loader className="w-4 h-4 animate-spin" />
                                        <span className="font-[family-name:var(--font-fredoka)]">
                                            Cards
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Layout className="w-4 h-4" />
                                        <span className="font-[family-name:var(--font-fredoka)]">
                                            Cards
                                        </span>
                                    </div>
                                )}
                            </Button>

                            {/* Download Icons Dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="rounded-none rounded-r-lg hover:bg-accent h-10"
                                        disabled={isLoadingIcons}
                                    >
                                        {isLoadingIcons ? (
                                            <div className="flex items-center gap-2">
                                                <Loader className="w-4 h-4 animate-spin" />
                                                <span className="font-[family-name:var(--font-fredoka)]">
                                                    Icons
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <FileDown className="w-4 h-4" />
                                                <span className="font-[family-name:var(--font-fredoka)]">
                                                    Icons
                                                </span>
                                            </div>
                                        )}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        Download Format
                                    </DropdownMenuLabel>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleDownloadIcons("png")
                                        }
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        PNG Format
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleDownloadIcons("svg")
                                        }
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        SVG Format
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>

            {/* ShadCN Dialog for Print */}
            <Dialog
                open={isPrintDialogOpen}
                onOpenChange={setIsPrintDialogOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Print ASL Signs</DialogTitle>
                        <DialogDescription>
                            Please enter a title and subtitle for your printout.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col space-y-4 mt-4">
                        <label className="flex flex-col">
                            <span className="text-sm font-medium">Title</span>
                            <input
                                type="text"
                                value={printTitle}
                                onChange={(e) => setPrintTitle(e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Enter title"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-sm font-medium">
                                Subtitle
                            </span>
                            <input
                                type="text"
                                value={printSubtitle}
                                onChange={(e) =>
                                    setPrintSubtitle(e.target.value)
                                }
                                className="mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Enter subtitle"
                            />
                        </label>
                    </div>
                    <DialogFooter className="flex justify-end space-x-2 mt-6">
                        <Button
                            onClick={() => {
                                setIsPrintDialogOpen(false);
                                triggerPrint();
                            }}
                            className="h-10"
                        >
                            <PrinterIcon className="!w-4 !h-4 mr-2" /> Print
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => setIsPrintDialogOpen(false)}
                            className="h-10"
                        >
                            Cancel
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Hidden printable area */}
            <div
                className="hidden"
                ref={printableRef}
            >
                <div className="print-grid">
                    {signs
                        .filter(
                            (sign) =>
                                selectedCards.size === 0 ||
                                selectedCards.has(sign.id)
                        )
                        .map((sign) => {
                            if (failedImages.has(sign.id)) {
                                return null;
                            }
                            const SignSVG = signComponents[sign.id];
                            if (!SignSVG) {
                                return null;
                            }
                            const skinTone = getSkinToneForSign(sign.id);

                            return (
                                <div
                                    key={sign.id}
                                    className="print-card"
                                >
                                    <SignSVG
                                        width={
                                            cardSize === "very-small"
                                                ? "60"
                                                : cardSize === "small"
                                                ? "80"
                                                : cardSize === "large"
                                                ? "120"
                                                : cardSize === "very-large"
                                                ? "160"
                                                : "100"
                                        }
                                        height={
                                            cardSize === "very-small"
                                                ? "60"
                                                : cardSize === "small"
                                                ? "80"
                                                : cardSize === "large"
                                                ? "120"
                                                : cardSize === "very-large"
                                                ? "160"
                                                : "100"
                                        }
                                        style={{
                                            fill: skinTone,
                                            stroke: "#000",
                                            strokeWidth: strokeSize,
                                        }}
                                        aria-label={`ASL sign for ${sign.meaning}`}
                                    />
                                    <p>{sign.meaning}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ASLGrid;
