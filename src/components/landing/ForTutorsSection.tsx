"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import RealAppFrame from "@/components/phone/RealAppFrame";
import {
  DashboardIcon,
  BoltIcon,
  ChatBubbleIcon,
  SparkleIcon,
} from "@/components/icons/CustomIcons";
import { TUTOR_HOOKS } from "@/lib/constants";

const HOOK_ICONS = {
  dashboard: DashboardIcon,
  bolt: BoltIcon,
  chat: ChatBubbleIcon,
  sparkle: SparkleIcon,
} as const;

// Three real tutor-side app screens, tilted magazine-style.
const TUTOR_SCREENS = [
  {
    src: "/images/app-screens/teacher_personalpage.jpeg",
    alt: "הפרופיל הציבורי של המורה",
    width: 180,
    rotate: -4,
    yOffset: 10,
  },
  {
    src: "/images/app-screens/teacher-earnings.png",
    alt: "דשבורד הכנסות למורים",
    width: 200,
    rotate: 2,
    yOffset: 0,
  },
  {
    src: "/images/app-screens/teacher_crmpage.jpeg",
    alt: "ניהול תלמידים ב-SkillUp",
    width: 180,
    rotate: -2,
    yOffset: 30,
  },
] as const;

export default function ForTutorsSection() {
  return (
    <section
      id="for-tutors"
      className="panel-section w-full px-6 py-20 md:py-28 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Copy side */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <span
                  className="mono-sm panel-sub-muted"
                  dir="ltr"
                >
                  05 / FOR TUTORS
                </span>
                <span
                  className="h-px w-8"
                  style={{ background: "var(--panel-rule)" }}
                  aria-hidden="true"
                />
                <span
                  className="eyebrow"
                  style={{ color: "var(--panel-muted)" }}
                >
                  למורים
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="display display-lg mt-6"
                style={{ color: "var(--panel-fg)" }}
              >
                התלמידים פונים.
                <br />
                <em className="not-italic grad-text">אתם מלמדים.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="panel-muted mt-6 max-w-[44ch] text-base leading-[1.7]">
                האפליקציה הולכת איתכם לכל מקום, והעבודה מגיעה אליכם: תלמידים
                מוצאים את הפרופיל שלכם, שולחים פנייה — ואתם מקבלים התראה
                לטלפון באותו רגע. אתם קובעים את הזמינות ואת המקצועות, והקשר
                ישיר, בלי מתווכים. הרשמה לוקחת 5 דקות.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TUTOR_HOOKS.map((hook) => {
                  const Icon = HOOK_ICONS[hook.icon];
                  return (
                    <div
                      key={hook.title}
                      className="rounded-[16px] p-4"
                      style={{
                        background: "var(--panel-surface)",
                        border: "1px solid var(--panel-rule-soft)",
                      }}
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Icon size={18} />
                      </span>
                      <div
                        className="mt-3 text-sm font-bold"
                        style={{ color: "var(--panel-fg)" }}
                      >
                        {hook.title}
                      </div>
                      <p className="panel-sub-muted mt-1 text-[13px] leading-relaxed">
                        {hook.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="primary" arrow href="#download">
                  הצטרפו כמורים
                </Button>
                <a
                  href="#features"
                  className="text-sm font-semibold transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--panel-fg)" }}
                >
                  ראו את היכולות ←
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual side — 3 tilted phones + mock push notification */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="flex items-center justify-center gap-4">
                {TUTOR_SCREENS.map((s) => (
                  <div
                    key={s.src}
                    style={{
                      transform: `rotate(${s.rotate}deg) translateY(${s.yOffset}px)`,
                    }}
                  >
                    <RealAppFrame src={s.src} alt={s.alt} width={s.width} />
                  </div>
                ))}
              </div>

              {/* Floating mock push notification */}
              <div
                className="pointer-events-none absolute -top-6 right-1/2 z-10 flex w-[270px] translate-x-1/2 items-start gap-3 rounded-[18px] border border-[var(--rule)] bg-white/95 px-4 py-3 shadow-[0_20px_44px_-16px_rgba(79,70,229,0.35)] backdrop-blur animate-float-y md:right-[8%] md:translate-x-0"
                aria-hidden="true"
              >
                <img
                  src="/images/logo.png"
                  alt=""
                  className="mt-0.5 h-8 w-8 shrink-0 rounded-[9px]"
                />
                <div className="min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[12px] font-bold text-[var(--fg)]">
                      SkillUp
                    </span>
                    <span className="text-[10px] text-[var(--fg-faint)]">
                      עכשיו
                    </span>
                  </div>
                  <p className="mt-0.5 text-[12px] leading-snug text-[var(--fg-muted)]">
                    תלמיד חדש מתעניין בשיעור מתמטיקה באזור שלך
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
