import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Layout513 } from "./components/Layout513";
import { Team6 } from "./components/Team6";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "आजको पञ्चाङ्ग | Nepali Panchang Today - Tithi, Nakshatra, Yoga",
  description:
    "आजको ग्रह, नक्षत्र, तिथि, योग, करण र चाडपर्वको पूरा विवरण। Today's complete panchang details — tithi, nakshatra, yoga, karan, sunrise, sunset and festivals.",
  keywords: [
    "nepali panchang today",
    "आजको पञ्चाङ्ग",
    "nepali tithi nakshatra",
    "panchang nepal",
    "today nepali calendar details",
    "nepali yoga karan",
    "nepali sunrise sunset",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/date/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Layout513 />
      <Team6 />
      <Footer4 />
    </div>
  );
}

