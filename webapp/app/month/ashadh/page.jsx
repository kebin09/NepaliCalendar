import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "असार महिना — Ashadh 2083 | Ropain & Monsoon Month",
  description:
    "असार (Ashadh) is the third month of Bikram Sambat, the heart of monsoon and rice-planting season with Asar Pandhra, Guru Purnima and Dakshinayana. Explore its festivals, farming and astrology.",
  keywords: [
    "ashadh",
    "asar month nepal",
    "असार महिना",
    "ropain rice planting festival",
    "asar pandhra dahi chiura",
    "guru purnima ashadh",
    "nepali calendar asar",
    "monsoon season nepal",
    "mithun sankranti",
    "dakshinayana start",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/ashadh/",
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
      name: "Ashadh",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/ashadh/",
    },
  ],
};

const festivals = [
  {
    name: "रोपाइँ / असार १५ (Ropain & Asar Pandhra)",
    detail:
      "Villages turn transplanting into a festival — mud-splashed groups race to plant seedlings while sharing dahi-chiura of curd, beaten rice and fresh cucumbers.",
  },
  {
    name: "गुरु पूर्णिमा (Guru Purnima)",
    detail:
      "On Ashadh Purnima, students honor teachers, disciples offer dakshina to gurus, and Buddhists mark the day Buddha first taught at Sarnath.",
  },
  {
    name: "दक्षिणायन प्रारम्भ (Dakshinayana Begins)",
    detail:
      "Karka Sankranti near month-end starts the southern six-month journey of the sun, opening the period tradition reserves for spiritual discipline.",
  },
  {
    name: "गुन्ला प्रारम्भ (Gunla)",
    detail:
      "The sacred Newar Buddhist month begins around this time, with daily morning music of gunla bajan processions to Swayambhu and bahals.",
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
              विक्रम संवत् २०८३ · तेस्रो महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              असार महिना — Ashadh 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              असार, from mid-June to mid-July, is the month that feeds Nepal.
              Monsoon clouds burst over the Chure and Mahabharat ranges,
              terraces flood into silver mirrors, and millions bend to plant
              the paddy that becomes daily dal-bhat. No other month shows so
              clearly why Nepalis call agriculture their backbone — and our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              marks every tithi farmers need through the season.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              The Joy of Ropain
            </h2>
            <p className="mb-4">
              On Asar 15, known as Ropain Diwas or Asar Pandhra, planting
              becomes celebration. Friends and relatives wade into knee-deep
              mud together, folk singers trade improvised asare geet verses,
              and anyone who slips gets playfully coated in clay. The reward
              afterward is a shared plate of dahi-chiura — curd, beaten rice,
              banana and cucumber — eaten right at the field edge. In recent
              years even city hotels and tourism boards host ropain events so
              urban children experience the ritual firsthand.
            </p>
            <p>
              Spiritually, Ashadh opens with Guru Purnima, honoring the
              teacher who removes darkness just as clouds release rain.
              Newar Buddhists meanwhile enter Gunla, a month of heightened
              devotion when drums and cymbals echo toward hilltop stupas each
              dawn. Because heavy rain limits travel, communities turn inward,
              making Ashadh Nepal&apos;s most intimate festival season.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Ashadh
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
                Ashadh is monsoon proper. Rainfall arrives in multi-day waves,
                swelling the Koshi, Gandaki and Karnali rivers, cooling June
                heat but raising landslide risk on highways. Humidity sits
                high, mushrooms sprout overnight in terraced shade, and frogs
                — welcomed as rain omens — chorus through every night.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                This is peak transplantation. Seedlings raised in Jestha
                nurseries are uprooted in bundles and pressed into puddled
                fields row by row, often with labor-exchange systems like
                parma. Maize harvests begin in lower hills, jute retting
                fills eastern Tarai ponds, and farmers watch the sky,
                knowing timely Asar rains decide the whole year&apos;s food
                supply.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Mithuna Sankranti keeps the Sun in Mithuna (Gemini) rashi for
                most of Ashadh. The lunar mansion of the full moon here gives
                the Sanskrit name Ashadha, tied to the Purvashadha and
                Uttarashadha nakshatras — stars of invincibility and lasting
                victory. Jyotishis treat Dakshinayana, beginning at Karka
                Sankranti, as the half-year favoring sadhana over expansion;
                hence weddings traditionally wait until after Devshayani
                Ekadashi closes the first holy phase.
              </p>
              <p>
                See sankranti timings on our{" "}
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
              <a href="/month/jestha/" className="underline">
                Previous month: Jestha
              </a>
              <a href="/month/shrawan/" className="underline">
                Next month: Shrawan
              </a>
              <a href="/festival/guru-purnima/" className="underline">
                Guru Purnima
              </a>
              <a href="/festival/ropain/" className="underline">
                Ropain Festival
              </a>
              <a href="/calendar/" className="underline">
                Today&apos;s Tithi
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
