"use client";

import React, { useEffect, useId, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// A 5-year NIFTY-50-shaped ride: steady climb, the COVID cliff, then the long
// bull run — the same price-to-terrain idea Scout's Market Rider game is
// built on, scrubbed by scroll instead of a dirt bike.
const RIDE_PATH =
  "M 0 150 C 30 146, 55 141, 85 138 C 112 135, 126 127, 138 117 C 148 109, 152 134, 158 162 C 163 186, 169 197, 177 194 C 191 189, 206 161, 226 147 C 251 129, 271 121, 296 125 C 316 128, 331 116, 351 99 C 371 82, 386 97, 406 91 C 431 84, 451 61, 471 51 C 483 45, 493 42, 500 40";

export function ScoutMarketRide({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const clipId = useId();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const riderX = useMotionValue(0);
  const riderY = useMotionValue(150);

  const placeRider = (v: number) => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    const pt = path.getPointAtLength(Math.min(Math.max(v, 0), 1) * len);
    riderX.set(pt.x);
    riderY.set(pt.y);
  };

  useEffect(() => {
    placeRider(progress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(progress, "change", placeRider);

  const clipWidth = useTransform(progress, [0, 1], [0, 500]);
  const crashOpacity = useTransform(progress, [0.3, 0.42], [0, 1]);
  const xpOpacity = useTransform(progress, [0.88, 0.98], [0, 1]);
  const xpY = useTransform(progress, [0.88, 0.98], [8, 0]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg border-2 border-neutral-900 bg-white shadow-[6px_6px_0_0_#C3E41D] dark:border-neutral-100 dark:bg-neutral-950 ${className}`}
    >
      {/* notebook-grid backdrop — a nod to Scout's design system */}
      <div
        aria-hidden
        className="absolute inset-0 text-neutral-400 opacity-30 dark:text-neutral-600"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <svg
        viewBox="0 0 500 240"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <clipPath id={clipId}>
            <motion.rect x="0" y="0" height="240" style={{ width: clipWidth }} />
          </clipPath>
        </defs>

        {/* area under the ride, revealed with the line */}
        <path
          d={`${RIDE_PATH} L 500 240 L 0 240 Z`}
          fill="#C3E41D"
          fillOpacity="0.18"
          clipPath={`url(#${clipId})`}
        />

        {/* the market line, drawn by scroll */}
        <motion.path
          ref={pathRef}
          d={RIDE_PATH}
          fill="none"
          stroke="#C3E41D"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: progress }}
          className="drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]"
        />

        {/* the rider */}
        <motion.circle
          cx={riderX}
          cy={riderY}
          r="6"
          fill="#C3E41D"
          stroke="currentColor"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
          className="text-neutral-900 dark:text-neutral-100"
        />
      </svg>

      {/* labels */}
      <p className="absolute left-3 top-2.5 font-mono text-[9px] uppercase tracking-widest text-neutral-500 md:text-[10px]">
        Market Rider · NIFTY 50 · 5Y
      </p>

      <motion.p
        style={{ opacity: crashOpacity }}
        className="absolute left-[26%] top-[86%] -translate-y-full font-mono text-[9px] text-neutral-500 md:text-[10px]"
      >
        ↓ COVID crash
      </motion.p>

      <motion.span
        style={{ opacity: xpOpacity, y: xpY }}
        className="absolute right-3 top-[8%] rounded border border-neutral-900 bg-[#C3E41D] px-1.5 py-0.5 font-mono text-[9px] font-bold text-neutral-900 md:text-[10px]"
      >
        +250 XP
      </motion.span>
    </div>
  );
}
