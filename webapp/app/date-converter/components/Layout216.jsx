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
            <p className="mb-3 font-semibold md:mb-4">
              <span className="lang-ne">मिति रूपान्तरण</span>
              <span className="lang-en">Date Conversion</span>
            </p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              <span className="lang-ne">एकै क्लिकमा तिथि र मिति रूपान्तरण</span>
              <span className="lang-en">
                Tithi &amp; Date Conversion in One Click
              </span>
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              <span className="lang-ne">
                नेपाली पात्रोअनुसार कुनै पनि ग्रेगोरियन मितिलाई विक्रम संवत् र
                तिथिमा रूपान्तरण गर्नुहोस्। जन्मदिन, पर्व र शुभ कार्यको मिति
                सजिलै पत्ता लगाउनुहोस्।
              </span>
              <span className="lang-en">
                Convert any Gregorian date to Bikram Sambat and tithi according
                to the Nepali calendar. Easily find dates for birthdays,
                festivals and auspicious occasions.
              </span>
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  <span className="lang-ne">५००+ वर्ष</span>
                  <span className="lang-en">500+ Years</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    विसं २००० देखि २१०० सम्मको तिथि रूपान्तरण
                  </span>
                  <span className="lang-en">
                    Tithi conversion from BS 2000 to 2100
                  </span>
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  <span className="lang-ne">१००%</span>
                  <span className="lang-en">100%</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    हरेक पटक सही र विश्वसनीय नतिजा
                  </span>
                  <span className="lang-en">
                    Correct and reliable results every time
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="मिति रूपान्तरण गर्नुहोस्" variant="secondary">
                <span className="lang-ne">मिति रूपान्तरण गर्नुहोस्</span>
                <span className="lang-en">Convert a Date</span>
              </Button>
              <Button
                title="थप जान्नुहोस्"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                <span className="lang-ne">थप जान्नुहोस्</span>
                <span className="lang-en">Learn More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

