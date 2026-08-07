"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaGraduationCap, FaBookOpen, FaPlay } from "react-icons/fa6";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">प्रक्रिया</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              तीन सरल चरणमा सिकाइ केन्द्र प्रयोग गर्नुहोस्
            </h2>
            <p className="md:text-md">
              हामीले तपाईंको सिकाइलाई सरल बनाएका छौं। आफ्नो आवश्यकता छान्नुहोस्
              र तुरुन्तै सुरु गर्नुहोस्।
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaGraduationCap className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                आफ्नो संस्था र कक्षा छान्नुहोस्
              </h3>
              <p>सूचीबाट आफ्नो विद्यालय वा कलेज र पढ्ने कक्षा चयन गर्नुहोस्।</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaBookOpen className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                आफूलाई चाहिने विषय खोज्नुहोस्
              </h3>
              <p>
                गणित, विज्ञान वा अंग्रेजी, आफ्नो पाठ्यक्रमको विषय फेला
                पार्नुहोस्।
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaPlay className="size-12" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                तुरुन्तै सिक्न सुरु गर्नुहोस्
              </h3>
              <p>
                भिडियो हेर्नुहोस्, अडियो सुन्नुहोस् वा पाठ पढ्नुहोस् र ज्ञान
                आत्मसात गर्नुहोस्।
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">सबै पाठ हेर्नुहोस्</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              सहयोग
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
