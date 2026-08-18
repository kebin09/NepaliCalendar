import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header46 } from "./components/Header46";
import { DateConverter } from "./components/DateConverter";
import { Layout25 } from "./components/Layout25";
import { Layout237 } from "./components/Layout237";
import { Layout216 } from "./components/Layout216";
import { Cta33 } from "./components/Cta33";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "नेपाली मिति रूपान्तरण | BS to AD Converter",
  description:
    "विक्रम संवत् लाई सन् र सन् लाई विक्रम संवत्मा रूपान्तरण गर्नुहोस्। Convert between Bikram Sambat (BS) and Gregorian (AD) dates instantly.",
  keywords: [
    "bs to ad converter",
    "nepali to english date",
    "ad to bs converter",
    "नेपाली मिति रूपान्तरण",
    "bikram sambat to gregorian",
    "date converter nepal",
    "nepali date converter",
    "विक्रम संवत् रूपान्तरण",
  ],
  openGraph: {
    title: "नेपाली मिति रूपान्तरण | BS to AD Converter",
    description:
      "विक्रम संवत् लाई सन् र सन् लाई विक्रम संवत्मा रूपान्तरण गर्नुहोस्।",
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/date-converter/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header46 />
      <DateConverter />
      <Layout25 />
      <Layout237 />
      <Layout216 />
      <Cta33 />
      <Footer4 />
    </div>
  );
}

