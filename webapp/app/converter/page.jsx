import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header62 } from "./components/Header62";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "रूपान्तरण उपकरण | Conversion Tools Nepal",
  description:
    "मिति, युनिकोड, ध्वनि र संख्या रूपान्तरण उपकरणहरू। Easy conversion tools for dates, Unicode, phonetics and numbers.",
  keywords: [
    "nepali converter",
    "नेपाली रूपान्तरण",
    "unicode converter nepali",
    "date converter tool",
    "number converter nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/converter/",
  },
  robots: { index: false },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header62 />
      <Footer4 />
    </div>
  );
}

