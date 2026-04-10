"use client";

import SectionLabel from "@/components/SectionLabel";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

const models = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: "Affiliate Commissions",
    body: "We earn a commission when shoppers buy through Curate. Scores and rankings are never influenced by commercial relationships. Ever.",
    badge: "PRIMARY REVENUE",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="7 17 17 7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    ),
    title: "Referral Traffic",
    body: "Like Kayak's model: retailers benefit from high-intent, informed buyers who've already validated their choice through Curate's scoring system.",
    badge: "RETAILER PARTNERSHIPS",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Aggregated Insights",
    body: "Anonymized, category-level data for brands: what truly drives purchase decisions. Zero personal data shared, ever.",
    badge: "B2B \u00B7 FUTURE",
  },
];

export default function BusinessModel() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <AnimatedContainer>
          <AnimatedItem>
            <SectionLabel>Business Model</SectionLabel>
            <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight mb-12">
              Revenue that aligns with{" "}
              <em className="text-purple-light not-italic font-bold">
                trust.
              </em>
            </h2>
          </AnimatedItem>

          <AnimatedItem>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {models.map((m, i) => (
                  <div
                    key={m.title}
                    className={`p-8 flex flex-col ${
                      i < models.length - 1
                        ? "border-b md:border-b-0 md:border-r border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="mb-5">{m.icon}</div>
                    <h3 className="text-[17px] font-bold text-ink mb-2">{m.title}</h3>
                    <p className="text-[14px] text-gray-700 leading-[1.6] mb-6 flex-1">
                      {m.body}
                    </p>
                    <div>
                      <span className="bg-purple-faint text-purple text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.15em]">
                        {m.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedItem>
        </AnimatedContainer>
      </div>
    </section>
  );
}
