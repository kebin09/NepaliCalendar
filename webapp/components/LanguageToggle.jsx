"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border-primary px-1 py-0.5 text-xs font-semibold">
      <button
        onClick={() => setLanguage("ne")}
        className={`rounded-full px-2 py-0.5 transition ${
          language === "ne" ? "bg-black text-white" : "text-neutral-600 hover:text-black"
        }`}
      >
        NE
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2 py-0.5 transition ${
          language === "en" ? "bg-black text-white" : "text-neutral-600 hover:text-black"
        }`}
      >
        EN
      </button>
    </div>
  );
}
