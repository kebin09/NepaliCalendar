import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Header26 } from "./components/Header26";
import { Blog64 } from "./components/Blog64";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "नेपाली समाचार | Nepali News Today",
  description:
    "नेपाल र संसारका ताजा खबरहरू नेपाली भाषामा पढ्नुहोस्। Read the latest Nepal and world news in Nepali — politics, sports, economy and entertainment.",
  keywords: [
    "नेपाली समाचार",
    "nepali news",
    "nepal news today",
    "नेपालको खबर",
    "latest news nepal",
    "nepal politics news",
    "nepal sports news",
  ],
  openGraph: {
    title: "नेपाली समाचार | Nepali News Today",
    description: "नेपाल र संसारका ताजा खबरहरू नेपाली भाषामा।",
  },
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/news/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Header26 />
      <Blog64 />
      <Footer4 />
    </div>
  );
}

