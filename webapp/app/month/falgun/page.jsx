import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "फागुन महिना — Falgun Month | February-March",
  description:
    "फागुन (Falgun) is the eleventh month of Bikram Sambat, falling in February-March. Explore Maha Shivaratri, Holi, Prajatantra Diwas, the arrival of spring and Pashupatinath celebrations in Nepal.",
  keywords: [
    "falgun",
    "falgun month",
    "फागुन",
    "फागुन महिना",
    "shivaratri",
    "शिवरात्रि",
    "holi",
    "होली",
    "prajatantra diwas",
    "प्रजतन्त्र दिवस",
    "pashupatinath shivaratri",
    "nepali calendar falgun",
    "spring festival nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/month/falgun/",
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
      name: "Falgun",
      item: "https://nepalicalendar.kebinmaharjan.com.np/month/falgun/",
    },
  ],
};

const festivals = [
  {
    nameNe: "महाशिवरात्रि",
    nameEn: "Maha Shivaratri",
    detailNe:
      "फागुन कृष्ण चतुर्दशीका रात पशुपतिनाथमा लाखौं भक्त जम्मा हुन्छन्। सधैँ खुल्ला रहने पशुपतिनाथको मूलढोका यसै दिन बिहानै खुल्छ; भक्तहरू रातभर जागरण, ध्यान र शिवपूजा गर्छन्।",
    detailEn:
      "On the night of Falgun Krishna Chaturdashi, hundreds of thousands of devotees gather at Pashupatinath. The temple's main gate — open only on this day at dawn — draws sadhus and pilgrims who keep night-long vigil with meditation and Shiva worship.",
  },
  {
    nameNe: "होली / फागु पूर्णिमा",
    nameEn: "Holi / Fagu Purnima",
    detailNe:
      "रङ र अबिरको पर्व होली फागुन पूर्णिमामा मनाइन्छ। उपत्यकामा चिर झुण्ड्याएर लिङ्गेडेखि ताडी खेल्ने चलन छ; तराईमा भोलिपल्ट रंग खेलिन्छ। ढोल-मादलका तालमा युवाहरू रङले छटपटाउँछन्।",
    detailEn:
      "The festival of colors and abir, Holi falls on Fagu Purnima. The valley raises the chir pole at Basantapur days ahead, building to water-balloon battles and color play; the Tarai celebrates the following day as drums beat through streets of dancing youth.",
  },
  {
    nameNe: "प्रजतन्त्र दिवस",
    nameEn: "Prajatantra Diwas",
    detailNe:
      "फागुन ७ गते प्रजतन्त्र दिवस मनाइन्छ — २००७ सालमा राणा शासनको अन्त्यपछि प्रजातन्त्र प्राप्तिको सम्झनामा राष्ट्रिय दिवसका रूपमा यसलाई पालना गरिन्छ।",
    detailEn:
      "Falgun 7 is observed as Prajatantra Diwas, commemorating the dawn of democracy after the end of Rana rule in 2007 BS. Official ceremonies honor the martyrs who sacrificed for people's rights.",
  },
];

