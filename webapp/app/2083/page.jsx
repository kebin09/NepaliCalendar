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
    link: "/festival/dashain/",
  },
  {
    name: "तिहार",
    eng: "Tihar",
    month: "कार्तिक २०८३",
    dates: "१२ – १६",
    description: "यमपञ्चक, काग, कुकुर, लक्ष्मी र गोवर्धन पूजाको रोशनीको पर्व।",
    link: "/festival/tihar/",
  },
  {
    name: "छठ पर्व",
    eng: "Chhath",
    month: "कार्तिक २०८३",
    dates: "२१",
    description: "अस्ताउँदो र उदाउँदो सूर्यलाई अर्घ्य दिने महापर्व।",
    link: "/festival/chhath/",
  },
  {
    name: "माघे संक्रान्ति",
    eng: "Maghe Sankranti",
    month: "माघ २०८३",
    dates: "१",
    description: "घ्यू, चाकु र तरुल खाएर शीत ऋतुको उत्सव मनाइने दिन।",
    link: null,
  },
  {
    name: "शिवरात्रि",
    eng: "Shivaratri",
    month: "फागुन २०८३",
    dates: "११",
    description: "पशुपतिनाथमा लाखौं भक्तजन भेला हुने महादेवको पर्व।",
    link: "/festival/shivaratri/",
  },
  {
    name: "होली",
    eng: "Holi",
    month: "फागुन २०८३",
    dates: "२३",
    description: "रङ्ग र रमाइलोले भरिएको फागु पर्व।",
    link: "/festival/holi/",
  },
  {
    name: "नयाँ वर्ष",
    eng: "Nepali New Year",
    month: "बैशाख २०८४",
    dates: "१",
    description: "विक्रम संवत् २०८४ को पहिलो दिन — बैशाख १।",
    link: null,
  },
];

