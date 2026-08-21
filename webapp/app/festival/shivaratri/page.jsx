import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "महाशिवरात्रि २०८३ | Maha Shivaratri at Pashupatinath Nepal",
  description:
    "महाशिवरात्रि (Maha Shivaratri) — the Great Night of Shiva — is Nepal's holiest festival night at Pashupatinath temple. Learn its mythology, why Shiva is worshipped at night, sadhu gatherings, fasting rules, mantras, marriage blessings and public holiday traditions.",
  keywords: [
    "maha shivaratri",
    "shivaratri",
    "महाशिवरात्रि",
    "pashupatinath temple",
    "shivaratri nepal 2083",
    "falgun krishna chaturdashi",
    "naga sadhus pashupatinath",
    "shivaratri vrat",
    "om namah shivaya",
    "shiva night worship",
    "shivaratri public holiday nepal",
    "bilva patra offering",
  ],
  alternates: {
    canonical:
      "https://nepalicalendar.kebinmaharjan.com.np/festival/shivaratri/",
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
      name: "Maha Shivaratri",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/shivaratri/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "महाशिवरात्रि २०८३ (Maha Shivaratri)",
  description:
    "The Great Night of Shiva observed on Falgun Krishna Chaturdashi with all-night worship, fasting and massive gatherings of devotees and naga sadhus at Pashupatinath Temple.",
  startDate: "2027-02-26",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Pashupatinath Temple & throughout Nepal",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Kathmandu",
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
                विक्रम संवत् २०८३ · फागुन कृष्ण चतुर्दशी · रात्रि भरको पूजा
              </span>
              <span className="lang-en">
                Vikram Samvat 2083 · Falgun Krishna Chaturdashi · The Great
                Night of Shiva
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">महाशिवरात्रि २०८३</span>
              <span className="lang-en">Maha Shivaratri 2083</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                महादेवको रात्रि — फागुन कृष्ण चतुर्दशीका रात पशुपतिनाथमा लाखौं
                भक्त भेला हुन्छन्। हिमालबाट ओर्लिएका साधुसन्यासीहरूको भेला,
                व्रत, जलाभिषेक र शिवलिंग पूजाले रातभरि जागरण चल्छ। नेपालमा यो
                दिन सार्वजनिक बिदा हो — शिवको महान् रातमा सिङ्गो देश भक्तिमा
                लीन हुन्छ। यस वर्षको तिथि{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Night of Lord Shiva — millions of devotees gather at
                Pashupatinath on Falgun Krishna Chaturdashi (February–March).
                Ash-smeared sadhus descend from the Himalaya, while fasting,
                water offerings and Shiva lingam worship fuel an all-night
                vigil. It is a public holiday in Nepal — one of the few nights
                when the entire nation pauses in devotion. Track this
                year&apos;s tithi on our{" "}
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
              <span className="lang-ne">इतिहास र महत्त्व: यो रात किन उत्कृष्ट?</span>
              <span className="lang-en">
                History &amp; Significance: Why This Night Is Supreme
              </span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                पुराणहरूका अनुसार यही रात शिवले सृष्टि र संहारको ताण्डव नृत्य
                नचिकनुभएको थियो। अर्को कथाअनुसार बेलको रूखमा अलपत्र परेका एक
                शिकारीले अनजानमा बेलपत्र र जल तलको शिवलिंगमाथि झार्दै रातभर
                जागरण गरेका थिए — बिहान उनका सबै पाप धुलिए। अनजान भक्तिले पनि
                अनुग्रह पाइन्छ भन्ने यही कथा शिवरात्रिको आत्मा हो।
              </span>
              <span className="lang-en">
                The Puranas describe this as the night Shiva performed the
                tandava, the cosmic dance of creation and destruction. Another
                beloved legend tells of a hunter stranded overnight in a bel
                tree who unknowingly dropped bilva leaves and water onto a Shiva
                lingam below while keeping a hungry vigil — by dawn his sins were
                washed away. Even unintentional devotion, the story teaches,
                earns Shiva&apos;s grace.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                सबैभन्दा प्रचलित मान्यताअनुसार यही रात शिव अनन्त ज्योतिर्लिंगका
                रूपमा प्रकट हुनुभएको थियो — जसको आदि र अन्त ब्रह्मा र विष्णुले
                पनि पत्ता लगाउन सकेनन्। यो रात चन्द्रमा सबैभन्दा अन्धकार हुने
                भएकाले समयका स्वामी शिवको पूजा अँध्यारोमै गरिन्छ; यो रातमा
                गरिने पूजा-अनुष्ठानको फल अनेकगुणा बढी हुने ज्योतिषीय मान्यता
                छ।
              </span>
              <span className="lang-en">
                The most popular tradition says Shiva appeared as an endless
                pillar of light — the Jyotirlinga — whose ends even Brahma and
                Vishnu could not find. Because the moon is at its darkest this
                night, Shiva, the lord who conquered time itself, is worshipped
                in darkness; astrology holds that spiritual practice on this
                night bears fruit manyfold.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">शिवरात्रि कसरी मनाइन्छ?</span>
              <span className="lang-en">How Shivaratri Is Celebrated</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                पशुपतिनाथका चारै ढोका बिहान तीन बजे खुल्छन् र भोलिपल्टसम्म
                बन्द हुँदैनन्। दूध, मह, घिउ, उखुको रस र पवित्र जलले चार पालो
                विशेष अभिषेक गराइन्छ; पुरोहितहरू मुख्य लिंगमा हजारौं बेलपत्र
                चढाउँछन्। बागमती किनारमा किलोमिटरौं लामा लाइन लाग्छ।
              </span>
              <span className="lang-en">
                Pashupatinath&apos;s four gates open at 3 a.m. and stay open
                until late the next night. Four rounds of special abhishekam are
                performed with milk, honey, ghee, sugarcane juice and holy
                water, while priests offer thousands of bilva leaves to the main
                lingam. Queues stretch kilometers along the Bagmati riverbank.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                नदी पारिपट्टि भस्म लिपेका नागा साधुहरू त्रिशूल र डमरुसहित
                शोभायात्रा निकाल्छन्। भक्तहरूले निर्जला वा फलाहार व्रत बसी
                रातभर जागरण गर्छन् — &quot;ॐ नमः शिवाय&quot; र महामृत्युञ्जय
                मन्त्रको जाप भईरहन्छ। घरघरमा पनि शिवलिंगमाथि जलाभिषेक गरी
                बेलपत्र, धतुरा र सेतो फूल चढाइन्छ।
              </span>
              <span className="lang-en">
                Across the river, ash-covered naga sadhus arrive in processions
                with tridents and drums, blessing the crowds. Devotees observe
                nirjala or phalahar fasts and keep an all-night vigil — jaagaran
                — chanting &quot;Om Namah Shivaya&quot; and the Mahamrityunjaya
                mantra. In homes, families pour water over household lingams and
                offer bilva leaves, dhatura and white flowers.
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
                पशुपतिनाथ पुग्न बिहानै निस्कनुहोस् — दिउँसो लाइन घण्टौं लामो
                हुन्छ। फागुनको रात जाडो हुने भएकाले न्यानो लुगा लगाउनुहोस्।
                मुख्य मन्दिर भित्र गैर-हिन्दूलाई प्रवेश निषेध छ; बाहिरी क्षेत्रमा
                भजन, साधु र अनुष्ठानका तस्बिर लिन सकिन्छ।
              </span>
              <span className="lang-en">
                Set out early — by midday the queues stretch for hours. Falgun
                nights are freezing, so dress warm. Non-Hindus cannot enter the
                main temple, but the outer ghats offer wonderful views of bhajan
                singers, sadhus and rituals, with photography allowed outside.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                भीडभाड र आफ्ना सामानको विशेष ध्यान दिनुहोस्। साधुहरूको फोटो
                खिच्नुअघि स्नेहपूर्वक अनुमति लिनुहोस्। तिथि पुष्टि गर्न{" "}
                <a href="/calendar/" className="underline">
                  पात्रो
                </a>{" "}
                हेर्नुहोस् र यो अद्भुत रातको अनुभव लिनुहोस्।
              </span>
              <span className="lang-en">
                Watch your belongings in the massive crowds and always ask
                kindly before photographing sadhus. Confirm exact dates on our{" "}
                <a href="/calendar/" className="underline">
                  calendar
                </a>{" "}
                and experience this extraordinary night for yourself.
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
              <a href="/festival/chhath/" className="underline">
                <span className="lang-ne">अघिल्लो पर्व: छठ</span>
                <span className="lang-en">Previous festival: Chhath</span>
              </a>
              <a href="/festival/holi/" className="underline">
                <span className="lang-ne">अर्को पर्व: होली</span>
                <span className="lang-en">Next festival: Holi</span>
              </a>
              <a href="/month/falgun/" className="underline">
                <span className="lang-ne">फागुन महिना</span>
                <span className="lang-en">Month of Falgun</span>
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
