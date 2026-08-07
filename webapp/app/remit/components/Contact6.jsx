"use client";

import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">सम्पर्क</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              सम्पर्क गर्नुहोस्
            </h2>
            <p className="md:text-md">
              प्रश्न छ? हामीलाई लेख्नुहोस्। सहयोग नजिकै छ।
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <p>hello@relume.io</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <p>+१ (५५५) ०००-००००</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p>१२३ स्याम्पल स्ट्रिट, सिड्नी एनएसडब्ल्यू २००० एयू</p>
            </div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                पहिलो नाम
              </Label>
              <Input type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                थर
              </Label>
              <Input type="text" id="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                इमेल
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                फोन नम्बर
              </Label>
              <Input type="text" id="phone" />
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label className="mb-2">विषय छान्नुहोस्</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="एउटा छान्नुहोस्..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-choice">First Choice</SelectItem>
                <SelectItem value="second-choice">Second Choice</SelectItem>
                <SelectItem value="third-choice">Third Choice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">
              तपाईंलाई कुनले राम्रो वर्णन गर्छ?
            </Label>
            <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="व्यक्तिगत प्रयोगकर्ता"
                  id="#first_choice"
                />
                <Label htmlFor="#first_choice">व्यक्तिगत प्रयोगकर्ता</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#second_choice" />
                <Label htmlFor="#second_choice">सानो व्यवसाय</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#third_choice" />
                <Label htmlFor="#third_choice">ठूलो कम्पनी</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#fourth_choice" />
                <Label htmlFor="#fourth_choice">गैर-नाफामूलक संस्था</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#fifth_choice" />
                <Label htmlFor="#fifth_choice">विद्यार्थी</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#other" />
                <Label htmlFor="#other">अन्य</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              सन्देश
            </Label>
            <Textarea
              id="message"
              placeholder="आफ्नो सन्देश लेख्नुहोस्..."
              className="min-h-[11.25rem] overflow-auto"
            />
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              म सर्तहरू स्वीकार गर्छु
            </Label>
          </div>
          <div>
            <Button title="पठाउनुहोस्">पठाउनुहोस्</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
