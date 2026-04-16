import ScrollReveal from "@/components/animations/ScrollReveal";
import { SparkleIcon } from "@/components/icons/CustomIcons";

const STUDENT_PERKS = [
  "גישה מוקדמת לכל 9 התחומים, מבגרות ועד מיומנויות חיים",
  'פתיחת טייר "צעד ראשון" כבר מהשיעור הראשון',
  "ללא דמי רישום. אי פעם.",
];

const TEACHER_PERKS = [
  "פרופיל מועדף בתוצאות החיפוש בחודשי ההשקה",
  "ללא עמלת תיווך. התלמיד משלם לכם ישירות.",
  "תג PRO ודשבורד הכנסות מלא, מהיום הראשון",
];

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-dark-700">
      <svg
        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
        <path
          d="M5 8.2 L7 10 L11 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full bg-dark-50 px-6 py-16 md:py-24 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-dark-900 md:text-4xl">
            אנחנו רק מתחילים. והאמת חשובה לנו.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-3 mb-12 text-center text-dark-500">
            אין לנו עדיין אלפי ביקורות מזויפות. יש לנו חזון, אפליקציה מוכנה,
            וקהילה שאתם מוזמנים לבנות איתנו מהיום הראשון.
          </p>
        </ScrollReveal>

        {/* Founder's letter */}
        <ScrollReveal delay={0.15}>
          <div className="mb-8 rounded-3xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-7 shadow-sm md:p-10">
            <div className="mb-4 flex items-center gap-2">
              <SparkleIcon size={20} className="text-brand-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                מכתב מהמייסדים
              </span>
            </div>
            <p className="text-base leading-relaxed text-dark-800 md:text-lg">
              בנינו את SkillUp כי מצאנו את עצמנו, כמו כל הורה ותלמיד בישראל,
              רודפים אחרי המלצות בקבוצות וואטסאפ, מתאמים שעות בטלפון, ומשלמים
              במזומן בלי שום שקיפות. בלי שום הגיון. רצינו שיהיה מקום אחד
              בעברית, על הטלפון, שבו רואים מורה, רואים מחיר, רואים שעות,
              ולוחצים. בלי תיווך. בלי עמלות. בלי הפתעות. SkillUp כאן, עכשיו,
              ואתם מוזמנים להיות חלק מההתחלה שלנו.
            </p>
            <p className="mt-4 text-sm font-semibold text-dark-600">
              צוות SkillUp
            </p>
          </div>
        </ScrollReveal>

        {/* Founding members — 2 cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ScrollReveal delay={0.2}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-brand-300 bg-white p-7 shadow-sm">
              <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                מהלך פתיחה
              </div>
              <h3 className="mt-2 text-xl font-extrabold text-dark-900">
                חברי SkillUp הראשונים
              </h3>
              <p className="mt-1 text-sm text-dark-500">לתלמידים, הורים ולומדים</p>

              <ul className="mt-5 space-y-3">
                {STUDENT_PERKS.map((perk) => (
                  <CheckBullet key={perk}>{perk}</CheckBullet>
                ))}
              </ul>

              <a
                href="#download"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-md"
              >
                הורידו את האפליקציה
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-amber-200 bg-white p-7 shadow-sm">
              <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-600">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse-dot" />
                מורים מייסדים
              </div>
              <h3 className="mt-2 text-xl font-extrabold text-dark-900">
                בנו את הקריירה שלכם איתנו
              </h3>
              <p className="mt-1 text-sm text-dark-500">למורים פרטיים בכל התחומים</p>

              <ul className="mt-5 space-y-3">
                {TEACHER_PERKS.map((perk) => (
                  <CheckBullet key={perk}>{perk}</CheckBullet>
                ))}
              </ul>

              <a
                href="#for-tutors"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border-2 border-amber-500 bg-white px-5 py-3 text-sm font-bold text-amber-600 transition-all hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-md"
              >
                הצטרפו כמורה מייסד
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
