import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

const siteUrl = "https://nepalicalendar.kebinmaharjan.com.np";

export const metadata = {
  title: "विक्रम संवत् २०८३ | Nepali Calendar 2083 Festivals & Holidays",
  description:
    "विक्रम संवत् २०८३ का सबै प्रमुख चाडपर्व र सार्वजनिक बिदाहरू — दसैं, तिहार, छठ, शिवरात्रि, होली, र माघे संक्रान्ति। Full list of festivals and holidays of Bikram Sambat 2083.",
  keywords: [
    "nepali calendar 2083",
    "विक्रम संवत् २०८३",
    "nepali festivals 2083",
    "2083 chadparva",
    "dashain tihar 2083",
    "nepal holiday calendar 2083",
    "chaitra dashain 2083",
  ],
  openGraph: {
    title: "विक्रम संवत् २०८३ | Nepali Calendar 2083",
    description:
      "Complete list of Nepali festivals and holidays in Bikram Sambat 2083.",
    url: siteUrl + "/2083/",
  },
  alternates: {
    canonical: siteUrl + "/2083/",
  },
};

const festivals = [
  {
    name: "दसैं",
    eng: "Dashain",
    month: "आश्विन २०८३",
    dates: "७ – २२",
    description: "नवरात्रि, फूलपाती, माहा अष्टमी र विजया दशमी — विजयको महापर्व।",
    en: {
      name: "Dashain",
      description:
        "Navaratri, Fulpati, Maha Astami and Vijaya Dashami — the great festival of victory.",
    },
    link: "/festival/dashain/",
  },
  {
    name: "तिहार",
    eng: "Tihar",
    month: "कार्तिक २०८३",
    dates: "१२ – १६",
    description: "यमपञ्चक, काग, कुकुर, लक्ष्मी र गोवर्धन पूजाको रोशनीको पर्व।",
    en: {
      name: "Tihar",
      description:
        "The festival of lights — Yamapanchak with Kag, Kukur, Laxmi and Govardhan Puja.",
    },
    link: "/festival/tihar/",
  },
  {
    name: "छठ पर्व",
    eng: "Chhath",
    month: "कार्तिक २०८३",
    dates: "२१",
    description: "अस्ताउँदो र उदाउँदो सूर्यलाई अर्घ्य दिने महापर्व।",
    en: {
      name: "Chhath Parva",
      description:
        "The great festival of offering arghya to the setting and rising sun.",
    },
    link: "/festival/chhath/",
  },
  {
    name: "माघे संक्रान्ति",
    eng: "Maghe Sankranti",
    month: "माघ २०८३",
    dates: "१",
    description: "घ्यू, चाकु र तरुल खाएर शीत ऋतुको उत्सव मनाइने दिन।",
    en: {
      name: "Maghe Sankranti",
      description:
        "The day the winter season is celebrated by eating ghee, chaku and yams.",
    },
    link: null,
  },
  {
    name: "शिवरात्रि",
    eng: "Shivaratri",
    month: "फागुन २०८३",
    dates: "११",
    description: "पशुपतिनाथमा लाखौं भक्तजन भेला हुने महादेवको पर्व।",
    en: {
      name: "Shivaratri",
      description:
        "The festival of Lord Shiva when hundreds of thousands of devotees gather at Pashupatinath.",
    },
    link: "/festival/shivaratri/",
  },
  {
    name: "होली",
    eng: "Holi",
    month: "फागुन २०८३",
    dates: "२३",
    description: "रङ्ग र रमाइलोले भरिएको फागु पर्व।",
    en: {
      name: "Holi",
      description: "The Fagu festival filled with colors and fun.",
    },
    link: "/festival/holi/",
  },
  {
    name: "नयाँ वर्ष",
    eng: "Nepali New Year",
    month: "बैशाख २०८४",
    dates: "१",
    description: "विक्रम संवत् २०८४ को पहिलो दिन — बैशाख १।",
    en: {
      name: "Nepali New Year",
      description:
        "The first day of Bikram Sambat 2084 — Baisakh 1.",
    },
    link: null,
  },
];

