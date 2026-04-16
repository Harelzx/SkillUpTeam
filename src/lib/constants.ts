export const SITE_NAME = "SkillUp";
export const SITE_URL = "https://skillupwebsite.vercel.app";
export const CONTACT_EMAIL = "skillup.team.il@gmail.com";

export const APP_STORE_URL = "#"; // TODO: Replace with real App Store URL
export const PLAY_STORE_URL = "#"; // TODO: Replace with real Play Store URL

// Real, day-1-verifiable promises. Not invented user metrics.
// Items with `display` render as static text (CountUp only handles integers).
export const STATS = [
  { value: 9, suffix: "", label: "תחומי לימוד, מבגרות ועד מיומנויות חיים" },
  { value: 3, suffix: "", label: "דרכי לימוד: אונליין, אצל המורה, אצלכם" },
  { display: "24h", label: "ביטול חינם עד 24 שעות לפני השיעור" },
  { display: "0₪", label: "עמלת תיווך. תמיד. בלי יוצא מהכלל." },
] as const;

export const NAV_LINKS = [
  { href: "#why-skillup", label: "למה SkillUp" },
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#subjects", label: "מקצועות" },
  { href: "#for-tutors", label: "למורים" },
  { href: "#features", label: "יכולות" },
  { href: "#download", label: "הורדה" },
] as const;

export const PAIN_POINTS = [
  {
    iconId: "frustrated-search" as const,
    title: "חיפושים אינסופיים אחרי מורה פרטי?",
    description:
      "מסננים לפי מקצוע, רמה, אזור ומחיר. רואים מורים זמינים עכשיו. בלי שלושה ימים של המתנה בקבוצת ההורים.",
  },
  {
    iconId: "unverified-teacher" as const,
    title: "איך יודעים שהמורה באמת טוב?",
    description:
      "כל מורה עובר אימות זהות, בדיקת השכלה ואישור רקע. הורים רואים דירוגים אמיתיים מתלמידים אמיתיים.",
  },
  {
    iconId: "complicated-coord" as const,
    title: "תיאום מסובך ותשלומים מבלבלים?",
    description:
      "יומן, צ׳אט ותזכורות, הכל בתוך האפליקציה. בלי לרדוף אחרי הודעות, בלי להתבלבל. התשלום? ישיר מכם למורה, בלי תיווכנים באמצע. אנחנו לא לוקחים עמלה אף פעם, גם אחרי הבטא.",
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
    description: "בחרו תאריך ושעה נוחים, אשרו ותתחילו ללמוד",
  },
  {
    number: 4,
    title: "התחילו ללמוד!",
    description: "שיעור פרטי אחד על אחד - אחרי השיעור, דרגו ושתפו",
  },
] as const;

// 6 features that hit the actual differentiators (gamification, modes, chat, etc.)
export const FEATURES = [
  {
    icon: "trophy" as const,
    title: "5 טיירים. שיעור אחד בכל פעם.",
    description:
      "מ\"צעד ראשון\" ועד \"מאסטר SkillUp\" (0/3/10/25/50 שיעורים). כל שיעור מקרב אתכם לרמה הבאה. ללמוד הופך למשחק.",
    color: "amber" as const,
  },
  {
    icon: "modality" as const,
    title: "3 דרכים ללמוד",
    description:
      "אונליין, אצל המורה, או אצלכם בבית. אתם בוחרים מה הכי נוח לכם, שיעור אחר שיעור.",
    color: "blue" as const,
  },
  {
    icon: "video" as const,
    title: "לינק Zoom אוטומטי",
    description:
      "שיעור אונליין? הקישור מגיע אליכם בלחיצה. בלי לגלוש בין אפליקציות, בלי לחפש מיילים ישנים.",
    color: "indigo" as const,
  },
  {
    icon: "message-circle" as const,
    title: "צ׳אט + שיתוף קבצים",
    description:
      "PDF, Word, Excel, PPT עד 5MB, ישירות מול המורה. שולחים שאלה לפני השיעור, מעבירים שיעורי בית אחרי.",
    color: "rose" as const,
  },
  {
    icon: "shield-check" as const,
    title: "מורים מאומתים",
    description:
      "אימות זהות, בדיקת השכלה ואישור רקע, עוד לפני שהמורה מופיע בחיפוש. בלי הפתעות.",
    color: "emerald" as const,
  },
  {
    icon: "dashboard" as const,
    title: "דשבורד הכנסות למורים",
    description:
      "תג PRO, גרפי מגמה, יעדים עם חגיגת זהב. ניהול קריירה שלמה, מתוך האפליקציה.",
    color: "cyan" as const,
  },
] as const;

// 9 official categories from the app, in display order.
// Category 9 (life skills) is the differentiator — flagged with isNew.
export const CATEGORIES = [
  {
    id: "math-science" as const,
    title: "מתמטיקה ומדעים",
    subjects: ["מתמטיקה", "פיזיקה", "ביולוגיה", "כימיה"],
  },
  {
    id: "foreign-languages" as const,
    title: "שפות זרות",
    subjects: ["אנגלית", "צרפתית", "ספרדית", "ערבית"],
  },
  {
    id: "hebrew-literature" as const,
    title: "עברית וספרות",
    subjects: ["לשון", "הבעה", "ספרות", "דקדוק"],
  },
  {
    id: "exam-prep" as const,
    title: "הכנה למבחנים",
    subjects: ["בגרויות", "פסיכומטרי", "SAT", "מיון"],
  },
  {
    id: "humanities" as const,
    title: "מדעי הרוח והחברה",
    subjects: ["היסטוריה", "גיאוגרפיה", "אזרחות", "חברה"],
  },
  {
    id: "sports-fitness" as const,
    title: "ספורט וכושר",
    subjects: ["כושר אישי", "ספורט", "ריקוד"],
  },
  {
    id: "arts-creativity" as const,
    title: "אומנות ויצירה",
    subjects: ["ציור", "מוזיקה", "עיצוב"],
  },
  {
    id: "tech-programming" as const,
    title: "תכנות וטכנולוגיה",
    subjects: ["Python", "JavaScript", "מדעי המחשב"],
  },
  {
    id: "life-skills" as const,
    title: "פנאי ומיומנויות חיים",
    subjects: ["בישול", "נהיגה", "אתיקט", "יצירתיות"],
    isNew: true,
  },
] as const;
