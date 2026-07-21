"use client";

import { motion } from "framer-motion";

const allocations = [
  {
    label: "Artist Royalty Pool",
    pct: 35,
    desc: "Split among all active artists proportional to contribution",
  },
  {
    label: "Guild Treasury",
    pct: 25,
    desc: "Operating fund for equipment, studio time, marketing",
  },
  {
    label: "Guaranteed Stipend",
    pct: 20,
    desc: "Guaranteed monthly minimum for active partners",
  },
  {
    label: "Distribution & Infra",
    pct: 12,
    desc: "Platform fees, hosting, software, admin",
  },
  { label: "Founder Allocation", pct: 8, desc: "Leadership compensation" },
];

export default function FeedFirstBlock() {
  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl text-center text-bone mb-2"
        >
          THE FEED FIRST ALGORITHM
        </motion.h2>
        <p className="text-center font-mono text-xs text-water uppercase tracking-widest mb-12">
          EVERY DOLLAR SPLITS. THE ARTIST EATS FIRST.
        </p>

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mb-12 text-center space-y-4"
        >
          <p className="font-body text-ghost leading-relaxed">
            The Old World turned music into extraction.
          </p>
          <p className="font-body text-ghost leading-relaxed">
            The label owns the masters. The artist gets 8%.
          </p>
          <p className="font-body text-ghost leading-relaxed">
            The platform controls distribution. The musician rents their own
            voice.
          </p>
          <p className="font-display text-lg text-water mt-6">
            Whole Body Studios inverts this.
          </p>
          <p className="font-body text-bone leading-relaxed">
            Artists retain 100% masters, publishing, and IP.
          </p>
          <p className="font-body text-bone leading-relaxed">
            We earn on production, distribution, and placement — never on
            ownership.
          </p>
        </motion.div>

        {/* Bars */}
        <div className="space-y-4">
          {allocations.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col gap-1"
            >
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-xs text-bone uppercase tracking-wider">
                  {a.label}
                </span>
                <span className="font-mono text-sm text-water">
                  {a.pct}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-2 bg-carbon border border-mercury overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${a.pct}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15 + 0.3,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-full bg-water"
                />
              </div>
              <p className="font-mono text-[10px] text-ghost">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center font-display text-xl text-water"
        >
          The artist eats first. Always.
        </motion.p>
      </div>
    </section>
  );
}
