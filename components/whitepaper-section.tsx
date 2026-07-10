"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const papers = [
  {
    meta: "CS3259 Agentic AI · 2025–26",
    title: "SUBS: Synthetic User Behavior Simulation",
    subtitle:
      "Multi-Agent LLM Personas for Scalable, Psychologically-Grounded Pre-Release Usability Testing",
    authors: "Abhishek J Nair · Soumik Halder · Vaibhav Maraar",
    href: "/papers/subs",
    pdf: "/papers/SUBS-Whitepaper.pdf",
    tags: ["Python", "Gemini API", "Multi-Agent LLM", "Statistical Validation"],
  },
  {
    meta: "GFAIP-2025 · Model Law",
    title: "When the Law Meets the Machine Mind",
    subtitle:
      "A simple guide to the Global Framework on Artificial Intelligence and Robotic Personhood",
    authors: "Abhishek J Nair",
    href: "/papers/robot-law",
    pdf: "/papers/GFAIP-Robot-Law.pdf",
    tags: ["AI Policy", "Robotic Personhood", "AI Ethics"],
  },
];

export function WhitepaperSection() {
  return (
    <section className="w-full bg-white dark:bg-neutral-950 md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          White papers
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Research writing from my work and coursework — readable online,
          downloadable as PDF.
        </p>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 border-t border-neutral-200 dark:border-neutral-800"
        >
          {papers.map((paper) => (
            <motion.div
              key={paper.href}
              variants={reveal}
              className="border-b border-neutral-200 py-8 dark:border-neutral-800 md:py-10"
            >
              <div className="md:flex md:items-baseline md:justify-between md:gap-8">
                <div className="max-w-3xl">
                  <p className="text-xs text-neutral-500 mb-2">{paper.meta}</p>
                  <Link href={paper.href} className="group">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>
                  </Link>
                  <p className="mt-1 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 italic">
                    {paper.subtitle}
                  </p>
                  <p className="mt-2 text-xs text-neutral-500">{paper.authors}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex shrink-0 items-center gap-6 md:mt-0">
                  <Link
                    href={paper.href}
                    className="text-sm text-primary hover:underline"
                  >
                    Read →
                  </Link>
                  <a
                    href={paper.pdf}
                    download
                    className="text-sm text-primary hover:underline"
                  >
                    PDF ↓
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
