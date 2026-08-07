import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

const features = [
  {
    title: "Nepali Calendar",
    description:
      "Check today's date in both Bikram Sambat and the Gregorian calendar, with tithi and festival details.",
  },
  {
    title: "Daily Horoscope",
    description:
      "Read your daily, weekly and yearly rashifal based on planetary positions and nakshatra.",
  },
  {
    title: "Date Converter",
    description:
      "Convert any Gregorian date to Vikram Sambat and Nepali tithi with a single click.",
  },
];

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold md:mb-4">Nepali Calendar</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Your complete Nepali date, panchang and festival companion
            </h1>
            <p className="md:text-md">
              From today's tithi to upcoming festivals, horoscopes and a full
              date converter — everything you need in one place.
            </p>
          </div>
        </section>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-lg bg-background-secondary p-6"
                >
                  <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
