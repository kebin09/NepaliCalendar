import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";
import { CalendarGrid } from "./components/CalendarGrid";
import { TodayInfo } from "./components/TodayInfo";

export const metadata = {
  title: "आजको नेपाली मिति, तिथि र पर्व | Nepali Calendar Today",
  description:
    "आजको विक्रम संवत् मिति, तिथि, नक्षत्र र आगामी चाडपर्व हेर्नुहोस्। Check today's Bikram Sambat date with tithi, nakshatra and festival details.",
  keywords: [
    "nepali date today",
    "आजको मिति",
    "nepali calendar today",
    "bikram sambat date",
    "nepali tithi",
    "nepali panchang",
    "today nepali date",
    "nepali festival calendar",
    "नेपाली पात्रो आजको",
    "nepali nakshatra",
  ],
  openGraph: {
    title: "आजको नेपाली मिति, तिथि र पर्व | Nepali Calendar",
    description:
      "आजको विक्रम संवत् मिति, तिथि, नक्षत्र र आगामी चाडपर्व हेर्नुहोस्।",
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/calendar/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">
                <span className="lang-ne">नेपाली पात्रो</span>
                <span className="lang-en">Nepali Calendar</span>
              </p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                <span className="lang-ne">आजको मिति, तिथि र पर्व एकै ठाउँमा</span>
                <span className="lang-en">
                  Today&apos;s Date, Tithi &amp; Festivals in One Place
                </span>
              </h1>
              <p className="md:text-md">
                <span className="lang-ne">
                  विक्रम संवत् र सन् दुवैमा आजको मिति हेर्नुहोस्, राशिफल पढ्नुहोस्
                  र आगामी चाडपर्वका बारेमा जानकारी पाउनुहोस्।
                </span>
                <span className="lang-en">
                  View today&apos;s date in both Bikram Sambat and Gregorian,
                  read your rashifal and get information about upcoming
                  festivals.
                </span>
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
              <p className="mb-3 font-semibold md:mb-4">
                <span className="lang-ne">आजको पञ्चाङ्ग</span>
                <span className="lang-en">Today&apos;s Panchang</span>
              </p>
              <h2 className="text-4xl font-bold md:text-6xl">
                <span className="lang-ne">आजको दिनको पूरा विवरण</span>
                <span className="lang-en">Complete Details of Today</span>
              </h2>
              <p className="mt-3 md:mt-4">
                <span className="lang-ne">
                  मिति, महिना र आगामी पर्वका बारेमा जानकारी हरेक दिन आफैँ
                  अद्यावधिक हुन्छ।
                </span>
                <span className="lang-en">
                  Information about the date, month and upcoming festivals
                  updates automatically every day.
                </span>
              </p>
            </div>
            <TodayInfo />
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
