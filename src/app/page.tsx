"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Ticker from "@/components/Ticker";
import FeedFirstBlock from "@/components/FeedFirstBlock";
import FeedFirstCalculator from "@/components/FeedFirstCalculator";
import ServiceGrid from "@/components/ServiceGrid";
import WhyPartner from "@/components/WhyPartner";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone leading-tight">
            INFRASTRUCTURE, NOT A LABEL.
          </h1>

          <p className="mt-8 font-body text-base sm:text-lg text-ghost leading-relaxed max-w-2xl mx-auto">
            Whole Body Studios provides production, distribution, and sync
            licensing for artists who retain everything.
          </p>

          <p className="mt-4 font-body text-base sm:text-lg text-bone leading-relaxed">
            We earn on services rendered — never on ownership.
          </p>

          <p className="mt-6 font-display text-lg text-water">
            The artist eats first. Always.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="px-8 py-3 bg-water text-void font-mono text-sm uppercase tracking-widest hover:shadow-water-glow-lg transition-shadow duration-200"
            >
              Apply for Partnership →
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-mercury text-bone font-mono text-sm uppercase tracking-widest hover:border-water hover:text-water transition-colors duration-200"
            >
              View Services
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-12 font-mono text-xs text-water uppercase tracking-widest">
            FEED FIRST · ARTIST-OWNED · ZERO EXTRACTION
          </p>
        </motion.div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Services Grid */}
      <ServiceGrid />

      {/* Why Partner */}
      <WhyPartner />

      {/* Feed First Algorithm */}
      <FeedFirstBlock />

      {/* Feed First Calculator */}
      <FeedFirstCalculator />

      {/* Apply CTA */}
      <section className="relative z-10 py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl text-bone mb-6">
            READY TO PARTNER?
          </h2>
          <p className="font-body text-ghost leading-relaxed mb-8">
            We review every submission within 14 days. If it&apos;s a fit,
            we reach out.
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 py-3 bg-water text-void font-mono text-sm uppercase tracking-widest hover:shadow-water-glow-lg transition-shadow duration-200"
          >
            Start Application →
          </Link>
          <div className="mt-8 font-mono text-xs text-ghost space-y-1">
            <p>Email: partnership@wholebody.studios</p>
            <p>Sync submissions: sync@wholebody.studios</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
