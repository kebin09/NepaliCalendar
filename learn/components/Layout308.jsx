"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout308() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">विशेषताहरू</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              तपाईंको सिकाइलाई शक्तिशाली बनाउने उपकरणहरू
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              पाठ हेर्नु मात्र पर्याप्त छैन। हामी तपाईंलाई बुझ्न, सम्झन र अगाडि
              बढ्न मद्दत गर्ने सुविधाहरू दिन्छौं। यी उपकरणहरूले तपाईंको मेहनतलाई
              सफलतामा बदल्नेछन्।
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              अफलाइन पाठ डाउनलोड गर्नुहोस्
            </h3>
            <p>
              इन्टरनेट नभएको बेला पनि पढाइ रोकिनु हुँदैन। पाठहरू डाउनलोड
              गर्नुहोस् र जहाँ गए पनि आफ्नो किताब साथमै राख्नुहोस्।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              आफ्नो प्रगति ट्र्याक गर्नुहोस्
            </h3>
            <p>
              तपाईं कति अगाडि बढ्नुभयो, स्पष्ट देख्नुहोस्। पूरा भएका पाठहरूको लग
              राख्नुहोस् र आफैलाई चुनौती दिनुहोस्।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              महत्त्वपूर्ण पाठ बुकमार्क गर्नुहोस्
            </h3>
            <p>
              परीक्षाको बेला खोजी गर्नु पर्दैन। एउटा ट्यापले आफ्ना मुख्य पाठहरू
              सङ्कलन गर्नुहोस् र छिटो दोहोर्याउनुहोस्।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              आफ्नै नोट्स राख्ने सुविधा
            </h3>
            <p>
              पाठ पढ्दै गर्दा आफ्ना विचार र बुँदाहरू टिप्नुहोस्। यो तपाईंको
              डिजिटल कापी हो, जहिले पनि साथमा हुन्छ।
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="हेर्नुहोस्" variant="secondary">
            हेर्नुहोस्
          </Button>
          <Button
            title="सबै"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            सबै
          </Button>
        </div>
      </div>
    </section>
  );
}
