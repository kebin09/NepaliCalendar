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

export function Layout513() {
  const render = { ...useTablet(), ...useMobile() };
  const useSctoll = useRelume({
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
      ref={useSctoll.containerRef}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      ref={useSctoll.containerRef}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">पञ्चाङ्ग</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                आजको ग्रह र नक्षत्रको पूरा विवरण
              </h2>
              <p className="md:text-md">
                चन्द्रमा कन्या राशिमा छन् र सूर्योदय बिहान ५:४७ बजे हुनेछ। आजको
                करण बव हो।
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="पूरा पञ्चाङ्ग" variant="secondary">
                  पूरा पञ्चाङ्ग
                </Button>
                <Button
                  title="साइत"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  साइत
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-8">
              <AnimatePresence>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">तिथि र नक्षत्र</h5>
                      <p>सूर्योदय ५:४७ मा र सूर्यास्त ६:२३ मा हुनेछ</p>
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
                        opacity: useSctoll.getStyles(0).opacity,
                        y: useSctoll.getStyles(0).y,
                      }}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        तिथि र नक्षत्र
                      </h5>
                      <p className="md:text-md">
                        सूर्योदय ५:४७ मा र सूर्यास्त ६:२३ मा हुनेछ
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">सूर्य र चन्द्र</h5>
                      <p>सूर्योदय ५:४७ मा र सूर्यास्त ६:२३ मा हुनेछ</p>
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
                        opacity: useSctoll.getStyles(1).opacity,
                        y: useSctoll.getStyles(1).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        सूर्य र चन्द्र
                      </h5>
                      <p className="md:text-md">
                        सूर्योदय ५:४७ मा र सूर्यास्त ६:२३ मा हुनेछ
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">योग र करण</h5>
                      <p>
                        आज कुनै सार्वजनिक बिदा छैन तर रामनवमीको तयारी सुरु हुन्छ
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
                        opacity: useSctoll.getStyles(2).opacity,
                        y: useSctoll.getStyles(2).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        योग र करण
                      </h5>
                      <p className="md:text-md">
                        आज कुनै सार्वजनिक बिदा छैन तर रामनवमीको तयारी सुरु हुन्छ
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">चाडपर्व र बिदा</h5>
                      <p>सूर्योदय ५:४७ मा र सूर्यास्त ६:२३ मा हुनेछ</p>
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
                        opacity: useSctoll.getStyles(3).opacity,
                        y: useSctoll.getStyles(3).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        चाडपर्व र बिदा
                      </h5>
                      <p className="md:text-md">
                        सूर्योदय ५:४७ मा र सूर्यास्त ६:२३ मा हुनेछ
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
              </AnimatePresence>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}
