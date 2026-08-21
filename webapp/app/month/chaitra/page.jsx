import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "चैत्र महिना — Chaitra 2083 | Last Month of Bikram Sambat",
  description:
    "चैत्र (Chaitra) is the twelfth and final month of Bikram Sambat, featuring Chaite Dashain, Ram Navami, Ghode Jatra and new year preparations. Explore its festivals, spring weather, farming and astrology.",
  keywords: [
    "chaitra",
    "chaitra month",
    "चैत्र महिना",
    "ghode jatra kathmandu",
    "chaite dashain ram navami",
    "nepali year end",
    "nepali calendar chaitra",
    "meena sankranti",
    "chitra nakshatra",
    "seto machhindranath jatra",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/chaitra/",
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
      name: "Chaitra",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/chaitra/",
    },
  ],
};

const festivals = [
  {
    name: "चैते दशैँ (Chaite Dashain)",
    detail:
      "A miniature Dashain on Chaitra Shukla Ashtami-Dashami, when devotees offer Durga puja and some households perform sacrifices recalling the Ram-Ravana war.",
  },
  {
    name: "राम नवमी (Ram Navami)",
    detail:
      "Temples recite the Ramayana and processions carry idols of Ram through Janakpur and Kathmandu to celebrate his birth.",
  },
  {
    name: "घोडेजात्रा (Ghode Jatra)",
    detail:
      "The Nepal Army parades galloping horses across Tundikhel, a ritual said to trample the resting place of the demon Tundi and keep Kathmandu safe.",
  },
  {
    name: "सेतो मच्छिन्द्रनाथ यात्रा",
    detail:
      "The white rain deity of Kathmandu is pulled in a tall chariot from Jamal to Lagan, blessing the valley before the paddy cycle restarts.",
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
              विक्रम संवत् २०८३ · बाह्रौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              चैत्र महिना — Chaitra 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              चैत्र, from mid-March to mid-April, closes the Bikram Sambat
              year with energy rather than rest. Spring storms roll over
              ripening wheat, students sit final exams, accountants close
              fiscal books, and Kathmandu thunders with Ghode Jatra — all
              while families prepare to welcome Naya Barsha. Count down the
              remaining days on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              and step into the new year prepared.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Year-End Rituals and Legends
            </h2>
            <p className="mb-4">
              Ghode Jatra is unique to the valley. Medieval chronicles say the
              demon Tundi was killed and buried beneath what is now Tundikhel;
              to prevent his revival, horses are raced over the ground each
              year amid cheering crowds and acrobatic displays by army riders.
              The same fortnight brings Seto Machhindranath&apos;s chariot
              swaying down Kathmandu&apos;s narrow lanes, its white deity
              asked for timely monsoon rains once more.
            </p>
            <p>
              Chaitra also carries a quieter, devotional side. Observant
              Hindus mark Chaitra Navaratri with nine days of fasting, and
              Ram Navami fills Ayodhya-linked Janakpur with pilgrims. In
              offices and shops, the month means halkhabar — closing ledgers,
              clearing credit and starting fresh notebooks for Baisakh 1, an
              accounting tradition older than modern software.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Chaitra
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
                Grishma knocks early. Afternoons in the Tarai cross 35°C,
                Kathmandu turns breezy and dry, and sudden evening
                thunderstorms with hail — kalbaishakhi again — refresh the
                air. Water shortages peak in hill towns, forest-fire risk
                rises, yet mornings remain ideal for rhododendron treks at
                mid elevations before the heat climbs higher.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                The wheat harvest begins in earnest toward month&apos;s end,
                with golden sheaves drying on rooftops and highways. Farmers
                sow moong and sesame after cutting, prepare maize fields for
                Baisakh sowing, and stock fodder. Mango orchards hang heavy
                with budding fruit, promising the litchi-and-mango abundance
                that follows the new year.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Meena Sankranti places the Sun in Meena (Pisces) rashi for
                most of Chaitra, the final sign of the zodiac wheel that
                completes just before Mesh Sankranti renews it. The month is
                named for the Chitra nakshatra, whose presiding deity
                Tvashtar, the celestial architect, inspires rebuilding and
                planning — perfect symbolism for year-end audits and new-year
                resolutions alike.
              </p>
              <p>
                Preview next year&apos;s dates with our{" "}
                <a href="/date-converter/" className="underline">
                  BS–AD converter
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
              <a href="/month/falgun/" className="underline">
                Previous month: Falgun
              </a>
              <a href="/month/baisakh/" className="underline">
                Next month: Baisakh (New Year)
              </a>
              <a href="/festival/ghode-jatra/" className="underline">
                Ghode Jatra
              </a>
              <a href="/festival/ram-navami/" className="underline">
                Ram Navami
              </a>
              <a href="/festival/naya-barsha/" className="underline">
                Nepali New Year
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
