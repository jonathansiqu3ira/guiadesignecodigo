import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalToastProvider } from "@/components/ui/use-toast";
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>
          <GlobalToastProvider>
            <div className="flex flex-col md:flex-row min-h-screen">
              <Sidebar />
              <MobileNav />
              <main className="flex-1 p-8 md:p-12 md:pl-80 transition-all duration-300">
                {children}
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
