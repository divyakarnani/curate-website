"use client";

import SectionLabel from "@/components/SectionLabel";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-lg bg-white/70 border border-purple/10 flex items-center justify-center mb-4">
      {children}
    </div>
  );
}

const features = [
  {
    num: "01",
    label: "SCORES",
    title: "Multi-Dimensional Scoring",
    body: "Every product scored across quality, value, sustainability, and personalization. No paid placements, ever.",
    accent: (
      <Icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      </Icon>
    ),
  },
  {
    num: "02",
    label: "AI",
    title: "AI Beauty Assistant",
    body: "Powered by Claude. Ask about ingredients, alternatives, or get a direct comparison for your exact skin concerns.",
    accent: (
      <Icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
          <line x1="9" y1="22" x2="15" y2="22" />
          <line x1="10" y1="2" x2="10" y2="5" />
          <line x1="14" y1="2" x2="14" y2="5" />
        </svg>
      </Icon>
    ),
  },
  {
    num: "03",
    label: "PRICE",
    title: "Best Price Finder",
    body: "Find the best price on products you love — click through and we'll take you straight to the product page, no searching required.",
    accent: (
      <Icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </Icon>
    ),
  },
  {
    num: "04",
    label: "FRIENDS",
    title: "Friend Scores",
    body: "Get ratings from friends you trust. People whose skin and taste you actually know.",
    accent: (
      <Icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </Icon>
    ),
  },
  {
    num: "05",
    label: "LISTS",
    title: "Lists",
    body: "Rank products you've already tried, save ones you want to, and create your own lists — think fall favorites or birthday gift ideas. Curate organizes everything by category, so what you need is always easy to find.",
    accent: (
      <Icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      </Icon>
    ),
  },
  {
    num: "06",
    label: "SEARCH",
    title: "Smart Search",
    body: "Search by name, scan a barcode in-store, or import from social media. Full picture instantly.",
    accent: (
      <Icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B7BB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </Icon>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <AnimatedContainer>
          <AnimatedItem>
            <SectionLabel>What We Built</SectionLabel>
            <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight mb-12">
              Everything you need to buy
              <br />
              with{" "}
              <em className="text-purple-light not-italic font-bold">
                confidence.
              </em>
            </h2>
          </AnimatedItem>
        </AnimatedContainer>

        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <AnimatedItem key={f.num}>
              <div className="rounded-lg p-7 h-full bg-purple-faint border border-[#E5DCF0]">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-purple mb-4">
                  {f.label}
                </p>
                {f.accent}
                <h3 className="text-[17px] font-semibold text-ink mb-2">{f.title}</h3>
                <p className="text-[14px] text-gray-700 leading-[1.6]">{f.body}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
