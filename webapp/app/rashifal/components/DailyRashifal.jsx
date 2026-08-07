"use client";

import React from "react";
import {
  adToBs,
  BS_MONTHS,
  AD_MONTHS,
  WEEKDAY_NAMES,
  toDev,
} from "@/lib/nepaliDate.mjs";
import { getDailyRashifal } from "@/lib/rashifalData.mjs";

export function DailyRashifal() {
  const today = new Date();
  const bs = adToBs(today.getFullYear(), today.getMonth() + 1, today.getDate());
  const predictions = bs
    ? getDailyRashifal(bs)
    : getDailyRashifal({ year: 2083, month: 1, day: 1 });

  const dateLine = bs
    ? `${BS_MONTHS[bs.month - 1]} ${toDev(bs.day)}, ${toDev(bs.year)} · ${
        WEEKDAY_NAMES[today.getDay()]
      } · ${toDev(today.getDate())} ${AD_MONTHS[today.getMonth()]} ${toDev(
        today.getFullYear(),
      )}`
    : "";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
          <p className="mb-3 font-semibold md:mb-4">हरेक दिन नयाँ</p>
          <h2 className="text-4xl font-bold md:text-6xl">आजको दैनिक राशिफल</h2>
          <p className="mt-3 md:mt-4">{dateLine}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {predictions.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-border-primary p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {p.sign}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-700">{p.text}</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border-primary pt-4 text-sm">
                <span>
                  <span className="font-semibold">भाग्याङ्क</span>{" "}
                  {toDev(p.luckyNumber)}
                </span>
                <span>
                  <span className="font-semibold">शुभरङ</span> {p.luckyColor}
                </span>
                <span>
                  <span className="font-semibold">शुभदिन</span> {p.luckyDay}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-neutral-600">
          यो राशिफल सामान्य ज्योतिषीय मार्गदर्शनका आधारमा तयार पारिएको हो र हरेक
          दिन आफैँ अद्यावधिक हुन्छ।
        </p>
      </div>
    </section>
  );
}
