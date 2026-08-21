import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "आश्विन महिना — Ashwin 2083 | Dashain Festival Month",
  description:
    "आश्विन (Ashwin) is the sixth month of Bikram Sambat and home of Dashain — Ghatasthapana, Fulpati, Maha Ashtami, Vijaya Dashami and Kojagrat Purnima. Discover its festivals, weather, harvest and astrology.",
  keywords: [
    "ashwin",
    "ashwin month",
    "आश्विन महिना",
    "dashain festival",
    "ghatasthapana",
    "vijaya dashami",
    "fulpati",
    "maha ashtami",
    "kojagrat purnima",
    "nepali calendar ashwin",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/ashwin/",
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
      name: "Ashwin",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/ashwin/",
    },
  ],
};

const festivals = [
  {
    name: "घटस्थापना (Ghatasthapana)",
    detail:
      "A kalash of holy water is installed beside barley seeds that sprout into yellow jamara over ten darkened days of Durga worship.",
  },
  {
    name: "फूलपाती (Fulpati)",
    detail:
      "Saptami brings an army procession carrying sacred plants from Gorkha to Hanuman Dhoka, officially opening the royal-era celebrations.",
  },
  {
    name: "महाअष्टमी र नवमी (Maha Ashtami & Navami)",
    detail:
      "Night-long recitals of Durga Chalisa and Devi Kavach peak with sacrifices at Taleju and Dakshinkali, while Taleju temple doors open once a year.",
  },
  {
    name: "विजया दशमी (Vijaya Dashami)",
    detail:
      "Elders press rice tika and jamara onto foreheads, blessing juniors with dakshina as families reunite across cities and continents.",
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
              विक्रम संवत् २०८३ · छैठौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              आश्विन महिना — Ashwin 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              आश्विन, from mid-September to mid-October, hosts Nepal&apos;s
              greatest celebration: Dashain. For fifteen days the country
              slows down, buses fill to bursting, kites claim the sky and
              bamboo swings rise on village commons. The exact dates of
              Ghatasthapana through Kojagrat Purnima shift every year, so
              devotees track them on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              and plan travel months ahead.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              The Story Behind Dashain
            </h2>
            <p className="mb-4">
              Dashain commemorates the nine-night battle in which Goddess
              Durga defeated the shape-shifting buffalo demon Mahishasura.
              Each night of Navaratri honors a different form of the goddess —
              Shailaputri to Siddhidatri — culminating in victory on
              Dashami. The jamara grown from Ghatasthapana barley embodies
              that triumph, carried by soldiers to far-flung barracks so even
              those on duty receive tika.
            </p>
            <p>
              Beyond religion, Ashwin is Nepal&apos;s great social equalizer.
              Offices empty out, migrant workers fly home, and the greeting
              &quot;Dashain ko shubhakamana&quot; crosses every boundary.
              Children collect dakshina notes, new clothes are bought for the
              whole family, and malshree dhun — the classical music of
              Dashain — drifts from loudspeakers in every bazaar.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Ashwin
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
                Ashwin delivers Nepal&apos;s finest weather. The monsoon has
                usually withdrawn by mid-month, leaving cobalt skies, crisp
                mornings and postcard views of Machhapuchhre and Everest.
                Daytime warmth suits kite battles from rooftops, while cool
                nights call for light blankets. This clarity makes Ashwin the
                start of peak trekking season on the Annapurna Circuit.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                The month marks the climax of the farming year. Paddy fields
                turn amber as chiitaai (harvest) begins in lower valleys;
                sickles flash across terraces and threshing drums echo till
                dusk. Farmers set aside the finest grain for Dashain feasts,
                while goats, ducks and chickens fattened all year head to
                markets like Tundikhel and Kalimati.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Kanya Sankranti moves the Sun into Kanya (Virgo) rashi during
                Ashwin. The bright fortnight of Shukla paksha is dedicated to
                the nine planetary goddesses, with each night linked to a
                nakshatra energy that jyotishis invoke for strength and
                protection. Traditionally, the tika moment itself is fixed by
                auspicious muhurat calculated from tithi, nakshatra and lagna
                — often falling mid-morning when Venus-blessed hours prevail.
              </p>
              <p>
                Find this year&apos;s exact tika time via our{" "}
                <a href="/date-converter/" className="underline">
                  date converter
                </a>{" "}
                tools.
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
              <a href="/month/bhadra/" className="underline">
                Previous month: Bhadra
              </a>
              <a href="/month/kartik/" className="underline">
                Next month: Kartik
              </a>
              <a href="/festival/dashain/" className="underline">
                Dashain Festival Guide
              </a>
              <a href="/festival/indra-jatra/" className="underline">
                Indra Jatra
              </a>
              <a href="/calendar/" className="underline">
                Dashain Countdown Calendar
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
