import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "माघ महिना — Magh Month | January-February",
  description:
    "माघ (Magh) is the tenth month of Bikram Sambat, falling in January-February. Explore Maghe Sankranti, Uttarayana, Maghi festival, the coldest days of winter and ghee-chaku traditions in Nepal.",
  keywords: [
    "magh",
    "magh month",
    "माघ",
    "माघ महिना",
    "maghe sankranti",
    "माघे संक्रान्ति",
    "uttarayana",
    "उत्तरायण",
    "maghi festival",
    "माघी",
    "makar sankranti nepal",
    "nepali calendar magh",
    "tharu maghi",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/magh/",
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
      name: "Magh",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/magh/",
    },
  ],
};

const festivals = [
  {
    nameNe: "माघे संक्रान्ति",
    nameEn: "Maghe Sankranti",
    detailNe:
      "सूर्य मकर राशिमा प्रवेश गर्दा मनाइने माघे संक्रान्तिमा घ्यू, चाकु, बत्तास, तरुल र खिर खाइन्छ। नदीघाटमा पवित्र स्नान गरेर दान गर्दा पाप मुक्ति मिल्छ भन्ने विश्वास छ।",
    detailEn:
      "Marking the Sun's entry into Makar (Capricorn) rashi, Maghe Sankranti calls for ghee, chaku, battasa, yams and kheer. Holy river baths and charity on this day are believed to wash away sins.",
  },
  {
    nameNe: "उत्तरायण",
    nameEn: "Uttarayana",
    detailNe:
      "माघे संक्रान्तिदेखि सूर्य उत्तरायण हुन्छ — दिन लामो हुन थाल्छन् र उषाकालीन ग्रहणहरू शुभ मानिन्छन्। भगवान् भीष्मले यही कालमा देह त्याग गरेको विश्वास गरिन्छ।",
    detailEn:
      "From Maghe Sankranti the Sun begins its northward journey — Uttarayana. Days lengthen and dawn hours turn auspicious; tradition holds that Bhishma chose this period to leave his mortal body.",
  },
  {
    nameNe: "माघी",
    nameEn: "Maghi",
    detailNe:
      "थारु समुदायको ठूलो पर्व माघी नयाँ वर्षका रूपमा मनाइन्छ। घरदैलो, परम्परागत नाच, झाँकी र धनधान्यको पूजाले तराईका बस्तीहरू दिनभर उत्सवमा डुब्छन्।",
    detailEn:
      "The Tharu community celebrates Maghi as its New Year. Village feasts, traditional dances, processions and worship of harvest bounty fill Tarai settlements with day-long festivities.",
  },
];

