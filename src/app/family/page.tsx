import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { FAMILY_MEMBERS, MADEIRA_HOMETOWN } from "@/data/family";
import {
  HeartIcon,
  QuoteIcon,
  MapPinIcon,
  SparklesIcon,
  CrownIcon,
} from "@/components/Icons";

export default function FamilyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Header */}
      <SectionHeader
        badge="Family & Roots"
        badgeColor="text-rose-400 bg-rose-500/15 border-rose-500/30"
        title="Love, Sacrifice &"
        highlightText="The Madeira Heart"
        subtitle="Behind the global icon and football titan is a boy fiercely devoted to his family. A calm, respectful narrative celebrating the people who shaped Cristiano Ronaldo."
      />

      {/* Madeira Roots Spotlight Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <MapPinIcon className="w-4 h-4" />
            <span>Funchal, Madeira Island</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {MADEIRA_HOMETOWN.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {MADEIRA_HOMETOWN.description}
          </p>
          <div className="pt-2 text-amber-300 text-sm font-semibold italic flex items-center gap-2">
            <QuoteIcon className="w-4 h-4 text-amber-500" />
            <span>&ldquo;{MADEIRA_HOMETOWN.quote}&rdquo;</span>
          </div>
        </div>
      </div>

      {/* Family Stories Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FAMILY_MEMBERS.map((member) => (
          <div
            key={member.id}
            className={`p-7 sm:p-9 rounded-3xl border transition-all flex flex-col justify-between ${member.accentColor}`}
          >
            <div>
              {/* Relation badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
                  {member.relation}
                </span>
                <HeartIcon className="w-4 h-4 text-rose-400 fill-rose-500/20" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {member.name}
              </h3>

              {member.quote && (
                <div className="my-4 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs sm:text-sm italic text-amber-300 flex items-start gap-2">
                  <QuoteIcon className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>&ldquo;{member.quote}&rdquo;</span>
                </div>
              )}

              <p className="text-sm text-zinc-300 leading-relaxed mt-4">
                {member.narrative}
              </p>

              {/* Key Moments */}
              <div className="mt-6 space-y-2">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                  Significant Moments:
                </span>
                {member.keyMoments.map((moment) => (
                  <div
                    key={moment}
                    className="flex items-start gap-2 text-xs text-zinc-300"
                  >
                    <SparklesIcon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{moment}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400">
              Honoring public, positive shared memories with deep respect.
            </div>
          </div>
        ))}
      </div>

      {/* Father Dedicated Section Tribute */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 text-center max-w-4xl mx-auto">
        <HeartIcon className="w-8 h-8 text-rose-500 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-white mb-2">
          An Eternal Dedication
        </h3>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Every time Cristiano Ronaldo points his fingers toward the sky after finding the back of the net, it is an enduring tribute to his father José Dinis Aveiro.
        </p>
        <div className="mt-8">
          <Link
            href="/giving-back"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
          >
            <span>Read About His Philanthropy & Tributes →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

