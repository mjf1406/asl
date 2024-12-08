"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SkinToneSelector, {
    SkinTone,
    getRandomSkinTone,
    SKIN_TONES,
} from "./SkinTonePicker";
import { signs } from "@/lib/constants";
import { getSignIcon } from "@/app/asl-icons/getSignIcon";

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

    return (
        <div className="container mx-auto p-6">
            <SkinToneSelector
                selectedTone={selectedTone}
                customColor={customColor}
                onChange={setSelectedTone}
                onCustomColorChange={setCustomColor}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {signs.map((sign) => {
                    if (failedImages.has(sign.id)) {
                        return null;
                    }

                    const SignSVG = signComponents[sign.id];
                    if (!SignSVG) {
                        return null;
                    }

                    const skinTone = getSkinToneForSign(sign.id);

                    return (
                        <Card
                            key={sign.id}
                            className="overflow-hidden"
                        >
                            <CardContent className="p-4 flex flex-col items-center">
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
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ASLGrid;
