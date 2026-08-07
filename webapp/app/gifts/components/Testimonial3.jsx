"use client";

import React from "react";

export function Testimonial3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            साँचो भावना
          </h1>
          <p className="md:text-md">
            हामीले पुर्याएको खुसी तिनीहरूको शब्दमा सुन्नुहोस्
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <span className="text-xl font-bold tracking-tight opacity-60">हाम्रो पे</span>
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "मेरो आमाको अनुहारमा केक देखेर आएको चमकले सबै दूरी मेटिदियो। यो
              सेवा साँच्चिकै अमूल्य छ।"
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="/images/portrait-1.jpg"
                  alt="Testimonial avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">अनिता श्रेष्ठ</p>
              <p>सिड्नी, अस्ट्रेलिया</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <span className="text-xl font-bold tracking-tight opacity-60">सगरमाथा एफएम</span>
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "विवाहको वार्षिकोत्सवमा अर्डर गरेको फूलको गुच्छा ठ्याक्कै समयमा
              पुग्यो। श्रीमतीको आँखामा आँसु नै आयो। धेरै धेरै धन्यवाद।"
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="/images/portrait-2.jpg"
                  alt="Testimonial avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">रोहन गुरुङ</p>
              <p>लन्डन, युके</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <span className="text-xl font-bold tracking-tight opacity-60">एनआरएन ट्रेड</span>
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "तिहारमा पठाएको मिठाईको ह्याम्परले घरको रौनक नै फर्काइदियो।
              प्याकिङ र डेलिभरी दुवै उत्कृष्ट थियो।"
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="/images/portrait-3.jpg"
                  alt="Testimonial avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">सरिता पाण्डे</p>
              <p>न्यूयोर्क, अमेरिका</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

