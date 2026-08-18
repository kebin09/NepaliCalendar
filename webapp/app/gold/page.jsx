import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout22 } from "./components/Layout22";
import { Layout213 } from "./components/Layout213";
import { Layout145 } from "./components/Layout145";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "आजको सुन र चाँदीको मूल्य नेपाल | Gold & Silver Price Nepal",
  description:
    "नेपालमा आजको सुन र चाँदीको भाउ प्रति तोला र प्रति १० ग्राम। Today's gold and silver price in Nepal per tola and per 10 grams.",
  keywords: [
    "gold price nepal",
    "सुनको भाउ",
    "nepal gold rate today",
    "silver price nepal",
    "चाँदीको भाउ",
    "nepal tola gold price",
    "gold price today kathmandu",
    "नेपाल सुन चाँदी मूल्य",
  ],
  openGraph: {
    title: "आजको सुन र चाँदीको मूल्य नेपाल",
    description:
      "नेपालमा आजको सुन र चाँदीको भाउ प्रति तोला र प्रति १० ग्राम।",
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/gold/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout22 />
      <Layout213 />
      <Layout145 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

