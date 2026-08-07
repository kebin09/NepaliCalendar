"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import { FaCirclePlay } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const TabItem = ({ tabItem, index, activeTab }) => {
  if (index !== activeTab) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      {tabItem.image && (
        <img
          src={tabItem.image.src}
          alt={tabItem.image.alt}
          className="object-cover size-full"
        />
      )}
      {tabItem.video && (
        <Dialog>
          <DialogTrigger className="relative flex items-center justify-center w-full">
            <img
              src={tabItem.video.image.src}
              alt={tabItem.video.image.alt}
              className="object-cover size-full"
            />
            <span className="absolute inset-0 z-10 bg-black/50" />
            <FaCirclePlay className="absolute z-20 text-white size-16" />
          </DialogTrigger>
          <DialogContent>
            <VideoIframe video={tabItem.video.url} />
          </DialogContent>
        </Dialog>
      )}
    </motion.div>
  );
};

const useRelume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabSetter = (index) => () => setActiveTab(index);
  const getActiveTabButtonStyles = (index) => {
    return clsx("cursor-pointer border-b border-border-primary py-6", {
      "opacity-100": activeTab === index,
      "opacity-25": activeTab !== index,
    });
  };
  const getActiveTabButtonContentStyles = (index) => {
    return {
      height: activeTab === index ? "auto" : 0,
      opacity: activeTab === index ? 1 : 0,
    };
  };
  return {
    setActiveTabSetter,
    getActiveTabButtonStyles,
    getActiveTabButtonContentStyles,
    activeTab,
  };
};

export function Layout491() {
  const useActive = useRelume();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">सामग्री</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            हरेक शिक्षार्थीको लागि बहु-माध्यम पाठहरू
          </h1>
          <p className="md:text-md">
            हामी बुझ्छौं कि सबैको सिक्ने तरिका फरक हुन्छ। त्यसैले हामी भिडियो,
            अडियो र टेक्स्ट तीनै माध्यममा पाठ ल्याएका छौं।
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="पाठ हेर्नुहोस्" variant="secondary">
              पाठ हेर्नुहोस्
            </Button>
            <Button
              title="सबै हेर्नुहोस्"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              सबै हेर्नुहोस्
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
            <div
              onClick={useActive.setActiveTabSetter(0)}
              className={useActive.getActiveTabButtonStyles(0)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                भिडियो पाठहरू
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(0)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4">
                  अनुभवी शिक्षकहरूद्वारा पढाइएका आकर्षक भिडियोहरू। जटिल विषय पनि सजिलै बुझ्नुहोस्।
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(1)}
              className={useActive.getActiveTabButtonStyles(1)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                अडियो पाठहरू
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(1)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4">
                  पडकास्ट र अडियोमा जहाँ भए पनि सिक्नुहोस्। व्यस्त तालिकामा पनि सजिलो।
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(2)}
              className={useActive.getActiveTabButtonStyles(2)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                टेक्स्ट पाठहरू
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(2)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4">
                  स्पष्ट नोट र लेखहरूसँग आफ्नै गतिमा पढ्नुहोस्।
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
            <AnimatePresence initial={false}>
              <TabItem
                tabItem={{
                  heading: "भिडियो पाठहरू",
                  description:
                    "अनुभवी शिक्षकहरूद्वारा पढाइएका आकर्षक भिडियोहरू। जटिल विषय पनि सजिलै बुझ्नुहोस्।",
                  image: {
                    src: "/images/learn.jpg",
                    alt: "नेपाली पात्रोको चित्र",
                  },
                }}
                index={0}
                activeTab={useActive.activeTab}
              />
              <TabItem
                tabItem={{
                  heading: "अडियो पाठहरू",
                  description:
                    "पडकास्ट र अडियोमा जहाँ भए पनि सिक्नुहोस्। व्यस्त तालिकामा पनि सजिलो।",
                  video: {
                    image: {
                      src: "/images/podcast.jpg",
                      alt: "नेपाली पात्रोको चित्र",
                    },
                    url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
                  },
                }}
                index={1}
                activeTab={useActive.activeTab}
              />
              <TabItem
                tabItem={{
                  heading: "टेक्स्ट पाठहरू",
                  description:
                    "स्पष्ट नोट र लेखहरूसँग आफ्नै गतिमा पढ्नुहोस्।",
                  image: {
                    src: "/images/learn.jpg",
                    alt: "नेपाली पात्रोको चित्र",
                  },
                }}
                index={2}
                activeTab={useActive.activeTab}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

