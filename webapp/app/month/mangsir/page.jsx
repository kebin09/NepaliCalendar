import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "मंसिर महिना — Mangsir 2083 | Harvest & Wedding Season",
  description:
    "मंसिर (Mangsir) is the eighth month of Bikram Sambat known for Yomari Punhi, Udhauli Parva, Sita Bibaha Panchami and the wedding season. Explore its festivals, dry winter onset, farming and astrology.",
  keywords: [
    "mangsir",
    "mangsir month",
    "मंसिर महिना",
    "yomari punhi",
    "udhauli parva",
    "sita bibaha panchami",
    "nepali wedding season",
    "nepali calendar mangsir",
    "kirant sakela",
    "vrischika sankranti",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/mangsir/",
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
      name: "Mangsir",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/mangsir/",
    },
  ],
};

const festivals = [
  {
    name: "योमरी पूर्णिमा (Yomari Punhi)",
    detail:
      "Newar kitchens steam yomari — rice-flour dumplings filled with chaku or khuwa — celebrating the harvest and the legend of a blessed couple who shared the sweet with a hidden goddess.",
  },
  {
    name: "उधौली पर्व (Udhauli Parva)",
    detail:
      "Kirant communities perform Sakela dance in circles, thanking the earth as birds descend to warmer lowlands for winter.",
  },
  {
    name: "सीता विवाह पञ्चमी (Sita Bibaha Panchami)",
    detail:
      "Janakpur erupts in celebration of the marriage of Sita and Ram; processions from Ayodhya join lakhs of pilgrims at Janaki Mandir.",
  },
  {
    name: "धान्य पूर्णिमा (Dhanya Purnima)",
    detail:
      "The full moon of grains marks thanksgiving for stored harvests, when granaries are full and debts of the farming year are settled.",
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
              विक्रम संवत् २०८३ · आठौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              मंसिर महिना — Mangsir 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              कार्तिक&apos;s fireworks fade and मंसिर arrives — from
              mid-November to mid-December — bringing calm blue skies,
              threshing dust and the cheerful bustle of wedding season. With
              no major national festival dominating the calendar, Mangsir is
              when Nepalis marry, travel and celebrate community traditions
              like Yomari Punhi at their own pace. Use our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              to shortlist lagna dates before banquet halls book out.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              The Month of Marriages and Mithila
            </h2>
            <p className="mb-4">
              Ask any Kathmandu event planner: Mangsir is peak lagna season.
              Astrologers consider the month free of major dosha periods, so
              families schedule bratabandha, annaprashan and vivah ceremonies
              back to back. Hotels in Pokhara and Nagarkot fill with baraat
              parties, and gold shops see their strongest sales after Tihar.
            </p>
            <p>
              In the Tarai heartland of Mithila, Sita Bibaha Panchami turns
              Janakpur into a sea of pilgrims re-enacting the celestial
              wedding. Meanwhile, hill villages mark Yomari Punhi by shaping
              the fish-like dumplings that symbolize Annapurna&apos;s
              blessing. Kirant households open Udhauli with rice-beer libations
              and the synchronized steps of Sakela sili, mimicking birds and
              beasts heading downhill.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Mangsir
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
                Hemanta ritu settles in. Days stay sunny and mild — around
                20°C in the valley — but nights slide toward single digits,
                and Terai mornings grow foggy enough to delay flights.
                Rainfall is rare, making Mangsir ideal for trekking lower
                routes like Panchase, cycling trips and outdoor weddings under
                clear skies.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                The threshing season peaks: paddy is winnowed, weighed and
                stacked into straw towers that dot the landscape till spring.
                Potato planting accelerates in hill terraces, mustard fields
                turn yellow-green, and riverbeds yield winter vegetables.
                Farmers also store seed grain and repair tools during these
                quieter weeks.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                Vrischika Sankranti places the Sun in Vrischika (Scorpio)
                rashi through most of Mangsir. The Sanskrit name Margashirsha
                points to the Mrigashira nakshatra — the &quot;head of the
                path&quot; — which the Gita itself praises as the foremost of
                months. Because lunar muhurats here are considered clean of
                Chaturmas residue, jyotishis rate Mangsir among the best
                months for griha pravesh and sacred unions.
              </p>
              <p>
                Compare BS and AD dates instantly on our{" "}
                <a href="/date-converter/" className="underline">
                  date converter
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
              <a href="/month/kartik/" className="underline">
                Previous month: Kartik
              </a>
              <a href="/month/poush/" className="underline">
                Next month: Poush
              </a>
              <a href="/festival/yomari-punhi/" className="underline">
                Yomari Punhi
              </a>
              <a href="/festival/sita-bibaha-panchami/" className="underline">
                Sita Bibaha Panchami
              </a>
              <a href="/converter/" className="underline">
                BS to AD Converter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
