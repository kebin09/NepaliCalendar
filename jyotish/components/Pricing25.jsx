"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">शुल्क</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            सरल योजना
          </h1>
          <p className="md:text-md">
            कुनै लुकेको शुल्क छैन। तपाईंको आवश्यकता अनुसारको योजना छनोट
            गर्नुहोस्।
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">मासिक</TabsTrigger>
            <TabsTrigger value="yearly">वार्षिक</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                सुरुवात योजना
              </h2>
              <p>सामान्य प्रश्नहरूको लागि उपयुक्त।</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                रु १९/मिनेट
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="सुरु गर्नुहोस्" className="w-full">
                  सुरु गर्नुहोस्
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>१५ मिनेट निःशुल्क परामर्श</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>एक राशिफल विश्लेषण</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>च्याट समर्थन</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                व्यवसाय योजना
              </h2>
              <p>करियर र व्यापार सम्बन्धी सल्लाह।</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                रु २९/मिनेट
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="सुरु गर्नुहोस्" className="w-full">
                  सुरु गर्नुहोस्
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>सुरुवात योजनाका सबै सुविधा</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>व्यवसाय मुहूर्त सिफारिस</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>वास्तु परामर्श</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>प्राथमिकता च्याट समर्थन</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                विस्तृत योजना
              </h2>
              <p>जीवनका हरेक पक्षको गहिरो विश्लेषण।</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                रु ४९/मिनेट
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="सुरु गर्नुहोस्" className="w-full">
                  सुरु गर्नुहोस्
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>व्यवसाय योजनाका सबै सुविधा</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>विस्तृत कुण्डली निर्माण</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>व्यक्तिगत ग्रह शान्ति उपाय</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>प्रत्यक्ष भिडियो परामर्श</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>समर्पित सम्बन्ध प्रबन्धक</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                सुरुवात योजना
              </h2>
              <p>सामान्य प्रश्नहरूको लागि उपयुक्त।</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                रु १८०/वर्ष
              </h3>
              <p className="font-medium">२०% बचत</p>
              <div className="mt-6 md:mt-8">
                <Button title="सुरु गर्नुहोस्" className="w-full">
                  सुरु गर्नुहोस्
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>१५ मिनेट निःशुल्क परामर्श</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>एक राशिफल विश्लेषण</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>च्याट समर्थन</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                व्यवसाय योजना
              </h2>
              <p>करियर र व्यापार सम्बन्धी सल्लाह।</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                रु २८०/वर्ष
              </h3>
              <p className="font-medium">२०% बचत</p>
              <div className="mt-6 md:mt-8">
                <Button title="सुरु गर्नुहोस्" className="w-full">
                  सुरु गर्नुहोस्
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>सुरुवात योजनाका सबै सुविधा</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>व्यवसाय मुहूर्त सिफारिस</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>वास्तु परामर्श</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>प्राथमिकता च्याट समर्थन</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                विस्तृत योजना
              </h2>
              <p>जीवनका हरेक पक्षको गहिरो विश्लेषण।</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                रु ४८०/वर्ष
              </h3>
              <p className="font-medium">२०% बचत</p>
              <div className="mt-6 md:mt-8">
                <Button title="सुरु गर्नुहोस्" className="w-full">
                  सुरु गर्नुहोस्
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>व्यवसाय योजनाका सबै सुविधा</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>विस्तृत कुण्डली निर्माण</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>व्यक्तिगत ग्रह शान्ति उपाय</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>प्रत्यक्ष भिडियो परामर्श</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>समर्पित सम्बन्ध प्रबन्धक</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
