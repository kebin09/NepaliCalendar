import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header62 } from "./components/Header62";
import { Layout141 } from "./components/Layout141";
import { Layout239 } from "./components/Layout239";
import { Testimonial3 } from "./components/Testimonial3";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "उपहार पठाउनुहोस् नेपाल | Send Gifts to Nepal",
  description:
    "काठमाडौं उपत्यकाभित्र २४ घण्टामा केक, फूल र ह्याम्पर पठाउनुहोस्। Send cakes, flowers and hampers within 24 hours in Kathmandu Valley.",
  keywords: [
    "send gifts to nepal",
    "नेपाल उपहार पठाउने",
    "gift delivery kathmandu",
    "cake delivery nepal",
    "flowers delivery nepal",
    "nepal gift shop online",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/gifts/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header62 />
      <Layout141 />
      <Layout239 />
      <Testimonial3 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

