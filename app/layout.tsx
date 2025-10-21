import { CookieConsent } from "@/components/cookie-consent";
import { GoogleAnalyticsComponent } from "@/components/google-analytics";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Julia Pet Sitter - Cuidando de cada pet com carinho",
  description: "Serviços completos de cuidado para pets em Araraquara. Pet sitter e dog walker com experiência e carinho.",
  keywords: ["pet sitter", "dog walker", "cuidado de pets", "Araraquara", "passeio com cachorro", "pet sitting"],
  authors: [{ name: "Maria Julia Pet Sitter" }],
  creator: "Maria Julia Pet Sitter",
  publisher: "Maria Julia Pet Sitter",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marijulia-pet-sitter.vercel.app",
    title: "Maria Julia Pet Sitter - Cuidando de cada pet com carinho",
    description: "Serviços completos de cuidado para pets em Araraquara. Pet sitter e dog walker com experiência e carinho.",
    siteName: "Maria Julia Pet Sitter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Julia Pet Sitter - Cuidando de cada pet com carinho",
    description: "Serviços completos de cuidado para pets em Araraquara. Pet sitter e dog walker com experiência e carinho.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {gaMeasurementId && (
          <GoogleAnalyticsComponent measurementId={gaMeasurementId} />
        )}
        <CookieConsent variant="default" />
        <Analytics />
      </body>
    </html>
  );
}
