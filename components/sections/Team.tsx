"use client";

import SectionLabel from "@/components/SectionLabel";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

const members = [
  { name: "Valentina Kafati", role: "Co-Founder, Finance & Operations", initial: "V" },
  { name: "Gabriela de Oliveira", role: "Co-Founder, Growth & Strategy", initial: "G" },
  { name: "Divya Karnani", role: "Technical Lead, AI & Engineering", initial: "D" },
];

export default function Team() {
  return (
    <section className="py-16 md:py-24" id="team">
      <AnimatedContainer className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-16">
        <AnimatedItem className="md:w-[40%]">
          <SectionLabel>The Team</SectionLabel>
          <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight">
            Built by people who
            <br />
            lived the{" "}
            <em className="text-purple-light not-italic font-bold">
              problem.
            </em>
          </h2>
        </AnimatedItem>

        <AnimatedItem className="md:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-5">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="w-12 h-12 rounded-full bg-purple-faint flex items-center justify-center">
                <span className="text-[18px] font-semibold text-purple">{m.initial}</span>
              </div>
              <h3 className="text-[15px] font-semibold text-ink mt-4 mb-1">{m.name}</h3>
              <p className="text-[13px] text-gray-500 leading-[1.4]">{m.role}</p>
            </div>
          ))}
        </AnimatedItem>
      </AnimatedContainer>
    </section>
  );
}
