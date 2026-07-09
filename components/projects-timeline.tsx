"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { ScoutMarketRide } from "@/components/scout-market-ride";

// Staggered blur-reveal, echoing the hero's BlurText entrance.
const revealList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const revealItem = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function ProjectsTimeline() {
  const data = [
    {
      title: "June 2026",
      content: (
        <div>
          <motion.div
            className="mb-8"
            variants={revealList}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h3
              variants={revealItem}
              className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
            >
              Scout — Family Investing App for Teenagers
            </motion.h3>
            <motion.p
              variants={revealItem}
              className="text-xs text-neutral-600 dark:text-neutral-400 mb-4"
            >
              June 2026 • Personal Project
            </motion.p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-4 list-disc list-inside">
              <motion.li variants={revealItem}>
                Built a gamified, two-sided investing platform where teenagers learn to invest before touching real money — teens study, practice with virtual money, and pitch real investment ideas, while parents review, approve, and set guardrails from their own console.
              </motion.li>
              <motion.li variants={revealItem}>
                Authored Scout Academy, a Duolingo-style curriculum of 46 original story-driven lessons across 5 modules — every lesson is pure JSON rendered by a multi-screen player, backed by a custom progress engine (XP, investor levels, streaks, achievements) exposed through a single useSyncExternalStore hook.
              </motion.li>
              <motion.li variants={revealItem}>
                Engineered Market Rider, a Matter.js physics game where a dirt bike rides terrain generated from 5 years of real NIFTY 50 price history — Catmull-Rom smoothing, a full trick and combo system, live price ticker, synthesized WebAudio sound, and a fixed-timestep simulation with render interpolation.
              </motion.li>
              <motion.li variants={revealItem}>
                Implemented Google OAuth via Supabase Auth with persistent sessions, protected routes, and automatic profile syncing into Postgres under row-level security.
              </motion.li>
              <motion.li variants={revealItem}>
                Applied a neo-brutalist design system (bold borders, hard shadows, notebook-grid motifs) consistently across 25+ screens, with a mock-first architecture shaped to mirror the future Supabase schema.
              </motion.li>
            </ul>
            <motion.div variants={revealItem} className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Live Demo:</span>{" "}
                <a href="https://app.scoutapp.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  app.scoutapp.in
                </a>
                {" • "}
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/hea7hen/Scout.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/hea7hen/Scout.com
                </a>
              </p>
            </motion.div>
            <motion.div variants={revealItem} className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">React 19</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">React Router 7</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Supabase</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Matter.js</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Tailwind CSS</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Radix UI</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Framer Motion</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">WebAudio API</span>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScoutMarketRide className="h-40 md:h-44 lg:h-60 w-full" />
            <Image
              src="/images/scout.png"
              alt="Scout - Give them a 15-year head start"
              width={1470}
              height={755}
              className="rounded-lg object-cover object-left h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 2025",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              GYMMER — Gym Discovery Platform
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">November 2025 • Personal Project</p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-4 list-disc list-inside">
              <li>Developed a city-wide gym discovery platform for Bangalore, enabling users to explore and compare 90+ verified independent gyms with accurate pricing, amenities, images, and contact details, improving discovery beyond large commercial chains.</li>
              <li>Integrated a subscription-based paywall using Razorpay, implementing secure payments, subscription lifecycle logic, webhook validation, and role-based premium access.</li>
              <li>Built a full-stack system with React, TypeScript, and Vite frontend, and Firebase (Firestore, Authentication, Storage) backend, featuring advanced search filters including neighborhood-based search, price sliders, and amenities selection.</li>
              <li>Developed an admin dashboard supporting bulk gym management, CSV import/export, Firebase Storage image handling, and analytics tracking for impressions and contact clicks.</li>
              <li>Implemented a responsive, mobile-first interface using Tailwind CSS and real-time synchronization with React Query for caching, background refresh, and fast UX.</li>
            </ul>
            <div className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Live Demo:</span>{" "}
                <a href="https://gymmer-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  gymmer.vercel.app
                </a>
                {" • "}
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/hea7hen/Gymmer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/hea7hen/Gymmer
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">React</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">TypeScript</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Vite</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Firebase</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Razorpay</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">React Query</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Tailwind CSS</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="/images/gymmer-1.png" 
              alt="GYMMER - Gym Discovery" 
              width={500} 
              height={500} 
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
            />
            <Image 
              src="/images/gymmer-2.png" 
              alt="GYMMER - Pricing" 
              width={500} 
              height={500} 
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2025",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              SnackDash — Campus Food Delivery Platform
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
              June 2025 •{" "}
              
            </p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-6 list-disc list-inside">
              <li>Developed a peer-to-peer food delivery platform for college campuses, enabling students to order from on-campus vendors and earn money as couriers, addressing last-mile delivery in closed-campus environments.</li>
              <li>Built a full-stack application using Next.js and Firebase, implementing real-time order tracking, push notifications, and secure authentication with role-based access for customers and delivery partners.</li>
              <li>Designed a dual-sided marketplace with an order management system, courier matching algorithm, and payment integration for seamless transactions and fee distribution.</li>
              <li>Implemented responsive UI with real-time updates using Firebase Realtime Database, enabling live order status tracking and instant notifications for order placement, acceptance, and delivery.</li>
            </ul>
            <div className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Live Demo:</span>{" "}
                <a href="https://campus-food-delivery-service.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Live Demo
              </a>
              {" • "}
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/hea7hen/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/hea7hen/snackdash
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Next.js</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Firebase</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Real-time Database</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Push Notifications</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="/images/snackdash-1.png" 
              alt="SnackDash - Food Delivery" 
              width={500} 
              height={500} 
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
            />
            <Image 
              src="/images/snackdash-2.png" 
              alt="SnackDash - Order Tracking" 
              width={500} 
              height={500} 
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
            />
          </div>
        </div>
      ),
    },
    {
      title: "December 2024",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Full Stack API Book Certification
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">December 2024 • Personal Project</p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-4 list-disc list-inside">
              <li>Developed a platform for issuing verifiable digital certifications for book completion, enabling seamless digital credentialing and transparency.</li>
              <li>Engineered a secure credentialing system using unique salted verification codes and timestamp validation to ensure authenticity, simulating blockchain-level immutability.</li>
              <li>Built a full-stack application with Next.js and Tailwind CSS, integrated Google Books API for metadata retrieval, and leveraged Firebase Authentication and Firestore for storage.</li>
            </ul>
            <div className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Live Demo:</span>{" "}
                <a href="https://u4rsnob0spemqbtx.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  u4rsnob0spemqbtx.vercel.app
                </a>
                {" • "}
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/hea7hen/BookCert" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/hea7hen/BookCert
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Next.js</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Firebase</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Google Books API</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Tailwind CSS</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="/images/bookcert-1.png" 
              alt="BookCert - Explore Books" 
              width={500} 
              height={500} 
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
            />
            <Image 
              src="/images/bookcer-2.png" 
              alt="BookCert - Popular Books" 
              width={500} 
              height={500} 
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" 
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

