import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "मंसिर महिना — Mangsir Month | November-December",
  description:
    "मंसिर (Mangsir) is the eighth month of Bikram Sambat, falling in November-December. Explore Yomari Punhi, Udhauli Parva, the wedding season, cooling weather and Newar and Kirant culture in Nepal.",
  keywords: [
    "mangsir",
    "mangsir month",
    "मंसिर",
    "मंसिर महिना",
    "yomari punhi",
    "योमरि पुन्ही",
    "udhauli parva",
    "उधौली",
    "nepali wedding season",
    "nepali calendar mangsir",
    "newar yomari",
    "kirant udhauli",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/mangsir/",
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
      name: "Mangsir",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/mangsir/",
    },
  ],
};

const festivals = [
  {
    nameNe: "योमरि पुन्ही",
    nameEn: "Yomari Punhi",
    detailNe:
      "नेवार परिवारहरूले चाखू वा खुवा भरिएको योमरी बनाएर अन्न हारुको पूजा गर्छन्। धान कटाइ सकिएपछि मनाइने यो पर्वमा योमरीलाई अन्नपूर्णाको आशीर्वादको प्रतीक मानिन्छ।",
    detailEn:
      "Newar families steam yomari — rice-flour dumplings filled with chaku or khuwa — to worship the harvest deity. Celebrated after paddy is threshed, the fish-shaped sweet symbolizes Annapurna's blessing on stored grain.",
  },
  {
    nameNe: "उधौली पर्व",
    nameEn: "Udhauli Parva",
    detailNe:
      "किराँत समुदायले साकेला नाच नाचेर उधौली पर्व मनाउँछन्। चराचुरुङ्गी तल्लो डाँडापाखी झर्दा पृथ्वी र प्रकृतिप्रति कृतज्ञता जनाइन्छ।",
    detailEn:
      "Kirant communities celebrate Udhauli with the circular Sakela dance, thanking the earth as birds descend to warmer lowlands for winter. Rice-beer libations open days of synchronized sili steps.",
  },
  {
    nameNe: "विवाह महोत्सव (लग्नेको सिजन)",
    nameEn: "Wedding Season (Bibaha)",
    detailNe:
      "मंसिर ज्योतिषीय दृष्टिले शुभ महिना मानिन्छ। ब्रतबन्ध, अन्नप्राशन र विवाहका लागि लग्नहरू भर्पिन्छन् — ब्यान्केट हल, होटल र सुन पसलहरू व्यस्त हुन्छन्।",
    detailEn:
      "Astrologers consider Mangsir free of major dosha periods, so families book muhurats for bratabandha, annaprashan and vivah back to back. Banquet halls, hotels and gold shops see their busiest weeks after Tihar.",
  },
];

