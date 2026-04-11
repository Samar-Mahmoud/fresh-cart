import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

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
        <Footer />

        <Toaster
          toastOptions={{
            classNames: {
              toast: "border-none!",
              success: "bg-primary-main! text-white! text-base! font-medium!",
              error: "bg-red-500! text-white! text-base! font-medium!",
              description: "text-white! text-xs! font-medium!",
            },
          }}
        />
      </body>
    </html>
  );
}
