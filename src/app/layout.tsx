import { Inter } from "next/font/google";
import Script from "next/script";
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
          <main className="flex-1 md:ml-64 p-8 md:p-12 lg:p-16 max-w-[1400px] mx-auto">
            {children}
          </main>
        </Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HBL7C5DFLQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HBL7C5DFLQ');
          `}
        </Script>
      </body>
    </html>
  );
}
