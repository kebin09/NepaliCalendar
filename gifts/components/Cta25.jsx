"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          नेपाल पठाउनुहोस् साँचो माया
        </h2>
        <p className="md:text-md">
          केक, फूल र ह्याम्परहरू काठमाडौं उपत्यकाभित्र २४ घण्टामा ढोकामै
          डेलिभरी। जन्मदिन होस् वा चाडपर्व, हामी तपाईंको भावना पुर्याउँछौं।
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="उपहार पठाउनुहोस्">उपहार पठाउनुहोस्</Button>
          <Button title="थप हेर्नुहोस्" variant="secondary">
            थप हेर्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
