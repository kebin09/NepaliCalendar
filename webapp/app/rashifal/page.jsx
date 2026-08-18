import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { BlogPostHeader1 } from "./components/BlogPostHeader1";
import { DailyRashifal } from "./components/DailyRashifal";
import { Layout491 } from "./components/Layout491";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "आजको नेपाली राशिफल | Nepali Rashifal Today",
  description:
    "सबै १२ राशिको आजको राशिफल पढ्नुहोस्। Read today's Nepali horoscope for all zodiac signs with lucky number, color and day. मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या।",
  keywords: [
    "nepali rashifal",
    "नेपाली राशिफल",
    "nepali horoscope today",
    "आजको राशिफल",
    "daily rashifal nepal",
    "nepali jyotish",
    "rashifal 2083",
    "mesh rashifal",
    "rishabh rashifal",
  ],
  openGraph: {
    title: "आजको नेपाली राशिफल | Nepali Rashifal",
    description:
      "सबै १२ राशिको आजको राशिफल पढ्नुहोस्। Lucky number, color र day।",
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/rashifal/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <BlogPostHeader1 />
      <DailyRashifal />
      <Layout491 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

