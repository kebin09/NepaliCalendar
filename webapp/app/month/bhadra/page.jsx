import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "भाद्र महिना — Bhadra 2083 | Fifth Month of Nepali Calendar",
  description:
    "भाद्र (Bhadra) is the fifth month of Bikram Sambat, celebrated with Gai Jatra, Haritalika Teej and Kushe Aunsi. Explore its festivals, weather, culture and astrological significance.",
  keywords: [
    "bhadra", "bhadra month", "भाद्र महिना", "nepali calendar bhadra",
    "gai jatra", "haritalika teej", "kushe aunsi", "father's day nepal",
    "bikram sambat fifth month", "nepali month august september",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/bhadra/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nepalicalendar.kebinmaharjan.com.np/" },
    { "@type": "ListItem", position: 2, name: "Months", item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/" },
    { "@type": "ListItem", position: 3, name: "Bhadra", item: "https://nepalicalendar.kebinmaharjan.com.np/month/bhadra/" },
  ],
};

const festivals = [
  {
    nameNe: "गाईजात्रा", nameEn: "Gai Jatra",
    detailNe: "भक्तपुर, काठमाडौं र ललितपुरमा गाई र बालकहरूको जुलुस निकालिन्छ। वर्षभरिमा मृत्यु भएका आफन्तको आत्माको शान्तिका लागि हाँसो-व्यङ्ग्यसँग मनाइने जात्रा।",
    detailEn: "Processions of cows and costumed children parade through Bhaktapur, Kathmandu and Lalitpur, guiding departed souls while satire and humor lighten grief.",
  },
  {
    nameNe: "हरितालिका तीज", nameEn: "Haritalika Teej",
    detailNe: "महिलाहरूले निराहार व्रत बसेर शिव-पार्वतीको पूजा गर्छन्। लाल पोशाकमा दर खाने, नाच्ने र दाम्पत्य सुखको कामना गर्ने ठूलो महिला पर्व।",
    detailEn: "Women observe a strict fast worshipping Shiva and Parvati. Dressed in red saris, they feast on dar the night before, sing and dance praying for marital bliss.",
  },
  {
    nameNe: "कुशे औंसी", nameEn: "Kushe Aunsi",
    detailNe: "बाबुको दिन — जीवित बाबुलाई मिठाई र उपहार दिई आशीर्वाद लिइन्छ; स्वर्गीय बाबुको सम्झनामा गोकर्ण र बाघद्वार जाइन्छ।",
    detailEn: "Father's Day in Nepal — children honor living fathers with sweets and gifts, while those whose fathers have passed offer tarpan at Gokarna and Bagmati ghats.",
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
              <span className="lang-ne">विक्रम संवत् २०८३ · पाँचौं महिना</span>
              <span className="lang-en">Bikram Sambat 2083 · Fifth Month</span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">भाद्र महिना</span>
              <span className="lang-en">Bhadra Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">भाद्र विक्रम संवत्को पाँचौं महिना हो। अगस्ट मध्यदेखि सेप्टेम्बर मध्यसम्म चल्ने यो महिना जात्रा, व्रत र परिवारको भावनाले भरिन्छ।</span>
              <span className="lang-en">Bhadra is the fifth month of the Bikram Sambat calendar. Running from mid-August to mid-September, it overflows with festivals, fasting and family emotion.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">भाद्रको महत्त्व</span>
              <span className="lang-en">Significance of Bhadra</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">भाद्रले हाँसो र आँसु दुवै समेट्छ। गाईजात्रामा शोकलाई व्यङ्ग्य र रङ्गले पालटिन्छ, भने तीजमा महिलाहरूको भक्ति र उत्सवको रौनक फैलिन्छ।</span>
              <span className="lang-en">Bhadra embraces both laughter and tears. Gai Jatra transforms mourning into satire and color, while Teej fills courtyards with women's devotional song and dance.</span>
            </p>
            <p>
              <span className="lang-ne">कुशे औंसीमा बाबुको स्नेह सम्झिन्छ — जीवित बाबुको आशीर्वाद लिने र स्वर्गीय बाबुलाई श्रद्धाञ्जली दिने दिन। यो महिना परिवारको बन्धन जोड्ने महिना हो।</span>
              <span className="lang-en">Kushe Aunsi celebrates paternal love — seeking blessings from living fathers and honoring those who have passed. It is a month that binds families together.</span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">भाद्रका प्रमुख चाडपर्व</span>
              <span className="lang-en">Major Festivals in Bhadra</span>
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
                <span className="lang-ne">भाद्रमा मनसुन ढिलो हुँदै जान्छ। वर्षा घट्दै बिहान-बेलुका चिसो सुरु हुन्छ; आकाशमा बादल फुट्दै सफा दिनहरू फर्कन्छन्।</span>
                <span className="lang-en">The monsoon begins its slow retreat in Bhadra. Rains taper off, mornings turn cool, and clear skies gradually return between clouds.</span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">संस्कृति</span>
                <span className="lang-en">Culture</span>
              </h2>
              <p>
                <span className="lang-ne">तीजमा महिलाहरूको व्रत र गीत-नाचले देश रङ्गाउँछ। बाबुको दिनले पुस्ताको श्रद्धा जोड्छ; गाईजात्राले नेवार संस्कृतिको हाँस्य-परम्परा झल्काउँछ।</span>
                <span className="lang-en">Teej paints the nation red with women's fasting, songs and dances. Father's Day binds generations in gratitude, while Gai Jatra showcases the Newar tradition of festive satire.</span>
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p className="mb-4">
                <span className="lang-ne">भाद्रमा सूर्य सिंहबाट कन्या राशिमा प्रवेश गर्छ। भाद्रपद नक्षत्रबाट महिनाको नाम परेको हो।</span>
                <span className="lang-en">The Sun moves from Leo into Virgo during Bhadra. The month takes its name from the Bhadrapada nakshatra.</span>
              </p>
              <p>
                <span className="lang-ne">चतुर्मास चलिरहेकाले ठूला शुभ कार्य टाढा राखिन्छन्; तर तीज व्रत र पितृ कार्यहरूका लागि अत्यन्त शुभ मानिन्छ।</span>
                <span className="lang-en">With Chaturmas underway, major ceremonies are avoided; however, Teej fasting and ancestral rites are considered deeply auspicious.</span>
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
              <a href="/month/shrawan/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: श्रावण</span>
                <span className="lang-en">Previous month: Shrawan</span>
              </a>
              <a href="/month/ashwin/" className="underline">
                <span className="lang-ne">अर्को महिना: आश्विन</span>
                <span className="lang-en">Next month: Ashwin</span>
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
