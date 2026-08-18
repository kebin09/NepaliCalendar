import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout308 } from "./components/Layout308";
import { Layout298 } from "./components/Layout298";
import { Layout514 } from "./components/Layout514";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "भुक्तानी सेवा | Bill Payment Nepal",
  description:
    "बिजुली, इन्टरनेट, TV र मोबाइल बिल तिर्नुहोस्, रकम लोड गर्नुहोस् र समूह खर्च बाँड्नुहोस्। Pay electricity, internet, TV and mobile bills; load wallet; split expenses.",
  keywords: [
    "nepal bill payment",
    "नेपाल बिल तिर्ने",
    "electricity bill nepal",
    "internet bill payment nepal",
    "mobile wallet nepal",
    "expense splitter nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/pay/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout308 />
      <Layout298 />
      <Layout514 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

