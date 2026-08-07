import React from "react";
import fs from "fs";
import path from "path";
import { Navbar9 } from "@/components/Navbar9";
import { Blog32 } from "./components/Blog32";
import { Footer4 } from "@/components/Footer4";

export const dynamic = "force-dynamic";

function loadPodcasts() {
  try {
    const file = path.join(process.cwd(), "data", "podcasts.json");
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return Array.isArray(data.podcasts) ? data.podcasts : [];
  } catch {
    return [];
  }
}

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Blog32 podcasts={loadPodcasts()} />
      <Footer4 />
    </div>
  );
}
