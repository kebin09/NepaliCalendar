import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { BlogPostHeader1 } from "./components/BlogPostHeader1";
import { DailyRashifal } from "./components/DailyRashifal";
import { Layout491 } from "./components/Layout491";
import { Cta25 } from "./components/Cta25";
import { Footer4 } from "@/components/Footer4";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <BlogPostHeader1 />
      <DailyRashifal />
      <Layout491 />
      <Cta25 />
      <Footer4 />
    </div>
  );
}

