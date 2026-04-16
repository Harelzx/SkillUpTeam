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
} from "@/components/icons/CustomIcons";

const ICON_MAP = {
  trophy: TrophyIcon,
  modality: ModalityIcon,
  video: VideoIcon,
  "message-circle": ChatBubbleIcon,
  "shield-check": ShieldVerifiedIcon,
  dashboard: DashboardIcon,
} as const;

const COLOR_MAP = {
  blue: { bg: "bg-brand-500/10" },
  emerald: { bg: "bg-emerald-500/10" },
  indigo: { bg: "bg-indigo-500/10" },
  amber: { bg: "bg-amber-500/10" },
  rose: { bg: "bg-rose-500/10" },
  cyan: { bg: "bg-cyan-500/10" },
} as const;

export default function FeaturesSection() {
  return (
    <div className="relative w-full px-6 py-16 md:py-24 md:px-16">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.06), transparent)",
        }}
      />

      <div className="relative z-10">
        <ScrollReveal>
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white">
            היכולות שמייחדות את SkillUp
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-3 mb-12 text-center text-dark-500">
            לא עוד אפליקציה למציאת מורים. אפליקציה שעוצבה איך שלמידה צריכה להיראות ב-2026.
          </p>
        </ScrollReveal>

        {/* 3x2 grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const IconComponent = ICON_MAP[feature.icon];
            const colors = COLOR_MAP[feature.color];

            return (
              <ScrollReveal key={i} delay={0.1 + (i % 3) * 0.1}>
                <div className="glass-card cursor-default rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div
                    className={`mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}
                  >
                    <IconComponent size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-dark-100">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-sm leading-relaxed text-dark-500">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
