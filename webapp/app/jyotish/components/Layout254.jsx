"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaStar, FaShieldHalved, FaChartPie, FaClock } from "react-icons/fa6";

export function Layout254() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">विशेषताहरू</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              हाम्रो परामर्शलाई विश्वासिलो र अद्वितीय बनाउने पक्षहरू
            </h2>
            <p className="md:text-md">
              हामी केवल भविष्यवाणी गर्दैनौं। हामी तपाईंको जीवनका जटिल
              प्रश्नहरूको वैज्ञानिक र गोपनीय समाधान प्रदान गर्छौं।
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <FaStar className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                प्रमाणित र अनुभवी ज्योतिषी
              </h3>
              <p>
                वर्षौंको अनुभव भएका, पृष्ठभूमि जाँच गरिएका विशेषज्ञहरूसँग मात्र
                कुरा गर्नुहोस्। तपाईंको विश्वास हाम्रो प्राथमिकता हो।
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <FaShieldHalved className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                पूर्ण गोपनीय परामर्श
              </h3>
              <p>
                तपाईंको व्यक्तिगत जानकारी र कुराकानी सुरक्षित छ। यो एक सुरक्षित
                र निजी संवाद हो।
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="/images/monk.jpg"
              alt="नेपाली पात्रोको चित्र"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <FaChartPie className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                विस्तृत कुण्डली विश्लेषण
              </h3>
              <p>
                ग्रहहरूको स्थिति र तिनको प्रभावको गहिरो अध्ययन गरेर तपाईंको
                जीवनको नक्सा प्रस्तुत गरिन्छ।
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <FaClock className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                सटीक मुहूर्त सिफारिस
              </h3>
              <p>
                विवाह, यात्रा, वा नयाँ कामको सुरुवातका लागि सबैभन्दा शुभ समयको
                सटीक गणना पाउनुहोस्।
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">सबै सुविधा हेर्नुहोस्</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            परामर्श लिनुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}

