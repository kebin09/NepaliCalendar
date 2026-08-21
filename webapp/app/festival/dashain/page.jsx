import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "दशैं — विजया दशमी २०८३ | Dashain Festival Nepal 2026",
  description:
    "दशैं (Dashain / Vijaya Dashami) is Nepal's biggest festival, a 15-day celebration honoring goddess Durga's victory over Mahishasura. Learn about Ghatasthapana, Fulpati, Maha Ashtami, tika and jamara traditions, kite flying, ping bamboo swings and travel tips for visiting Nepal during Dashain.",
  keywords: [
    "dashain",
    "vijaya dashami",
    "दशैं",
    "विजया दशमी",
    "dashain 2083",
    "dashain tika 2026",
    "ghatasthapana",
    "fulpati",
    "maha ashtami",
    "jamara",
    "nepal biggest festival",
    "durga puja nepal",
    "ping bamboo swing",
    "dashain holidays nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/dashain/",
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
      name: "Dashain",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/dashain/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "दशैं — विजया दशमी २०८३ (Dashain Tika Day)",
  description:
    "Nepal's greatest festival culminating in Vijaya Dashami, when elders bless younger family members with red tika, jamara sprouts and blessings for a prosperous year ahead.",
  startDate: "2026-10-15",
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

const days = [
  {
    name: "घटस्थापना (Ghatasthapana) — Day 1",
    detail:
      "A kalash filled with holy water is installed in a sand-lined box called das ghar, barley seeds are sown, and the household dedicates nine days to Durga worship while jamara grows yellow in darkness.",
  },
  {
    name: "सातौँ दिन — फूलपाती (Fulpati) — Day 7",
    detail:
      "A royal procession carries banana stalks, sugarcane, ginger and sacred flowers from Gorkha to Kathmandu's Hanuman Dhoka, historically escorted by Gurujyuko platoon and the army band.",
  },
  {
    name: "आठौँ दिन — महाअष्टमी (Maha Ashtami) — Day 8",
    detail:
      "The fiercest night of worship. Goats, buffaloes, ducks and roosters are sacrificed at Durga temples; many families instead offer pumpkins, coconuts and cucumbers, and the night is spent reciting Chandi.",
  },
  {
    name: "नवौँ दिन — महानवमी (Maha Navami) — Day 9",
    detail:
      "Taleju temple opens to the public once a year on this day. Tools, vehicles and machinery are worshipped as Vishwakarma puja, and the Taleju Bhawani rituals reach their climax.",
  },
  {
    name: "दसौँ दिन — विजया दशमी (Vijaya Dashami) — Day 10",
    detail:
      "The main day. Elders apply red tika mixed with rice and yogurt on foreheads, place two-leafed jamara behind ears, hand out dakshina cash gifts, and families feast on goat curry and sel roti.",
  },
  {
    name: "पञ्चदश — कोजाग्रत पूर्णिमा (Kojagrata Purnima) — Day 15",
    detail:
      "The final full-moon night asks 'ko jagarti?' — who is awake? Laxmi is worshipped under moonlight, gambling traditionally ends the fortnight, and jamara kept since Ghatasthapana is floated on rivers.",
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
              विक्रम संवत् २०८३ · आश्विन शुक्ल पक्ष · सबैभन्दा ठूलो चाडपर्व
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              दशैं — विजया दशमी २०८३
            </h1>
            <p className="max-w-3xl md:text-md">
              दशैं is to Nepal what Christmas is to the West — the single most
              important festival of the year, stretching across fifteen lunar
              days of Ashwin (September–October). Schools close for almost a
              month, Kathmandu empties as millions travel back to their home
              villages, and the smell of goat curry, sel roti and fresh marigold
              garlands fills every courtyard. Whether you call it Dashain,
              Badadasain or Vijaya Dashami, it celebrates one eternal idea: the
              victory of good over evil. Track every tithi of this year&apos;s
              Dashain on our{" "}
              <a href="/calendar/" className="underline">
                Nepali calendar
              </a>{" "}
              so you never miss a puja day.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              History: Durga Versus Mahishasura
            </h2>
            <p className="mb-4">
              Dashain commemorates the cosmic battle between goddess Durga and
              the buffalo demon Mahishasura. According to the Devi Mahatmya,
              Mahishasura had received a boon that no man or god could kill him.
              Drunk with power, he conquered heaven and terrorized the three
              worlds. In response, the combined energies of Brahma, Vishnu and
              Shiva blazed forth as an eighteen-armed warrior goddess riding a
              lion. For nine nights — the Navadurga — she fought the demon,
              finally slaying him on the tenth day, Vijaya Dashami, the day of
              victory.
            </p>
            <p>
              Each of the nine nights honors a different form of the goddess:
              Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata,
              Katyayani, Kalaratri, Mahagauri and Siddhidatri. Devotees observe
              these forms through fasting, chanting and offerings, believing
              that the same divine strength that destroyed Mahishasura can
              destroy the demons of ego, anger and ignorance within us. It is
              also linked to Lord Rama, who is said to have invoked Durga before
              defeating Ravana — another triumph of righteousness celebrated on
              this very tithi.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              The Fifteen Days of Dashain
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {days.map((d) => (
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
                Tika &amp; Jamara Tradition
              </h2>
              <p className="mb-4">
                On Vijaya Dashami, the youngest family member first receives
                tika from the eldest — grandparents, parents, uncles and aunts
                in strict order of seniority. The tika is a paste of rice, red
                abir and yogurt pressed onto the forehead between the eyebrows,
                symbolizing the third eye and divine protection. Alongside it,
                elders place jamara — pale yellow barley shoots grown without
                sunlight since Ghatasthapana — behind ears and on heads. The
                dakshina that follows, crisp notes tucked into children&apos;s
                palms, turns every kid into an eager early riser on tika day.
              </p>
              <p>
                Families continue receiving tika until Ekadashi or even
                Kojagrata Purnima, traveling house to house across cities and
                villages. This ritual keeps kinship alive: relatives who have
                not met all year gather under one roof, resolve old quarrels and
                share meals together.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Kites, Swings &amp; Card Games
              </h2>
              <p className="mb-4">
                After the monsoon clears, Dashain skies turn into a battlefield
                of colorful kites. Rooftops echo with shouts of{" "}
                <em>&quot;chet!&quot;</em> as rivals cut each other&apos;s
                strings, a tradition believed to send messages to the heavens to
                stop sending rain. In villages, communities build{" "}
                <strong>ping</strong> — tall bamboo swings lashed with rope —
                and tradition says everyone should leave the ground at least
                once a year to please the gods and let their feet forget the
                earth.
              </p>
              <p>
                Evenings belong to card games like Kauda (Callbreak&apos;s
                ancestor), Langur Burja dice and marbles for kids. Elders say
                playing during Dashain is auspicious, a sanctioned moment of
                leisure after a year of hard work in fields and offices.
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Visiting Nepal During Dashain
            </h2>
            <p className="mb-4">
              Dashain is both the best and trickiest time to visit Nepal. On the
              plus side, you will witness authentic culture: masked Lakhey and
              Nava Durga dances in Bhaktapur, animal offerings at Taleju and
              Dakshinkali temples, and entire towns glowing with celebration.
              The weather is superb — clear skies, golden paddy terraces and
              post-monsoon views of the Himalaya make trekking spectacular.
            </p>
            <p>
              Plan around the closures though. Government offices, banks and
              many restaurants shut for up to a week around tika day, and
              domestic flights and buses sell out weeks ahead as the great
              homecoming begins. Book transport early, carry cash because ATMs
              run dry, and if you want to experience tika firsthand, homestays
              in Gorkha, Bandipur or Panauti often welcome guests into family
              celebrations. Confirm exact dates each year with our{" "}
              <a href="/calendar/" className="underline">
                calendar
              </a>{" "}
              and read about the festival that follows,{" "}
              <a href="/festival/tihar/" className="underline">
                Tihar
              </a>
              , to extend your trip into the festival of lights.
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
                Next festival: Tihar
              </a>
              <a href="/month/ashwin/" className="underline">
                Month of Ashwin
              </a>
              <a href="/calendar/" className="underline">
                Today&apos;s Tithi
              </a>
              <a href="/rashifal/" className="underline">
                Rashifal
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