const quickFacts = [
  {
    labelNe: "महिना",
    labelEn: "Month",
    valueNe: "नोभेम्बर-डिसेम्बर",
    valueEn: "November-December",
  },
  {
    labelNe: "मुख्य पर्व",
    labelEn: "Key Festivals",
    valueNe: "योमरि पुन्ही, उधौली, विवाह महोत्सव",
    valueEn: "Yomari Punhi, Udhauli, Wedding Season",
  },
  {
    labelNe: "मौसम",
    labelEn: "Weather",
    valueNe: "चिसो सुरु, घाम कम",
    valueEn: "Cold begins, less sunshine",
  },
  {
    labelNe: "संस्कृति",
    labelEn: "Culture",
    valueNe: "नेवार योमरी, किराँत उधौली",
    valueEn: "Newar Yomari, Kirant Udhauli",
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
                विक्रम संवत् · आठौँ महिना · नोभेम्बर-डिसेम्बर
              </span>
              <span className="lang-en">
                Vikram Samvat · Eighth Month · November-December
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">मंसिर महिना</span>
              <span className="lang-en">Mangsir Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                मंसिर विक्रम संवत्को आठौँ महिना हो, जुन नोभेम्बरदेखि डिसेम्बरसम्म
                पर्छ। धान कटाइ सकिएपछि आउने यो महिना शान्त निलो आकाश, थ्रेसिङ
                धुलो र खुशीयाली विवाह सिजनका लागि चिनिन्छ। नेवार समुदायको योमरि
                पुन्ही, किराँत समुदायको उधौली पर्व र देशव्यापी विवाह महोत्सवले
                मंसिरलाई उत्सवको महिना बनाउँछ। लग्न मितिहरू{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Mangsir is the eighth month of Bikram Sambat, spanning
                November to December. Arriving after the paddy harvest, it
                brings calm blue skies, threshing dust and the cheerful bustle
                of wedding season. The Newar community steams Yomari Punhi
                sweets, Kirant communities dance Sakela for Udhauli, and
                families across Nepal celebrate weddings at their own pace.
                Shortlist lagna dates on our{" "}
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
              <span className="lang-ne">एक नजरमा मंसिर</span>
              <span className="lang-en">Mangsir at a Glance</span>
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
              <span className="lang-ne">मंसिरका मुख्य चाडपर्वहरू</span>
              <span className="lang-en">Major Festivals in Mangsir</span>
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
                  मंसिरमा हेमन्त ऋतु सुरु हुन्छ। चिसो बढ्न थाल्छ, घाम कम लाग्छ
                  र बिहान-बेलुका जाडो महसुस हुन्छ। उपत्यकामा दिनको तापक्रम
                  करिब २० डिग्रीमा झर्छ भने राति एक अंकमा ओर्लछ। पानी पर्ने
                  सम्भावना निकै कम हुन्छ, त्यसैले मंसिर ट्रेकिङ, साइकल यात्रा
                  र खुला आकाशमुनि विवाहका लागि उपयुक्त हुन्छ।
                </span>
                <span className="lang-en">
                  Hemanta ritu settles in during Mangsir. The cold begins,
                  sunshine weakens, and mornings and evenings turn crisp.
                  Valley daytime temperatures slide to around 20°C while
                  nights drop toward single digits. Rainfall is rare, making
                  the month ideal for lower-route trekking, cycling trips and
                  outdoor weddings under clear skies.
                </span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि र जीवनशैली</span>
                <span className="lang-en">Agriculture &amp; Life</span>
              </h2>
              <p>
                <span className="lang-ne">
                  धान मझेरीमा थन्किन्छ, आलो खेती तीव्र हुन्छ र तोरीका बाली
                  हरियो-पहेँलो हुँदै जान्छ। किसानहरू बीउ भण्डारण गर्छन् र
                  औजार मर्मत गर्छन्।
                </span>
                <span className="lang-en">
                  Paddy is stacked into straw towers, potato planting
                  accelerates in hill terraces, and mustard fields turn
                  yellow-green. Farmers store seed grain and repair tools
                  during these quieter weeks.
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
                  मंसिर नेवार र किराँत संस्कृतिको संगम हो। नेवार घरघरमा योमरी
                  स्टिम हुन्छ — चामलको पिठोको भट्टीमा चाखू वा खुवा भरेर
                  अन्नपूर्णालाई चढाइन्छ। किराँत समुदायले उधौलीमा साकेला सिलि
                  नाचेर प्रकृतिसँग एकता जनाउँछन्। साथै यो महिना विवाह, ब्रतबन्ध
                  जस्ता शुभ कार्यका लागि सबैभन्दा माग भएको महिना पनि हो।
                </span>
                <span className="lang-en">
                  Mangsir blends Newar and Kirant heritage. In every Newar
                  household, yomari dumplings are steamed and offered to
                  Annapurna, while Kirant households open Udhauli with
                  rice-beer libations and Sakela sili steps mimicking birds
                  heading downhill. It is also the most requested month for
                  auspicious rites like vivah and bratabandha.
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
              <a href="/month/kartik/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: कात्तिक</span>
                <span className="lang-en">Previous month: Kartik</span>
              </a>
              <a href="/month/poush/" className="underline">
                <span className="lang-ne">अर्को महिना: पौष</span>
                <span className="lang-en">Next month: Poush</span>
              </a>
              <a href="/festival/yomari-punhi/" className="underline">
                <span className="lang-ne">योमरि पुन्ही</span>
                <span className="lang-en">Yomari Punhi</span>
              </a>
              <a href="/calendar/" className="underline">
                <span className="lang-ne">पात्रो हेर्नुहोस्</span>
                <span className="lang-en">View Calendar</span>
              </a>
              <a href="/converter/" className="underline">
                <span className="lang-ne">BS देखि AD रूपान्तरण</span>
                <span className="lang-en">BS to AD Converter</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
