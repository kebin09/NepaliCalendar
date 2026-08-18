import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout239 } from "./components/Layout239";
import { Comparison7 } from "./components/Comparison7";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "मोबाइल रिचार्ज नेपाल | Mobile Recharge Nepal",
  description:
    "Ncell, NTC र Smart Cell मोबाइल रिचार्ज — विश्वभरबाट सेकेन्डमै। Instantly recharge Ncell, NTC and Smart Cell mobile phones from anywhere in the world.",
  keywords: [
    "nepal mobile recharge",
    "नेपाल मोबाइल रिचार्ज",
    "ncell recharge online",
    "ntc recharge nepal",
    "smart cell recharge",
    "recharge nepal from abroad",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/recharge/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout239 />
      <Comparison7 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

