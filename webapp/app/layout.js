import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
  display: "swap",
});

const siteUrl = "https://nepalicalendar.kebinmaharjan.com.np";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Nepali Calendar 2083 | नेपाली पात्रो - Today's Date, Tithi & Festivals",
    template: "%s | Nepali Calendar",
  },
  description:
    "Check today's Nepali (Bikram Sambat) date, tithi, nakshatra, festivals, rashifal, gold price, forex rates and date converter. नेपाली पात्रो २०८३ — आजको मिति, चाडपर्व र पञ्चाङ्ग एकै ठाउँमा।",
  keywords: [
    "nepali calendar",
    "nepali patro",
    "nepali date today",
    "nepali calendar 2083",
    "नेपाली पात्रो",
    "आजको मिति",
    "nepali rashifal",
    "bs to ad converter",
    "nepali to english date",
    "nepali tithi",
    "nepali festival calendar",
    "v Vikram Sambat calendar",
    "bikram sambat to gregorian",
    "nepali horoscope today",
    "nepali panchang",
    "today nepali date",
    "nepali gold price",
    "nepal exchange rate",
  ],
  authors: [{ name: "Nepali Calendar" }],
  creator: "Nepali Calendar",
  publisher: "Nepali Calendar",
  openGraph: {
    type: "website",
    locale: "ne_NP",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Nepali Calendar | नेपाली पात्रो",
    title:
      "Nepali Calendar 2083 | नेपाली पात्रो - Today's Date, Tithi & Festivals",
    description:
      "Check today's Nepali (Bikram Sambat) date, tithi, festivals, rashifal, gold price, forex rates and date converter. नेपाली पात्रो २०८३।",
    images: [
      {
        url: "/images/calendar.jpg",
        width: 1200,
        height: 630,
        alt: "Nepali Calendar - नेपाली पात्रो",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepali Calendar 2083 | नेपाली पात्रो",
    description:
      "Today's Nepali date, tithi, festivals, rashifal, gold price & forex rates. आजको मिति र चाडपर्व।",
    images: ["/images/calendar.jpg"],
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  verification: {},
  alternates: {
    canonical: siteUrl,
    languages: {
      "ne": "/",
      "en": "/en/",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nepali Calendar | नेपाली पात्रो",
  alternateName: [
    "Nepali Calendar 2083",
    "नेपाली पात्रो",
    "Nepali Patro",
    "Bikram Sambat Calendar",
  ],
  url: siteUrl,
  description:
    "Nepali calendar with today's date, tithi, festivals, rashifal, gold price, forex rates and date converter.",
  inLanguage: ["ne", "en"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Nepali Calendar",
  alternateName: "नेपाली पात्रो",
  url: siteUrl,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  description:
    "Complete Nepali (Bikram Sambat) calendar with daily tithi, nakshatra, festivals, horoscope, gold and silver prices, foreign exchange rates, and a BS-to-AD date converter.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "NPR",
  },
  inLanguage: ["ne", "en"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ne">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webAppSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansDevanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
