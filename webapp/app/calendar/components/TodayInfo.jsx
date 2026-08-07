"use client";

import React from "react";
import {
  adToBs,
  BS_MONTHS,
  AD_MONTHS,
  WEEKDAY_NAMES,
  daysInBsMonth,
  bsToAd,
  toDev,
} from "@/lib/nepaliDate.mjs";

const FESTIVALS = [
  { name: "नागपञ्चमी", month: 4, day: 5 },
  { name: "तीज (हरितालिका)", month: 5, day: 2 },
  { name: "गणेश चतुर्थी", month: 5, day: 4 },
  { name: "कृष्ण जन्माष्टमी", month: 5, day: 16 },
  { name: "इन्द्रजात्रा", month: 5, day: 25 },
  { name: "दसैं (विजया दशमी)", month: 6, day: 22 },
  { name: "तिहार (लक्ष्मी पूजा)", month: 7, day: 13 },
  { name: "छठ", month: 7, day: 22 },
  { name: "बालाचतुर्दशी", month: 8, day: 15 },
  { name: "माघे संक्रान्ति", month: 10, day: 1 },
  { name: "शिवरात्रि", month: 11, day: 1 },
  { name: "होली", month: 11, day: 15 },
];

function dayOfYear(bsYear, bsMonth, bsDay) {
  let doy = bsDay;
  for (let m = 1; m < bsMonth; m += 1) {
    doy += daysInBsMonth(bsYear, m);
  }
  return doy;
}

function totalDaysInYear(bsYear) {
  let total = 0;
  for (let m = 1; m <= 12; m += 1) {
    total += daysInBsMonth(bsYear, m);
  }
  return total;
}

function findNextFestival(bsYear, bsMonth, bsDay) {
  const todayDoy = dayOfYear(bsYear, bsMonth, bsDay);
  let next = null;
  for (const f of FESTIVALS) {
    const fDoy = dayOfYear(bsYear, f.month, f.day);
    if (fDoy > todayDoy) {
      const delta = fDoy - todayDoy;
      if (!next || delta < next.delta) {
        next = { festival: f, delta, year: bsYear };
      }
    }
  }
  if (!next) {
    const first = FESTIVALS.reduce((a, b) =>
      dayOfYear(bsYear, a.month, a.day) < dayOfYear(bsYear, b.month, b.day) ? a : b,
    );
    next = {
      festival: first,
      delta: totalDaysInYear(bsYear) - todayDoy + dayOfYear(bsYear, first.month, first.day),
      year: bsYear + 1,
    };
  }
  return next;
}

export function TodayInfo() {
  const today = new Date();
  const bs = adToBs(today.getFullYear(), today.getMonth() + 1, today.getDate());
  if (!bs) return null;

  const daysInMonth = daysInBsMonth(bs.year, bs.month);
  const daysLeft = daysInMonth - bs.day;
  const next = findNextFestival(bs.year, bs.month, bs.day);
  const nextAd = bsToAd(next.year, next.festival.month, next.festival.day);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-lg bg-background-secondary p-6">
        <h3 className="mb-3 text-lg font-bold">आजको मिति</h3>
        <p className="text-2xl font-bold">
          {BS_MONTHS[bs.month - 1]} {toDev(bs.day)}, {toDev(bs.year)}
        </p>
        <p className="mt-2">
          {WEEKDAY_NAMES[today.getDay()]} · {toDev(today.getDate())}{" "}
          {AD_MONTHS[today.getMonth()]} {toDev(today.getFullYear())}
        </p>
      </div>
      <div className="rounded-lg bg-background-secondary p-6">
        <h3 className="mb-3 text-lg font-bold">यो महिना</h3>
        <p className="text-2xl font-bold">
          {toDev(bs.day)} / {toDev(daysInMonth)}
        </p>
        <p className="mt-2">
          {BS_MONTHS[bs.month - 1]} महिनाको {toDev(bs.day)} औँ दिन · महिना सकिन{" "}
          {toDev(daysLeft)} दिन बाँकी
        </p>
      </div>
      <div className="rounded-lg bg-background-secondary p-6">
        <h3 className="mb-3 text-lg font-bold">आगामी पर्व</h3>
        <p className="text-2xl font-bold">
          {next.festival.name} <span className="text-base font-semibold">({toDev(next.delta)} दिन)</span>
        </p>
        <p className="mt-2">
          {BS_MONTHS[next.festival.month - 1]} {toDev(next.festival.day)},{" "}
          {toDev(next.year)}
          {nextAd ? ` · ${toDev(nextAd.day)} ${AD_MONTHS[nextAd.month - 1]} ${toDev(nextAd.year)}` : ""}
        </p>
      </div>
    </div>
  );
}
