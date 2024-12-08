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
import { DownloadIcon, PrinterIcon } from "lucide-react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import JSZip from "jszip";

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const ASLGrid = () => {
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
    const [selectedTone, setSelectedTone] = useState<SkinTone>("3");
    const [customColor, setCustomColor] = useState("#e3b38d");
    const [randomTones, setRandomTones] = useState<Record<number, string>>({});
    const [signComponents, setSignComponents] = useState<
        Record<
            number,
            React.LazyExoticComponent<
                React.FC<React.SVGProps<SVGSVGElement>>
            > | null
        >
    >({});
    const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set());

    const gridRef = useRef<HTMLDivElement>(null);
    const printableRef = useRef<HTMLDivElement>(null);

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

    // Generate random tones for each sign if 'random' is selected
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
    }, [selectedTone]);

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

    const handlePrint = () => {
        const printableContent = printableRef.current;
        if (!printableContent) return;

        const printWindow = window.open("", "PRINT", "height=600,width=800");

        if (printWindow) {
            printWindow.document.write(
                "<html><head><title>Print ASL Signs</title>"
            );
            // Include necessary styles
            printWindow.document.write(
                `<style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    .print-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 20px; }
                    .print-card { border: 1px solid #ccc; padding: 10px; text-align: center; }
                    .print-card svg { width: 100px; height: 100px; }
                </style>`
            );
            printWindow.document.write("</head><body >");
            printWindow.document.write(printableContent.innerHTML);
            printWindow.document.write("</body></html>");
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }
    };

    const handleDownloadGrid = async () => {
        if (!gridRef.current) return;

        // Capture the grid using html2canvas
        const canvas = await html2canvas(gridRef.current, {
            backgroundColor: null, // Transparent background
            scale: 2, // Increase resolution
        });

        // Convert canvas to PNG blob
        canvas.toBlob((blob) => {
            if (blob) {
                saveAs(blob, "ASL_Grid.png");
            }
        }, "image/png");
    };

    const handleDownloadEach = async () => {
        const zip = new JSZip();
        const cards = Array.from(
            gridRef.current?.querySelectorAll(".download-card") || []
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

        // Iterate over each card and add to ZIP
        for (const card of selectedOrAllCards) {
            const canvas = await html2canvas(card as HTMLElement, {
                backgroundColor: null, // Ensure transparency
                scale: 2, // Increase resolution
            });

            // Convert canvas to PNG blob (Changed from JPEG to PNG)
            const blob = await new Promise<Blob | null>(
                (resolve) => canvas.toBlob(resolve, "image/png") // Changed to "image/png"
            );

            if (blob) {
                const signId = card.getAttribute("data-sign-id");
                const signMeaning = card.getAttribute("data-sign-meaning");
                zip.file(`${signMeaning}_${signId}.png`, blob, {
                    // Changed extension to .png
                    binary: true,
                });
            }
        }

        // Generate ZIP and trigger download
        zip.generateAsync({ type: "blob" }).then((content) => {
            saveAs(content, "ASL_Signs.zip");
        });
    };

    return (
        <div className="container mx-auto p-6 space-y-10">
            <div className="flex justify-between items-center mb-4">
                <SkinToneSelector
                    selectedTone={selectedTone}
                    customColor={customColor}
                    onChange={setSelectedTone}
                    onCustomColorChange={setCustomColor}
                />
            </div>
            <div className="space-y-2">
                <div className="text-sm text-center">
                    Click the signs that you want, else click none to get them
                    all!
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Button
                        onClick={handlePrint}
                        className="h-10"
                    >
                        <PrinterIcon className="!w-6 !h-6" />{" "}
                        <span className="font-[family-name:var(--font-fredoka)] text-xl">
                            Print
                        </span>
                    </Button>
                    <Button
                        onClick={handleDownloadGrid}
                        className="h-10"
                    >
                        <DownloadIcon className="!w-6 !h-6" />{" "}
                        <span className="font-[family-name:var(--font-fredoka)] text-xl">
                            Download Grid
                        </span>
                    </Button>
                    <Button
                        onClick={handleDownloadEach}
                        className="h-10"
                    >
                        <DownloadIcon className="!w-6 !h-6" />{" "}
                        <span className="font-[family-name:var(--font-fredoka)] text-xl">
                            Download Each
                        </span>
                    </Button>
                </div>
            </div>
            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                ref={gridRef}
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

                    return (
                        <Card
                            key={sign.id}
                            className={`overflow-hidden cursor-pointer relative download-card ${
                                isSelected ? "border-4 border-blue-500" : ""
                            }`}
                            onClick={() => toggleSelectCard(sign.id)}
                            data-sign-id={sign.id}
                            data-sign-meaning={sign.meaning}
                        >
                            <CardContent className="p-6 flex flex-col items-center">
                                <div className="relative w-32 h-32 mb-2">
                                    <Suspense
                                        fallback={
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                Loading...
                                            </div>
                                        }
                                    >
                                        <SignSVG
                                            width="128"
                                            height="128"
                                            style={{
                                                fill: skinTone,
                                                stroke: "#000",
                                                strokeWidth: 5,
                                            }}
                                            onError={() =>
                                                handleImageError(sign.id)
                                            }
                                            aria-label={`ASL sign for ${sign.meaning}`}
                                        />
                                    </Suspense>
                                </div>
                                <p
                                    className="text-center font-medium text-lg"
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

            {/* Hidden printable area */}
            <div
                className="hidden"
                ref={printableRef}
            >
                <h1>ASL Signs</h1>
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
                                        width="100"
                                        height="100"
                                        style={{
                                            fill: skinTone,
                                            stroke: "#000",
                                            strokeWidth: 2,
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
