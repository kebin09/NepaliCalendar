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

const fallbackPosts = [
  {
    url: "#",
    image: {
      src: "/images/news-1.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "साहित्य",
    readTime: "४ मिनेट पढाइ",
    title: "पहाडको छातीमा एउटा हराएको गाउँको कथा",
    description:
      "बादलले ढाकेको त्यो बस्तीमा समय स्थिर थियो, मानौं प्रकृतिले सास रोकेको छ।",
  },
  {
    url: "#",
    image: {
      src: "/images/sunrise.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "साहित्य",
    readTime: "३ मिनेट पढाइ",
    title: "वर्षाले भिजेको कविताको एक पाना",
    description: "तृष्णा र प्रेमका मीठा अक्षरहरू, जसरी वर्षाले धर्तीलाई रसाउँछ।",
  },
  {
    url: "#",
    image: {
      src: "/images/temple.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "साहित्य",
    readTime: "५ मिनेट पढाइ",
    title: "बुढापाकाका जिब्रोमा झुण्डिएका गाथा",
    description: "हाम्रा हजुरबुबाले रातभर सुनाउने साहस र पराक्रमका कथा।",
  },
  {
    url: "#",
    image: {
      src: "/images/news-2.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "संस्कृति",
    readTime: "६ मिनेट पढाइ",
    title: "दसैंको बेला घर फर्कनेहरूको अदृश्य पीडा",
    description:
      "टाढाको सहरमा टीका लगाउँदा आँखाभरि आउने आमाको अनुहारको बयान।",
  },
  {
    url: "#",
    image: {
      src: "/images/festival.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "संस्कृति",
    readTime: "४ मिनेट पढाइ",
    title: "मेलापातको मौलिक परम्परा",
    description: "मेलामा भेटिने संस्कार, पहिचान र सामूहिक रौनकका मानवीय पक्ष।",
  },
  {
    url: "#",
    image: {
      src: "/images/prayer-flags.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "संस्कृति",
    readTime: "३ मिनेट पढाइ",
    title: "देउसी भैलोको चाड रात",
    description: "घरघरै जुट्ने रात्रिकालीन रौनक र आपसी मित्रताको संगीत।",
  },
  {
    url: "#",
    image: {
      src: "/images/news-3.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "विचार",
    readTime: "३ मिनेट पढाइ",
    title: "प्रविधिले हाम्रा पुराना चोकहरू किन मास्दै छ",
    description:
      "मोबाइलको स्क्रिनले छोपेको संसारमा हामीले गुमाएको मानवीय स्पर्शको खोजी।",
  },
  {
    url: "#",
    image: {
      src: "/images/learn.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "विचार",
    readTime: "५ मिनेट पढाइ",
    title: "शिक्षाको उद्देश्य: प्रमाणपत्र वा ज्ञान?",
    description: "के हाम्रा बालबालिका साँच्चै सिकिरहेका छन् कि केवल पास हुँदै छन्?",
  },
  {
    url: "#",
    image: {
      src: "/images/mountain-lake.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "विचार",
    readTime: "४ मिनेट पढाइ",
    title: "पहाडको विकास र वातावरणको सन्तुलन",
    description: "विकासका नाममा हुने विनाशलाई रोकेर सोही गति कसरी?",
  },
  {
    url: "#",
    image: {
      src: "/images/himalaya.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "यात्रा",
    readTime: "७ मिनेट पढाइ",
    title: "काठमाडौंदेखि मुक्तिनाथसम्मको साइकल यात्रा",
    description: "बाटोका दुःख, सुख र उकाली-ओरालीका हिमाली दृश्यहरूको संगालो।",
  },
  {
    url: "#",
    image: {
      src: "/images/mountain-2.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "यात्रा",
    readTime: "६ मिनेट पढाइ",
    title: "पूर्वका पहाडी बस्तीको पदयात्रा",
    description: "चिनिएका हिमाल बाहेकका अनकन्टार भूगोल र त्यहाँका मान्छे।",
  },
  {
    url: "#",
    image: {
      src: "/images/temple.jpg",
      alt: "लेखको मुख्य छवि",
    },
    category: "यात्रा",
    readTime: "४ मिनेट पढाइ",
    title: "तराईका सहरहरूको भित्री यात्रा",
    description: "व्यापार र संस्कृतिको चौबाटो बनेका सहरहरूको फरक अनुहार।",
  },
];

export function Blog28({ posts: postsProp }) {
  const posts = postsProp ?? fallbackPosts;
  const useActive = useRelume({
    defaultValue: "all-posts",
    selects: [
      {
        value: "all-posts",
        trigger: "All Posts",
        content: posts,
      },
      {
        value: "category-one",
        trigger: "साहित्य",
        content: posts.filter((p) => p.category === "साहित्य"),
      },
      {
        value: "category-two",
        trigger: "संस्कृति",
        content: posts.filter((p) => p.category === "संस्कृति"),
      },
      {
        value: "category-three",
        trigger: "विचार",
        content: posts.filter((p) => p.category === "विचार"),
      },
      {
        value: "category-four",
        trigger: "यात्रा",
        content: posts.filter((p) => p.category === "यात्रा"),
      },
    ],
  });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex max-w-lg flex-col">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">ब्लग</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              शब्दहरूको शक्तिशाली संसार
            </h1>
            <p className="md:text-md">
              नेपाली मनको गहिराइबाट उब्जिएका कथा, कविता र विचार
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="md:min-w- mb-10">
            <Select
              value={useActive.activeSelect}
              onValueChange={useActive.setActiveSelect}
            >
              <SelectTrigger className="min-w-[12.5rem] px-4 py-2 md:w-auto">
                {useActive.currentSelect.trigger}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-posts">सबै पोस्ट</SelectItem>
                <SelectItem value="category-one">साहित्य</SelectItem>
                <SelectItem value="category-two">संस्कृति</SelectItem>
                <SelectItem value="category-three">विचार</SelectItem>
                <SelectItem value="category-four">यात्रा</SelectItem>
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
                  <div key={post.title}>
                    <a href={post.url} className="mb-6 inline-block w-full max-w-full">
                      <div className="w-full overflow-hidden">
                        <img
                          src={post.image.src}
                          alt={post.image.alt}
                          className="aspect-video size-full object-cover"
                        />
                      </div>
                    </a>
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        {post.category}
                      </p>
                      <p className="inline text-sm font-semibold">
                        {post.readTime}
                      </p>
                    </div>
                    <a href={post.url} className="mb-2 block max-w-full">
                      <h5 className="text-2xl font-bold md:text-4xl">
                        {post.title}
                      </h5>
                    </a>
                    <p>{post.description}</p>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      पूरा पढ्नुहोस्
                    </Button>
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
