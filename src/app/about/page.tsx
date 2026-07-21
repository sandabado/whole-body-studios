"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HUDCorners from "@/components/ProductSwitcher/HUDCorners";

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="relative z-10 py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl sm:text-4xl text-bone mb-4"
        >
          ABOUT WHOLE BODY STUDIOS
        </motion.h1>
        <p className="max-w-2xl mx-auto font-body text-ghost leading-relaxed">
          Music and film are infrastructure, not content — production,
          distribution, and sync licensing for artists who keep what they
          make.
        </p>
      </section>

      {/* Founder */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-steel border border-mercury p-8"
          >
            <HUDCorners color="border-water" />
            <h2 className="font-display text-xl text-bone mb-4">
              Jesse Gawlik
            </h2>
            <p className="font-mono text-xs text-water uppercase tracking-widest mb-4">
              Founder — Whole Body Studios
            </p>
            <blockquote className="font-body text-ghost leading-relaxed italic">
              &ldquo;We&apos;re not building another label. We&apos;re
              building infrastructure that returns agency to the artist.
              Everything else is extraction.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl text-bone mb-4"
          >
            TEAM
          </motion.h2>
          <p className="font-body text-ghost leading-relaxed mb-6">
            Currently expanding. Applications welcome. We operate with a lean
            core team. As partnerships grow, so does the roster of
            collaborators.
          </p>
          <p className="font-body text-ghost leading-relaxed">
            If you&apos;re a producer, engineer, filmmaker, or strategist
            working in this ethos, reach out.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-4 py-2 border border-water text-water font-mono text-xs uppercase tracking-widest hover:bg-water hover:text-void transition-colors duration-200"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl text-bone mb-8"
          >
            VALUES
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                title: "Artist-First",
                desc: "Retain 100% ownership, always.",
              },
              {
                title: "Infrastructure Over Ownership",
                desc: "We earn on services rendered, never on masters.",
              },
              {
                title: "Revenue Transparency",
                desc: "Feed First Algorithm governs all splits.",
              },
              {
                title: "Privacy by Design",
                desc: "We do not track you. We protect it.",
              },
            ].map((v) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-mercury pl-4"
              >
                <h3 className="font-display text-base text-bone mb-1">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-ghost">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Entity */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl text-bone mb-4"
          >
            LEGAL ENTITY
          </motion.h2>
          <p className="font-body text-ghost leading-relaxed">
            Whole Body Guild LLC · Registered: California, 2026
          </p>
          <p className="font-body text-ghost leading-relaxed mt-2">
            All artist contracts are partnership agreements, not employment.
            No IP transfers ever.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 py-20 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-xl text-bone mb-6"
        >
          CONTACT
        </motion.h2>
        <div className="font-mono text-xs text-ghost space-y-2">
          <p>partnership@wholebody.studios</p>
          <p>sync@wholebody.studios</p>
          <p>records@wholebody.earth</p>
          <p>(952) 212-1170</p>
        </div>
      </section>
    </div>
  );
}
