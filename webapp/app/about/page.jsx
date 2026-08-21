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
    title: "नेपाली क्यालेन्डर",
    description:
      "दैनिक तिथि, नक्षत्र, योग, बिहीबार र चाडपर्वसहित विक्रम सम्वत् पात्रो।",
  },
  {
    title: "राशिफल (ज्योतिष)",
    description:
      "दैनिक, साप्ताहिक र मासिक राशिफल — १२ वटै राशि अनुसार।",
  },
  {
    title: "मिति परिवर्तक",
    description:
      "बिक्रम सम्वत् र ईस्वी सन् (BS ↔ AD) बीच सहज रूपमा मिति रूपान्तरण।",
  },
  {
    title: "सुन र चाँदीको भाउ",
    description:
      "नेपालमा आजको सुन र चाँदीको मूल्य प्रति तोला र प्रति १० ग्राम।",
  },
  {
    title: "विदेशी मुद्रा (Forex)",
    description:
      "नेपाल राष्ट्र बैंकको आधारमा आजको विदेशी मुद्राको विनिमय दर।",
  },
  {
    title: "चाडपर्व र बिदा",
    description:
      "नेपाली चाडपर्व, सार्वजनिक बिदा र महत्वपूर्ण दिनहरूको सूची।",
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
              नेपाली पात्रोबारे
            </h1>
            <p className="mb-10 md:text-md">
              नेपाली पात्रो एक नि:शुल्क, विज्ञापन-मुक्त अनलाइन प्लेटफर्म हो जुन
              विक्रम सम्वत् (Bikram Sambat) आधारित नेपाली क्यालेन्डर र
              दैनिक उपयोगिता सेवाहरू प्रदान गर्दछ।
            </p>

            <div className="[&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-bold [&>p]:mb-4">
              <h2>यो साइट के हो?</h2>
              <p>
                नेपाली पात्रो नेपाली मिति (विक्रम सम्वत्), तिथि, चाडपर्व,
                राशिफल, सुन-चाँदीको भाउ, विदेशी मुद्राको दर र BS–AD मिति
                रूपान्तरणलाई एउटै ठाउँमा ल्याउने उद्देश्यले बनाइएको वेब
                प्लेटफर्म हो। यो साइट नेपाली भाषा र अङ्ग्रेजी दुवैमा
                उपलब्ध छ र मोबाइल तथा डेस्कटपमा समान रूपमा काम गर्छ।
              </p>

              <h2>कसले बनाएको हो?</h2>
              <p>
                यो साइट नेपालका एक स्वतन्त्र डेभलपरले आफ्नो समय र श्रमले
                निर्माण र मर्मत गरेको हो। उद्देश्य सरल छ — नेपालीहरूलाई
                भरपर्दो, छिटो र नि:शुल्क पात्रो सेवा उपलब्ध गराउनु।
              </p>

              <h2>पात्रो गणना पद्धति</h2>
              <p>
                यस साइटको पात्रो तथ्याङ्क नेपाल पञ्चाङ्ग निर्णायक समिति
                (Nepal Panchanga Nirnayak Samiti) द्वारा प्रकाशित आधिकारिक
                पञ्चाङ्गमा आधारित छ। तिथि, नक्षत्र, योग र चाडपर्वहरू उक्त
                समितिको मानक अनुसार प्रस्तुत गरिन्छ।
              </p>

              <h2>BS तथ्याङ्क दायरा</h2>
              <p>
                हाम्रो तथ्याङ्कसेटले विक्रम सम्वत् २००० देखि २१०० सम्मका
                दिनहरू समेट्छ, जसको epoch 1943-04-14 AD (बैशाख १, २००० BS)
                मा आधारित छ। यसले इतिहास, अनुसन्धान र दैनिक प्रयोगका लागि
                ठूलो दायराको मिति रूपान्तरण सम्भव बनाउँछ।
              </p>

              <h2>सम्पर्क</h2>
              <p>
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
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl">
            मुख्य विशेषताहरू
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title}>
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
