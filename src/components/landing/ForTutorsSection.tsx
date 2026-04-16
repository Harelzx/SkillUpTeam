"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import RealAppFrame from "@/components/phone/RealAppFrame";

const TEACHER_SCREENS = [
  {
    src: "/images/app-screens/teacher-earnings.png",
    alt: "דשבורד הכנסות למורים: מגמת הכנסות שבועית",
    title: "דשבורד הכנסות",
    caption: "גרפי מגמה, יעדים, השוואה שבועית וחודשית.",
  },
  {
    src: "/images/app-screens/teacher_calendar.jpeg",
    alt: "יומן השיעורים והזמינות של המורה",
    title: "יומן ושיעורים",
    caption: "ניהול זמינות, אישור הזמנות, מעקב אחרי כל יום.",
  },
  {
    src: "/images/app-screens/teacher_crmpage.jpeg",
    alt: "מעקב תלמידים פעילים",
    title: "התלמידים שלכם",
    caption: "סטטיסטיקות נוכחות, קשר ישיר, פילטרים.",
  },
  {
    src: "/images/app-screens/teacher_personalpage.jpeg",
    alt: "פרופיל ציבורי של המורה",
    title: "הפרופיל הציבורי שלכם",
    caption: "תצוגה מקדימה כפי שתלמידים רואים אתכם.",
  },
] as const;

export default function ForTutorsSection() {
  return (
    <section
      id="for-tutors"
      className="relative w-full overflow-hidden bg-dark-900 px-6 py-20 md:py-28 md:px-16"
    >
      {/* Decorative SkillUp glyph watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] opacity-[0.04]"
        style={{
          backgroundImage: "url(/images/SkillUp-Splash-Glyph.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
              למורים מייסדים
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              אתם מורים? קבלו את כל הכלים. תשמרו את כל ההכנסה.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-dark-300 md:text-lg">
              SkillUp מחבר אתכם ישירות לתלמידים באזור שלכם. אתם קובעים את המחיר,
              את הזמינות, ואת המקצועות. בלי טלפונים ל-20 הורים, בלי מתווכים, בלי
              ניירת. הרשמה לוקחת 5 דקות.
            </p>
          </ScrollReveal>
        </div>

        {/* Teacher screens gallery */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {TEACHER_SCREENS.map((screen, i) => (
            <ScrollReveal key={screen.src} delay={0.15 + i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <RealAppFrame
                  src={screen.src}
                  alt={screen.alt}
                  width={240}
                />
                <h3 className="mt-5 text-base font-bold text-white">
                  {screen.title}
                </h3>
                <p className="mt-1.5 text-sm text-dark-400">
                  {screen.caption}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <Button variant="primary" href="#download" arrow>
              הצטרפו כמורים
            </Button>
            <p className="max-w-md text-xs leading-relaxed text-dark-400">
              חינם בתקופת הבטא. עמלות תיווך? לא ניקח. אף פעם. בעתיד: מסלול PRO
              אופציונלי לקידום הפרופיל.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