const quickFacts = [
  {
    labelNe: "महिना",
    labelEn: "Month",
    valueNe: "फेब्रुअरी-मार्च",
    valueEn: "February-March",
  },
  {
    labelNe: "मुख्य पर्व",
    labelEn: "Key Festivals",
    valueNe: "शिवरात्रि, होली, प्रजतन्त्र दिवस",
    valueEn: "Shivaratri, Holi, Prajatantra Diwas",
  },
  {
    labelNe: "मौसम",
    labelEn: "Weather",
    valueNe: "बसन्त सुरु, गर्मी बढ्छ, फूल फुल्छ",
    valueEn: "Spring begins, warmth grows, flowers bloom",
  },
  {
    labelNe: "संस्कृति",
    labelEn: "Culture",
    valueNe: "पशुपतिनाथमा शिवरात्रि, रंग खेल्ने होली",
    valueEn: "Shivaratri at Pashupatinath, colorful Holi",
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
                विक्रम संवत् · एघारौँ महिना · फेब्रुअरी-मार्च
              </span>
              <span className="lang-en">
                Vikram Samvat · Eleventh Month · February-March
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">फागुन महिना</span>
              <span className="lang-en">Falgun Month</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                फागुन विक्रम संवत्को एघारौँ महिना हो, जुन फेब्रुअरीदेखि
                मार्चसम्म पर्छ। बसन्त ऋतु सुरु हुँदै गर्मी बढ्छ, बगैंचामा
                फूल फुल्छ र महिनाभरि ठूला पर्वहरू आउँछन् — पशुपतिनाथमा
                महाशिवरात्रिको जागरण, रङ र अबिरको होली र प्रजतन्त्र दिवसको
                राष्ट्रिय सम्झना। तिथि र पर्व{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Falgun is the eleventh month of Bikram Sambat, spanning
                February to March. Spring begins, warmth returns, gardens
                burst into bloom — and the month overflows with festivals:
                the night vigil of Maha Shivaratri at Pashupatinath, the
                colors of Holi, and the national remembrance of Prajatantra
                Diwas. Find tithis and festivals on our{" "}
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
              <span className="lang-ne">एक नजरमा फागुन</span>
              <span className="lang-en">Falgun at a Glance</span>
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
              <span className="lang-ne">फागुनका मुख्य चाडपर्वहरू</span>
              <span className="lang-en">Major Festivals in Falgun</span>
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
                  फागुनमा बसन्त ऋतु सुरु हुन्छ। जाडो ढिलिँदै गर्मी बढ्छ,
                  बिहान-बेलुका अझै न्यानो लुगा चाहिन्छ तर दिउँसो घाम मनमोहक
                  हुन्छ। फूलहरू फुल्छन् — मखमली, गोदावरी र रोडेन्ड्रनका
                  कोपिला फुक्छन्। बतास चल्न थाल्ले पनि यो महिना घुम्न र
                  उत्सव मनाउन उत्तम हुन्छ।
                </span>
                <span className="lang-en">
                  Basanta ritu begins in Falgun. Winter loosens its grip as
                  warmth builds — mornings still need a jacket but afternoons
                  turn gloriously sunny. Flowers bloom everywhere, from
                  marigolds to rhododendron buds. Breezy yet bright, the month
                  is perfect for sightseeing and open-air festivities.
                </span>
              </p>
              <h2 className="mb-4 mt-8 text-3xl font-bold md:text-4xl">
                <span className="lang-ne">कृषि र जीवनशैली</span>
                <span className="lang-en">Agriculture &amp; Life</span>
              </h2>
              <p>
                <span className="lang-ne">
                  वसन्त पञ्चमीमा शिशिरबाट बाली रोप्ने शुभ सङ्केत मिल्छ;
                  गहुँका बाली हरिया हुँदै जान्छन् र बगैंचामा फलफूलको भरी
                  लाग्छ। किसानहरू वैशाखको धान रोपाइँको तयारी थाल्छन्।
                </span>
                <span className="lang-en">
                  From Basanta Panchami onward, planting turns auspicious.
                  Wheat fields green up, orchards set fruit, and farmers begin
                  preparing terraces for the Vaishakh rice season ahead.
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
                  फागुन भक्ति र उल्लासको महिना हो। पशुपतिनाथमा शिवरात्रिका
                  दिन सडकभरि साधु-सन्यासी, भक्तजन र नशा नियन्त्रणका लागि
                  भेला हुन्छन्; मन्दिर परिसर दियो र धूपले उज्यालो हुन्छ।
                  होलीमा भने रङ, अबिर, पिचकारी र ढोलका तालले सहर र गाउँ
                  एकैसाथ नाच्छन् — जात, लिङ्ग र उमेरको भेद बिर्सेर सबै
                  रङ्गीचङ्गी हुन्छन्। प्रजतन्त्र दिवसले फागुनलाई लोकतन्त्रको
                  सम्झनासँग पनि जोड्छ।
                </span>
                <span className="lang-en">
                  Falgun blends devotion with revelry. On Shivaratri,
                  Pashupatinath fills with sadhus, pilgrims and curious
                  onlookers as oil lamps and incense light the temple grounds
                  through the night. During Holi, colors, abir, water balloons
                  and drumbeats make cities and villages dance together —
                  erasing barriers of caste, gender and age. Prajatantra Diwas
                  also ties the month to memories of Nepal&apos;s democratic
                  struggle.
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
              <a href="/month/magh/" className="underline">
                <span className="lang-ne">अघिल्लो महिना: माघ</span>
                <span className="lang-en">Previous month: Magh</span>
              </a>
              <a href="/month/chaitra/" className="underline">
                <span className="lang-ne">अर्को महिना: चैत्र</span>
                <span className="lang-en">Next month: Chaitra</span>
              </a>
              <a href="/festival/maha-shivaratri/" className="underline">
                <span className="lang-ne">महाशिवरात्रि</span>
                <span className="lang-en">Maha Shivaratri</span>
              </a>
              <a href="/festival/holi/" className="underline">
                <span className="lang-ne">होली</span>
                <span className="lang-en">Holi</span>
              </a>
              <a href="/calendar/" className="underline">
                <span className="lang-ne">पात्रो हेर्नुहोस्</span>
                <span className="lang-en">View Calendar</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