const quickFacts = [
  {
    labelNe: "महिना",
    labelEn: "Month",
    valueNe: "जनवरी-फेब्रुअरी",
    valueEn: "January-February",
  },
  {
    labelNe: "मुख्य पर्व",
    labelEn: "Key Festivals",
    valueNe: "माघे संक्रान्ति, उत्तरायण, माघी",
    valueEn: "Maghe Sankranti, Uttarayana, Maghi",
  },
  {
    labelNe: "मौसम",
    labelEn: "Weather",
    valueNe: "सबैभन्दा चिसो महिना, घ्यू-चाकु खाने चलन",
    valueEn: "Coldest month, ghee-chaku tradition",
  },
  {
    labelNe: "ज्योतिष",
    labelEn: "Astrology",
    valueNe: "मकर संक्रान्ति, सूर्य उत्तरायण",
    valueEn: "Makar Sankranti, Sun enters Uttarayana",
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
                विक्रम संवत् · दशौँ महिना · जनवरी-फेब्रुअरी
              </span>
              <span className="lang-en">
                Vikram Samvat · Tenth Month · January-February
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">माघ महिना</span>
              <span className="lang-en">Magh Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                माघ विक्रम संवत्को दशौँ महिना हो, जुन जनवरीदेखि फेब्रुअरीसम्म
                पर्छ। वर्षकै सबैभन्दा चिसो महिना भए पनि माघे संक्रान्तिले
                आशाको किरण बोक्छ — घ्यू, चाकु र तरुलको मिठाई, नदीघाटको
                स्नान र सूर्य उत्तरायणको शुभ सङ्केत। थारू समुदायको माघी
                पर्वले तराईमा नयाँ वर्षको धुमधाम थप्छ। तिथि र पर्व{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Magh is the tenth month of Bikram Sambat, spanning January to
                February. Though it brings the coldest days of the year,
                Maghe Sankranti carries a ray of hope — sweets of ghee, chaku
                and yams, holy river baths and the auspicious turning of
                Uttarayana. The Tharu Maghi festival adds New Year revelry
                across the Tarai. Find tithis and festivals on our{" "}
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
              <span className="lang-ne">एक नजरमा माघ</span>
              <span className="lang-en">Magh at a Glance</span>
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
              <span className="lang-ne">माघका मुख्य चाडपर्वहरू</span>
              <span className="lang-en">Major Festivals in Magh</span>
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
                  माघ वर्षकै सबैभन्दा चिसो महिना हो। शिशिर ऋतुको चरममा
                  उपत्यकामा तापक्रम शून्य मुनि झर्छ, तराईमा कुहिरो बाक्लो
                  हुन्छ र हिमाली क्षेत्रमा हिमपात हुन्छ। जाडो भगाउन घ्यू-चाकु
                  खाने चलन छ — घ्यू शरीरलाई न्यानो राख्छ भने चाकुले ऊर्जा
                  दिन्छ। संक्रान्तिपछि दिन लामो हुँदै जान्छ।
                </span>
                <span className="lang-en">
                  Magh is the coldest month of the year. At the height of
                  Shishir ritu, valley temperatures dip below zero, Tarai fog
                  thickens, and mountain areas see snowfall. To fight the
                  chill, families follow the ghee-chaku tradition — ghee warms
                  the body while chaku fuels energy. After Sankranti, days
                  slowly begin to lengthen.
                </span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">ज्योतिषीय महत्त्व</span>
                <span className="lang-en">Astrological Significance</span>
              </h2>
              <p>
                <span className="lang-ne">
                  मकर संक्रान्तिका दिन सूर्य मकर राशिमा प्रवेश गर्छ र सूर्य
                  उत्तरायण सुरु हुन्छ — देवताहरूको दिन सुरु हुने मान्यता छ।
                  यो दिन स्नान, दान र तर्पण अत्यन्त फलदायी मानिन्छ।
                </span>
                <span className="lang-en">
                  On Makar Sankranti the Sun enters Capricorn rashi and
                  Uttarayana begins — believed to open the day of the gods.
                  Bathing, charity and tarpan on this day are considered
                  supremely meritorious.
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
                  माघ विविध संस्कृतिको संगम हो। नेपालभरका हिन्दू घरघरमा घ्यू,
                  चाकु, बत्तास, तरुल र खिरको मिठाई बाँडिन्छ; नदीघाटमा भक्तहरू
                  स्नान गर्छन्। थारू समुदायका लागि माघी नयाँ वर्ष हो — घर
                  सफा गरेर नयाँ लुगा लगाउने, माछा-भटमास र रक्सीको भोज, झाँकी
                  र परम्परागत नाचले दिन विशेष हुन्छ। माघीकै दिन थारू समाजले
                  अध्यक्ष र पदाधिकारी चयन गर्ने परम्परा पनि छ।
                </span>
                <span className="lang-en">
                  Magh weaves together many cultures. Hindu homes across Nepal
                  share sweets of ghee, chaku, battasa, yams and kheer while
                  devotees bathe at river ghats. For the Tharu community,
                  Maghi is the New Year — houses are cleaned, new clothes
                  worn, and fish-and-rice feasts, processions and traditional
                  dances fill the day. Tharu societies also elect their
                  chairpersons and officials during Maghi.
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
              <a href="/month/poush/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: पौष</span>
                <span className="lang-en">Previous month: Poush</span>
              </a>
              <a href="/month/falgun/" className="underline">
                <span className="lang-ne">अर्को महिना: फागुन</span>
                <span className="lang-en">Next month: Falgun</span>
              </a>
              <a href="/festival/maghe-sankranti/" className="underline">
                <span className="lang-ne">माघे संक्रान्ति</span>
                <span className="lang-en">Maghe Sankranti</span>
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
