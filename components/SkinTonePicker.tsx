import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dices } from "lucide-react";
import ColorPicker from "./ShadcnColorPicker";

export type SkinTone = "random" | "1" | "2" | "3" | "4" | "5" | "6" | "custom";

export const SKIN_TONES = {
    "1": "#f9ece6",
    "2": "#f0d3c5",
    "3": "#e3b38d",
    "4": "#bc8d57",
    "5": "#a96c4f",
    "6": "#704733",
} as const;

export const getRandomSkinTone = (): string => {
    const tones = Object.values(SKIN_TONES);
    return tones[Math.floor(Math.random() * tones.length)];
};

interface SkinToneSelectorProps {
    selectedTone: SkinTone;
    customColor: string;
    onChange: (tone: SkinTone) => void;
    onCustomColorChange: (color: string) => void;
}

const SkinToneSelector = ({
    selectedTone,
    customColor,
    onChange,
    onCustomColorChange,
}: SkinToneSelectorProps) => {
    return (
        <Card className="w-full max-w-md mx-auto mb-6 shadow-none">
            <CardHeader>
                <CardTitle>Skin Tone</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div className="flex gap-2 justify-center items-center">
                        <button
                            onClick={() => onChange("random")}
                            className={`p-2 border-2 transition-colors duration-300 ease-in-out ${
                                selectedTone === "random"
                                    ? "border-primary rounded-sm"
                                    : "border-transparent rounded-full"
                            }`}
                        >
                            <Dices className="w-8 h-8" />
                        </button>
                        <div
                            className={`p-2 border-2 transition-colors duration-300 ease-in-out ${
                                selectedTone === "custom"
                                    ? "border-primary rounded-sm"
                                    : "border-transparent rounded-full"
                            }`}
                        >
                            <ColorPicker
                                selectedColor={customColor}
                                onSelectColor={(color) => {
                                    onCustomColorChange(color);
                                    onChange("custom");
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {Object.entries(SKIN_TONES).map(([tone, color]) => (
                            <button
                                key={tone}
                                onClick={() => onChange(tone as SkinTone)}
                                className={`p-2 border-2 transition-colors duration-300 ease-in-out ${
                                    selectedTone === tone
                                        ? "border-primary rounded-sm"
                                        : "border-transparent rounded-full"
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 transition-colors duration-300 ease-in-out ${
                                        selectedTone === tone
                                            ? "rounded-sm"
                                            : "rounded-full"
                                    }`}
                                    style={{ backgroundColor: color }}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SkinToneSelector;
