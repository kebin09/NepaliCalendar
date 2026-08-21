import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "कार्तिक महिना — Kartik 2083 | Tihar & Chhath Festival Month",
  description:
    "कार्तिक (Kartik) is the seventh month of Bikram Sambat, glowing with Tihar, Laxmi Puja, Mha Puja, Bhai Tika and Chhath Parva. Learn its festivals, autumn weather, harvest season and astrology.",
  keywords: [
    "kartik",
    "kartik month",
    "कार्तिक महिना",
    "tihar festival",
    "bhai tika",
    "laxmi puja",
    "chhath parva",
    "mha puja nepal sambat",
    "nepali calendar kartik",
    "deusi bhailo",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/kartik/",
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
      name: "Kartik",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/kartik/",
    },
  ],
};

const festivals = [
  {
    name: "काग र कुकुर तिहार (Kag & Kukur Tihar)",
    detail:
      "Crows and dogs receive garlands, tika and delicious food, honoring messengers of Yama and the most loyal friend of humankind.",
  },
  {
    name: "लक्ष्मी पूजा (Laxmi Puja)",
    detail:
      "On Amavasya night, homes glow with oil lamps and mandala rangoli as Deusi-Bhailo troupes sing door to door for blessings and treats.",
  },
  {
    name: "म्हः पूजा र भाइटीका (Mha Puja & Bhai Tika)",
    detail:
      "Newars consecrate the body with mandalas to begin Nepal Sambat New Year, then sisters multiply the longevity of brothers with seven-color tika.",
  },
  {
    name: "छठ पर्व (Chhath Parva)",
    detail:
      "Devotees of the Tarai fast rigorously and offer arghya to the setting and rising sun on riverbanks, thanking Surya for life itself.",
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
              विक्रम संवत् २०८३ · सातौँ महिना
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              कार्तिक महिना — Kartik 2083
            </h1>
            <p className="max-w-3xl md:text-md">
              कार्तिक, from mid-October to mid-November, is the festival of
              lights month. If Dashain belongs to Durga, Kartik belongs to
              lamps, marigolds and sibling love. Five days of Tihar illuminate
              every doorway, followed by the sun-worship of Chhath. Because
              the Yama Panchak dates follow the lunar tithi each year,
              families confirm them on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              before buying sel roti ingredients and marigold garlands.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              The Festival of Lights Explained
            </h2>
            <p className="mb-4">
              Tihar, also called Yamapanchak, honors an unusual cast: the crow
              as Yama&apos;s messenger, the dog guarding the gates of death,
              the cow as Lakshmi incarnate, and finally the bond between
              brothers and sisters. On Bhai Tika, sisters draw a protective
              wall of oil around brothers, apply seven-colored tika and feed
              them shagun of makhamali flowers and betel nut — a ritual said
              to shield Yama&apos;s own record books from claiming them early.
            </p>
            <p>
              Kartik is also the Newar new year. Mha Puja turns inward,
              worshipping the self through intricate sand mandalas lit with
              wicks, while Kathmandu&apos;s streets echo with Nepal Sambat
              processions. In Patan, the month-long Kartik Nach dance drama
              has been performed on Durbar Square platforms for over three
              centuries, keeping medieval performance art alive.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Major Festivals in Kartik
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
                Kartik offers post-monsoon perfection: warm golden afternoons
                around 24°C in Kathmandu, cool nights dipping toward 10°C, and
                almost no rain. Himalayan panoramas are at their sharpest,
                making this the busiest trekking fortnight at Poon Hill and
                Langtang. The only haze comes from festival fireworks and
                harvest smoke drifting across valley evenings.
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                Agriculture
              </h2>
              <p>
                Harvest wraps up as threshing floors fill with paddy heaps.
                Farmers immediately turn fields toward winter: wheat is sown
                in late Kartik, garlic and onion seedlings go into beds, and
                terraces are readied for potatoes. Marigold farms near
                Kathmandu work round the clock, supplying tons of genda mala
                for Tihar decorations.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Astrological Significance
              </h2>
              <p className="mb-4">
                The Sun spends most of Kartik in Tula (Libra) rashi, where it
                is considered debilitated — yet tradition says worship of
                Lakshmi during this transit restores balance and prosperity.
                The month takes its name from the Krittika nakshatra, sacred
                to Kartikeya. Jyotishis note that Amavasya of Laxmi Puja,
                though dark, is among the most auspicious nights of the year
                for invoking wealth when Sharad Purnima energy lingers.
              </p>
              <p>
                Track nakshatra changes daily on our{" "}
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
              <a href="/month/ashwin/" className="underline">
                Previous month: Ashwin
              </a>
              <a href="/month/mangsir/" className="underline">
                Next month: Mangsir
              </a>
              <a href="/festival/tihar/" className="underline">
                Tihar Festival Guide
              </a>
              <a href="/festival/chhath/" className="underline">
                Chhath Parva
              </a>
              <a href="/festival/bhai-tika/" className="underline">
                Bhai Tika
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
