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
              आजै रूपान्तरण गर्नुहोस्
            </h2>
            <p className="md:text-md">
              आजको मिति परिवर्तन गरेर हेर्नुहोस् र आफ्नो योजनाहरू सही मितिमा
              मिलाउनुहोस्।
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="रूपान्तरण">रूपान्तरण</Button>
              <Button title="थप" variant="secondary">
                थप
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 1"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 2"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 2"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 3"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 3"
            className="max-h-12 md:max-h-14"
          />
        </div>
      </div>
    </section>
  );
}
