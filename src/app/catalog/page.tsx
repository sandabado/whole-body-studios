"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HUDCorners from "@/components/ProductSwitcher/HUDCorners";

const projects = [
  {
    title: "∞ LOVE",
    artist: "Sandābādo",
    type: "Album",
    year: "2026",
    status: "AVAILABLE SEPTEMBER 26, 2026",
    description: "Debut Album · 13 Tracks · 52 Minutes",
    genres: "Soul Blues / Desert Rock",
    formats: ["180g Vinyl", "CD (6-panel)", "Digital"],
    streamUrl: "https://sandabado-music.vercel.app/music",
    composers: "Jesse Gawlik · Josh Tomaszewski · Christopher Kyser",
    statusBadge: "available" as const,
  },
  {
    title: "The Whole Body Series — Volumes I–V",
    artist: "Various Artists",
    type: "Compilation",
    year: "2026",
    status: "PLANNED Q4 2026",
    description: "Compilation Series",
    genres: "Various",
    formats: ["Vinyl", "Digital"],
    streamUrl: null,
    statusBadge: "planned" as const,
  },
  {
    title: "Living Earth Vol. 1",
    artist: "Various Artists",
    type: "Compilation",
    year: "2026",
    status: "MIXING",
    description: "Compilation",
    genres: "Soul / Blues",
    formats: ["Vinyl", "Digital"],
    streamUrl: null,
    statusBadge: "in-progress" as const,
  },
  {
    title: "Memory EP",
    artist: "Sarah Veya",
    type: "EP",
    year: "2026",
    status: "MASTERING",
    description: "Extended Play",
    genres: "Ambient / Soul",
    formats: ["Digital", "Vinyl"],
    streamUrl: null,
    statusBadge: "in-progress" as const,
  },
];

const badgeStyles = {
  available: "bg-water text-void",
  planned: "bg-ghost text-void",
  "in-progress": "bg-mercury text-bone",
};

export default function CatalogPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="relative z-10 py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl sm:text-4xl text-bone mb-4"
        >
          RECENT TRANSMISSIONS
        </motion.h1>
        <p className="max-w-2xl mx-auto font-body text-ghost leading-relaxed">
          Projects released through Studios. All artists retain 100%
          ownership. We earn on services rendered.
        </p>
      </section>

      {/* Featured release */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {projects[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-steel border border-mercury p-8"
            >
              <HUDCorners color="border-water" />
              <div className="flex flex-col md:flex-row gap-8">
                {/* Artwork placeholder */}
                <div className="w-full md:w-48 h-48 bg-carbon border border-mercury flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs text-ghost">
                    [ALBUM ART]
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-bone mb-1">
                    {projects[0].title}
                  </h2>
                  <p className="font-mono text-xs text-water uppercase tracking-widest mb-2">
                    {projects[0].artist}
                  </p>
                  <p className="font-body text-sm text-ghost mb-4">
                    {projects[0].description} · {projects[0].genres}
                  </p>
                  <p className="font-mono text-xs text-ghost mb-4">
                    Composers: {projects[0].composers}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[0].formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2 py-1 bg-carbon border border-mercury font-mono text-[10px] text-ghost uppercase"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-2 py-1 text-[10px] uppercase font-mono ${badgeStyles[projects[0].statusBadge]}`}
                    >
                      {projects[0].status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {projects[0].streamUrl && (
                      <Link
                        href={projects[0].streamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-water text-water font-mono text-xs uppercase tracking-widest hover:bg-water hover:text-void transition-colors duration-200"
                      >
                        Stream Preview →
                      </Link>
                    )}
                    <Link
                      href="https://sandabado-music.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-water text-void font-mono text-xs uppercase tracking-widest hover:shadow-water-glow transition-shadow duration-200"
                    >
                      Pre-save on Apple Music →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Remaining projects */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {projects.slice(1).map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-steel border border-mercury p-6"
            >
              <HUDCorners color="border-ghost" />
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-lg text-bone mb-1">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-xs text-ghost uppercase mb-1">
                    {proj.artist}
                  </p>
                  <p className="font-body text-sm text-ghost mb-2">
                    {proj.description}
                  </p>
                  <span
                    className={`px-2 py-1 text-[10px] uppercase font-mono ${badgeStyles[proj.statusBadge]}`}
                  >
                    {proj.status}
                  </span>
                </div>
                <Link
                  href="/apply"
                  className="px-4 py-2 border border-mercury text-ghost font-mono text-xs uppercase tracking-widest hover:border-water hover:text-water transition-colors duration-200"
                >
                  Notify Me →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
