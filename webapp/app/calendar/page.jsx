import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";
import { CalendarGrid } from "./components/CalendarGrid";
import { TodayInfo } from "./components/TodayInfo";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">नेपाली पात्रो</p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                आजको मिति, तिथि र पर्व एकै ठाउँमा
              </h1>
              <p className="md:text-md">
                विक्रम संवत् र सन् दुवैमा आजको मिति हेर्नुहोस्, राशिफल पढ्नुहोस्
                र आगामी चाडपर्वका बारेमा जानकारी पाउनुहोस्।
              </p>
            </div>
            <div className="rounded-lg border border-border-primary p-6 md:p-8">
              <CalendarGrid />
            </div>
          </div>
        </section>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
              <p className="mb-3 font-semibold md:mb-4">आजको पञ्चाङ्ग</p>
              <h2 className="text-4xl font-bold md:text-6xl">
                आजको दिनको पूरा विवरण
              </h2>
              <p className="mt-3 md:mt-4">
                मिति, महिना र आगामी पर्वका बारेमा जानकारी हरेक दिन आफैँ
                अद्यावधिक हुन्छ।
              </p>
            </div>
            <TodayInfo />
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
