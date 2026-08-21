import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "श्रावण महिना — Shrawan 2083 | Nag Panchami & Janai Purnima",
  description:
    "श्रावण (Shrawan) is the fourth month of Bikram Sambat, famous for Nag Panchami, Shrawan Somvar fasting, Janai Purnima and the green monsoon landscape. Learn its festivals, farming and astrology.",
  keywords: [
    "shrawan",
    "shrawan month",
    "श्रावण महिना",
    "nag panchami",
    "janai purnima",
    "shrawan sombar vrat",
    "chaturmas",
    "nepali calendar shrawan",
    "kwati festival",
    "karka sankranti",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/shrawan/",
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
      name: "Shrawan",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/shrawan/",
    },
  ],
};

const festivals = [
  {
    name: "नाग पञ्चमी (Nag Panchami)",
    detail:
      "On Shrawan Shukla Panchami, devotees paste pictures of Nagas above doorways and offer milk at serpent shrines such as Nagpokhari and Taudaha for protection from snakebite.",
  },
  {
    name: "जनै पूर्णिमा (Janai Purnima)",
    detail:
      "Tagadhar men renew the sacred janai thread, priests tie raksha sutra on wrists, and Newar households cook kwati — a nine-bean sprout soup symbolizing warmth and nutrition.",
  },
  {
    name: "सोमबार ब्रत (Shrawan Somvar Vrat)",
    detail:
      "Every Monday of the month, devotees fast and pour milk over Shiva lingams, with Pashupatinath drawing enormous queues from dawn till late night.",
  },
  {
    name: "हरिशयनी एकादशी र चतुर्मास",
    detail:
      "The sleeping of Lord Vishnu marks the start of Chaturmas, four months of restrained celebration, extra devotion and pilgrimage.",
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
              विक्रम संवत् २०८३ · चौथो महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              श्रावण महिना — Shrawan 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              श्रावण, spanning mid-July to mid-August, is the wettest and one
              of the most devotional months of the Nepali year. Rain drums on
              tin roofs while temple courtyards fill with devotees carrying
              milk pots and kanwar water for Lord Shiva. To keep track of
              Somvar vrat dates, Nag Panchami and Janai Purnima, thousands
              rely on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              throughout the month.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why Shrawan Is Sacred
            </h2>
            <p className="mb-4">
              Shrawan belongs to Shiva. According to legend, the churning of
              the ocean (Samudra Manthan) released halahala poison, which
              Shiva swallowed to protect creation; the waters of Shravana are
              said to carry that purifying memory, which is why bathing and
              abhishekam gain special merit now. Every Monday, married women
              and young devotees observe strict fasts, believing the vrat
              brings marital harmony and fulfilled wishes.
            </p>
            <p>
              The month also opens Chaturmas, the holy four-month residence
              of Vishnu in cosmic sleep. Weddings, bratabandha and housewarmings
              pause, while katha recitals, Ekadashi observances and pilgrimages
              multiply. Kanwar pilgrims walk miles carrying Ganga jal from
              Trishuli and Bagmati ghats to offer at Pashupatinath, turning
              highways into rivers of saffron-clad devotion.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Shrawan
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
                Shrawan sits at peak monsoon. Rainfall totals often exceed 300
                mm in Kathmandu and far more along the Annapurna foothills.
                Rivers run chocolate-brown, leeches patrol jungle trails, and
                humidity clings to everything. Yet the countryside is at its
                most photogenic — rice paddies mirror the sky and every hill
                looks freshly painted green.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                With transplantation complete, farmers shift to care: weeding
                paddies, applying manure and guarding against pests that thrive
                in damp heat. Maize dries in lofts, millet seedlings are
                transplanted on slopes, and kitchen gardens overflow with
                pumpkins, beans and iskus (spiny gourd) that define monsoon
                cooking.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                The Sun moves through Karka (Cancer) rashi for most of
                Shrawan, having entered at Karka Sankranti that opened
                Dakshinayana. The month is named for the Shravana nakshatra,
                ruled by Vishnu himself, which explains why thread renewal and
                Vishnu-related vrats cluster here. Jupiter&apos;s influence on
                Thursdays and Shiva&apos;s on Mondays make these weekdays
                especially potent for worship according to traditional
                panchang readers.
              </p>
              <p>
                Read weekday-wise guidance on our{" "}
                <a href="/jyotish/" className="underline">
                  jyotish
                </a>{" "}
                page.
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
              <a href="/month/ashadh/" className="underline">
                Previous month: Ashadh
              </a>
              <a href="/month/bhadra/" className="underline">
                Next month: Bhadra
              </a>
              <a href="/festival/nag-panchami/" className="underline">
                Nag Panchami
              </a>
              <a href="/festival/janai-purnima/" className="underline">
                Janai Purnima
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
