import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout239 } from "./components/Layout239";
import { Layout254 } from "./components/Layout254";
import { Testimonial6 } from "./components/Testimonial6";
import { Pricing25 } from "./components/Pricing25";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "नेपाली ज्योतिष | Astrology Consultation Nepal",
  description:
    "नेपालका शीर्ष ज्योतिषीहरूसँग प्रत्यक्ष कुरा गर्नुहोस्। Talk directly with Nepal's top astrologers for horoscope analysis, vastu consultation and future predictions.",
  keywords: [
    "nepali jyotish",
    "नेपाली ज्योतिष",
    "nepal astrology",
    "horoscope nepal",
    "jyotishi nepal",
    "vastu consultant nepal",
    "nepal astrologer online",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/jyotish/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout239 />
      <Layout254 />
      <Testimonial6 />
      <Pricing25 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

