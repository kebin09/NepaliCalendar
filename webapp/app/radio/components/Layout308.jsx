"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaTowerBroadcast, FaMusic, FaBuilding, FaMountain } from "react-icons/fa6";

export function Layout308() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">प्रसारण</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              हरेक प्रदेशको आवाज तपाईंको कोठामा
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              कोशीको चिया बगानदेखि सुदूरपश्चिमको सेतो हिमालसम्म, नेपालका हरेक
              कुनाको धड्कन सुन्नुहोस्। तपाईंको मनपर्ने विधा छान्नुहोस् र देशको
              लयमा हराउनुहोस्।
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <FaTowerBroadcast className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              कोशी प्रदेशका स्टेसनहरू
            </h3>
            <p>
              सगरमाथाको काखबाट गुन्जिने समाचार र लोक भाका, तपाईंको दिनको साथी
              बन्न तयार छन्।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <FaMusic className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              मधेश प्रदेशका स्टेसनहरू
            </h3>
            <p>
              मैथिली र भोजपुरीको मिठासमा डुब्नुहोस्, जहाँ परम्परा र आधुनिकताको
              सङ्गम सुनिन्छ।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <FaBuilding className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              बागमती प्रदेशका स्टेसनहरू
            </h3>
            <p>
              राजधानीको चहलपहल र सूचनाको केन्द्र, हरेक घटनाको प्रत्यक्ष प्रसारण
              तपाईंको नजिक।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <FaMountain className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              गण्डकी प्रदेशका स्टेसनहरू
            </h3>
            <p>
              पोखराको शान्त ताल र अन्नपूर्णको छहारीबाट आउने सङ्गीत र कथाहरू
              सुन्नुहोस्।
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="सबै स्टेसन" variant="secondary">
            सबै स्टेसन
          </Button>
          <Button
            title="खोज्नुहोस्"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            खोज्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
