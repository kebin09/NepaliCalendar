import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "महाशिवरात्रि २०८३ | Maha Shivaratri at Pashupatinath Nepal",
  description:
    "महाशिवरात्रि (Maha Shivaratri) — the Great Night of Shiva — is Nepal's holiest festival night at Pashupatinath temple. Learn its mythology, why Shiva is worshipped at night, sadhu gatherings, fasting rules, mantras, marriage blessings and public holiday traditions.",
  keywords: [
    "maha shivaratri",
    "shivaratri",
    "महाशिवरात्रि",
    "pashupatinath temple",
    "shivaratri nepal 2083",
    "falgun krishna chaturdashi",
    "naga sadhus pashupatinath",
    "shivaratri vrat",
    "om namah shivaya",
    "shiva night worship",
    "shivaratri public holiday nepal",
    "bilva patra offering",
  ],
  alternates: {
    canonical:
      "https://nepalicalendar.kebinmaharjan.com.np/festival/shivaratri/",
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
      name: "Maha Shivaratri",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/shivaratri/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "महाशिवरात्रि २०८३ (Maha Shivaratri)",
  description:
    "The Great Night of Shiva observed on Falgun Krishna Chaturdashi with all-night worship, fasting and massive gatherings of devotees and naga sadhus at Pashupatinath Temple.",
  startDate: "2027-02-26",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Pashupatinath Temple & throughout Nepal",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Nepali Calendar",
    url: "https://nepalicalendar.kebinmaharjan.com.np/",
  },
};

const mantras = [
  {
    name: "ॐ नमः शिवाय (Om Namah Shivaya)",
    detail:
      "The Panchakshara — five-syllable king of mantras. Devotees chant it continuously through the night, believing each syllable purifies one element of the body.",
  },
  {
    name: "महामृत्युञ्जय मन्त्र (Mahamrityunjaya Mantra)",
    detail:
      "\"Om Tryambakam Yajamahe...\" — the victory-over-death mantra recited 108 times for health and longevity of self and family.",
  },
  {
    name: "बिल्वाष्टकम् (Bilvashtakam)",
    detail:
      "Eight verses praising the three-leafed bilva offered on the lingam; even a single leaf with devotion is said to equal grand offerings.",
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
              विक्रम संवत् २०८३ · फागुन कृष्ण चतुर्दशी · रात्रि भरको पूजा
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              महाशिवरात्रि २०८३
            </h1>
            <p className="max-w-3xl md:text-md">
              महाशिवरात्रि — the Great Night of Shiva — falls once a year on
              Falgun Krishna Chaturdashi (February–March), when darkness is
              deepest just before the new moon. On this single night, Kathmandu
              becomes the spiritual capital of the Hindu world: over a million
              pilgrims stream toward Pashupatinath, hundreds of ash-smeared
              naga sadhus descend from the Himalaya, and temple bells keep time
              until sunrise. It is a national holiday in Nepal, one of the few
              countries where Shiva&apos;s night pauses the entire state. Track
              this year&apos;s exact tithi on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>
              .
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Mythology: Why This Night Is Supreme
            </h2>
            <p className="mb-4">
              Several legends converge on this tithi. The Puranas describe it as
              the night Shiva performed the <strong>tandava</strong> — the
              cosmic dance of creation and destruction. Another beloved story
              tells of a hunter who, stranded overnight in a bel tree above a
              Shiva lingam, unknowingly dropped bilva leaves and kept a hungry
              vigil; by dawn, months of accidental worship had washed away his
              sins. The most popular tradition says this was the night Shiva
              appeared as an endless pillar of light (Jyotirlinga), challenging
              Brahma and Vishnu to find its ends — a reminder that the divine
              has no beginning or boundary.
            </p>
            <p>
              Astrologically, Falgun Krishna Chaturdashi places the moon at its
              darkest, and devotees believe planetary positions on this night
              amplify spiritual practice manyfold — which is precisely why
              Shiva, the lord who conquered time itself, is worshipped in the
              dark rather than the light.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Pashupatinath: The Heart of the Celebration
            </h2>
            <p className="mb-4">
              Pashupatinath, the pagoda temple on the Bagmati river, opens its
              four gates at 3 a.m. and does not close until late the next
              night. The Pashupati Area Development Trust organizes four rounds
              of special abhishekam with milk, honey, ghee, sugarcane juice and
              holy water, while priests offer thousands of bilva leaves to the
              main lingam. Queues stretch kilometers along the riverbank;
              volunteers distribute free water, tea and blankets through the
              freezing night.
            </p>
            <p>
              Across the river, terraced platforms turn into an open-air theater
              of asceticism. Naga sadhus — naked, bodies coated in vibhuti ash,
              hair matted high — arrive in processions with tridents and drums,
              smoking chillums and blessing crowds. Marijuana use, illegal
              otherwise, is traditionally tolerated among sadhus on this night
              alone, tying modern law to ancient Shaivite practice. Foreign
              visitors photograph freely outside the main temple, where
              bhajan mandalis sing till dawn and the air smells of dhoop,
              marigold and woodsmoke.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Fasting Traditions
              </h2>
              <p className="mb-4">
                Devotees observe three levels of vrat:{" "}
                <strong>nirjala</strong> (absolute, without food or water),
                <strong> phalahar</strong> (fruits, milk and root vegetables
                only), or a simple single satvik meal after evening puja. Many
                begin fasting at sunrise and break it only the next morning
                after bathing. The strictest keep an all-night vigil —{" "}
                <em>jaagaran</em> — believing that sleeping on Shivaratri
                forfeits the year&apos;s blessings, since legend warns that
                even unintentional wakefulness that night earns merit.
              </p>
              <p>
                Homes are cleaned, lamps lit before household lingams, and
                offerings of bel leaves, dhatura fruit, belpatra malas and
                white flowers are made — never tulsi, which Shiva famously
                excludes.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Shiva &amp; Marriage Blessings
              </h2>
              <p className="mb-4">
                Shivaratri is also the festival of ideal wedlock. Shiva and
                Parvati are said to have been (re)united on this night, so
                unmarried women fast through the day praying for a husband as
                devoted as Shiva, while married couples pray for harmony and
                longevity together. At Pashupatinath&apos;s ghats, rows of
                young women in red can be seen offering flowers to the
                Bagmati&apos;s edge before joining the temple queues.
              </p>
              <p>
                The night carries astrological weight too: jyotishis recommend
                starting mantra sadhana, wearing rudraksha for the first time,
                or performing Rudrabhishek on this tithi for maximum effect.
                Read more on our{" "}
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
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Common Prayers &amp; Mantras
            </h2>
            <ul className="grid gap-6 md:grid-cols-3">
              {mantras.map((m) => (
                <li
                  key={m.name}
                  className="rounded-lg border border-border-primary p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold">{m.name}</h3>
                  <p>{m.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Explore Related Pages
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/festival/chhath/" className="underline">
                Previous festival: Chhath
              </a>
              <a href="/festival/holi/" className="underline">
                Next festival: Holi
              </a>
              <a href="/month/falgun/" className="underline">
                Month of Falgun
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
