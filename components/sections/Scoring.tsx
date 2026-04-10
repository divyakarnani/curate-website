"use client";

import SectionLabel from "@/components/SectionLabel";
import ScoreCircle from "@/components/ScoreCircle";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

const scores = [
  {
    score: 7.7,
    title: "Objective Score",
    body: "Based on formulation quality, value for price, and sustainability. No bias, no ads.",
  },
  {
    score: 8.8,
    title: "Match Score",
    body: "Personalized to your skin type, past ratings, and preferences. Popularity isn't the same as fit.",
  },
  {
    score: 5.8,
    title: "Friend Score",
    body: "See how your friends rated this product. Recommendations from people you actually trust.",
  },
  {
    score: 8.4,
    title: "Community Score",
    body: "Real ratings from all Curate users. No bots, no fake reviews.",
  },
];

export default function Scoring() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <AnimatedContainer>
          <AnimatedItem>
            <SectionLabel>The Scoring System</SectionLabel>
            <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight">
              Four signals. One honest{" "}
              <em className="text-purple-light not-italic font-bold">
                answer.
              </em>
            </h2>
            <p className="text-[15px] text-gray-700 mt-4 mb-12 max-w-[520px] leading-[1.65]">
              Not one opaque algorithm. Four transparent signals, each earned independently.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {scores.map((s, i) => (
                  <div
                    key={s.title}
                    className={`px-7 py-8 flex flex-col items-center text-center ${
                      i < scores.length - 1 ? "md:border-r md:border-gray-200" : ""
                    } ${i < 2 ? "border-b md:border-b-0 border-gray-200" : ""} ${
                      i === 0 ? "border-r border-gray-200 md:border-r" : ""
                    } ${i === 2 ? "border-r border-gray-200 md:border-r" : ""}`}
                  >
                    <ScoreCircle
                      score={s.score}
                      label=""
                      size={72}
                    />
                    <h3 className="text-[15px] font-semibold text-ink mt-6 mb-2">{s.title}</h3>
                    <p className="text-[13px] text-gray-700 leading-[1.6]">{s.body}</p>
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
