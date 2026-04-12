import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import Scoring from "@/components/sections/Scoring";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import BusinessModel from "@/components/sections/BusinessModel";
import Team from "@/components/sections/Team";
import WaitlistCTA from "@/components/sections/WaitlistCTA";

function ProductsFallback() {
  return (
    <section className="py-16 md:py-24" id="products">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-96 bg-gray-100 rounded-lg animate-pulse" />
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <Scoring />
      <Suspense fallback={<ProductsFallback />}>
        <Products />
      </Suspense>
      <HowItWorks />
      <Stats />
      <BusinessModel />
      <Team />
      <WaitlistCTA />
    </>
  );
}
