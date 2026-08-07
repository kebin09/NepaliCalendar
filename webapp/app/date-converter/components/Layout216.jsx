"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout216() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/calendar.jpg"
              className="w-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">मिति रूपान्तरण</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              एकै क्लिकमा तिथि र मिति रूपान्तरण
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              नेपाली पात्रोअनुसार कुनै पनि ग्रेगोरियन मितिलाई विक्रम संवत् र
              तिथिमा रूपान्तरण गर्नुहोस्। जन्मदिन, पर्व र शुभ कार्यको मिति
              सजिलै पत्ता लगाउनुहोस्।
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  ५००+ वर्ष
                </h3>
                <p>विसं २००० देखि २१०० सम्मको तिथि रूपान्तरण</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  १००%
                </h3>
                <p>हरेक पटक सही र विश्वसनीय नतिजा</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="मिति रूपान्तरण गर्नुहोस्" variant="secondary">
                मिति रूपान्तरण गर्नुहोस्
              </Button>
              <Button
                title="थप जान्नुहोस्"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                थप जान्नुहोस्
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

