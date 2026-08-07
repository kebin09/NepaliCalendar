"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">
                प्रक्रिया
              </p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                चार सरल चरणमा भुक्तानी पूरा गर्नुहोस्
              </h2>
              <p className="text-center md:text-md">
                हामीले भुक्तानीलाई यति सहज बनाएका छौं कि यो एक सास फेर्नु
                जत्तिकै सरल छ। तपाईंलाई केवल चार चरणको आवश्यकता पर्छ।
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                सेवा चयन गर्नुहोस्
              </h3>
              <p className="text-center">
                बिजुली, इन्टरनेट, वा रिचार्ज जस्ता आफूलाई चाहिने सेवा सूचीबाट
                छान्नुहोस्।
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                विवरणहरू भर्नुहोस्
              </h3>
              <p className="text-center">
                ग्राहक आइडी वा फोन नम्बर जस्ता आवश्यक जानकारी सही रूपमा प्रविष्ट
                गर्नुहोस्।
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                भुक्तानी पुष्टि गर्नुहोस्
              </h3>
              <p className="text-center">
                आफ्नो मनपर्ने विधि छान्नुहोस् र एक क्लिकले सुरक्षित रूपमा
                भुक्तानी पुष्टि गर्नुहोस्।
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                तुरुन्त रसिद पाउनुहोस्
              </h3>
              <p className="text-center">
                भुक्तानी सफल हुनेबित्तिकै डिजिटल रसिद तपाईंको एपमा सुरक्षित
                हुन्छ।
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="सेवाहरू" variant="secondary">
              सेवाहरू
            </Button>
            <Button
              title="सुरु"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              सुरु
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