const moreFestivals = [
  {
    name: "बुद्ध जयन्ती",
    eng: "Buddha Jayanti",
    month: "बैशाख १०",
    description: "गौतम बुद्धको जन्म, ज्ञान प्राप्ति र महापरिनिर्वाणको स्मरण।",
  },
  {
    name: "रोपाइं दिवस",
    eng: "Ropain Diwas",
    month: "असार १५",
    description: "धान रोप्ने मुख्य दिन — कृषकहरूले चाडको रूपमा मनाउँछन्।",
  },
  {
    name: "नाग पञ्चमी",
    eng: "Nag Panchami",
    month: "श्रावण ८",
    description: "सर्पलाई पूजा गर्ने र जल, दूध चढाउने परम्परा।",
  },
  {
    name: "जनै पूर्णिमा",
    eng: "Janai Purnima",
    month: "श्रावण १५",
    description: "जनै (पवित्र डोरी) बदल्ने र रक्षाबन्धन मनाउने दिन।",
  },
  {
    name: "गाईजात्रा",
    eng: "Gai Jatra",
    month: "श्रावण ३१",
    description: "मृत्युलाई हाँस्दै स्वीकार गर्ने नेवार संस्कृतिको अनौठो पर्व।",
  },
  {
    name: "हरितालिका तीज",
    eng: "Teej",
    month: "भाद्र ८",
    description: "महिलाहरूले व्रत बस्ने र पार्वतीलाई पूजा गर्ने दिन।",
  },
  {
    name: "कुशे औंसी",
    eng: "Kushe Aunsi",
    month: "भाद्र १८",
    description: "बाबुको दिन — कुशाको जरा बोकेर पितृलाई सम्मान।",
  },
  {
    name: "इन्द्रजात्रा",
    eng: "Indra Jatra",
    month: "कार्तिक १",
    description: "काठमाडौंको इन्द्र र कुमारी जात्रा — रथ तानिन्छ।",
  },
  {
    name: "कुमार श्रावणी",
    eng: "Kumar Shrawani",
    month: "कार्तिक १",
    description: "कुमार भगवानलाई दूध र दही चढाउने व्रत।",
  },
  {
    name: "म्ह पूजा",
    eng: "Mha Puja",
    month: "कार्तिक १५",
    description: "आत्मा (म्ह) को पूजा — नेवार नयाँ वर्ष (नखत्या इसिंगु) को एक दिन।",
  },
  {
    name: "योमरि पुन्ही",
    eng: "Yomari Punhi",
    month: "मंसिर १०",
    description: "योमरि खाएर मुन्धुम गाउने नेवारहरूको आनन्द दिन।",
  },
  {
    name: "तमु ल्होसार",
    eng: "Tamu Losar",
    month: "पौष १",
    description: "गुरुङ समुदायको नयाँ वर्ष — ढोल, नृत्य र पक्वानी।",
  },
  {
    name: "राम नवमी",
    eng: "Ram Navami",
    month: "चैत्र ८",
    description: "भगवान रामको जन्म दिवस।",
  },
  {
    name: "गोरेटो दिवस",
    eng: "Goreto Diwas",
    month: "चैत्र १४",
    description: "विश्व हिन्दू दिवस — हिन्दू एकता र सांस्कृतिक सम्पदाको स्मरण।",
  },
  {
    name: "चैत्र दशैं",
    eng: "Chaitra Dashain",
    month: "चैत्र ३०",
    description: "नेपाली नयाँ वर्ष अघिको अन्तिम दिन — छोटो दशैं।",
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
            <p className="mb-3 font-semibold md:mb-4">विक्रम संवत्</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              २०८३
            </h1>
            <p className="md:text-md">
              विक्रम संवत् २०८३ (अप्रिल २०२६ – अप्रिल २०२७) मा पर्ने सबै
              प्रमुख चाडपर्व, सार्वजनिक बिदा र महत्त्वपूर्ण मितिहरूको सम्पूर्ण
              विवरण यहाँ पाउनुहोस्।
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/holidays/2083/"
                className="inline-block rounded bg-background-secondary px-5 py-2 text-sm font-semibold hover:bg-background-secondary/70"
              >
                सबै सार्वजनिक बिदा हेर्नुहोस्
              </a>
              <a
                href="/calendar/"
                className="inline-block rounded border border-border-primary px-5 py-2 text-sm font-semibold hover:bg-background-secondary"
              >
                पात्रो हेर्नुहोस्
              </a>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <p className="mb-3 font-semibold md:mb-4">मुख्य पर्वहरू</p>
              <h2 className="text-4xl font-bold md:text-6xl">
                २०८३ का प्रमुख चाडपर्व
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
                    {f.name}{" "}
                    <span className="text-base font-normal text-neutral-500">
                      ({f.eng})
                    </span>
                  </h3>
                  <p>{f.description}</p>
                  {f.link && (
                    <span className="mt-3 inline-block text-sm font-semibold text-blue-600">
                      थप पढ्नुहोस् →
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
                थप चाडपर्व र बिदाहरू
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
                    {f.name}{" "}
                    <span className="font-normal text-neutral-500">
                      ({f.eng})
                    </span>
                  </h3>
                  <p className="mt-1 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              वि.सं. २०८३ बारेमा
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                विक्रम संवत् २०८३ सन् (Gregorian) २०२६ अप्रिल १४ देखि २०२७ अप्रिल
                १३ सम्म छ। यो वर्ष बैशाख १ (अप्रिल १४, २०२६) बाट सुरु भएको हो।
              </p>
              <p>
                यस वर्ष प्रमुख सार्वजनिक बिदा ३० भन्दा बढी छन्। दशैं, तिहार, र
                छठ पर्व यस वर्षका सबैभन्दा ठूला चाडपर्व हुन्।
              </p>
              <p>
                हामीले यहाँ विक्रम संवत् २०८३ का सबै प्रमुख चाडपर्व र
                सार्वजनिक बिदाहरूको सूची तयार पारेका छौं। थप जानकारीको लागि{" "}
                <a href="/holidays/2083/" className="text-blue-600 underline">
                  सार्वजनिक बिदा २०८३
                </a>{" "}
                पृष्ठ हेर्नुहोस्।
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
