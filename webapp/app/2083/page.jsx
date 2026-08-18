import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "विक्रम संवत् २०८३ | Nepali Calendar 2083 Festivals",
  description:
    "विक्रम संवत् २०८३ का प्रमुख चाडपर्व — दसैं, तिहार, छठ, माघे संक्रान्ति, शिवरात्रि र होली। Major festivals and holidays of Bikram Sambat 2083.",
  keywords: [
    "nepali calendar 2083",
    "विक्रम संवत् २०८३",
    "nepali festivals 2083",
    "2083 chadparva",
    "dashain tihar 2083",
    "nepal holiday calendar 2083",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/2083/",
  },
};

const festivals = [
  {
    name: "दसैं",
    month: "आश्विन २०८३",
    description: "नवरात्रि, फूलपाती, माहा अष्टमी र विजया दशमी — विजयको महापर्व।",
  },
  {
    name: "तिहार",
    month: "कार्तिक २०८३",
    description: "यमपञ्चक, काग, कुकुर, लक्ष्मी र गोवर्धन पूजाको रोशनीको पर्व।",
  },
  {
    name: "छठ पर्व",
    month: "कार्तिक २०८३",
    description: "अस्ताउँदो र उदाउँदो सूर्यलाई अर्घ्य दिने महापर्व।",
  },
  {
    name: "माघे संक्रान्ति",
    month: "माघ २०८३",
    description: "घ्यू, चाकु र तरुल खाएर शीत ऋतुको उत्सव मनाइने दिन।",
  },
  {
    name: "शिवरात्रि",
    month: "फागुन २०८३",
    description: "पशुपतिनाथमा लाखौं भक्तजन भेला हुने महादेवको पर्व।",
  },
  {
    name: "होली",
    month: "फागुन २०८३",
    description: "रङ्ग र रमाइलोले भरिएको फागु पर्व।",
  },
];

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold md:mb-4">विक्रम संवत्</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              २०८३
            </h1>
            <p className="md:text-md">
              नेपाली पात्रोको विक्रम संवत् २०८३ — साउनदेखि असारसम्मका चाडपर्व,
              बिदा र महत्त्वपूर्ण मितिहरूको विवरण यहाँ पाउनुहोस्।
            </p>
          </div>
        </section>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <p className="mb-3 font-semibold md:mb-4">मुख्य पर्वहरू</p>
              <h2 className="text-4xl font-bold md:text-6xl">
                २०८३ का प्रमुख चाडपर्व
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {festivals.map((f) => (
                <div
                  key={f.name}
                  className="rounded-lg border border-border-primary p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-neutral-600">
                    {f.month}
                  </p>
                  <h3 className="mb-2 text-xl font-bold">{f.name}</h3>
                  <p>{f.description}</p>
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
