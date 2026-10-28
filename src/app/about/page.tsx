import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  ShieldIcon,
  CrownIcon,
  CheckCircleIcon,
  HeartIcon,
  ExternalLinkIcon,
} from "@/components/Icons";

const SOURCE_CATEGORIES = [
  {
    title: "Match Statistics & Official Records",
    sources: [
      { name: "UEFA Champions League Official Archives", link: "https://www.uefa.com/uefachampionsleague/" },
      { name: "FIFA World Cup & International Records", link: "https://www.fifa.com" },
      { name: "Transfermarkt Career Databank", link: "https://www.transfermarkt.com" },
      { name: "RSSSF (Rec.Sport.Soccer Statistics Foundation)", link: "http://www.rsssf.com" },
      { name: "Guinness World Records (Men's International Top Goalscorer)", link: "https://www.guinnessworldrecords.com" },
    ],
  },
  {
    title: "Charity & Philanthropy Verification",
    sources: [
      { name: "Save the Children Ambassador Records", link: "https://www.savethechildren.org" },
      { name: "Reuters Health News (Lisbon & Porto Hospital ICU Donation)", link: "https://www.reuters.com" },
      { name: "Real Madrid Foundation Charity Archives", link: "https://www.realmadrid.com" },
      { name: "Portuguese Red Cross Blood Donation Campaigns", link: "https://www.redcross.org" },
    ],
  },
  {
    title: "Official Tributes & Madeira Recognition",
    sources: [
      { name: "Museu CR7 Official Portal, Funchal, Madeira", link: "https://www.visitmadeira.com" },
      { name: "Government of Madeira (Cristiano Ronaldo International Airport Naming)", link: "https://www.madeira.gov.pt" },
      { name: "Chancelaria das Ordens Honoríficas (Presidency of the Portuguese Republic)", link: "https://www.presidencia.pt" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* Header */}
      <SectionHeader
        badge="Integrity & Attribution"
        badgeColor="text-zinc-300 bg-zinc-800 border-zinc-700"
        title="About the Project &"
        highlightText="Verified Sources"
        subtitle="This project was founded on a singular commitment: that football greatness should be proven through rigorous data, verified historical facts, and respectful storytelling."
      />

      {/* Legal Disclaimer Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 relative overflow-hidden">
        <div className="flex items-center gap-3 text-amber-400 mb-4">
          <ShieldIcon className="w-6 h-6" />
          <h2 className="text-xl font-bold text-white">
            Unofficial Fan Tribute Disclaimer
          </h2>
        </div>
        <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
          <p>
            <strong>CR7 – The GOAT Journey</strong> is an independent, non-commercial educational fan tribute website created to celebrate the sporting career and legacy of Cristiano Ronaldo dos Santos Aveiro.
          </p>
          <p>
            This website is <strong>not affiliated with, endorsed by, or sponsored by Cristiano Ronaldo</strong>, Polaris Sports, Gestifute, Manchester United FC, Real Madrid CF, Juventus FC, Al Nassr FC, or the Portuguese Football Federation (FPF).
          </p>
          <p>
            All video clips are embedded via YouTube&apos;s official iframe player in compliance with the YouTube Developer Terms of Service and remain the exclusive intellectual property of their respective copyright holders (including UEFA, FIFA, club television networks, and broadcasters). No video files are hosted on this server.
          </p>
          <p>
            This website does not accept advertisements, sell merchandise, collect user data, or conduct commercial activities.
          </p>
        </div>
      </div>

      {/* Sources Attribution */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">
            Verified Data Sources
          </h2>
          <p className="text-sm text-zinc-400">
            Every statistic, criticism claim, and charitable donation cited on this platform references credible primary and secondary documentation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOURCE_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-amber-400 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3 text-xs text-zinc-300">
                  {category.sources.map((src) => (
                    <li key={src.name} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <a
                        href={src.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 hover:underline transition-colors"
                      >
                        {src.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Standards */}
      <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 space-y-4">
        <h3 className="text-lg font-bold text-white">
          Editorial & Family Policy
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          As stated in our MVP specification, personal and family narratives are kept strictly respectful, positive, and focused entirely on publicly verified moments of love, sacrifice, and inspiration. We reject sensationalism, gossip, and unverified rumors.
        </p>
      </div>

      {/* Return home link */}
      <div className="text-center pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
        >
          <span>← Return to Home Experience</span>
        </Link>
      </div>
    </div>
  );
}

