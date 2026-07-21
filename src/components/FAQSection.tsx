"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do I need to sign away my rights?",
    a: "No. Ever. Artists retain 100% of masters, publishing, and IP. We earn on services rendered — not ownership.",
  },
  {
    q: "What happens if I want to leave?",
    a: "You can leave anytime. Your recordings, masters, and IP stay yours. No recoupment clauses. No hidden fees.",
  },
  {
    q: "How does the stipend work?",
    a: "Active partners receive a guaranteed monthly minimum (20% of revenue) regardless of monthly performance. This ensures stability.",
  },
  {
    q: "Is there a commitment period?",
    a: "Partnerships are ongoing relationships, not contracts. We renew quarterly based on mutual satisfaction.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl text-center text-bone mb-8">
          COMMON QUESTIONS
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-steel border border-mercury hover:border-water/50 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-4 flex justify-between items-center"
              >
                <span className="font-display text-base text-bone">
                  {faq.q}
                </span>
                <span className="font-mono text-water text-xl">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 font-body text-sm text-ghost leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
