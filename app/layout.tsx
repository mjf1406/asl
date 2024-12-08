import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const fredoka = localFont({
    src: "./fonts/Fredoka-VariableFont_wdth,wght.ttf",
    variable: "--font-fredoka", // This is optional, but allows for CSS custom properties
    weight: "100 900", // Define the weight range (for variable fonts)
});

const quicksand = localFont({
    src: "./fonts/Quicksand-VariableFont_wght.ttf",
    variable: "--font-quicksand", // Optional variable name
    weight: "300 700", // Define the weight range (for variable fonts)
});

export const metadata: Metadata = {
    title: "ASL Resources for Silent Time",
    description: "Easily download and print ASL resources for your classroom.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} ${quicksand.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
