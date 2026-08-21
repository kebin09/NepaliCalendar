import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "माघ महिना — Magh 2083 | Maghe Sankranti & Saraswati Puja",
  description:
    "माघ (Magh) is the tenth month of Bikram Sambat, opening with Maghe Sankranti and the Tharu Maghi festival, followed by Basanta Panchami Saraswati Puja. Explore its festivals, weather, farming and astrology.",
  keywords: [
    "magh",
    "magh month",
    "माघ महिना",
    "maghe sankranti",
    "maghi tharu festival",
    "basanta panchami",
    "saraswati puja",
    "uttarayana",
    "nepali calendar magh",
    "makar sankranti nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/magh/",
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
      name: "Magh",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/magh/",
    },
  ],
};

const festivals = [
  {
    name: "माघे संक्रान्ति (Maghe Sankranti)",
    detail:
      "On Magh 1, families eat yam, ghee, chaku and laddu made of til, bathing at confluences like Devghat and Trivenighat to mark the northward turn of the Sun.",
  },
  {
    name: "माघी (Maghi)",
    detail:
      "The Tharu community celebrates its new year with mahautari dances, community feasts, election of village leaders and settlement of old accounts.",
  },
  {
    name: "श्रीपञ्चमी / सरस्वती पूजा (Basanta Panchami)",
    detail:
      "Students worship goddess Saraswati in schools, children write their first letters, and the classical Basanta raga is sung at Hanuman Dhoka.",
  },
  {
    name: "स्वस्थानी पूर्णिमा समापन",
    detail:
      "The Swasthani Brata Katha concludes on Magh Purnima, when fasting devotees complete 31 days of recital and distribute prasad.",
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
              विक्रम संवत् २०८३ · दशौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              माघ महिना — Magh 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              माघ, from mid-January to mid-February, is the turning point of
              Nepali winter. It opens with Maghe Sankranti — the day the sun
              begins its Uttarayana journey — and closes with the yellow
              bloom of Saraswati Puja. Between them lie Tharu new-year
              festivities and the final chapters of Swasthani katha. Confirm
              sankranti and puja timings on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              before the celebrations begin.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why Maghe Sankranti Matters
            </h2>
            <p className="mb-4">
              According to the Mahabharata, the warrior Bhishma waited on his
              bed of arrows until Uttarayana began, choosing to leave his body
              during this sacred solar window. That belief makes Magh 1 a day
              for holy dips, tarpan to ancestors and eating energy-rich foods
              — yam, sweet potato, ghee and chaku — that fortify the body
              against the remaining cold. Markets do brisk business selling
              sugarcane, til laddu and boora before dawn.
            </p>
            <p>
              For the Tharu people of the Tarai, Maghi is far more than a
              sankranti: it is their new year, a time when debts are cleared,
              disputes settled and new village leadership chosen amid all-night
              dancing. A week later, Shreepanchami fills every school courtyard
              with children polishing slates and worshipping Saraswati,
              praying for wisdom as the academic year gathers pace.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Magh
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
                Mornings remain biting cold — Kathmandu can touch 0°C and hill
                hamlets see frost on rooftops — but afternoons lengthen and
                warm noticeably once Sankranti passes. The famous yellow
                mustard fields of Chitwan and Kailali reach full bloom, and
                clear skies make Magh excellent for wildlife safaris in
                Bardiya and Chitwan National Parks.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                Sugarcane crushing peaks, supplying chaku for Sankranti
                sweets. Farmers irrigate winter wheat during its tillering
                stage, harvest mustard seed, and plant early potatoes in the
                Tarai. Beekeepers move hives toward blooming mustard, ensuring
                honey flows and pollination for the oilseed crop.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Makara Sankranti on Magh 1 shifts the Sun into Makara
                (Capricorn) rashi and inaugurates Uttarayana — the six-month
                arc considered favorable for spiritual progress and, from a
                muhurat view, the resumption of weddings after kharmas. The
                month honors the Magha nakshatra, ruled by ancestors, which
                strengthens Magh&apos;s connection with pitru rites and holy
                bathing.
              </p>
              <p>
                Plan ceremonies using lagna tables on our{" "}
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
              <a href="/month/poush/" className="underline">
                Previous month: Poush
              </a>
              <a href="/month/falgun/" className="underline">
                Next month: Falgun
              </a>
              <a href="/festival/maghe-sankranti/" className="underline">
                Maghe Sankranti
              </a>
              <a href="/festival/saraswati-puja/" className="underline">
                Saraswati Puja
              </a>
              <a href="/festival/maghi/" className="underline">
                Maghi Festival
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
