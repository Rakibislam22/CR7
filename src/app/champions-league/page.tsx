import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  TrophyIcon,
  CrownIcon,
  StarIcon,
  FlameIcon,
  ArrowRightIcon,
  SparklesIcon,
  PlayIcon,
} from "@/components/Icons";

const UCL_TITLES = [
  {
    year: "2008",
    club: "Manchester United",
    opponent: "Chelsea (1-1, 6-5 pens)",
    venue: "Luzhniki Stadium, Moscow",
    contribution: "Towering header goal in the 26th minute; Tournament Top Scorer with 8 goals.",
    color: "from-red-600 to-red-950",
  },
  {
    year: "2014",
    club: "Real Madrid",
    opponent: "Atlético Madrid (4-1 AET)",
    venue: "Estádio da Luz, Lisbon",
    contribution: "All-time single campaign record: 17 goals in 11 matches; scored in the final to seal 'La Décima'.",
    color: "from-sky-500 to-indigo-950",
  },
  {
    year: "2016",
    club: "Real Madrid",
    opponent: "Atlético Madrid (1-1, 5-3 pens)",
    venue: "San Siro, Milan",
    contribution: "16 goals in tournament; carried Madrid past Wolfsburg with a hat-trick; scored winning penalty in shootout.",
    color: "from-amber-500 to-zinc-950",
  },
  {
    year: "2017",
    club: "Real Madrid",
    opponent: "Juventus (4-1)",
    venue: "Millennium Stadium, Cardiff",
    contribution: "12 goals (10 in knockout stages); scored a brace against Gianluigi Buffon in the final; Man of the Match.",
    color: "from-emerald-500 to-zinc-950",
  },
  {
    year: "2018",
    club: "Real Madrid",
    opponent: "Liverpool (3-1)",
    venue: "NSC Olimpiyskiy, Kyiv",
    contribution: "Tournament Top Scorer with 15 goals; iconic bicycle kick in Turin; completed historic modern three-peat.",
    color: "from-rose-600 to-zinc-950",
  },
];

const UCL_RECORDS = [
  { label: "All-Time Top Scorer", value: "140", subtext: "Goals in 183 appearances" },
  { label: "Knockout Stage Goals", value: "67", subtext: "Far ahead of any player in history" },
  { label: "Record in a Single Season", value: "17", subtext: "Set in 2013-14 (Still unbroken)" },
  { label: "Consecutive Games Scored In", value: "11", subtext: "Scored in every group match in 2017-18" },
  { label: "UCL Final Goals", value: "4", subtext: "Only player to score in 3 different finals" },
  { label: "UCL Trophies Lifted", value: "5x", subtext: "Joint record in modern Champions League era" },
];

const ICONIC_UCL_MOMENTS = [
  {
    title: "The Bicycle Kick in Turin",
    match: "Juventus vs Real Madrid (0-3)",
    date: "April 3, 2018",
    description:
      "A moment suspended in sporting immortality. Ronaldo leaped 2.38 meters high in the air, connecting with an overhead bicycle kick of pinpoint geometric perfection past Gianluigi Buffon. The stunned Juventus fans rose in a spontaneous standing ovation.",
    badge: "UCL Goal of the Decade",
  },
  {
    title: "The Wolfsburg Miracle Hat-Trick",
    match: "Real Madrid vs VfL Wolfsburg (3-0)",
    date: "April 12, 2016",
    description:
      "Facing a 2-0 first-leg deficit, Ronaldo promised the Bernabéu faithful a magical night. He scored in the 15th, 17th, and curled in a stunning 77th-minute free-kick through the wall to complete one of the greatest solo rescues in European history.",
    badge: "Remontada Hat-Trick",
  },
  {
    title: "Overturning Simeone's Atletico for Juventus",
    match: "Juventus vs Atlético Madrid (3-0)",
    date: "March 12, 2019",
    description:
      "Down 2-0 from Madrid against Europe's stingiest defense, Ronaldo promised his family a hat-trick. He delivered two towering aerial headers and an 86th-minute penalty under immense pressure to eliminate Atlético 3-2 on aggregate.",
    badge: "The Prophecy Hat-Trick",
  },
  {
    title: "The 10-Goal Knockout Masterclass (2017)",
    match: "Bayern, Atlético & Juventus",
    date: "April - June 2017",
    description:
      "The most devastating individual run in European knockout history: 5 goals against Bayern Munich over two legs, 3 goals against Atlético Madrid in the semi-final, and 2 goals against Juventus in the final. 10 goals against Europe's elite in 5 matches.",
    badge: "Knockout Decimation",
  },
];

export default function ChampionsLeaguePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Header */}
      <SectionHeader
        badge="European Royalty"
        badgeColor="text-amber-300 bg-amber-500/15 border-amber-500/30"
        title="Mr. Champions League:"
        highlightText="The Undisputed King"
        subtitle="No competition defines Cristiano Ronaldo's supernatural mentality more than the UEFA Champions League. Here is the immortal legacy of European football's ultimate decider."
      />

      {/* Record Board Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {UCL_RECORDS.map((rec) => (
          <div
            key={rec.label}
            className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 text-center flex flex-col justify-center items-center shadow-lg"
          >
            <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 font-mono">
              {rec.value}
            </span>
            <span className="text-xs sm:text-sm font-bold text-white mt-1.5">
              {rec.label}
            </span>
            <span className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
              {rec.subtext}
            </span>
          </div>
        ))}
      </div>

      {/* The 5 Titles */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <TrophyIcon className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            The 5 Champions League Crowns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UCL_TITLES.map((title) => (
            <div
              key={title.year}
              className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-amber-400 font-mono">
                    {title.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300">
                    {title.club}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Final: {title.opponent}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Venue: {title.venue}
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed">
                  {title.contribution}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <StarIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Champions of Europe</span>
              </div>
            </div>
          ))}

          {/* Legacy Summary Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-zinc-900 to-rose-600/15 border border-amber-500/30 flex flex-col justify-center items-center text-center">
            <CrownIcon className="w-12 h-12 text-amber-400 mb-3" />
            <h3 className="text-xl font-bold text-white">The Three-Peat Legend</h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              In 2016, 2017, and 2018, Cristiano Ronaldo led Real Madrid to three consecutive Champions League triumphs—a feat widely considered impossible in the modern era of European football.
            </p>
          </div>
        </div>
      </div>

      {/* Iconic Moments */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FlameIcon className="w-6 h-6 text-rose-500" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Iconic Champions League Nights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ICONIC_UCL_MOMENTS.map((moment) => (
            <div
              key={moment.title}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 border border-rose-500/30 text-rose-300">
                  {moment.badge}
                </span>
                <span className="text-xs text-zinc-400">{moment.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {moment.title}
              </h3>
              <p className="text-xs font-medium text-amber-400 mb-3">
                {moment.match}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {moment.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/journey"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white"
        >
          <span>← Back to Timeline</span>
        </Link>
        <Link
          href="/critics-vs-answers"
          className="flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
        >
          <span>See How He Answered Every Critic →</span>
        </Link>
      </div>
    </div>
  );
}

