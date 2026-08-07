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
                नेपालका शीर्ष ज्योतिषीहरूसँग प्रत्यक्ष कुरा गर्नुहोस्
              </h1>
              <p className="md:text-md">
                सटीक भविष्यवाणी र कुण्डली विश्लेषणका लागि विश्वासिला वास्तु
                विशेषज्ञहरूसँग अडियो वा भिडियो कलमा जोडिनुहोस्। तपाईंको जीवनका
                प्रश्नहरूको उत्तर पाउनुहोस्।
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="परामर्श लिनुहोस्">परामर्श लिनुहोस्</Button>
                <Button title="थप जान्नुहोस्" variant="secondary">
                  थप जान्नुहोस्
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/stars.jpg"
              className="size-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

