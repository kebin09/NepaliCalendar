import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header46 } from "./components/Header46";
import { Stats13 } from "./components/Stats13";
import { Comparison1 } from "./components/Comparison1";
import { Layout13 } from "./components/Layout13";
import { Cta33 } from "./components/Cta33";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "आजको विनिमय दर | Nepal Exchange Rate NRB",
  description:
    "नेपाल राष्ट्र बैंकको आधिकारिक विनिमय दर — डलर, युरो, पाउण्डको खरिद र बिक्री मूल्य। NRB official foreign exchange rates for USD, EUR, GBP.",
  keywords: [
    "nepal exchange rate",
    "विनिमय दर",
    "NRB exchange rate",
    "nepal forex rate today",
    "dollar rate nepal",
    "डलरको भाउ",
    "euro rate nepal",
    "nepal rastra bank exchange rate",
  ],
  openGraph: {
    title: "आजको विनिमय दर | Nepal Exchange Rate",
    description:
      "नेपाल राष्ट्र बैंकको आधिकारिक विनिमय दर — डलर, युरो, पाउण्ड।",
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/forex/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header46 />
      <Stats13 />
      <Comparison1 />
      <Layout13 />
      <Cta33 />
      <Footer4 />
    </div>
  );
}

