import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  HEADLINE_STATS,
  CLUB_RECORDS,
  WORLD_RECORDS,
  GOAL_TYPES,
} from "@/data/stats";
import {
  TrophyIcon,
  CrownIcon,
  BallIcon,
  AwardIcon,
  ShieldIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@/components/Icons";

export default function StatsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Header */}
      <SectionHeader
        badge="Data & Supremacy"
        title="Official Career Statistics &"
        highlightText="World Records"
        subtitle="Every goal verified by FIFA, UEFA, and RSSSF. The numbers behind the most complete goalscoring machine the world of sports has ever witnessed."
      />

      {/* Headline Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {HEADLINE_STATS.map((stat) => (
          <div
            key={stat.label}
            className={`p-5 rounded-2xl flex flex-col justify-center text-center shadow-lg transition-all ${stat.highlight
                ? "bg-gradient-to-b from-amber-500/15 via-zinc-900 to-zinc-950 border border-amber-500/35"
                : "bg-zinc-900/70 border border-zinc-800"
              }`}
          >
            <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 font-mono">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-bold text-white mt-2">
              {stat.label}
            </span>
            <span className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
              {stat.subtext}
            </span>
          </div>
        ))}
      </div>

      {/* Goal Anatomy Distribution */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BallIcon className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Anatomy of 900+ Official Goals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOAL_TYPES.map((type) => (
            <div
              key={type.label}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-white">
                    {type.label}
                  </span>
                  <span className="text-xl font-mono font-black text-amber-400">
                    {type.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                    style={{ width: `${type.percentage}%` }}
                  />
                </div>

                <p className="text-sm text-zinc-400 font-medium">
                  Tally: <span className="text-white font-bold">{type.count}</span>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-500">
                Verified across all senior official competitive fixtures.
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Club by Club Breakdown */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <TrophyIcon className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Performance Breakdown by Club & Country
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUB_RECORDS.map((record) => (
            <div
              key={record.club}
              className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-amber-400">
                    {record.period}
                  </span>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
                    {record.trophies} {record.trophies === 1 ? "Trophy" : "Trophies"}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-4">
                  {record.club}
                </h3>

                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-center mb-4">
                  <div>
                    <span className="block text-lg font-mono font-black text-amber-400">
                      {record.appearances}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                      Games
                    </span>
                  </div>
                  <div>
                    <span className="block text-lg font-mono font-black text-rose-400">
                      {record.goals}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                      Goals
                    </span>
                  </div>
                  <div>
                    <span className="block text-lg font-mono font-black text-emerald-400">
                      {record.assists}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                      Assists
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Notable Honors:
                  </span>
                  {record.iconicTrophies.map((trophy) => (
                    <div
                      key={trophy}
                      className="text-xs text-zinc-300 flex items-center gap-1.5"
                    >
                      <SparklesIcon className="w-3 h-3 text-amber-400 flex-shrink-0" />
                      <span>{trophy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* World Records Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <AwardIcon className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Historic World Records in Football
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORLD_RECORDS.map((rec) => (
            <div
              key={rec.record}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
                  Guinness & Official Record
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {rec.record}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {rec.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 text-xs text-zinc-500">
                Officially Verified by: <span className="text-zinc-300 font-medium">{rec.verifiedBy}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center">
        <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-4">
          All data compiled from official publications of UEFA, FIFA, Transfermarkt, RSSSF, and Guinness World Records.
        </p>
        <Link
          href="/critics-vs-answers"
          className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
        >
          <span>See How These Stats Answered Every Critic →</span>
        </Link>
      </div>
    </div>
  );
}

