import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CR7 – The GOAT Journey | Cristiano Ronaldo Storytelling Archive",
  description:
    "An immersive tribute chronicling Cristiano Ronaldo's unmatched journey from Madeira to world football supremacy. Data, iconic videos, records, family roots, and how he answered every critic.",
  keywords: [
    "Cristiano Ronaldo",
    "CR7",
    "GOAT",
    "Champions League",
    "Ballon d'Or",
    "Football",
    "Real Madrid",
    "Manchester United",
    "Juventus",
    "Portugal",
    "Al Nassr",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased selection:bg-amber-500/30 selection:text-amber-200">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
