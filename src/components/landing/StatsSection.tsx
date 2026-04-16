"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <div className="w-full px-6 py-16 text-center md:py-24 md:px-16">
      <ScrollReveal>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white">
          ההבטחות שלנו אליכם
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="mb-12 text-sm text-dark-500 md:text-base">
          ארבעה דברים שאנחנו מבטיחים מהיום הראשון. בלי כוכביות, בלי אותיות קטנות.
        </p>
      </ScrollReveal>

      <div className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-8 md:gap-12">
        {STATS.map((stat, i) => (
          <ScrollReveal
            key={i}
            delay={0.1 + i * 0.1}
            className="min-w-[40%] md:min-w-0 md:flex-1"
          >
            <div className="flex flex-col items-center">
              {"display" in stat ? (
                <span className="gradient-text text-5xl font-black tracking-tight">
                  {stat.display}
                </span>
              ) : (
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  className="gradient-text text-5xl font-black tracking-tight"
                />
              )}
              <span className="mt-1.5 text-sm font-medium text-dark-500">
                {stat.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
