"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  ShieldIcon,
  CrownIcon,
  CheckCircleIcon,
  HeartIcon,
  ExternalLinkIcon,
  TrophyIcon,
  BookOpenIcon,
  CodeIcon,
  HelpCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  AwardIcon,
  StarIcon,
} from "@/components/Icons";

interface SourceItem {
  name: string;
  scope: string;
  link: string;
}

interface SourceCategory {
  title: string;
  badge: string;
  description: string;
  sources: SourceItem[];
}

const DETAILED_SOURCES: SourceCategory[] = [
  {
    title: "Official Match Statistics & World Records",
    badge: "Governing Bodies",
    description: "Official competitive match data, international appearances, Champions League records, and verified career milestones.",
    sources: [
      {
        name: "UEFA Champions League Official Archives",
        scope: "All-time UCL goal tallies (140), knockout stage goals (67), final appearances, and season records (17 goals).",
        link: "https://www.uefa.com/uefachampionsleague/",
      },
      {
        name: "FIFA World Cup & International Records",
        scope: "Senior caps (216+), international goals (133+), and 5 World Cup scoring tournaments.",
        link: "https://www.fifa.com",
      },
      {
        name: "RSSSF (Rec.Sport.Soccer Statistics Foundation)",
        scope: "Historical comparative goalscoring analysis and verified competitive fixtures across senior football history.",
        link: "http://www.rsssf.com",
      },
      {
        name: "Transfermarkt Historical Databank",
        scope: "Match-by-match breakdowns, assists, minutes per goal ratio, and club transfer records.",
        link: "https://www.transfermarkt.com/cristiano-ronaldo/profil/spieler/8198",
      },
      {
        name: "Guinness World Records",
        scope: "All-Time Top International Goalscorer in Men's Football history recognition certificate.",
        link: "https://www.guinnessworldrecords.com/world-records/most-goals-scored-in-international-football-(soccer)-matches-by-an-individual-(male)",
      },
    ],
  },
  {
    title: "Philanthropy & Humanitarian Verification",
    badge: "Charitable Impact",
    description: "Verified donations, hospital equipment funding, humanitarian ambassadorships, and charitable auctions.",
    sources: [
      {
        name: "Save the Children Global Ambassador Portal",
        scope: "Official registry of ambassadorship (since 2013), disaster relief donations, and children's welfare campaigns.",
        link: "https://www.savethechildren.org/us/about-us/ambassadors/cristiano-ronaldo",
      },
      {
        name: "Reuters Health News / Lisbon Hospital Center",
        scope: "Documentation of the €1M+ contribution to equip three ICU wings in Lisbon and Porto during COVID-19.",
        link: "https://www.reuters.com/article/us-health-coronavirus-ronaldo-donation-idUSKBN21B2V0",
      },
      {
        name: "Real Madrid Foundation Charity Archives",
        scope: "Documentation of the auction of the 2011 European Golden Boot raising €1.5M for schools in Gaza.",
        link: "https://www.realmadrid.com/en/about-real-madrid/foundation",
      },
      {
        name: "Portuguese & International Blood Donor Registries",
        scope: "Public health initiatives highlighting regular scheduled blood and bone marrow donor habits.",
        link: "https://www.redcross.org",
      },
    ],
  },
  {
    title: "Civic Honors, Madeira & Museum Recognition",
    badge: "National Heritage",
    description: "State civilian orders, regional dedications, monuments, and official museum archives.",
    sources: [
      {
        name: "Chancelaria das Ordens Honoríficas (Presidency of Portugal)",
        scope: "Grand Officer of the Order of Prince Henry (2014) and Grand Officer of the Order of Merit (2016).",
        link: "https://www.presidencia.pt",
      },
      {
        name: "Regional Government of Madeira Official Gazette",
        scope: "Renaming of Aeroporto Internacional Cristiano Ronaldo in Santa Cruz, Madeira (March 2017).",
        link: "https://www.madeira.gov.pt",
      },
      {
        name: "Museu CR7 Official Portal (Funchal)",
        scope: "Collection inventory of 200+ trophies, Ballons d'Or, Golden Shoes, and the Funchal waterfront bronze monument.",
        link: "https://www.visitmadeira.com/en/what-to-do/culture/museums/museu-cr7",
      },
    ],
  },
  {
    title: "Criticism Documentation & Media Archives",
    badge: "Press Archives",
    description: "Primary journalistic archives documenting the original skeptical claims addressed on the pitch.",
    sources: [
      {
        name: "BBC Sport / The Guardian Football Archives",
        scope: "Early Premier League skepticism regarding step-overs and decision-making (2003–2005).",
        link: "https://www.theguardian.com/football",
      },
      {
        name: "Marca & UEFA Match Previews (April 2016)",
        scope: "Headlines surrounding the Wolfsburg 2-0 first-leg lead prior to the 3-0 Bernabéu comeback.",
        link: "https://www.uefa.com",
      },
      {
        name: "Sky Sports & Corriere dello Sport (2018)",
        scope: "Pundit analysis questioning adaptability to defensive Serie A at age 33 ahead of 101 goals in 134 games.",
        link: "https://www.skysports.com/football",
      },
    ],
  },
];

