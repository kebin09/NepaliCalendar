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
                तीन सजिला चरणमा उपहार पठाउनुहोस्
              </h2>
              <p className="md:text-md">
                हजारौं माइल टाढा भए पनि तपाईंको माया पुर्याउन अब केही मिनेट
                मात्र लाग्छ। हाम्रो सरल प्रणालीले तपाईंलाई झन्झटबाट मुक्त राख्छ।
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
                उपहार छान्नुहोस्
              </h3>
              <p>
                केक, फूल, ह्याम्पर वा इलेक्ट्रोनिक्सको हाम्रो सङ्कलनबाट मन परेको
                उपहार रोज्नुहोस्।
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
                सन्देश र ठेगाना लेख्नुहोस्
              </h3>
              <p>
                आफ्नो मायाको सन्देश लेख्नुहोस् र प्राप्तकर्ताको सही ठेगाना
                भर्नुहोस्।
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
                हामी डेलिभर गर्छौं
              </h3>
              <p>
                बाँकी काम हाम्रो हो, हामी तपाईंको भावना २४ घण्टाभित्र सुरक्षित
                रूपमा पुर्याउँछौं।
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
