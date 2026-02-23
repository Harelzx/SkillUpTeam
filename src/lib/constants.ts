export const SITE_NAME = "SkillUp";
export const SITE_URL = "https://skillup.co.il";
export const CONTACT_EMAIL = "skillup.team.il@gmail.com";

export const APP_STORE_URL = "#"; // TODO: Replace with real App Store URL
export const PLAY_STORE_URL = "#"; // TODO: Replace with real Play Store URL

export const STATS = [
  { value: 15000, suffix: "+", label: "מורים מקצועיים" },
  { value: 50000, suffix: "+", label: "שיעורים שנקבעו" },
  { value: 4.8, suffix: "", label: "דירוג ממוצע", decimal: true },
  { value: 30, suffix: " שניות", label: "זמן הזמנה ממוצע" },
] as const;

export const NAV_LINKS = [
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#features", label: "יתרונות" },
  { href: "/privacy", label: "פרטיות" },
  { href: "/terms", label: "תנאי שימוש" },
] as const;

export const PAIN_POINTS = [
  {
    iconId: "frustrated-search" as const,
    title: "חיפושים אינסופיים",
    description: "בילוי שעות בחיפוש מורה מתאים בקבוצות פייסבוק ובפורומים",
  },
  {
    iconId: "unverified-teacher" as const,
    title: "מורים לא מאומתים",
    description: "אין דרך לדעת מי באמת טוב לפני שמשלמים ומתאכזבים",
  },
  {
    iconId: "complicated-coord" as const,
    title: "תיאום מסובך",
    description: "הודעות, שיחות טלפון והעברות בנקאיות - תהליך מייגע",
  },
] as const;

export const STEPS = [
  {
    number: 1,
    title: "חפשו מורה",
    description: "הזינו מקצוע ותוך שניות תקבלו רשימה של מורים מותאמים אישית",
  },
  {
    number: 2,
    title: "בחרו את המתאים",
    description: "עיינו בפרופילים, קראו ביקורות של תלמידים אחרים ובחרו בביטחון",
  },
  {
    number: 3,
    title: "קבעו שיעור",
    description: "בחרו תאריך ושעה נוחים ושלמו בצורה מאובטחת ופשוטה",
  },
  {
    number: 4,
    title: "התחילו ללמוד!",
    description: "שיעור פרטי אחד על אחד - אחרי השיעור, דרגו ושתפו",
  },
] as const;

export const FEATURES = [
  {
    icon: "shield-check" as const,
    title: "מורים מאומתים",
    description: "כל מורה עובר תהליך אימות קפדני. ביקורות אמיתיות מתלמידים אחרים - בחרו בביטחון מלא.",
    color: "blue" as const,
  },
  {
    icon: "zap" as const,
    title: "הזמנה בקליק",
    description: "קביעת שיעור פרטי בפחות מ-30 שניות. בחרו זמן, אישרו ותתחילו ללמוד. פשוט ככה.",
    color: "emerald" as const,
  },
  {
    icon: "lock" as const,
    title: "תשלום מאובטח",
    description: "שלמו בצורה בטוחה דרך האפליקציה. ביטול חינם עד 24 שעות לפני השיעור.",
    color: "indigo" as const,
  },
  {
    icon: "message-circle" as const,
    title: "צ׳אט ישיר",
    description: "שוחחו עם המורה לפני, אחרי ובמהלך הלמידה - הכל מתוך האפליקציה.",
    color: "amber" as const,
  },
] as const;
