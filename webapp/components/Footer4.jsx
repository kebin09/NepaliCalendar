"use client";

import Link from "next/link";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { ne: "गृहपृष्ठ", en: "Home", href: "/home" },
  { ne: "पात्रो", en: "Calendar", href: "/calendar" },
  { ne: "ज्योतिष", en: "Horoscope", href: "/rashifal" },
  { ne: "समाचार", en: "News", href: "/news" },
  { ne: "उपकरण", en: "Tools", href: "/converter" },
  { ne: "हाम्रो बारेमा", en: "About", href: "/about/" },
  { ne: "गोपनीयता नीति", en: "Privacy", href: "/privacy/" },
  { ne: "सम्पर्क", en: "Contact", href: "/contact/" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    Icon: BiLogoFacebookCircle,
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    Icon: BiLogoInstagram,
  },
  { href: "https://x.com", label: "X", Icon: FaXTwitter },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    Icon: BiLogoLinkedinSquare,
  },
  {
    href: "https://www.youtube.com",
    label: "YouTube",
    Icon: BiLogoYoutube,
  },
];

export function Footer4() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <Link
            href="/home"
            className="flex items-center gap-2 lg:justify-self-start"
            aria-label="Nepali Calendar Homepage"
          >
            <img
              src="/logo.svg"
              alt="Nepali Calendar"
              className="inline-block"
            />
            <span className="whitespace-nowrap text-lg font-bold leading-none">
              <span className="lang-ne">नेपाली पात्रो</span>
              <span className="lang-en">Nepali Calendar</span>
            </span>
          </Link>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            {footerLinks.map((link) => (
              <li key={link.href} className="font-semibold">
                <Link href={link.href}>
                  <span className="lang-ne">{link.ne}</span>
                  <span className="lang-en">{link.en}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="size-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 md:mt-0">
              <span className="lang-ne">© {new Date().getFullYear()} नेपाली पात्रो। सर्वाधिकार सुरक्षित।</span>
              <span className="lang-en">© {new Date().getFullYear()} Nepali Calendar. All rights reserved.</span>
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
}
