import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "होली — रंगहरूको पर्व २०८३ | Holi Fagu Purnima Nepal",
  description:
    "होली (Holi / Fagu Purnima) is Nepal's festival of colors celebrated over two days — Holika Dahan in the Terai and hill Holi in Kathmandu the next day. Learn the Prahlad and Holika legend, meaning of colors, pichkari fun, thandai, chir pole tradition and safety tips.",
  keywords: [
    "holi",
    "holi nepal",
    "होली",
    "fagu purnima",
    "रंगहरूको पर्व",
    "holika dahan",
    "prahlad holika story",
    "chir pole basantapur",
    "pichkari water gun",
    "thandai drink",
    "festival of colors nepal",
    "hilly holi terai holi",
    "holi 2083",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/holi/",
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
      name: "Holi",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/holi/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "होली — रंगहरूको पर्व २०८३ (Holi / Fagu Purnima)",
  description:
    "Nepal's festival of colors marking the victory of devotion over evil, celebrated with Holika Dahan bonfires, abir powders, pichkari water fights, music and thandai.",
  startDate: "2027-03-03",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Throughout Nepal — Terai on Purnima, Kathmandu Valley & hills the following day",
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
                विक्रम संवत् २०८३ · फागु पूर्णिमा · रङ र खुशीको महोत्सव
              </span>
              <span className="lang-en">
                Vikram Samvat 2083 · Fagu Purnima · Festival of Colors and Joy
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">होली — रंगहरूको पर्व २०८३</span>
              <span className="lang-en">Holi — Festival of Colors 2083</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                रंगहरूको पर्व — दुई दिन मनाइन्छ। तराईमा फागु पूर्णिमाकै दिन
                होलिका दहन गरी भोलिपल्ट पहाड र काठमाडौंमा रंग खेलिन्छ। प्रह्लाद
                र होलिकाको कथासँग जोडिएको यो पर्वमा पिचकारी, ठण्डाई र अबिरका
                रङले सबै जात-प्राय भुलेर एक हुन्छन्। यस वर्षको मिति{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Festival of Colors — celebrated over two days. The Terai lights
                Holika Dahan bonfires on Fagu Purnima itself, while the hills
                and Kathmandu play with colors the next day. Tied to the story
                of Prahlad and Holika, the day dissolves all social boundaries
                into clouds of abir powder, pichkari water fights, drumbeats and
                glasses of chilled thandai. Check this year&apos;s date on our{" "}
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
              <span className="lang-ne">इतिहास र महत्त्व: प्रह्लाद र होलिका</span>
              <span className="lang-en">
                History &amp; Significance: Prahlad and Holika
              </span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                होलीको जरा प्रह्लादको कथामा छ। राक्षसराज हिरण्यकशिपुले आफूलाई
                देवता मान्न आदेश दिँदा छोरा प्रह्लादले भगवान् विष्णुमै भक्ति
                राखे। क्रोधित राजाले आगोले नडस्ने वरदान पाएकी आफ्नी बहिनी
                होलिकालाई प्रह्लादलाई अँगालो हाली चितामा बस्न लगाए। आगो बल्दा
                वरदान उल्टियो — होलिका डसिन् तर प्रह्लाद अक्षत रहे। त्यसैले
                होलिका दहनको रात अहंकार र असत्य डस्ने प्रतीकका रूपमा मनाइन्छ।
              </span>
              <span className="lang-en">
                Holi&apos;s roots lie in the story of Prahlad. When the demon
                king Hiranyakashipu demanded worship as a god, his son Prahlad
                stayed devoted to Lord Vishnu. Furious, the king made his sister
                Holika — immune to fire by boon — sit on a pyre with Prahlad in
                her lap. As flames rose, the boon reversed: Holika burned while
                Prahlad emerged unharmed. That is why Holika Dahan bonfires burn
                arrogance and evil the night before Holi.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                अर्को धार कृष्णसँग जोडिन्छ — उहाँले राधा र गोपिनीहरूमाथि
                रङ्गीन पानी छर्कँदा नै आजको रमाइलो र मिलनसार होलीको सुरुवात
                भएको मानिन्छ। भक्तिको विजय र वसन्त ऋतुको आगमन — दुवैको सम्झनामा
                रङ खेलिन्छ।
              </span>
              <span className="lang-en">
                A second thread ties Holi to Krishna, who playfully drenched
                Radha and the gopis with colored water — origin of today&apos;s
                mischievous, joyful spirit. The colors celebrate both the
                victory of devotion over evil and the arrival of spring.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">होली कसरी मनाइन्छ?</span>
              <span className="lang-en">How Holi Is Celebrated</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                नेपालमा होली दुई दिन मनाइन्छ — तराईका जनकपुर, वीरगन्जमा
                पूर्णिमाकै दिन होलिका दहन र होली, भने पहाडी जिल्ला र काठमाडौं
                उपत्यकामा भोलिपल्ट। दिनहरू अगाडि नै बसन्तपुरमा चीर खाम्बा
                उभ्याइन्छ र होलीका दिन साँझ त्यसलाई तानेर दहन गरी पर्व
                समापन हुन्छ।
              </span>
              <span className="lang-en">
                Nepal celebrates Holi on two consecutive days — Terai cities
                like Janakpur and Birgunj observe Holika Dahan and play on the
                full moon itself, while hill districts and Kathmandu Valley
                celebrate one day later. Days earlier, the chir pole is erected
                at Basantapur; on Holi afternoon it is dragged through the
                streets and burned, formally closing the festival.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                बिहानै पिचकारी, पानीका बलुन र अबिर-गुलालको खेल सुरु हुन्छ।
                बासन्तपुर र पोखरा लेकसाइडमा डिजे र नाचको भीड लाग्छ। घरघरमा
                बादाम, सुपारी र गुलाबजल मिसाइएको चिसो ठण्डाई पकाइन्छ; गुजिया र
                सेल रोटी पनि बन्छन्। रातो माया, पहेँलो ज्ञान, हरियो नयाँ जीवन
                र निलो दिव्यताको प्रतीक मानिन्छ।
              </span>
              <span className="lang-en">
                Morning brings pichkari water guns, rooftop water balloons and
                clouds of abir and gulal powders. Basantapur and Pokhara
                Lakeside fill with DJs and dancing crowds. At home, families
                brew chilled thandai — milk blended with almonds, fennel and
                rose petals — alongside gujiya and sel roti. Red symbolizes
                love, yellow knowledge, green new life and blue divinity.
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
                पुरानो लुगा लगाउनुहोस्, कपालमा तेल लगाउनुहोस् — रङ निस्कन
                सजिलो हुन्छ। रासायनिक रङको सट्टा प्राकृतिक गुलाल रोज्नुहोस्।
                चल्तीको मोटरसाइकल र गाडीतर्फ बलुन नहानुहोस्; &quot;होइन&quot;
                भन्नेलाई सम्मान गर्नुहोस् — होलीमा पनि सहमति महत्त्वपूर्ण छ।
              </span>
              <span className="lang-en">
                Wear old clothes and oil your hair so color washes off easily.
                Choose natural gulal over chemical dyes that irritate skin.
                Never throw balloons at moving vehicles, and respect anyone who
                says no — consent matters even on Holi.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                पर्यटकहरू बसन्तपुर, ठमेल वा पोखरा लेकसाइडमा समूहमा रमाउनुहोस् र
                फोन सुरक्षित राख्नुहोस्। मिति पुष्टि गर्न{" "}
                <a href="/calendar/" className="underline">
                  पात्रो
                </a>{" "}
                हेर्नुहोस् — तराई र पहाडको एक-एक दिन छुट्टाछुट्टै अनुभव लिन
                सकिन्छ।
              </span>
              <span className="lang-en">
                Tourists should celebrate in groups around Basantapur, Thamel or
                Pokhara Lakeside and keep phones in ziplock bags. Confirm dates
                on our{" "}
                <a href="/calendar/" className="underline">
                  calendar
                </a>{" "}
                — devoted partygoers can even enjoy both the Terai and hill
                celebrations on consecutive days.
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
              <a href="/festival/shivaratri/" className="underline">
                <span className="lang-ne">अघिल्लो पर्व: महाशिवरात्रि</span>
                <span className="lang-en">Previous festival: Maha Shivaratri</span>
              </a>
              <a href="/month/falgun/" className="underline">
                <span className="lang-ne">फागुन महिना</span>
                <span className="lang-en">Month of Falgun</span>
              </a>
              <a href="/month/chaitra/" className="underline">
                <span className="lang-ne">चैत महिना</span>
                <span className="lang-en">Month of Chaitra</span>
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
