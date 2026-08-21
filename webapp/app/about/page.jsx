import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

const siteUrl = "https://nepalicalendar.kebinmaharjan.com.np";

export const metadata = {
  title: "हामीबारे | About Nepali Calendar",
  description:
    "नेपाली पात्रो — विक्रम सम्वत् २०००–२१०० सम्मको नेपाली क्यालेन्डर, राशिफल, मिति परिवर्तक, सुन चाँदीको भाउ, विदेशी मुद्रा र चाडपर्वहरूको नि:शुल्क प्लेटफर्म।",
  keywords: [
    "about nepali calendar",
    "नेपाली पात्रो हामीबारे",
    "nepali patro bs calendar",
    "bikram sambat converter",
  ],
  openGraph: {
    title: "हामीबारे | About Nepali Calendar",
    description:
      "विक्रम सम्वत् २०००–२१०० सम्मको नेपाली क्यालेन्डर, राशिफल, मिति परिवर्तक र थप सेवाहरू।",
  },
  alternates: {
    canonical: `${siteUrl}/about/`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "गृहपृष्ठ",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "हामीबारे",
      item: `${siteUrl}/about/`,
    },
  ],
};

const features = [
  {
    id: "calendar",
    title: (
      <>
        <span className="lang-ne">नेपाली क्यालेन्डर</span>
        <span className="lang-en">Nepali Calendar</span>
      </>
    ),
    description: (
      <>
        <span className="lang-ne">
          दैनिक तिथि, नक्षत्र, योग, बिहीबार र चाडपर्वसहित विक्रम सम्वत् पात्रो।
        </span>
        <span className="lang-en">
          Vikram Samvat calendar with daily tithi, nakshatra, yoga, weekday
          and festivals.
        </span>
      </>
    ),
  },
  {
    id: "rashifal",
    title: (
      <>
        <span className="lang-ne">राशिफल (ज्योतिष)</span>
        <span className="lang-en">Rashifal (Astrology)</span>
      </>
    ),
    description: (
      <>
        <span className="lang-ne">
          दैनिक, साप्ताहिक र मासिक राशिफल — १२ वटै राशि अनुसार।
        </span>
        <span className="lang-en">
          Daily, weekly and monthly horoscopes for all 12 zodiac signs.
        </span>
      </>
    ),
  },
  {
    id: "date-converter",
    title: (
      <>
        <span className="lang-ne">मिति परिवर्तक</span>
        <span className="lang-en">Date Converter</span>
      </>
    ),
    description: (
      <>
        <span className="lang-ne">
          बिक्रम सम्वत् र ईस्वी सन् (BS ↔ AD) बीच सहज रूपमा मिति रूपान्तरण।
        </span>
        <span className="lang-en">
          Easily convert dates between Bikram Sambat and Gregorian (BS ↔ AD).
        </span>
      </>
    ),
  },
  {
    id: "gold-silver",
    title: (
      <>
        <span className="lang-ne">सुन र चाँदीको भाउ</span>
        <span className="lang-en">Gold &amp; Silver Prices</span>
      </>
    ),
    description: (
      <>
        <span className="lang-ne">
          नेपालमा आजको सुन र चाँदीको मूल्य प्रति तोला र प्रति १० ग्राम।
        </span>
        <span className="lang-en">
          Today&apos;s gold and silver prices in Nepal per tola and per 10
          grams.
        </span>
      </>
    ),
  },
  {
    id: "forex",
    title: (
      <>
        <span className="lang-ne">विदेशी मुद्रा (Forex)</span>
        <span className="lang-en">Foreign Exchange (Forex)</span>
      </>
    ),
    description: (
      <>
        <span className="lang-ne">
          नेपाल राष्ट्र बैंकको आधारमा आजको विदेशी मुद्राको विनिमय दर।
        </span>
        <span className="lang-en">
          Today&apos;s foreign currency exchange rates based on Nepal Rastra
          Bank.
        </span>
      </>
    ),
  },
  {
    id: "festivals",
    title: (
      <>
        <span className="lang-ne">चाडपर्व र बिदा</span>
        <span className="lang-en">Festivals &amp; Holidays</span>
      </>
    ),
    description: (
      <>
        <span className="lang-ne">
          नेपाली चाडपर्व, सार्वजनिक बिदा र महत्वपूर्ण दिनहरूको सूची।
        </span>
        <span className="lang-en">
          List of Nepali festivals, public holidays and important days.
        </span>
      </>
    ),
  },
];

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar9 />

      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-lg md:max-w-2xl">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              <span className="lang-ne">नेपाली पात्रोबारे</span>
              <span className="lang-en">About Nepali Calendar</span>
            </h1>
            <p className="mb-10 md:text-md">
              <span className="lang-ne">
                नेपाली पात्रो एक नि:शुल्क, विज्ञापन-मुक्त अनलाइन प्लेटफर्म हो जुन
                विक्रम सम्वत् (Bikram Sambat) आधारित नेपाली क्यालेन्डर र
                दैनिक उपयोगिता सेवाहरू प्रदान गर्दछ।
              </span>
              <span className="lang-en">
                Nepali Patro is a free, ad-free online platform that provides a
                Bikram Sambat based Nepali calendar and daily utility services.
              </span>
            </p>

            <div className="[&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-bold [&>p]:mb-4">
              <h2>
                <span className="lang-ne">यो साइट के हो?</span>
                <span className="lang-en">What Is This Site?</span>
              </h2>
              <p>
                <span className="lang-ne">
                  नेपाली पात्रो नेपाली मिति (विक्रम सम्वत्), तिथि, चाडपर्व,
                  राशिफल, सुन-चाँदीको भाउ, विदेशी मुद्राको दर र BS–AD मिति
                  रूपान्तरणलाई एउटै ठाउँमा ल्याउने उद्देश्यले बनाइएको वेब
                  प्लेटफर्म हो। यो साइट नेपाली भाषा र अङ्ग्रेजी दुवैमा
                  उपलब्ध छ र मोबाइल तथा डेस्कटपमा समान रूपमा काम गर्छ।
                </span>
                <span className="lang-en">
                  Nepali Patro is a web platform built to bring the Nepali date
                  (Bikram Sambat), tithi, festivals, rashifal, gold and silver
                  prices, foreign exchange rates and BS–AD date conversion
                  together in one place. The site is available in both Nepali
                  and English and works equally well on mobile and desktop.
                </span>
              </p>

              <h2>
                <span className="lang-ne">कसले बनाएको हो?</span>
                <span className="lang-en">Who Built It?</span>
              </h2>
              <p>
                <span className="lang-ne">
                  यो साइट नेपालका एक स्वतन्त्र डेभलपरले आफ्नो समय र श्रमले
                  निर्माण र मर्मत गरेको हो। उद्देश्य सरल छ — नेपालीहरूलाई
                  भरपर्दो, छिटो र नि:शुल्क पात्रो सेवा उपलब्ध गराउनु।
                </span>
                <span className="lang-en">
                  This site was built and is maintained by an independent
                  developer from Nepal with their own time and effort. The goal
                  is simple — to provide Nepalis with a reliable, fast and free
                  patro service.
                </span>
              </p>

              <h2>
                <span className="lang-ne">पात्रो गणना पद्धति</span>
                <span className="lang-en">Calendar Calculation Methodology</span>
              </h2>
              <p>
                <span className="lang-ne">
                  यस साइटको पात्रो तथ्याङ्क नेपाल पञ्चाङ्ग निर्णायक समिति
                  (Nepal Panchanga Nirnayak Samiti) द्वारा प्रकाशित आधिकारिक
                  पञ्चाङ्गमा आधारित छ। तिथि, नक्षत्र, योग र चाडपर्वहरू उक्त
                  समितिको मानक अनुसार प्रस्तुत गरिन्छ।
                </span>
                <span className="lang-en">
                  The calendar data on this site is based on the official
                  panchang published by the Nepal Panchanga Nirnayak Samiti.
                  Tithi, nakshatra, yoga and festivals are presented according
                  to that committee&apos;s standards.
                </span>
              </p>

              <h2>
                <span className="lang-ne">BS तथ्याङ्क दायरा</span>
                <span className="lang-en">BS Data Range</span>
              </h2>
              <p>
                <span className="lang-ne">
                  हाम्रो तथ्याङ्कसेटले विक्रम सम्वत् २००० देखि २१०० सम्मका
                  दिनहरू समेट्छ, जसको epoch 1943-04-14 AD (बैशाख १, २००० BS)
                  मा आधारित छ। यसले इतिहास, अनुसन्धान र दैनिक प्रयोगका लागि
                  ठूलो दायराको मिति रूपान्तरण सम्भव बनाउँछ।
                </span>
                <span className="lang-en">
                  Our dataset covers days from Vikram Samvat 2000 to 2100,
                  based on the epoch 1943-04-14 AD (Baisakh 1, 2000 BS). This
                  makes date conversion across a wide range possible for
                  history, research and daily use.
                </span>
              </p>

              <h2>
                <span className="lang-ne">सम्पर्क</span>
                <span className="lang-en">Contact</span>
              </h2>
              <p>
                <span className="lang-ne">
                  कुनै प्रश्न, सुझाव वा समस्या भएमा{" "}
                  <a
                    href="mailto:info@nepalicalendar.kebinmaharjan.com.np"
                    className="underline underline-offset-4"
                  >
                    info@nepalicalendar.kebinmaharjan.com.np
                  </a>{" "}
                  मा इमेल गर्नुहोस् वा{" "}
                  <a href="/contact" className="underline underline-offset-4">
                    सम्पर्क पृष्ठ
                  </a>{" "}
                  भ्रमण गर्नुहोस्।
                </span>
                <span className="lang-en">
                  For any questions, suggestions or problems, email{" "}
                  <a
                    href="mailto:info@nepalicalendar.kebinmaharjan.com.np"
                    className="underline underline-offset-4"
                  >
                    info@nepalicalendar.kebinmaharjan.com.np
                  </a>{" "}
                  or visit our{" "}
                  <a href="/contact" className="underline underline-offset-4">
                    contact page
                  </a>
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl">
            <span className="lang-ne">मुख्य विशेषताहरू</span>
            <span className="lang-en">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id}>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer4 />
    </div>
  );
}
