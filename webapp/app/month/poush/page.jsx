import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "पौष महिना — Poush Month | December-January",
  description:
    "पौष (Poush) is the ninth month of Bikram Sambat, falling in December-January. Explore Tamu Losar, Kharmas, peak winter fog, Gurung New Year celebrations and shraadh traditions in Nepal.",
  keywords: [
    "poush",
    "poush month",
    "पौष",
    "पौष महिना",
    "tamu losar",
    "तमु ल्होसार",
    "kharmas",
    "खर्मस",
    "gurung new year",
    "nepali calendar poush",
    "nepal winter month",
    "poush sankranti",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/poush/",
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
      name: "Poush",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/poush/",
    },
  ],
};

const festivals = [
  {
    nameNe: "तमु ल्होसार",
    nameEn: "Tamu Losar",
    detailNe:
      "गुरुङ समुदायको नयाँ वर्ष तमु ल्होसार पौष पूर्णिमाका दिन मनाइन्छ। लोस्यार झन्डा, गुन्हु चोलो, सेल रोटी, छिउरा र कला-संस्कृति कार्यक्रमले काठमाडौं, पोखरा र गाउँहरू रङ्गीचङ्गी हुन्छन्।",
    detailEn:
      "The Gurung community welcomes its New Year, Tamu Losar, on Poush Purnima. Losar flags, gunyu-cholo attire, sel roti, chura and cultural programs color Kathmandu, Pokhara and home villages with feasts and dances.",
  },
  {
    nameNe: "खर्मस",
    nameEn: "Kharmas",
    detailNe:
      "सूर्य धनु राशिमा प्रवेश गरेपछि एक महिना खर्मस लाग्छ। यो अवधिमा विवाह, ब्रतबन्धजस्ता शुभ कार्य रोकिन्छन् र भक्तहरूले श्राद्ध, दान र पूजापाठमा जोड दिन्छन्।",
    detailEn:
      "When the Sun enters Dhanu (Sagittarius) rashi, the inauspicious month of Kharmas begins. Weddings and sacred-thread ceremonies pause while devotees focus on shraadh rites, charity and daily worship until Makar Sankranti.",
  },
];

const quickFacts = [
  {
    labelNe: "महिना",
    labelEn: "Month",
    valueNe: "डिसेम्बर-जनवरी",
    valueEn: "December-January",
  },
  {
    labelNe: "मुख्य पर्व",
    labelEn: "Key Festivals",
    valueNe: "तमु ल्होसार, खर्मस",
    valueEn: "Tamu Losar, Kharmas",
  },
  {
    labelNe: "मौसम",
    labelEn: "Weather",
    valueNe: "जाडो चरम, धमिलो बिहान, कुहिरो",
    valueEn: "Peak winter, hazy mornings, fog",
  },
  {
    labelNe: "संस्कृति",
    labelEn: "Culture",
    valueNe: "गुरुङ नयाँ वर्ष, खर्मसमा श्राद्ध",
    valueEn: "Gurung New Year, shraadh in Kharmas",
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
                विक्रम संवत् · नवौँ महिना · डिसेम्बर-जनवरी
              </span>
              <span className="lang-en">
                Vikram Samvat · Ninth Month · December-January
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">पौष महिना</span>
              <span className="lang-en">Poush Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                पौष विक्रम संवत्को नवौँ महिना हो, जुन डिसेम्बरदेखि जनवरीसम्म
                पर्छ। जाडो चरममा पुग्ने यो महिनामा बिहान धमिलो र कुहिरोले
                घेरिन्छ, तर गुरुङ समुदायको रङ्गीन तमु ल्होसारले चिसोलाई
                उत्सवमा बदलिदिन्छ। खर्मस लागेकाले शुभ कार्य रोकिन्छन् र भक्ति,
                श्राद्ध र दानमा जोड दिइन्छ। दैनिक तिथि{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Poush is the ninth month of Bikram Sambat, spanning December
                to January. Winter reaches its depths with hazy, fog-bound
                mornings — yet the colorful Tamu Losar turns the chill into
                celebration for the Gurung community. With Kharmas underway,
                auspicious ceremonies pause and devotion, shraadh and charity
                take center stage. Track daily tithis on our{" "}
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
              <span className="lang-ne">एक नजरमा पौष</span>
              <span className="lang-en">Poush at a Glance</span>
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
              <span className="lang-ne">पौषका मुख्य चाडपर्वहरू</span>
              <span className="lang-en">Major Festivals in Poush</span>
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
                  पौषमा जाडो चरममा पुग्छ। बिहान धमिलो हुन्छ, कुहिरोले तराई र
                  उपत्यका ढाक्छ, र घाम ढिलो उज्यालो हुन्छ। उपत्यकामा राति
                  तापक्रम शून्य मुनि झर्न सक्छ भने तराईमा कुहिरोले हवाई
                  उडानहरू अलमलिन्छन्। घाम लागेपछि भने दिन सफा र मनमोहक
                  हुन्छन् — जाडो यात्राका लागि तयारी गर्नैपर्छ।
                </span>
                <span className="lang-en">
                  Peak winter grips Poush. Mornings turn hazy, fog blankets
                  the Tarai and valley, and sunshine arrives late. Valley
                  nights can dip below zero while Terai fog delays flights.
                  Once the sun climbs, days turn clear and crisp — pack warm
                  layers for winter travel.
                </span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि र जीवनशैली</span>
                <span className="lang-en">Agriculture &amp; Life</span>
              </h2>
              <p>
                <span className="lang-ne">
                  खेतबारीमा काम थन्किन्छ; परिवारहरू आँगनमा घाम ताप्छन्, अचार
                  र मर्मिट बनाउँछन्। भक्तहरू बिहानै नुहाएर देवतालाई तिल, चामल
                  र दान गर्छन्।
                </span>
                <span className="lang-en">
                  Fieldwork slows as families sunbathe in courtyards, pickle
                  winter greens and mend quilts. Devotees bathe at dawn and
                  offer sesame, rice and alms to the deities throughout the
                  month.
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
                  पौष गुरुङ संस्कृति र धार्मिक आस्थाको महिना हो। तमु ल्होसारमा
                  गुरुङ समुदायले लोस्यार फर्काएर नयाँ वर्षको स्वागत गर्छ —
                  ठूला भेला, नाचगान र परम्परागत खानाले दिनभर उत्सव चल्छ।
                  खर्मसका दिनहरूमा भने श्राद्ध, तर्पण र दानलाई शुभ मानिन्छ;
                  विवाहजस्ता काम भने मकर संक्रान्तिपछि मात्र सुरु हुन्छन्।
                </span>
                <span className="lang-en">
                  Poush belongs to Gurung heritage and religious devotion.
                  During Tamu Losar, the community raises losar flags to greet
                  the New Year with mass gatherings, dances and traditional
                  food. Through Kharmas, shraadh, tarpan and charity are
                  considered meritorious, while weddings wait until Maghe
                  Sankranti opens the season again.
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
              <a href="/month/mangsir/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: मंसिर</span>
                <span className="lang-en">Previous month: Mangsir</span>
              </a>
              <a href="/month/magh/" className="underline">
                <span className="lang-ne">अर्को महिना: माघ</span>
                <span className="lang-en">Next month: Magh</span>
              </a>
              <a href="/festival/tamu-losar/" className="underline">
                <span className="lang-ne">तमु ल्होसार</span>
                <span className="lang-en">Tamu Losar</span>
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
