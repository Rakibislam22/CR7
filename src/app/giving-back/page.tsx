"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { GIVING_ITEMS, TRIBUTE_QUOTES, GivingItem } from "@/data/giving";
import {
  HeartIcon,
  AwardIcon,
  ExternalLinkIcon,
  QuoteIcon,
  SparklesIcon,
  ShieldIcon,
  CalendarIcon,
} from "@/components/Icons";

const TABS = [
  { id: "all", label: "All Items" },
  { id: "charity", label: "Charity & Hospital Donations" },
  { id: "blood", label: "Blood & Marrow Donor" },
  { id: "tribute-to-cr7", label: "Global Tributes to CR7" },
];

export default function GivingBackPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredItems = GIVING_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "charity") return item.category === "donation";
    if (activeTab === "blood") return item.category === "blood";
    if (activeTab === "tribute-to-cr7") return item.category === "tribute-to-cr7";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Header */}
      <SectionHeader
        badge="Humanity & Honor"
        badgeColor="text-amber-400 bg-amber-500/15 border-amber-500/30"
        title="Giving Back &"
        highlightText="Global Tributes"
        subtitle="True greatness is proven beyond the white lines of the pitch. Every charitable act verified with direct organizational and news sources."
      />

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${activeTab === tab.id
                ? "bg-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-500/20"
                : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Verified Giving Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {item.category === "donation"
                    ? "Charity Donation"
                    : item.category === "blood"
                      ? "Blood Donor Initiative"
                      : "Official Honor"}
                </span>
                <span className="text-xs text-zinc-400">{item.dateOrYear}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mt-3">
                {item.description}
              </p>

              {item.impactHighlight && (
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item.impactHighlight}</span>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-500">Source: {item.sourceLabel}</span>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber-400 hover:underline"
              >
                <span>Verify Source</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Words From Icons & Managers */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <QuoteIcon className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Words From Managers, Teammates & Rivals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRIBUTE_QUOTES.map((tribute) => (
            <div
              key={tribute.author}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
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
      </div>
    </div>
  );
}

