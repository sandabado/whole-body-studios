"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HUDCorners from "@/components/ProductSwitcher/HUDCorners";
import FeedFirstBlock from "@/components/FeedFirstBlock";
import FAQSection from "@/components/FAQSection";

const services = [
  {
    title: "ARTIST DEVELOPMENT",
    description: "Creative coaching and directional support",
    details: [
      "Creative direction and repertoire curation",
      "Brand alignment and strategic positioning",
      "Long-term career planning",
      "Included in partnership — not a separate charge",
    ],
    pricing: "Flat fee or included in partnership agreement",
    retains: "✓ 100% of all creative IP and decisions",
  },
  {
    title: "PRODUCTION",
    description: "Full-scale recording and post-production",
    details: [
      "Desert Studio (Morongo Valley, CA)",
      "Cloud Mixing Suite (Pro Tools HD, Universal Audio)",
      "Mastering Lathe (vinyl cutting, direct-to-disc)",
      "Film Unit (RED Komodo, Ronin, drone, field audio)",
    ],
    pricing: "$400–$800/day or project rate",
    retains: "✓ 100% ownership of all recordings",
  },
  {
    title: "SYNC LICENSING",
    description: "Placement in films, ads, TV, campaigns",
    details: [
      "Catalog pitching to music supervisors",
      "Negotiation and contract management",
      "Brand campaign placements",
      "TV and film synchronization",
      "You approve every offer before submission",
    ],
    pricing: "20% commission of sync fee",
    retains:
      "✓ 100% of composition rights and publishing · 80% of sync fee",
  },
  {
    title: "DISTRIBUTION",
    description: "Global DSP delivery and physical fulfillment",
    details: [
      "Spotify, Apple Music, Amazon",
      "YouTube Music",
      "Vinyl pressing and fulfillment",
      "Bandcamp direct-to-fan sales",
    ],
    pricing: "12% of distribution revenue",
    retains: "✓ 100% ownership of masters · No upfront fees",
  },
  {
    title: "ARTIST BOOKING & EVENTS",
    description:
      "Live opportunities, thoughtful programming, clear coordination",
    details: [
      "Tour booking support",
      "Festival submission",
      "Private events and gatherings",
      "You approve every offer and keep control of your live work",
    ],
    pricing: "15% of confirmed booking fee",
    retains: "✓ You approve every offer · You keep control of your live work",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative z-10 py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl sm:text-4xl text-bone mb-4"
        >
          SERVICES BUILT FOR ARTISTS WHO OWN EVERYTHING
        </motion.h1>
        <p className="max-w-2xl mx-auto font-body text-ghost leading-relaxed">
          We earn on services rendered — never on ownership. Every service is
          priced transparently. You retain 100% of your masters, publishing,
          and IP.
        </p>
      </section>

      {/* Service blocks */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-steel border border-mercury p-8 hover:border-water transition-colors duration-300"
            >
              <HUDCorners color="border-water" />
              <h2 className="font-display text-xl text-bone mb-2">
                {svc.title}
              </h2>
              <p className="font-body text-sm text-ghost mb-4">
                {svc.description}
              </p>

              <ul className="space-y-2 mb-6">
                {svc.details.map((d) => (
                  <li key={d} className="font-mono text-xs text-bone">
                    ▸ {d}
                  </li>
                ))}
              </ul>

              <div className="border-t border-mercury pt-4 flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <p className="font-mono text-xs text-water uppercase">
                    Pricing
                  </p>
                  <p className="font-mono text-sm text-bone">
                    {svc.pricing}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-xs text-water uppercase">
                    Retention
                  </p>
                  <p className="font-mono text-sm text-bone">
                    {svc.retains}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feed First */}
      <FeedFirstBlock />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 text-center">
        <Link
          href="/apply"
          className="inline-block px-8 py-3 bg-water text-void font-mono text-sm uppercase tracking-widest hover:shadow-water-glow-lg transition-shadow duration-200"
        >
          Start Partnership Application →
        </Link>
      </section>
    </div>
  );
}
