import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "तिहार — प्रकाश पर्व २०८३ | Tihar Festival of Lights Nepal",
  description:
    "तिहार (Tihar / Deepawali) is Nepal's five-day festival of lights honoring crows, dogs, cows, Laxmi and brothers. Explore Kaag Tihar, Kukur Tihar, Laxmi Puja, Govardhan Puja, Mha Puja, Bhai Tika, deusi-bhailo singing and rangoli traditions of the Newar calendar.",
  keywords: [
    "tihar",
    "tihar festival",
    "तिहार",
    "प्रकाश पर्व",
    "festival of lights nepal",
    "kukur tihar dog festival",
    "kaag tihar",
    "laxmi puja",
    "gai tihar",
    "govardhan puja",
    "bhai tika",
    "mha puja newar",
    "deusi bhailo",
    "yomari punhi",
    "nepali diwali",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/tihar/",
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
      name: "Festivals",
      item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tihar",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/tihar/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "तिहार — प्रकाश पर्व २०८३ (Tihar Festival of Lights)",
  description:
    "Five-day festival of lights celebrating the bond between humans, animals and gods — from crow and dog worship to Laxmi Puja, Newar Mha Puja and the brother-sister blessings of Bhai Tika.",
  startDate: "2026-11-09",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Throughout Nepal",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressRegion: "Bagmati",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Nepali Calendar",
    url: "https://nepalicalendar.kebinmaharjan.com.np/",
  },
};

