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
            <p className="mb-3 font-semibold md:mb-4">दोहोरो</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              एकै ठाउँमा दुई संवत्को सटिक मिति
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              विक्रम संवत् र ग्रेगोरियन मितिको सटिक रूपान्तरण सन् १८९८ देखि २१०१
              सम्म तुरुन्तै गर्नुहोस्। एकै स्क्रिनमा दुवै मिति, बार, र चाडपर्वको
              जानकारी पाउनुहोस्।
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  सटिक
                </h3>
                <p>वर्षौंको तथ्यांकमा आधारित शतप्रतिशत सही रूपान्तरण</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  सरल
                </h3>
                <p>जटिल मितिहरूको हिसाब एकै क्लिकमा सकिने</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="सुरु" variant="secondary">
                सुरु
              </Button>
              <Button
                title="हेर्नुहोस्"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                हेर्नुहोस्
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

