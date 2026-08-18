import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout19 } from "./components/Layout19";
import { Layout1 } from "./components/Layout1";
import { Stats2 } from "./components/Stats2";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "साउन १६, २०८३ - विश्व स्तनपान सप्ताह | Nepali Date Event",
  description:
    "विक्रम संवत् २०८३ साउन १६ — विश्व स्तनपान सप्ताह प्रारम्भ। Details about World Breastfeeding Week in Nepali calendar.",
  keywords: [
    "saun 16 2083",
    "साउन १६ २०८३",
    "world breastfeeding week nepal",
    "nepali date event",
    "2083-4-16",
  ],
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/2083-4-16/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout19 />
      <Layout1 />
      <Stats2 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

