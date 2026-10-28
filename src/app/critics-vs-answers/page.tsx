"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { CRITICS_VS_ANSWERS, CriticAnswerPair } from "@/data/critics";
import {
  ShieldIcon,
  TrophyIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  CalendarIcon,
  CrownIcon,
} from "@/components/Icons";

const CATEGORIES = [
  { id: "all", label: "All Confrontations" },
  { id: "playstyle", label: "Playstyle & Solo vs Team" },
  { id: "big-games", label: "Big Games & Finals" },
  { id: "age", label: "Age & Decline Claims" },
  { id: "international", label: "Portugal & Nation" },
  { id: "mentality", label: "Ambition & Mentality" },
];

export default function CriticsVsAnswersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPairs =
    selectedCategory === "all"
      ? CRITICS_VS_ANSWERS
      : CRITICS_VS_ANSWERS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* Page Header */}
      <SectionHeader
        badge="Unshakable Proof"
        badgeColor="text-rose-400 bg-rose-500/15 border-rose-500/30"
        title="Critics vs Answers:"
        highlightText="The Cold Hard Truth"
        subtitle="For 20+ years, doubters questioned his style, big-game temperament, age, and ambition. Every single time, Cristiano Ronaldo answered where it mattered most: on the pitch."
      />

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${isSelected
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-600/25"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 2-Column Comparison List */}
      <div className="space-y-8">
        {filteredPairs.map((pair, idx) => (
          <div
            key={pair.id}
            className="rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden shadow-xl"
          >
            {/* Top Bar with Number & Era */}
            <div className="px-6 sm:px-8 py-3.5 bg-zinc-950/90 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400">
                  Case 0{idx + 1}
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300 font-medium">{pair.era}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-medium uppercase tracking-wider text-[10px]">
                {pair.category}
              </span>
            </div>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
              {/* Left Column: The Criticism */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-zinc-950/30">
                <div>
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <ShieldIcon className="w-4 h-4 text-rose-500" />
                    <span>The Criticism & Doubt</span>
                  </div>

                  <blockquote className="text-lg sm:text-xl font-bold text-zinc-100 italic leading-snug">
                    &ldquo;{pair.claim}&rdquo;
                  </blockquote>

                  <div className="mt-4 space-y-1.5 text-xs text-zinc-400">
                    <p className="flex items-center gap-1.5">
                      <span className="text-zinc-500 font-medium">Claimed by:</span>
                      <span className="text-zinc-300 font-semibold">{pair.critic}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{pair.criticDate}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <a
                    href={pair.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    <span>Source: {pair.sourceLabel}</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: The Answer On The Pitch */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-zinc-900/40 via-zinc-900/10 to-amber-500/5">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <TrophyIcon className="w-4 h-4 text-amber-400" />
                    <span>The Pitch Decimation</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {pair.answerHeadline}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {pair.answerSummary}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300 font-medium">
                    <span className="text-amber-400 font-bold block mb-1">Key Match/Occasion:</span>
                    {pair.matchOrEvent}
                  </div>

                  {/* Outcome badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pair.outcomeStats.map((stat) => (
                      <span
                        key={stat}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300"
                      >
                        <CheckCircleIcon className="w-3 h-3 text-amber-400" />
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 font-medium">
                  Result: <span className="text-amber-300 font-bold">{pair.answerProof}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-center">
        <CrownIcon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-white">
          &ldquo;Your love makes me strong. Your hate makes me unstoppable.&rdquo;
        </h3>
        <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto">
          — Cristiano Ronaldo dos Santos Aveiro
        </p>
        <div className="mt-6">
          <Link
            href="/stats"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 text-sm"
          >
            <span>Explore All Official Career Records & Stats</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

