"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          आफ्नो सिकाइ यात्रा सुरु गर्नुहोस्
        </h2>
        <p className="md:text-md">
          हजारौं पाठहरू तपाईंको औंलाको टुप्पोमा। आजै आफ्नो मनपर्ने विषय
          छान्नुहोस् र नयाँ संसार खोल्नुहोस्।
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="नि:शुल्क सुरु गर्नुहोस्">
            नि:शुल्क सुरु गर्नुहोस्
          </Button>
          <Button title="थप जान्नुहोस्" variant="secondary">
            थप जान्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
