"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">पात्रो</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              एक स्क्रिनमा सम्पूर्ण समयको ज्ञान
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              विक्रम संवत् र ग्रेगोरियन मिति सँगै हेर्नुहोस्। तिथि, नक्षत्र, र
              शुभ साइतको विवरण एकै ठाउँमा स्पष्ट देखिन्छ। अब कुनै अर्को पात्रो
              पल्टाइरहनु पर्दैन।
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="पात्रो हेर्नुहोस्" variant="secondary">
                पात्रो हेर्नुहोस्
              </Button>
              <Button
                title="मिति रूपान्तरण"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                मिति रूपान्तरण
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
