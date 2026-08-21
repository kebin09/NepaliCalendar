import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "कार्तिक महिना — Kartik 2083 | Seventh Month of Nepali Calendar",
  description:
    "कार्तिक (Kartik) is the seventh month of Bikram Sambat, glowing with Tihar's five days, Chhath Parva, Indra Jatra traditions and Mha Puja. Explore its festivals, weather and astrology.",
  keywords: [
    "kartik", "kartik month", "कार्तिक महिना", "nepali calendar kartik",
    "tihar", "diwali", "chhath parva", "mha puja", "laxmi puja",
    "deusi bhailo", "bikram sambat seventh month", "nepali month october november",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/kartik/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nepalicalendar.kebinmaharjan.com.np/" },
    { "@type": "ListItem", position: 2, name: "Months", item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/" },
    { "@type": "ListItem", position: 3, name: "Kartik", item: "https://nepalicalendar.kebinmaharjan.com.np/month/kartik/" },
  ],
};

const festivals = [
  {
    nameNe: "तिहार", nameEn: "Tihar",
    detailNe: "पाँच दिन चल्ने दिपावली — काग, कुकुर, गाई, बैंस र भाइटीकाको पूजा। देउसी-भैलोको स्वरले रातहरू उज्याला दियो र झिलिमिलीले भरिन्छन्।",
    detailEn: "Five days of lights honoring crows, dogs, cows, oxen and siblings with Bhai Tika. Nights glow with oil lamps while deusi-bhailo singers fill the streets.",
  },
  {
    nameNe: "छठ पर्व", nameEn: "Chhath Parva",
    detailNe: "तराईमा सूर्य उपासनाको महापर्व। नदीकिनारमा अर्घा दिँदै सूर्य र छठी माईयालाई ठेकुवा र ठेकुवाको प्रसाद अर्पण गरिन्छ।",
    detailEn: "The great sun-worship festival of the Tarai. Devotees offer argha to the setting and rising Sun at riverbanks with thekua offerings to Chhathi Maiya.",
  },
  {
    nameNe: "इन्द्रजात्रा", nameEn: "Indra Jatra",
    detailNe: "काठमाडौंमा इन्द्रको स्मरणमा लिङ्गो उठाइन्छ, कुमारीको रथ तानिन्छ र भैरव-इन्द्रका मुख्य जात्राहरू चल्छन्।",
    detailEn: "Kathmandu raises the ceremonial pole for Indra, pulls the Kumari's chariot and celebrates the masked dances of Bhairab through the old city.",
  },
  {
    nameNe: "म्ह पूजा", nameEn: "Mha Puja",
    detailNe: "नेपाल संवत् नयाँ वर्षका दिन नेवार समुदायले आफ्नै शरीर (म्ह) को पूजा गर्छन्। मण्डपमा दियो बालेर स्वास्थ्य र दीर्घायुको कामना गरिन्छ।",
    detailEn: "On Nepal Sambat New Year, Newars worship their own body with mandala rituals, lighting oil lamps praying for health and longevity.",
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
              <span className="lang-ne">विक्रम संवत् २०८३ · सातौं महिना</span>
              <span className="lang-en">Bikram Sambat 2083 · Seventh Month</span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">कार्तिक महिना</span>
              <span className="lang-en">Kartik Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">कार्तिक विक्रम संवत्को सातौं महिना हो। अक्टोबर मध्यदेखि नोभेम्बर मध्यसम्म चल्ने यो महिना बत्ती, रङ्ग र भाइचाराको महिना — तिहारको घर।</span>
              <span className="lang-en">Kartik is the seventh month of the Bikram Sambat calendar. Running from mid-October to mid-November, it glows with lamps, colors and sibling love as the home of Tihar.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">कार्तिकको महत्त्व</span>
              <span className="lang-en">Significance of Kartik</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">कार्तिक उज्यालोको महिना हो। तिहारका पाँच दिनमा प्रकृतिका साथीहरू — काग, कुकुर, गाई र बैंस — पूजिन्छन्, अनि दिदीबहिनीले भाइलाई भाइटीका लगाउँछन्।</span>
              <span className="lang-en">Kartik is the festival of light. Across five days of Tihar, nature's companions — crows, dogs, cows and oxen — are worshipped before sisters bless brothers with Bhai Tika.</span>
            </p>
            <p>
              <span className="lang-ne">देउसी-भैलो, लक्ष्मी पूजा र सूर्य पूजाले यो महिनाले आफन्त, प्रकृति र प्रकाशबीचको गहिरो सम्बन्ध झल्काउँछ। नेपाल संवत्को नयाँ वर्ष पनि यहीँबाट सुरु हुन्छ।</span>
              <span className="lang-en">Deusi-bhailo carols, Laxmi Puja and sun worship reveal a deep bond between people, nature and light. The Newar New Year also begins within this month.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">कार्तिकका प्रमुख चाडपर्व</span>
              <span className="lang-en">Major Festivals in Kartik</span>
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
                <span className="lang-ne">कार्तिकमा आकाश सफा र निलो हुन्छ। चिसो बढ्दै जान्छ; बिहान-बेलुका कुहिरो लाग्न सुरु हुन्छ र हिमालहरू स्पष्ट देखिन्छन्।</span>
                <span className="lang-en">Skies turn clear and blue in Kartik. The chill deepens, morning fog begins to appear, and snow-capped Himalayas shine in full view.</span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">संस्कृति</span>
                <span className="lang-en">Culture</span>
              </h2>
              <p>
                <span className="lang-ne">देउसी-भैलोका टोलीहरू घरघर धुन्छन्, लक्ष्मी पूजामा घर-आँगन दियोले झल्किन्छ, र छठमा सूर्य पूजा गरिन्छ — उज्यालो र आशीर्वादको महिना।</span>
                <span className="lang-en">Deusi-bhailo troupes roam door to door, courtyards glitter with lamps during Laxmi Puja, and riverside altars honor the Sun at Chhath — a month of light and blessings.</span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">कार्तिकमा सूर्य तुला राशिबाट वृश्चिक राशिमा प्रवेश गर्छ। कार्तिक नक्षत्रबाट महिनाको नाम परेको हो।</span>
                <span className="lang-en">The Sun moves from Libra into Scorpio during Kartik. The month takes its name from the Krittika nakshatra, star of fire.</span>
              </p>
              <p>
                <span className="lang-ne">चतुर्मास सकिएपछि विवाह, ब्रतबन्ध र गृह प्रवेशजस्ता शुभ कार्यहरू फेरि सुरु हुन्छन् — कार्तिक नयाँ सुरुवातको महिना हो।</span>
                <span className="lang-en">With Chaturmas over, weddings, coming-of-age rites and housewarmings resume — making Kartik a month of fresh beginnings.</span>
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
              <a href="/month/ashwin/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: आश्विन</span>
                <span className="lang-en">Previous month: Ashwin</span>
              </a>
              <a href="/month/mangsir/" className="underline">
                <span className="lang-ne">अर्को महिना: मंसिर</span>
                <span className="lang-en">Next month: Mangsir</span>
              </a>
              <a href="/festival/tihar/" className="underline">
                <span className="lang-ne">तिहार पर्व</span>
                <span className="lang-en">Tihar Festival</span>
              </a>
              <a href="/festival/chhath/" className="underline">
                <span className="lang-ne">छठ पर्व</span>
                <span className="lang-en">Chhath Festival</span>
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