const FAQS = [
  {
    question: "Is this website affiliated with or endorsed by Cristiano Ronaldo?",
    answer:
      "No. 'CR7 – The GOAT Journey' is a strictly non-commercial, independent educational fan tribute platform created by admirers of football history. It has no formal affiliation, partnership, or sponsorship with Cristiano Ronaldo, Polaris Sports, Gestifute, Al Nassr FC, Real Madrid CF, Manchester United FC, Juventus FC, or the Portuguese Football Federation (FPF).",
  },
  {
    question: "How are the statistics and goal counts verified?",
    answer:
      "We adhere to the strict historical standards set by FIFA, UEFA, and RSSSF (Rec.Sport.Soccer Statistics Foundation). Only official senior competitive matches for recognized first teams and senior national teams are counted. Friendly matches, youth fixtures, and exhibition matches are excluded from all official tallies.",
  },
  {
    question: "Why are match highlights embedded via YouTube rather than hosted locally?",
    answer:
      "All broadcast match footage is copyrighted by UEFA, FIFA, club networks, and broadcast licensees. In strict accordance with international copyright laws and YouTube's Developer Terms of Service, all videos on this site are embedded directly through YouTube's official player. No proprietary video files are hosted on our servers, ensuring all views and royalties route directly to the legitimate rights holders.",
  },
  {
    question: "Why are there no advertisements or merchandise on the website?",
    answer:
      "To preserve absolute editorial integrity, maintain fair use standards, and respect intellectual property rights, this project is 100% ad-free and sells no products, merchandise, or premium subscriptions. It exists purely as an open-access digital tribute to sporting excellence.",
  },
  {
    question: "What is the editorial policy regarding personal and family content?",
    answer:
      "Our 'Family & Roots' section is strictly focused on publicly shared, verified stories of parental sacrifice, love, and inspiration—specifically his mother Dolores Aveiro's resilience and his late father José Dinis Aveiro's guidance. We reject sensationalism, gossip, and invasive tabloid rumors.",
  },
];

const ARCHITECTURE_FEATURES = [
  {
    title: "Next.js 16 App Router",
    desc: "Built on modern React 19 Server & Client Components with static site generation for instant page loads.",
    icon: CodeIcon,
  },
  {
    title: "Hydration Defense Protocol",
    desc: "Engineered with client-side MutationObservers to neutralize browser-extension DOM mutations (such as VPN injections).",
    icon: ShieldIcon,
  },
  {
    title: "100% Mobile Responsive",
    desc: "Carefully designed for high-density smartphone screens, tablets, and 4K desktop displays with Tailwind CSS.",
    icon: SparklesIcon,
  },
  {
    title: "Zero Tracking & Zero Bloat",
    desc: "No third-party advertising trackers, no invasive telemetry scripts, and no cookie popups.",
    icon: CheckCircleIcon,
  },
];

