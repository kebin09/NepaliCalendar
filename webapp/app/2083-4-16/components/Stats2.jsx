"use client";

import React from "react";

export function Stats2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              विश्व स्तनपान सप्ताह र आजको दिनका मुख्य तथ्यहरू
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              विश्व स्तनपान सप्ताह आज साउन १६ गतेदेखि सुरु भएको छ, जुन हरेक वर्ष
              अगस्ट १ देखि ७ सम्म मनाइन्छ। यो दिन नेपालमा पनि मातृशिशु
              स्वास्थ्यका लागि विशेष जागरूकता अभियानको रूपमा मनाइन्छ। आजको दिनमा
              अन्य कुनै ठूला राष्ट्रिय पर्व नभए पनि, साउन महिनाको हरियाली र
              धार्मिक महत्त्व कायमै छ।
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              ६ महिना
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              विशेष स्तनपानको सिफारिस अवधि
            </h3>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              ८.२ लाख
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              बचाउन सकिने वार्षिक शिशु जीवन
            </h3>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              ४४%
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              शिशुलाई जन्मेपछि पहिलो घण्टाभित्र स्तनपान गराउने आमाको अनुपात
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
