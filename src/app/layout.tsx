import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zabid Al Muttaki | Visual Storyteller & Developer",
  description: "Visual storyteller and software developer from Bangladesh. Crafting cinematic videos, AI animations, and full-stack web applications.",
  keywords: ["Zabid Al Muttaki", "Video Editor", "Developer", "React", "Next.js", "DaVinci Resolve", "Bangladesh", "Portfolio"],
  openGraph: {
    title: "Zabid Al Muttaki | Visual Storyteller & Developer",
    description: "Crafting cinematic videos, AI animations, and full-stack web applications from Bangladesh.",
    url: "https://zabidalmuttaki.com",
    siteName: "Zabid Al Muttaki",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zabid Al Muttaki - Portfolio Thumbnail",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zabid Al Muttaki | Visual Storyteller & Developer",
    description: "Crafting cinematic videos, AI animations, and full-stack web applications from Bangladesh.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-grid" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
