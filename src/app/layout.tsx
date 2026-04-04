import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import StoreBenefits from "@/components/common/StoreBenefits";
import Footer from "@/components/common/Footer";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "E-commerce shopping application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-exo", exo.variable)}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <StoreBenefits />
        <Footer />
      </body>
    </html>
  );
}
