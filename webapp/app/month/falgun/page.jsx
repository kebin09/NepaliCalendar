import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "फागुन महिना — Falgun 2083 | Holi & Maha Shivaratri Month",
  description:
    "फागुन (Falgun) is the eleventh month of Bikram Sambat, celebrated for Maha Shivaratri at Pashupatinath, Holi colors, Prajatantra Diwas and the arrival of spring. Explore its festivals, weather and astrology.",
  keywords: [
    "falgun",
    "falgun month",
    "फागुन महिना",
    "holi fagu purnima",
    "maha shivaratri pashupatinath",
    "prajatantra diwas democracy day",
    "gyalpo lhosar",
    "nepali calendar falgun",
    "kumbha sankranti",
    "spring in nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/falgun/",
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
      name: "Falgun",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/falgun/",
    },
  ],
};

const festivals = [
  {
    name: "महाशिवरात्रि (Maha Shivaratri)",
    detail:
      "Hundreds of thousands of devotees and naga sadhus fill Pashupatinath through the night, offering bilva leaves and milk on Falgun Krishna Chaturdashi.",
  },
  {
    name: "होली / फागु पूर्णिमा (Holi)",
    detail:
      "The chir pole is raised at Basantapur, bonfires burn on Holika Dahan, and the next day streets erupt with abir, lola and water balloons.",
  },
  {
    name: "प्रजातन्त्र दिवस (Prajatantra Diwas)",
    detail:
      "Falgun 7 commemorates the 1951 fall of the Rana regime, honored with official ceremonies at the Democracy Martyrs Memorial.",
  },
  {
    name: "ग्याल्पो ल्होसार (Gyalpo Lhosar)",
    detail:
      "Sherpa and Tibetan communities welcome their new year with monastery dances, guthuk soup and family reunions, usually within Falgun.",
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
              विक्रम संवत् २०८३ · एघारौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              फागुन महिना — Falgun 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              फागुन, spanning mid-February to mid-March, is when Nepal shakes
              off winter. Spring blossoms open across the valley just as the
              month delivers two spectacular celebrations — the night-long
              devotion of Maha Shivaratri and the riotous colors of Holi.
              Because both follow lunar tithi, their dates shift yearly; check
              our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              for this year&apos;s exact days.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              From Sacred Night to Colorful Chaos
            </h2>
            <p className="mb-4">
              Falgun begins its spiritual climb with Shivaratri. Legend says
              Shiva performed the tandava on this night, and couples pray at
              the Pashupatinath ghats for marital harmony. Sadhus arrive weeks
              early, camping along the Bagmati, while all-night bhajan
              mandalis keep temples awake till dawn. The government even
              grants a public holiday so devotees can fast without worry.
            </p>
            <p>
              Days later the mood flips entirely. A bamboo chir draped with
              cloth strips rises above Basantapur Durbar Square to announce
              Fagu Purnima. After Holika Dahan bonfires symbolize the burning
              of the demoness&apos;s pride, and by morning everyone — tourist,
              toddler and grandparent alike — wears a mask of pink and green.
              The Terai celebrates one day later, following the tithi timing
              used in Madhesh province.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Falgun
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
                Basanta ritu officially begins. Mornings stay crisp around
                8°C, but afternoons climb past 25°C in the valley, coaxing
                peach and apricot blossoms out. Light spring showers may
                interrupt Holi games, and breezy afternoons make Falgun prime
                kite-flying weather once again before summer heat builds.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                Wheat enters the grain-filling stage and turns from green to
                gold. Farmers harvest mustard, broadcast moong and urad as
                spring pulses, and prepare nurseries for summer vegetables.
                Bee activity surges across mustard fields, and orchardists
                prune and spray fruit trees ahead of the blossom season.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Kumbha Sankranti moves the Sun into Kumbha (Aquarius) rashi
                during Falgun. The month derives from the Purva and Uttara
                Phalguni nakshatras, presided over by Aryaman and Bhaga,
                deities of contracts and prosperity — fitting for a month of
                social bonding. Jyotishis regard Shivaratri as the single most
                powerful night of the year for Shiva sadhana, when planetary
                positions naturally lift consciousness.
              </p>
              <p>
                Follow daily nakshatra shifts on our{" "}
                <a href="/rashifal/" className="underline">
                  rashifal page
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
              <a href="/month/magh/" className="underline">
                Previous month: Magh
              </a>
              <a href="/month/chaitra/" className="underline">
                Next month: Chaitra
              </a>
              <a href="/festival/holi/" className="underline">
                Holi Festival Guide
              </a>
              <a href="/festival/shivaratri/" className="underline">
                Maha Shivaratri
              </a>
              <a href="/date-converter/" className="underline">
                Convert Falgun Dates
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
