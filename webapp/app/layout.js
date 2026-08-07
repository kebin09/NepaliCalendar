import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
  display: "swap",
});

export const metadata = {
  title: "Nepali Calendar",
  description:
    "सम्पूर्ण चाडपर्व, पञ्चाङ्ग, मौसम, वित्त, र ज्योतिष एकै ठाउँमा।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ne">
      <body
        className={`${inter.variable} ${notoSansDevanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
