import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

const siteUrl = "https://nepalicalendar.kebinmaharjan.com.np";

export const metadata = {
  title: "गोपनीयता नीति | Privacy Policy",
  description:
    "नेपाली पात्रोको गोपनीयता नीति — हामी कुन जानकारी सङ्कलन गर्छौं, कसरी प्रयोग गर्छौं र तपाईंको गोपनीयता कसरी जोगाउँछौं।",
  keywords: [
    "privacy policy nepali calendar",
    "गोपनीयता नीति",
    "nepali patro privacy",
  ],
  openGraph: {
    title: "गोपनीयता नीति | Privacy Policy",
    description:
      "नेपाली पात्रोको गोपनीयता नीति — हामी कुन जानकारी सङ्कलन गर्छौं र कसरी प्रयोग गर्छौं।",
  },
  alternates: {
    canonical: `${siteUrl}/privacy/`,
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />

      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-lg md:max-w-2xl">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              गोपनीयता नीति
            </h1>
            <p className="mb-10 md:text-md">
              अन्तिम अद्यावधिक: २०८३ साल। यो नीति नेपाली पात्रो (
              nepalicalendar.kebinmaharjan.com.np ) वेबसाइटको प्रयोगसँग
              सम्बन्धित छ।
            </p>

            <div className="[&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-bold [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-2">
              <h2>१. हामीले सङ्कलन गर्ने जानकारी</h2>
              <p>
                नेपाली पात्रो एक नि:शुल्क उपयोगिता वेबसाइट हो। हामी तपाईंको
                व्यक्तिगत जानकारी (नाम, ठेगाना, फोन नम्बर आदि) सङ्कलन गर्दैनौं
                र कुनै खाता खोल्न आवश्यक पर्दैन। हामी केवल गुमनाम (anonymous)
                उपयोग विश्लेषण — जस्तै पृष्ठ भ्यू, ब्राउजर प्रकार र रफरिङ
                साइट — सङ्कलन गर्छौं, जुन साइट सुधार्न मात्र प्रयोग गरिन्छ।
              </p>

              <h2>२. कुकिजहरू</h2>
              <p>
                यस साइटले आधारभूत कार्यात्मक कुकिजहरू मात्र प्रयोग गर्छ
                (जस्तै तपाईंको भाषा वा प्रदर्शन प्राथमिकता सम्झने)। हामी
                विज्ञापन वा ट्र्याकिङ उद्देश्यका लागि तेस्रो-पक्ष कुकिज
                प्रयोग गर्दैनौं। तपाईं आफ्नो ब्राउजर सेटिङबाट कुकिज अस्वीकार
                वा मेट्न सक्नुहुन्छ; यसले साइटको आधारभूत प्रयोगमा असर
                पार्दैन।
              </p>

              <h2>३. तेस्रो-पक्ष सेवाहरू</h2>
              <ul>
                <li>
                  <strong>Cloudflare:</strong> CDN र सुरक्षाका लागि। Cloudflare
                  ले आफ्नो मानक नीति अनुसार केही तकनीकी लग जानकारी प्राप्त
                  गर्न सक्छ।
                </li>
                <li>
                  <strong>GitHub Pages:</strong> साइट होस्टिङ र स्रोत कोड
                  व्यवस्थापनका लागि।
                </li>
              </ul>
              <p>
                यी सेवाहरूको आफ्नै गोपनीयता नीति हुन्छ, जुन हाम्रो नियन्त्रण
                बाहिर छ।
              </p>

              <h2>४. जानकारीको प्रयोग</h2>
              <p>
                सङ्कलन गरिएको गुमनाम विश्लेषण जानकारी केवल साइटको प्रदर्शन
                सुधार्न, लोकप्रिय पृष्ठहरू बुझ्न र प्राविधिक समस्या पत्ता
                लगाउन प्रयोग गरिन्छ। हामी तपाईंको जानकारी कुनै पनि तेस्रो
                पक्षलाई बेच्दैनौं वा विज्ञापनका लागि साझा गर्दैनौं।
              </p>

              <h2>५. बालबालिकाको गोपनीयता</h2>
              <p>
                यो साइट १३ वर्षमुनिका बालबालिकाबाट जानाजानी कुनै व्यक्तिगत
                जानकारी सङ्कलन गर्दैन।
              </p>

              <h2>६. नीतिमा हुने परिवर्तन</h2>
              <p>
                हामी यो नीति समय-समयमा अद्यावधिक गर्न सक्छौं। परिवर्तनहरू यही
                पृष्ठमा प्रकाशित गरिनेछन्।
              </p>

              <h2>७. सम्पर्क</h2>
              <p>
                यो गोपनीयता नीतिबारे प्रश्न भएमा{" "}
                <a
                  href="mailto:info@nepalicalendar.kebinmaharjan.com.np"
                  className="underline underline-offset-4"
                >
                  info@nepalicalendar.kebinmaharjan.com.np
                </a>{" "}
                मा इमेल गर्नुहोस्।
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer4 />
    </div>
  );
}
