"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { CURATED_VIDEOS, VideoItem } from "@/data/videos";
import { PlayIcon, SparklesIcon, CalendarIcon } from "@/components/Icons";

const CATEGORIES = [
  { id: "all", label: "All Videos" },
  { id: "champions-league", label: "Champions League Nights" },
  { id: "goals", label: "Iconic Goals & Hat-Tricks" },
  { id: "skills", label: "Skills & Sporting Roots" },
  { id: "interviews", label: "Emotional Interviews" },
  { id: "tributes", label: "Tributes & Euro 2016" },
];

export default function VideosPage() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [activeEmbedId, setActiveEmbedId] = useState<string | null>(null);

  const filteredVideos =
    selectedCat === "all"
      ? CURATED_VIDEOS
      : CURATED_VIDEOS.filter((v) => v.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* Header */}
      <SectionHeader
        badge="Cinematic Archive"
        badgeColor="text-amber-400 bg-amber-500/15 border-amber-500/30"
        title="Iconic Match Footage &"
        highlightText="Video Highlights"
        subtitle="Watch the most electrifying moments of Cristiano Ronaldo's career. Official YouTube embeds celebrating his finest goals, comebacks, and emotional speeches."
      />

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${selectedCat === cat.id
                ? "bg-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-500/20"
                : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredVideos.map((video) => {
          const isPlaying = activeEmbedId === video.id;

          return (
            <div
              key={video.id}
              className="rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Embed player or thumbnail container */}
                <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center overflow-hidden border-b border-zinc-800">
                  {isPlaying ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setActiveEmbedId(video.id)}
                      className="w-full h-full relative cursor-pointer group flex items-center justify-center bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950"
                    >
                      {/* Play overlay button */}
                      <div className="w-16 h-16 rounded-full bg-amber-500/90 group-hover:bg-amber-400 group-hover:scale-110 text-zinc-950 flex items-center justify-center transition-all shadow-xl shadow-amber-500/25 z-10 pl-1">
                        <PlayIcon className="w-7 h-7 fill-zinc-950" />
                      </div>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                      <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-zinc-300">
                        {video.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-800 text-amber-400 border border-zinc-700">
                      {video.era}
                    </span>
                    <span className="text-xs text-zinc-400 capitalize">
                      {video.category.replace("-", " ")}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {video.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Footer notice */}
              <div className="px-6 py-3 border-t border-zinc-800/80 bg-zinc-950/40 text-[11px] text-zinc-500 flex items-center justify-between">
                <span>Official YouTube Embed Player</span>
                <button
                  onClick={() => setActiveEmbedId(video.id)}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Watch Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center text-xs text-zinc-500">
        All videos are embedded directly through YouTube&apos;s standard player adhering to YouTube Terms of Service. All rights belong to respective clubs, UEFA, FIFA, and original publishers.
      </div>
    </div>
  );
}

