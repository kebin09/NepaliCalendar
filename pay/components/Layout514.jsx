"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = ({ data }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const getStyles = (index) => {
    const startProgress = index / data.length;
    const endProgress = (index + 1) / data.length;
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.07),
        startProgress,
        endProgress - 0.07,
        Math.min(1, endProgress),
      ],
      [0, 1, 1, 0],
    );
    const y = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.1),
        startProgress,
        endProgress - 0.1,
        Math.min(1, endProgress),
      ],
      [100, 0, 0, -100],
    );
    return { opacity, y };
  };
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout514() {
  const render = { ...useTablet(), ...useMobile() };
  const useScroll = useRelume({
    data: [
      {
        heading: "01 Feature one",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
          alt: "Relume placeholder image 1",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
          alt: "Relume placeholder image 1",
        },
      },
      {
        heading: "02 Feature two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
          alt: "Relume placeholder image 2",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
          alt: "Relume placeholder image 2",
        },
      },
      {
        heading: "03 Feature three",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
          alt: "Relume placeholder image 3",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
          alt: "Relume placeholder image 3",
        },
      },
      {
        heading: "04 Feature four",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
          alt: "Relume placeholder image 4",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
          alt: "Relume placeholder image 4",
        },
      },
    ],
  });
  return (
    <section
      ref={useScroll.containerRef}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      ref={useScroll.containerRef}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg"
                alt="Relume placeholder image 1"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg"
                alt="Relume placeholder image 2"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg"
                alt="Relume placeholder image 3"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg"
                alt="Relume placeholder image 4"
                className="size-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">विश्वास</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                हरेक कारोबारमा तपाईंको विश्वास नै हाम्रो प्राथमिकता
              </h2>
              <p className="md:text-md">
                हामी बुझ्छौं कि पैसा केवल अंक होइन, यो मेहनतको कमाइ हो। त्यसैले
                हामी हरेक भुक्तानीलाई बैंक-स्तरीय सुरक्षा र पूर्ण पारदर्शिताका
                साथ सुरक्षित गर्छौं।
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="सेवाहरू" variant="secondary">
                  सेवाहरू
                </Button>
                <Button
                  title="सुरु"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  सुरु
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-8">
              <AnimatePresence>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        बैंक-स्तरीय सुरक्षा
                      </h5>
                      <p>
                        अब ढिलाइको पर्खाइ छैन। तपाईंको रकम प्राप्तकर्ताको खातामा
                        सेकेन्डभरमै पुग्छ।
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                          alt="Relume placeholder image 1"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(0).opacity,
                        y: useScroll.getStyles(0).y,
                      }}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        बैंक-स्तरीय सुरक्षा
                      </h5>
                      <p className="md:text-md">
                        अब ढिलाइको पर्खाइ छैन। तपाईंको रकम प्राप्तकर्ताको खातामा
                        सेकेन्डभरमै पुग्छ।
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        तुरुन्त कारोबार
                      </h5>
                      <p>
                        अब ढिलाइको पर्खाइ छैन। तपाईंको रकम प्राप्तकर्ताको खातामा
                        सेकेन्डभरमै पुग्छ।
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                          alt="Relume placeholder image 2"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(1).opacity,
                        y: useScroll.getStyles(1).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        तुरुन्त कारोबार
                      </h5>
                      <p className="md:text-md">
                        अब ढिलाइको पर्खाइ छैन। तपाईंको रकम प्राप्तकर्ताको खातामा
                        सेकेन्डभरमै पुग्छ।
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">२४/७ उपलब्धता</h5>
                      <p>
                        कुनै लुकेको शुल्क छैन। तपाईंले देख्नुभएको रकम नै तपाईंले
                        तिर्नुहुन्छ, हरेक पटक।
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                          alt="Relume placeholder image 3"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(2).opacity,
                        y: useScroll.getStyles(2).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        २४/७ उपलब्धता
                      </h5>
                      <p className="md:text-md">
                        कुनै लुकेको शुल्क छैन। तपाईंले देख्नुभएको रकम नै तपाईंले
                        तिर्नुहुन्छ, हरेक पटक।
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        पूर्ण पारदर्शिता
                      </h5>
                      <p>
                        अब ढिलाइको पर्खाइ छैन। तपाईंको रकम प्राप्तकर्ताको खातामा
                        सेकेन्डभरमै पुग्छ।
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                          alt="Relume placeholder image 4"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(3).opacity,
                        y: useScroll.getStyles(3).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        पूर्ण पारदर्शिता
                      </h5>
                      <p className="md:text-md">
                        अब ढिलाइको पर्खाइ छैन। तपाईंको रकम प्राप्तकर्ताको खातामा
                        सेकेन्डभरमै पुग्छ।
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
