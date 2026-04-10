"use client";

import SectionLabel from "@/components/SectionLabel";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Discover on TikTok / Instagram",
    sub: "Influencer content you can't trust",
  },
  {
    num: "02",
    title: "Validate on Reddit / YouTube",
    sub: "Conflicting opinions from strangers",
  },
  {
    num: "03",
    title: "Text your group chat",
    sub: "Waiting for a reply that may never come",
  },
  {
    num: "04",
    title: "Buy on Amazon / Sephora",
    sub: "And still second-guess at checkout",
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24" id="problem">
      <AnimatedContainer className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-16">
        <AnimatedItem className="md:w-[45%]">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight">
            The beauty journey
            <br />
            is{" "}
            <em className="text-purple-light not-italic font-bold">
              broken.
            </em>
          </h2>
          <p className="text-[15px] text-gray-700 leading-[1.65] max-w-[420px] mt-6">
            62% of consumers cite too many options or conflicting information as their biggest
            frustration. 58% say fake reviews and hidden sponsorships are a major barrier to
            purchase. The information exists, but it&apos;s scattered, biased, and impossible to trust.
          </p>
        </AnimatedItem>

        <AnimatedItem className="md:w-[55%]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`py-6 border-t border-gray-200 ${
                i === steps.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex gap-6">
                <span className="text-[17px] italic text-gray-300 shrink-0 w-8">
                  {step.num}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-ink mb-1">{step.title}</p>
                  <p className="text-[13px] text-gray-500">{step.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </AnimatedItem>
      </AnimatedContainer>
    </section>
  );
}
