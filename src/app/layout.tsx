import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { WhatsAppButton } from "@/components/features";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sandy Sacht | Estética Facial Premium",
    template: "%s | Sandy Sacht",
  },
  description:
    "Clínica de estética facial premium em Joinville. Especialista em harmonização facial, botox, preenchimento labial e bioestimuladores. Resultados naturais e elegantes.",
  keywords: [
    "estética facial",
    "harmonização facial",
    "botox",
    "preenchimento labial",
    "bioestimuladores",
    "skinbooster",
    "Joinville",
    "Sandy Sacht",
    "clínica estética",
  ],
  authors: [{ name: "Sandy Sacht" }],
  creator: "Sandy Sacht",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sandysacht.com.br",
    siteName: "Sandy Sacht Estética",
    title: "Sandy Sacht | Estética Facial Premium",
    description:
      "Clínica de estética facial premium em Joinville. Especialista em harmonização facial, botox, preenchimento labial e bioestimuladores.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sandy Sacht - Estética Facial Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandy Sacht | Estética Facial Premium",
    description:
      "Clínica de estética facial premium em Joinville. Especialista em harmonização facial, botox e preenchimento.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
