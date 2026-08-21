"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">
              <span className="lang-ne">दोहोरो</span>
              <span className="lang-en">Dual</span>
            </p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              <span className="lang-ne">एकै ठाउँमा दुई संवत्को सटिक मिति</span>
              <span className="lang-en">
                Accurate Dates of Two Eras in One Place
              </span>
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              <span className="lang-ne">
                विक्रम संवत् र ग्रेगोरियन मितिको सटिक रूपान्तरण सन् १८९८ देखि २१०१
                सम्म तुरुन्तै गर्नुहोस्। एकै स्क्रिनमा दुवै मिति, बार, र चाडपर्वको
                जानकारी पाउनुहोस्।
              </span>
              <span className="lang-en">
                Instantly convert accurately between Bikram Sambat and Gregorian
                dates from 1898 to 2101 AD. Get both dates, weekdays and festival
                information on one screen.
              </span>
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  <span className="lang-ne">सटिक</span>
                  <span className="lang-en">Accurate</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    वर्षौंको तथ्यांकमा आधारित शतप्रतिशत सही रूपान्तरण
                  </span>
                  <span className="lang-en">
                    100% accurate conversion based on years of data
                  </span>
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  <span className="lang-ne">सरल</span>
                  <span className="lang-en">Simple</span>
                </h3>
                <p>
                  <span className="lang-ne">
                    जटिल मितिहरूको हिसाब एकै क्लिकमा सकिने
                  </span>
                  <span className="lang-en">
                    Complex date calculations done in one click
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="सुरु" variant="secondary">
                <span className="lang-ne">सुरु</span>
                <span className="lang-en">Start</span>
              </Button>
              <Button
                title="हेर्नुहोस्"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                <span className="lang-ne">हेर्नुहोस्</span>
                <span className="lang-en">See More</span>
              </Button>
            </div>
          </div>
          <img
            src="/images/calculator.jpg"
            className="w-full object-cover"
            alt="नेपाली पात्रोको चित्र"
          />
        </div>
      </div>
    </section>
  );
}

