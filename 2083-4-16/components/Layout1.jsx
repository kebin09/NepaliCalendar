"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">पञ्चाङ्ग</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              आज साउन १६ को ग्रह र नक्षत्रको चाल
            </h1>
            <p className="md:text-md">
              आज तिथि एकादशी, नक्षत्र उत्तराषाढा, योग शुभ र करण बव रहेको छ।
              चन्द्रमा मकर राशिमा रहँदा सूर्योदय बिहान ५:२३ र सूर्यास्त साँझ
              ६:५७ बजे हुनेछ।
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="पूरा पञ्चाङ्ग" variant="secondary">
                पूरा पञ्चाङ्ग
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
