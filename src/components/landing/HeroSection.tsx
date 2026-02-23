"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import StoreButtons from "@/components/ui/StoreButtons";
import PhoneMockup from "@/components/phone/PhoneMockup";

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
              "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(59,130,246,0.08), transparent), radial-gradient(ellipse 60% 60% at 30% 70%, rgba(99,102,241,0.06), transparent)",
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
              הפלטפורמה #1 בישראל
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mt-4 text-4xl font-black leading-tight tracking-tight md:mt-6 md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white">הדרך החכמה</span>
          </motion.h1>
          <motion.h1
            className="text-4xl font-black leading-tight tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="gradient-text">ללמוד ולהצליח</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 mb-6 text-base leading-relaxed text-dark-400 md:mt-6 md:mb-9 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            מצאו את המורה המושלם בקליק - שיעורים פרטיים בכל מקצוע, מכל מקום,
            בכל זמן.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="primary" arrow>
              מצאו מורה עכשיו
            </Button>
            <div className="mt-4 md:mt-6">
              <StoreButtons />
            </div>
          </motion.div>
        </div>

        {/* Phone side — hidden on very small screens to save space */}
        <motion.div
          className="relative hidden sm:block"
          initial={{ opacity: 0, rotateY: -12, x: -60 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
        >
          {/* Glow behind phone */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] animate-glow-pulse"
            style={{
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="animate-phone-float">
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
