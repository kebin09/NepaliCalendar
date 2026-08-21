"use client";

import React from "react";

export function Bilingual({ ne, en }) {
  return (
    <>
      <span className="lang-ne">{ne}</span>
      <span className="lang-en">{en}</span>
    </>
  );
}
