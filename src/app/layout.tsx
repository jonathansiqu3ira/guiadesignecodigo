import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Providers } from "./providers";
import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guia Prático - Design e Código",
  description: "Documentação de processos de design e código.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased min-h-screen flex bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <main className="flex-1 md:ml-64 p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
