"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaStamp } from "react-icons/fa6";

export function Layout22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <FaStamp className="size-20" aria-hidden="true" />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              छापावाल सुनको आजको भाउ
            </h2>
            <p className="md:text-md">
              नेपाल सुनचाँदी व्यवसायी महासंघले तोकेको छापावाल सुनको मूल्य प्रति
              तोला। पछिल्लो ३० दिनको मूल्य उतारचढाव चार्टमा हेर्नुहोस्।
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
          <div>
            <img
              src="/images/gold.jpg"
              className="w-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

