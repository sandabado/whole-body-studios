"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import HUDCorners from "@/components/ProductSwitcher/HUDCorners";

const schema = z.object({
  artistName: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  genre: z.string().min(1, "Required"),
  stage: z.enum(["WRITING", "RECORDING", "RELEASED", "TOURING"]),
  portfolioPrimary: z.string().url("Must be a valid URL"),
  portfolioSecondary: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  servicesNeeded: z
    .array(z.string())
    .refine((v) => v.length > 0, "Select at least one"),
  whatTheyBuild: z.string().max(500, "500 chars max"),
  whyStudios: z.string().max(300, "300 chars max"),
  retainsIP: z.enum(["yes", "no", "unsure"]),
  consent: z.boolean().refine((v) => v === true, "You must agree to continue"),
  // Honeypot
  website: z.string().optional(), // hidden field — bots fill this
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Production / Recording",
  "Mixing / Mastering",
  "Distribution",
  "Sync Licensing",
  "Artist Development",
  "Film Scoring",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [gatewayVisible, setGatewayVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      servicesNeeded: [],
      portfolioSecondary: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.website) return; // bot detected — silently ignore

    setLoading(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-steel border border-water p-8 relative"
        >
          <HUDCorners color="border-water" />
          <h1 className="font-display text-2xl text-bone mb-4 text-center">
            Application Received
          </h1>
          <p className="font-body text-ghost leading-relaxed text-center mb-8">
            We review every submission within 14 days. If your work carries
            the{" "}
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-water"
            >
              frequency
            </motion.span>
            , we&apos;ll reach out.
          </p>
          <div className="text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-water text-water font-mono text-xs uppercase tracking-widest hover:bg-water hover:text-void transition-colors duration-200"
            >
              Return Home →
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen flex flex-col">
      {/* Gateway overlay */}
      <AnimatePresence>
        {gatewayVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[150] bg-void flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-display text-2xl text-water"
              >
                NOT EVERYONE WHO APPLIES IS CHOSEN.
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-display text-xl text-bone"
              >
                WE DON&apos;T TAKE EVERYONE.
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-mono text-sm text-water uppercase tracking-widest"
              >
                WE TAKE ARTISTS WHO CARRY THE FREQUENCY.
              </motion.div>
            </div>
            {/* Manual skip for impatient users */}
            <button
              onClick={() => setGatewayVisible(false)}
              className="absolute bottom-16 font-mono text-xs text-ghost hover:text-water transition-colors"
            >
              Skip gateway
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form container */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex-1 py-12 px-4"
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="font-display text-3xl text-bone text-center">
            Partnership Application
          </h1>

          {/* Artist Name */}
          <div>
            <label
              htmlFor="artistName"
              className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
            >
              Artist Name *
            </label>
            <input
              {...register("artistName")}
              id="artistName"
              className={`w-full bg-carbon border ${
                errors.artistName ? "border-red-500" : "border-mercury"
              } px-4 py-3 font-body text-bone focus:border-water focus:outline-none transition-colors`}
              placeholder="Your artist name or band name"
            />
            {errors.artistName && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.artistName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
            >
              Email *
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={`w-full bg-carbon border ${
                errors.email ? "border-red-500" : "border-mercury"
              } px-4 py-3 font-body text-bone focus:border-water focus:outline-none transition-colors`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
            >
              Phone
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="tel"
              className="w-full bg-carbon border border-mercury px-4 py-3 font-body text-bone focus:border-water focus:outline-none transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Genre */}
          <div>
            <label
              htmlFor="genre"
              className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
            >
              Genre *
            </label>
            <input
              {...register("genre")}
              id="genre"
              className={`w-full bg-carbon border ${
                errors.genre ? "border-red-500" : "border-mercury"
              } px-4 py-3 font-body text-bone focus:border-water focus:outline-none transition-colors`}
              placeholder="Soul Blues / Desert Rock / etc."
            />
            {errors.genre && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.genre.message}
              </p>
            )}
          </div>

          {/* Current Stage */}
          <div>
            <label className="block font-mono text-xs text-water uppercase tracking-wider mb-2">
              Current Stage *
            </label>
            <div className="flex flex-wrap gap-3">
              {(["WRITING", "RECORDING", "RELEASED", "TOURING"] as const).map(
                (stage) => (
                  <label
                    key={stage}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={stage}
                      {...register("stage")}
                      className="accent-water"
                    />
                    <span className="font-mono text-xs text-ghost uppercase">
                      {stage}
                    </span>
                  </label>
                )
              )}
            </div>
            {errors.stage && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.stage.message}
              </p>
            )}
          </div>

          {/* Portfolio Links */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="portfolioPrimary"
                className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
              >
                Primary Portfolio Link *
              </label>
              <input
                {...register("portfolioPrimary")}
                id="portfolioPrimary"
                type="url"
                className={`w-full bg-carbon border ${
                  errors.portfolioPrimary ? "border-red-500" : "border-mercury"
                } px-4 py-3 font-body text-bone focus:border-water focus:outline-none transition-colors`}
                placeholder="spotify.com/artist/... or youtube.com/..."
              />
              {errors.portfolioPrimary && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.portfolioPrimary.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="portfolioSecondary"
                className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
              >
                Secondary Portfolio Link
              </label>
              <input
                {...register("portfolioSecondary")}
                id="portfolioSecondary"
                type="url"
                className="w-full bg-carbon border border-mercury px-4 py-3 font-body text-bone focus:border-water focus:outline-none transition-colors"
                placeholder="bandcamp.com/... or personal website"
              />
              {errors.portfolioSecondary && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.portfolioSecondary.message}
                </p>
              )}
            </div>
          </div>

          {/* Services Needed */}
          <div>
            <label className="block font-mono text-xs text-water uppercase tracking-wider mb-2">
              What do you need? * (select at least one)
            </label>
            <div className="space-y-2">
              {serviceOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    {...register("servicesNeeded")}
                    value={opt}
                    className="accent-water"
                  />
                  <span className="font-mono text-xs text-ghost">{opt}</span>
                </label>
              ))}
            </div>
            {errors.servicesNeeded && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.servicesNeeded.message}
              </p>
            )}
          </div>

          {/* What are you building? */}
          <div>
            <label
              htmlFor="whatTheyBuild"
              className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
            >
              What are you building? (max 500 chars)
            </label>
            <textarea
              {...register("whatTheyBuild")}
              id="whatTheyBuild"
              rows={4}
              maxLength={500}
              className="w-full bg-carbon border border-mercury px-4 py-3 font-body text-bone focus:border-water focus:outline-none resize-none transition-colors"
              placeholder="Describe your project, goals, what you're trying to achieve..."
            />
            <div className="flex justify-between font-mono text-xs text-ghost mt-1">
              <span>{watch("whatTheyBuild")?.length || 0}/500</span>
              {errors.whatTheyBuild && (
                <span className="text-red-500">
                  {errors.whatTheyBuild.message}
                </span>
              )}
            </div>
          </div>

          {/* Why Whole Body Studios? */}
          <div>
            <label
              htmlFor="whyStudios"
              className="block font-mono text-xs text-water uppercase tracking-wider mb-2"
            >
              Why Whole Body Studios? (max 300 chars)
            </label>
            <textarea
              {...register("whyStudios")}
              id="whyStudios"
              rows={3}
              maxLength={300}
              className="w-full bg-carbon border border-mercury px-4 py-3 font-body text-bone focus:border-water focus:outline-none resize-none transition-colors"
              placeholder="What draws you to this model? What matters to you?"
            />
            <div className="flex justify-between font-mono text-xs text-ghost mt-1">
              <span>{watch("whyStudios")?.length || 0}/300</span>
              {errors.whyStudios && (
                <span className="text-red-500">
                  {errors.whyStudios.message}
                </span>
              )}
            </div>
          </div>

          {/* Retains IP */}
          <div>
            <label className="block font-mono text-xs text-water uppercase tracking-wider mb-2">
              Do you currently retain your masters/IP? *
            </label>
            <div className="flex gap-4">
              {(["yes", "no", "unsure"] as const).map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={opt}
                    {...register("retainsIP")}
                    className="accent-water"
                  />
                  <span className="font-mono text-xs text-ghost uppercase">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
            {errors.retainsIP && (
              <p className="font-mono text-xs text-red-500 mt-1">
                {errors.retainsIP.message}
              </p>
            )}
          </div>

          {/* Consent */}
          <div className="border-t border-mercury pt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-1 accent-water"
              />
              <span className="font-mono text-xs text-ghost">
                I understand Whole Body Studios operates on the Feed First
                model. Artists retain 100% IP. We earn on services rendered,
                not ownership. I agree to be contacted regarding partnership
                opportunities. *
              </span>
            </label>
            {errors.consent && (
              <p className="font-mono text-xs text-red-500 mt-2">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Honeypot — hidden from real users, catches bots */}
          <div className="hidden" aria-hidden="true">
            <input
              {...register("website")}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-water text-void font-mono text-sm uppercase tracking-widest hover:shadow-water-glow-lg transition-shadow duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "TRANSMITTING..." : "TRANSMIT"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
