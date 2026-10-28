import React from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  badgeColor = "text-amber-400 bg-amber-500/10 border-amber-500/20",
  title,
  highlightText,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border mb-3 ${badgeColor}`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
        {title}{" "}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-amber-300">
            {highlightText}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

