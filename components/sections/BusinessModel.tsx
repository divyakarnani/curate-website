"use client";

import SectionLabel from "@/components/SectionLabel";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export default function BusinessModel() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <AnimatedContainer>
          <AnimatedItem>
            <SectionLabel>Business Model</SectionLabel>
            <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight mb-4">
              Revenue that aligns with{" "}
              <em className="text-purple-light not-italic font-bold">
                trust.
              </em>
            </h2>
          </AnimatedItem>

          <AnimatedItem>
            <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.7] max-w-2xl">
              We earn a commission when shoppers buy through Curate. Scores and rankings are never influenced by commercial relationships. Ever.
            </p>
          </AnimatedItem>
        </AnimatedContainer>
      </div>
    </section>
  );
}
