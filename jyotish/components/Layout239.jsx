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
                तीन सरल चरणमा स्पष्ट मार्गदर्शन प्राप्त गर्नुहोस्
              </h2>
              <p className="md:text-md">
                हामीले तपाईंको ज्योतिषीय परामर्शलाई सहज र प्रभावकारी बनाएका छौं।
                कुनै जटिलता छैन, केवल सीधा समाधान।
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
                एक विश्वासिला ज्योतिषी छनोट गर्नुहोस्
              </h3>
              <p>
                प्रोफाइलहरू हेर्नुहोस् र आफ्नो समस्याका लागि उपयुक्त अनुभवी
                विशेषज्ञ चयन गर्नुहोस्।
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
                आफ्नो प्रश्न स्पष्ट रूपमा सोध्नुहोस्
              </h3>
              <p>
                अडियो वा भिडियो कलमा जोडिएर आफ्नो जन्म विवरण र समस्या खुलस्त
                राख्नुहोस्।
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
                व्यक्तिगत समाधान र उपाय प्राप्त गर्नुहोस्
              </h3>
              <p>
                तपाईंको कुण्डलीमा आधारित सटीक विश्लेषण र प्रभावकारी उपायहरू
                तुरुन्तै पाउनुहोस्।
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
