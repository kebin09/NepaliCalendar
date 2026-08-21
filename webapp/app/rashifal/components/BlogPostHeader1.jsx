"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import React from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { adToBs, BS_MONTHS, toDev } from "@/lib/nepaliDate.mjs";

export function BlogPostHeader1() {
  const today = new Date();
  const bs = adToBs(today.getFullYear(), today.getMonth() + 1, today.getDate());
  const dateStr = bs
    ? `${BS_MONTHS[bs.month - 1]} ${toDev(bs.day)}, ${toDev(bs.year)}`
    : "";
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
          <Breadcrumb className="mb-6 flex w-full items-center">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <span className="lang-ne">राशिफल</span>
                  <span className="lang-en">Rashifal</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <span className="lang-ne">दैनिक</span>
                  <span className="lang-en">Daily</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
            {dateStr}{" "}
            <span className="lang-ne">को दैनिक राशिफल सबै १२ राशिहरूको लागि</span>
            <span className="lang-en">Daily Rashifal for All 12 Zodiac Signs</span>
          </h1>
          <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
            <div className="rb-4 mb-4 flex items-center sm:mb-0">
              <div className="mr-4 shrink-0">
                <img
                  src="/images/stars.jpg"
                  alt="ज्योतिषीको चित्र"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="font-semibold">
                  <span className="lang-ne">हाम्रो पात्रो</span>
                  <span className="lang-en">Our Patro</span>
                </h6>
                <div className="mt-1 flex">
                  <p className="text-sm">{dateStr}</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">
                    <span className="lang-ne">८ मिनेट</span>
                    <span className="lang-en">8 min read</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="rt-4 mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLinkAlt className="size-6" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLogoFacebookCircle className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full overflow-hidden">
          <img
            src="/images/stars.jpg"
            className="aspect-[2] size-full object-cover"
            alt="नेपाली पात्रोको चित्र"
          />
        </div>
      </div>
    </section>
  );
}

