import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header62 } from "./components/Header62";
import { Layout308 } from "./components/Layout308";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "नेपाल बोल्छ | Live Nepali Radio Online",
  description:
    "नेपालका विभिन्न रेडियो स्टेशनहरू अनलाइन सुन्नुहोस् — हिमालदेखि तराईसम्म। Listen to live Nepali radio stations online from Himalayas to Terai.",
  keywords: [
    "nepali radio online",
    "नेपाल रेडियो",
    "nepal live radio",
    "listen nepal radio",
    "nepal FM radio online",
    "kathmandu radio live",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/radio/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header62 />
      <Layout308 />
      <Footer4 />
    </div>
  );
}

