import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PreloadWallpaper } from "@/components/desktop/PreloadWallpaper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashrit — Ubuntu Portfolio",
  description:
    "An immersive Ubuntu desktop experience as a personal portfolio. Interact with applications, workspaces, a functional terminal, and more.",
  keywords: [
    "portfolio",
    "ubuntu",
    "desktop",
    "frontend",
    "react",
    "nextjs",
    "framer motion",
  ],
  authors: [{ name: "Ashrit" }],
  openGraph: {
    title: "Ashrit — Ubuntu Portfolio",
    description: "An immersive Ubuntu desktop experience as a personal portfolio.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d0f11",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="h-full w-full overflow-hidden bg-[#0d0f11] text-white">
        <PreloadWallpaper />
        {children}
      </body>
    </html>
  );
}
