"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CrownIcon, MenuIcon, CloseIcon, FlameIcon } from "./Icons";

const NAV_LINKS = [
  { name: "Journey", href: "/journey" },
  { name: "UCL Hall", href: "/champions-league" },
  { name: "Critics vs Answers", href: "/critics-vs-answers" },
  { name: "Stats & Records", href: "/stats" },
  { name: "Family & Roots", href: "/family" },
  { name: "Giving Back", href: "/giving-back" },
  { name: "Videos", href: "/videos" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-rose-600 to-zinc-900 p-[1.5px] shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/25 transition-all">
            <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 text-lg tracking-wider">
                CR7
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-white text-base leading-none group-hover:text-amber-400 transition-colors">
              THE GOAT JOURNEY
            </span>
            <span className="text-[11px] font-medium tracking-widest text-zinc-400 uppercase mt-1">
              Unofficial Fan Tribute
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isActive
                    ? "bg-zinc-800/90 text-amber-400 shadow-sm border border-zinc-700/60"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800/40"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/journey"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-rose-600 to-amber-600 hover:from-amber-400 hover:to-rose-500 text-zinc-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5"
          >
            <CrownIcon className="w-4 h-4 text-zinc-950" />
            <span>Start Journey</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950/98 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? "bg-zinc-800 text-amber-400 border border-zinc-700"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-4">
            <Link
              href="/journey"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 py-3 rounded-xl font-bold text-zinc-950 bg-gradient-to-r from-amber-400 to-rose-500 shadow-md text-sm"
            >
              <CrownIcon className="w-4 h-4" />
              <span>Explore The Journey</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

