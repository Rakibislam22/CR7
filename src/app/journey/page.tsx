"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { TIMELINE_ERAS, TIMELINE_EVENTS } from "@/data/timeline";
import {
  CalendarIcon,
  MapPinIcon,
  TrophyIcon,
  CrownIcon,
  QuoteIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@/components/Icons";

export default function JourneyPage() {
  const [selectedEra, setSelectedEra] = useState<string>("all");

  const filteredEvents =
    selectedEra === "all"
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((evt) => evt.eraId === selectedEra);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Page Header */}
      <SectionHeader
        badge="Career Timeline"
        title="The Legendary"
        highlightText="Odyssey (1985–Present)"
        subtitle="Explore the complete chronological evolution of Cristiano Ronaldo across 8 distinct eras. Every turning point, monumental milestone, and historic trophy."
      />

      {/* Era Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar">
        <button
          onClick={() => setSelectedEra("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${selectedEra === "all"
              ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
            }`}
        >
          All Eras ({TIMELINE_EVENTS.length})
        </button>
        {TIMELINE_ERAS.map((era) => {
          const isCurrent = selectedEra === era.id;
          return (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${isCurrent
                  ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
            >
              {era.name}
            </button>
          );
        })}
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-zinc-800/80 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12">
        {filteredEvents.map((evt, idx) => (
          <div key={evt.id} id={evt.eraId} className="relative group">
            {/* Year marker on the left for larger screens */}
            <div className="hidden md:flex absolute -left-42 top-0.5 w-28 text-right flex-col items-end">
              <span className="text-xl font-black text-amber-400 font-mono tracking-wider">
                {evt.year}
              </span>
              <span className="text-[11px] text-zinc-500 line-clamp-1">
                {evt.club}
              </span>
            </div>

            {/* Timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all shadow-md shadow-amber-500/30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-zinc-950" />
            </div>

            {/* Event Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 group-hover:border-zinc-700 transition-all shadow-lg hover:shadow-2xl">
              {/* Badges bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="md:hidden font-mono font-bold text-amber-400 text-sm bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {evt.year}
                  </span>
                  {evt.milestoneBadge && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 border border-rose-500/30 text-rose-300">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      {evt.milestoneBadge}
                    </span>
                  )}
                  <span className="text-xs text-zinc-400 font-medium bg-zinc-800/60 px-2.5 py-0.5 rounded-full border border-zinc-700/60">
                    {evt.club}
                  </span>
                </div>

                {evt.dateStr && (
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <CalendarIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{evt.dateStr}</span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                {evt.title}
              </h3>

              {/* Location */}
              {evt.location && (
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1.5 mb-4">
                  <MapPinIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{evt.location}</span>
                </div>
              )}

              {/* Summary */}
              <p className="text-sm sm:text-base font-semibold text-zinc-200 mt-2">
                {evt.summary}
              </p>

              {/* Detailed narrative */}
              <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                {evt.details}
              </p>

              {/* Stats Highlight Banner */}
              {evt.statsHighlight && (
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
                  <TrophyIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-amber-300">
                    {evt.statsHighlight}
                  </span>
                </div>
              )}

              {/* Quote if present */}
              {evt.quote && (
                <div className="mt-4 p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex gap-3 text-xs sm:text-sm italic text-zinc-300">
                  <QuoteIcon className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" />
                  <p>&ldquo;{evt.quote}&rdquo;</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA to Champions League Hall */}
      <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 text-center">
        <CrownIcon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-white">Next Destination</h3>
        <p className="text-zinc-400 text-sm max-w-lg mx-auto mt-2 mb-6">
          Explore Cristiano Ronaldo&apos;s extraordinary reign over Europe in the Champions League Hall of Fame.
        </p>
        <Link
          href="/champions-league"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 shadow-md text-sm"
        >
          <span>Enter Champions League Hall</span>
          <TrophyIcon className="w-4 h-4 text-zinc-950" />
        </Link>
      </div>
    </div>
  );
}

