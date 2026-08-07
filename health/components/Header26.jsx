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
                तपाईंको स्वास्थ्य, अब तपाईंको हातमा
              </h1>
              <p className="md:text-md">
                NMC-प्रमाणित डाक्टरहरूसँग सिधा कुरा गर्नुहोस्। आफ्नो शरीरको हरेक
                संकेत ट्रयाक गर्नुहोस् र औषधि कहिल्यै नबिर्सनुहोस्।
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="परामर्श">परामर्श</Button>
                <Button title="ट्रयाक" variant="secondary">
                  ट्रयाक
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
