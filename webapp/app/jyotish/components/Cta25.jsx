"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          आफ्नो भाग्यलाई आजै बुझ्नुहोस्
        </h2>
        <p className="md:text-md">
          जीवनका अनुत्तरित प्रश्नहरूको स्पष्ट मार्गदर्शन पाउन नेपालका विश्वासिला
          ज्योतिषीहरूसँग प्रत्यक्ष जोडिनुहोस्।
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="परामर्श लिनुहोस्">परामर्श लिनुहोस्</Button>
          <Button title="थप जान्नुहोस्" variant="secondary">
            थप जान्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
