import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "असार महिना — Ashadh 2083 | Third Month of Nepali Calendar",
  description:
    "असार (Ashadh) is the third month of Bikram Sambat, marking the arrival of monsoon, Ropain Diwas, Guru Purnima and Dakshinayana. Explore its festivals, weather, agriculture and astrology.",
  keywords: [
    "ashadh", "ashadh month", "असार महिना", "nepali calendar ashadh",
    "ropain diwas", "guru purnima", "dakshinayana", "dahi chiura",
    "bikram sambat third month", "nepali month june july", "monsoon nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/ashadh/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nepalicalendar.kebinmaharjan.com.np/" },
    { "@type": "ListItem", position: 2, name: "Months", item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/" },
    { "@type": "ListItem", position: 3, name: "Ashadh", item: "https://nepalicalendar.kebinmaharjan.com.np/month/ashadh/" },
  ],
};

const festivals = [
  {
    nameNe: "रोपाइं दिवस", nameEn: "Ropain Diwas",
    detailNe: "असार १५ मा धान रोपाइंको दिन मनाइन्छ। किसानहरू तालमा पसेर दही-चिउरा खाँदै गीत गाउँछन् — यसलाई राष्ट्रिय धान दिवस पनि भनिन्छ।",
    detailEn: "On Ashadh 15, farmers wade into muddy fields planting paddy, singing asarare songs and feasting on dahi-chiura. It is celebrated as National Paddy Day.",
  },
  {
    nameNe: "गुरु पूर्णिमा", nameEn: "Guru Purnima",
    detailNe: "आषाढ पूर्णिमामा गुरु, शिक्षक र आध्यात्मिक आचार्यहरूलाई श्रद्धाञ्जली अर्पण गरिन्छ। व्यासलाई सम्झेर वेद पाठ गरिन्छ।",
    detailEn: "On Ashadh Purnima, students honor teachers and spiritual gurus, remembering sage Vyasa with recitations of the Vedas.",
  },
  {
    nameNe: "दक्षिणायन", nameEn: "Dakshinayana",
    detailNe: "सूर्य दक्षिण दिशातर्फ बढ्न सुरु गर्छ। छ महिना लामो दक्षिणायन कालको सुरुवात — शुभ कार्यहरूका लागि विशेष गणना गरिन्छ।",
    detailEn: "The Sun begins its six-month southward journey. This Dakshinayana period carries special astrological calculations for auspicious ceremonies.",
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
              <span className="lang-ne">विक्रम संवत् २०८३ · तेस्रो महिना</span>
              <span className="lang-en">Bikram Sambat 2083 · Third Month</span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">असार महिना</span>
              <span className="lang-en">Ashadh Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">असार विक्रम संवत्को तेस्रो महिना हो। जुन मध्यदेखि जुलाई मध्यसम्म चल्ने यो महिना मनसुन वर्षासँगै हरियालीले भरिन्छ।</span>
              <span className="lang-en">Ashadh is the third month of the Bikram Sambat calendar. Running from mid-June to mid-July, it fills the land with greenery as the monsoon arrives.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">असारको महत्त्व</span>
              <span className="lang-en">Significance of Ashadh</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">असार नेपाली कृषि सभ्यताको मुटु हो। पहिलो मनसुनी पानी खेतमा खस्नासाथ देशभर रोपाइंको रौनक फैलिन्छ। असार १५ लाई राष्ट्रिय धान दिवसका रूपमा मनाइन्छ।</span>
              <span className="lang-en">Ashadh is the beating heart of Nepal's agrarian civilization. With the first monsoon drops hitting the fields, transplanting celebrations spread across the country, peaking on National Paddy Day.</span>
            </p>
            <p>
              <span className="lang-ne">गुरु पूर्णिमाले ज्ञानको महत्त्व सम्झाउँछ भने दक्षिणायनले वर्षको दोस्रो आधा सुरु गर्छ — यो महिना ऋतु चक्रको मोड हो।</span>
              <span className="lang-en">Guru Purnima honors the teachers who carry knowledge forward, while Dakshinayana opens the second half of the year — making Ashadh the turning point of the seasonal cycle.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">असारका प्रमुख चाडपर्व</span>
              <span className="lang-en">Major Festivals in Ashadh</span>
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
                <span className="lang-ne">मनसुन सुरु हुन्छ। नियमित वर्षाले नदीनाला भरिन्छन्, पहाड-तराई हरियालीले ढाकिन्छन्। आर्द्रता बढ्छ र दिन उमेदार हुन्छन्।</span>
                <span className="lang-en">The monsoon begins in full force. Regular rainfall swells rivers and cloaks hills and plains in lush green, though humidity makes days muggy.</span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि</span>
                <span className="lang-en">Agriculture</span>
              </h2>
              <p>
                <span className="lang-ne">धान रोप्ने मुख्य समय। मेसो बोधने (झारपात) गरिन्छ, मकै र तरकारी बाली हुर्कन्छन्। असारको रोपाइंले वर्षभरिको अन्न निर्धारण गर्छ।</span>
                <span className="lang-en">This is the prime time for paddy transplanting. Farmers weed young crops (meso bodhne) while maize and vegetables flourish — Ashadh's plantings decide the year's food supply.</span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">असारमा सूर्य मिथुन राशिबाट कर्कट राशिमा प्रवेश गर्छ। दक्षिणायन सुरु भएपछि दिन छोटो हुँदै जान्छन्।</span>
                <span className="lang-en">The Sun moves from Gemini into Cancer during Ashadh. After Dakshinayana begins, daylight hours gradually shorten.</span>
              </p>
              <p>
                <span className="lang-ne">आषाढ नक्षत्रबाट महिनाको नाम परेको हो। वर्षाकालमा यात्रा र ठूला कार्य टाढा राख्ने परम्परा छ।</span>
                <span className="lang-en">Named after the Adasha nakshatra, tradition advises caution with travel and major ventures during the rainy season.</span>
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
              <a href="/month/jestha/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: जेष्ठ</span>
                <span className="lang-en">Previous month: Jestha</span>
              </a>
              <a href="/month/shrawan/" className="underline">
                <span className="lang-ne">अर्को महिना: श्रावण</span>
                <span className="lang-en">Next month: Shrawan</span>
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
