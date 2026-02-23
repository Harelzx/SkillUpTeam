"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import StoreButtons from "@/components/ui/StoreButtons";
import {
  TrustLockIcon,
  TrustCheckIcon,
  TrustStarIcon,
} from "@/components/icons/CustomIcons";

export default function CTASection() {
  return (
    <section id="download" className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-brand-500 to-indigo-500 py-28 px-6 text-center md:px-16">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(circle at 80% 30%, rgba(99,102,241,0.2), transparent 50%)",
        }}
      />

      <div className="relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            מוכנים להתחיל?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-3 mb-10 text-lg text-white/70">
            הצטרפו לאלפי תלמידים שכבר מצאו את המורה המושלם
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <StoreButtons />
          </div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <TrustLockIcon className="h-4 w-4" />
              תשלום מאובטח
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <TrustCheckIcon className="h-4 w-4" />
              ביטול חינם
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <TrustStarIcon className="h-4 w-4" />
              4.8 דירוג
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
