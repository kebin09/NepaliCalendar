import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "जेष्ठ महिना — Jestha 2083 | Second Month of Nepali Calendar",
  description:
    "जेष्ठ (Jestha) is the second month of Bikram Sambat, known for intense heat, Machhindranath Rath Yatra and Sithi Nakha. Explore its festivals, weather, agriculture and astrological significance.",
  keywords: [
    "jestha", "jestha month", "जेष्ठ महिना", "nepali calendar jestha",
    "machhindranath rath yatra", "sithi nakha", "bikram sambat second month",
    "vrishabh sankranti", "nepali month may june",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/jestha/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nepalicalendar.kebinmaharjan.com.np/" },
    { "@type": "ListItem", position: 2, name: "Months", item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/" },
    { "@type": "ListItem", position: 3, name: "Jestha", item: "https://nepalicalendar.kebinmaharjan.com.np/month/jestha/" },
  ],
};

const festivals = [
  {
    nameNe: "मछिन्द्रनाथ रथ यात्रा", nameEn: "Machhindranath Rath Yatra",
    detailNe: "ललितपुरमा वर्षाका देवता रातो मछिन्द्रनाथको भव्य रथ तानिन्छ। समयमै मनसुन पर्ने कामना गर्दै हप्तौंसम्म चल्ने जात्रा।",
    detailEn: "The towering chariot of the rain deity Rato Machhindranath is dragged through Patan over weeks, praying for timely monsoon rains.",
  },
  {
    nameNe: "सिठि नखा", nameEn: "Sithi Nakha",
    detailNe: "नेवार समुदायले कुवा, धारा र पोखरी सफा गर्छन्। समयको ढिँड़ो र प्यासीँसँग मनाइने पर्यावरणमैत्री पर्व।",
    detailEn: "The Newar community cleans wells, stone spouts and ponds on Kumar Sasthi, an eco-conscious festival celebrated with fried bread and sweets.",
  },
];

export default function Page() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <p className="mb-3 font-semibold md:mb-4">
              <span className="lang-ne">विक्रम संवत् २०८३ · दोस्रो महिना</span>
              <span className="lang-en">Bikram Sambat 2083 · Second Month</span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">जेष्ठ महिना</span>
              <span className="lang-en">Jestha Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">जेष्ठ विक्रम संवत्को दोस्रो महिना हो। मे मध्यदेखि जुन मध्यसम्म चल्ने यो महिना वर्षकै सबैभन्दा गर्मी महिना हो।</span>
              <span className="lang-en">Jestha is the second month of the Bikram Sambat calendar. Running from mid-May to mid-June, it is the hottest stretch of the Nepali year.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">जेष्ठको महत्त्व</span>
              <span className="lang-en">Significance of Jestha</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">जेष्ठ प्रतीक्षाको महिना हो। किसानहरू आकाशमा पहिलो मनसुनी बादल खोज्छन् र ललितपुरको रातो मछिन्द्रनाथ रथ यात्रा त्यही आशाको प्रतीक हो — वर्षाका देवतालाई सहरभरि तानिन्छ।</span>
              <span className="lang-en">Jestha is fundamentally a month of anticipation. Farmers scan the sky for the first monsoon clouds, and the grand Machhindranath chariot festival in Lalitpur embodies exactly that hope for rain.</span>
            </p>
            <p>
              <span className="lang-ne">सिठि नखाले पूर्वजहरूको पर्यावरणप्रति चेतना देखाउँछ — पानीका स्रोतहरू सफा गरेर आगामी खेतीको तयारी गरिन्छ।</span>
              <span className="lang-en">Sithi Nakha shows the environmental wisdom of our ancestors — cleaning water sources to prepare for the farming season ahead.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">जेष्ठका प्रमुख चाडपर्व</span>
              <span className="lang-en">Major Festivals in Jestha</span>
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {festivals.map((f) => (
                <li key={f.nameEn} className="rounded-lg border border-border-primary p-6">
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
                <span className="lang-ne">मौसम र प्रकृति</span>
                <span className="lang-en">Weather &amp; Season</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">जेष्ठमा गर्मी चरममा पुग्छ। तराईमा ३८°C सम्म, काठमाडौंमा तीसको दशक। मनसुनअघिका आँधी-बतास र बेलुकाका चट्याङ पर्छन्।</span>
                <span className="lang-en">Jestha delivers peak pre-monsoon heat. The Tarai frequently crosses 38°C while Kathmandu hovers in the low thirties with evening thunderstorms.</span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि</span>
                <span className="lang-en">Agriculture</span>
              </h2>
              <p>
                <span className="lang-ne">खेतीका लागि पानीको खोजी सुरु हुन्छ। किसानहरूले धानको बिरुवा तयार गर्छन्, सिंचाइ नाला मर्मत गर्छन् र खरपत गर्छन्।</span>
                <span className="lang-en">The search for water begins. Farmers raise paddy seedlings in nurseries, repair irrigation channels and weed maize fields before the rains arrive.</span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">वृषभ संक्रान्तिपछि सूर्य वृषभ राशिमा प्रवेश गर्छ। ज्येष्ठा नक्षत्रबाट यस महिनाको नाम परेको हो।</span>
                <span className="lang-en">After Vrishabh Sankranti, the Sun transits Taurus throughout most of Jestha. The month derives its name from the Jyeshtha nakshatra.</span>
              </p>
              <p>
                <span className="lang-ne">परम्पराअनुसार यस महिनामा विवाह र व्रतबन्ध गर्न टाढा राखिन्छ; तप, सेवा र उपवासका लागि उत्तम।</span>
                <span className="lang-en">Classical muhurat shastra traditionally avoids Jestha for weddings, considering it better suited to fasting, service and devotion.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">थप पृष्ठहरू हेर्नुहोस्</span>
              <span className="lang-en">Explore Related Pages</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/month/baisakh/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: बैशाख</span>
                <span className="lang-en">Previous month: Baisakh</span>
              </a>
              <a href="/month/ashadh/" className="underline">
                <span className="lang-ne">अर्को महिना: असार</span>
                <span className="lang-en">Next month: Ashadh</span>
              </a>
              <a href="/date-converter/" className="underline">
                <span className="lang-ne">मिति रूपान्तरण</span>
                <span className="lang-en">Date Converter</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
