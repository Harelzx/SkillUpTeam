"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { FEATURES } from "@/lib/constants";
import {
  ShieldVerifiedIcon,
  ChatBubbleIcon,
  TrophyIcon,
  VideoIcon,
  ModalityIcon,
  DashboardIcon,
  BoltIcon,
} from "@/components/icons/CustomIcons";

const ICON_MAP = {
  trophy: TrophyIcon,
  modality: ModalityIcon,
  video: VideoIcon,
  "message-circle": ChatBubbleIcon,
  "shield-check": ShieldVerifiedIcon,
  dashboard: DashboardIcon,
  bolt: BoltIcon,
} as const;

const COLOR_MAP = {
  blue: { bg: "bg-brand-500/10" },
  emerald: { bg: "bg-emerald-500/10" },
  indigo: { bg: "bg-indigo-500/10" },
  amber: { bg: "bg-amber-500/10" },
  rose: { bg: "bg-rose-500/10" },
  cyan: { bg: "bg-cyan-500/10" },
} as const;

// Compact security trust strip — production-grade signals shipping in the iOS app.
const TRUST_ROWS = [
  {
    icon: "🔐",
    title: "אימות במפתחות חומרה",
    detail: "סיסמאות וטוקנים נשמרים ב-iOS Keychain עם הצפנה ברמת חומרה.",
  },
  {
    icon: "🛡",
    title: "תואם OWASP Mobile Top 10",
    detail: "אימות מאובטח, הגנה על תקשורת ונתונים, פרטיות ברירת מחדל.",
  },
  {
    icon: "🇪🇺",
    title: "אנליטיקה באירופה (GDPR)",
    detail: "כל המדדים נשלחים לשרתי EU. תואם לתקנות פרטיות ישראליות ואירופיות.",
  },
] as const;

export default function FeaturesSection() {
  return (
    <div className="relative w-full px-6 py-16 md:py-24 md:px-16">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(137,86,232,0.08), transparent)",
        }}
      />

      <div className="relative z-10">
        <ScrollReveal>
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-dark-900">
            היכולות שמייחדות את SkillUp
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-3 mb-12 text-center text-dark-600">
            לא עוד אפליקציה למציאת מורים. אפליקציה שעוצבה איך שלמידה צריכה להיראות ב-2026.
          </p>
        </ScrollReveal>

        {/* 7-card grid: 3 cols on lg, last card centers; 2 cols md; 1 col mobile */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 [&>*:last-child]:lg:col-start-2">
          {FEATURES.map((feature, i) => {
            const IconComponent = ICON_MAP[feature.icon];
            const colors = COLOR_MAP[feature.color];

            return (
              <ScrollReveal key={i} delay={0.1 + (i % 3) * 0.1}>
                <div className="cursor-default rounded-2xl border border-dark-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md h-full">
                  <div
                    className={`mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-base font-bold text-dark-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-dark-600">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Security trust strip */}
        <ScrollReveal delay={0.3}>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-dark-200" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-dark-500">
                פרטיות ואבטחה ברמה של בנק
              </span>
              <span className="h-px w-12 bg-dark-200" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {TRUST_ROWS.map((row) => (
                <div
                  key={row.title}
                  className="flex items-start gap-3 rounded-xl border border-dark-200 bg-white p-4 shadow-sm"
                >
                  <span className="text-xl leading-none" aria-hidden="true">
                    {row.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-dark-900">{row.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-dark-600">
                      {row.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
