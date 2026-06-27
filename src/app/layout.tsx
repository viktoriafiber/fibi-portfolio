import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalOverlays from "@/components/layout/GlobalOverlays";

const typewriter = localFont({
  src: "../../public/fonts/CourierPrime-Regular.ttf",
  variable: "--font-typewriter",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIBI — AI Content Creator",
  description:
    "Превращаю идеи в визуальные миры с помощью AI. Портфолио AI Content Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${typewriter.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <GlobalOverlays />
        {children}
      </body>
    </html>
  );
}