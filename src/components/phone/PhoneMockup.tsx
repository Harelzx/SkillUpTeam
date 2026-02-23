"use client";

import { useEffect, useState, useCallback } from "react";

interface PhoneMockupProps {
  activeScreen?: number;
  animate?: boolean;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Screen 0 — Home                                                    */
/* ------------------------------------------------------------------ */
function HomeScreen() {
  return (
    <div dir="rtl" className="absolute inset-0 bg-dark-50 pt-[50px] pb-[60px] overflow-y-auto">
      <div className="px-4">
        {/* Greeting */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-dark-900">שלום, הראל 👋</p>
            <p className="text-[11px] text-dark-500 mt-0.5">מה תרצו ללמוד היום?</p>
          </div>
          <div className="relative mt-0.5">
            <div className="w-8 h-8 rounded-full bg-dark-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dark-600">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <div className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-dark-50" />
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-sm border border-dark-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dark-400 shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[11px] text-dark-400">חפשו מורה, נושא...</span>
        </div>

        {/* Next lesson */}
        <div className="mt-4">
          <p className="text-xs font-bold text-dark-900 mb-2">השיעור הבא</p>
          <div className="rounded-2xl bg-white p-3 shadow-sm border border-dark-100">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-sm font-bold text-brand-500 shrink-0">
                ש
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-dark-900">שרה כהן</p>
                <p className="text-[10px] text-dark-500 mt-0.5">מתמטיקה · היום, 14:00</p>
              </div>
              <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-500">
                בעוד 2 שעות
              </span>
            </div>
          </div>
        </div>

        {/* My teachers */}
        <div className="mt-4">
          <p className="text-xs font-bold text-dark-900 mb-2">המורים שלי</p>
          <div className="flex gap-3">
            {[
              { letter: "ש", bg: "bg-indigo-500" },
              { letter: "ד", bg: "bg-amber-500" },
              { letter: "מ", bg: "bg-emerald-500" },
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center text-sm font-bold text-white`}>
                  {t.letter}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <TabBar activeTab={0} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 1 — Search Results                                          */
/* ------------------------------------------------------------------ */
function SearchScreen() {
  return (
    <div dir="rtl" className="absolute inset-0 bg-dark-50 pt-[50px] pb-[60px] overflow-y-auto">
      <div className="px-4">
        {/* Search bar */}
        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-sm border border-dark-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-500 shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[11px] text-dark-900 font-medium">מתמטיקה</span>
        </div>

        {/* Chip filters */}
        <div className="mt-3 flex gap-1.5 overflow-hidden">
          <span className="rounded-full bg-brand-500 px-3 py-1 text-[10px] font-semibold text-white whitespace-nowrap">
            הכי מדורגים
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-dark-600 border border-dark-200 whitespace-nowrap">
            מחיר
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-dark-600 border border-dark-200 whitespace-nowrap">
            קרוב אליי
          </span>
        </div>

        {/* Teacher cards */}
        <div className="mt-3 flex flex-col gap-2.5">
          {[
            { name: "שרה כהן", letter: "ש", bg: "bg-brand-100", color: "text-brand-500", subject: "מתמטיקה, פיזיקה", rating: "4.9", price: "₪120" },
            { name: "דוד לוי", letter: "ד", bg: "bg-amber-100", color: "text-amber-600", subject: "מתמטיקה, אלגברה", rating: "4.8", price: "₪100" },
            { name: "מיכל אברהם", letter: "מ", bg: "bg-emerald-100", color: "text-emerald-600", subject: "מתמטיקה, סטטיסטיקה", rating: "4.7", price: "₪110" },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-3 shadow-sm border border-dark-100">
              <div className="flex items-center gap-2.5">
                <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center text-sm font-bold ${t.color} shrink-0`}>
                  {t.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-dark-900">{t.name}</p>
                  <p className="text-[10px] text-dark-500 mt-0.5">{t.subject}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-[10px] font-medium text-dark-700">{t.rating}</span>
                    <span className="text-[10px] text-dark-400 mr-1">{t.price}/שעה</span>
                  </div>
                </div>
                <button className="shrink-0 rounded-lg bg-brand-50 px-2.5 py-1.5 text-[10px] font-semibold text-brand-500">
                  פרופיל
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TabBar activeTab={1} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 2 — Teacher Profile                                         */
/* ------------------------------------------------------------------ */
function TeacherProfileScreen() {
  return (
    <div dir="rtl" className="absolute inset-0 bg-dark-50 pt-[50px] pb-[60px] overflow-y-auto">
      <div className="px-4">
        {/* Nav bar */}
        <div className="flex items-center gap-2 mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dark-700">
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span className="text-xs font-semibold text-dark-900">פרופיל מורה</span>
        </div>

        {/* Profile header */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-bl from-brand-400 to-indigo-500 flex items-center justify-center text-xl font-bold text-white">
            ש
          </div>
          <p className="text-sm font-bold text-dark-900 mt-2">שרה כהן</p>
          <div className="flex items-center gap-1 mt-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4 12 14.01l-3-3" />
            </svg>
            <span className="text-[10px] text-brand-500 font-medium">מורה מאומתת</span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-0.5 mt-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-[10px] text-dark-500 mr-1">4.9 (127)</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            {["מתמטיקה", "פיזיקה", "5 שנות ניסיון"].map((tag, i) => (
              <span key={i} className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-medium text-brand-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="mt-3 text-[10px] leading-relaxed text-dark-500 text-center">
          מורה מנוסה עם תשוקה להוראה. מתמחה בהפיכת נושאים מורכבים לפשוטים ומובנים. מלמדת תלמידי תיכון ואוניברסיטה.
        </p>

        {/* CTA button */}
        <button className="mt-4 w-full rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 py-3 text-xs font-bold text-white shadow-sm">
          קבעו שיעור - ₪120/שעה
        </button>
      </div>

      <TabBar activeTab={1} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 3 — Booking Confirmation                                    */
/* ------------------------------------------------------------------ */
function BookingConfirmationScreen() {
  return (
    <div dir="rtl" className="absolute inset-0 bg-dark-50 pt-[50px] pb-[60px] overflow-y-auto">
      <div className="px-4 flex flex-col items-center">
        {/* Success icon */}
        <div className="mt-6 w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </div>
        <p className="mt-3 text-sm font-bold text-dark-900">השיעור נקבע!</p>
        <p className="text-[10px] text-dark-500 mt-1">אישור נשלח אליכם ולמורה</p>

        {/* Details card */}
        <div className="mt-4 w-full rounded-2xl bg-white p-4 shadow-sm border border-dark-100">
          <div className="flex flex-col gap-2.5">
            {[
              { label: "מורה", value: "שרה כהן" },
              { label: "מקצוע", value: "מתמטיקה" },
              { label: "תאריך", value: "יום ג׳ 17.1" },
              { label: "שעה", value: "14:00" },
              { label: "מחיר", value: "₪120" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-[10px] text-dark-500">{row.label}</span>
                <span className="text-[10px] font-semibold text-dark-900">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Add to calendar button */}
        <button className="mt-3 w-full rounded-xl border border-brand-200 bg-white py-2.5 text-xs font-semibold text-brand-500">
          הוסף ליומן
        </button>
      </div>

      <TabBar activeTab={0} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tab Bar                                                            */
/* ------------------------------------------------------------------ */
function TabBar({ activeTab }: { activeTab: number }) {
  const tabs = [
    { label: "בית", icon: "home" },
    { label: "חיפוש", icon: "search" },
    { label: "הודעות", icon: "messages" },
    { label: "פרופיל", icon: "profile" },
  ];

  return (
    <div dir="rtl" className="absolute bottom-0 inset-x-0 h-[56px] bg-white border-t border-dark-100 flex items-center justify-around px-2">
      {tabs.map((tab, i) => {
        const isActive = i === activeTab;
        return (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <TabIcon icon={tab.icon} active={isActive} />
            <span className={`text-[9px] font-medium ${isActive ? "text-brand-500" : "text-dark-400"}`}>
              {tab.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function TabIcon({ icon, active }: { icon: string; active: boolean }) {
  const color = active ? "#3B82F6" : "#94A3B8";
  const size = 18;

  switch (icon) {
    case "home":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "search":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "messages":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "profile":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Screen components array                                            */
/* ------------------------------------------------------------------ */
const SCREENS = [HomeScreen, SearchScreen, TeacherProfileScreen, BookingConfirmationScreen];

/* ------------------------------------------------------------------ */
/*  PhoneMockup                                                        */
/* ------------------------------------------------------------------ */
export default function PhoneMockup({
  activeScreen = 0,
  animate = true,
  className = "",
}: PhoneMockupProps) {
  const [current, setCurrent] = useState(activeScreen);

  // Auto-cycle when animate is true
  useEffect(() => {
    if (!animate) {
      setCurrent(activeScreen);
      return;
    }

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [animate, activeScreen]);

  // Sync with prop when not animating
  useEffect(() => {
    if (!animate) {
      setCurrent(activeScreen);
    }
  }, [activeScreen, animate]);

  return (
    <div
      className={`w-[260px] h-[540px] rounded-[40px] bg-[#0a0a0a] relative overflow-hidden ${className}`}
      style={{
        boxShadow: "0 0 0 1.5px #222, 0 25px 60px rgba(0,0,0,0.6)",
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-[#0a0a0a] rounded-2xl z-50" />

      {/* Status bar */}
      <div
        dir="ltr"
        className="absolute top-0 inset-x-0 h-11 z-40 flex items-end justify-between px-5 pb-1 text-xs font-semibold text-dark-900"
      >
        <span className="text-[10px]">9:41</span>
        <span className="text-[10px]">100%</span>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[100px] h-1 rounded bg-black/10 z-50" />

      {/* Screen area */}
      <div className="absolute inset-0 rounded-[40px] overflow-hidden bg-dark-50">
        {SCREENS.map((Screen, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-500 ease-in-out"
            style={{
              opacity: current === i ? 1 : 0,
              transform: current === i
                ? "translateY(0)"
                : current > i
                  ? "translateY(-20px)"
                  : "translateY(20px)",
              pointerEvents: current === i ? "auto" : "none",
            }}
          >
            <Screen />
          </div>
        ))}
      </div>
    </div>
  );
}
