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
            <p className="mb-3 font-semibold md:mb-4">ट्रयाक</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              शरीरको हरेक संकेत, एउटै ठाउँमा
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              तपाईंको स्वास्थ्यको पूरा विवरण राख्नु अब सजिलो छ। रगतको चिनीदेखि
              पानी पिउने बानीसम्म, हरेक कुरा यहाँ लग गर्नुहोस्। यी उपकरणहरूले
              तपाईंलाई आफ्नो शरीरको ढाँचा बुझ्न र राम्रो निर्णय लिन मद्दत
              गर्छन्।
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
              रक्त शर्करा र प्रेसरको सटिक लग
            </h3>
            <p>
              दैनिक पढाइ रेकर्ड गर्नुहोस् र समयसँगै आफ्नो प्रगतिको स्पष्ट ग्राफ
              हेर्नुहोस्।
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
              महिनावारी र गर्भावस्थाको पूर्ण ट्रयाकिङ
            </h3>
            <p>
              चक्रको भविष्यवाणी गर्नुहोस्, उर्वर दिनहरू जान्नुहोस्, र
              गर्भावस्थाको हरेक साताको विकास बुझ्नुहोस्।
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
              औषधि र पानीको कहिल्यै नबिर्सिने स्मारक
            </h3>
            <p>
              समयमै सूचना पाउनुहोस् र आफ्नो दैनिक स्वास्थ्य लक्ष्य सजिलै पूरा
              गर्नुहोस्।
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
              BMI क्याल्कुलेटर र शारीरिक विश्लेषण
            </h3>
            <p>
              आफ्नो तौल र उचाइको अनुपात थाहा पाउनुहोस् र आफ्नो आदर्श स्वास्थ्य
              दायरा बुझ्नुहोस्।
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="सबै उपकरण" variant="secondary">
            सबै उपकरण
          </Button>
          <Button
            title="सुरु गर्नुहोस्"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            सुरु गर्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
