"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                आजको सुन र चाँदीको मूल्य
              </h1>
              <p className="md:text-md">
                नेपाली बजारमा छापावाल र तेजाबी सुनको ताजा भाउ प्रति तोला र दश
                ग्राममा हेर्नुहोस्। लाइभ अपडेट र दैनिक मूल्य परिवर्तनको सूचना
                यहाँ पाउनुहोस्।
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="सुनको भाउ">सुनको भाउ</Button>
                <Button title="चाँदीको भाउ" variant="secondary">
                  चाँदीको भाउ
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/gold.jpg"
              className="size-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

