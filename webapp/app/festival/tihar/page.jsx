import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "तिहार — प्रकाश पर्व २०८३ | Tihar Festival of Lights Nepal",
  description:
    "तिहार (Tihar / Deepawali) is Nepal's five-day festival of lights honoring crows, dogs, cows, Laxmi and brothers. Explore Kaag Tihar, Kukur Tihar, Laxmi Puja, Govardhan Puja, Mha Puja, Bhai Tika, deusi-bhailo singing and rangoli traditions of the Newar calendar.",
  keywords: [
    "tihar",
    "tihar festival",
    "तिहार",
    "प्रकाश पर्व",
    "festival of lights nepal",
    "kukur tihar dog festival",
    "kaag tihar",
    "laxmi puja",
    "gai tihar",
    "govardhan puja",
    "bhai tika",
    "mha puja newar",
    "deusi bhailo",
    "yomari punhi",
    "nepali diwali",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/tihar/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nepalicalendar.kebinmaharjan.com.np/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Festivals",
      item: "https://nepalicalendar.kebinmaharjan.com.np/calendar/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tihar",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/tihar/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "तिहार — प्रकाश पर्व २०८३ (Tihar Festival of Lights)",
  description:
    "Five-day festival of lights celebrating the bond between humans, animals and gods — from crow and dog worship to Laxmi Puja, Newar Mha Puja and the brother-sister blessings of Bhai Tika.",
  startDate: "2026-11-09",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Throughout Nepal",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressRegion: "Bagmati",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Nepali Calendar",
    url: "https://nepalicalendar.kebinmaharjan.com.np/",
  },
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <p className="mb-3 font-semibold md:mb-4">
              <span className="lang-ne">
                विक्रम संवत् २०८३ · कात्तिक शुक्ल त्रयोदशीदेखि · प्रकाश पर्व
              </span>
              <span className="lang-en">
                Vikram Samvat 2083 · From Kartik Shukla Trayodashi · Festival of
                Lights
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">तिहार — प्रकाश पर्व २०८३</span>
              <span className="lang-en">Tihar — Festival of Lights 2083</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                प्रकाश पर्व — ५ दिनको उत्सव। काग तिहार, कुकुर तिहार, लक्ष्मी
                पूजा, गोवर्धन पूजा र भाइटीकाले भरिने तिहारमा देउसी-भैलोका गीत,
                झुसिली र रंगोलीले घरघर उज्यालो हुन्छ। नेवार संस्कृतिको म्ह पूजा
                र नेपाल सम्बत् नयाँ वर्ष पनि यही पर्वमा पर्छ।{" "}
                <a href="/festival/dashain/" className="underline">
                  दशैं
                </a>{" "}
                पछिको यो पर्व नेपालीको सबैभन्दा रौनकी उत्सव हो — तिथि हेर्न{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                अवलोकन गर्नुहोस्।
              </span>
              <span className="lang-en">
                Festival of Lights — a 5-day celebration. Kaag Tihar, Kukur
                Tihar, Laxmi Puja, Govardhan Puja and Bhai Tika fill every home
                with oil lamps, marigold garlands and rangoli mandalas, while
                deusi-bhailo singers roam the streets at night. The Newar Mha
                Puja and Nepal Sambat New Year fall within these five days too.
                Coming soon after{" "}
                <a href="/festival/dashain/" className="underline">
                  Dashain
                </a>
                , it is Nepal&apos;s most luminous celebration — follow our{" "}
                <a href="/calendar/" className="underline">
                  Nepali calendar
                </a>{" "}
                for this year&apos;s dates.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">इतिहास र महत्त्व: यमपञ्चक</span>
              <span className="lang-en">
                History &amp; Significance: Yamapanchak
              </span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                तिहारलाई यमपञ्चक पनि भनिन्छ — मृत्युदेव यमराज र उनकी बहिनी
                यमुनाको कथासँग यो पर्व जोडिन्छ। भाइटीकाका दिन दिदीबहिनीले सात
                रङको टीका लगाई दुबो घुमाउँदै यमराजसँग दाजुभाइको लामो आयुको
                कामना गर्छन्; मखमली फूल नओसिन्जेल भाइको रक्षा हुने विश्वास छ।
              </span>
              <span className="lang-en">
                Tihar is also called Yamapanchak, tied to the legend of Yama,
                the god of death, and his sister Yamuna. On Bhai Tika, sisters
                apply seven-color tika on their brothers&apos; foreheads and
                circle them with dubo grass, praying Yama grants them long life
                — protected until the makhamali flowers they offer ever wilt.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                यसै पर्वमा धनकी देवी लक्ष्मीको पूजा गरिन्छ। काग, कुकुर, गाई र
                गोरूलाई सन्देशवाहक र समृद्धिका प्रतीक मानी पूजा गर्ने चलनले
                तिहारलाई मानव, पशु र देवताबीचको सम्बन्धको उत्सव बनाउँछ —
                संसारमा अरू कतै नहुने अनौठो परम्परा।
              </span>
              <span className="lang-en">
                The festival also worships Laxmi, goddess of wealth. Honoring
                crows as messengers, dogs as guardians, cows and oxen as symbols
                of prosperity makes Tihar a celebration of the bond between
                humans, animals and gods — a tradition found nowhere else in the
                world.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">तिहार कसरी मनाइन्छ?</span>
              <span className="lang-en">How Tihar Is Celebrated</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                पहिलो दिन काग तिहारमा छतमा चामल र मीठा खाना राखिन्छ। दोस्रो दिन
                कुकुर तिहारमा कुकुरहरूले सयपत्रीको माला, टीका र मीठो खाना
                पाउँछन्। तेस्रो दिन गाई पूजापछि लक्ष्मी पूजामा ढोकाढोकामा दियो
                बल्छ, झुसिली टाँसिन्छ र रंगोलीका मण्डल बनाइन्छ।
              </span>
              <span className="lang-en">
                Day one, Kaag Tihar, offers rice and sweets to crows on
                rooftops. Day two, Kukur Tihar, garlands dogs with marigolds,
                tika and feasts. Day three honors cows before Laxmi Puja, when
                doorways glow with oil lamps, paper lanterns and intricate
                rangoli mandalas welcoming the goddess of wealth.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                चौथो दिन गोवर्धन पूजा र गोरू पूजा गरिन्छ भने नेवार समुदायको म्ह
                पूजा — आफ्नै शरीर र भित्री ज्योतिको पूजा — ले नेपाल सम्बत् नयाँ
                वर्ष सुरु गर्छ। पाँचौँ दिन भाइटीकामा दिदीबहिनीले भाइलाई
                सातरङ्गे टीका लगाउँछन् र भाइले उपहार दिन्छन्। साँझपख
                देउसी-भैलोका टोलीहरू ढोल-झ्यालीसहित घरघर गीत गाउँछन् र सेल
                रोटी, फलफूल र दक्षिणा पाउँछन्।
              </span>
              <span className="lang-en">
                Day four brings Govardhan Puja and ox worship, while the Newar
                community performs Mha Puja — worshipping one&apos;s own body
                and inner light on mandala diagrams — which begins Nepal Sambat
                New Year. On day five, Bhai Tika, sisters apply seven-color tika
                and brothers give gifts in return. Each evening, deusi-bhailo
                troupes sing house to house with drums and flutes, receiving sel
                roti, fruits and money for social causes.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">घुम्न आउनेहरूका लागि सुझाव</span>
              <span className="lang-en">Tips for Visitors</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                तिहारमा साँझपख असन, ठमेल वा पाटन दरबार क्षेत्र हिँड्नुहोस् —
                उज्यालोले सिङ्गो उपत्यका झिलमिल हुन्छ। सयपत्री र मखमली फूल हरेक
                पूजाको बिहानै किन्नुहोस्। भाइटीकाका लागि सप्तरङ्गी टीका, दुबो,
                ओखर र मखमली फूल तयार राख्नुहोस्।
              </span>
              <span className="lang-en">
                Walk through Ason, Thamel or Patan Durbar Square after dark when
                the whole valley glows. Buy sayapatri (marigold) and makhamali
                flowers fresh on the morning of each puja. For Bhai Tika, gather
                seven-color powder, dubo grass, walnuts and makhamali blossoms
                in advance.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                सार्वजनिक बिदा र तिथि{" "}
                <a href="/calendar/" className="underline">
                  पात्रो
                </a>{" "}
                बाट जाँच्नुहोस्, र त्यसपछि मनाइने{" "}
                <a href="/festival/chhath/" className="underline">
                  छठ पर्व
                </a>{" "}
                पनि हेर्नुहोस्। देउसी-भैलोको टोलीसँग सामेल हुन आग्रह गरिएमा
                सहभागी हुनुहोस् — यो तिहारकै सबैभन्दा मीठो अनुभव हो।
              </span>
              <span className="lang-en">
                Check public holidays and exact tithis on our{" "}
                <a href="/calendar/" className="underline">
                  calendar
                </a>
                , then continue exploring{" "}
                <a href="/festival/chhath/" className="underline">
                  Chhath Parva
                </a>{" "}
                which follows. If invited, join a deusi-bhailo troupe — it is
                the sweetest experience Tihar offers.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">सम्बन्धित पृष्ठहरू</span>
              <span className="lang-en">Explore Related Pages</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/festival/dashain/" className="underline">
                <span className="lang-ne">अघिल्लो पर्व: दशैं</span>
                <span className="lang-en">Previous festival: Dashain</span>
              </a>
              <a href="/festival/chhath/" className="underline">
                <span className="lang-ne">अर्को पर्व: छठ</span>
                <span className="lang-en">Next festival: Chhath</span>
              </a>
              <a href="/month/kartik/" className="underline">
                <span className="lang-ne">कात्तिक महिना</span>
                <span className="lang-en">Month of Kartik</span>
              </a>
              <a href="/calendar/" className="underline">
                <span className="lang-ne">आजको तिथि</span>
                <span className="lang-en">Today&apos;s Tithi</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
