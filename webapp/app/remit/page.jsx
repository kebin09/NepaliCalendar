import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout239 } from "./components/Layout239";
import { Layout491 } from "./components/Layout491";
import { Pricing26 } from "./components/Pricing26";
import { Contact6 } from "./components/Contact6";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "नेपाल पैसा पठाउनुहोस् | Send Money to Nepal",
  description:
    "अमेरिका र अष्ट्रेलियाबाट नेपाल पैसा पठाउनुहोस् — प्रतिस्पर्धात्मक विनिमय दर र कम शुल्क। Send money to Nepal from USA and Australia with competitive rates.",
  keywords: [
    "send money to nepal",
    "नेपाल पैसा पठाउने",
    "remittance nepal",
    "money transfer nepal",
    "nepal remittance from usa",
    "australia to nepal money transfer",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/remit/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout239 />
      <Layout491 />
      <Pricing26 />
      <Contact6 />
      <Footer4 />
    </div>
  );
}