const fiveDays = [
  {
    name: "दिन १ — काग तिहार (Kaag Tihar)",
    detail:
      "The first day honors the crow, messenger of Yama the god of death. Families place rice, grains and sweets on rooftops early in the morning so the cawing crow brings only good news in the year ahead.",
  },
  {
    name: "दिन २ — कुकुर तिहार (Kukur Tihar)",
    detail:
      "Dogs wear marigold garlands, red tika and receive delicious meals. Known as Khicha Puja among Newars, it thanks dogs for loyalty and guards the path to the afterlife — even street dogs are fed this day.",
  },
  {
    name: "दिन ३ — लक्ष्मी पूजा र गाई तिहार (Laxmi Puja & Gai Tihar)",
    detail:
      "Cows are worshipped as symbols of prosperity, then every doorway glows with oil lamps, candles and electric lights. Homes are scrubbed spotless and rangoli mandalas welcome goddess Laxmi, who visits only clean, lit houses at night.",
  },
  {
    name: "दिन ४ — गोवर्धन पूजा, म्हः पूजा र गोरू तिहार (Govardhan Puja, Mha Puja & Goru Tihar)",
    detail:
      "Oxen are honored with garlands. Newar communities perform Mha Puja — worshipping one's own body and inner light on mandala diagrams — which also marks Nepal Sambat New Year. Vaishnavites build cow-dung Govardhan hills recalling Krishna lifting the mountain.",
  },
  {
    name: "दिन ५ — भाइ टीका (Bhai Tika)",
    detail:
      "Sisters apply seven-color tika on brothers' foreheads, circle them with mustard oil and dubo grass, and offer makhamali (globe amaranth) flowers that never wilt — praying Yama spares their brothers until the flowers fade. Brothers give gifts and promise protection.",
  },
];

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <p className="mb-3 font-semibold md:mb-4">
              विक्रम संवत् २०८३ · कात्तिक शुक्ल त्रयोदशीदेखि · प्रकाश पर्व
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              तिहार — प्रकाश पर्व २०८३
            </h1>
            <p className="max-w-3xl md:text-md">
              तिहार, also called Deepawali or Yamapanchak, is Nepal&apos;s most
              luminous celebration — five days each Kartik (October–November)
              when oil lamps flicker on every windowsill, marigold garlands
              drape shopfronts, and the night air carries drums and songs of
              deusi-bhailo troupes. Unlike any other festival in the world,
              Tihar consecrates not just gods but animals: crows, dogs, cows and
              oxen all receive worship before sisters bless brothers on the
              final day. It falls soon after{" "}
              <a href="/festival/dashain/" className="underline">
                Dashain
              </a>
              , and its exact tithis shift yearly — follow our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              for this year&apos;s dates.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              The Five Days of Tihar
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {fiveDays.map((d) => (
                <li
                  key={d.name}
                  className="rounded-lg border border-border-primary p-6"
                >
                  <h3 className="mb-2 text-xl font-semibold">{d.name}</h3>
                  <p>{d.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Deusi-Bhailo Tradition
              </h2>
              <p className="mb-4">
                After dusk on Laxmi Puja, girls singing <strong>bhailo</strong>{" "}
                and boys singing <strong>deusi</strong> roam neighborhood to
                neighborhood with drums, flutes and lanterns. They stop at every
                lit house, perform verses praising the household and blessing
                its prosperity, and receive sel roti, fruits, sweets and money
                in return. The collected funds traditionally go toward social
                causes — building a school bench, repairing a trail or funding a
                community feast.
              </p>
              <p>
                The songs themselves are folk poetry passed down generations,
                mixing mythology with playful requests. In recent years,
                diaspora communities have kept deusi alive over video calls,
                proving the tradition travels wherever Nepalis go.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Rangoli &amp; Lights
              </h2>
              <p className="mb-4">
                Preparing for Laxmi Puja is an art form. Women grind rice into
                white paste called <em>rupiya</em> and draw intricate rangoli
                mandalas — lotus blooms, footprints of Laxmi, peacocks and
                geometric yantras — on floors and doorsteps. Marigold garlands
                woven overnight hang from eaves, and clay diyas burn mustard
                oil through the night.
              </p>
              <p>
                The belief is practical as much as devotional: darkness invites
                misfortune, light invites wealth. Businesses close their ledgers
                with Laxmi puja, opening new account books blessed for profit,
                making Tihar simultaneously Nepal&apos;s spiritual and financial
                new year of sorts.
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Mha Puja &amp; Newar Culture
            </h2>
            <p className="mb-4">
              For the Newar community of the Kathmandu Valley, the fourth day
              carries unique weight. <strong>Mha Puja</strong> — literally
              &quot;worship of the self&quot; — honors the human body as a
              temple. Family members sit before individual mandalas drawn with
              powdered colors, and elders perform rituals with oil wicks,
              flowers and sacred threads that purify body and spirit for the
              year ahead. The same evening begins <strong>Nepal Sambat</strong>,
              the indigenous lunar new year that predates the Bikram Sambat
              calendar by centuries, celebrated with processions, masked dances
              and the beloved steamed rice-flour dumpling yomari.
            </p>
            <p>
              This makes Tihar not merely a Hindu festival but a shared national
              heritage where Hindu, Buddhist and animist traditions braid
              together — Buddhist Newars perform Mha Puja with the same devotion
              as Hindu families conduct Bhai Tika the next morning.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              How to Celebrate Tihar
            </h2>
            <p className="mb-4">
              Start by cleaning and decorating your home days in advance — buy
              sayapatri (marigold) and makhamali flowers fresh on the morning of
              each puja. On Kukur Tihar, feed the dogs around your street; on
              Laxmi Puja, light your doorway and join or host a deusi group. For
              Bhai Tika, gather sapinda (seven-color powder), dubo grass, walnut
              offerings and makhamali blossoms, then sit for the long ritual
              where sisters narrate the legend of Yama and Yamuna while drawing
              a protective boundary of mustard oil around their brothers.
            </p>
            <p>
              Visitors to Nepal during Tihar should walk through Ason,
              Thamel or Patan Durbar Square after dark when the whole valley
              glows. Check the{" "}
              <a href="/calendar/" className="underline">
                calendar
              </a>{" "}
              for public holidays, and continue exploring with our guides to{" "}
              <a href="/festival/chhath/" className="underline">
                Chhath Parva
              </a>{" "}
              and other great festivals that follow.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Explore Related Pages
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/festival/dashain/" className="underline">
                Previous festival: Dashain
              </a>
              <a href="/festival/chhath/" className="underline">
                Next festival: Chhath
              </a>
              <a href="/month/kartik/" className="underline">
                Month of Kartik
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
