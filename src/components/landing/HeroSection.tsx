"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import HeroBrandStage from "@/components/landing/HeroBrandStage";

const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  left: `${((i * 37 + 13) % 100)}%`,
  size: (i % 3) + 1.5,
  duration: (i % 8) + 10,
  delay: (i * 1.7) % 10,
  opacity: ((i % 4) + 1) * 0.1,
}));

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-brand-400"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Radial gradient overlays */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(137,86,232,0.10), transparent), radial-gradient(ellipse 60% 60% at 30% 70%, rgba(255,112,51,0.05), transparent)",
          }}
        />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-6 px-6 pt-20 pb-8 md:flex-row md:gap-20 md:px-16 md:pb-0">
        {/* Text side */}
        <div className="flex max-w-lg flex-col items-center text-center md:items-start md:text-right">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
              עברית מלאה · כל הארץ · חדש בישראל
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mt-4 text-3xl font-black leading-tight tracking-tight md:mt-6 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white">המורה הפרטי הנכון לכם נמצא כאן. </span>
            <span className="gradient-text">
              כל מקצוע, כל גיל, כל מקום בישראל.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 mb-6 text-base leading-relaxed text-dark-400 md:mt-6 md:mb-9 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            9 תחומים, 3 דרכי לימוד, אלפי שילובים. אתם בוחרים את המורה, את השעה
            ואת המקום. אנחנו רק דואגים שהכל יעבוד חלק. בלי עמלות תיווך. בלי
            רדיפה בוואטסאפ. בעברית מלאה. ממשיכים לצמוח יחד.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start md:justify-start">
              <Button variant="primary" arrow href="#download">
                זמין עכשיו בחנות האפליקציות
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Brand stage — animated splash recreation, no phones */}
        <HeroBrandStage />
      </div>
    </div>
  );
}
