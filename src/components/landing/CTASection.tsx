"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import StoreButtons from "@/components/ui/StoreButtons";
import {
  TrustCheckIcon,
  ShieldVerifiedIcon,
} from "@/components/icons/CustomIcons";

export default function CTASection() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand-700 via-brand-500 to-accent-500 px-6 py-20 text-center md:py-28 md:px-16">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(circle at 80% 30%, rgba(99,102,241,0.2), transparent 50%)",
        }}
      />

      {/* Brand glyph watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-12 h-[320px] w-[320px] opacity-[0.07] md:-bottom-16 md:-right-16 md:h-[440px] md:w-[440px]"
        style={{
          backgroundImage: "url(/images/SkillUp-Splash-Glyph.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            מוכנים להתחיל?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-3 mb-3 text-lg text-white/80 md:text-xl">
            חינם להתחיל. ללא עמלות תיווך לעולם.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-9 text-sm text-white/60 md:text-base">
            אתם מוצאים את המורה. אנחנו רק מחברים.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <StoreButtons />
          </div>
        </ScrollReveal>

        {/* Launch line */}
        <ScrollReveal delay={0.25}>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
            בהשקה! מורים מייסדים מקבלים פרופיל מועדף בחודשי הפתיחה.
          </p>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <TrustCheckIcon className="h-4 w-4" />
              ביטול חינם עד 24 שעות
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <TrustCheckIcon className="h-4 w-4" />
              0% עמלה. תמיד.
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <ShieldVerifiedIcon className="h-4 w-4" />
              מורים מאומתים
            </span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
