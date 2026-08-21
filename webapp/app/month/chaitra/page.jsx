import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "चैत्र महिना — Chaitra Month | March-April",
  description:
    "चैत्र (Chaitra) is the twelfth and final month of Bikram Sambat, falling in March-April. Explore Ghode Jatra, Ram Navami, Chaitra Dashain, peak spring weather and Nepali New Year preparations.",
  keywords: [
    "chaitra",
    "chaitra month",
    "चैत्र",
    "चैत्र महिना",
    "ghode jatra",
    "घोडे जात्रा",
    "ram navami",
    "राम नवमी",
    "chaitra dashain",
    "चैत्र दशैं",
    "nepali new year",
    "nepali calendar chaitra",
    "last month bikram sambat",
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
    nameNe: "घोडे जात्रा",
    nameEn: "Ghode Jatra",
    detailNe:
      "काठमाडौंको टुँडिखेलमा नेपाली सेनाले घोडदौड प्रदर्शनी गर्छ। परम्परा अनुसार राक्षस ताडीको सम्झनामा घोडाहरूले मैदान दौडँदा भूतप्रेतहरू भगाइन्छ र सहर रक्षा हुन्छ भन्ने विश्वास छ।",
    detailEn:
      "The Nepal Army stages a grand horse parade at Tundikhel, Kathmandu. Tradition holds that thundering hooves trample the demon Tundi's spirit, driving away ghosts and protecting the city — now a beloved spectacle of cavalry drills and acrobatics.",
  },
  {
    nameNe: "राम नवमी",
    nameEn: "Ram Navami",
    detailNe:
      "चैत्र शुक्ल नवमीमा भगवान् रामको जन्मोत्सव मनाइन्छ। राम मन्दिरहरूमा पूजा, भजन र रामायण पाठ हुन्छ; जनकपुरधाम र काठमाडौंका मन्दिरहरू भक्तहरूले भरिन्छन्।",
    detailEn:
      "Chaitra Shukla Navami celebrates the birth of Lord Ram. Temples hold puja, bhajans and Ramayana recitals, with Janakpurdham and Kathmandu shrines drawing large crowds of devotees.",
  },
  {
    nameNe: "चैत्र दशैं (चैते दशैं)",
    nameEn: "Chaitra Dashain",
    detailNe:
      "अश्विनको ठूलो दशैंको छाया परेको चैते दशैंमा दुर्गा पूजा, नवदुर्गा भजन र बलि चढाइ हुन्छ। नवरात्रभरि मन्दिरहरूमा भक्तहरूको घुइँचो लाग्छ।",
    detailEn:
      "A miniature of the great autumn Dashain, Chaitra Dashain brings nine nights of Durga worship, navadurga hymns and ritual offerings. Temple courtyards stay busy with devotees through the navaratri.",
  },
];

