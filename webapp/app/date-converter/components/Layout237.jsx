"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaCalendarCheck, FaCalendarDay, FaArrowRightArrowLeft } from "react-icons/fa6";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">
              <span className="lang-ne">सरल</span>
              <span className="lang-en">Simple</span>
            </p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              <span className="lang-ne">तीन चरणमा मिति परिवर्तन गर्नुहोस्</span>
              <span className="lang-en">Convert Dates in Three Steps</span>
            </h2>
            <p className="md:text-md">
              <span className="lang-ne">
                हाम्रो मिति परिवर्तक उपकरण सकेसम्म सरल र प्रयोगकर्तामैत्री बनाइएको
                छ। यी तीन चरणहरू पालना गर्नुहोस् र तुरुन्तै सटिक नतिजा पाउनुहोस्।
              </span>
              <span className="lang-en">
                Our date converter tool is designed to be as simple and
                user-friendly as possible. Follow these three steps and get
                accurate results instantly.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaCalendarCheck className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                <span className="lang-ne">
                  पहिलो, स्रोत मिति प्रणाली चयन गर्नुहोस्
                </span>
                <span className="lang-en">First, select the source date system</span>
              </h3>
              <p>
                <span className="lang-ne">
                  तपाईंले रूपान्तरण गर्न चाहेको मिति प्रणाली, विक्रम संवत् वा
                  ग्रेगोरियन, छनोट गर्नुहोस्।
                </span>
                <span className="lang-en">
                  Choose the date system you want to convert from, Bikram Sambat
                  or Gregorian.
                </span>
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaCalendarDay className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                <span className="lang-ne">
                  दोस्रो, वर्ष, महिना, र गते इनपुट गर्नुहोस्
                </span>
                <span className="lang-en">Second, enter the year, month and day</span>
              </h3>
              <p>
                <span className="lang-ne">
                  सही वर्ष, महिना, र गते चयन गर्नको लागि सजिलो ड्रपडाउन मेनुको
                  प्रयोग गर्नुहोस्।
                </span>
                <span className="lang-en">
                  Use the easy dropdown menus to select the correct year, month
                  and day.
                </span>
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaArrowRightArrowLeft className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                <span className="lang-ne">
                  तेस्रो, तुरुन्तै परिवर्तित मिति र विवरण प्राप्त गर्नुहोस्
                </span>
                <span className="lang-en">
                  Third, get the converted date and details instantly
                </span>
              </h3>
              <p>
                <span className="lang-ne">
                  इनपुट गर्नासाथ परिवर्तित मिति, बार, र दिनको पूर्ण विवरण तपाईंको
                  स्क्रिनमा देखा पर्नेछ।
                </span>
                <span className="lang-en">
                  As soon as you input, the converted date, weekday and full
                  details of the day will appear on your screen.
                </span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">
              <span className="lang-ne">सुरु</span>
              <span className="lang-en">Start</span>
            </Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              <span className="lang-ne">सहायता</span>
              <span className="lang-en">Help</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
