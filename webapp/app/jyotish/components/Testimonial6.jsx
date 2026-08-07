"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            ग्राहक अनुभव
          </h1>
          <p className="md:text-md">
            हामीप्रति राखिएको विश्वासको कथा। सटीक मार्गदर्शन पाएका मानिसहरूको
            वास्तविक शब्द।
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "आचार्य सुशीलले मेरो कुण्डली यति स्पष्टसँग बुझाउनुभयो कि
              जीवनप्रतिको मेरो दृष्टिकोण नै बदलियो। उहाँले बताएको उपायले करियरमा
              आएको अवरोध हट्यो।"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/portrait-1.jpg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">सन्देश गुरुङ</p>
                <p>सफ्टवेयर इन्जिनियर, पोखरा</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <span className="text-xl font-bold tracking-tight opacity-60">हाम्रो पे</span>
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "डा. अनिताको वास्तु सल्लाह अचम्मको थियो। उहाँले भन्नुभएको सानो
              परिवर्तनले घरको वातावरण नै शान्त र सकारात्मक भयो। सबैलाई सिफारिस
              गर्छु।"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/portrait-2.jpg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">सुनिता श्रेष्ठ</p>
                <p>गृहिणी, ललितपुर</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <span className="text-xl font-bold tracking-tight opacity-60">सगरमाथा एफएम</span>
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "विवाहको मुहूर्त निकाल्न पण्डित हरिसँग कुरा गरें। उहाँको गणित र
              स्पष्टीकरणले हाम्रो परिवारको चिन्ता हट्यो। एकदमै सही समयमा विवाह
              सम्पन्न भयो।"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/portrait-3.jpg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">राजन महर्जन</p>
                <p>व्यवसायी, काठमाडौं</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <span className="text-xl font-bold tracking-tight opacity-60">एनआरएन ट्रेड</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

