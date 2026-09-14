import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ikram Ullah | Lead Flutter Developer & Cross-Platform System Architect",
  description: "Portfolio of Ikram Ullah — Lead Application Developer & Cross-Platform Architect with 8+ years of experience engineering scalable solutions across Mobile, Desktop, and Web serving 1M+ global users.",
  keywords: [
    "Ikram Ullah",
    "Lead Flutter Developer",
    "Cross-Platform System Architect",
    "Mobile Team Lead",
    "Flutter Architect",
    "Riverpod",
    "BLoC",
    "GetX",
    "Clean Architecture",
    "Next.js",
    "NestJS",
    "Native Android",
    "BLE IoT Developer",
    "Lahore Pakistan"
  ],
  authors: [{ name: "Ikram Ullah" }],
  creator: "Ikram Ullah",
  metadataBase: new URL("https://dev-ikram.vercel.app"),
  openGraph: {
    title: "Ikram Ullah | Lead Flutter Developer & Cross-Platform System Architect",
    description: "Lead Application Developer & Cross-Platform Architect with 8+ years of experience engineering scalable mobile, web, and desktop ecosystems serving 1M+ users.",
    url: "https://dev-ikram.vercel.app",
    siteName: "Ikram Ullah Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikram Ullah | Lead Flutter Developer & Cross-Platform System Architect",
    description: "Lead Application Developer & Cross-Platform Architect with 8+ years experience in Flutter, Next.js, Nest.js, Clean Architecture, and IoT BLE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
