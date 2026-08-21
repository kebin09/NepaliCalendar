import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "श्रावण महिना — Shrawan 2083 | Fourth Month of Nepali Calendar",
  description:
    "श्रावण (Shrawan) is the fourth month of Bikram Sambat, sacred to Lord Shiva with Nag Panchami, Janai Purnima and the start of Chaturmas. Explore its festivals, weather and astrology.",
  keywords: [
    "shrawan", "shrawan month", "श्रावण महिना", "nepali calendar shrawan",
    "nag panchami", "janai purnima", "chaturmas", "shrawan sombar",
    "bikram sambat fourth month", "nepali month july august", "singha sankranti",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/shrawan/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nepalicalendar.kebinmaharjan.com.np/" },
    { "@type": "ListItem", position: 2, name: "Months", item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/" },
    { "@type": "ListItem", position: 3, name: "Shrawan", item: "https://nepalicalendar.kebinmaharjan.com.np/month/shrawan/" },
  ],
};

const festivals = [
  {
    nameNe: "नाग पञ्चमी", nameEn: "Nag Panchami",
    detailNe: "श्रावण शुक्ल पञ्चमीमा नागको तस्बिर ढोकामा टाँगेर दूध, अक्षता र दुबो चढाइन्छ। सर्पदंशबाट सुरक्षाको कामना गरिन्छ।",
    detailEn: "On Shukla Panchami, pictures of serpents are pasted above doorways with offerings of milk, rice and dubo grass, praying for protection from snake bites.",
  },
  {
    nameNe: "जनै पूर्णिमा", nameEn: "Janai Purnima",
    detailNe: "जनैधारीहरूले पवित्र स्नान गरी नयाँ जनै लगाउँछन्। पुरोहितले रक्षाबन्धन बाँध्छन्; नेवार समुदायले क्वटी महोत्सव मनाउँछन्।",
    detailEn: "Tagadhari Hindus bathe at holy rivers and change their sacred thread. Priests tie raksha bandhan threads, while Newars celebrate Kwati with a nine-bean sprout feast.",
  },
  {
    nameNe: "चतुर्मास सुरु", nameEn: "Chaturmas Begins",
    detailNe: "चार महिना लामो चतुर्मासको सुरुवात — भगवान् विष्णुको निद्रा काल। विवाहजस्ता शुभ कार्य रोकिन्छन्, भक्ति र व्रत बढ्छन्।",
    detailEn: "The four-month holy period of Chaturmas begins — Lord Vishnu's slumber. Weddings pause while devotion, fasting and pilgrimage intensify.",
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
              <span className="lang-ne">विक्रम संवत् २०८३ · चौथो महिना</span>
              <span className="lang-en">Bikram Sambat 2083 · Fourth Month</span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">श्रावण महिना</span>
              <span className="lang-en">Shrawan Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">श्रावण विक्रम संवत्को चौथो महिना हो। जुलाई मध्यदेखि अगस्ट मध्यसम्म चल्ने यो महिना भगवान् शिवको नाममा सबैभन्दा पवित्र मानिन्छ।</span>
              <span className="lang-en">Shrawan is the fourth month of the Bikram Sambat calendar. Running from mid-July to mid-August, it is considered the holiest month in devotion to Lord Shiva.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">श्रावणको महत्त्व</span>
              <span className="lang-en">Significance of Shrawan</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">श्रावण आध्यात्मिक उर्जाले भरिएको महिना हो। सोमबारहरूमा शिव मन्दिरहरू भक्तहरूले भरिन्छन्; विशेष गरी महिलाहरूले व्रत बसेर पार्वतीजस्तै सुखी दाम्पत्य जीवनको कामना गर्छन्।</span>
              <span className="lang-en">Shrawan pulses with spiritual energy. Every Monday, Shiva temples overflow with devotees — especially women fasting for a blissful married life like Parvati's.</span>
            </p>
            <p>
              <span className="lang-ne">यो महिनाबाट चतुर्मास सुरु हुन्छ, जसमा विवाह र ठूला शुभ कार्यहरू रोकिन्छन् र भक्ति, दान र अध्ययनमा जोड दिइन्छ।</span>
              <span className="lang-en">The month opens Chaturmas, when weddings and grand ceremonies pause in favor of devotion, charity and scriptural study.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">श्रावणका प्रमुख चाडपर्व</span>
              <span className="lang-en">Major Festivals in Shrawan</span>
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
                <span className="lang-ne">श्रावणमा मनसुन चरममा पुग्छ। निरन्तर वर्षाले बाढी र पहिरोको जोखिम बढाउँछ; खेतबारी र नदीनाला भरिन्छन्।</span>
                <span className="lang-en">Shrawan brings the monsoon to its peak. Continuous rainfall raises risks of floods and landslides while fields and rivers brim with water.</span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि</span>
                <span className="lang-en">Agriculture</span>
              </h2>
              <p>
                <span className="lang-ne">धानका बाली हरिया हुँदै बढ्छन्। किसानहरू झारपात, मल र कीट व्यवस्थापनमा व्यस्त हुन्छन्; तरकारी बाली फस्टाउँछन्।</span>
                <span className="lang-en">Paddy crops flourish in the rain. Farmers stay busy weeding, fertilizing and managing pests while vegetable gardens thrive.</span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">सिंह संक्रान्तिपछि सूर्य सिंह (लियो) राशिमा प्रवेश गर्छ। श्रवण नक्षत्रबाट यस महिनाको नाम परेको हो।</span>
                <span className="lang-en">After Singha Sankranti, the Sun enters Leo. The month is named after the Shravana nakshatra, the listening star of Vishnu.</span>
              </p>
              <p>
                <span className="lang-ne">श्रावण सोमबार र शुक्रबार व्रतका लागि अत्यन्त शुभ मानिन्छ; शिव-पार्वती पूजाको फल अनेक गुणा बढ्छ भनिन्छ।</span>
                <span className="lang-en">Shrawan Mondays and Fridays are highly auspicious for fasting — worship of Shiva and Parvati is said to yield manifold blessings.</span>
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
              <a href="/month/ashadh/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: असार</span>
                <span className="lang-en">Previous month: Ashadh</span>
              </a>
              <a href="/month/bhadra/" className="underline">
                <span className="lang-ne">अर्को महिना: भाद्र</span>
                <span className="lang-en">Next month: Bhadra</span>
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
