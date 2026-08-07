"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout213() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              तेजाबी सुनको आजको मूल्य
            </h2>
            <p className="md:text-md">
              नेपाली बजारमा तेजाबी सुनको ताजा भाउ प्रति तोला हेर्नुहोस्। पछिल्लो
              तीस दिनको मूल्य उतारचढाव चार्टमा स्पष्ट देखिन्छ।
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="इतिहास" variant="secondary">
                इतिहास
              </Button>
              <Button
                title="सूचना"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                सूचना
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
