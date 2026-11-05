"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrophyIcon,
  CrownIcon,
  FlameIcon,
  BallIcon,
  ShieldIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  QuoteIcon,
  StarIcon,
  SparklesIcon,
  HeartIcon,
  CalendarIcon,
  AwardIcon,
  ZapIcon,
  TargetIcon,
  TrendingUpIcon,
  PlayIcon,
} from "@/components/Icons";
import SectionHeader from "@/components/SectionHeader";
import { HEADLINE_STATS, WORLD_RECORDS, GOAL_TYPES } from "@/data/stats";
import { TIMELINE_ERAS, TIMELINE_EVENTS } from "@/data/timeline";
import { CRITICS_VS_ANSWERS } from "@/data/critics";
import { TRIBUTE_QUOTES } from "@/data/giving";
import { CURATED_VIDEOS } from "@/data/videos";

// Curated feature critics for the interactive switcher
const SHOWCASE_CRITIC_IDS = ["critic-3", "critic-5", "critic-7", "critic-6"];

// Athletic metrics showcase data
const ATHLETIC_METRICS = [
  {
    label: "Vertical Leap",
    value: "2.93 m",
    subtext: "Higher than crossbar (vs Man United 2013)",
    detail: "Hang time of 0.73 seconds, exceeding the average NBA player leap.",
    icon: TrendingUpIcon,
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    label: "Top Sprint Speed",
    value: "33.95 km/h",
    subtext: "Recorded at 2018 World Cup (at age 33)",
    detail: "Fastest clocked speed of any player in the entire 2018 FIFA World Cup.",
    icon: ZapIcon,
    accent: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
  {
    label: "Body Fat Ratio",
    value: "~7%",
    subtext: "Elite athlete baseline is 10-11%",
    detail: "Maintained through strict discipline, recovery protocols, and diet across 22+ years.",
    icon: TargetIcon,
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    label: "Shot Velocity",
    value: "130+ km/h",
    subtext: "Knuckleball free-kicks & long-range rockets",
    detail: "Unpredictable ball trajectory that revolutionised modern goalkeeper positioning.",
    icon: BallIcon,
    accent: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
];

export default function HomePage() {
  const [selectedCriticId, setSelectedCriticId] = useState<string>("critic-3");
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(3); // Default to Real Madrid (Era 4)

  const activeCritic =
    CRITICS_VS_ANSWERS.find((c) => c.id === selectedCriticId) || CRITICS_VS_ANSWERS[0];
  const activeEra = TIMELINE_ERAS[selectedEraIndex];
  const activeEraEvents = TIMELINE_EVENTS.filter((e) => e.eraId === activeEra.id);

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24 overflow-hidden relative">
      {/* Background stadium light aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-amber-500/20 via-rose-600/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* =========================================================================
          1. HERO SECTION (Cinematic Entrance)
         ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Giant Watermark 7 in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[260px] sm:text-[380px] md:text-[460px] font-black font-mono text-white/[0.025] select-none pointer-events-none -z-10 leading-none">
          7
        </div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Animated radar status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-zinc-900/90 border border-amber-500/30 text-zinc-200 shadow-xl mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-amber-300 font-bold">900+ Official Goals</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">5 UCL Crowns</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">5 Ballons d&apos;Or</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.03]">
            CRISTIANO RONALDO
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-500 to-amber-200 drop-shadow-sm">
              THE GOAT JOURNEY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl font-normal leading-relaxed">
            From the steep cobbled alleys of Madeira to the highest summit in sporting history.
            An archive of unyielding discipline, clutch heroism, verified records, and how one man
            answered every single critic on the pitch.
          </p>

          {/* Call to Actions */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/journey"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-zinc-950 hover:from-amber-300 hover:to-rose-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <CrownIcon className="w-5 h-5 text-zinc-950" />
              <span>Explore The Journey</span>
              <ArrowRightIcon className="w-4 h-4 text-zinc-950" />
            </Link>

            <Link
              href="/critics-vs-answers"
              className="flex items-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all hover:border-zinc-500 hover:text-white"
            >
              <ShieldIcon className="w-5 h-5 text-rose-400" />
              <span>Critics vs Answers</span>
            </Link>

            <Link
              href="/champions-league"
              className="flex items-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all hover:border-zinc-500 hover:text-white"
            >
              <TrophyIcon className="w-5 h-5 text-amber-400" />
              <span>Mr. Champions League</span>
            </Link>
          </div>

          {/* Stat Cards Ribbon */}
          <div className="mt-14 sm:mt-16 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {HEADLINE_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all group ${
                  stat.highlight
                    ? "bg-gradient-to-b from-amber-500/15 via-zinc-900/90 to-zinc-950 border border-amber-500/40 shadow-lg shadow-amber-500/10 hover:border-amber-400"
                    : "bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900"
                }`}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-mono">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                  {stat.label}
                </span>
                <span className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE 4 PILLARS: WHY CR7 IS THE GOAT
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Unrivaled Legacy"
          badgeColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
          title="Why Cristiano Ronaldo is the"
          highlightText="Undisputed GOAT"
          subtitle="True greatness goes beyond domestic stats. It is proven by conquering England, Spain, and Italy, lifting major silverware for his country, and delivering when the entire globe was watching."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-7 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between shadow-lg hover:shadow-amber-500/5">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <TrophyIcon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Pillar 01
              </span>
              <h3 className="text-xl font-black text-white mb-2">
                Mr. Champions League
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                140 all-time goals, 67 knockout goals, 5 titles, and goals in 3 different finals. Real Madrid&apos;s historic three-peat spearhead.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold">
              <span className="text-zinc-400">Knockout Stage Goals</span>
              <span className="text-amber-400 font-mono">67 (Record)</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/40 transition-all group flex flex-col justify-between shadow-lg hover:shadow-rose-500/5">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
                <FlameIcon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
                Pillar 02
              </span>
              <h3 className="text-xl font-black text-white mb-2">
                Clutch Mentality
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Legendary comeback hat-tricks against Wolfsburg (3-0), Atletico Madrid (3-0), and World Cup hat-trick vs Spain. Pressure elevates him.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold">
              <span className="text-zinc-400">UCL Hat-Tricks</span>
              <span className="text-rose-400 font-mono">8 (Shared Record)</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between shadow-lg hover:shadow-amber-500/5">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <BallIcon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Pillar 03
              </span>
              <h3 className="text-xl font-black text-white mb-2">
                The Complete Finisher
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No weakness: 576+ right foot, 172+ left foot, 153+ headers, 64 direct free-kick goals, and 730+ non-penalty goals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold">
              <span className="text-zinc-400">Non-Penalty Goals</span>
              <span className="text-amber-400 font-mono">730+</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-7 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all group flex flex-col justify-between shadow-lg hover:shadow-emerald-500/5">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <CrownIcon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                Pillar 04
              </span>
              <h3 className="text-xl font-black text-white mb-2">
                Immortal Longevity
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                World&apos;s top goalscorer in 2023 at age 38 with 54 goals. Scored in 5 different World Cups, captaining Portugal for over 18 years.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold">
              <span className="text-zinc-400">Intl Goals (Portugal)</span>
              <span className="text-emerald-400 font-mono">133+ (World #1)</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE ERA NAVIGATOR (Clash of Eras)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
              Career Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Interactive Era Navigator
            </h2>
          </div>
          <Link
            href="/journey"
            className="flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>View Complete Chronological Timeline</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Era selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
          {TIMELINE_ERAS.map((era, idx) => {
            const isSelected = selectedEraIndex === idx;
            return (
              <button
                key={era.id}
                onClick={() => setSelectedEraIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isSelected
                    ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20 scale-[1.02]"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white border-zinc-800/80 hover:bg-zinc-900"
                }`}
              >
                <span className="block text-[10px] font-mono opacity-80">
                  Era 0{idx + 1}
                </span>
                <span className="block text-xs font-bold truncate mt-0.5">
                  {era.name.split(":")[0]}
                </span>
                <span className="block text-[10px] opacity-75 mt-0.5 truncate">
                  {era.period}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Era Spotlight Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-zinc-800/80 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/20 text-amber-300">
                  {activeEra.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300">
                  {activeEra.club}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeEra.name}
              </h3>
            </div>

            <Link
              href={`/journey#${activeEra.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-zinc-950 transition-colors shadow-md"
            >
              <span>Explore Chapter in Timeline</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            {activeEra.description}
          </p>

          {/* Era Events Quick Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeEraEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {evt.year}
                  </span>
                  {evt.milestoneBadge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/25">
                      {evt.milestoneBadge}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mb-1 line-clamp-1">
                  {evt.title}
                </h4>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {evt.summary}
                </p>
                {evt.statsHighlight && (
                  <span className="inline-block mt-2 text-[11px] font-bold text-amber-300">
                    ★ {evt.statsHighlight}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. DOUBT MET WITH DECIMATION: CRITICS VS ANSWERS DUEL
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 relative overflow-hidden shadow-2xl">
          {/* Subtle glow badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-2">
                Doubt Met With Decimation
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Critics Spoke. Ronaldo Answered on the Pitch.
              </h2>
            </div>
            <Link
              href="/critics-vs-answers"
              className="flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
            >
              <span>View All 10 Confrontations</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick confrontation tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
            {SHOWCASE_CRITIC_IDS.map((id, index) => {
              const pair = CRITICS_VS_ANSWERS.find((c) => c.id === id);
              if (!pair) return null;
              const isSelected = selectedCriticId === id;
              return (
                <button
                  key={id}
                  onClick={() => setSelectedCriticId(id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                    isSelected
                      ? "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-600/30"
                      : "bg-zinc-950 text-zinc-400 hover:text-white border-zinc-800"
                  }`}
                >
                  Confrontation 0{index + 1}: {pair.era}
                </button>
              );
            })}
          </div>

          {/* 2-Column Comparison Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-zinc-800">
            {/* Left: The Criticism */}
            <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80 pb-6 md:pb-0 md:pr-6">
              <div>
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldIcon className="w-4 h-4 text-rose-500" />
                  <span>The Skeptical Claim</span>
                </div>
                <blockquote className="text-lg sm:text-xl font-bold text-zinc-100 italic leading-snug">
                  &ldquo;{activeCritic.claim}&rdquo;
                </blockquote>
                <div className="mt-4 space-y-1 text-xs text-zinc-400">
                  <p>
                    <span className="text-zinc-500">Source:</span>{" "}
                    <span className="text-zinc-300 font-semibold">{activeCritic.critic}</span>
                  </p>
                  <p>
                    <span className="text-zinc-500">Date:</span>{" "}
                    <span className="text-zinc-300">{activeCritic.criticDate}</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 text-[11px] text-zinc-500">
                Verified: {activeCritic.sourceLabel}
              </div>
            </div>

            {/* Right: The Pitch Answer */}
            <div className="flex flex-col justify-between md:pl-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <TrophyIcon className="w-4 h-4 text-amber-400" />
                  <span>The Decimation On The Pitch</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeCritic.answerHeadline}
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  {activeCritic.answerSummary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeCritic.outcomeStats.map((stat) => (
                    <span
                      key={stat}
                      className="px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-300"
                    >
                      ✓ {stat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-800/80 text-xs font-semibold text-amber-400">
                Outcome: {activeCritic.answerProof}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SUPERHUMAN ATHLETIC BLUEPRINT (Bio-Mechanics & Fitness)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Biological Machine"
          badgeColor="text-sky-400 bg-sky-500/10 border-sky-500/20"
          title="The Bio-Mechanical Blueprint:"
          highlightText="Forged in Granite"
          subtitle="How extraordinary discipline, biomechanical analysis, and obsessive training built the most complete physical specimen in the history of football."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATHLETIC_METRICS.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.label}
                className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${metric.accent}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {metric.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-1">
                    {metric.value}
                  </div>
                  <p className="text-xs font-semibold text-amber-400 mt-1">
                    {metric.subtext}
                  </p>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Goal Anatomy Bar */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                Anatomy of 900+ Official Goals
              </h3>
              <p className="text-xs text-zinc-400">
                The only modern player with 150+ headed goals, 170+ weak-foot goals, and 570+ strong-foot goals.
              </p>
            </div>
            <Link
              href="/stats"
              className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Explore Stats Databank</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GOAL_TYPES.map((type) => (
              <div key={type.label} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-white">{type.label}</span>
                  <span className="text-sm font-mono font-bold text-amber-400">{type.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                    style={{ width: `${type.percentage}%` }}
                  />
                </div>
                <span className="text-xs text-zinc-400 font-medium">{type.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CURATED CINEMATIC VIDEO MOMENTS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
              Cinema Archive
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Electrifying Match Footage
            </h2>
          </div>
          <Link
            href="/videos"
            className="flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Open Curated Video Theatre</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURATED_VIDEOS.slice(0, 3).map((video) => (
            <Link
              key={video.id}
              href="/videos"
              className="group rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center overflow-hidden border-b border-zinc-800">
                  <div className="w-14 h-14 rounded-full bg-amber-500/90 group-hover:bg-amber-400 group-hover:scale-110 text-zinc-950 flex items-center justify-center transition-all shadow-xl shadow-amber-500/30 pl-1 z-10">
                    <PlayIcon className="w-6 h-6 fill-zinc-950" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-zinc-300">
                    {video.duration}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-800 text-amber-400">
                      {video.era}
                    </span>
                    <span className="text-[11px] text-zinc-400 capitalize">
                      {video.category.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-zinc-800 text-xs text-amber-400 font-semibold flex items-center justify-between">
                <span>Watch Video</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. THE HUMAN BEHIND THE TITAN: FAMILY & PHILANTHROPY
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Family Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-4">
                Family & Roots
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Love, Sacrifice & The Madeira Heart
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                Discover the story of his mother Dolores who worked day and night so 12-year-old Cristiano could travel to Lisbon, and his late father José Dinis Aveiro, whose memory remains Cristiano&apos;s eternal beacon every time he points to the sky.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 text-xs text-zinc-400 italic">
                &ldquo;My mother is the pillar of our family. Everything I am, I owe to her sacrifice and love.&rdquo;
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/family"
                className="inline-flex items-center gap-2 text-sm font-bold text-rose-400 hover:text-rose-300"
              >
                <span>Read the Family Story</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Giving Back Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-4">
                Verified Philanthropy
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Giving Back & Global Tributes
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                Why he has no tattoos (to donate blood and bone marrow regularly), auctioning his Golden Boot to build schools for children, funding life-saving brain surgeries, and Madeira Airport named in his honor.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 text-xs text-zinc-400 italic">
                &ldquo;If you can help, do it. Giving to others has given me the greatest joy in life.&rdquo;
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/giving-back"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Explore Philanthropy & Tributes</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. VOICES OF FOOTBALL ROYALTY
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Enduring Respect"
          badgeColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
          title="What Football Royalty Says About"
          highlightText="Cristiano Ronaldo"
          subtitle="True greatness is measured by the profound reverence of the greatest managers and opponents to have graced the game."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRIBUTE_QUOTES.slice(0, 4).map((tribute) => (
            <div
              key={tribute.author}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between shadow-lg"
            >
              <div>
                <QuoteIcon className="w-8 h-8 text-amber-500/20 mb-4" />
                <p className="text-base sm:text-lg text-zinc-200 font-medium italic leading-relaxed">
                  &ldquo;{tribute.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{tribute.author}</h4>
                  <p className="text-xs text-zinc-400">{tribute.role}</p>
                </div>
                <span className="text-[11px] text-zinc-500 italic">
                  {tribute.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. FINAL INSPIRATIONAL CTA
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-amber-500/10 via-zinc-900 to-rose-600/10 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <CrownIcon className="w-14 h-14 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Walk the Entire GOAT Journey
          </h2>
          <p className="mt-4 text-zinc-300 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Immerse yourself into over two decades of football greatness, from 1985 in Madeira to the 900+ goal frontier.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/journey"
              className="px-8 py-4 rounded-xl font-extrabold text-zinc-950 bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-300 hover:to-rose-400 shadow-xl shadow-amber-500/20 text-base transition-all transform hover:-translate-y-0.5"
            >
              Enter Career Timeline
            </Link>
            <Link
              href="/about"
              className="px-6 py-4 rounded-xl font-bold text-zinc-300 hover:text-white bg-zinc-800/90 hover:bg-zinc-800 border border-zinc-700 text-base transition-colors"
            >
              Sources & Methodology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
