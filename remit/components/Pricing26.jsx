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

export function Pricing26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">तुलना</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            दर तुलना
          </h1>
          <p className="md:text-md">
            हरेक पटक उत्कृष्ट दर। यो कुनै बहाना होइन, तथ्य हो।
          </p>
        </div>
        <div className="w-full">
          <Tabs defaultValue="monthly">
            <TabsList className="mx-auto mb-12 flex w-fit md:mb-20">
              <TabsTrigger value="monthly">मासिक</TabsTrigger>
              <TabsTrigger value="yearly">वार्षिक</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="sticky top-0 grid grid-cols-3 border-b border-border-primary bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between border-0 border-border-primary px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      साधारण
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $१९
                      </p>
                      <p className="inline-block font-bold">
                        <span>प्रति महिना</span>
                      </p>
                    </div>
                    <p>सानो रकम पठाउनको लागि उपयुक्त।</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="सुरु गर्नुहोस्"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      सुरु गर्नुहोस्
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      व्यवसाय
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $२९
                      </p>
                      <p className="inline-block font-bold">
                        <span>प्रति महिना</span>
                      </p>
                    </div>
                    <p>नियमित कारोबारको लागि उत्तम विकल्प।</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="सुरु गर्नुहोस्"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      सुरु गर्नुहोस्
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      उद्यम
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $४९
                      </p>
                      <p className="inline-block font-bold">
                        <span>प्रति महिना</span>
                      </p>
                    </div>
                    <p>ठूलो रकम र व्यापारिक आवश्यकताका लागि।</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="सुरु गर्नुहोस्"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      सुरु गर्नुहोस्
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  स्थानान्तरण सीमा
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  अधिकतम एकल कारोबार रकम
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  $१,०००
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  $५,०००
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  असीमित
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  दैनिक स्थानान्तरण सीमा
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  मासिक स्थानान्तरण सीमा
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  वार्षिक स्थानान्तरण सीमा
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  प्राप्तकर्ता थप्न सकिने संख्या
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  शुल्क र दर
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  स्थानान्तरण शुल्क प्रतिशत
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  १.५%
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  १%
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  ०.५%
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  विनिमय दर मार्जिन
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  लुकेको शुल्क
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  प्राथमिकता दर लक
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  बल्क डिस्काउन्ट
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  सुविधा र समर्थन
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  ग्राहक सहायता च्यानल
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  इमेल
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  इमेल र च्याट
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  फोन, इमेल, च्याट
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  समर्पित खाता प्रबन्धक
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  एप भित्रै कारोबार ट्रयाकिङ
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  स्वचालित आवर्ती भुक्तानी
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  प्राथमिकता प्रशोधन
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="sticky top-0 grid grid-cols-3 border-b border-border-primary bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between border-0 border-border-primary px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      साधारण
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $१८०
                      </p>
                      <p className="inline-block font-bold">
                        <span>प्रति वर्ष (२०% बचत)</span>
                      </p>
                    </div>
                    <p>सानो रकम पठाउनको लागि उपयुक्त।</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="सुरु गर्नुहोस्"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      सुरु गर्नुहोस्
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      व्यवसाय
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $२८०
                      </p>
                      <p className="inline-block font-bold">
                        <span>प्रति वर्ष (२०% बचत)</span>
                      </p>
                    </div>
                    <p>नियमित कारोबारको लागि उत्तम विकल्प।</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="सुरु गर्नुहोस्"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      सुरु गर्नुहोस्
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      उद्यम
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $४८०
                      </p>
                      <p className="inline-block font-bold">
                        <span>प्रति वर्ष (२०% बचत)</span>
                      </p>
                    </div>
                    <p>ठूलो रकम र व्यापारिक आवश्यकताका लागि।</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="सुरु गर्नुहोस्"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      सुरु गर्नुहोस्
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  स्थानान्तरण सीमा
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  अधिकतम एकल कारोबार रकम
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  $१,०००
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  $५,०००
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  असीमित
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  दैनिक स्थानान्तरण सीमा
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  मासिक स्थानान्तरण सीमा
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  वार्षिक स्थानान्तरण सीमा
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  प्राप्तकर्ता थप्न सकिने संख्या
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  शुल्क र दर
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  स्थानान्तरण शुल्क प्रतिशत
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  १.५%
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  १%
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  ०.५%
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  विनिमय दर मार्जिन
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  लुकेको शुल्क
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  प्राथमिकता दर लक
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  बल्क डिस्काउन्ट
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  सुविधा र समर्थन
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  ग्राहक सहायता च्यानल
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  इमेल
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  इमेल र च्याट
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  फोन, इमेल, च्याट
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  समर्पित खाता प्रबन्धक
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  एप भित्रै कारोबार ट्रयाकिङ
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  स्वचालित आवर्ती भुक्तानी
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  प्राथमिकता प्रशोधन
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
