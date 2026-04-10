"use client";

import WaitlistForm from "@/components/WaitlistForm";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export default function WaitlistCTA() {
  return (
    <section className="bg-purple-faint py-24" id="waitlist">
      <AnimatedContainer className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <AnimatedItem>
          <h2
            className="font-bold text-ink leading-tight max-w-[480px] mx-auto"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Your skin deserves
            <br />
            better{" "}
            <em className="text-purple-light not-italic font-bold">
              information.
            </em>
          </h2>
          <p className="text-[15px] text-gray-700 mt-4 mb-10 leading-[1.65] mx-auto max-w-[440px]">
            Join the waitlist for early access.
          </p>
        </AnimatedItem>

        <AnimatedItem>
          <WaitlistForm />
          <p className="text-[12px] text-gray-500 text-center mt-4 tracking-wide">
            No ads. No paid placements. Honest, personalized scores.
          </p>
        </AnimatedItem>
      </AnimatedContainer>
    </section>
  );
}
