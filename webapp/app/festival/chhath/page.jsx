import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "छठ पर्व — सूर्य पूजा २०८३ | Chhath Puja Festival Nepal",
  description:
    "छठ (Chhath Parva) is the four-day sun-worship festival of Nepal's Terai dedicated to Surya and Chhathi Maiya. Learn about Nahay Khay, Kharna, Sandhya Arghya and Usha Arghya, the strict fasting tradition, river ghats of Janakpur and Birgunj, arwa-chawal offerings and its health benefits.",
  keywords: [
    "chhath",
    "chhath puja",
    "छठ पर्व",
    "सूर्य पूजा",
    "chhath parva nepal",
    "nahay khay",
    "kharna",
    "sandhya arghya",
    "usha arghya",
    "chhathi maiya",
    "surya shashti",
    "terai festival",
    "janakpur chhath",
    "sun worship festival",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/chhath/",
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
      name: "Chhath",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/chhath/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "छठ पर्व — सूर्य पूजा २०८३ (Chhath Parva)",
  description:
    "Four-day Vedic festival worshipping the Sun god Surya and Chhathi Maiya with rigorous fasting, holy baths and arghya offerings at rivers during sunset and sunrise.",
  startDate: "2026-11-12",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Terai plains of Nepal — Janakpur, Birgunj, Biratnagar & river ghats nationwide",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressRegion: "Madhesh",
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
                विक्रम संवत् २०८३ · कात्तिक शुक्ल षष्ठी · सूर्योपासनाको महापर्व
              </span>
              <span className="lang-en">
                Vikram Samvat 2083 · Kartik Shukla Shashthi · The Great Festival
                of Sun Worship
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">छठ पर्व — सूर्य पूजा २०८३</span>
              <span className="lang-en">Chhath Parva — Sun Worship 2083</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                सूर्य पूजा — ४ दिनको व्रत। नहाँय खाँय, खरना, सन्ध्या अर्घ्य र
                उषा अर्घ्य — चारै दिन सूर्य भगवान्लाई अर्घ्य दिइन्छ। नदी र
                पोखरीमा स्नान गर्दै व्रतालुहरूले असीम भक्ति देखाउँछन्। तराईमा
                विशेष महत्त्व बोक्ने यो वैदिक पर्व जनकपुर, वीरगन्ज र
                विराटनगरका घाटहरूमा भव्य रूपमा मनाइन्छ।{" "}
                <a href="/festival/tihar/" className="underline">
                  तिहार
                </a>{" "}
                पछि आउने यो पर्वका तिथि{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Sun worship — a 4-day fasting festival. Nahay Khay, Kharna,
                Sandhya Arghya and Usha Arghya — on each day, offerings are made
                to the Sun god himself. Devotees bathe in rivers and ponds,
                keeping fasts that can last over fifty hours without water.
                Carrying special significance in the Terai, this Vedic festival
                transforms the ghats of Janakpur, Birgunj and Biratnagar into
                oceans of saffron and devotion. It follows{" "}
                <a href="/festival/tihar/" className="underline">
                  Tihar
                </a>{" "}
                — track its tithis on our{" "}
                <a href="/calendar/" className="underline">
                  Nepali calendar
                </a>
                .
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">इतिहास र महत्त्व: सूर्य उपासना</span>
              <span className="lang-en">
                History &amp; Significance: Worshipping the Sun God
              </span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                वैदिक परम्परामा सूर्य दृश्य देवता हुन् — बाली, स्वास्थ्य र
                समयका स्रोत। छठमा सूर्यसँगै छठी मइयाको पूजा गरिन्छ, जसले
                सन्तानको लामो आयु, स्वास्थ्य र समृद्धि दिने विश्वास गरिन्छ।
                डुबन्त र उदाउँदो सूर्यलाई सीधै अर्घ्य दिने यो पर्व कृतज्ञताको
                महान् अभिव्यक्ति हो।
              </span>
              <span className="lang-en">
                In Vedic tradition, Surya is the visible god — sustainer of
                crops, health and time itself. Chhath honors the Sun together
                with Chhathi Maiya, believed to grant children longevity, health
                and prosperity. Offering arghya directly to the setting and
                rising Sun is one of humanity&apos;s oldest expressions of
                gratitude to the source of all energy.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                महाभारतमा द्रौपदी र पाण्डवहरूले राज्य पुनःप्राप्तिका लागि छठ
                गरेको र रामायण परम्पराअनुसार राम-सीताले अयोध्या फर्केपछि यो
                व्रत बसेको उल्लेख छ। सीताको जन्मभूमि जनकपुर आज पनि यो पर्वको
                केन्द्र हो। पूजारी बिना, मूर्ति बिना — सीधा सूर्यतर्फ फर्केर
                गरिने यो पूजा अनौठो लोकतान्त्रिक अनुष्ठान हो।
              </span>
              <span className="lang-en">
                The Mahabharata says Draupadi and the Pandavas performed Chhath
                to regain their kingdom, while Ramayana tradition holds that
                Rama and Sita kept this fast after returning to Ayodhya —
                fitting, since Janakpur, Sita&apos;s birthplace in Nepal, remains
                the festival&apos;s beating heart. With no priests and no idols,
                devotees face the Sun directly in a rare democratic ritual where
                devotion alone matters.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">छठ कसरी मनाइन्छ?</span>
              <span className="lang-en">How Chhath Is Celebrated</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                पहिलो दिन नहाँय खाँयमा व्रतालुहरूले नदीमा स्नान गरी अरवा-चामल,
                चना दाल र लौकाको शुद्ध भोजन गर्छन्; घर नुहाइधुवाइले चम्किन्छ।
                दोस्रो दिन खरनामा दिनभरि निर्जला व्रत बसी साँझपख गुडको खीर
                खाइन्छ — यही भोजन अर्को ३६ घण्टाको एक मात्र आहार हुन्छ।
              </span>
              <span className="lang-en">
                On day one, Nahay Khay, devotees bathe in holy rivers and eat a
                single satvik meal of arwa-chawal (sun-dried rice), chana dal
                and bottle gourd; homes are scrubbed spotless. Day two, Kharna,
                ends a full-day waterless fast after sunset with jaggery kheer —
                the vrati&apos;s only nourishment for the next 36 hours.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                तेस्रो दिन सन्ध्या अर्घ्यमा ठेकुवा, खर, नरिवल, केरा र मूलाको
                सूप भरेर हजारौं व्रतालु नदीमा उभिएर डुबन्त सूर्यलाई अर्घ्य
                दिन्छन्। चौथो दिन उषा अर्घ्यमा बिहानै उदाउँदो सूर्यलाई दूध र जल
                अर्पण गरी व्रत समापन हुन्छ। रातभर मैथिली, भोजपुरी र हिन्दीमा
                छठ गीत गाएर जागरण गरिन्छ।
              </span>
              <span className="lang-en">
                Day three, Sandhya Arghya, sees thousands stand waist-deep in
                rivers at sunset offering thekua cookies, sugarcane, coconuts,
                bananas and radish arranged in bamboo soop baskets to the
                setting Sun. On day four, Usha Arghya, devotees return before
                dawn to greet the rising Sun with milk and water, then break
                their fast. Through the cold night, Chhath geet sung in Maithili,
                Bhojpuri and Hindi keep the ghats awake.
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
                तेस्रो दिनको साँझ जुनसुकै ठूलो घाटमा पुग्नुहोस् — जनकपुरका
                धनुषसागर र गंगासागर, काठमाडौंका थापाथली र शंखमुल प्रमुख स्थल
                हुन्। शालीन लुगा लगाउनुहोस्, व्रतालुको फोटो खिच्नुअघि अनुमति
                लिनुहोस् र प्रसाद भक्तिपूर्वक ग्रहण गर्नुहोस्।
              </span>
              <span className="lang-en">
                Arrive at any major ghat by late afternoon on day three —
                Dhanush Sagar and Ganga Sagar in Janakpur, or Thapathali and
                Shankhamul in Kathmandu are the main sites. Dress modestly, ask
                before photographing fasting devotees, and accept prasad
                respectfully when offered.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                सरकारी बिदा हुने भएकाले यातायात अग्रिम योजना बनाउनुहोस्। घाटमा
                भीड हुने भएकाले आफ्ना सामानको ख्याल राख्नुहोस्। तिथि पुष्टि गर्न{" "}
                <a href="/calendar/" className="underline">
                  पात्रो
                </a>{" "}
                हेर्नुहोस् र तराईको यो अद्भुत पर्व आफ्नै आँखाले अवलोकन गर्नुहोस्।
              </span>
              <span className="lang-en">
                Government holidays are declared, so plan transport ahead and
                mind your belongings in the crowds. Confirm exact tithis on our{" "}
                <a href="/calendar/" className="underline">
                  calendar
                </a>{" "}
                and witness this extraordinary Terai festival with your own
                eyes.
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
              <a href="/festival/tihar/" className="underline">
                <span className="lang-ne">अघिल्लो पर्व: तिहार</span>
                <span className="lang-en">Previous festival: Tihar</span>
              </a>
              <a href="/festival/shivaratri/" className="underline">
                <span className="lang-ne">अर्को पर्व: महाशिवरात्रि</span>
                <span className="lang-en">Next festival: Maha Shivaratri</span>
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
