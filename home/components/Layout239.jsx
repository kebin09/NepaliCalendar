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
              <p className="mb-3 font-semibold md:mb-4">सुरुवात</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                तीन सजिला चरणमा आफ्नो संसार मिलाउनुहोस्
              </h2>
              <p className="md:text-md">
                यो साधारण छ। एउटा सफा सुरुवात र बाँकी सबै कुरा आफैं मिल्छ।
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
                एप डाउनलोड गर्नुहोस्
              </h3>
              <p>
                आफ्नो फोनमा एप ल्याउनुहोस्। यो हलुका र तीव्र छ, ठाउँ धेरै
                लिँदैन।
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
                भाषा र प्राथमिकता सेट गर्नुहोस्
              </h3>
              <p>
                नेपाली वा अंग्रेजी रोज्नुहोस्। आफ्नो गाउँको मौसम र मनपर्ने
                समाचार छान्नुहोस्।
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
                सूचना पाउनुहोस् र सहज हुनुहोस्
              </h3>
              <p>
                चाडपर्व र कार्यक्रमहरूको सूचना समयमै आउँछ। तपाईंको दिन आफैं
                व्यवस्थित हुन्छ।
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
