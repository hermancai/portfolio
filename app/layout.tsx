import "./globals.css";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
    title: "Herman Cai's Portfolio",
    description: "Herman Cai Web Development Portfolio",
    authors: [{ name: "Herman Cai" }],
    robots: "follow, index",
    keywords: ["web development", "portfolio", "Herman Cai"],
    manifest: "manifest.json",
};

export const viewport: Viewport = {
    themeColor: "#09090b",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
            <GoogleAnalytics gaId="G-3HRV9HKLT0" />
        </html>
    );
}
