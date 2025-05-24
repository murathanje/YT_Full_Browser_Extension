import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "YouTube Full Browser Mode | Distraction-Free Viewing",
  description: "Experience YouTube in true full browser mode with advanced video controls and distraction-free viewing. Open source browser extension.",
  keywords: ["YouTube extension", "full browser mode", "distraction-free", "video player", "browser extension"],
  authors: [{ name: "Murathan Kagan" }],
  openGraph: {
    title: "YouTube Full Browser Mode | Distraction-Free Viewing",
    description: "Experience YouTube in true full browser mode with advanced video controls and distraction-free viewing.",
    images: ['/assets/video.gif'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
