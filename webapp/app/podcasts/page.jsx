import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Blog32 } from "./components/Blog32";
import { Footer4 } from "@/components/Footer4";
import podcastsData from "@/data/podcasts.json";

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Blog32 podcasts={podcastsData.podcasts} />
      <Footer4 />
    </div>
  );
}
