"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

const stats = [
  { value: "$227B", num: 227, prefix: "$", suffix: "B", caption: "Global beauty e-commerce in 2024, growing to $339B by 2029", source: "Statista, 2024" },
  { value: "62%", num: 62, prefix: "", suffix: "%", caption: "Cite too many options or conflicting information as their biggest frustration", source: "Curate Primary Research, N=90, 2025" },
  { value: "58%", num: 58, prefix: "", suffix: "%", caption: "Identify fake reviews or hidden sponsorships as a major barrier to purchase", source: "Curate Primary Research, N=90, 2025" },
  { value: "88%", num: 88, prefix: "", suffix: "%", caption: "Cart abandonment rate. Intent lost to paralysis at checkout", source: "Statista, 2024" },
  { value: "46.5%", num: 46.5, prefix: "", suffix: "%", caption: "Of Gen Z use social media as their primary search engine for products", source: "eMarketer, 2025" },
  { value: "1.8%", num: 1.8, prefix: "", suffix: "%", caption: "Average beauty e-commerce conversion rate. A fundamentally broken process", source: "eMarketer, 2025" },
];

function AnimatedStat({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(eased * stat.num);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, stat.num]);

  const formatted = stat.num % 1 !== 0 ? displayed.toFixed(1) : Math.round(displayed).toString();

  return (
    <div ref={ref} className="p-7 md:p-8" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <span
        className="font-bold leading-none block"
        style={{ fontSize: "clamp(56px, 7vw, 72px)", color: "#E8C5D8" }}
      >
        {stat.prefix}{formatted}{stat.suffix}
      </span>
      <p className="text-[14px] mt-3 leading-[1.5] max-w-[240px]" style={{ color: "rgba(255,255,255,0.65)" }}>
        {stat.caption}
      </p>
      <p className="text-[12px] italic mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
        {stat.source}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#1A1A1A" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <AnimatedContainer>
          <AnimatedItem>
            <p className="text-gray-500 text-[11px] font-semibold tracking-[0.15em] uppercase mb-3">
              Why Now
            </p>
            <h2
              className="font-bold text-white leading-[1.1] mb-12"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              Beauty is accelerating.
              <br />
              <em className="not-italic font-bold" style={{ color: "#C4A8D4" }}>
                Confidence hasn&apos;t.
              </em>
            </h2>
          </AnimatedItem>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {stats.map((stat) => (
            <AnimatedStat key={stat.value} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
