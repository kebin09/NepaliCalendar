"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">पोषण</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              जीवनको पहिलो खोप, अमूल्य उपहार
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              हरेक वर्ष अगस्ट १ देखि ७ सम्म मनाइने यो सप्ताहले आमाको दूधको
              महत्त्वलाई विश्वव्यापी रूपमा उजागर गर्छ। यो अभियान सन् १९९० मा
              इनोचेन्टी घोषणापत्रबाट सुरु भई शिशु मृत्युदर घटाउन र मातृ
              स्वास्थ्य सुधार्न प्रतिबद्ध छ।
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>रोग प्रतिरोधात्मक क्षमताको पहिलो ढाल</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>आमा र शिशुबीचको अटुट भावनात्मक बन्धन</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>कुपोषण रोक्न प्रकृतिको सबैभन्दा सशक्त उपाय</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="थप जानकारी" variant="secondary">
                थप जानकारी
              </Button>
              <Button
                title="साझा"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                साझा
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
