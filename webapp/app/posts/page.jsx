import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Blog28 } from "./components/Blog28";
import { Footer4 } from "@/components/Footer4";
import postsData from "@/data/posts.json";

export const metadata = {
  title: "नेपाली ब्लग | Nepali Blog Posts & Articles",
  description:
    "साहित्य, संस्कृति, विचार र यात्रा विषयमा नेपाली ब्लग पोस्टहरू पढ्नुहोस्। Read Nepali blog posts and articles on literature, culture, thought and travel.",
  keywords: [
    "nepali blog",
    "नेपाली ब्लग",
    "nepali articles",
    "nepal literature blog",
    "nepal culture articles",
    "nepali sahitya",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/posts/",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar9 />
      <Blog28 posts={postsData.posts} />
      <Footer4 />
    </div>
  );
}
