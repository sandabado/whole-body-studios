"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(1, "Required"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

const subjectOptions = [
  "Partnership Inquiry",
  "Sync Submission",
  "Press & Media",
  "General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      // For now, just show success without API
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-steel border border-water p-8 text-center"
        >
          <h1 className="font-display text-2xl text-bone mb-4">
            Transmission Sent
          </h1>
          <p className="font-body text-ghost leading-relaxed mb-8">
            We respond within 48 hours. Thank you for reaching out.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 border border-water text-water font-mono text-xs uppercase tracking-widest hover:bg-water hover:text-void transition-colors duration-200"
          >
            Return Home →
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <div className="relative z-10 flex-1 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl text-bone text-center mb-4"
          >
            GET IN TOUCH
          </motion.h1>
          <p className="text-center font-body text-ghost leading-relaxed mb-12">
            Business inquiries, sync submissions, partnership questions. We
            respond within 48 hours.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-water uppercase tracking-wider mb-2">
                Name *
              </label>
              <input
                {...register("name")}
                className={`w-full bg-carbon border ${
                  errors.name ? "border-red-500" : "border-mercury"
                } px-4 py-3 font-body text-bone focus:border-water focus:outline-none`}
              />
              {errors.name && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-water uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                className={`w-full bg-carbon border ${
                  errors.email ? "border-red-500" : "border-mercury"
                } px-4 py-3 font-body text-bone focus:border-water focus:outline-none`}
              />
              {errors.email && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block font-mono text-xs text-water uppercase tracking-wider mb-2">
                Subject *
              </label>
              <select
                {...register("subject")}
                className={`w-full bg-carbon border ${
                  errors.subject ? "border-red-500" : "border-mercury"
                } px-4 py-3 font-body text-bone focus:border-water focus:outline-none`}
              >
                <option value="">Select...</option>
                {subjectOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-water uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                {...register("message")}
                rows={6}
                className={`w-full bg-carbon border ${
                  errors.message ? "border-red-500" : "border-mercury"
                } px-4 py-3 font-body text-bone focus:border-water focus:outline-none resize-none`}
              />
              {errors.message && (
                <p className="font-mono text-xs text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-water text-void font-mono text-sm uppercase tracking-widest hover:shadow-water-glow-lg transition-shadow duration-200"
            >
              Send Transmission →
            </button>
          </form>

          {/* Direct paths */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 border-t border-mercury pt-8"
          >
            <h2 className="font-display text-lg text-bone mb-4 text-center">
              DIRECT PATHS
            </h2>
            <div className="font-mono text-xs text-ghost space-y-2 text-center">
              <p>Partnership Applications:</p>
              <a
                href="mailto:partnership@wholebody.studios"
                className="text-water hover:underline"
              >
                partnership@wholebody.studios
              </a>
              <p className="mt-4">Sync Submissions:</p>
              <a
                href="mailto:sync@wholebody.studios"
                className="text-water hover:underline"
              >
                sync@wholebody.studios
              </a>
              <p className="mt-4">Record Inquiries:</p>
              <a
                href="mailto:records@wholebody.earth"
                className="text-water hover:underline"
              >
                records@wholebody.earth
              </a>
              <p className="mt-4">Phone:</p>
              <p>(952) 212-1170</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
