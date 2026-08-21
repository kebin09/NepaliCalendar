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
              <span className="lang-ne">आजै रूपान्तरण गर्नुहोस्</span>
              <span className="lang-en">Convert Today</span>
            </h2>
            <p className="md:text-md">
              <span className="lang-ne">
                आजको मिति परिवर्तन गरेर हेर्नुहोस् र आफ्नो योजनाहरू सही मितिमा
                मिलाउनुहोस्।
              </span>
              <span className="lang-en">
                Try converting today&apos;s date and align your plans with the
                correct date.
              </span>
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="रूपान्तरण">
                <span className="lang-ne">रूपान्तरण</span>
                <span className="lang-en">Convert</span>
              </Button>
              <Button title="थप" variant="secondary">
                <span className="lang-ne">थप</span>
                <span className="lang-en">More</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          <span className="text-xl font-bold tracking-tight opacity-60">
            <span className="lang-ne">हिमालयन पे</span>
            <span className="lang-en">Himalayan Pay</span>
          </span>
          <span className="text-xl font-bold tracking-tight opacity-60">
            <span className="lang-ne">नेपाली पात्रो</span>
            <span className="lang-en">Nepali Patro</span>
          </span>
          <span className="text-xl font-bold tracking-tight opacity-60">
            <span className="lang-ne">सगरमाथा बैंक</span>
            <span className="lang-en">Sagarmatha Bank</span>
          </span>
          <span className="text-xl font-bold tracking-tight opacity-60">
            <span className="lang-ne">गोल्ड सेन्टर</span>
            <span className="lang-en">Gold Center</span>
          </span>
          <span className="text-xl font-bold tracking-tight opacity-60">
            <span className="lang-ne">मुद्रा एक्सचेन्ज</span>
            <span className="lang-en">Mudra Exchange</span>
          </span>
          <span className="text-xl font-bold tracking-tight opacity-60">
            <span className="lang-ne">एनआरएन रिमिट</span>
            <span className="lang-en">NRN Remit</span>
          </span>
        </div>
      </div>
    </section>
  );
}
