"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          आजै आफ्नो स्वास्थ्य यात्रा सुरु गर्नुहोस्
        </h2>
        <p className="md:text-md">
          पहिलो पटक नि:शुल्क परामर्श बुक गर्नुहोस् र आफ्नो शरीरलाई बुझ्ने नयाँ
          तरिका अनुभव गर्नुहोस्।
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="परामर्श">परामर्श</Button>
          <Button title="ट्रयाक" variant="secondary">
            ट्रयाक
          </Button>
        </div>
      </div>
    </section>
  );
}
