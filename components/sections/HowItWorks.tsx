"use client";

import SectionLabel from "@/components/SectionLabel";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Search or scan",
    body: "Find any product by name, barcode, or social media import",
  },
  {
    num: "02",
    title: "Check scores",
    body: "See all four signals: objective, match, friends, community",
  },
  {
    num: "03",
    title: "Ask the AI",
    body: "Get a personalized breakdown for your exact skin concerns",
  },
  {
    num: "04",
    title: "Find best price",
    body: "Compare retailers and click through at the lowest price",
  },
  {
    num: "05",
    title: "Rate & share",
    body: "Help your friends buy better too",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <AnimatedContainer>
          <AnimatedItem>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight mb-12">
              Discover. Decide. Buy.{" "}
              <em className="text-purple-light not-italic font-bold">
                Done.
              </em>
            </h2>
          </AnimatedItem>

          <AnimatedItem>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`p-7 ${
                      i < steps.length - 1
                        ? "border-b md:border-b-0 md:border-r border-gray-200"
                        : ""
                    }`}
                  >
                    <span className="text-[13px] italic text-gray-300 block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-[15px] font-semibold text-ink mb-2">{step.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-[1.55]">{step.body}</p>
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
