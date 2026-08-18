import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "यो पृष्ठ चाँडै उपलब्ध हुनेछ | Coming Soon",
  description:
    "नयाँ सामग्री तयार गर्दै छौं। पात्रो, राशिफल र मिति रूपान्तरण पृष्ठहरू भ्रमण गर्नुहोस्।",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <main>
        <section className="flex min-h-[60vh] items-center px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-xl text-center">
            <p className="mb-3 font-semibold md:mb-4">नेपाली पात्रो</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              यो पृष्ठ चाँडै उपलब्ध हुनेछ
            </h1>
            <p className="md:text-md">
              हामी नयाँ सामग्री तयार गर्दै छौं। यसबीचमा पात्रो, राशिफल र मिति
              रूपान्तरण पृष्ठहरू भ्रमण गर्नुहोस्।
            </p>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
