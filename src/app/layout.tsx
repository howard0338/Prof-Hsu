import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingParticles } from "../components/FloatingParticles";

// Use Inter for a clean, academic look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prof. Shan Hui Hsu Lab | NTU Biomaterials",
  description: "Official website of the Biomaterials and Tissue Engineering Laboratory at National Taiwan University.",
  keywords: ["Biomaterials", "Tissue Engineering", "NTU", "Shan Hui Hsu", "Polymers", "Regenerative Medicine"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col relative`}>
        <FloatingParticles />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}