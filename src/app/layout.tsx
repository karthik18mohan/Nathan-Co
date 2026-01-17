import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteTitle } from "@/content/copy";
import { Fraunces, Inter } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteTitle
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-ivory text-ink ${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
