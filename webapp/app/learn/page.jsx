import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header62 } from "./components/Header62";
import { Header62_1 } from "./components/Header62_1";
import { Layout237 } from "./components/Layout237";
import { Layout491 } from "./components/Layout491";
import { Layout308 } from "./components/Layout308";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "शिक्षा | Free Educational Content Nepal",
  description:
    "नि:शुल्क भिडियो, अडियो र पाठ्य सामग्री — विद्यालय, कक्षा र विषय अनुसार फिल्टर गर्नुहोस्। Free videos, audio and text materials filtered by institution, class and subject.",
  keywords: [
    "nepal education free",
    "नेपाल शिक्षा",
    "free online classes nepal",
    "nepali study material",
    "nepal school videos",
    "nepal education app",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/learn/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header62 />
      <Header62_1 />
      <Layout237 />
      <Layout491 />
      <Layout308 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

