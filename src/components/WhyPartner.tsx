"use client";

import { motion } from "framer-motion";

const lines = [
  "If you own your masters, congratulations — you're ahead of the industry.",
  "Most artists sign them away before they understand what they've lost.",
  "",
  "But ownership alone doesn't finish the record.",
  "It doesn't mix the vocal. It doesn't cut the vinyl.",
  "It doesn't get your song into the film that changes everything.",
  "",
  "Ownership gives you the rights. It doesn't give you the infrastructure.",
  "",
  "A label offers services in exchange for ownership. That's the deal.",
  "You give up the masters, they give you the studio, the distribution, the team.",
  "",
  "Whole Body Studios offers the same services — without the exchange.",
  "",
  "You bring the masters. You bring the publishing. You bring the IP.",
  "We bring the studio. We bring the distribution. We bring the sync relationships.",
  "We bring the team.",
  "",
  "You keep everything you walked in with.",
  "We earn on what we help you build — not on what you already own.",
];

export default function WhyPartner() {
  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl text-center text-bone mb-4"
        >
          WHY PARTNER WITH US
        </motion.h2>
        <p className="text-center font-mono text-xs text-water uppercase tracking-widest mb-12">
          YOU OWN EVERYTHING. SO WHAT DO WE OFFER?
        </p>

        <div className="space-y-2">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: line === "" ? 1 : 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`font-body text-base ${
                line === "" ? "h-4" : i < 3 ? "text-ghost" : "text-bone"
              } leading-relaxed`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center border-t border-mercury pt-8"
        >
          <p className="font-display text-lg text-bone">
            The Old World asked:{" "}
            <span className="text-ghost">
              &ldquo;What can we take from you?&rdquo;
            </span>
          </p>
          <p className="font-display text-lg text-water mt-2">
            We ask:{" "}
            <span className="text-bone">
              &ldquo;What can we build with you?&rdquo;
            </span>
          </p>
          <p className="mt-8 font-mono text-xs text-water uppercase tracking-widest">
            100% MASTERS RETAINED · 100% PUBLISHING RETAINED · 100% IP
            RETAINED · ZERO EXTRACTION
          </p>
        </motion.div>
      </div>
    </section>
  );
}
