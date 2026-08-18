import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Layout1 } from "./components/Layout1";
import { Layout308 } from "./components/Layout308";
import { Layout312 } from "./components/Layout312";
import { Testimonial3 } from "./components/Testimonial3";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "स्वास्थ्य सेवा | Health Services Nepal",
  description:
    "NMC-प्रमाणित डाक्टरहरूसँग प्रत्यक्ष परामर्श, स्वास्थ्य ट्र्याकिङ र औषधि रिमाइन्डर। Consult certified doctors, track health metrics and set medicine reminders.",
  keywords: [
    "nepal health app",
    "नेपाल स्वास्थ्य सेवा",
    "doctor consultation nepal",
    "online doctor nepal",
    "health tracking app",
    "medicine reminder nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/health/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Layout1 />
      <Layout308 />
      <Layout312 />
      <Testimonial3 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

