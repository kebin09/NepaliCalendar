import React from "react";
import fs from "fs";
import path from "path";
import { Navbar9 } from "@/components/Navbar9";
import { Blog28 } from "./components/Blog28";
import { Footer4 } from "@/components/Footer4";

export const dynamic = "force-dynamic";

function loadPosts() {
  try {
    const file = path.join(process.cwd(), "data", "posts.json");
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return Array.isArray(data.posts) ? data.posts : [];
  } catch {
    return [];
  }
}

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Blog28 posts={loadPosts()} />
      <Footer4 />
    </div>
  );
}
