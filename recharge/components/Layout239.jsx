"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">सरल</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                तीन सजिला चरणमा नेपाल रिचार्ज गर्नुहोस्
              </h2>
              <p className="md:text-md">
                जटिलतालाई बिर्सनुहोस्। तपाईंको माया पठाउन अब केही ट्याप मात्रै
                काफी छ। यो प्रक्रिया स्पष्ट र पारदर्शी छ।
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                अपरेटर र रकम छान्नुहोस्
              </h3>
              <p>
                Ncell, NTC वा Smart Cell मध्ये एउटा छान्नुहोस् र आफूले पठाउन
                चाहेको रकम निर्धारण गर्नुहोस्।
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                प्राप्तकर्ताको नम्बर हाल्नुहोस्
              </h3>
              <p>
                नेपालमा रहेको आफ्नो प्रियजनको मोबाइल नम्बर सही रूपमा प्रविष्ट
                गर्नुहोस्।
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                भुक्तानी गरी तुरुन्त पठाउनुहोस्
              </h3>
              <p>
                आफ्नो मनपर्ने भुक्तानी विधि छान्नुहोस् र रिचार्ज सेकेन्डमै
                प्राप्तकर्ताको फोनमा पुग्छ।
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">थप जान्नुहोस्</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              सहयोग
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
