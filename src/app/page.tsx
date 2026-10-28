import React from "react";
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
} from "@/components/Icons";
import SectionHeader from "@/components/SectionHeader";
import { HEADLINE_STATS, WORLD_RECORDS } from "@/data/stats";
import { TIMELINE_ERAS } from "@/data/timeline";
import { CRITICS_VS_ANSWERS } from "@/data/critics";
import { TRIBUTE_QUOTES } from "@/data/giving";

export default function HomePage() {
  const featuredCritic = CRITICS_VS_ANSWERS[2]; // Wolfsburg comeback

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24 overflow-hidden">
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-rose-600/15 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-500/30 text-amber-300 shadow-sm mb-6 animate-pulse">
            <SparklesIcon className="w-4 h-4 text-amber-400" />
            <span>The Definitive Cristiano Ronaldo Storytelling Archive</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-amber-200">
              GOAT
            </span>{" "}
            JOURNEY
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl font-normal leading-relaxed">
            From the cobbled alleys of Madeira to the peak of football history. Driven by doubt, forged in relentless discipline, crowned by over{" "}
            <span className="text-amber-400 font-bold">900 official goals</span> and{" "}
            <span className="text-rose-400 font-bold">5 Champions League titles</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/journey"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-zinc-950 hover:from-amber-300 hover:to-rose-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5"
            >
              <CrownIcon className="w-5 h-5" />
              <span>Start the Journey</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              href="/critics-vs-answers"
              className="flex items-center gap-2 px-6 py-4 rounded-xl text-base font-semibold bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all hover:border-zinc-500"
            >
              <ShieldIcon className="w-5 h-5 text-rose-400" />
              <span>Critics vs Answers</span>
            </Link>

            <Link
              href="/champions-league"
              className="flex items-center gap-2 px-6 py-4 rounded-xl text-base font-semibold bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all hover:border-zinc-500"
            >
              <TrophyIcon className="w-5 h-5 text-amber-400" />
              <span>Mr. Champions League</span>
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 sm:mt-20 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {HEADLINE_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
                  stat.highlight
                    ? "bg-gradient-to-b from-amber-500/10 via-zinc-900/80 to-zinc-950 border border-amber-500/30 shadow-lg shadow-amber-500/5"
                    : "bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-1">
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
          WHY CR7 IS THE GOAT - THE 4 PILLARS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Unrivaled Excellence"
          title="Why Cristiano Ronaldo is the"
          highlightText="Undisputed GOAT"
          subtitle="It is not just the trophies or the sheer numbers. It is how he conquered three different leagues, carried a nation to its first continental silverware, and scored when the entire world was watching."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <TrophyIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Mr. Champions League
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                140 total goals, 67 knockout goals, 5 Champions League crowns, and goals in 3 different finals. When Europe plays under floodlights, Ronaldo dominates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-semibold text-amber-400 flex items-center justify-between">
              <span>All-Time UCL Top Scorer</span>
              <span>140 Goals</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
                <FlameIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Clutch Mentality
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                When his team faces defeat, he thrives. Historic hat-tricks against Wolfsburg, Atletico Madrid, and Spain prove that pressure only fuels his greatness.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-semibold text-rose-400 flex items-center justify-between">
              <span>Most UCL Knockout Goals</span>
              <span>67 Goals</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <BallIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                The Complete Finisher
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No weak spots: over 570 right-foot goals, 170 weak-foot left goals, and 150 headers with NBA-level vertical leap exceeding 2.5 meters.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-semibold text-amber-400 flex items-center justify-between">
              <span>Official Goals</span>
              <span>900+ Total</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <CrownIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Immortal Longevity
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                World&apos;s top goalscorer in 2023 with 54 goals at age 38. Scoring in 5 different World Cups and setting the all-time international scoring record for Portugal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-semibold text-emerald-400 flex items-center justify-between">
              <span>International Goals</span>
              <span>133+ (World Record)</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAREER ERAS PREVIEW
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
              Career Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              The 8 Eras of Cristiano Ronaldo
            </h2>
          </div>
          <Link
            href="/journey"
            className="flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Explore Full Interactive Timeline</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIMELINE_ERAS.map((era, index) => (
            <Link
              key={era.id}
              href={`/journey#${era.id}`}
              className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-600 transition-all hover:bg-zinc-900 group"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                <span className="font-mono text-amber-400/90 font-semibold">{era.period}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
                  Era 0{index + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                {era.name}
              </h3>
              <p className="text-xs font-medium text-rose-400/90 mt-1">
                {era.club}
              </p>
              <p className="text-xs text-zinc-400 mt-3 line-clamp-3 leading-relaxed">
                {era.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FEATURED SPOTLIGHT: CRITICS VS ANSWERS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 relative overflow-hidden shadow-2xl">
          {/* Background accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-3">
              Doubt Met With Decimation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Critics Spoke. Ronaldo Answered on the Pitch.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Throughout his 20+ year career, every time critics proclaimed him finished or doubted his decisive impact, he responded with historic performances.
            </p>
          </div>

          {/* 2-Column Comparison Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800">
            {/* Left: The Criticism */}
            <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80 pb-6 md:pb-0 md:pr-6">
              <div>
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldIcon className="w-4 h-4" />
                  <span>The Criticism Claim</span>
                </div>
                <blockquote className="text-lg sm:text-xl font-bold text-zinc-100 italic">
                  &ldquo;{featuredCritic.claim}&rdquo;
                </blockquote>
                <div className="mt-3 space-y-1 text-xs text-zinc-400">
                  <p>Source: <span className="text-zinc-300 font-medium">{featuredCritic.critic}</span></p>
                  <p>Date: <span className="text-zinc-300 font-medium">{featuredCritic.criticDate}</span></p>
                </div>
              </div>
              <div className="mt-4 pt-3 text-[11px] text-zinc-500">
                Verified from: {featuredCritic.sourceLabel}
              </div>
            </div>

            {/* Right: The Pitch Answer */}
            <div className="flex flex-col justify-between md:pl-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <TrophyIcon className="w-4 h-4" />
                  <span>The Answer On The Pitch</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {featuredCritic.answerHeadline}
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  {featuredCritic.answerSummary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredCritic.outcomeStats.map((stat) => (
                    <span
                      key={stat}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-300"
                    >
                      ✓ {stat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/critics-vs-answers"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Explore all 10 verified Critics vs Answers pairs</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WORDS OF THE LEGENDS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Respected by Rivals & Mentors"
          title="What the Icons Say About"
          highlightText="Cristiano Ronaldo"
          subtitle="True greatness is measured by the profound respect of the greatest managers and opponents to have graced football."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRIBUTE_QUOTES.slice(0, 4).map((tribute) => (
            <div
              key={tribute.author}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 relative flex flex-col justify-between"
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
          OFF-THE-PITCH: HUMANITY, GIVING BACK & FAMILY
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Family Card */}
          <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-4">
                Family & Roots
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Love, Sacrifice & The Madeira Bond
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Discover the story of his mother Dolores who sacrificed everything so he could move to Sporting, and his late father José Dinis Aveiro who introduced him to football and remains his eternal guardian angel.
              </p>
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
          <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-4">
                Giving Back
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Verified Philanthropy & Global Tributes
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Why he has no tattoos (to donate blood and bone marrow regularly), auctioning his Golden Boot to build schools, funding life-saving surgeries for sick children, and Madeira Airport named in his honor.
              </p>
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
          FINAL INSPIRATIONAL CTA
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-amber-500/10 via-zinc-900 to-rose-600/10 border border-amber-500/25 shadow-2xl relative overflow-hidden">
          <CrownIcon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Walk the GOAT Journey?
          </h2>
          <p className="mt-4 text-zinc-300 max-w-xl mx-auto text-base sm:text-lg">
            Immerse yourself into over two decades of unmatched football history, era by era, from 1985 to the present day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/journey"
              className="px-8 py-3.5 rounded-xl font-bold text-zinc-950 bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-300 hover:to-rose-400 shadow-lg text-base"
            >
              Enter the Career Timeline
            </Link>
            <Link
              href="/about"
              className="px-6 py-3.5 rounded-xl font-semibold text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 text-base"
            >
              About the Project & Sources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
