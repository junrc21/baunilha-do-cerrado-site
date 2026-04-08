import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Baunilha do Cerrado | Confeitaria premium para presentear e celebrar",
    template: "%s | Baunilha do Cerrado",
  },
  description:
    "Cookies, bolos, cheesecakes e latas presenteáveis com apresentação impecável e sabor artesanal. Confeitaria premium em Brasília.",
  keywords: [
    "confeitaria",
    "cookies artesanais",
    "bolos",
    "cheesecake",
    "presentes",
    "Brasília",
    "latas presenteáveis",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Baunilha do Cerrado",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
