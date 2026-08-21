"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          <span className="lang-ne">आजको राशिफल हेर्नुहोस्</span>
          <span className="lang-en">View Today&apos;s Rashifal</span>
        </h2>
        <p className="md:text-md">
          <span className="lang-ne">
            आफ्नो राशि चयन गर्नुहोस् र आजको दिन तपाईंको लागि के लिएर आएको छ,
            विस्तृतमा पढ्नुहोस्।
          </span>
          <span className="lang-en">
            Choose your zodiac sign and read in detail what today holds for you.
          </span>
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="राशिफल">
            <span className="lang-ne">राशिफल</span>
            <span className="lang-en">Rashifal</span>
          </Button>
          <Button title="राशि" variant="secondary">
            <span className="lang-ne">राशि</span>
            <span className="lang-en">Zodiac Signs</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
