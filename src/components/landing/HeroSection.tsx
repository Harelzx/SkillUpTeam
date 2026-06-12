"use client";

import { motion } from "motion/react";
import Eyebrow from "@/components/ui/Eyebrow";
import RealAppFrameCycling from "@/components/phone/RealAppFrameCycling";
import {
  VideoIcon,
  DashboardIcon,
  ShieldVerifiedIcon,
} from "@/components/icons/CustomIcons";
import { APP_STORE_URL } from "@/lib/constants";

const HERO_SCREENS = [
  {
    src: "/images/app-screens/student_homepage.jpeg",
    alt: "מסך הבית: חיפוש מורה לפי תחום ואזור",
  },
  {
    src: "/images/app-screens/teacher_personalpage.jpeg",
    alt: "פרופיל מלא של מורה עם ביקורות",
  },
  {
    src: "/images/app-screens/order_firstpage.jpeg",
    alt: "אשף הזמנת שיעור",
  },
  {
    src: "/images/app-screens/order_confirmation.jpeg",
    alt: "השיעור הוזמן בהצלחה",
  },
] as const;

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 md:grid-cols-[1.2fr_1fr] md:px-16 md:pt-24">
        {/* Text side */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow n="00 / SKILLUP">Intro</Eyebrow>
          </motion.div>

          <motion.h1
            className="display mt-5 text-[clamp(44px,7vw,96px)] leading-[0.95] tracking-[-0.04em] text-[var(--fg)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            המורה הפרטי
            <br />
            הנכון לכם <em className="not-italic grad-text">נמצא כאן</em>,<br />
            <span className="block text-[0.5em] font-semibold tracking-[-0.01em] leading-tight text-[var(--fg-muted)]">
              כל מקצוע · כל גיל · כל מקום בישראל
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[44ch] text-base leading-relaxed text-[var(--fg-muted)] md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            9 תחומים ו-3 דרכי לימוד: אונליין, אצל המורה או אצלכם. בוחרים מורה
            מאומת, רואים זמינות אמיתית וקובעים שיעור בכמה לחיצות. בלי רדיפה
            בוואטסאפ, הכול בעברית, הכול בטלפון.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="להורדה ב-App Store, לחצו כאן"
              className="group inline-flex items-center gap-3 rounded-xl bg-black px-6 py-3.5 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_34px_-12px_rgba(0,0,0,0.6)]"
            >
              <svg
                className="h-7 w-7 shrink-0"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-base font-semibold leading-tight">
                להורדה לחצו כאן
              </span>
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 text-sm font-semibold text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
            >
              ראו איך זה עובד ↓
            </a>
          </motion.div>

          {/* Hero stat strip */}
          <motion.div
            className="mt-12 grid max-w-[560px] grid-cols-3 gap-6 border-t border-[var(--rule)] pt-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="font-display text-[32px] font-black tracking-tight text-[var(--fg)]">
                9
              </div>
              <div className="mt-1 text-xs text-[var(--fg-muted)]">
                תחומי לימוד
              </div>
            </div>
            <div>
              <div className="font-display text-[32px] font-black tracking-tight text-[var(--fg)]">
                3
              </div>
              <div className="mt-1 text-xs text-[var(--fg-muted)]">
                דרכי לימוד
              </div>
            </div>
            <div>
              <div className="font-display text-[26px] font-black leading-tight tracking-tight text-[var(--fg)]">
                בזמן אמת
              </div>
              <div className="mt-1 text-xs text-[var(--fg-muted)]">
                התראות וזמינות חיה
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual side: phone + floating chips */}
        <div className="relative flex min-h-[520px] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -4, y: 20 }}
            animate={{ opacity: 1, rotate: -2.5, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "center" }}
            whileHover={{ rotate: -1, y: -6, transition: { duration: 0.4 } }}
          >
            <RealAppFrameCycling screens={HERO_SCREENS} width={280} />
          </motion.div>

          {/* Floating chip: Zoom */}
          <motion.div
            className="pointer-events-none absolute top-[10%] right-[-30px] z-10 flex items-center gap-2 rounded-[14px] border border-[var(--rule)] bg-white px-3.5 py-2.5 text-xs font-semibold text-[var(--fg)] shadow-[0_20px_40px_-16px_rgba(10,10,15,0.2)] animate-float-y"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <VideoIcon size={14} />
            </span>
            לינק Zoom אוטומטי
          </motion.div>

          {/* Floating chip: Tutor management tools */}
          <motion.div
            className="pointer-events-none absolute bottom-[12%] left-[-40px] z-10 flex items-center gap-2 rounded-[14px] border border-[var(--rule)] bg-white px-3.5 py-2.5 text-xs font-semibold text-[var(--fg)] shadow-[0_20px_40px_-16px_rgba(10,10,15,0.2)] animate-float-y"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ animationDelay: "1.2s" }}
          >
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <DashboardIcon size={14} />
            </span>
            כלי ניהול למורה
          </motion.div>

          {/* Floating chip: Verified tutor (dark) */}
          <motion.div
            className="pointer-events-none absolute top-[44%] left-[-56px] z-10 flex items-center gap-2 rounded-[14px] bg-[var(--color-ink-1000)] px-3.5 py-2.5 text-xs font-semibold text-white shadow-[0_20px_40px_-16px_rgba(10,10,15,0.35)] animate-float-y"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ animationDelay: "2.1s" }}
          >
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-[var(--accent)] text-white">
              <ShieldVerifiedIcon size={14} />
            </span>
            מורה מאומת
          </motion.div>

        </div>
      </div>
    </div>
  );
}
