import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CR7 – The GOAT Journey | Cristiano Ronaldo Tribute",
  description:
    "An immersive storytelling tribute celebrating Cristiano Ronaldo's legendary journey from Madeira to world football supremacy. Data, iconic moments, records, and legacy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased selection:bg-amber-500/30 selection:text-amber-200">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">{children}</body>
    </html>
  );
}
