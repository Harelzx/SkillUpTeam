"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import RealAppFrame from "@/components/phone/RealAppFrame";

// Each step paired with a real app screen showing exactly that moment in the flow.
const FLOW_STEPS = [
  {
    number: 1,
    title: "חפשו מורה",
    description:
      "פתחו את האפליקציה, בחרו תחום, מסננים לפי אזור ומחיר. רואים מורים זמינים בקליק.",
    src: "/images/app-screens/student_homepage.jpeg",
    alt: "מסך הבית: חיפוש מורה לפי תחום ואזור",
    accent: "from-brand-500/20 to-transparent",
  },
  {
    number: 2,
    title: "בחרו את המתאים",
    description:
      "פרופיל מלא של המורה: ניסיון, ביקורות, מקצועות, מחיר. הכל גלוי, בלי הפתעות.",
    src: "/images/app-screens/teacher_personalpage.jpeg",
    alt: "פרופיל מלא של מורה עם ביקורות",
    accent: "from-amber-500/20 to-transparent",
  },
  {
    number: 3,
    title: "קבעו שיעור",
    description:
      "אשף בן 2 שלבים: בוחרים מקצוע, צורת שיעור (אונליין / אצל המורה / אצלכם), זמן ורמה.",
    src: "/images/app-screens/order_firstpage.jpeg",
    alt: "אשף הזמנת שיעור",
    accent: "from-indigo-500/20 to-transparent",
  },
  {
    number: 4,
    title: "התחילו ללמוד!",
    description:
      "אישור מיידי, קישור Zoom אם זה אונליין, תזכורת לפני השיעור. אתם פנויים ללמוד.",
    src: "/images/app-screens/order_confirmation.jpeg",
    alt: "השיעור הוזמן בהצלחה",
    accent: "from-emerald-500/20 to-transparent",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <div className="w-full px-6 py-16 md:py-24 md:px-16">
      <ScrollReveal>
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-dark-900">
          איך זה עובד?
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="mt-3 mb-16 text-center text-dark-500">
          ארבעה צעדים פשוטים. שיעור פרטי בידיים תוך דקות.
        </p>
      </ScrollReveal>

      {/* 4-phone storyboard. RTL flow — step 1 sits on the right. */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6">
        {FLOW_STEPS.map((step, i) => (
          <ScrollReveal key={step.number} delay={0.15 + i * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              {/* Soft accent halo behind the phone */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-4 -z-10 mx-auto h-72 w-56 rounded-full bg-gradient-to-b ${step.accent} blur-2xl`}
              />

              {/* Phone with floating step badge */}
              <div className="relative">
                <RealAppFrame
                  src={step.src}
                  alt={step.alt}
                  width={250}
                />
                <span className="absolute -top-3 -right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-base font-extrabold text-white shadow-lg ring-4 ring-white">
                  {step.number}
                </span>
              </div>

              {/* Caption */}
              <h3 className="mt-6 text-lg font-extrabold text-dark-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-dark-500">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
