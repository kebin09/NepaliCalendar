import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./home/components/Header26";
import { Layout239 } from "./home/components/Layout239";
import { Layout89 } from "./home/components/Layout89";
import { Layout419 } from "./home/components/Layout419";
import { Layout502 } from "./home/components/Layout502";
import { Cta25 } from "./home/components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "Nepali Calendar 2083 | नेपाली पात्रो - Today's Date, Tithi & Festivals",
  description:
    "Check today's Nepali (Bikram Sambat) date, tithi, nakshatra, festivals, rashifal, gold price, forex rates and date converter. नेपाली पात्रो २०८३ — आजको मिति, चाडपर्व र पञ्चाङ्ग एकै ठाउँमा।",
  keywords: [
    "nepali calendar",
    "nepali patro",
    "nepali date today",
    "नेपाली पात्रो",
    "आजको मिति",
    "nepali calendar 2083",
    "bikram sambat calendar",
    "nepali panchang",
  ],
  openGraph: {
    title: "Nepali Calendar 2083 | नेपाली पात्रो",
    description:
      "Today's Nepali date, tithi, festivals, rashifal, gold price & forex rates. आजको मिति र चाडपर्व।",
    url: "https://nepalicalendar.kebinmaharjan.com.np/",
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/",
  },
};

export default function Home() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout239 />
      <Layout89 />
      <Layout419 />
      <Layout502 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}
