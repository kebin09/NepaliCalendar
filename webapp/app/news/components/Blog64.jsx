"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog64() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:mb-20 lg:grid-cols-2 lg:gap-x-20">
          <div className="rb-12 flex flex-col md:items-end md:justify-between">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">समाचार</p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                आजका मुख्य समाचार
              </h1>
              <p className="md:text-md">
                देश र दुनियाँका भरपर्दो खबर, सधैं तपाईंको अगाडि।
              </p>
              <div className="mt-6 md:mt-8">
                <Button title="सबै हेर्नुहोस्" variant="secondary">
                  सबै हेर्नुहोस्
                </Button>
              </div>
            </div>
          </div>
          <div className="grid auto-cols-fr items-start gap-12 md:gap-y-16">
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden">
                <img
                  src="/images/news-1.jpg"
                  alt="नेपाली पात्रोको चित्र"
                  className="aspect-square size-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    राजनीति
                  </p>
                  <p className="inline text-sm font-semibold">भर्खरै</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="text-xl font-bold md:text-2xl">
                    संसद्मा नयाँ विधेयक पेश, तीव्र बहस जारी
                  </h3>
                </a>
                <p className="line-clamp-2">
                  सत्तापक्ष र विपक्षीबीच नयाँ संवैधानिक परिषद् सम्बन्धी विधेयकमा
                  गहिरो मतभेद देखिएको छ।
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    पूरा पढ्नुहोस्
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden">
                <img
                  src="/images/news-2.jpg"
                  alt="नेपाली पात्रोको चित्र"
                  className="aspect-square size-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    खेलकुद
                  </p>
                  <p className="inline text-sm font-semibold">२ घण्टा अघि</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="text-xl font-bold md:text-2xl">
                    विश्वकप छनोटमा नेपालको ऐतिहासिक जित
                  </h3>
                </a>
                <p className="line-clamp-2">
                  कप्तानको शानदार शतकको मद्दतले नेपालले पूर्ण अंक जोड्दै अंक
                  तालिकामा सुधार गरेको छ।
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    पूरा पढ्नुहोस्
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden">
                <img
                  src="/images/news-3.jpg"
                  alt="नेपाली पात्रोको चित्र"
                  className="aspect-square size-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    प्रविधि
                  </p>
                  <p className="inline text-sm font-semibold">४ घण्टा अघि</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="text-xl font-bold md:text-2xl">
                    नेपालमै पहिलो पटक एआई सम्मेलन सुरु
                  </h3>
                </a>
                <p className="line-clamp-2">
                  काठमाडौंमा आयोजित अन्तर्राष्ट्रिय सम्मेलनमा विश्वभरका
                  वैज्ञानिकहरूले कृत्रिम बुद्धिमताको भविष्यबारे छलफल गरे।
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    पूरा पढ्नुहोस्
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

