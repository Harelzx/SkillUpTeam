"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { PAIN_POINTS } from "@/lib/constants";
import {
  FrustratedSearchIcon,
  UnverifiedTeacherIcon,
  ComplicatedCoordIcon,
  ChevronDownIcon,
  SparkleIcon,
} from "@/components/icons/CustomIcons";

const PAIN_ICON_MAP = {
  "frustrated-search": FrustratedSearchIcon,
  "unverified-teacher": UnverifiedTeacherIcon,
  "complicated-coord": ComplicatedCoordIcon,
} as const;

export default function PainPointsSection() {
  return (
    <div className="w-full px-6 text-center md:px-16">
      <ScrollReveal>
        <h2 className="text-4xl font-extrabold tracking-tight text-dark-900">
          למה SkillUp?
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="mt-3 mb-12 text-dark-500">
          מצאנו פתרון לכל בעיה שהכרתם
        </p>
      </ScrollReveal>

      {/* Pain cards */}
      <div className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row">
        {PAIN_POINTS.map((point, i) => {
          const IconComponent = PAIN_ICON_MAP[point.iconId];
          return (
            <ScrollReveal key={i} delay={0.15 + i * 0.1} className="flex-1">
              <div className="rounded-2xl border border-dark-200 bg-dark-50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 flex justify-center">
                  <IconComponent size={48} />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-dark-900">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark-500">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Arrow + solution text */}
      <ScrollReveal delay={0.5}>
        <div className="mt-12 mb-4 flex justify-center text-brand-500">
          <ChevronDownIcon className="h-8 w-8" />
        </div>
        <p className="inline-flex items-center gap-2 text-xl font-bold text-brand-500">
          <SparkleIcon size={20} />
          עם SkillUp, הכל פשוט
          <SparkleIcon size={20} />
        </p>
      </ScrollReveal>
    </div>
  );
}
