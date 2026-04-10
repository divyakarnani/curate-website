"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ScoreCircle from "@/components/ScoreCircle";

interface ProductData {
  product: {
    id: string;
    name: string;
    brand: string;
    category: string;
    image_url: string | null;
    msrp_usd: number | null;
  };
  objectiveScore: number;
  communityScore: number | null;
  matchScore: number;
  friendScore: number;
}

export default function ProductCarousel({ products }: { products: ProductData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollButtons() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  }

  if (products.length === 0) {
    return (
      <div className="bg-purple-faint rounded-lg p-12 text-center">
        <p className="text-gray-500">Products loading...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center hover:border-gray-300 transition-colors"
          aria-label="Scroll left"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center hover:border-gray-300 transition-colors"
          aria-label="Scroll right"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </button>
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((p, i) => (
          <motion.div
            key={p.product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="snap-start shrink-0 w-[280px] bg-white border border-gray-200 rounded-lg overflow-hidden cursor-default transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          >
            {/* Image area */}
            <div className="relative h-[200px] bg-purple-faint flex items-center justify-center">
              {p.product.image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.product.image_url}
                  alt={p.product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[48px] font-bold text-purple opacity-30">
                  {p.product.brand?.[0] ?? "C"}
                </span>
              )}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-md border border-gray-200 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
                {p.product.brand}
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-[15px] font-semibold text-ink mb-1 line-clamp-2 leading-snug">
                {p.product.name}
              </h3>
              <p className="text-[13px] text-gray-500 mb-4">
                {p.product.category}
                {p.product.msrp_usd ? ` · $${p.product.msrp_usd}` : ""}
              </p>

              {/* Score grid */}
              <div className="grid grid-cols-4 gap-0 border-t border-gray-100 pt-4">
                <div className="flex justify-center border-r border-gray-100">
                  <ScoreCircle score={p.objectiveScore} label="Objective" size={44} />
                </div>
                <div className="flex justify-center border-r border-gray-100">
                  <ScoreCircle score={p.matchScore} label="Match" size={44} />
                </div>
                <div className="flex justify-center border-r border-gray-100">
                  <ScoreCircle score={p.friendScore} label="Friends" size={44} />
                </div>
                <div className="flex justify-center">
                  <ScoreCircle score={p.communityScore} label="Community" size={44} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
