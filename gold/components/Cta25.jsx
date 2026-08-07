"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          भाउ बदलिन्छ, सूचना पाइरहनुहोस्
        </h2>
        <p className="md:text-md">
          तपाईंको लागि सुन र चाँदीको मूल्य तोकिएको सीमामा पुगेपछि तुरुन्तै
          जानकारी पाउन अलर्ट सेट गर्नुहोस्।
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="सूचना सेट गर्नुहोस्">सूचना सेट गर्नुहोस्</Button>
          <Button title="थप जानकारी" variant="secondary">
            थप जानकारी
          </Button>
        </div>
      </div>
    </section>
  );
}
