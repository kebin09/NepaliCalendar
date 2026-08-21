import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "बैशाख महिना — Baisakh 2083 | Nepali New Year Month",
  description:
    "बैशाख (Baisakh) is the first month of the Bikram Sambat calendar, marking Nepali New Year, Bisket Jatra and Buddha Jayanti. Learn its festivals, weather, agriculture and astrological significance.",
  keywords: [
    "baisakh", "baisakh month", "nepali new year", "बैशाख महिना",
    "bikram sambat first month", "buddha jayanti", "bisket jatra",
    "nepali calendar baisakh", "ubhauli festival", "mesh sankranti",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/baisakh/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nepalicalendar.kebinmaharjan.com.np/" },
    { "@type": "ListItem", position: 2, name: "Months", item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/" },
    { "@type": "ListItem", position: 3, name: "Baisakh", item: "https://nepalicalendar.kebinmaharjan.com.np/month/baisakh/" },
  ],
};

const festivals = [
  {
    nameNe: "नयाँ वर्ष", nameEn: "Nepali New Year",
    detailNe: "बैशाख १ मा नयाँ बर्ष स्वागत गरिन्छ। परिवार भेला, मन्दिर दर्शन र शुभकामना आदानप्रदान।",
    detailEn: "Baisakh 1 welcomes the New Year. Family gatherings, temple visits and exchange of good wishes.",
  },
  {
    nameNe: "बिस्केट जात्रा", nameEn: "Bisket Jatra",
    detailNe: "भक्तपुरमा भैरव रथ तानिन्छ र योसी (लिङ्गो) उठाइन्छ। पुरानो किंवदन्तीको पुनर्निर्माण।",
    detailEn: "The Bhairab chariot is pulled in Bhaktapur and the Yo-si pole is raised, re-enacting ancient legends.",
  },
  {
    nameNe: "बुद्ध जयन्ती", nameEn: "Buddha Jayanti",
    detailNe: "बैशाख पूर्णिमामा गौतम बुद्धको जन्म, ज्ञान प्राप्ति र महापरिनिर्वाणको स्मरण। लुम्बिनी, स्वयम्भू, बौद्ध।",
    detailEn: "On Baisakh Purnima, Buddhists honor the birth, enlightenment and mahaparinirvana of Gautam Buddha at Lumbini, Swayambhu and Boudhanath.",
  },
  {
    nameNe: "उभौली पर्व", nameEn: "Ubhauli Parva",
    detailNe: "किराँत समुदायले साकेला सिली नृत्य गरी प्रकृतिको पूजा गर्छन्। उच्च चरनमा जाने पहिले मनाइने।",
    detailEn: "Kirant communities celebrate with Sakela Sili dances, worshipping nature before moving to higher pastures for summer.",
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
              <span className="lang-ne">विक्रम संवत् २०८३ · पहिलो महिना</span>
              <span className="lang-en">Bikram Sambat 2083 · First Month</span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">बैशाख महिना</span>
              <span className="lang-en">Baisakh Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">बैशाख विक्रम संवत्को पहिलो महिना हो। अप्रिल मध्यदेखि मे मध्यसम्म चल्ने यो महिना नेपाली नयाँ वर्षसँग सुरु हुन्छ।</span>
              <span className="lang-en">Baisakh is the first month of the Bikram Sambat calendar. Falling from mid-April to mid-May, it opens with Nepali New Year and carries the freshness of spring.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">बैशाखको महत्त्व</span>
              <span className="lang-en">Significance of Baisakh</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">बैशाख दुईवटा पहिचान बोकेको छ: यो नेपाली सरकारी र शैक्षिक वर्षको सुरुवात हो र परिवारहरूको आध्यात्मिक रिसेट बटन हो। सरकारी कार्यालय, विद्यालय र व्यापारहरू नयाँ खाता खोल्छन्।</span>
              <span className="lang-en">Baisakh holds a double identity: it is both the administrative start of the Nepali fiscal and academic year and the spiritual reset button for households. Government offices, schools and businesses open fresh ledgers.</span>
            </p>
            <p>
              <span className="lang-ne">काठमाडौं उपत्यकामा भक्तपुरको बिस्केट जात्राको ठूलो रथ र थिमीको बोदे जात्राले नयाँ वर्ष घोषणा गर्छ।</span>
              <span className="lang-en">In the Kathmandu Valley, the thundering chariots of Bisket Jatra in Bhaktapur and the tongue-piercing Bode Jatra in Thimi announce the new year with centuries-old spectacle.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">बैशाखका प्रमुख चाडपर्व</span>
              <span className="lang-en">Major Festivals in Baisakh</span>
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
                <span className="lang-ne">बैशाखमा बसन्तदेखि ग्रीष्ममा जाने समय हो। दिन गर्म हुन थाल्छन्, तराईमा ३०°C सम्म पुग्छ। नगरकोट र पोखरामा सुन्दर मौसम।</span>
                <span className="lang-en">Baisakh transitions from spring to early summer. Days turn warm with temperatures climbing toward 30°C in the Tarai. Hill stations enjoy mild sunshine.</span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि</span>
                <span className="lang-en">Agriculture</span>
              </h2>
              <p>
                <span className="lang-ne">किसानहरूले बैशाखलाई सुनौलो बाली महिना भन्छन्। गहुँ काटिन्छ, मकै रोपिन्छ। धानको बिरुवा तयार गरिन्छ।</span>
                <span className="lang-en">Farmers call Baisakh the golden harvest month. Wheat is cut and threshed, maize is sown, and paddy nurseries are prepared for transplanting.</span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">बैशाख मेष संक्रान्तिबाट सुरु हुन्छ — सूर्य मेष राशिमा प्रवेश गर्छ। वैशाख नक्षत्रबाट यसको नाम परेको हो।</span>
                <span className="lang-en">Baisakh begins with Mesh Sankranti, when the Sun enters Aries. The month is named after the Vaishakha nakshatra, under which the full moon rises.</span>
              </p>
              <p>
                <span className="lang-ne">शुभ कार्य, गृह प्रवेश र व्यापार सुरु गर्न उत्तम समय।</span>
                <span className="lang-en">Highly favorable for griha pravesh, business openings and sacred ceremonies.</span>
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
                <span className="lang-ne">अर्को महिना: जेष्ठ</span>
                <span className="lang-en">Next month: Jestha</span>
              </a>
              <a href="/month/chaitra/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: चैत्र</span>
                <span className="lang-en">Previous month: Chaitra</span>
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
