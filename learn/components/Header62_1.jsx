"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">सिक्नुहोस्</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          ज्ञानको साधारण मार्ग
        </h1>
        <p className="md:text-md">
          संस्था, कक्षा र विषय अनुसार मिलाइएका नि:शुल्क भिडियो, अडियो र पाठ्य
          सामग्रीहरू। सिकाइ कहिल्यै यति सहज थिएन।
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="पाठ हेर्नुहोस्">पाठ हेर्नुहोस्</Button>
          <Button title="विषय खोज्नुहोस्" variant="secondary">
            विषय खोज्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
