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
              <span className="lang-ne">गोपनीयता नीति</span>
              <span className="lang-en">Privacy Policy</span>
            </h1>
            <p className="mb-10 md:text-md">
              <span className="lang-ne">
                अन्तिम अद्यावधिक: २०८३ साल। यो नीति नेपाली पात्रो (
                nepalicalendar.kebinmaharjan.com.np ) वेबसाइटको प्रयोगसँग
                सम्बन्धित छ।
              </span>
              <span className="lang-en">
                Last updated: 2083 BS. This policy applies to the use of the
                Nepali Patro website (nepalicalendar.kebinmaharjan.com.np).
              </span>
            </p>

            <div className="[&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-bold [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-2">
              <h2>
                <span className="lang-ne">१. हामीले सङ्कलन गर्ने जानकारी</span>
                <span className="lang-en">1. Information We Collect</span>
              </h2>
              <p>
                <span className="lang-ne">
                  नेपाली पात्रो एक नि:शुल्क उपयोगिता वेबसाइट हो। हामी तपाईंको
                  व्यक्तिगत जानकारी (नाम, ठेगाना, फोन नम्बर आदि) सङ्कलन गर्दैनौं
                  र कुनै खाता खोल्न आवश्यक पर्दैन। हामी केवल गुमनाम (anonymous)
                  उपयोग विश्लेषण — जस्तै पृष्ठ भ्यू, ब्राउजर प्रकार र रफरिङ
                  साइट — सङ्कलन गर्छौं, जुन साइट सुधार्न मात्र प्रयोग गरिन्छ।
                </span>
                <span className="lang-en">
                  Nepali Patro is a free utility website. We do not collect
                  your personal information (name, address, phone number,
                  etc.) and no account is required. We only collect anonymous
                  usage analytics — such as page views, browser type and
                  referring site — which is used solely to improve the site.
                </span>
              </p>

              <h2>
                <span className="lang-ne">२. कुकिजहरू</span>
                <span className="lang-en">2. Cookies</span>
              </h2>
              <p>
                <span className="lang-ne">
                  यस साइटले आधारभूत कार्यात्मक कुकिजहरू मात्र प्रयोग गर्छ
                  (जस्तै तपाईंको भाषा वा प्रदर्शन प्राथमिकता सम्झने)। हामी
                  विज्ञापन वा ट्र्याकिङ उद्देश्यका लागि तेस्रो-पक्ष कुकिज
                  प्रयोग गर्दैनौं। तपाईं आफ्नो ब्राउजर सेटिङबाट कुकिज अस्वीकार
                  वा मेट्न सक्नुहुन्छ; यसले साइटको आधारभूत प्रयोगमा असर
                  पार्दैन।
                </span>
                <span className="lang-en">
                  This site uses only basic functional cookies (such as
                  remembering your language or display preference). We do not
                  use third-party cookies for advertising or tracking purposes.
                  You can reject or delete cookies from your browser settings;
                  this does not affect basic use of the site.
                </span>
              </p>

              <h2>
                <span className="lang-ne">३. तेस्रो-पक्ष सेवाहरू</span>
                <span className="lang-en">3. Third-Party Services</span>
              </h2>
              <ul>
                <li>
                  <span className="lang-ne">
                    <strong>Cloudflare:</strong> CDN र सुरक्षाका लागि। Cloudflare
                    ले आफ्नो मानक नीति अनुसार केही तकनीकी लग जानकारी प्राप्त
                    गर्न सक्छ।
                  </span>
                  <span className="lang-en">
                    <strong>Cloudflare:</strong> For CDN and security.
                    Cloudflare may receive some technical log information in
                    accordance with its standard policy.
                  </span>
                </li>
                <li>
                  <span className="lang-ne">
                    <strong>GitHub Pages:</strong> साइट होस्टिङ र स्रोत कोड
                    व्यवस्थापनका लागि।
                  </span>
                  <span className="lang-en">
                    <strong>GitHub Pages:</strong> For site hosting and source
                    code management.
                  </span>
                </li>
              </ul>
              <p>
                <span className="lang-ne">
                  यी सेवाहरूको आफ्नै गोपनीयता नीति हुन्छ, जुन हाम्रो नियन्त्रण
                  बाहिर छ।
                </span>
                <span className="lang-en">
                  These services have their own privacy policies, which are
                  outside our control.
                </span>
              </p>

              <h2>
                <span className="lang-ne">४. जानकारीको प्रयोग</span>
                <span className="lang-en">4. Use of Information</span>
              </h2>
              <p>
                <span className="lang-ne">
                  सङ्कलन गरिएको गुमनाम विश्लेषण जानकारी केवल साइटको प्रदर्शन
                  सुधार्न, लोकप्रिय पृष्ठहरू बुझ्न र प्राविधिक समस्या पत्ता
                  लगाउन प्रयोग गरिन्छ। हामी तपाईंको जानकारी कुनै पनि तेस्रो
                  पक्षलाई बेच्दैनौं वा विज्ञापनका लागि साझा गर्दैनौं।
                </span>
                <span className="lang-en">
                  The anonymous analytics information collected is used only to
                  improve site performance, understand popular pages and detect
                  technical problems. We never sell your information to any
                  third party or share it for advertising purposes.
                </span>
              </p>

              <h2>
                <span className="lang-ne">५. बालबालिकाको गोपनीयता</span>
                <span className="lang-en">5. Children&apos;s Privacy</span>
              </h2>
              <p>
                <span className="lang-ne">
                  यो साइट १३ वर्षमुनिका बालबालिकाबाट जानाजानी कुनै व्यक्तिगत
                  जानकारी सङ्कलन गर्दैन।
                </span>
                <span className="lang-en">
                  This site does not knowingly collect any personal information
                  from children under the age of 13.
                </span>
              </p>

              <h2>
                <span className="lang-ne">६. नीतिमा हुने परिवर्तन</span>
                <span className="lang-en">6. Changes to This Policy</span>
              </h2>
              <p>
                <span className="lang-ne">
                  हामी यो नीति समय-समयमा अद्यावधिक गर्न सक्छौं। परिवर्तनहरू यही
                  पृष्ठमा प्रकाशित गरिनेछन्।
                </span>
                <span className="lang-en">
                  We may update this policy from time to time. Changes will be
                  published on this page.
                </span>
              </p>

              <h2>
                <span className="lang-ne">७. सम्पर्क</span>
                <span className="lang-en">7. Contact</span>
              </h2>
              <p>
                <span className="lang-ne">
                  यो गोपनीयता नीतिबारे प्रश्न भएमा{" "}
                  <a
                    href="mailto:info@nepalicalendar.kebinmaharjan.com.np"
                    className="underline underline-offset-4"
                  >
                    info@nepalicalendar.kebinmaharjan.com.np
                  </a>{" "}
                  मा इमेल गर्नुहोस्।
                </span>
                <span className="lang-en">
                  If you have any questions about this privacy policy, email{" "}
                  <a
                    href="mailto:info@nepalicalendar.kebinmaharjan.com.np"
                    className="underline underline-offset-4"
                  >
                    info@nepalicalendar.kebinmaharjan.com.np
                  </a>
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer4 />
    </div>
  );
}
