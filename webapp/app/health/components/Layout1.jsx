"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">परामर्श</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              विशेषज्ञ डाक्टर, तपाईंको कोठाबाट
            </h1>
            <p className="md:text-md">
              NMC दर्ता भएका अनुभवी डाक्टरहरूसँग भिडियो कल मार्फत सिधा कुरा
              गर्नुहोस्। लामो लाइन र यात्राको झन्झट बिर्सनुहोस्, गोपनीयता र
              सहजता नै अब तपाईंको स्वास्थ्य सेवाको आधार हो।
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="डाक्टर खोज्नुहोस्" variant="secondary">
                डाक्टर खोज्नुहोस्
              </Button>
              <Button
                title="थप जान्नुहोस्"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                थप जान्नुहोस्
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/health.jpg"
              className="w-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

