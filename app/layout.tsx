import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { GoogleAnalyticsComponent } from "@/components/google-analytics";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Maria Julia Pet Sitter - Cuidando de cada pet com carinho",
  description: "Serviços completos de cuidado para pets em Araraquara. Pet sitter e dog walker com experiência e carinho.",
  keywords: ["pet sitter", "dog walker", "cuidado de pets", "Araraquara", "passeio com cachorro", "pet sitting"],
  authors: [{ name: "Maria Julia Pet Sitter" }],
  creator: "Maria Julia Pet Sitter",
  publisher: "Maria Julia Pet Sitter",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
        className={`${inter.variable} antialiased`}
      >
        <Navigation />
        <main className="relative bg-linear-to-bl from-primary/5 to-primary/1 min-h-screen overflow-hidden">
          {children}
        </main>
        <Footer />
        {gaMeasurementId && (
          <GoogleAnalyticsComponent measurementId={gaMeasurementId} />
        )}
        <CookieConsent variant="default" />
        <Analytics />
      </body>
    </html>
  );
}
