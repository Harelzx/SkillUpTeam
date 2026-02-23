"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-br from-dark-800 to-dark-900 py-20 px-6 text-center md:px-16">
      <ScrollReveal>
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-white">
          המספרים מדברים
        </h2>
      </ScrollReveal>

      <div className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-8 md:gap-12">
        {STATS.map((stat, i) => (
          <ScrollReveal
            key={i}
            delay={0.1 + i * 0.1}
            className="min-w-[40%] md:min-w-0 md:flex-1"
          >
            <div className="flex flex-col items-center">
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                decimal={"decimal" in stat && stat.decimal === true}
                className="gradient-text text-5xl font-black tracking-tight"
              />
              <span className="mt-1.5 text-sm font-medium text-dark-500">
                {stat.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
