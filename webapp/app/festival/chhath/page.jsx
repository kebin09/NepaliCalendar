import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "छठ पर्व — सूर्य पूजा २०८३ | Chhath Puja Festival Nepal",
  description:
    "छठ (Chhath Parva) is the four-day sun-worship festival of Nepal's Terai dedicated to Surya and Chhathi Maiya. Learn about Nahay Khay, Kharna, Sandhya Arghya and Usha Arghya, the strict fasting tradition, river ghats of Janakpur and Birgunj, arwa-chawal offerings and its health benefits.",
  keywords: [
    "chhath",
    "chhath puja",
    "छठ पर्व",
    "सूर्य पूजा",
    "chhath parva nepal",
    "nahay khay",
    "kharna",
    "sandhya arghya",
    "usha arghya",
    "chhathi maiya",
    "surya shashti",
    "terai festival",
    "janakpur chhath",
    "sun worship festival",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/chhath/",
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
      name: "Chhath",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/chhath/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "छठ पर्व — सूर्य पूजा २०८३ (Chhath Parva)",
  description:
    "Four-day Vedic festival worshipping the Sun god Surya and Chhathi Maiya with rigorous fasting, holy baths and arghya offerings at rivers during sunset and sunrise.",
  startDate: "2026-11-12",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Terai plains of Nepal — Janakpur, Birgunj, Biratnagar & river ghats nationwide",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressRegion: "Madhesh",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Nepali Calendar",
    url: "https://nepalicalendar.kebinmaharjan.com.np/",
  },
};

const fourDays = [
  {
    name: "दिन १ — नहाय खाय (Nahay Khay)",
    detail:
      "Vratis bathe in holy rivers or home-ritual water, carry Ganga jal home, and eat a single satvik meal of arwa chawal (boiled sun-dried rice), chana dal and lauki (bottle gourd) cooked on earthen chulhas. The house is scrubbed spotless from this day onward.",
  },
  {
    name: "दिन २ — खरना (Kharna / Lohanda)",
    detail:
      "A full-day fast without even water ends after sunset with kheer — jaggery-sweetened rice pudding — plus roti made of single-grain flour, eaten alone by the vrati. This meal becomes their only nourishment for the next 36 hours.",
  },
  {
    name: "दिन ३ — सन्ध्या अर्घ्य (Sandhya Arghya)",
    detail:
      "The most demanding day: complete nirjala fasting while families prepare thekua (jaggery-wheat cookies), sugarcane, coconut, banana and radish in bamboo soop baskets. At sunset, thousands stand waist-deep in rivers offering arghya to the setting Sun.",
  },
  {
    name: "दिन ४ — उषा अर्घ्य (Usha Arghya / Parna)",
    detail:
      "Devotees return to the ghats before dawn to greet the rising Sun with milk, water and prayers, breaking their fast afterward with prasad. The vigil through the cold November night singing Chhath geet is considered the festival's spiritual peak.",
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
              विक्रम संवत् २०८३ · कात्तिक शुक्ल षष्ठी · सूर्योपासनाको महापर्व
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              छठ पर्व — सूर्य पूजा २०८३
            </h1>
            <p className="max-w-3xl md:text-md">
              छठ Parva is perhaps the only major festival in the world where
              devotees thank not a temple idol but the setting and rising Sun
              themselves. Celebrated six days after{" "}
              <a href="/festival/tihar/" className="underline">
                Tihar&apos;s
              </a>{" "}
              Laxmi Puja on Kartik Shukla Shashthi, it transforms the riverbanks
              of the Terai — the Bagmati at Janakpur, the Narayani at Birgunj,
              the Koshi at Biratnagar — into oceans of saffron, bamboo baskets
              and devotional song. Entire families keep brutal fasts, some
              lasting over fifty hours without water, purely out of gratitude to
              Surya, the source of all life and energy.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why Worship the Sun God?
            </h2>
            <p className="mb-4">
              In Vedic tradition, Surya is the visible god — the one deity every
              human sees daily, sustainer of crops, health and time itself.
              Chhath honors Surya together with <strong>Chhathi Maiya</strong>,
              his consort believed to be Usha or the goddess Shashthi, who
              grants longevity, health and progeny to children. The Mahabharata
              says Draupadi and the Pandavas performed Chhath to regain their
              kingdom, while Ramayana traditions hold that Rama and Sita kept
              this fast after returning to Ayodhya — fitting, since Janakpur,
              Sita&apos;s birthplace in Nepal, remains the festival&apos;s
              beating heart.
            </p>
            <p>
              Unlike other pujas, Chhath has no priests and no idols. The
              vrati — usually women but increasingly men too — faces the Sun
              directly, making it a rare democratic ritual where devotion, not
              donation, is the only currency.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              The Four Days of Chhath
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {fourDays.map((d) => (
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
                Arwa-Chawal &amp; Sacred Offerings
              </h2>
              <p className="mb-4">
                Every offering in Chhath follows strict purity rules. Rice must
                be <strong>arwa</strong> — sun-dried without boiling — ground
                fresh by hand, cooked on cow-dung-fueled clay stoves by the
                vrati herself. The signature sweet is <em>thekua</em>, wheat
                flour kneaded with jaggery and ghee, deep-fried into durable
                cookies that survive the long night vigils. Bamboo soop
                baskets, sugarcane stalks tied like flags, whole coconuts with
                water intact, and seasonal fruits fill the offering trays.
              </p>
              <p>
                Nothing tastes of onion, garlic or salt; even the water for
                cooking is fetched from the same river where arghya will be
                offered. This culinary discipline turns the household kitchen
                into a temporary temple.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Rivers, Health &amp; Vitamin D
              </h2>
              <p className="mb-4">
                Standing in cold river water at dawn and dusk exposes the body
                gently to sunlight when ultraviolet rays are safest, letting
                skin synthesize natural vitamin D — a fact grandmothers knew
                long before nutritionists. Devotees believe the practice also
                detoxifies body and mind: the 36-hour nirjala fast is said to
                let the digestive system rest completely, while standing in
                water channels energy downward, calming the nervous system much
                like grounding practices described today.
              </p>
              <p>
                Scientifically or spiritually, the results speak: Chhath
                observers report deep calm, discipline and family bonding that
                few modern retreats can match.
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Cultural Heart of the Terai
            </h2>
            <p className="mb-4">
              Though rooted in the Madheshi and Maithil culture of Nepal&apos;s
              southern plains, Chhath now belongs to all Nepalis. Janakpur&apos;s
              Dhanush Sagar and Ganga Sagar ponds draw hundreds of thousands,
              with government holidays declared and roads closed for processions
              of glowing lamps. Migrants have carried the festival to Kathmandu&apos;s
              Bagmati ghats at Thapathali and Shankhamul, where the capital&apos;s
              Terai community recreates home each Kartik.
            </p>
            <p>
              Folk songs called <em>Chhath geet</em> — sung in Maithili, Bhojpuri
              and Hindi — narrate legends of Chhathi Maiya blessing childless
              couples, and the night before Sandhya Arghya echoes with them till
              sunrise. If you wish to witness it, arrive at any major ghat by
              late afternoon on day three; dress modestly, ask before
              photographing vratis, and accept prasad respectfully when offered.
              Confirm exact tithis on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              and explore more festivals across the year.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Explore Related Pages
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/festival/tihar/" className="underline">
                Previous festival: Tihar
              </a>
              <a href="/festival/shivaratri/" className="underline">
                Next festival: Maha Shivaratri
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
