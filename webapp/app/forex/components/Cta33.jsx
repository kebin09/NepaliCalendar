"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta33() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              दर अपडेट कहिल्यै नछुटाउनुहोस्
            </h2>
            <p className="md:text-md">
              बजार खुल्ने बित्तिकै आफ्नो मोबाइलमा दरको सूचना पाउनुहोस् र कुनै
              पनि उतारचढाव नछुटाउनुहोस्।
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="डाउनलोड">डाउनलोड</Button>
              <Button title="थप जान्नुहोस्" variant="secondary">
                थप जान्नुहोस्
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          <span className="text-xl font-bold tracking-tight opacity-60">हिमालयन पे</span>
          <span className="text-xl font-bold tracking-tight opacity-60">नेपाली पात्रो</span>
          <span className="text-xl font-bold tracking-tight opacity-60">सगरमाथा बैंक</span>
          <span className="text-xl font-bold tracking-tight opacity-60">गोल्ड सेन्टर</span>
          <span className="text-xl font-bold tracking-tight opacity-60">मुद्रा एक्सचेन्ज</span>
          <span className="text-xl font-bold tracking-tight opacity-60">एनआरएन रिमिट</span>
        </div>
      </div>
    </section>
  );
}
