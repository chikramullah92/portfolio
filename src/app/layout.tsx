import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ikram Ullah | Senior Developer & Department Lead",
  description: "Personal portfolio of Ikram Ullah, Senior Developer and Department Lead, showcasing mobile, web, and desktop software ecosystems.",
  keywords: ["Ikram Ullah", "Senior Developer", "Department Lead", "Flutter", "Next.js", "NestJS", "React", "Mobile App Developer", "Full Stack Developer", "Software Engineer"],
  authors: [{ name: "Ikram Ullah" }],
  creator: "Ikram Ullah",
  metadataBase: new URL("https://ikram-dev.vercel.app"),
  openGraph: {
    title: "Ikram Ullah | Senior Developer & Department Lead",
    description: "Personal portfolio of Ikram Ullah, Senior Developer and Department Lead, showcasing mobile, web, and desktop software ecosystems.",
    url: "https://ikram-dev.vercel.app",
    siteName: "Ikram Ullah Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikram Ullah | Senior Developer & Department Lead",
    description: "Personal portfolio of Ikram Ullah, Senior Developer and Department Lead, showcasing mobile, web, and desktop software ecosystems.",
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
