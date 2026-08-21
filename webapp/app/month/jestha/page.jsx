import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "जेष्ठ महिना — Jestha 2083 | Second Month of Nepali Calendar",
  description:
    "जेष्ठ (Jestha) is the second month of Bikram Sambat, known for intense heat, the Rato Machhindranath chariot festival, Ganga Dashahara and Sithi Nakha. Explore its festivals, farming cycle and astrology.",
  keywords: [
    "jestha",
    "jestha month",
    "जेष्ठ महिना",
    "nepali calendar jestha",
    "rato machhindranath",
    "sithi nakha",
    "ganga dashahara",
    "matatirtha aunsi",
    "bikram sambat second month",
    "vrishabh sankranti",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/jestha/",
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
      name: "Jestha",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/jestha/",
    },
  ],
};

const festivals = [
  {
    name: "मातातीर्थ औंसी (Matatirtha Aunsi)",
    detail:
      "In years when the new moon falls within Jestha, mothers are honored with gifts and sweets, while those who have lost their mothers bathe at Matatirtha pond near Kathmandu.",
  },
  {
    name: "रातो मच्छिन्द्रनाथ रथयात्रा",
    detail:
      "The towering chariot of the rain deity Bunga Dyah is dragged through Patan and Lagankhel over weeks, praying for timely monsoon rains.",
  },
  {
    name: "गङ्गा दशहरा (Ganga Dashahara)",
    detail:
      "On Jestha Shukla Dashami, devotees bathe in rivers to cleanse ten types of sins, honoring the descent of the Ganga to earth.",
  },
  {
    name: "सिथि नखः (Sithi Nakha)",
    detail:
      "The Newar community cleans wells, stone spouts and ponds on Kumar Sasthi, an eco-conscious festival celebrated with a feast of wat (fried bread) and pyachi.",
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
              विक्रम संवत् २०८३ · दोस्रो महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              जेष्ठ महिना — Jestha 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              जेष्ठ, running from mid-May to mid-June, is the hottest stretch
              of the Nepali year, yet it pulses with devotion. As temperatures
              soar, communities pray for rain, honor their mothers and prepare
              the land for the paddy season that follows. Whether you are
              tracking tithi dates on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              or planning a visit to the Machhindranath chariot, Jestha offers
              a vivid window into Nepal&apos;s living traditions.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why Jestha Matters
            </h2>
            <p className="mb-4">
              Jestha is fundamentally a month of anticipation. Farmers scan
              the sky for the first monsoon clouds, and the grand Rato
              Machhindranath festival in Lalitpur embodies exactly that hope —
              the red god of rain is pulled through the streets so that the
              coming Ashadh plantings will not fail. The chariot&apos;s slow
              journey, punctuated by bhajan troupes and pulu kisi (elephant
              dance), can last several weeks and ends only when the bhoto
              (bejeweled vest) is displayed, a ritual tied to rainfall omens.
            </p>
            <p>
              The month also carries deep family emotion. Matatirtha Aunsi,
              Nepal&apos;s Mother&apos;s Day, brings children home with sweets,
              gifts and blessings-seeking rituals. For those whose mothers
              have passed away, the holy pond of Matatirtha becomes a place of
              quiet remembrance, showing how Jestha balances celebration with
              compassion.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Jestha
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
                Jestha delivers peak pre-monsoon heat. The Tarai frequently
                crosses 38°C, Kathmandu hovers in the low thirties, and humid
                westerly winds trigger sudden evening thunderstorms known
                locally as kalbaishakhi. Water levels in rivers and stone
                spouts drop to their lowest, which is precisely why the
                cleaning ritual of Sithi Nakha carries such practical wisdom.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                Fields rest briefly before the great rush. Farmers spread
                compost, repair irrigation channels and raise paddy seedlings
                in carefully tended nurseries called bej. Maize weeding keeps
                hill households busy, while mango, jackfruit and litchi
                orchards fill markets with the season&apos;s first fruits.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                After Vrishabh Sankranti, the Sun transits Vrishabha (Taurus)
                rashi throughout most of Jestha. The month derives its name
                from the Jyeshtha nakshatra, ruled by Indra, king of the gods
                — fitting for a month defined by prayers for rain. Classical
                muhurat shastra traditionally avoids Jestha for weddings and
                upanayanam, considering the scorching energy of the month
                better suited to tapasya, fasting and service than to new
                beginnings.
              </p>
              <p>
                Check daily planetary positions on our{" "}
                <a href="/jyotish/" className="underline">
                  jyotish
                </a>{" "}
                page before fixing any ceremony.
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
              <a href="/month/baisakh/" className="underline">
                Previous month: Baisakh
              </a>
              <a href="/month/ashadh/" className="underline">
                Next month: Ashadh
              </a>
              <a href="/festival/rato-machhindranath/" className="underline">
                Rato Machhindranath Jatra
              </a>
              <a href="/festival/matatirtha-aunsi/" className="underline">
                Matatirtha Aunsi
              </a>
              <a href="/converter/" className="underline">
                Date Converter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
