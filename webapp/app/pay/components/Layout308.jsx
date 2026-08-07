"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaBolt, FaMobileScreen, FaQrcode, FaPeopleGroup } from "react-icons/fa6";

export function Layout308() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">सेवाहरू</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              तपाईंको दैनिक जीवनका लागि आवश्यक सबै भुक्तानी
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              बिजुलीको बिल होस् वा साथीहरूसँगको खानाको हिसाब। हामी हरेक
              भुक्तानीलाई सरल र स्पष्ट बनाउँछौं। तपाईंको समय बचत गर्नु हाम्रो
              काम हो।
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <FaBolt className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              उपयोगिता बिलहरू एकै ठाउँमा भुक्तानी गर्नुहोस्
            </h3>
            <p>
              बिजुली, खानेपानी, इन्टरनेट र टिभीको बिल लाइनमा बस्नु नपर्ने गरी
              सिधै एपबाट भुक्तानी गर्नुहोस्।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <FaMobileScreen className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              रिचार्ज र वालेट लोड क्षणभरमै गर्नुहोस्
            </h3>
            <p>
              आफ्नो मोबाइल ब्यालेन्स रिचार्ज गर्नुहोस् वा आफ्नो मनपर्ने डिजिटल
              वालेटमा तुरुन्तै पैसा लोड गर्नुहोस्।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <FaQrcode className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              रकम स्थानान्तरण र क्यूआर भुक्तानी सहजै
            </h3>
            <p>
              बैंक खातामा सिधै रकम पठाउनुहोस् वा जुनसुकै पसलमा क्यूआर कोड
              स्क्यान गरेर भुक्तानी गर्नुहोस्।
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <FaPeopleGroup className="size-12" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              समूह खर्च र रेमिट्यान्सको झन्झट हटाउनुहोस्
            </h3>
            <p>
              साथीहरूसँग खर्च विभाजन गर्नुहोस् र विदेशबाट पैसा भित्र्याउन
              रेमिट्यान्स सेवालाई सजिलै लिंक गर्नुहोस्।
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="सबै सेवा" variant="secondary">
            सबै सेवा
          </Button>
          <Button
            title="सुरु गर्नुहोस्"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            सुरु गर्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
