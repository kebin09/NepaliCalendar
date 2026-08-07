"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout312() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">प्रक्रिया</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              चार सजिला चरणमा स्वास्थ्य सेवा
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              राम्रो स्वास्थ्य जटिल हुनु पर्दैन। हामीले सबै कुरा सरल बनाएका छौं
              ताकि तपाईं लामो झन्झट बिना नै विशेषज्ञ हेरचाह पाउन सक्नुहोस्।
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              आफ्नो लक्षण चयन गर्नुहोस्
            </h3>
            <p>
              तपाईंलाई के भइरहेको छ हामीलाई बताउनुहोस्। हाम्रो प्रणालीले तपाईंको
              आवश्यकताको लागि सही विशेषज्ञ खोज्न मद्दत गर्छ।
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              आफ्नो डाक्टर छान्नुहोस्
            </h3>
            <p>
              NMC-प्रमाणित डाक्टरहरूको प्रोफाइल हेर्नुहोस्। तिनीहरूको अनुभव र
              बिरामीको प्रतिक्रिया पढेर सही निर्णय लिनुहोस्।
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              अपोइन्टमेन्ट बुक गर्नुहोस्
            </h3>
            <p>
              तपाईंको तालिका मिल्ने समय छान्नुहोस्। केही ट्यापमा बुकिङ पुष्टि
              हुन्छ र तपाईं तयार हुनुहुन्छ।
            </p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              सिधा परामर्श लिनुहोस्
            </h3>
            <p>
              भिडियो कल जडान हुन्छ र तपाईं आफ्नो कोठाको गोपनीयताबाट डाक्टरसँग
              कुरा गर्न सक्नुहुन्छ। कुनै यात्रा छैन, कुनै पर्खाइ छैन।
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="सुरु गर्नुहोस्" variant="secondary">
            सुरु गर्नुहोस्
          </Button>
          <Button
            title="थप जान्नुहोस्"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            थप जान्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
