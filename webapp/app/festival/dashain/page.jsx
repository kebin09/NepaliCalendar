import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "दशैं — विजया दशमी २०८३ | Dashain Festival Nepal 2026",
  description:
    "दशैं (Dashain / Vijaya Dashami) is Nepal's biggest festival, a 15-day celebration honoring goddess Durga's victory over Mahishasura. Learn about Ghatasthapana, Fulpati, Maha Ashtami, tika and jamara traditions, kite flying, ping bamboo swings and travel tips for visiting Nepal during Dashain.",
  keywords: [
    "dashain",
    "vijaya dashami",
    "दशैं",
    "विजया दशमी",
    "dashain 2083",
    "dashain tika 2026",
    "ghatasthapana",
    "fulpati",
    "maha ashtami",
    "jamara",
    "nepal biggest festival",
    "durga puja nepal",
    "ping bamboo swing",
    "dashain holidays nepal",
  ],
  alternates: {
    canonical: "https://nepalicalendar.kebinmaharjan.com.np/festival/dashain/",
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
      name: "Dashain",
      item: "https://nepalicalendar.kebinmaharjan.com.np/festival/dashain/",
    },
  ],
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "दशैं — विजया दशमी २०८३ (Dashain Tika Day)",
  description:
    "Nepal's greatest festival culminating in Vijaya Dashami, when elders bless younger family members with red tika, jamara sprouts and blessings for a prosperous year ahead.",
  startDate: "2026-10-15",
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
                विक्रम संवत् २०८३ · आश्विन शुक्ल पक्ष · सबैभन्दा ठूलो चाडपर्व
              </span>
              <span className="lang-en">
                Vikram Samvat 2083 · Ashwin Shukla Paksha · Nepal&apos;s Biggest
                Festival
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">दशैं — विजया दशमी २०८३</span>
              <span className="lang-en">Dashain — Vijaya Dashami 2083</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                विजया दशमी — नेपालको सबैभन्दा ठूलो चाडपर्व। देवी दुर्गाले
                महिषासुर राक्षसमाथि प्राप्त गर्नुभएको विजयको सम्झनामा मनाइने १५
                दिनको उत्सव। घटस्थापनादेखि कोजाग्रत पूर्णिमासम्म चल्ने यो पर्वमा
                टीका, जमरा, फूलपाती, पतंग, लिङ्गे पिंग, टीका-टिलक, कार्ड खेल र
                परिवार भेलाले देशभर खुशी छर्किन्छ। विद्यालय बन्द हुन्छन्,
                काठमाडौं रित्तिन्छ र लाखौं नेपाली आफ्नै घर, गाउँ र परिवारतर्फ
                हिँड्छन्। यस वर्षका सबै तिथि{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                मा हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Vijaya Dashami — Nepal&apos;s biggest festival, celebrating the
                victory of Goddess Durga over the demon Mahishasura. This
                15-day celebration runs from Kalratri to Kojagratri, filling the
                country with tika and jamara blessings, fulpati processions,
                kite battles, bamboo swings (linge ping), card games and family
                reunions. Schools close, Kathmandu empties, and millions travel
                home to receive blessings from their elders. Track every tithi
                of this year&apos;s Dashain on our{" "}
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
              <span className="lang-ne">इतिहास र महत्त्व: दुर्गा र महिषासुर</span>
              <span className="lang-en">
                History &amp; Significance: Durga versus Mahishasura
              </span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                दशैंले देवी दुर्गा र महिषासुर राक्षसबीचको महायुद्ध सम्झाउँछ।
                देवीमाहात्म्यअनुसार महिषासुरले &quot;कुनै पुरुष वा देवताले मलाई
                मार्न सक्दैन&quot; भन्ने वरदान पाएपछि तीनै लोकमा आतंक मच्चाए।
                त्यसपछि ब्रह्मा, विष्णु र महादेवको संयुक्त शक्तिबाट सिंहमाथि
                सवार आदिशक्ति दुर्गाको जन्म भयो। नौ रातसम्म चलेको युद्धमा दशौँ
                दिन — विजया दशमीका दिन — उहाँले महिषासुरको वध गर्नुभयो।
              </span>
              <span className="lang-en">
                Dashain commemorates the cosmic battle between Goddess Durga and
                the buffalo demon Mahishasura. According to the Devi Mahatmya,
                Mahishasura received a boon that no man or god could kill him
                and terrorized the three worlds. The combined energies of Brahma,
                Vishnu and Shiva then blazed forth as Durga, the primordial
                goddess riding a lion. After nine nights of battle she slew the
                demon on the tenth day — Vijaya Dashami, the day of victory.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                नवरात्रका नौ रात देवीका नौ स्वरूप — शैलपुत्रीदेखि
                सिद्धिदात्रीसम्म — को पूजा गरिन्छ; कलरात्रीको रात सबैभन्दा
                तपस्यापूर्ण मानिन्छ। यही तिथिमा भगवान् रामले रावणविरुद्ध युद्ध
                गर्नुअघि दुर्गाको आह्वान गरेको विश्वास पनि छ। अहंकार, क्रोध र
                अज्ञान भन्ने भित्री राक्षसमाथि भक्ति र धर्मको विजय — यही
                दशैंको मूल सन्देश हो।
              </span>
              <span className="lang-en">
                Each of the nine nights honors a different form of the goddess —
                from Shailaputri to Siddhidatri — with Kalratri night observed
                as the most intense. Tradition also holds that Lord Rama invoked
                Durga before defeating Ravana on this very tithi. The victory of
                devotion and righteousness over the inner demons of ego, anger
                and ignorance is the eternal message of Dashain.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">दशैं कसरी मनाइन्छ?</span>
              <span className="lang-en">How Dashain Is Celebrated</span>
            </h2>
            <p className="mb-4">
              <span className="lang-ne">
                पहिलो दिन घटस्थापनामा घडासहित जमरा रोपिन्छ। सातौँ दिन फूलपाती
                गोरखादेखि हनुमानढोकासम्म भित्र्याइन्छ; आठौँ दिन महाअष्टमी र
                नवौँ दिन महानवमीमा देवीको विशेष पूजा हुन्छ। दशौँ दिन विजया
                दशमीमा जेठोले कान्छोलाई चामल, रातो अबिर र दहीको टीका लगाई कानमा
                जमरा राख्छन् र दक्षिणा दिन्छन् — टीका-टिलकको यो शृंखला कोजाग्रत
                पूर्णिमासम्मै चल्छ।
              </span>
              <span className="lang-en">
                On Ghatasthapana, the first day, a kalash is installed and
                jamara barley shoots are sown. Fulpati arrives from Gorkha to
                Hanuman Dhoka on day seven, followed by Maha Ashtami and Maha
                Navami worship. On Vijaya Dashami, elders press a paste of rice,
                red abir and yogurt onto younger relatives&apos; foreheads, tuck
                jamara behind their ears and hand out dakshina — a tika circuit
                that continues until Kojagrata Purnima.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                मनसुन सकिएपछि आकाश पतंगले भरिन्छ; गाउँघरमा बाँस र रोपाले
                लिङ्गे पिंग बनाइन्छ — वर्षमा कम्तीमा एकपटक पिंग चढ्नु शुभ
                मानिन्छ। साँझहरू कलरब्रेज र लङ्गुर बुर्जाजस्ता कार्ड खेलमा
                बित्छन्, र टाढाटाढा भएका आफन्त एकै छानामुनि भेला भई मासु, सेल
                रोटी र मीठा खानाको भोज गर्छन्।
              </span>
              <span className="lang-en">
                Once the monsoon clears, skies fill with fighting kites while
                villages build towering linge ping bamboo swings — tradition
                says everyone should leave the ground at least once a year.
                Evenings belong to card games like Callbreak and Langur Burja,
                and relatives who have not met all year gather under one roof
                for feasts of goat curry and sel roti.
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
                दशैं नेपाल भ्रमणको उत्तम र चुनौतीपूर्ण दुवै समय हो। घर फर्किने
                महाप्रवाहले बस र आन्तरिक उडान साताहरू अगाडि नै सकिन्छन् —
                यातायात चाँडै बुक गर्नुहोस्। बैंक, सरकारी कार्यालय र धेरै पसल
                टीका दिने दिनजस्तै एक सातासम्म बन्द हुन सक्नाले नगद तयार
                राख्नुहोस्।
              </span>
              <span className="lang-en">
                Dashain is both the best and trickiest time to visit Nepal. The
                great homecoming sells out buses and domestic flights weeks
                ahead, so book transport early. Banks, government offices and
                many restaurants shut for up to a week around tika day — carry
                cash because ATMs run dry.
              </span>
            </p>
            <p>
              <span className="lang-ne">
                भक्तपुरको लाखे नाच, तलेजु र दक्षिणकाली मन्दिरका पूजा र सुनौला
                धानका बारीहरू अवलोकन गर्नुहोस्। मौसम उत्कृष्ट हुने यो बेला
                हिमाल दर्शन र ट्रेकिङका लागि पनि उत्तम छ। टीका-टिलकको अनुभव लिन
                गोरखा, बन्दीपुर वा पनौतीका होमस्टेमा बस्नुहोस्, र मिति पुष्टि
                गर्न{" "}
                <a href="/calendar/" className="underline">
                  पात्रो
                </a>{" "}
                हेर्नुहोस्।
              </span>
              <span className="lang-en">
                Witness masked Lakhey dances in Bhaktapur, offerings at Taleju
                and Dakshinkali temples, and golden paddy terraces under
                post-monsoon Himalayan views — superb trekking weather too. For
                a firsthand tika experience, stay at homestays in Gorkha,
                Bandipur or Panauti, and confirm exact dates on our{" "}
                <a href="/calendar/" className="underline">
                  calendar
                </a>
                .
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
                <span className="lang-ne">अर्को पर्व: तिहार</span>
                <span className="lang-en">Next festival: Tihar</span>
              </a>
              <a href="/month/ashwin/" className="underline">
                <span className="lang-ne">आश्विन महिना</span>
                <span className="lang-en">Month of Ashwin</span>
              </a>
              <a href="/calendar/" className="underline">
                <span className="lang-ne">आजको तिथि</span>
                <span className="lang-en">Today&apos;s Tithi</span>
              </a>
              <a href="/rashifal/" className="underline">
                <span className="lang-ne">राशिफल</span>
                <span className="lang-en">Rashifal</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
