"use client";

import React from "react";
import { FaCalendarDay, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
  BS_MONTHS,
  AD_MONTHS,
  WEEKDAYS,
  daysInBsMonth,
  weekdayOfBsDate,
  bsToAd,
  adToBs,
  toDev,
} from "@/lib/nepaliDate.mjs";

function formatAdDate(ad) {
  return `${toDev(ad.day)} ${AD_MONTHS[ad.month - 1]} ${toDev(ad.year)}`;
}

export function CalendarGrid() {
  const todayAd = new Date();
  const todayBs = adToBs(
    todayAd.getFullYear(),
    todayAd.getMonth() + 1,
    todayAd.getDate(),
  );
  const [view, setView] = React.useState({
    year: todayBs ? todayBs.year : 2083,
    month: todayBs ? todayBs.month : 1,
  });

  const daysInMonth = daysInBsMonth(view.year, view.month);
  const firstWeekday = weekdayOfBsDate(view.year, view.month, 1);
  const isToday = (day) =>
    todayBs &&
    todayBs.year === view.year &&
    todayBs.month === view.month &&
    todayBs.day === day;

  const cells = [];
  for (let i = 0; i < firstWeekday; i += 1) {
    cells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push(d);
  }
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }
  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  const goPrev = () => {
    if (view.year === 2000 && view.month === 1) return;
    setView((v) =>
      v.month === 1 ? { year: v.year - 1, month: 12 } : { year: v.year, month: v.month - 1 },
    );
  };
  const goNext = () => {
    if (view.year === 2100 && view.month === 12) return;
    setView((v) =>
      v.month === 12 ? { year: v.year + 1, month: 1 } : { year: v.year, month: v.month + 1 },
    );
  };
  const goToday = () => {
    if (todayBs) setView({ year: todayBs.year, month: todayBs.month });
  };

  const monthStartAd = bsToAd(view.year, view.month, 1);
  const monthEndAd = bsToAd(view.year, view.month, daysInMonth);

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between gap-x-3 text-center">
        <button
          type="button"
          onClick={goPrev}
          aria-label="अघिल्लो महिना"
          className="rounded-md border border-border-primary px-3 py-2 text-neutral-700 transition-colors hover:bg-background-secondary"
        >
          <FaChevronLeft className="size-4" />
        </button>
        <div>
          <h3 className="flex items-center justify-center gap-x-2 text-2xl font-bold md:text-3xl">
            <FaCalendarDay className="size-5" />
            {BS_MONTHS[view.month - 1]} {toDev(view.year)}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            {formatAdDate(monthStartAd)} – {formatAdDate(monthEndAd)}
          </p>
        </div>
        <button
          type="button"
          onClick={goNext}
          aria-label="अर्को महिना"
          className="rounded-md border border-border-primary px-3 py-2 text-neutral-700 transition-colors hover:bg-background-secondary"
        >
          <FaChevronRight className="size-4" />
        </button>
      </div>
      <div className="mb-4 flex justify-center">
        <button
          type="button"
          onClick={goToday}
          className="rounded-md bg-background-secondary px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-200"
        >
          आजको महिना
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1.5 text-center md:gap-2">
        {WEEKDAYS.map((w, wi) => (
          <div
            key={w}
            className={`rounded-md py-2 text-xs font-semibold md:text-sm ${
              wi === 0 ? "bg-red-100 text-red-800" : wi === 6 ? "bg-blue-100 text-blue-800" : "bg-background-secondary"
            }`}
          >
            {w}
          </div>
        ))}
        {cells.map((d, i) => (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-md text-sm font-medium md:text-base ${
              d && isToday(d)
                ? "bg-red-700 text-white shadow"
                : d
                  ? "bg-background-secondary text-neutral-800"
                  : ""
            }`}
          >
            {d ? toDev(d) : ""}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-neutral-600">
        रातो संकेत आजको मिति हो · हाल साउन–भदौ २०८३
      </p>
    </div>
  );
}
