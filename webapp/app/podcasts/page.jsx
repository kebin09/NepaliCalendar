import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Blog32 } from "./components/Blog32";
import { Footer4 } from "@/components/Footer4";
import podcastsData from "@/data/podcasts.json";

export const metadata = {
  title: "नेपाली पोडकास्ट | Nepali Podcasts Free",
  description:
    "नेपाली पोडकास्टहरू नि:शुल्क सुन्नुहोस् — समाचार, कथा, साक्षात्कार र संस्कृति। Listen to free Nepali podcasts on news, stories, interviews and culture.",
  keywords: [
    "nepali podcast",
    "नेपाली पोडकास्ट",
    "nepal podcast free",
    "nepali audio stories",
    "nepal radio podcast",
    "nepali interview podcast",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/podcasts/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Blog32 podcasts={podcastsData.podcasts} />
      <Footer4 />
    </div>
  );
}
