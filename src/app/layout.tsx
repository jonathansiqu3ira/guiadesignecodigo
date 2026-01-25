import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guia Design e Código",
  description: "Um guia prático sobre a relação entre design e implementação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <MobileNav />
            <main className="flex-1 p-8 md:p-12 md:pl-80 transition-all duration-300">
              {children}
            </main>
          </div>
        </ThemeProvider>
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