const quickFacts = [
  {
    labelNe: "महिना",
    labelEn: "Month",
    valueNe: "मार्च-अप्रिल",
    valueEn: "March-April",
  },
  {
    labelNe: "मुख्य पर्व",
    labelEn: "Key Festivals",
    valueNe: "घोडे जात्रा, राम नवमी, चैत्र दशैं",
    valueEn: "Ghode Jatra, Ram Navami, Chaitra Dashain",
  },
  {
    labelNe: "मौसम",
    labelEn: "Weather",
    valueNe: "बसन्त चरम, नयाँ वर्ष नजिक",
    valueEn: "Peak spring, New Year nears",
  },
  {
    labelNe: "संस्कृति",
    labelEn: "Culture",
    valueNe: "वर्ष अन्तिम महिना, नयाँ वर्षको तयारी",
    valueEn: "Final month of the year, New Year prep",
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
              <span className="lang-ne">
                विक्रम संवत् · बाह्रौँ महिना · मार्च-अप्रिल
              </span>
              <span className="lang-en">
                Vikram Samvat · Twelfth Month · March-April
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">चैत्र महिना</span>
              <span className="lang-en">Chaitra Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                चैत्र विक्रम संवत्को बाह्रौँ र अन्तिम महिना हो, जुन मार्चदेखि
                अप्रिलसम्म पर्छ। बसन्त ऋतु चरममा पुग्छ, आकाश फूलहरूले
                रङ्गिन हुन्छ र नयाँ वर्ष नजिकिँदै गर्दा सहरहरू उत्सवको
                तयारीमा व्यस्त हुन्छन्। टुँडिखेलको घोडे जात्रा, राम नवमीको
                भक्ति र चैत्र दशैंको नवरात्रले वर्षलाई भव्य विदाइ दिन्छन्।
                तिथि र पर्व{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Chaitra is the twelfth and final month of Bikram Sambat,
                spanning March to April. Spring peaks, skies turn flower-bright,
                and with the Nepali New Year approaching, cities buzz with
                festive preparation. Ghode Jatra&apos;s thundering parade at
                Tundikhel, the devotion of Ram Navami and the nine nights of
                Chaitra Dashain give the year a grand send-off. Find tithis
                and festivals on our{" "}
                <a href="/calendar/" className="underline">
                  Nepali calendar
                </a>
                .
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">एक नजरमा चैत्र</span>
              <span className="lang-en">Chaitra at a Glance</span>
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {quickFacts.map((f) => (
                <li
                  key={f.labelEn}
                  className="rounded-lg border border-border-primary p-6"
                >
                  <h3 className="mb-2 text-xl font-semibold">
                    <span className="lang-ne">{f.labelNe}</span>
                    <span className="lang-en">{f.labelEn}</span>
                  </h3>
                  <p>
                    <span className="lang-ne">{f.valueNe}</span>
                    <span className="lang-en">{f.valueEn}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">चैत्रका मुख्य चाडपर्वहरू</span>
              <span className="lang-en">Major Festivals in Chaitra</span>
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {festivals.map((f) => (
                <li
                  key={f.nameEn}
                  className="rounded-lg border border-border-primary p-6"
                >
                  <h3 className="mb-2 text-xl font-semibold">
                    <span className="lang-ne">{f.nameNe}</span>
                    <span className="lang-en">{f.nameEn}</span>
                  </h3>
                  <p>
                    <span className="lang-ne">{f.detailNe}</span>
                    <span className="lang-en">{f.detailEn}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">मौसम र ऋतु</span>
                <span className="lang-en">Weather &amp; Season</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">
                  चैत्रमा बसन्त ऋतु चरममा पुग्छ। दिउँसो गर्मी बढ्छ, बतास
                  चल्छ र कहिलेकाहीँ बोरा-आँधी आउँछ। फूलहरू फुल्छन्, रूखहरू
                  नयाँ पात फुटाउँछन् र हिमाली आकाश सफा देखिन्छ। जेठको
                  तपस्याअघि यो घुम्ने र उत्सव मनाउने उत्तम समय हो।
                </span>
                <span className="lang-en">
                  Spring reaches its peak in Chaitra. Afternoons warm up,
                  breezes pick up, and occasional nor&apos;wester thunderstorms
                  roll through. Flowers bloom, trees burst new leaves, and
                  mountain views stay crystal clear. It is a fine window for
                  travel before the summer heat sets in.
                </span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि र जीवनशैली</span>
                <span className="lang-en">Agriculture &amp; Life</span>
              </h2>
              <p>
                <span className="lang-ne">
                  गहुँ पाक्दै छ; किसानहरू कटाइको तयारी गर्छन् र धानका बीउ
                  तयार पार्छन्। बजारहरूमा नयाँ वर्षको साइत, खरिदबिक्री र
                  यात्राको चहलपहल बढ्छ।
                </span>
                <span className="lang-en">
                  Wheat ripens as farmers ready the harvest and prepare rice
                  nurseries. Markets hum with New Year shopping, travel
                  bookings and muhurat planning for the year ahead.
                </span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">सांस्कृतिक महत्त्व</span>
                <span className="lang-en">Cultural Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">
                  चैत्र वर्षको अन्तिम महिना भएकाले नयाँ वर्षको तयारीको
                  महिना पनि हो। घोडे जात्रामा टुँडिखेल दर्शकहरूले भरिन्छ;
                  नेवार परम्परामा यो जात्रा सहरको रक्षासँग जोडिएको छ। राम
                  नवमीमा भक्तहरू उपवास बसेर रामको नाम जप्छन्। चैते दशैंमा
                  नवदुर्गाको पूजा गरेर वर्षको अन्त्य शक्ति आराधनामा गरिन्छ।
                  चैत्र अन्त्यसँगै वैशाख १ गते नयाँ वर्षको स्वागतमा भिमसेन
                  स्तम्भ, शंखध्वनि र भेला-मेलाहरू हुन्छन्।
                </span>
                <span className="lang-en">
                  As the final month of the year, Chaitra doubles as New Year
                  preparation time. Ghode Jatra fills Tundikhel with
                  spectators, its Newar roots tied to guarding the city. On
                  Ram Navami devotees fast and chant Ram&apos;s name, while Chaitra
                  Dashain closes the year with navadurga worship. When Chaitra
                  ends, Bhimsen towers, conch calls and mass gatherings
                  welcome Baisakh 1 — the Nepali New Year.
                </span>
              </p>
              <p>
                <span className="lang-ne">
                  BS र AD मिति तुरुन्तै तुलना गर्न हाम्रो{" "}
                  <a href="/date-converter/" className="underline">
                    मिति रूपान्तरण
                  </a>{" "}
                  प्रयोग गर्नुहोस्।
                </span>
                <span className="lang-en">
                  Compare BS and AD dates instantly on our{" "}
                  <a href="/date-converter/" className="underline">
                    date converter
                  </a>
                  .
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">सम्बन्धित पृष्ठहरू</span>
              <span className="lang-en">Explore Related Pages</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/month/falgun/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: फागुन</span>
                <span className="lang-en">Previous month: Falgun</span>
              </a>
              <a href="/month/baisakh/" className="underline">
                <span className="lang-ne">अर्को महिना: वैशाख</span>
                <span className="lang-en">Next month: Baisakh</span>
              </a>
              <a href="/festival/ghode-jatra/" className="underline">
                <span className="lang-ne">घोडे जात्रा</span>
                <span className="lang-en">Ghode Jatra</span>
              </a>
              <a href="/2083/" className="underline">
                <span className="lang-ne">नयाँ वर्ष २०८३</span>
                <span className="lang-en">New Year 2083</span>
              </a>
              <a href="/calendar/" className="underline">
                <span className="lang-ne">पात्रो हेर्नुहोस्</span>
                <span className="lang-en">View Calendar</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
