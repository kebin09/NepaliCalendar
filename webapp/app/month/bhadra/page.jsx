import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "भाद्र महिना — Bhadra 2083 | Teej, Gai Jatra & Janmashtami",
  description:
    "भाद्र (Bhadra) is the fifth month of Bikram Sambat featuring Gai Jatra, Krishna Janmashtami, Kushe Aunsi and Haritalika Teej. Explore its festivals, retreating monsoon weather, farming and astrology.",
  keywords: [
    "bhadra",
    "bhadra month",
    "भाद्र महिना",
    "teej festival",
    "gai jatra",
    "krishna janmashtami",
    "kushe aunsi father's day",
    "rishi panchami",
    "nepali calendar bhadra",
    "indra jatra",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/bhadra/",
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
      name: "Bhadra",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/bhadra/",
    },
  ],
};

const festivals = [
  {
    name: "गाईजात्रा (Gai Jatra)",
    detail:
      "Families who lost a loved one during the year lead decorated cows or costumed boys through the streets of Kathmandu Valley, blending grief with sharp social satire.",
  },
  {
    name: "श्रीकृष्ण जन्माष्टमी (Krishna Janmashtami)",
    detail:
      "Devotees fast till midnight and throng the stone Krishna Mandir at Patan Durbar Square, singing bhajans to celebrate the birth of Lord Krishna.",
  },
  {
    name: "कुशे औंसी (Kushe Aunsi)",
    detail:
      "Nepal's Father's Day: children honor living fathers with sweets and gifts, while sons perform shraddha tarpan for departed fathers at Gokarna.",
  },
  {
    name: "हरितालिका तीज (Haritalika Teej)",
    detail:
      "Women clad in brilliant red fast — some without even water — sing and dance for marital bliss, then conclude with Rishi Panchami purification rites.",
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
              विक्रम संवत् २०८३ · पाँचौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              भाद्र महिना — Bhadra 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              भाद्र, stretching from mid-August to mid-September, is perhaps
              the most emotionally rich month of the Nepali calendar. Within
              a few weeks it holds remembrance, fatherhood, divine birth and
              womanhood — Gai Jatra&apos;s tender satire, Kushe Aunsi&apos;s
              filial devotion, Janmashtami&apos;s midnight joy and Teej&apos;s
              dazzling red processions. Mark these shifting tithi dates with
              our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              so you never miss a celebration.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Culture and Meaning
            </h2>
            <p className="mb-4">
              Gai Jatra began in the 17th century when Queen Rajyalakshmi,
              mourning her son, was shown by King Pratap Malla that every
              household in Kathmandu had lost someone. Today the procession
              helps families accept loss publicly while comedians and
              cross-dressed performers mock politicians and social evils — a
              rare festival where tears and laughter share the same street.
            </p>
            <p>
              Teej transforms the month again. Days before the fasting night,
              markets overflow with red saris, glass bangles and sindoor.
              Women gather at sisters&apos; homes, feast on dar khane din,
              then spend the vrat night singing folk songs until dawn at
              temples of Shiva. Rishi Panchami follows, when seven arundhati
              herbs and mud from sacred rivers are used for ritual cleansing,
              completing one of Nepal&apos;s most powerful expressions of
              female solidarity.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Bhadra
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
                Bhadra watches the monsoon loosen its grip. Early weeks still
                bring heavy downpours and humid days, but by month&apos;s end
                skies begin to clear, revealing snow peaks washed clean.
                Rivers recede from flood stage, evenings turn noticeably
                cooler, and the valley&apos;s famous autumn light starts to
                appear between clouds.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                Rice paddies now stand tall and heavy with filling grain.
                Farmers drain excess water, watch for stem borers and blast
                disease, and prepare threshing floors. In the high hills,
                buckwheat blooms pinkish-white, while households begin drying
                maize and planning labor for the great Dashain-era harvest
                just ahead.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Simha Sankranti places the Sun in Simha (Leo) rashi through
                much of Bhadra. The month is linked to the Purva and Uttara
                Bhadrapada nakshatras, whose gentle deities Ajapada and Ahir
                Budhnya govern deep waters and ancestral realms — fitting for
                a month of shraddha rituals and remembrance. Jyotish texts
                note that Krishna paksha observances in Bhadra carry special
                potency for pacifying pitru dosha.
              </p>
              <p>
                Consult your personal chart on our{" "}
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
              <a href="/month/shrawan/" className="underline">
                Previous month: Shrawan
              </a>
              <a href="/month/ashwin/" className="underline">
                Next month: Ashwin
              </a>
              <a href="/festival/teej/" className="underline">
                Haritalika Teej
              </a>
              <a href="/festival/gai-jatra/" className="underline">
                Gai Jatra
              </a>
              <a href="/festival/krishna-janmashtami/" className="underline">
                Krishna Janmashtami
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
