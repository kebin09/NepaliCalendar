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
              <p className="mb-3 font-semibold md:mb-4">प्रक्रिया</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                तीन सजिला चरणहरूमा नेपाल पैसा पठाउनुहोस्
              </h2>
              <p className="md:text-md">
                यो प्रक्रिया सरल र सीधा छ। तपाईंको पैसा सुरक्षित र छिटो पुग्छ,
                ठ्याक्कै जसरी एउटा सफा पंचले लक्ष्य भेद्छ।
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="/images/currency.jpg"
                  alt="नेपाली पात्रोको चित्र"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                रकम र प्राप्तकर्ता छान्नुहोस्
              </h3>
              <p>
                तपाईंले पठाउन चाहेको अमेरिकी वा अष्ट्रेलियन डलरको रकम र नेपालमा
                पाउने व्यक्तिको विवरण भर्नुहोस्।
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="/images/payment.jpg"
                  alt="नेपाली पात्रोको चित्र"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                उत्कृष्ट दर र शुल्क हेर्नुहोस्
              </h3>
              <p>
                हामी तपाईंलाई पारदर्शी विनिमय दर र न्यूनतम शुल्क देखाउँछौं, कुनै
                लुकेको खर्च बिना।
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="/images/gifts.jpg"
                  alt="नेपाली पात्रोको चित्र"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                भुक्तानी गरी पठाउनुहोस्
              </h3>
              <p>
                आफ्नो मनपर्ने विधिबाट भुक्तानी गर्नुहोस् र पैसा तुरुन्तै प्रशोधन
                भई नेपाल पठाइन्छ।
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">सुरु गर्नुहोस्</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              थप जान्नुहोस्
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

