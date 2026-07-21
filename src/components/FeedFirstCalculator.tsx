"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const splits = [
  { label: "Artist Royalty Pool", pct: 35 },
  { label: "Guild Treasury", pct: 25 },
  { label: "Guaranteed Stipend", pct: 20 },
  { label: "Distribution & Infra", pct: 12 },
  { label: "Founder Allocation", pct: 8 },
];

export default function FeedFirstCalculator() {
  const [revenue, setRevenue] = useState(75000);

  const artistWalks = Math.round(revenue * 0.35 + revenue * 0.2);
  const labelEquivalent = Math.round(revenue * 0.08);

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl text-center text-bone mb-2"
        >
          FEED FIRST CALCULATOR
        </motion.h2>
        <p className="text-center font-mono text-xs text-water uppercase tracking-widest mb-8">
          DRAG. WATCH THE MATH. SEE THE DIFFERENCE.
        </p>

        {/* Slider */}
        <div className="mb-8">
          <label className="font-mono text-xs text-ghost uppercase tracking-wider block mb-2">
            Gross Revenue
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="flex-1 h-2 bg-carbon border border-mercury appearance-none cursor-pointer accent-water"
            />
            <span className="font-mono text-lg text-water min-w-[100px] text-right">
              ${revenue.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-steel border border-mercury p-6 space-y-3">
          {splits.map((s) => {
            const amount = Math.round(revenue * (s.pct / 100));
            return (
              <div
                key={s.label}
                className="flex justify-between items-center"
              >
                <span className="font-mono text-xs text-bone uppercase tracking-wider">
                  {s.label}
                </span>
                <span className="font-mono text-sm text-ghost">
                  ${amount.toLocaleString()} ({s.pct}%)
                </span>
              </div>
            );
          })}

          <div className="border-t border-mercury pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="font-display text-sm text-water uppercase">
                Artist walks with:
              </span>
              <motion.span
                key={artistWalks}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="font-mono text-xl text-water"
              >
                ${artistWalks.toLocaleString()}
              </motion.span>
            </div>
            <p className="font-mono text-[10px] text-ghost mt-1">
              (Royalty Pool + Stipend)
            </p>
          </div>

          {/* Comparison */}
          <div className="border-t border-mercury pt-4 mt-4">
            <p className="font-mono text-xs text-ghost">
              Label equivalent (8%):{" "}
              <span className="text-bone">
                ${labelEquivalent.toLocaleString()}
              </span>
            </p>
            <p className="font-mono text-xs text-water mt-1">
              Difference: +${(artistWalks - labelEquivalent).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
