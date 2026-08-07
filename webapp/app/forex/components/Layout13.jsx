"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">उपकरण</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              कुनै पनि मुद्रा नेपाली रुपैयाँमा तुरुन्त बदल्नुहोस्
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              हाम्रो करेन्सी कन्भर्टरले नेपाल राष्ट्र बैंकको ताजा दर प्रयोग
              गर्छ। सटीक गणनाको लागि रकम हाल्नुहोस् र मुद्रा छान्नुहोस्।
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-2">
              <span className="text-xl font-bold tracking-tight opacity-60">हिमालयन पे</span>
              <span className="text-xl font-bold tracking-tight opacity-60">नेपाली पात्रो</span>
              <span className="text-xl font-bold tracking-tight opacity-60">सगरमाथा बैंक</span>
              <span className="text-xl font-bold tracking-tight opacity-60">गोल्ड सेन्टर</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="बदल्नुहोस्" variant="secondary">
                बदल्नुहोस्
              </Button>
              <Button
                title="दरहरू"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                दरहरू
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/currency.jpg"
              className="w-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

