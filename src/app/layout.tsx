import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalToastProvider } from "@/components/ui/use-toast";
import type { Metadata } from "next";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guia Design e Código",
  description: "Um guia prático sobre a relação entre design e implementação.",
  openGraph: {
    title: "Guia Prático – Design e Código",
    description: "Documentação de processos de design e código. Um guia pessoal sobre como design se sustenta quando o código começa.",
    url: "https://guiadesignecodigo.com.br", // Replacing with actual domain if known, else relative works best if metadataBase is set. Using .com.br as placeholder or relative. User didn't specify domain options, but Next.js needs absolute or metadataBase.
    siteName: "Guia Design e Código",
    images: [
      {
        url: "/screenshot.png",
        width: 1200,
        height: 630,
        alt: "Preview do Guia Prático Design e Código",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia Prático – Design e Código",
    description: "Um guia prático sobre a relação entre design e implementação.",
    images: ["/screenshot.png"],
  },
  metadataBase: new URL("https://guiadesignecodigo.vercel.app"), // Placeholder for Vercel deployment, or I can ask user. Best to set something reasonable to avoid build warning.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>
          <GlobalToastProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-[var(--primary-foreground)] focus:rounded-md focus:text-sm focus:font-medium"
            >
              Pular para o conteúdo
            </a>
            <div className="flex min-h-screen">
              <Sidebar />
              <MobileNav />
              <main id="main-content" className="flex-1 min-w-0 md:pl-72">
                <div className="max-w-6xl mx-auto px-6 py-10 lg:px-12 lg:py-16">
                  {children}
                  <Footer />
                </div>
              </main>
            </div>
          </GlobalToastProvider>
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
