import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "आश्विन महिना — Ashwin 2083 | Sixth Month of Nepali Calendar",
  description:
    "आश्विन (Ashwin) is the sixth month of Bikram Sambat and home to Nepal's greatest festival, Dashain, with Navaratri, Phulpati, Tika and Jamara. Explore its festivals, weather and astrology.",
  keywords: [
    "ashwin", "ashwin month", "आश्विन महिना", "nepali calendar ashwin",
    "dashain", "navaratri", "fulpati", "vijaya dashami", "tika jamara",
    "bikram sambat sixth month", "nepali month september october",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/ashwin/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nepalicalendar.kebinmaharjan.com.np/" },
    { "@type": "ListItem", position: 2, name: "Months", item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/" },
    { "@type": "ListItem", position: 3, name: "Ashwin", item: "https://nepalicalendar.kebinmaharjan.com.np/month/ashwin/" },
  ],
};

const festivals = [
  {
    nameNe: "नवरात्रि", nameEn: "Navaratri",
    detailNe: "नौ रात नौ देवीको पूजा गरिन्छ। घर-घर र मन्दिरमा दुर्गा भवानीको आराधना; बलि चढाइन्छ र उपवास बसिन्छ।",
    detailEn: "Nine nights of worshipping nine forms of Goddess Durga at homes and temples with offerings, sacrifices and fasting.",
  },
  {
    nameNe: "फूलपाती", nameEn: "Fulpati",
    detailNe: "सप्तमीका दिन गोरखकालीबाट फूलपाती काठमाडौं हनुमानढोका ल्याइन्छ। सेना-प्रहरीको भव्य जुलुस र परम्परागत समारोह हुन्छ।",
    detailEn: "On Saptami, sacred Fulpati plants are carried from Gorkha to Hanuman Dhoka in Kathmandu with a grand military parade.",
  },
  {
    nameNe: "विजया दशमी (टीका)", nameEn: "Vijaya Dashami (Tika)",
    detailNe: "दशैंको मुख्य दिन। ठूलाहरूले अक्षता, धूप र लाल टीका लगाई जमरा दिँदै आशीर्वाद दिन्छन्; नयाँ लुगा र दक्षिणा आदानप्रदान हुन्छ।",
    detailEn: "The main day of Dashain. Elders bless younger ones with red tika, rice grains and jamara barley shoots, exchanging new clothes and gifts.",
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
              <span className="lang-ne">विक्रम संवत् २०८३ · छैटौं महिना</span>
              <span className="lang-en">Bikram Sambat 2083 · Sixth Month</span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">आश्विन महिना</span>
              <span className="lang-en">Ashwin Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">आश्विन विक्रम संवत्को छैटौं महिना हो। सेप्टेम्बर मध्यदेखि अक्टोबर मध्यसम्म चल्ने यो महिना नेपालको सबैभन्दा ठूलो चाडपर्व दशैंको घर हो।</span>
              <span className="lang-en">Ashwin is the sixth month of the Bikram Sambat calendar. Running from mid-September to mid-October, it hosts Dashain — Nepal's greatest festival.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">आश्विनको महत्त्व</span>
              <span className="lang-en">Significance of Ashwin</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">आश्विन खुशी फर्काइको महिना हो। दशैंले सत्यको असुरक्षित विजय सम्झाउँछ — दुर्गा भवानीले महिषासुरमाथि विजय प्राप्त गरेको र रामले रावण परास्त गरेको कथा।</span>
              <span className="lang-en">Ashwin is the month of homecoming and joy. Dashain commemorates the victory of good over evil — Durga's triumph over Mahishasura and Rama's defeat of Ravana.</span>
            </p>
            <p>
              <span className="lang-ne">फूलपाती, टीका र जमराको परम्पराले परिवारलाई भेला गराउँछ। देशभर फैलिएका आफन्तहरू घर फर्केर ठूलाहरूको आशीर्वाद लिन्छन् — यो नेपाली समाजको मुटु हो।</span>
              <span className="lang-en">Phulpati, tika and jamara traditions gather families together. Relatives return home from across the country for elders' blessings — the beating heart of Nepali society.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">आश्विनका प्रमुख चाडपर्व</span>
              <span className="lang-en">Major Festivals in Ashwin</span>
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
                <span className="lang-ne">मनसुन सकिन्छ। आकाश सफा हुँदै जान्छ, हावा चिसिँदै जान्छ र बालीनाली पाक्ने समय आउँछ — वर्षकै सबैभन्दा सुन्दर मौसम।</span>
                <span className="lang-en">The monsoon ends. Skies clear, breezes turn crisp, and harvest season arrives — the most beautiful weather of the year.</span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">संस्कृति</span>
                <span className="lang-en">Culture</span>
              </h2>
              <p>
                <span className="lang-ne">फूलपातीको जुलुस, टीका-जमरा र परिवार भेलाले आश्विन रङ्गाउँछ। झिंगान, लाठी-चार्गे र चङ्गा उडाउने परम्परा पनि दशैंसँगै जोडिएका छन्।</span>
                <span className="lang-en">Fulpati parades, tika-jamara blessings and family reunions color Ashwin. Swings (linge ping), bamboo games and kite flying are also woven into Dashain festivities.</span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">आश्विनमा सूर्य कन्या राशिबाट तुला राशिमा प्रवेश गर्छ। आश्विन नक्षत्रबाट महिनाको नाम परेको हो।</span>
                <span className="lang-en">The Sun moves from Virgo into Libra during Ashwin. The month takes its name from the Ashwini nakshatra, star of the divine twins.</span>
              </p>
              <p>
                <span className="lang-ne">शुक्ल पक्षको नौ रात शक्ति उपासनाका लागि अत्यन्त शुभ मानिन्छ; दशमीको दिन विजय मुहूर्तमा टीका लगाइन्छ।</span>
                <span className="lang-en">The nine nights of Shukla Paksha are supremely auspicious for Shakti worship, with tika applied during the Vijaya muhurat on Dashami.</span>
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
              <a href="/month/bhadra/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: भाद्र</span>
                <span className="lang-en">Previous month: Bhadra</span>
              </a>
              <a href="/month/kartik/" className="underline">
                <span className="lang-ne">अर्को महिना: कार्तिक</span>
                <span className="lang-en">Next month: Kartik</span>
              </a>
              <a href="/festival/dashain/" className="underline">
                <span className="lang-ne">दशैं पर्व</span>
                <span className="lang-en">Dashain Festival</span>
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
