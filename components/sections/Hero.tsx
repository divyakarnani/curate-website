"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left — Text */}
        <motion.div
          className="flex-1 md:max-w-[55%] relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-[12px] font-medium text-gray-700 bg-white mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-score-high animate-pulse" />
            NOW OPEN FOR EARLY ACCESS
          </div>

          <h1
            className="font-bold text-ink leading-[1.05]"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            The beauty app
            <br />
            that actually
            <br />
            knows{" "}
            <em className="text-purple-light not-italic font-bold">
              you.
            </em>
          </h1>

          <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.65] max-w-[480px] mt-6 mb-10">
            Curate consolidates the fragmented beauty journey.
            Discover, validate, and buy with confidence.
            No ads. No paid placements. Honest, personalized scores.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#waitlist"
              className="bg-purple text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl hover:bg-purple-dark transition-colors shadow-[0_4px_8px_rgba(156,126,168,0.4)] text-center"
            >
              Join the waitlist
            </a>
            <a
              href="#features"
              className="bg-white text-ink font-medium text-[14px] px-6 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors text-center"
            >
              See how it works ↓
            </a>
          </div>
        </motion.div>

        {/* Right — Gradient orb */}
        <motion.div
          className="flex-1 flex items-center justify-center md:max-w-[45%]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-orb" />
        </motion.div>
      </div>
    </section>
  );
}
