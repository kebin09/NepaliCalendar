"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          यो दिन सेभ गर्नुहोस्
        </h2>
        <p className="md:text-md">
          आफ्नो क्यालेन्डरमा राख्नुहोस् र साथीहरूलाई स्तनपानको महत्त्व बुझाउन
          शुभकामना सन्देश पठाउनुहोस्।
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="सेभ गर्नुहोस्">सेभ गर्नुहोस्</Button>
          <Button title="साझा गर्नुहोस्" variant="secondary">
            साझा गर्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
