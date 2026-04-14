import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";
import Providers from "@/components/shared/Providers";
import { checkUserData } from "@/actions/auth";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "E-commerce shopping application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await checkUserData();

  return (
    <html lang="en" className={cn("font-exo", exo.variable)}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Providers {...data}>
          <Navbar />
          {children}
          <Footer />

          <Toaster
            toastOptions={{
              classNames: {
                toast: "border-none!",
                success: "bg-primary-main! text-white!",
                error: "bg-red-500! text-white!",
                loading: "bg-primary-50! text-primary-main!",
                title: "text-base! font-bold!",
                description: "text-white! text-sm! font-medium!",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
