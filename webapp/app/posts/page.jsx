import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Blog28 } from "./components/Blog28";
import { Footer4 } from "@/components/Footer4";
import postsData from "@/data/posts.json";

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Blog28 posts={postsData.posts} />
      <Footer4 />
    </div>
  );
}