const moreFestivals = [
  {
    name: "बुद्ध जयन्ती",
    eng: "Buddha Jayanti",
    month: "बैशाख १०",
    description: "गौतम बुद्धको जन्म, ज्ञान प्राप्ति र महापरिनिर्वाणको स्मरण।",
    en: {
      name: "Buddha Jayanti",
      description:
        "Remembering the birth, enlightenment and mahaparinirvana of Gautam Buddha.",
    },
  },
  {
    name: "रोपाइं दिवस",
    eng: "Ropain Diwas",
    month: "असार १५",
    description: "धान रोप्ने मुख्य दिन — कृषकहरूले चाडको रूपमा मनाउँछन्।",
    en: {
      name: "Ropain Diwas",
      description:
        "The main day of rice planting — celebrated by farmers as a festival.",
    },
  },
  {
    name: "नाग पञ्चमी",
    eng: "Nag Panchami",
    month: "श्रावण ८",
    description: "सर्पलाई पूजा गर्ने र जल, दूध चढाउने परम्परा।",
    en: {
      name: "Nag Panchami",
      description:
        "The tradition of worshipping snakes and offering water and milk.",
    },
  },
  {
    name: "जनै पूर्णिमा",
    eng: "Janai Purnima",
    month: "श्रावण १५",
    description: "जनै (पवित्र डोरी) बदल्ने र रक्षाबन्धन मनाउने दिन।",
    en: {
      name: "Janai Purnima",
      description:
        "The day to change the janai (holy thread) and celebrate Rakshabandhan.",
    },
  },
  {
    name: "गाईजात्रा",
    eng: "Gai Jatra",
    month: "श्रावण ३१",
    description: "मृत्युलाई हाँस्दै स्वीकार गर्ने नेवार संस्कृतिको अनौठो पर्व।",
    en: {
      name: "Gai Jatra",
      description:
        "The unique Newar festival of accepting death with laughter.",
    },
  },
  {
    name: "हरितालिका तीज",
    eng: "Teej",
    month: "भाद्र ८",
    description: "महिलाहरूले व्रत बस्ने र पार्वतीलाई पूजा गर्ने दिन।",
    en: {
      name: "Haritalika Teej",
      description:
        "The day women fast and worship Goddess Parvati.",
    },
  },
  {
    name: "कुशे औंसी",
    eng: "Kushe Aunsi",
    month: "भाद्र १८",
    description: "बाबुको दिन — कुशाको जरा बोकेर पितृलाई सम्मान।",
    en: {
      name: "Kushe Aunsi",
      description:
        "Father's Day — honoring ancestors with the root of kush grass.",
    },
  },
  {
    name: "इन्द्रजात्रा",
    eng: "Indra Jatra",
    month: "कार्तिक १",
    description: "काठमाडौंको इन्द्र र कुमारी जात्रा — रथ तानिन्छ।",
    en: {
      name: "Indra Jatra",
      description:
        "The Indra and Kumari jatra of Kathmandu — chariots are pulled.",
    },
  },
  {
    name: "कुमार श्रावणी",
    eng: "Kumar Shrawani",
    month: "कार्तिक १",
    description: "कुमार भगवानलाई दूध र दही चढाउने व्रत।",
    en: {
      name: "Kumar Shrawani",
      description:
        "The fasting tradition of offering milk and curd to Lord Kumar.",
    },
  },
  {
    name: "म्ह पूजा",
    eng: "Mha Puja",
    month: "कार्तिक १५",
    description: "आत्मा (म्ह) को पूजा — नेवार नयाँ वर्ष (नखत्या इसिंगु) को एक दिन।",
    en: {
      name: "Mha Puja",
      description:
        "The worship of the self (mha) — part of the Newar new year (Nhu Dan).",
    },
  },
  {
    name: "योमरि पुन्ही",
    eng: "Yomari Punhi",
    month: "मंसिर १०",
    description: "योमरि खाएर मुन्धुम गाउने नेवारहरूको आनन्द दिन।",
    en: {
      name: "Yomari Punhi",
      description:
        "A joyful day for Newars, eating yomari and singing mundhum.",
    },
  },
  {
    name: "तमु ल्होसार",
    eng: "Tamu Losar",
    month: "पौष १",
    description: "गुरुङ समुदायको नयाँ वर्ष — ढोल, नृत्य र पक्वानी।",
    en: {
      name: "Tamu Losar",
      description:
        "The new year of the Gurung community — drums, dances and feasts.",
    },
  },
  {
    name: "राम नवमी",
    eng: "Ram Navami",
    month: "चैत्र ८",
    description: "भगवान रामको जन्म दिवस।",
    en: {
      name: "Ram Navami",
      description: "The birthday of Lord Ram.",
    },
  },
  {
    name: "गोरेटो दिवस",
    eng: "Goreto Diwas",
    month: "चैत्र १४",
    description: "विश्व हिन्दू दिवस — हिन्दू एकता र सांस्कृतिक सम्पदाको स्मरण।",
    en: {
      name: "Goreto Diwas",
      description:
        "World Hindu Day — remembering Hindu unity and cultural heritage.",
    },
  },
  {
    name: "चैत्र दशैं",
    eng: "Chaitra Dashain",
    month: "चैत्र ३०",
    description: "नेपाली नयाँ वर्ष अघिको अन्तिम दिन — छोटो दशैं।",
    en: {
      name: "Chaitra Dashain",
      description:
        "The last day before the Nepali new year — a short Dashain.",
    },
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "होम",
      item: siteUrl + "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "वि.सं. २०८३",
      item: siteUrl + "/2083/",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nepali Festivals 2083",
  description: "Major festivals and holidays of Bikram Sambat 2083",
  numberOfItems: festivals.length + moreFestivals.length,
  itemListElement: [...festivals, ...moreFestivals].map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: f.name + " (" + f.eng + ")",
    description: f.description,
  })),
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <main>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold md:mb-4">
              <span className="lang-ne">विक्रम संवत्</span>
              <span className="lang-en">Bikram Sambat</span>
            </p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              <span className="lang-ne">२०८३</span>
              <span className="lang-en">2083</span>
            </h1>
            <p className="md:text-md">
              <span className="lang-ne">
                विक्रम संवत् २०८३ (अप्रिल २०२६ – अप्रिल २०२७) मा पर्ने सबै
                प्रमुख चाडपर्व, सार्वजनिक बिदा र महत्त्वपूर्ण मितिहरूको सम्पूर्ण
                विवरण यहाँ पाउनुहोस्।
              </span>
              <span className="lang-en">
                Find here complete details of all major festivals, public
                holidays and important dates falling in Bikram Sambat 2083
                (April 2026 – April 2027).
              </span>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/holidays/2083/"
                className="inline-block rounded bg-background-secondary px-5 py-2 text-sm font-semibold hover:bg-background-secondary/70"
              >
                <span className="lang-ne">सबै सार्वजनिक बिदा हेर्नुहोस्</span>
                <span className="lang-en">View All Public Holidays</span>
              </a>
              <a
                href="/calendar/"
                className="inline-block rounded border border-border-primary px-5 py-2 text-sm font-semibold hover:bg-background-secondary"
              >
                <span className="lang-ne">पात्रो हेर्नुहोस्</span>
                <span className="lang-en">View Calendar</span>
              </a>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <p className="mb-3 font-semibold md:mb-4">
                <span className="lang-ne">मुख्य पर्वहरू</span>
                <span className="lang-en">Major Festivals</span>
              </p>
              <h2 className="text-4xl font-bold md:text-6xl">
                <span className="lang-ne">२०८३ का प्रमुख चाडपर्व</span>
                <span className="lang-en">Major Festivals of 2083</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {festivals.map((f) => (
                <a
                  key={f.name}
                  href={f.link || "/holidays/2083/"}
                  className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
                >
                  <p className="mb-1 text-sm font-semibold text-neutral-600">
                    {f.month} ({f.dates})
                  </p>
                  <h3 className="mb-1 text-xl font-bold">
                    <span className="lang-ne">{f.name}</span>
                    <span className="lang-en">{f.en.name}</span>
                  </h3>
                  <p>
                    <span className="lang-ne">{f.description}</span>
                    <span className="lang-en">{f.en.description}</span>
                  </p>
                  {f.link && (
                    <span className="mt-3 inline-block text-sm font-semibold text-blue-600">
                      <span className="lang-ne">थप पढ्नुहोस् →</span>
                      <span className="lang-en">Read More →</span>
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background-secondary px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <h2 className="text-4xl font-bold md:text-6xl">
                <span className="lang-ne">थप चाडपर्व र बिदाहरू</span>
                <span className="lang-en">More Festivals &amp; Holidays</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {moreFestivals.map((f) => (
                <div
                  key={f.name}
                  className="rounded-lg border border-border-primary bg-white p-5"
                >
                  <p className="text-sm font-semibold text-neutral-500">
                    {f.month}
                  </p>
                  <h3 className="mt-1 font-bold">
                    <span className="lang-ne">{f.name}</span>
                    <span className="lang-en">{f.en.name}</span>
                  </h3>
                  <p className="mt-1 text-sm">
                    <span className="lang-ne">{f.description}</span>
                    <span className="lang-en">{f.en.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              <span className="lang-ne">वि.सं. २०८३ बारेमा</span>
              <span className="lang-en">About BS 2083</span>
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                <span className="lang-ne">
                  विक्रम संवत् २०८३ सन् (Gregorian) २०२६ अप्रिल १४ देखि २०२७ अप्रिल
                  १३ सम्म छ। यो वर्ष बैशाख १ (अप्रिल १४, २०२६) बाट सुरु भएको हो।
                </span>
                <span className="lang-en">
                  Bikram Sambat 2083 runs from April 14, 2026 to April 13, 2027
                  (Gregorian). This year began on Baisakh 1 (April 14, 2026).
                </span>
              </p>
              <p>
                <span className="lang-ne">
                  यस वर्ष प्रमुख सार्वजनिक बिदा ३० भन्दा बढी छन्। दशैं, तिहार, र
                  छठ पर्व यस वर्षका सबैभन्दा ठूला चाडपर्व हुन्।
                </span>
                <span className="lang-en">
                  This year has more than 30 major public holidays. Dashain,
                  Tihar and Chhath are the biggest festivals of the year.
                </span>
              </p>
              <p>
                <span className="lang-ne">
                  हामीले यहाँ विक्रम संवत् २०८३ का सबै प्रमुख चाडपर्व र
                  सार्वजनिक बिदाहरूको सूची तयार पारेका छौं। थप जानकारीको लागि{" "}
                  <a href="/holidays/2083/" className="text-blue-600 underline">
                    सार्वजनिक बिदा २०८३
                  </a>{" "}
                  पृष्ठ हेर्नुहोस्।
                </span>
                <span className="lang-en">
                  We have prepared here a list of all major festivals and public
                  holidays of Bikram Sambat 2083. For more information, visit
                  the{" "}
                  <a href="/holidays/2083/" className="text-blue-600 underline">
                    Public Holidays 2083
                  </a>{" "}
                  page.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
