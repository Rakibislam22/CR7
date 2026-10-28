import React from "react";
import Link from "next/link";
import { CrownIcon, HeartIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-rose-600 p-[1.5px]">
                <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 text-sm">
                    CR7
                  </span>
                </div>
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg">
                THE GOAT JOURNEY
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              An interactive, storytelling archive dedicated to the unprecedented career, discipline, and legacy of Cristiano Ronaldo. From the cobbled alleys of Madeira to the summit of world football.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg w-fit">
              <CrownIcon className="w-4 h-4 text-amber-400" />
              <span>900+ Official Goals • 5 UCL Trophies • 5 Ballons d&apos;Or</span>
            </div>
          </div>

          {/* Quick Exploration */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Explore The Archive
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/journey" className="hover:text-amber-400 transition-colors">
                  Career Timeline (8 Eras)
                </Link>
              </li>
              <li>
                <Link href="/champions-league" className="hover:text-amber-400 transition-colors">
                  Mr. Champions League Hall
                </Link>
              </li>
              <li>
                <Link href="/critics-vs-answers" className="hover:text-amber-400 transition-colors">
                  Critics vs Answers
                </Link>
              </li>
              <li>
                <Link href="/stats" className="hover:text-amber-400 transition-colors">
                  Career Statistics & Records
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-amber-400 transition-colors">
                  Iconic Match Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Humanity & About */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Humanity & Roots
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/family" className="hover:text-amber-400 transition-colors">
                  Family & Madeira Roots
                </Link>
              </li>
              <li>
                <Link href="/giving-back" className="hover:text-amber-400 transition-colors">
                  Charity & Global Tributes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  Sources, Data & Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Tribute Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-semibold text-zinc-400">
              Disclaimer: Non-commercial, unofficial fan tribute website.
            </p>
            <p>
              All video embeds are hosted by YouTube and remain the intellectual property of UEFA, FIFA, clubs, and their respective owners. No commercial monetization or copyright infringement intended.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400 whitespace-nowrap">
            <span>Crafted with admiration</span>
            <HeartIcon className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for football history</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

