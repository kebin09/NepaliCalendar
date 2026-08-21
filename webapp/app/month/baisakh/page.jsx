import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "बैशाख महिना — Baisakh 2083 | Nepali New Year Month",
  description:
    "बैशाख (Baisakh) is the first month of the Bikram Sambat calendar, marking Nepali New Year, Bisket Jatra and Buddha Jayanti. Learn its festivals, weather, agriculture and astrological significance.",
  keywords: [
    "baisakh",
    "baisakh month",
    "nepali new year",
    "बैशाख महिना",
    "bikram sambat first month",
    "buddha jayanti",
    "bisket jatra",
    "nepali calendar baisakh",
    "ubhauli festival",
    "mesh sankranti",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/baisakh/",
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
      name: "Baisakh",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/baisakh/",
    },
  ],
};

const festivals = [
  {
    name: "नयाँ वर्ष (Nepali New Year)",
    detail:
      "Baisakh 1 welcomes Naya Barsha. Families gather, exchange greetings and visit temples to begin the year with blessings.",
  },
  {
    name: "बिस्केट जात्रा (Bisket Jatra)",
    detail:
      "Bhaktapur pulls the enormous chariot of Lord Bhairab while the Yo-si (lingo) pole is raised, re-enacting ancient legends of the valley.",
  },
  {
    name: "बुद्ध जयन्ती (Buddha Jayanti)",
    detail:
      "On Baisakh Purnima, devotees honor the birth, enlightenment and mahaparinirvana of Gautam Buddha at Lumbini, Swayambhu and Boudhanath.",
  },
  {
    name: "उभौली पर्व (Ubhauli Parva)",
    detail:
      "Kirant communities celebrate Ubhauli with Sakela Sili dances, worshipping nature before moving to higher pastures for the summer.",
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
              विक्रम संवत् २०८३ · पहिलो महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              बैशाख महिना — Baisakh 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              बैशाख is the gateway month of the entire Bikram Sambat calendar.
              Falling from mid-April to mid-May, it opens with Nepali New Year
              and carries the freshness of spring across the hills and plains.
              For millions of Nepalis at home and abroad, checking the{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              becomes a daily habit in this month as they plan holidays,
              rituals and travel around its auspicious dates.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Significance of Baisakh
            </h2>
            <p className="mb-4">
              Baisakh holds a double identity: it is both the administrative
              start of the Nepali fiscal and academic rhythm and the spiritual
              reset button for households. Government offices, schools and
              businesses open fresh ledgers, while families perform puja for a
              prosperous year ahead. In the Kathmandu Valley, the thundering
              chariots of Bisket Jatra in Bhaktapur and the tongue-piercing
              Bode Jatra in Thimi announce the new year with centuries-old
              spectacle.
            </p>
            <p>
              The month is equally sacred to Buddhists worldwide. Baisakh
              Purnima, known as Buddha Jayanti or Vesak, commemorates the three
              great events of Buddha&apos;s life. Pilgrims light butter lamps at
              Boudhanath, offer prayers at Swayambhu and gather in Lumbini, the
              birthplace of the Buddha, making Baisakh a peak season for
              spiritual tourism in Nepal.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Baisakh
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
                Baisakh sits at the heart of basanta (spring) transitioning
                into grishma (early summer). Days turn pleasantly warm with
                temperatures climbing toward 30°C in the Tarai, while hill
                stations like Nagarkot and Pokhara enjoy mild sunshine and
                rhododendron-covered trails. Occasional afternoon showers
                settle the dust and keep the air crisp, making this one of the
                best months for trekking routes such as Ghorepani and Everest
                Base Camp.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                Farmers call Baisakh the golden harvest month. Golden wheat
                fields are cut and threshed across the country, while maize is
                sown on terraced slopes. Nurseries for paddy seedlings are
                prepared so that transplanting can begin in Ashadh, and
                orchards burst with ripening litchis and early mangoes in the
                southern plains.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Baisakh begins with Mesh Sankranti, the moment the Sun enters
                Mesha (Aries) rashi, which is why the new year is anchored to
                this date. The month takes its name from the Vaishakha
                nakshatra, under which the full moon rises. Traditional
                jyotish considers Baisakh highly favorable for griha pravesh,
                business openings and sacred thread ceremonies, as the
                combined influence of the Sun in exaltation and the bright
                lunar fortnight strengthens new ventures started now.
              </p>
              <p>
                Devotees observing monthly vrats track tithi and nakshatra
                details through our{" "}
                <a href="/rashifal/" className="underline">
                  rashifal
                </a>{" "}
                updates.
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
                Next month: Jestha
              </a>
              <a href="/month/chaitra/" className="underline">
                Previous month: Chaitra
              </a>
              <a href="/festival/buddha-jayanti/" className="underline">
                Buddha Jayanti
              </a>
              <a href="/festival/naya-barsha/" className="underline">
                Nepali New Year
              </a>
              <a href="/date-converter/" className="underline">
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
