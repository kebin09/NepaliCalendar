"use client";

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = ({ defaultValue, selects }) => {
  const [activeSelect, setActiveSelect] = useState(defaultValue);
  const currentSelect = selects.find(function (select) {
    return select.value === activeSelect;
  });
  return { activeSelect, setActiveSelect, currentSelect };
};

const fallbackPodcasts = [
  {
    url: "#",
    image: {
      src: "/images/podcast.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "समाचार",
    readTime: "४५ मिनेट",
    title: "आजको नेपाल र विश्वको ठूलो समाचार",
    description: "दिनभरका मुख्य घटनाक्रमहरूको सार। एक कप चियासँग संसार बुझ्नुहोस्।",
  },
  {
    url: "#",
    image: {
      src: "/images/radio.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "समाचार",
    readTime: "३० मिनेट",
    title: "अर्थतन्त्रको दैनिकी",
    description: "शेयर बजार, मुद्रा र व्यापारको सरल विश्लेषण एकै ठाउँमा।",
  },
  {
    url: "#",
    image: {
      src: "/images/health.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "समाचार",
    readTime: "२५ मिनेट",
    title: "स्वास्थ्य र जीवनशैली",
    description: "विज्ञहरूसँग स्वास्थ्यका ज्वलन्त विषयमा रोचक छलफल।",
  },
  {
    url: "#",
    image: {
      src: "/images/temple.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "कथा",
    readTime: "३० मिनेट",
    title: "हराएको समयको कथा एक यात्रा",
    description: "पुरानो काठमाडौंका गल्लीहरूमा हराएको एक मानिसको अद्भुत कथा।",
  },
  {
    url: "#",
    image: {
      src: "/images/mountain-2.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "कथा",
    readTime: "२८ मिनेट",
    title: "गाउँले जीवनका ठूला कथा",
    description: "साना बस्तीका मानवीय सम्बन्ध र सङ्घर्षका सजीव चित्रण।",
  },
  {
    url: "#",
    image: {
      src: "/images/radio.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "कथा",
    readTime: "२२ मिनेट",
    title: "पुस्तकबाट बोलेका कुरा",
    description: "प्रिय पुस्तकका अंशहरूको सजीव वाचन र चर्चा।",
  },
  {
    url: "#",
    image: {
      src: "/images/podcast.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "अन्तर्वार्ता",
    readTime: "५५ मिनेट",
    title: "एक सफल उद्यमीसँगको खास कुराकानी",
    description: "असफलताबाट सफलताको शिखर चुम्ने एक नेपालीको प्रेरणादायी जीवन।",
  },
  {
    url: "#",
    image: {
      src: "/images/festival.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "अन्तर्वार्ता",
    readTime: "४० मिनेट",
    title: "कलाकारसँग कला र कर्म",
    description: "रंगमञ्चदेखि फिल्मसम्मको यात्रामा कला साधकसँगको संवाद।",
  },
  {
    url: "#",
    image: {
      src: "/images/radio.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "अन्तर्वार्ता",
    readTime: "३५ मिनेट",
    title: "खेलाडीहरूको संसार",
    description: "नेपाली खेलजगतका अनकहा कथा र सफलताका रहस्य।",
  },
  {
    url: "#",
    image: {
      src: "/images/prayer-flags.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "संस्कृति",
    readTime: "२६ मिनेट",
    title: "पर्व र मेलाका सम्झना",
    description: "चाडपर्वका मौलिक रीति, संस्कार र उत्सवको रोचक वर्णन।",
  },
  {
    url: "#",
    image: {
      src: "/images/monk.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "संस्कृति",
    readTime: "२४ मिनेट",
    title: "वाद्यवादनको धुन",
    description: "सारंगीदेखि मादलसम्मका परम्परागत वाद्यका कथा।",
  },
  {
    url: "#",
    image: {
      src: "/images/festival.jpg",
      alt: "पोडकास्ट कभर",
    },
    category: "संस्कृति",
    readTime: "२१ मिनेट",
    title: "पहाडका देउसी भैलो",
    description: "लोकसंगीत र नाचको सजीव प्रस्तुतिसँगै चाडको रौनक।",
  },
];

export function Blog32({ podcasts: podcastsProp }) {
  const podcasts = podcastsProp ?? fallbackPodcasts;
  const useActive = useRelume({
    defaultValue: "all-posts",
    selects: [
      {
        value: "all-posts",
        trigger: "All Posts",
        content: podcasts,
      },
      {
        value: "category-one",
        trigger: "समाचार",
        content: podcasts.filter((p) => p.category === "समाचार"),
      },
      {
        value: "category-two",
        trigger: "कथा",
        content: podcasts.filter((p) => p.category === "कथा"),
      },
      {
        value: "category-three",
        trigger: "अन्तर्वार्ता",
        content: podcasts.filter((p) => p.category === "अन्तर्वार्ता"),
      },
      {
        value: "category-four",
        trigger: "संस्कृति",
        content: podcasts.filter((p) => p.category === "संस्कृति"),
      },
    ],
  });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex max-w-lg flex-col">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">पोडकास्ट</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              नेपाली पोडकास्टहरू नि:शुल्क सुन्नुहोस्
            </h1>
            <p className="md:text-md">
              समाचार, कथा, अन्तर्वार्ता र संस्कृतिको संसारमा डुब्नुहोस्।
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="mb-10">
            <Select
              value={useActive.activeSelect}
              onValueChange={useActive.setActiveSelect}
            >
              <SelectTrigger className="min-w-[12.5rem] px-4 py-2 md:w-auto">
                {useActive.currentSelect.trigger}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-posts">सबै स्रोत</SelectItem>
                <SelectItem value="category-one">समाचार</SelectItem>
                <SelectItem value="category-two">कथा</SelectItem>
                <SelectItem value="category-three">अन्तर्वार्ता</SelectItem>
                <SelectItem value="category-four">संस्कृति</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={useActive.activeSelect}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16">
                {useActive.currentSelect.content.map((post) => (
                  <div
                    key={post.title}
                    className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4"
                  >
                    <a href={post.url} className="w-full">
                      <img
                        src={post.image.src}
                        alt={post.image.alt}
                        className="aspect-square w-full object-cover"
                      />
                    </a>
                    <div className="flex h-full flex-col items-start justify-center">
                      <div className="rb-4 mb-4 flex w-full items-center justify-start">
                        <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                          {post.category}
                        </p>
                        <p className="inline text-sm font-semibold">
                          {post.readTime}
                        </p>
                      </div>
                      <a className="mb-2" href={post.url}>
                        <h3 className="text-xl font-bold md:text-2xl">
                          {post.title}
                        </h3>
                      </a>
                      <p>{post.description}</p>
                      <Button
                        className="mt-6 flex items-center justify-center gap-x-2"
                        variant="link"
                        size="link"
                      >
                        सुन्नुहोस्
                        <RxChevronRight />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
