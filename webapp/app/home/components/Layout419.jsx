"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout419() {
  return (
    <section id="relume" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">सहायक</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  तपाईंको दैनिकीको मौन र भरपर्दो साथी
                </h2>
                <p className="md:text-md">
                  मौसमको पूर्वानुमानदेखि सुनचाँदीको भाउसम्म, सबै लाइभ अपडेट
                  तपाईंको हातमा। व्यक्तिगत वित्त र योजनाका लागि चाहिने हरेक
                  उपकरण यहीँ छ।
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="उपकरण हेर्नुहोस्" variant="secondary">
                    उपकरण हेर्नुहोस्
                  </Button>
                  <Button
                    title="सबै सेवा"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    सबै सेवा
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/calendar.jpg"
                  alt="नेपाली पात्रोको चित्र"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                मौसम
              </h3>
              <p>
                आज पानी पर्छ कि पर्दैन, हावाको गति कस्तो छ। आफ्नो ठाउँको सटीक
                पूर्वानुमान हेर्नुहोस्।
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/festival.jpg"
                  alt="नेपाली पात्रोको चित्र"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                मौसम
              </h3>
              <p>
                आज पानी पर्छ कि पर्दैन, हावाको गति कस्तो छ। आफ्नो ठाउँको सटीक
                पूर्वानुमान हेर्नुहोस्।
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/sunrise.jpg"
                  alt="नेपाली पात्रोको चित्र"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                मौसम
              </h3>
              <p>
                आज पानी पर्छ कि पर्दैन, हावाको गति कस्तो छ। आफ्नो ठाउँको सटीक
                पूर्वानुमान हेर्नुहोस्।
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/temple.jpg"
                  alt="नेपाली पात्रोको चित्र"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                मौसम
              </h3>
              <p>
                आज पानी पर्छ कि पर्दैन, हावाको गति कस्तो छ। आफ्नो ठाउँको सटीक
                पूर्वानुमान हेर्नुहोस्।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

