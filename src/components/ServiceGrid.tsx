"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HUDCorners from "@/components/ProductSwitcher/HUDCorners";

const services = [
  {
    title: "PRODUCTION",
    description:
      "Desert Studio tracking. Cloud mixing suite. Mastering lathe. Film unit.",
    facilities: [
      "Desert Studio (Morongo Valley, CA)",
      "Cloud Mixing (Pro Tools HD, UA)",
      "Mastering Lathe (vinyl cutting)",
      "Film Unit (RED Komodo, Ronin, drone)",
    ],
    pricing: "$400–$800/day or project rate",
    retains: "100% ownership of all recordings",
  },
  {
    title: "DISTRIBUTION",
    description: "Global DSP delivery and physical fulfillment.",
    facilities: [
      "Spotify, Apple Music, Amazon",
      "YouTube Music",
      "Vinyl pressing and fulfillment",
      "Bandcamp direct-to-fan",
    ],
    pricing: "12% of distribution revenue",
    retains: "100% ownership of masters",
  },
  {
    title: "SYNC LICENSING",
    description: "Placement in films, ads, TV, campaigns.",
    facilities: [
      "Catalog pitching",
      "Negotiation & contracts",
      "Brand campaigns",
      "TV and film placements",
    ],
    pricing: "20% commission of sync fee",
    retains: "100% composition rights · 80% of sync fee",
  },
  {
    title: "ARTIST DEVELOPMENT",
    description: "Creative coaching, repertoire curation, brand alignment.",
    facilities: [
      "Creative direction",
      "Repertoire curation",
      "Brand alignment",
      "Strategic planning",
    ],
    pricing: "Included in partnership",
    retains: "100% of all creative IP and decisions",
  },
];

export default function ServiceGrid() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl text-center text-bone mb-4"
        >
          THE STUDIO
        </motion.h2>
        <p className="text-center font-mono text-xs text-water uppercase tracking-widest mb-12">
          FOUR SERVICES · ONE PRINCIPLE · ZERO EXTRACTION
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative bg-steel border border-mercury p-6 hover:border-water transition-colors duration-300 group"
            >
              <HUDCorners color="border-water" />

              <h3 className="font-display text-xl text-bone mb-2">
                {svc.title}
              </h3>
              <p className="font-body text-sm text-ghost mb-4">
                {svc.description}
              </p>

              <ul className="space-y-1 mb-4">
                {svc.facilities.map((f) => (
                  <li key={f} className="font-mono text-xs text-ghost">
                    ▸ {f}
                  </li>
                ))}
              </ul>

              <div className="border-t border-mercury pt-3 mt-3">
                <p className="font-mono text-xs text-water uppercase">
                  Pricing: {svc.pricing}
                </p>
                <p className="font-mono text-xs text-ghost mt-1">
                  ✓ {svc.retains}
                </p>
              </div>

              <Link
                href="/apply"
                className="mt-4 inline-block font-mono text-xs text-water uppercase tracking-widest border border-water px-4 py-2 hover:bg-water hover:text-void transition-colors duration-200"
              >
                Inquire →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Fifth service — Booking (from wholebody.earth) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-6 bg-steel border border-mercury p-6 hover:border-water transition-colors duration-300 max-w-3xl mx-auto"
        >
          <HUDCorners color="border-water" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="font-display text-xl text-bone mb-2">
                ARTIST BOOKING & EVENTS
              </h3>
              <p className="font-body text-sm text-ghost">
                Live opportunities, thoughtful programming, clear
                coordination.
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-water uppercase">
                15% of confirmed booking fee
              </p>
              <p className="font-mono text-xs text-ghost mt-1">
                ✓ You approve every offer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