export default function AboutPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-b from-amber-500/15 via-rose-500/10 to-transparent blur-3xl" />
      </div>

      {/* Header */}
      <SectionHeader
        badge="Integrity & Attribution"
        badgeColor="text-amber-400 bg-amber-500/15 border-amber-500/30"
        title="About The Project &"
        highlightText="Verified Sources"
        subtitle="This storytelling archive was built on a singular conviction: that true football greatness should be proven through rigorous data, primary verified sources, and respectful storytelling."
      />

      {/* =========================================================================
          1. THE MISSION & CORE ETHOS
         ========================================================================= */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-300">
            <CrownIcon className="w-4 h-4 text-amber-400" />
            <span>The MVP Vision</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            An Uncompromising Story of Athletic Immortality
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Our goal is simple: allow any visitor—whether a diehard supporter, a neutral observer, or a rival fan—to completely understand the magnitude of Cristiano Ronaldo&apos;s journey. From an impoverished neighborhood in Santo António, Madeira, to becoming the most prolific official goalscorer in the history of association football.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            We do not ask visitors to take claims on faith. Every goal tally, trophy win, comeback match, and charitable initiative presented across this site is backed by verifiable documentation from international governing bodies and reputable archives.
          </p>
        </div>

        {/* 4 Pillars of Integrity */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-zinc-800/80">
          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
              Principle 01
            </span>
            <h4 className="text-sm font-bold text-white mb-1">Primary Data Only</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every statistic cross-verified with UEFA, FIFA, and RSSSF official registers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-wider block mb-1">
              Principle 02
            </span>
            <h4 className="text-sm font-bold text-white mb-1">Respectful Family Tone</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Focus strictly on verified family sacrifice and love. Zero tabloid gossip.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
              Principle 03
            </span>
            <h4 className="text-sm font-bold text-white mb-1">Copyright Compliance</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Official YouTube embedding only. No pirated or locally re-hosted video files.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-sky-400 font-bold text-xs uppercase tracking-wider block mb-1">
              Principle 04
            </span>
            <h4 className="text-sm font-bold text-white mb-1">100% Non-Commercial</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              No advertisements, affiliate links, merchandising, or paywalls. Ever.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. LEGAL & DISCLAIMER CALLOUT
         ========================================================================= */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-amber-500/30 relative overflow-hidden shadow-xl">
        <div className="flex items-center gap-3 text-amber-400 mb-4">
          <ShieldIcon className="w-7 h-7 flex-shrink-0" />
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Unofficial Fan Tribute Disclaimer
          </h2>
        </div>

        <div className="space-y-3.5 text-sm text-zinc-300 leading-relaxed">
          <p>
            <strong>CR7 – The GOAT Journey</strong> is an independent, non-commercial educational fan tribute created solely to celebrate the athletic career and legacy of Cristiano Ronaldo dos Santos Aveiro.
          </p>
          <p>
            This website is <strong>not authorized, endorsed, sponsored, or affiliated with Cristiano Ronaldo</strong>, Gestifute, Polaris Sports, the Portuguese Football Federation (FPF), UEFA, FIFA, Manchester United FC, Real Madrid CF, Juventus FC, or Al Nassr FC. All trademarks, service marks, team names, and brand logos remain the property of their respective owners.
          </p>
          <p>
            All video footage featured on this platform is streamed via official YouTube iframe embeds under YouTube&apos;s Terms of Service and developer guidelines. No proprietary video content is hosted on or distributed from our servers.
          </p>
        </div>
      </div>

      {/* =========================================================================
          3. COMPREHENSIVE SOURCE DIRECTORY
         ========================================================================= */}
      <div className="space-y-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
            Audit Trail
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Primary Documentation & Sources
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
            Below is the complete bibliographic index of institutions, news agencies, and official statistical databases referenced throughout this project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DETAILED_SOURCES.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-800 text-amber-300 border border-zinc-700">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="space-y-3.5 pt-4 border-t border-zinc-800/80">
                  {category.sources.map((src) => (
                    <div key={src.name} className="group">
                      <div className="flex items-start justify-between gap-2">
                        <a
                          href={src.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-amber-400 transition-colors flex items-center gap-1.5"
                        >
                          <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{src.name}</span>
                          <ExternalLinkIcon className="w-3 h-3 text-zinc-500 group-hover:text-amber-400 flex-shrink-0" />
                        </a>
                      </div>
                      <p className="text-[11px] text-zinc-400 pl-5 mt-1 leading-normal">
                        {src.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          4. TECHNICAL ARCHITECTURE & PERFORMANCE
         ========================================================================= */}
      <div className="space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-2">
            Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Architecture & Design Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHITECTURE_FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          5. FREQUENTLY ASKED QUESTIONS (Interactive Accordion)
         ========================================================================= */}
      <div className="space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/90 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-amber-400 flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          6. QUICK NAVIGATION PORTAL
         ========================================================================= */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Ready to Explore the Archive?
        </h3>
        <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-8">
          Delve into the chronological career timeline, explore the 5 Champions League crowns, or see how he answered every critic on the pitch.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/journey"
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-zinc-950 transition-colors shadow-md"
          >
            Career Timeline
          </Link>
          <Link
            href="/champions-league"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Mr. Champions League
          </Link>
          <Link
            href="/critics-vs-answers"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Critics vs Answers
          </Link>
          <Link
            href="/stats"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Stats & Records
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Home
          </Link>
        </div>
      </div>
    </div>
  );
}
