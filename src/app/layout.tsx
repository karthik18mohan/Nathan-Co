import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { siteTitle } from "@/content/copy";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteTitle
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cloud text-ink">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
