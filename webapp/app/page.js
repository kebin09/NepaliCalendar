import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";
import { CalendarGrid } from "@/app/calendar/components/CalendarGrid";
import { TodayInfo } from "@/app/calendar/components/TodayInfo";

const siteUrl = "https://nepalicalendar.kebinmaharjan.com.np";

export const metadata = {
  title:
    "Nepali Calendar 2083 | नेपाली पात्रो - Today's Date, Tithi & Festivals",
  description:
    "नेपाली पात्रो २०८३ मा आजको मिति, तिथि, नक्षत्र, चाडपर्व, राशिफल, सुनको भाउ र विनिमय दर हेर्नुहोस्। Nepali calendar with tithi, festivals and date converter.",
  keywords: [
    "nepali calendar",
    "nepali patro",
    "nepali date today",
    "नेपाली पात्रो",
    "आजको मिति",
    "nepali calendar 2083",
    "bikram sambat calendar",
    "nepali panchang",
    "today nepali date",
    "nepali tithi",
  ],
  openGraph: {
    title: "Nepali Calendar 2083 | नेपाली पात्रो",
    description:
      "Today's Nepali date, tithi, festivals, rashifal, gold price & forex rates.",
    url: siteUrl + "/",
  },
  alternates: {
    canonical: siteUrl + "/",
  },
};

const faqItems = [
  {
    q: "What is today's Nepali date?",
    a: "Check our calendar page for today's Nepali (Bikram Sambat) date, updated daily with tithi, nakshatra, yoga, karan and festival details.",
  },
  {
    q: "What is the Nepali calendar?",
    a: "The Nepali calendar, known as Bikram Sambat (BS) or Nepali Patro, is the official calendar of Nepal. It is a solar calendar approximately 56 years and 8 months ahead of the Gregorian calendar. The new year starts in mid-April on Baisakh 1.",
  },
  {
    q: "What is Bikram Sambat?",
    a: "Bikram Sambat (विक्रम संवत्) is the calendar era used in the Nepali calendar system. It began in 57 BCE and is named after King Vikramaditya. It is the official calendar of Nepal and is about 56 years ahead of the Gregorian calendar.",
  },
  {
    q: "How do I convert AD to BS?",
    a: "Use our date converter tool to convert any Gregorian (AD) date to Bikram Sambat (BS). Our converter supports dates from 1943 AD (2000 BS) to 2043 AD (2100 BS).",
  },
  {
    q: "How do I convert BS to AD?",
    a: "Select the Bikram Sambat year, month, and day in our date converter and it will show the corresponding Gregorian (AD) date instantly.",
  },
  {
    q: "How many months are in the Nepali calendar?",
    a: "The Nepali calendar has 12 months: Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, and Chaitra. Each month has between 29 and 32 days.",
  },
  {
    q: "Is the Nepali calendar lunar or solar?",
    a: "The Nepali calendar is a solar calendar. The months are based on the tropical year, and the number of days in each month varies between 29 and 32 days depending on the year.",
  },
  {
    q: "When is the Nepali new year?",
    a: "The Nepali new year falls on Baisakh 1, which typically falls in mid-April. In 2083 BS, the new year was on April 14, 2026.",
  },
  {
    q: "What are the major Nepali festivals?",
    a: "The major festivals include Dashain, Tihar, Chhath, Holi, Shivaratri, Janai Purnima, Krishna Janmashtami, and Tij. Each has specific dates in the Bikram Sambat calendar.",
  },
  {
    q: "What is Dashain?",
    a: "Dashain (विजया दशमी) is the biggest festival in Nepal, celebrating the victory of goddess Durga over demon Mahishasura. It is a 15-day festival falling in the month of Ashwin in the Bikram Sambat calendar.",
  },
  {
    q: "What is today's tithi?",
    a: "Check our calendar page for today's complete panchang including tithi, nakshatra, yoga, karan, and sunrise/sunset times. The panchang updates daily.",
  },
  {
    q: "What is the gold price in Nepal today?",
    a: "Check our gold price page for the latest gold and silver rates in Nepal per tola and per 10 grams, as set by the Nepal Gold and Silver Dealers Association.",
  },
  {
    q: "What is the exchange rate in Nepal today?",
    a: "Check our forex page for Nepal Rastra Bank's official exchange rates for USD, EUR, GBP, AUD and other major currencies.",
  },
  {
    q: "How accurate is this Nepali calendar?",
    a: "Our calendar data is based on the Nepal Panchanga Nirnayak Samiti (Nepal Calendar Determination Committee) calculations, which is the authoritative body for Nepali calendar calculations in Nepal.",
  },
  {
    q: "Can I use this Nepali calendar on my phone?",
    a: "Yes, our website is fully responsive and works on all mobile devices. You can also add it to your home screen for quick access like a native app.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <div>
      <Navbar9 />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">नेपाली पात्रो</p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                नेपाली पात्रो २०८३
              </h1>
              <p className="mb-4 md:text-md">
                नेपालको आधिकारिक पात्रो — विक्रम संवत् २०८३ मा आजको मिति, तिथि,
                नक्षत्र र चाडपर्व हेर्नुहोस्। नेपाली पात्रो सन् (Gregorian)
                पात्रोभन्दा लगभग ५६ वर्ष अगाडि छ।
              </p>
              <p className="md:text-md">
                The Nepali Calendar (Bikram Sambat) is the official calendar of
                Nepal. Check today&apos;s date, tithi, festivals, horoscope, gold
                prices, forex rates and convert between BS and AD dates.
              </p>
            </div>
            <div className="rounded-lg border border-border-primary p-6 md:p-8">
              <CalendarGrid />
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <p className="mb-3 font-semibold md:mb-4">आजको पञ्चाङ्ग</p>
              <h2 className="text-4xl font-bold md:text-6xl">
                आजको दिनको पूरा विवरण
              </h2>
              <p className="mt-3 md:mt-4">
                मिति, महिना र आगामी पर्वका बारेमा जानकारी हरेक दिन आफैँ
                अद्यावधिक हुन्छ।
              </p>
            </div>
            <TodayInfo />
          </div>
        </section>

        <section className="bg-background-secondary px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <h2 className="text-4xl font-bold md:text-6xl">
                थप सेवाहरू
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/rashifal/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">राशिफल</h3>
                <p>सबै १२ राशिको आजको दैनिक राशिफल पढ्नुहोस्।</p>
              </a>
              <a
                href="/date-converter/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  मिति रूपान्तरण
                </h3>
                <p>
                  विक्रम संवत् र सन् बीच मिति रूपान्तरण गर्नुहोस्।
                </p>
              </a>
              <a
                href="/gold/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  सुन र चाँदीको मूल्य
                </h3>
                <p>नेपालमा आजको सुन र चाँदीको ताजा भाउ।</p>
              </a>
              <a
                href="/forex/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  विनिमय दर
                </h3>
                <p>नेपाल राष्ट्र बैंकको आधिकारिक विनिमय दर।</p>
              </a>
              <a
                href="/2083/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  वि.सं. २०८३
                </h3>
                <p>२०८३ का सबै चाडपर्व र सार्वजनिक बिदा।</p>
              </a>
              <a
                href="/holidays/2083/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  सार्वजनिक बिदा २०८३
                </h3>
                <p>विक्रम संवत् २०८३ का सबै सार्वजनिक बिदाहरू।</p>
              </a>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="mb-10 text-4xl font-bold md:mb-14 md:text-6xl">
              बारम्बार सोधिने प्रश्नहरू
            </h2>
            <div className="space-y-8">
              {faqItems.map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold">{item.q}</h3>
                  <p className="mt-2 text-neutral-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
