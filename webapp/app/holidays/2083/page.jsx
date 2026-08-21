import React from "react";
import { Navbar9 } from "@/components/Navbar9";
import { Footer4 } from "@/components/Footer4";

export const metadata = {
  title: "सार्वजनिक बिदा २०८३ — Public Holidays 2083 | Bikram Sambat",
  description:
    "Complete list of public holidays and major festivals in Bikram Sambat 2083 (April 2026 – April 2027), including Dashain, Tihar, Teej, Buddha Jayanti, Losar and Holi with approximate Gregorian dates.",
  keywords: [
    "nepali public holidays 2083",
    "सार्वजनिक बिदा २०८३",
    "bikram sambat 2083 holidays",
    "nepal holidays 2026",
    "nepal holidays 2027",
    "dashain 2083",
    "tihar 2083",
    "nepali festival calendar",
    "nepal panchanga nirnayak samiti",
    "nepali calendar holidays",
  ],
  alternates: {
    canonical:
      "https://nepalicalendar.kebinmaharjan.com.np/holidays/2083/",
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
      name: "Holidays",
      item: "https://nepalicalendar.kebinmaharjan.com.np/holidays/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "2083",
      item: "https://nepalicalendar.kebinmaharjan.com.np/holidays/2083/",
    },
  ],
};

