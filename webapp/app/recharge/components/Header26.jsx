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
                घरको माया, सेकेन्डमै रिचार्ज
              </h1>
              <p className="md:text-md">
                संसारको कुनै पनि कुनाबाट नेपालमा तुरुन्त मोबाइल रिचार्ज
                पठाउनुहोस्। छिटो, किफायती र पारदर्शी सेवा — Ncell, NTC र Smart
                Cell लाई सेकेन्डमै रिचार्ज गर्नुहोस्।
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="रिचार्ज गर्नुहोस्">रिचार्ज गर्नुहोस्</Button>
                <Button title="कसरी काम गर्छ" variant="secondary">
                  कसरी काम गर्छ
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/payment.jpg"
              className="size-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

