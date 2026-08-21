import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "पौष महिना — Poush 2083 | Coldest Month & Tamu Losar",
  description:
    "पौष (Poush) is the ninth month of Bikram Sambat — the coldest stretch of the year featuring Tamu Losar, Christmas and the start of Swasthani Brata Katha. Learn its festivals, weather, farming and astrology.",
  keywords: [
    "poush",
    "poush month",
    "पौष महिना",
    "tamu losar gurung new year",
    "swasthani brata katha",
    "coldest month nepal",
    "nepali calendar poush",
    "dhanu sankranti",
    "pushya nakshatra",
    "kharmas",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/poush/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nepalicalendar.kebinmaharjan.com.np/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Months",
      item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Poush",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/poush/",
    },
  ],
};

const festivals = [
  {
    name: "तमु ल्होसार (Tamu Losar)",
    detail:
      "On Poush 15, the Gurung community welcomes its new year with rodhi gatherings, seelu dance, traditional dress parades and feasts of sikas and raksi.",
  },
  {
    name: "क्रिसमस (Christmas)",
    detail:
      "December 25 falls within Poush; churches across Kathmandu, Pokhara and the eastern hills hold candlelight services while markets sell Christmas trees and cakes.",
  },
  {
    name: "स्वस्थानी ब्रत कथा प्रारम्भ",
    detail:
      "From Poush Purnima, devotees begin a month of daily Swasthani recitals, fasting women lighting 108 diyos each evening for family welfare.",
  },
  {
    name: "पौष संक्रान्ति अवधि (Kharmas)",
    detail:
      "The solar month of Poush is treated as kharmas, when auspicious ceremonies pause and devotion, charity and scripture reading take priority.",
  },
];

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <p className="mb-3 font-semibold md:mb-4">
              विक्रम संवत् २०८३ · नौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              पौष महिना — Poush 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              पौष, running mid-December to mid-January, is the coldest month
              of the Nepali year — yet its long nights glow with storytelling,
              bonfires and community new years. From Gurung rodhi songs at
              Tamu Losar to nightly Swasthani katha circles, Poush turns
              winter into a season of warmth. Track its tithi and sankranti
              dates on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              as you plan the month.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Winter Traditions of Poush
            </h2>
            <p className="mb-4">
              Traditional households treat Poush as a time to slow down.
              Elders gather children around hearths for folk tales, farmers
              rest after harvest, and kitchens lean on warming foods — dhido,
              masu-bhat, and chaku-rich sweets. The concept of kharmas
              discourages weddings and housewarmings now, so social energy
              channels instead into charity, temple visits and recitals.
            </p>
            <p>
              The most beloved ritual is the Swasthani Brata Katha cycle that
              begins on Poush Purnima. For thirty-one consecutive evenings,
              families read the story of goddess Swasthani and Lord
              Shiva&apos;s trials, while unmarried women fast in hope of good
              husbands and mothers pray for children. In Gurung villages,
              meanwhile, Tamu Losar fills courtyards with drums as elders
              bless the coming agricultural cycle.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Poush
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {festivals.map((f) => (
                <li
                  key={f.name}
                  className="rounded-lg border border-border-primary p-6"
                >
                  <h3 className="mb-2 text-xl font-semibold">{f.name}</h3>
                  <p>{f.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Weather &amp; Season
              </h2>
              <p className="mb-4">
                Expect the year&apos;s harshest cold. Kathmandu mornings hover
                near freezing, hill districts like Jumla and Mustang drop well
                below zero, and dense Terai fog disrupts highways and flights
                for days. Daylight is shortest around the solstice, yet sunny
                middays remain pleasant enough for rooftop sunbathing — a
                cherished Nepali winter pastime.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                Fields mostly rest under winter wheat and barley that grow
                slowly in the chill. Farmers mulch vegetable beds against
                frost, tend polyhouse tomatoes, and drive herds down from
                high pastures. In river valleys, sugarcane pressing begins,
                filling bazaars with fresh gud and chaku for the Sankranti
                sweets just ahead.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Dhanu Sankranti keeps the Sun in Dhanu (Sagittarius) rashi for
                nearly all of Poush. The month is named for the Pushya
                nakshatra, considered the most nourishing star in Vedic
                astrology even though kharmas restricts material ventures.
                Jyotish tradition holds that spiritual practices performed in
                Poush yield multiplied merit, which is why vrats, japa and
                dana dominate rather than celebrations.
              </p>
              <p>
                Read daily planetary notes on our{" "}
                <a href="/jyotish/" className="underline">
                  jyotish page
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Explore Related Pages
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/month/mangsir/" className="underline">
                Previous month: Mangsir
              </a>
              <a href="/month/magh/" className="underline">
                Next month: Magh
              </a>
              <a href="/festival/tamu-losar/" className="underline">
                Tamu Losar
              </a>
              <a href="/festival/swasthani-brata/" className="underline">
                Swasthani Brata Katha
              </a>
              <a href="/calendar/" className="underline">
                Today&apos;s Date
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
