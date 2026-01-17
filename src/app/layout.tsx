import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteTitle } from "@/content/copy";
import { Inter, Playfair_Display } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Playfair_Display({
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
      <body className={`min-h-screen ${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
