"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          पहिलो रिचार्जमा विशेष क्यासब्याक
        </h2>
        <p className="md:text-md">
          अहिले नै रिचार्ज गर्नुहोस् र पहिलो कारोबारमा आकर्षक क्यासब्याक
          पाउनुहोस्। सीमित समयको प्रस्ताव, ढिला नगर्नुहोस्।
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="रिचार्ज गर्नुहोस्">रिचार्ज गर्नुहोस्</Button>
          <Button title="सर्तहरू" variant="secondary">
            सर्तहरू
          </Button>
        </div>
      </div>
    </section>
  );
}
