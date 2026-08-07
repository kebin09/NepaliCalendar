"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout141() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">लोकप्रिय</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                माया पठाउने सबैभन्दा सजिलो बाटो
              </h2>
              <p className="md:text-md">
                जन्मदिनको केकदेखि सुनौलो गहनासम्म, हरेक अवसरको लागि उत्तम उपहार
                छान्नुहोस्। काठमाडौं उपत्यकाभित्र २४ घण्टामै ढोकामा डेलिभरी
                हुन्छ।
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="सबै हेर्नुहोस्" variant="secondary">
                  सबै हेर्नुहोस्
                </Button>
                <Button
                  title="अगाडि"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  अगाडि
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
