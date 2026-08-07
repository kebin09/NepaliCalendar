"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">सरल</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              तीन चरणमा मिति परिवर्तन गर्नुहोस्
            </h2>
            <p className="md:text-md">
              हाम्रो मिति परिवर्तक उपकरण सकेसम्म सरल र प्रयोगकर्तामैत्री बनाइएको
              छ। यी तीन चरणहरू पालना गर्नुहोस् र तुरुन्तै सटिक नतिजा पाउनुहोस्।
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                पहिलो, स्रोत मिति प्रणाली चयन गर्नुहोस्
              </h3>
              <p>
                तपाईंले रूपान्तरण गर्न चाहेको मिति प्रणाली, विक्रम संवत् वा
                ग्रेगोरियन, छनोट गर्नुहोस्।
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                दोस्रो, वर्ष, महिना, र गते इनपुट गर्नुहोस्
              </h3>
              <p>
                सही वर्ष, महिना, र गते चयन गर्नको लागि सजिलो ड्रपडाउन मेनुको
                प्रयोग गर्नुहोस्।
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                तेस्रो, तुरुन्तै परिवर्तित मिति र विवरण प्राप्त गर्नुहोस्
              </h3>
              <p>
                इनपुट गर्नासाथ परिवर्तित मिति, बार, र दिनको पूर्ण विवरण तपाईंको
                स्क्रिनमा देखा पर्नेछ।
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">सुरु</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              सहायता
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
