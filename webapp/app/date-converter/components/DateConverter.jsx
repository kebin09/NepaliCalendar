"use client";

import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import {
  BS_MONTHS,
  AD_MONTHS,
  BS_MIN_YEAR,
  BS_MAX_YEAR,
  daysInBsMonth,
  bsToAd,
  adToBs,
  toDev,
} from "@/lib/nepaliDate.mjs";

const WEEKDAY_NAMES = [
  "आइतबार",
  "सोमबार",
  "मंगलबार",
  "बुधबार",
  "बिहीबार",
  "शुक्रबार",
  "शनिबार",
];

function weekdayName(date) {
  return WEEKDAY_NAMES[date.getDay()];
}

function parseDateInput(value) {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function formatAdResult(ad) {
  return `${toDev(ad.day)} ${AD_MONTHS[ad.month - 1]} ${toDev(ad.year)}`;
}

function formatBsResult(bs) {
  return `${toDev(bs.day)} ${BS_MONTHS[bs.month - 1]} ${toDev(bs.year)}`;
}

export function DateConverter() {
  const today = new Date();
  const todayBs = adToBs(today.getFullYear(), today.getMonth() + 1, today.getDate());

  const [adInput, setAdInput] = React.useState(() => {
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${today.getFullYear()}-${mm}-${dd}`;
  });

  const [bsYear, setBsYear] = React.useState(todayBs ? todayBs.year : 2083);
  const [bsMonth, setBsMonth] = React.useState(todayBs ? todayBs.month : 1);
  const [bsDay, setBsDay] = React.useState(todayBs ? todayBs.day : 1);

  const adDate = parseDateInput(adInput);
  const adToBsResult = adDate ? adToBs(adDate.getFullYear(), adDate.getMonth() + 1, adDate.getDate()) : null;

  const bsMaxDay = daysInBsMonth(bsYear, bsMonth);
  const safeBsDay = Math.min(bsDay, bsMaxDay);
  const bsToAdResult = bsToAd(bsYear, bsMonth, safeBsDay);

  const inputCls =
    "w-full rounded-md border border-border-primary bg-white px-3 py-2 text-neutral-900 focus:border-neutral-500 focus:outline-none";
  const labelCls = "mb-2 block text-sm font-semibold text-neutral-700";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="mx-auto mb-10 max-w-lg text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-x-2 text-lg font-semibold">
            <FaArrowRightArrowLeft className="size-5" />
            दुईतर्फी रूपान्तरण
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            एकै ठाउँमा सन् र विक्रम संवत्
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border-primary p-6 md:p-8">
            <h3 className="mb-1 text-xl font-bold">सन् → विक्रम संवत्</h3>
            <p className="mb-5 text-sm text-neutral-600">
              ग्रेगोरियन मिति छान्नुहोस्, बराबरको नेपाली मिति तुरुन्तै देखिन्छ।
            </p>
            <label htmlFor="ad-date" className={labelCls}>
              ग्रेगोरियन मिति (सन्)
            </label>
            <input
              id="ad-date"
              type="date"
              className={inputCls}
              value={adInput}
              onChange={(e) => setAdInput(e.target.value)}
            />
            <div className="mt-5 rounded-md bg-background-secondary p-5">
              {adToBsResult ? (
                <>
                  <p className="text-sm text-neutral-600">नेपाली मिति</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatBsResult(adToBsResult)}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {weekdayName(adDate)} · {toDev(adDate.getFullYear())} साल
                  </p>
                </>
              ) : (
                <p className="text-sm text-red-700">
                  कृपया सन् १९४३ देखि २०४३ बीचको मिति छान्नुहोस्।
                </p>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border-primary p-6 md:p-8">
            <h3 className="mb-1 text-xl font-bold">विक्रम संवत् → सन्</h3>
            <p className="mb-5 text-sm text-neutral-600">
              नेपाली मिति छान्नुहोस्, बराबरको ग्रेगोरियन मिति तुरुन्तै देखिन्छ।
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="bs-year" className={labelCls}>
                  वर्ष
                </label>
                <select
                  id="bs-year"
                  className={inputCls}
                  value={bsYear}
                  onChange={(e) => setBsYear(Number(e.target.value))}
                >
                  {Array.from(
                    { length: BS_MAX_YEAR - BS_MIN_YEAR + 1 },
                    (_, i) => BS_MIN_YEAR + i,
                  ).map((y) => (
                    <option key={y} value={y}>
                      {toDev(y)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bs-month" className={labelCls}>
                  महिना
                </label>
                <select
                  id="bs-month"
                  className={inputCls}
                  value={bsMonth}
                  onChange={(e) => setBsMonth(Number(e.target.value))}
                >
                  {BS_MONTHS.map((m, i) => (
                    <option key={m} value={i + 1}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bs-day" className={labelCls}>
                  मिति
                </label>
                <select
                  id="bs-day"
                  className={inputCls}
                  value={safeBsDay}
                  onChange={(e) => setBsDay(Number(e.target.value))}
                >
                  {Array.from({ length: bsMaxDay }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>
                      {toDev(d)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5 rounded-md bg-background-secondary p-5">
              {bsToAdResult ? (
                <>
                  <p className="text-sm text-neutral-600">ग्रेगोरियन मिति</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatAdResult(bsToAdResult)}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {weekdayName(
                      new Date(
                        bsToAdResult.year,
                        bsToAdResult.month - 1,
                        bsToAdResult.day,
                      ),
                    )}
                  </p>
                </>
              ) : (
                <p className="text-sm text-red-700">मान्य मिति छैन।</p>
              )}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-600">
          रूपान्तरण विक्रम संवत् २०००–२१०० (सन् १९४३–२०४३) सम्म मान्य छ।
        </p>
      </div>
    </section>
  );
}
