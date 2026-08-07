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
                नेपालको पहिलो AI-संचालित पात्रो अब तपाईंको हातमा
              </h1>
              <p className="md:text-md">
                सम्पूर्ण चाडपर्व, पञ्चाङ्ग, मौसम, वित्त, र ज्योतिष एकै ठाउँमा।
                स्मार्ट रिमाइन्डर र अफलाइन सपोर्टसहितको सफा र तीव्र अनुभव।
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="डाउनलोड">डाउनलोड</Button>
                <Button title="अन्वेषण" variant="secondary">
                  अन्वेषण
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/himalaya.jpg"
              className="size-full object-cover"
              alt="नेपाली पात्रोको चित्र"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

