import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/lib/auth/context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "uBuild - Agentic AI Software Agency",
  description: "Turn your idea into a production-ready MVP in 5 automated stages with 6 AI agents working 24/7. No coding required.",
  keywords: ["AI", "SaaS", "automation", "sales", "MVP", "software agency", "no-code"],
  authors: [{ name: "uBuild Agency" }],
  creator: "uBuild Agency",
  publisher: "uBuild Agency",
  metadataBase: new URL("https://ubuild.web.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ubuild.pro",
    siteName: "uBuild Agency",
    title: "uBuild - Your Personal AI Sales Army",
    description: "6 AI agents that handle your entire sales operation automatically. 10x more leads. 90% less manual work.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "uBuild Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "uBuild - Agentic AI Software Agency",
    description: "Turn your idea into a production-ready MVP in 5 automated stages.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "uBuild Agency",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "1997",
    "highPrice": "4997",
    "priceCurrency": "USD",
    "offerCount": "3"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "description": "Turn your idea into a production-ready MVP in 5 automated stages with 6 AI agents.",
  "featureList": [
    "24/7 Sales Agent",
    "Lead Qualification",
    "Content Generation",
    "Email Automation",
    "Account Intelligence",
    "Sales Coaching"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
