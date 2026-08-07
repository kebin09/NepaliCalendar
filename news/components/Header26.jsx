"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                संसारको खबर, तपाईंको भाषामा
              </h1>
              <p className="md:text-md">
                राजनीतिदेखि खेलकुदसम्म, अर्थतन्त्रदेखि मनोरञ्जनसम्मका ताजा
                समाचार एकै ठाउँमा पाउनुहोस्। दिनभर अपडेट हुने हाम्रो समाचार
                संग्रहले तपाईंलाई सधैं सूचित राख्छ।
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="पढ्नुहोस्">पढ्नुहोस्</Button>
                <Button title="सुन्नुहोस्" variant="secondary">
                  सुन्नुहोस्
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
