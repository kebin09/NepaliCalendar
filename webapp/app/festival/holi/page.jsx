import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "होली — रंगहरूको पर्व २०८३ | Holi Fagu Purnima Nepal",
  description:
    "होली (Holi / Fagu Purnima) is Nepal's festival of colors celebrated over two days — Holika Dahan in the Terai and hill Holi in Kathmandu the next day. Learn the Prahlad and Holika legend, meaning of colors, pichkari fun, thandai, chir pole tradition and safety tips.",
  keywords: [
    "holi",
    "holi nepal",
    "होली",
    "fagu purnima",
    "रंगहरूको पर्व",
    "holika dahan",
    "prahlad holika story",
    "chir pole basantapur",
    "pichkari water gun",
    "thandai drink",
    "festival of colors nepal",
    "hilly holi terai holi",
    "holi 2083",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/holi/",
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
      name: "Holi",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/holi/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "होली — रंगहरूको पर्व २०८३ (Holi / Fagu Purnima)",
  description:
    "Nepal's festival of colors marking the victory of devotion over evil, celebrated with Holika Dahan bonfires, abir powders, pichkari water fights, music and thandai.",
  startDate: "2027-03-03",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Throughout Nepal — Terai on Purnima, Kathmandu Valley & hills the following day",
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

const colors = [
  {
    name: "रातो (Red)",
    meaning:
      "Love, fertility and marriage — the color of sindoor and brides, thrown most generously on friends and sweethearts.",
  },
  {
    name: "पहेँलो (Yellow)",
    meaning:
      "Turmeric's sacred hue of spring harvest, health and auspicious beginnings; also the color of Vishnu and knowledge.",
  },
  {
    name: "हरियो (Green)",
    meaning:
      "New life and nature's rebirth after winter, echoing the fresh mustard fields of the Terai in Falgun.",
  },
  {
    name: "निलो (Blue)",
    meaning:
      "The skin of Krishna and Shiva — divinity, calm and the boundless sky that Holi's spring skies mirror.",
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
              विक्रम संवत् २०८३ · फागुन पूर्णिमा · रङ र खुशीको महोत्सव
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              होली — रंगहरूको पर्व २०८३
            </h1>
            <p className="max-w-3xl md:text-md">
              होली, known in Nepal as <strong>Fagu Purnima</strong>, is the day
              when social rules dissolve into clouds of pink, yellow and green.
              Streets fill with drumbeats, water balloons arc from rooftops, and
              strangers smear abir on each other&apos;s cheeks with a cheerful{" "}
              <em>&quot;Happy Holi!&quot;</em> Falling on the full moon of
              Falgun (February–March), it celebrates the arrival of spring, the
              triumph of devotion over evil, and — for one day — perfect
              equality, since no one can tell rich from poor under a coat of
              color. Check this year&apos;s exact date on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              before planning your celebration.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              The Legend of Prahlad &amp; Holika
            </h2>
            <p className="mb-4">
              Holi&apos;s roots lie in the story of Prahlad, the young prince
              whose father, the demon king Hiranyakashipu, demanded worship as a
              god. Prahlad refused, remaining devoted to Lord Vishnu. Furious,
              the king asked his sister Holika — immune to fire by boon — to sit
              on a pyre with Prahlad in her lap. As flames rose, the boon
              reversed its logic: Holika burned while Prahlad emerged unharmed,
              shielded by pure devotion. The next morning, Holika Dahan bonfires
              are lit across Nepal to burn away arrogance and evil, just as
              they consumed her.
            </p>
            <p>
              A second thread ties Holi to Krishna, who playfully drenched
              Radha and the gopis of Barsana with colored water — origin of the
              romantic, mischievous spirit that still defines the day.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Two Days, Two Nepals: Terai &amp; Hill Holi
            </h2>
            <p className="mb-4">
              Uniquely, Nepal celebrates Holi on two consecutive days. The{" "}
              <strong>Terai plains</strong> observe Holika Dahan and play Holi
              on the full moon day itself, matching North Indian tradition.
              The <strong>hill districts and Kathmandu Valley</strong> celebrate
              one day later, following their own lunar reckoning. So while
              Janakpur and Birgunj wash off their colors, Kathmandu is just
              opening its bags of abir — a scheduling quirk that lets devoted
              partygoers celebrate twice.
            </p>
            <p>
              The festivities open days earlier when the <strong>chir
              pole</strong> — a bamboo mast wrapped in strips of cloth called
              chirmudra — is erected at Basantapur Durbar Square and Thamel.
              Legend says the cloth strips ward off the pole&apos;s bad omen;
              on Holi afternoon the pole is dragged through the streets and
              burned at the Tundikhel edge, formally closing the festival.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Pichkari, Balloons &amp; Music
              </h2>
              <p className="mb-4">
                Weeks before Holi, toy shops overflow with{" "}
                <strong>pichkaris</strong> — water guns ranging from palm-sized
                pistols to backpack pressure tanks — alongside buckets of water
                balloons. Children ambush passersby from balconies, while
                teenagers patrol neighborhoods on motorcycles trailing drums
                and speakers. In Basantapur and Lakeside Pokhara, DJs spin
                remixes of Holi classics as crowds dance in waves of dry color.
              </p>
              <p>
                Traditionalists prefer <em>abir</em> and <em>lola</em>, natural
                gulal powders smeared with a gentle touch and the greeting{" "}
                <em>&quot;Lal salamat!&quot;</em> Elders receive tika of color
                rather than a splash, keeping respect intact within the revelry.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Thandai &amp; Festive Foods
              </h2>
              <p className="mb-4">
                No Holi table is complete without <strong>thandai</strong> — a
                chilled milk blend of almonds, fennel, rose petals, cardamom,
                pepper and melon seeds, traditionally served in clay cups to
                cool bodies heated by sun and celebration. Kitchens also turn
                out gujiya (sweet dumplings), malpuas, pakoras and large pots of
                sel roti shared with neighbors.
              </p>
              <p>
                In the Tarai, families gather for the post-Dahan feast where
                seasonal treats like bhang thandai appear under strict adult
                supervision — a reminder that Holi&apos;s indulgence has always
                carried cultural guardrails.
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Meaning of Colors
            </h2>
            <ul className="mb-8 grid gap-6 md:grid-cols-2">
              {colors.map((c) => (
                <li
                  key={c.name}
                  className="rounded-lg border border-border-primary p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold">{c.name}</h3>
                  <p>{c.meaning}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Nepal vs India &amp; Safety Tips
            </h2>
            <p className="mb-4">
              While both countries share the Prahlad legend, Nepal&apos;s Holi
              feels distinctly its own: the two-day split between Terai and
              hills, the royal-era chir ceremony at Basantapur, and a gentler
              street culture where elders join briefly before retreating to
              family feasts. Indian celebrations like Barsana&apos;s Lathmar
              Holi have no direct Nepali equivalent, though Kathmandu&apos;s
              modern street parties now rival Delhi&apos;s in energy.
            </p>
            <p className="mb-4">
              Celebrate safely: wear old clothes and oil your hair so color
              washes off easily; choose organic gulal over chemical dyes that
              irritate skin and eyes; never throw balloons at motorbikes or
              moving vehicles; respect anyone who says no — Holi consent
              matters; keep water clean and avoid ice from unknown sources; and
              look after pets, who find loud crowds stressful. Tourists should
              secure phones in ziplock bags and celebrate in groups around
              Basantapur, Thamel or Pokhara Lakeside.
            </p>
            <p>
              After the colors fade, the calendar marches on — explore what
              comes next via our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              and month guides.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Explore Related Pages
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/festival/shivaratri/" className="underline">
                Previous festival: Maha Shivaratri
              </a>
              <a href="/month/falgun/" className="underline">
                Month of Falgun
              </a>
              <a href="/month/chaitra/" className="underline">
                Month of Chaitra
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
