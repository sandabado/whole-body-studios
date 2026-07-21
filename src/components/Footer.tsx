"use client";

import { useState } from "react";
import Link from "next/link";

const footerWords = [
  { word: "Built", alt: "Forged" },
  { word: "Holds", alt: "Endures" },
  { word: "Is", alt: "Remains" },
];

export default function Footer() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <footer className="relative z-10 border-t border-mercury bg-void/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          {/* System status */}
          <div className="font-mono text-xs uppercase tracking-widest text-ghost flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-water rounded-full" />
            SYSTEM STATUS: ONLINE
          </div>

          {/* Mantra with hover easter egg */}
          <p className="font-mono text-sm text-ghost">
            So It Is{" "}
            {footerWords.map((fw, i) => (
              <span
                key={fw.word}
                className="cursor-default transition-colors duration-200"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{
                  color: hoverIndex === i ? "var(--color-water)" : undefined,
                }}
              >
                {hoverIndex === i ? fw.alt : fw.word}
                {i < footerWords.length - 1 ? " " : ""}
              </span>
            ))}
            . 🍀
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-ghost">
            <Link
              href="/legal/privacy"
              className="hover:text-water transition-colors duration-200"
            >
              Privacy
            </Link>
            <span className="text-mercury">|</span>
            <Link
              href="/legal/terms"
              className="hover:text-water transition-colors duration-200"
            >
              Terms
            </Link>
            <span className="text-mercury">|</span>
            <Link
              href="/contact"
              className="hover:text-water transition-colors duration-200"
            >
              Contact
            </Link>
            <span className="text-mercury">|</span>
            <a
              href="https://wholebody.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-water transition-colors duration-200"
            >
              wholebody.earth
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-ghost/60">
            wholebody.studios · Copyright © 2026 Whole Body Guild LLC
          </p>

          {/* Privacy stance */}
          <p className="font-mono text-xs text-ghost/40">
            This site does not track you. We do not sell your data. We
            protect it.
          </p>
        </div>
      </div>
    </footer>
  );
}
