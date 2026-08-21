import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

const siteUrl = "https://nepalicalendar.kebinmaharjan.com.np";

export const metadata = {
  title: "सम्पर्क | Contact Nepali Calendar",
  description:
    "नेपाली पात्रोसँग सम्पर्क गर्नुहोस् — प्रश्न, सुझाव वा समस्याका लागि हामीलाई इमेल गर्नुहोस्। Contact the Nepali Calendar team.",
  keywords: [
    "contact nepali calendar",
    "नेपाली पात्रो सम्पर्क",
    "nepali patro contact email",
  ],
  openGraph: {
    title: "सम्पर्क | Contact Nepali Calendar",
    description:
      "प्रश्न, सुझाव वा समस्याका लागि नेपाली पात्रो टिमलाई इमेल गर्नुहोस्।",
  },
  alternates: {
    canonical: `${siteUrl}/contact/`,
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
      name: "सम्पर्क",
      item: `${siteUrl}/contact/`,
    },
  ],
};

const socialLinks = [
  { title: "Facebook", href: "#" },
  { title: "X (Twitter)", href: "#" },
  { title: "GitHub", href: "#" },
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
          <div className="mx-auto flex max-w-lg flex-col items-center text-center md:max-w-2xl">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              <span className="lang-ne">सम्पर्क गर्नुहोस्</span>
              <span className="lang-en">Contact Us</span>
            </h1>
            <p className="mb-10 md:text-md">
              <span className="lang-ne">
                तपाईंको प्रश्न, सुझाव वा समस्या साझा गर्नुहोस्। हामी तपाईंबाट
                सुन्न हार्दिक रुचि राख्छौं र सामान्यतः २४–४८ घण्टाभित्र जवाफ
                दिने प्रयास गर्छौं।
              </span>
              <span className="lang-en">
                Share your questions, suggestions or problems with us. We
                genuinely look forward to hearing from you and usually try to
                respond within 24–48 hours.
              </span>
            </p>

            <div className="flex w-full flex-col items-center rounded-lg border border-border-primary p-8 md:p-12">
              <h2 className="mb-3 text-2xl font-bold">
                <span className="lang-ne">इमेल</span>
                <span className="lang-en">Email</span>
              </h2>
              <p className="mb-6 md:text-md">
                <span className="lang-ne">हामीलाई इमेल गर्नुहोस्</span>
                <span className="lang-en">Send us an email</span>
              </p>
              <a
                href="mailto:info@nepalicalendar.kebinmaharjan.com.np"
                className="break-all text-md font-medium underline underline-offset-4"
              >
                info@nepalicalendar.kebinmaharjan.com.np
              </a>
            </div>

            <div className="mt-12 w-full">
              <h2 className="mb-6 text-2xl font-bold">
                <span className="lang-ne">सामाजिक सञ्जाल</span>
                <span className="lang-en">Social Media</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-md font-medium underline underline-offset-4"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer4 />
    </div>
  );
}
