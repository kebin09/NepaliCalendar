import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";
import { CalendarGrid } from "@/app/calendar/components/CalendarGrid";
import { TodayInfo } from "@/app/calendar/components/TodayInfo";

const siteUrl = "https://nepalicalendar.kebinmaharjan.com.np";

export const metadata = {
  title:
    "Nepali Calendar 2083 | नेपाली पात्रो - Today's Date, Tithi & Festivals",
  description:
    "नेपाली पात्रो २०८३ मा आजको मिति, तिथि, नक्षत्र, चाडपर्व, राशिफल, सुनको भाउ र विनिमय दर हेर्नुहोस्। Nepali calendar with tithi, festivals and date converter.",
  keywords: [
    "nepali calendar",
    "nepali patro",
    "nepali date today",
    "नेपाली पात्रो",
    "आजको मिति",
    "nepali calendar 2083",
    "bikram sambat calendar",
    "nepali panchang",
    "today nepali date",
    "nepali tithi",
  ],
  openGraph: {
    title: "Nepali Calendar 2083 | नेपाली पात्रो",
    description:
      "Today's Nepali date, tithi, festivals, rashifal, gold price & forex rates.",
    url: siteUrl + "/",
  },
  alternates: {
    canonical: siteUrl + "/",
  },
};

const faqItems = [
  {
    qNe: "आजको नेपाली मिति के हो?",
    aNe: "आजको नेपाली (विक्रम संवत्) मिति हेर्न हाम्रो पात्रो पृष्ठ हेर्नुहोस्, जुन तिथि, नक्षत्र, योग, करण र चाडपर्वका विवरणसहित हरेक दिन अद्यावधिक हुन्छ।",
    q: "What is today's Nepali date?",
    a: "Check our calendar page for today's Nepali (Bikram Sambat) date, updated daily with tithi, nakshatra, yoga, karan and festival details.",
  },
  {
    qNe: "नेपाली पात्रो के हो?",
    aNe: "विक्रम संवत् (वि.सं.) वा नेपाली पात्रो नामले चिनिने नेपाली पात्रो नेपालको आधिकारिक पात्रो हो। यो सौर पात्रो हो र सन् (Gregorian) पात्रोभन्दा लगभग ५६ वर्ष ८ महिना अगाडि छ। नयाँ वर्ष अप्रिलको मध्यमा बैशाख १ गते सुरु हुन्छ।",
    q: "What is the Nepali calendar?",
    a: "The Nepali calendar, known as Bikram Sambat (BS) or Nepali Patro, is the official calendar of Nepal. It is a solar calendar approximately 56 years and 8 months ahead of the Gregorian calendar. The new year starts in mid-April on Baisakh 1.",
  },
  {
    qNe: "विक्रम संवत् के हो?",
    aNe: "विक्रम संवत् नेपाली पात्रो प्रणालीमा प्रयोग हुने संवत् हो। यो ईसापूर्व ५७ मा सुरु भएको हो र राजा विक्रमादित्यको नामबाट नामाकरण भएको हो। यो नेपालको आधिकारिक पात्रो हो र सन् पात्रोभन्दा लगभग ५६ वर्ष अगाडि छ।",
    q: "What is Bikram Sambat?",
    a: "Bikram Sambat (विक्रम संवत्) is the calendar era used in the Nepali calendar system. It began in 57 BCE and is named after King Vikramaditya. It is the official calendar of Nepal and is about 56 years ahead of the Gregorian calendar.",
  },
  {
    qNe: "सन् लाई विक्रम संवत् मा कसरी रूपान्तरण गर्ने?",
    aNe: "कुनै पनि ग्रेगोरियन (सन्) मितिलाई विक्रम संवत् (वि.सं.) मा रूपान्तरण गर्न हाम्रो मिति रूपान्तरण उपकरण प्रयोग गर्नुहोस्। हाम्रो रूपान्तरकले सन् १९४३ (वि.सं. २०००) देखि सन् २०४३ (वि.सं. २१००) सम्मका मितिहरू समर्थन गर्छ।",
    q: "How do I convert AD to BS?",
    a: "Use our date converter tool to convert any Gregorian (AD) date to Bikram Sambat (BS). Our converter supports dates from 1943 AD (2000 BS) to 2043 AD (2100 BS).",
  },
  {
    qNe: "विक्रम संवत् लाई सन् मा कसरी रूपान्तरण गर्ने?",
    aNe: "हाम्रो मिति रूपान्तरकमा विक्रम संवत् वर्ष, महिना र गते छान्नुहोस्, र त्यसले सोही ग्रेगोरियन (सन्) मिति तुरुन्तै देखाउँछ।",
    q: "How do I convert BS to AD?",
    a: "Select the Bikram Sambat year, month, and day in our date converter and it will show the corresponding Gregorian (AD) date instantly.",
  },
  {
    qNe: "नेपाली पात्रोमा कति महिना हुन्छन्?",
    aNe: "नेपाली पात्रोमा १२ महिना छन्: बैशाख, जेठ, असार, साउन, भदौ, असोज, कार्तिक, मंसिर, पुष, माघ, फागुन र चैत। हरेक महिनामा २९ देखि ३२ सम्म दिन हुन्छन्।",
    q: "How many months are in the Nepali calendar?",
    a: "The Nepali calendar has 12 months: Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, and Chaitra. Each month has between 29 and 32 days.",
  },
  {
    qNe: "नेपाली पात्रो चन्द्रमास हो कि सौर्यमास?",
    aNe: "नेपाली पात्रो सौर पात्रो हो। महिनाहरू उष्णकटिबन्धीय वर्षमा आधारित छन् र हरेक महिनाका दिनहरू वर्षअनुसार २९ देखि ३२ सम्म फरक हुन्छन्।",
    q: "Is the Nepali calendar lunar or solar?",
    a: "The Nepali calendar is a solar calendar. The months are based on the tropical year, and the number of days in each month varies between 29 and 32 days depending on the year.",
  },
  {
    qNe: "नेपाली नयाँ वर्ष कहिले पर्छ?",
    aNe: "नेपाली नयाँ वर्ष बैशाख १ गते पर्छ, जुन सामान्यतया अप्रिलको मध्यमा पर्छ। वि.सं. २०८३ मा नयाँ वर्ष अप्रिल १४, २०२६ मा परेको थियो।",
    q: "When is the Nepali new year?",
    a: "The Nepali new year falls on Baisakh 1, which typically falls in mid-April. In 2083 BS, the new year was on April 14, 2026.",
  },
  {
    qNe: "नेपालका प्रमुख चाडपर्वहरू के-के हुन्?",
    aNe: "प्रमुख चाडपर्वहरूमा दशैं, तिहार, छठ, होली, शिवरात्रि, जनै पूर्णिमा, कृष्ण जन्माष्टमी र तीज पर्छन्। हरेकको विक्रम संवत् पात्रोमा निश्चित मिति हुन्छ।",
    q: "What are the major Nepali festivals?",
    a: "The major festivals include Dashain, Tihar, Chhath, Holi, Shivaratri, Janai Purnima, Krishna Janmashtami, and Tij. Each has specific dates in the Bikram Sambat calendar.",
  },
  {
    qNe: "दशैं के हो?",
    aNe: "दशैं (विजया दशमी) नेपालको सबैभन्दा ठूलो पर्व हो, जुन देवी दुर्गाले महिषासुर राक्षसमाथि विजय प्राप्त गरेको खुसियालीमा मनाइन्छ। यो विक्रम संवत् पात्रोको असोज महिनामा पर्ने १५ दिने पर्व हो।",
    q: "What is Dashain?",
    a: "Dashain (विजया दशमी) is the biggest festival in Nepal, celebrating the victory of goddess Durga over demon Mahishasura. It is a 15-day festival falling in the month of Ashwin in the Bikram Sambat calendar.",
  },
  {
    qNe: "आजको तिथि के हो?",
    aNe: "आजको सम्पूर्ण पञ्चाङ्ग — तिथि, नक्षत्र, योग, करण र सूर्योदय/सूर्यास्त समयसहित — हेर्न हाम्रो पात्रो पृष्ठ हेर्नुहोस्। पञ्चाङ्ग हरेक दिन अद्यावधिक हुन्छ।",
    q: "What is today's tithi?",
    a: "Check our calendar page for today's complete panchang including tithi, nakshatra, yoga, karan, and sunrise/sunset times. The panchang updates daily.",
  },
  {
    qNe: "आज नेपालमा सुनको भाउ कति छ?",
    aNe: "नेपाल सुनचाँदी व्यापारी महासंघले तोकेबमोजिम तोला र १० ग्रामका दरले नेपालमा सुन र चाँदीको ताजा भाउ हेर्न हाम्रो सुनको भाउ पृष्ठ हेर्नुहोस्।",
    q: "What is the gold price in Nepal today?",
    a: "Check our gold price page for the latest gold and silver rates in Nepal per tola and per 10 grams, as set by the Nepal Gold and Silver Dealers Association.",
  },
  {
    qNe: "आज नेपालमा विनिमय दर कति छ?",
    aNe: "USD, EUR, GBP, AUD लगायत प्रमुख मुद्राहरूको नेपाल राष्ट्र बैंकको आधिकारिक विनिमय दर हेर्न हाम्रो विदेशी मुद्रा पृष्ठ हेर्नुहोस्।",
    q: "What is the exchange rate in Nepal today?",
    a: "Check our forex page for Nepal Rastra Bank's official exchange rates for USD, EUR, GBP, AUD and other major currencies.",
  },
  {
    qNe: "यो नेपाली पात्रो कति सही छ?",
    aNe: "हाम्रो पात्रोको तथ्यांक नेपाल पञ्चाङ्ग निर्णायक समितिको गणनामा आधारित छ, जुन नेपालमा नेपाली पात्रो गणनाको आधिकारिक निकाय हो।",
    q: "How accurate is this Nepali calendar?",
    a: "Our calendar data is based on the Nepal Panchanga Nirnayak Samiti (Nepal Calendar Determination Committee) calculations, which is the authoritative body for Nepali calendar calculations in Nepal.",
  },
  {
    qNe: "के म यो नेपाली पात्रो आफ्नो फोनमा प्रयोग गर्न सक्छु?",
    aNe: "हो, हाम्रो वेबसाइट पूर्ण रूपमा रेस्पोन्सिभ छ र सबै मोबाइल उपकरणमा चल्छ। नेटिभ एपजस्तै छिटो पहुँचका लागि यसलाई आफ्नो होम स्क्रिनमा पनि राख्न सक्नुहुन्छ।",
    q: "Can I use this Nepali calendar on my phone?",
    a: "Yes, our website is fully responsive and works on all mobile devices. You can also add it to your home screen for quick access like a native app.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <div>
      <Navbar9 />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">
                <span className="lang-ne">नेपाली पात्रो</span>
                <span className="lang-en">Nepali Calendar</span>
              </p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                <span className="lang-ne">नेपाली पात्रो २०८३</span>
                <span className="lang-en">Nepali Calendar 2083</span>
              </h1>
              <p className="mb-4 md:text-md">
                <span className="lang-ne">
                  नेपालको आधिकारिक पात्रो — विक्रम संवत् २०८३ मा आजको मिति, तिथि,
                  नक्षत्र र चाडपर्व हेर्नुहोस्। नेपाली पात्रो सन् (Gregorian)
                  पात्रोभन्दा लगभग ५६ वर्ष अगाडि छ।
                </span>
                <span className="lang-en">
                  Nepal&apos;s official calendar — view today&apos;s date, tithi,
                  nakshatra and festivals in Bikram Sambat 2083. The Nepali
                  calendar is about 56 years ahead of the Gregorian calendar.
                </span>
              </p>
              <p className="md:text-md">
                <span className="lang-ne">
                  नेपाली पात्रो (विक्रम संवत्) नेपालको आधिकारिक पात्रो हो।
                  आजको मिति, तिथि, चाडपर्व, राशिफल, सुनको भाउ, विनिमय दर
                  हेर्नुहोस् र वि.सं. र सन् मिति बीच रूपान्तरण गर्नुहोस्।
                </span>
                <span className="lang-en">
                  The Nepali Calendar (Bikram Sambat) is the official calendar of
                  Nepal. Check today&apos;s date, tithi, festivals, horoscope, gold
                  prices, forex rates and convert between BS and AD dates.
                </span>
              </p>
            </div>
            <div className="rounded-lg border border-border-primary p-6 md:p-8">
              <CalendarGrid />
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <p className="mb-3 font-semibold md:mb-4">
                <span className="lang-ne">आजको पञ्चाङ्ग</span>
                <span className="lang-en">Today&apos;s Panchang</span>
              </p>
              <h2 className="text-4xl font-bold md:text-6xl">
                <span className="lang-ne">आजको दिनको पूरा विवरण</span>
                <span className="lang-en">Complete Details of Today</span>
              </h2>
              <p className="mt-3 md:mt-4">
                <span className="lang-ne">
                  मिति, महिना र आगामी पर्वका बारेमा जानकारी हरेक दिन आफैँ
                  अद्यावधिक हुन्छ।
                </span>
                <span className="lang-en">
                  Information about the date, month and upcoming festivals
                  updates automatically every day.
                </span>
              </p>
            </div>
            <TodayInfo />
          </div>
        </section>

        <section className="bg-background-secondary px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <h2 className="text-4xl font-bold md:text-6xl">
                <span className="lang-ne">थप सेवाहरू</span>
                <span className="lang-en">More Services</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/rashifal/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  <span className="lang-ne">राशिफल</span>
                  <span className="lang-en">Rashifal</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    सबै १२ राशिको आजको दैनिक राशिफल पढ्नुहोस्।
                  </span>
                  <span className="lang-en">
                    Read today&apos;s daily rashifal for all 12 zodiac signs.
                  </span>
                </p>
              </a>
              <a
                href="/date-converter/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  <span className="lang-ne">मिति रूपान्तरण</span>
                  <span className="lang-en">Date Converter</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    विक्रम संवत् र सन् बीच मिति रूपान्तरण गर्नुहोस्।
                  </span>
                  <span className="lang-en">
                    Convert dates between Bikram Sambat (BS) and Gregorian (AD).
                  </span>
                </p>
              </a>
              <a
                href="/gold/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  <span className="lang-ne">सुन र चाँदीको मूल्य</span>
                  <span className="lang-en">Gold &amp; Silver Prices</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    नेपालमा आजको सुन र चाँदीको ताजा भाउ।
                  </span>
                  <span className="lang-en">
                    Today&apos;s latest gold and silver prices in Nepal.
                  </span>
                </p>
              </a>
              <a
                href="/forex/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  <span className="lang-ne">विनिमय दर</span>
                  <span className="lang-en">Exchange Rates</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    नेपाल राष्ट्र बैंकको आधिकारिक विनिमय दर।
                  </span>
                  <span className="lang-en">
                    Official exchange rates from Nepal Rastra Bank.
                  </span>
                </p>
              </a>
              <a
                href="/2083/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  <span className="lang-ne">वि.सं. २०८३</span>
                  <span className="lang-en">BS 2083</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    २०८३ का सबै चाडपर्व र सार्वजनिक बिदा।
                  </span>
                  <span className="lang-en">
                    All festivals and public holidays of 2083.
                  </span>
                </p>
              </a>
              <a
                href="/holidays/2083/"
                className="rounded-lg border border-border-primary p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold">
                  <span className="lang-ne">सार्वजनिक बिदा २०८३</span>
                  <span className="lang-en">Public Holidays 2083</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    विक्रम संवत् २०८३ का सबै सार्वजनिक बिदाहरू।
                  </span>
                  <span className="lang-en">
                    All public holidays of Bikram Sambat 2083.
                  </span>
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="mb-10 text-4xl font-bold md:mb-14 md:text-6xl">
              <span className="lang-ne">बारम्बार सोधिने प्रश्नहरू</span>
              <span className="lang-en">Frequently Asked Questions</span>
            </h2>
            <div className="space-y-8">
              {faqItems.map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold">
                    <span className="lang-ne">{item.qNe}</span>
                    <span className="lang-en">{item.q}</span>
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    <span className="lang-ne">{item.aNe}</span>
                    <span className="lang-en">{item.a}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
