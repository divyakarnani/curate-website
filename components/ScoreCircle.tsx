"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function ScoreCircle({
  score,
  label,
  size = 72,
  decorativeColor,
}: {
  score: number | null;
  label: string;
  size?: number;
  decorativeColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayed, setDisplayed] = useState(0);

  const color = decorativeColor
    ? decorativeColor
    : score === null
      ? "var(--score-none)"
      : score >= 7
        ? "var(--score-high)"
        : score >= 4
          ? "var(--score-mid)"
          : "var(--score-low)";

  useEffect(() => {
    if (!isInView || score === null) return;
    const duration = 800;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(parseFloat((eased * score).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, score]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `3px solid ${color}`,
          backgroundColor: score === null ? "transparent" : `${color}12`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={
          score === null
            ? `${label}: no score available`
            : `${label}: ${score.toFixed(1)} out of 10`
        }
      >
        <span
          style={{
            color,
            fontSize: size * 0.3,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {score === null ? "—" : displayed.toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
          /10
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
          {label}
        </span>
      </div>
    </div>
  );
}
