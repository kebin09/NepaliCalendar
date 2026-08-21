import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout239 } from "./components/Layout239";
import { Layout89 } from "./components/Layout89";
import { Layout419 } from "./components/Layout419";
import { Layout502 } from "./components/Layout502";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "Nepali Calendar | नेपाली पात्रो - पात्रो, राशिफल, मौसम",
  description:
    "नेपालको पहिलो AI-संचालित पात्रो। चाडपर्व, पञ्चाङ्ग, मौसम, वित्त, र ज्योतिष एकै ठाउँमा। Nepal's first AI-powered calendar with festivals, panchang, weather, finance and astrology.",
  keywords: [
    "nepali calendar app",
    "नेपाली पात्रो एप",
    "nepali patro app",
    "AI calendar nepal",
    "nepal calendar features",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/home/",
  },
  robots: { index: false },
};

export default function Page() {
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

