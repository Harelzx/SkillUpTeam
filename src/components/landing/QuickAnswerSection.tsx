import ScrollReveal from "@/components/animations/ScrollReveal";

export default function QuickAnswerSection() {
  return (
    <section
      id="quick-answer"
      className="w-full bg-white px-6 py-16 md:py-24 md:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-7 md:p-10">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-dark-900 md:text-3xl">
              מה זה SkillUp?
            </h2>
            <p className="text-base leading-relaxed text-dark-700 md:text-lg">
              SkillUp היא אפליקציית מובייל ישראלית (iOS) שמחברת תלמידים, הורים
              ומבוגרים עם מורים פרטיים מאומתים ב-9 תחומים: מתמטיקה ומדעים,
              שפות זרות, עברית וספרות, בגרויות ופסיכומטרי, מדעי הרוח, ספורט,
              אומנות, תכנות, ופנאי ומיומנויות חיים (בישול, נהיגה, אתיקט). 3
              דרכי לימוד: אונליין, אצל המורה, או אצלכם בבית. ללא עמלת תיווך.
              התשלום ביניכם לבין המורה. ביטול חינם עד 24 שעות לפני השיעור.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
