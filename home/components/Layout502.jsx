"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout502() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">संस्कृति</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            नेपालको आत्मा यहीँ बस्छ
          </h1>
          <p className="md:text-md">
            चाडपर्वको इतिहास र विधि पढ्नुहोस्, शुभकामना कार्ड बाँड्नुहोस्। एफएम
            रेडियो, पोडकास्ट, र भिडियोमार्फत नेपालीपनको भण्डार तपाईंको हातमा।
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="अन्वेषण" variant="secondary">
              अन्वेषण
            </Button>
            <Button
              title="थप"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              थप
            </Button>
          </div>
        </div>
        <Tabs defaultValue="tab-one">
          <TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            <TabsTrigger
              value="tab-one"
              className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              चाडपर्व
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              रेडियो
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              पोडकास्ट
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">चाडपर्व</p>
                <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  हरेक चाडपर्वको कथा र विधि जान्नुहोस्
                </h2>
                <p>
                  दशैंको टीकाको साइतदेखि तिहारको देउसी भैलोसम्म, हरेक पर्वको
                  इतिहास र सही विधि यहाँ छ। सुन्दर शुभकामना कार्ड बनाएर आफन्तलाई
                  पठाउनुहोस्।
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="हेर्नुहोस्" variant="secondary">
                    हेर्नुहोस्
                  </Button>
                  <Button
                    title="सबै"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    सबै
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">चाडपर्व</p>
                <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  हरेक चाडपर्वको कथा र विधि जान्नुहोस्
                </h2>
                <p>
                  दशैंको टीकाको साइतदेखि तिहारको देउसी भैलोसम्म, हरेक पर्वको
                  इतिहास र सही विधि यहाँ छ। सुन्दर शुभकामना कार्ड बनाएर आफन्तलाई
                  पठाउनुहोस्।
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="हेर्नुहोस्" variant="secondary">
                    हेर्नुहोस्
                  </Button>
                  <Button
                    title="सबै"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    सबै
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">चाडपर्व</p>
                <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  हरेक चाडपर्वको कथा र विधि जान्नुहोस्
                </h2>
                <p>
                  दशैंको टीकाको साइतदेखि तिहारको देउसी भैलोसम्म, हरेक पर्वको
                  इतिहास र सही विधि यहाँ छ। सुन्दर शुभकामना कार्ड बनाएर आफन्तलाई
                  पठाउनुहोस्।
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="हेर्नुहोस्" variant="secondary">
                    हेर्नुहोस्
                  </Button>
                  <Button
                    title="सबै"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    सबै
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
