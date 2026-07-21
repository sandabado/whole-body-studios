"use client";

import { useState } from "react";
import Link from "next/link";
import AppLauncherModal from "./AppLauncherModal";

export function ProductSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Icon zone — navigates home */}
        <Link
          href="/"
          className="font-display text-2xl text-water hover:opacity-80 transition-opacity"
          aria-label="Go to home"
        >
          ⊙
        </Link>

        {/* Text zone — opens launcher */}
        <button
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          className="font-display uppercase tracking-wider text-bone hover:text-water transition-colors duration-200 flex items-center gap-1"
        >
          Whole Body Studios
          <span
            className={`font-mono text-ghost transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>
      </div>

      <AppLauncherModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