const holidays = [
  {
    bs: "बैशाख १",
    ad: "Apr 14, 2026",
    name: "नयाँ वर्ष (Naya Barsha / New Year)",
    desc: "Bikram Sambat 2083 begins. Families exchange greetings, visit temples and open fresh ledgers to welcome the Nepali New Year.",
  },
  {
    bs: "बैशाख १०",
    ad: "Apr 23, 2026",
    name: "बुद्ध जयन्ती (Buddha Jayanti)",
    desc: "Full moon day honoring the birth, enlightenment and mahaparinirvana of Gautam Buddha at Lumbini, Swayambhu and Boudhanath.",
  },
  {
    bs: "जेठ १५",
    ad: "May 29, 2026",
    name: "रोपाइं दिवस (Ropain Diwas)",
    desc: "National Paddy Day. Farmers plant rice seedlings together, sing asare songs and feast on dahi-chiura to celebrate monsoon agriculture.",
  },
  {
    bs: "साउन २",
    ad: "Jul 18, 2026",
    name: "रक्षा बन्धन (Raksha Bandhan)",
    desc: "Sisters tie protective threads and mauli on brothers' wrists, and priests bless sacred yellow threads for safety and long life.",
  },
  {
    bs: "साउन ८",
    ad: "Jul 24, 2026",
    name: "नाग पञ्चमी (Nag Panchami)",
    desc: "Pictures of serpent deities are pasted above doorways and worshipped with milk to seek protection from snake bites and misfortune.",
  },
  {
    bs: "साउन १५",
    ad: "Jul 31, 2026",
    name: "जनै पूर्णिमा (Janai Purnima)",
    desc: "Tagadhari Hindus change their janai (sacred thread), while devotees wear raksha sutra and Kwati soup is prepared with nine sprouted beans.",
  },
  {
    bs: "साउन ३१",
    ad: "Aug 16, 2026",
    name: "गाईजात्रा (Gai Jatra)",
    desc: "The festival of cows. Processions through the Kathmandu Valley remember departed family members, with satire, humor and costumes.",
  },
  {
    bs: "भदौ ८",
    ad: "Aug 25, 2026",
    name: "हरितालिका तीज (Hartalika Teej)",
    desc: "Women fast, dress in red saris, dance and sing, praying to Lord Shiva and Parvati for marital bliss and family prosperity.",
  },
  {
    bs: "भदौ १८",
    ad: "Sep 4, 2026",
    name: "कुशे औंसी (Kushe Aunsi / Father's Day)",
    desc: "Nepali Father's Day. Children honor fathers with sweets and gifts, and many perform tarpan shraddha for departed parents along holy rivers.",
  },
  {
    bs: "असोज ७–२२",
    ad: "Sep 24 – Oct 9, 2026",
    name: "दशैं (Dashain)",
    desc: "The greatest Hindu festival spanning fifteen days, celebrating the victory of Goddess Durga over the demon Mahishasura.",
  },
  {
    bs: "असोज ७",
    ad: "Sep 24, 2026",
    name: "घटस्थापना (Ghatasthapana)",
    desc: "Dashain opens with the sowing of jamara barley seeds in sand kept dark, while Durga is invoked in a kalash for nine nights.",
  },
  {
    bs: "असोज १३",
    ad: "Sep 30, 2026",
    name: "फूलपाती (Fulpati)",
    desc: "Sacred flowers, plants and the kalash from Gorkha are ceremonially carried into Hanuman Dhoka, marking the seventh day of Dashain.",
  },
  {
    bs: "असोज १४",
    ad: "Oct 1, 2026",
    name: "महाअष्टमी (Maha Ashtami)",
    desc: "The eighth day features kale (buffalo) offerings to Goddess Kali and the night-long recitation of Durga chants.",
  },
  {
    bs: "कात्तिक १",
    ad: "Oct 18, 2026",
    name: "कुमार श्रावणी (Kumar Shrawani)",
    desc: "Newar community boys receive the kumar (sacred thread) ceremony blessings, renewing vows of discipline and learning.",
  },
  {
    bs: "कात्तिक २",
    ad: "Oct 19, 2026",
    name: "महानवमी (Mahanavami)",
    desc: "The ninth day of Dashain honors tools, vehicles and machinery as symbols of Vishwakarma, with tales and puja performed on them.",
  },
  {
    bs: "कात्तिक ३",
    ad: "Oct 20, 2026",
    name: "विजया दशमी (Vijaya Dashami / Tika)",
    desc: "Elders apply red tika and jamara on foreheads of younger relatives, blessing them with prosperity as families reunite across the country.",
  },
  {
    bs: "कात्तिक ११",
    ad: "Oct 28, 2026",
    name: "इन्द्रजात्रा (Indra Jatra)",
    desc: "Kathmandu celebrates the rain god Indra with chariot processions of Kumari, Lakhey dances and the raising of the lingo pole.",
  },
  {
    bs: "कात्तिक १२–१५",
    ad: "Oct 29 – Nov 1, 2026",
    name: "तिहार (Tihar / Deepawali)",
    desc: "Five days of lights honoring crows, dogs, cows and oxen, culminating in the bond between brothers and sisters.",
  },
  {
    bs: "कात्तिक १२",
    ad: "Oct 29, 2026",
    name: "काग तिहार (Kaag Tihar)",
    desc: "The first day of Tihar, when crows as messengers of death are offered rice, sweets and light to ward off grief.",
  },
  {
    bs: "कात्तिक १३",
    ad: "Oct 30, 2026",
    name: "कुकुर तिहार (Kukur Tihar)",
    desc: "Dogs are garlanded with marigolds, marked with tika and fed delicacies in gratitude for their loyalty and guardianship.",
  },
  {
    bs: "कात्तिक १४",
    ad: "Oct 31, 2026",
    name: "लक्ष्मी पूजा (Laxmi Puja)",
    desc: "Homes are lit with diyos and decorated rangoli to welcome Goddess Laxmi, while girls sing bhailo door to door through the night.",
  },
  {
    bs: "कात्तिक १५",
    ad: "Nov 1, 2026",
    name: "गोवर्धन पूजा / म्ह पूजा (Govardhan Puja / Mha Puja)",
    desc: "Oxen are honored and Govardhan hills of cow dung worshipped; Newars celebrate Mha Puja, blessing the body and welcoming the Nepal Sambat new year.",
  },
  {
    bs: "कात्तिक १६",
    ad: "Nov 2, 2026",
    name: "भाइटीका (Bhai Tika)",
    desc: "Sisters apply seven-color tika on brothers' foreheads, seal the bond with okhar walnuts and pray to Yamaraj for their long life.",
  },
  {
    bs: "कात्तिक २१",
    ad: "Nov 7, 2026",
    name: "छठ पर्व (Chhath Parva)",
    desc: "Devotees, especially in the Tarai, fast and offer arghya to the setting and rising Sun at riverbanks seeking health and prosperity.",
  },
  {
    bs: "मंसिर १०",
    ad: "Nov 26, 2026",
    name: "योमरि पुन्ही (Yomari Punhi)",
    desc: "Newar full moon festival where steamed yomari dumplings of rice flour filled with chaku are offered to Annapurna and shared among family.",
  },
  {
    bs: "पुष १",
    ad: "Dec 16, 2026",
    name: "तमु ल्होसार (Tamu Losar)",
    desc: "Gurung community welcomes its new year with traditional dress, rodhi songs, dances and feasts across villages and cities.",
  },
  {
    bs: "माघ १",
    ad: "Jan 15, 2027",
    name: "माघे संक्रान्ति (Maghe Sankranti)",
    desc: "The Sun enters Makar rashi. Families eat yam, ghee, chaku and sweet potato, and take holy dips at Devghat, Dolalghat and other confluences.",
  },
  {
    bs: "फागुन ११",
    ad: "Feb 23, 2027",
    name: "शिवरात्रि (Maha Shivaratri)",
    desc: "Thousands of sadhus and devotees throng Pashupatinath through the night, lighting fires and offering bilva leaves to Lord Shiva.",
  },
  {
    bs: "फागुन १६",
    ad: "Feb 28, 2027",
    name: "गोविन्दा भगवान् (Govinda Bhagwan)",
    desc: "Devotees worship Lord Govinda with devotional singing and offerings, seeking blessings of harmony and abundance.",
  },
  {
    bs: "फागुन २३",
    ad: "Mar 7, 2027",
    name: "फागु पूर्णिमा (Fagu Purnima / Holi)",
    desc: "The festival of colors. People drench each other with abir and water balloons, celebrating the victory of devotion of Prahlad over Holika.",
  },
  {
    bs: "चैत ८",
    ad: "Mar 22, 2027",
    name: "राम नवमी (Ram Navami)",
    desc: "Birth anniversary of Lord Ram, observed with readings of the Ramayana and processions at Ram Mandirs nationwide.",
  },
  {
    bs: "चैत १४",
    ad: "Mar 28, 2027",
    name: "गोरेटो दिवस (Goreto Diwas)",
    desc: "Commemorating the historic foot trails (goreto) that connected Nepal's hills and plains, honoring traders, porters and early travelers.",
  },
  {
    bs: "चैत ३०",
    ad: "Apr 13, 2027",
    name: "चैत्र दशैं (Chaitra Dashain)",
    desc: "A nine-night celebration of Goddess Durga in Chaitra, concluding with ram worship and tika on the final day before the new year.",
  },
];

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar9 />
      <main>
        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <p className="mb-3 font-semibold md:mb-4">
              <span className="lang-ne">
                विक्रम संवत् २०८३ · अप्रिल २०२६ – अप्रिल २०२७
              </span>
              <span className="lang-en">
                Bikram Sambat 2083 · April 2026 – April 2027
              </span>
            </p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              <span className="lang-ne">सार्वजनिक बिदा २०८३</span>
              <span className="lang-en">Public Holidays 2083</span>
            </h1>
            <p className="max-w-3xl md:text-md">
              <span className="lang-ne">
                विक्रम संवत् २०८३ बैशाखको नयाँ वर्षदेखि फागुनको होलीसम्म
                रङ्गीन चाडपर्व र आधिकारिक सार्वजनिक बिदाले भरिपूर्ण छ। यस
                पूरा बिदा सूचीलाई प्रयोग गरेर{" "}
                <a href="/calendar/" className="underline">
                  नेपाली पात्रो
                </a>{" "}
                वर्षभरि यात्रा, पारिवारिक भेला र व्यवसायिक तालिका योजना
                बनाउनुहोस्।
              </span>
              <span className="lang-en">
                Bikram Sambat 2083 is packed with vibrant festivals and official
                public holidays, from the New Year celebrations of Baisakh to the
                colors of Holi in Falgun. Use this complete holiday list to plan
                travel, family gatherings and business schedules throughout the{" "}
                <a href="/calendar/" className="underline">
                  Nepali calendar
                </a>{" "}
                year.
              </span>
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              <span className="lang-ne">
                प्रमुख सार्वजनिक बिदा तथा चाडपर्वहरू २०८३
              </span>
              <span className="lang-en">
                Major Public Holidays &amp; Festivals 2083
              </span>
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border-primary">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border-primary bg-surface-secondary">
                    <th className="px-4 py-3 font-semibold">
                      <span className="lang-ne">मिति (वि.सं.)</span>
                      <span className="lang-en">Date (BS)</span>
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      <span className="lang-ne">मिति (सन्, अनुमानित)</span>
                      <span className="lang-en">Date (AD approx)</span>
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      <span className="lang-ne">बिदा</span>
                      <span className="lang-en">Holiday</span>
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      <span className="lang-ne">विवरण</span>
                      <span className="lang-en">Description</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {holidays.map((h) => (
                    <tr
                      key={h.bs}
                      className="border-b border-border-primary last:border-b-0"
                    >
                      <td className="whitespace-nowrap px-4 py-3 font-medium">
                        {h.bs}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">{h.ad}</td>
                      <td className="px-4 py-3 font-semibold">{h.name}</td>
                      <td className="px-4 py-3">{h.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-lg border border-border-primary p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                <span className="lang-ne">महत्वपूर्ण जानकारी</span>
                <span className="lang-en">Important Note</span>
              </h2>
              <p>
                <span className="lang-ne">
                  यी बिदाहरूको सही मिति{" "}
                  <strong>
                    नेपाल पञ्चाङ्ग निर्णायक समिति (Nepal Panchanga Nirnayak
                    Samiti)
                  </strong>{" "}
                  को अन्तिम घोषणाअनुसार एक-दुई दिन फरक पर्न सक्छ। तीज, जनै
                  पूर्णिमा, तिहार र होलीजस्ता चान्द्र पर्वहरू सटीक तिथि
                  समयमा निर्भर हुने भएकाले यात्रा योजना बनाउनुअघि सधैं
                  आधिकारिक रूपमा प्रकाशित पञ्चाङ्ग पुष्टि गर्नुहोस्। सही
                  वि.सं. → सन् रूपान्तरणका लागि हाम्रो{" "}
                  <a href="/date-converter/" className="underline">
                    मिति परिवर्तक
                  </a>{" "}
                  हेर्नुहोस्।
                </span>
                <span className="lang-en">
                  The exact dates of these holidays may vary by one or two days
                  depending on the final announcements of the{" "}
                  <strong>
                    Nepal Panchanga Nirnayak Samiti (नेपाल पञ्चाङ्ग निर्णायक
                    समिति)
                  </strong>
                  . Lunar festivals such as Teej, Janai Purnima, Tihar and Holi
                  depend on precise tithi timings, so always confirm with the
                  officially published panchang before making travel plans.
                  Check our{" "}
                  <a href="/date-converter/" className="underline">
                    date converter
                  </a>{" "}
                  for accurate BS to AD conversions.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <span className="lang-ne">सम्बन्धित पृष्ठहरू</span>
              <span className="lang-en">Explore Related Pages</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="/calendar/" className="underline">
                <span className="lang-ne">पूरा पात्रो २०८३</span>
                <span className="lang-en">Full Calendar 2083</span>
              </a>
              <a href="/month/baisakh/" className="underline">
                <span className="lang-ne">बैशाख महिना</span>
                <span className="lang-en">Baisakh Month</span>
              </a>
              <a href="/month/kartik/" className="underline">
                <span className="lang-ne">कात्तिक महिना (तिहार)</span>
                <span className="lang-en">Kartik Month (Tihar)</span>
              </a>
              <a href="/month/ashwin/" className="underline">
                <span className="lang-ne">असोज महिना (दशैं)</span>
                <span className="lang-en">Ashwin Month (Dashain)</span>
              </a>
              <a href="/rashifal/" className="underline">
                <span className="lang-ne">राशिफल</span>
                <span className="lang-en">Rashifal</span>
              </a>
              <a href="/date-converter/" className="underline">
                <span className="lang-ne">मिति परिवर्तक</span>
                <span className="lang-en">Date Converter</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
    </div>
  );
}
