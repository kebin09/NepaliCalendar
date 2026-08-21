"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ language: "ne", setLanguage: () => {} });

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("ne");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "en" || saved === "ne") {
      setLanguageState(saved);
      document.documentElement.dataset.lang = saved;
    } else {
      const browserLang = navigator.language || navigator.userLanguage || "";
      const initial = browserLang.toLowerCase().startsWith("en") ? "en" : "ne";
      setLanguageState(initial);
      document.documentElement.dataset.lang = initial;
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.dataset.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
