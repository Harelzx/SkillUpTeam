import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const FPS = 30;
const FRAMES_PER_SCREEN = 4 * FPS; // 120 frames = 4 seconds
const FADE_FRAMES = 15; // 0.5s fade in/out
const WIDTH = 260;
const HEIGHT = 540;

/* ------------------------------------------------------------------ */
/*  Colors (matching globals.css tokens)                               */
/* ------------------------------------------------------------------ */
const C = {
  dark950: "#030712",
  dark900: "#0F172A",
  dark700: "#334155",
  dark600: "#475569",
  dark500: "#64748B",
  dark400: "#94A3B8",
  dark200: "#E2E8F0",
  dark100: "#F1F5F9",
  dark50: "#F8FAFC",
  brand600: "#2563EB",
  brand500: "#3B82F6",
  brand400: "#60A5FA",
  brand100: "#DBEAFE",
  brand50: "#EFF6FF",
  indigo500: "#6366F1",
  amber500: "#F59E0B",
  amber100: "#FEF3C7",
  emerald500: "#10B981",
  emerald100: "#D1FAE5",
  white: "#FFFFFF",
  red500: "#EF4444",
};

/* ------------------------------------------------------------------ */
/*  Shared styles                                                      */
/* ------------------------------------------------------------------ */
const S = {
  screenContainer: {
    position: "absolute" as const,
    inset: 0,
    background: C.dark50,
    paddingTop: 50,
    paddingBottom: 60,
    paddingLeft: 16,
    paddingRight: 16,
    direction: "rtl" as const,
    fontFamily: "system-ui, -apple-system, sans-serif",
    overflow: "hidden" as const,
  },
  card: {
    background: C.white,
    borderRadius: 16,
    padding: 12,
    border: `1px solid ${C.dark100}`,
  },
  avatar: (bg: string, color: string, size = 40) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    background: bg,
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    color,
    fontWeight: 700 as const,
    fontSize: size > 40 ? 20 : 13,
    flexShrink: 0,
  }),
  chip: (active: boolean) => ({
    borderRadius: 20,
    padding: "4px 10px",
    fontSize: 9,
    fontWeight: 600,
    whiteSpace: "nowrap" as const,
    background: active ? C.brand500 : C.white,
    color: active ? C.white : C.dark600,
    border: active ? "none" : `1px solid ${C.dark200}`,
  }),
  tag: {
    borderRadius: 20,
    padding: "3px 10px",
    fontSize: 9,
    fontWeight: 500,
    background: C.brand50,
    color: C.brand600,
  },
  tabBar: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    background: C.white,
    borderTop: `1px solid ${C.dark100}`,
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "space-around" as const,
    direction: "rtl" as const,
  },
};

/* ------------------------------------------------------------------ */
/*  Tiny star SVG (inline for Remotion)                                */
/* ------------------------------------------------------------------ */
function Star({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={C.amber500}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Tab bar (simplified for Remotion)                                  */
/* ------------------------------------------------------------------ */
function SimpleTabBar({ activeIdx }: { activeIdx: number }) {
  const tabs = ["בית", "חיפוש", "הודעות", "פרופיל"];
  return (
    <div style={S.tabBar}>
      {tabs.map((label, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: i === activeIdx ? C.brand500 : C.dark200,
              opacity: i === activeIdx ? 1 : 0.5,
            }}
          />
          <span
            style={{
              fontSize: 8,
              fontWeight: 500,
              color: i === activeIdx ? C.brand500 : C.dark400,
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 0 — Home                                                    */
/* ------------------------------------------------------------------ */
function HomeScreenContent() {
  return (
    <div style={S.screenContainer}>
      {/* Greeting */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.dark900 }}>שלום, הראל</div>
          <div style={{ fontSize: 10, color: C.dark500, marginTop: 2 }}>מה תרצו ללמוד היום?</div>
        </div>
        <div
          style={{
            position: "relative",
            width: 28,
            height: 28,
            borderRadius: 14,
            background: C.dark100,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -2,
              left: -2,
              width: 9,
              height: 9,
              borderRadius: 5,
              background: C.red500,
              border: `2px solid ${C.dark50}`,
            }}
          />
        </div>
      </div>

      {/* Search bar */}
      <div
        style={{
          marginTop: 12,
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderRadius: 12,
          background: C.white,
          padding: "9px 12px",
          border: `1px solid ${C.dark100}`,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 7, border: `1.5px solid ${C.dark400}` }} />
        <span style={{ fontSize: 10, color: C.dark400 }}>חפשו מורה, נושא...</span>
      </div>

      {/* Next lesson */}
      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.dark900, marginBottom: 8 }}>השיעור הבא</div>
        <div style={S.card}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={S.avatar(C.brand100, C.brand500)}>ש</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.dark900 }}>שרה כהן</div>
              <div style={{ fontSize: 9, color: C.dark500, marginTop: 2 }}>מתמטיקה · היום, 14:00</div>
            </div>
            <div
              style={{
                borderRadius: 20,
                background: C.brand50,
                padding: "4px 10px",
                fontSize: 9,
                fontWeight: 600,
                color: C.brand500,
              }}
            >
              בעוד 2 שעות
            </div>
          </div>
        </div>
      </div>

      {/* My teachers */}
      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.dark900, marginBottom: 8 }}>המורים שלי</div>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { letter: "ש", bg: C.indigo500 },
            { letter: "ד", bg: C.amber500 },
            { letter: "מ", bg: C.emerald500 },
          ].map((t, i) => (
            <div key={i} style={S.avatar(t.bg, C.white, 44)}>
              {t.letter}
            </div>
          ))}
        </div>
      </div>

      <SimpleTabBar activeIdx={0} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 1 — Search Results                                          */
/* ------------------------------------------------------------------ */
function SearchScreenContent() {
  const teachers = [
    { name: "שרה כהן", letter: "ש", bg: C.brand100, color: C.brand500, subject: "מתמטיקה, פיזיקה", rating: "4.9", price: "₪120" },
    { name: "דוד לוי", letter: "ד", bg: C.amber100, color: "#D97706", subject: "מתמטיקה, אלגברה", rating: "4.8", price: "₪100" },
    { name: "מיכל אברהם", letter: "מ", bg: C.emerald100, color: "#059669", subject: "מתמטיקה, סטטיסטיקה", rating: "4.7", price: "₪110" },
  ];

  return (
    <div style={S.screenContainer}>
      {/* Search bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderRadius: 12,
          background: C.white,
          padding: "9px 12px",
          border: `1px solid ${C.dark100}`,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 7, border: `1.5px solid ${C.brand500}` }} />
        <span style={{ fontSize: 10, fontWeight: 500, color: C.dark900 }}>מתמטיקה</span>
      </div>

      {/* Chips */}
      <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
        <span style={S.chip(true)}>הכי מדורגים</span>
        <span style={S.chip(false)}>מחיר</span>
        <span style={S.chip(false)}>קרוב אליי</span>
      </div>

      {/* Teacher cards */}
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
        {teachers.map((t, i) => (
          <div key={i} style={S.card}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={S.avatar(t.bg, t.color)}>{t.letter}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: C.dark900 }}>{t.name}</div>
                <div style={{ fontSize: 9, color: C.dark500, marginTop: 2 }}>{t.subject}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 3 }}>
                  <Star size={9} />
                  <span style={{ fontSize: 9, fontWeight: 500, color: C.dark700 }}>{t.rating}</span>
                  <span style={{ fontSize: 9, color: C.dark400, marginRight: 4 }}>{t.price}/שעה</span>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 8,
                  background: C.brand50,
                  padding: "6px 10px",
                  fontSize: 9,
                  fontWeight: 600,
                  color: C.brand500,
                }}
              >
                פרופיל
              </div>
            </div>
          </div>
        ))}
      </div>

      <SimpleTabBar activeIdx={1} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 2 — Teacher Profile                                         */
/* ------------------------------------------------------------------ */
function TeacherProfileContent() {
  return (
    <div style={S.screenContainer}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <span style={{ fontSize: 14, color: C.dark700 }}>&rsaquo;</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: C.dark900 }}>פרופיל מורה</span>
      </div>

      {/* Profile */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            background: `linear-gradient(135deg, ${C.brand400}, ${C.indigo500})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 700,
            color: C.white,
          }}
        >
          ש
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.dark900, marginTop: 8 }}>שרה כהן</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.brand500} strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
          <span style={{ fontSize: 9, color: C.brand500, fontWeight: 500 }}>מורה מאומתת</span>
        </div>

        {/* Stars */}
        <div style={{ display: "flex", alignItems: "center", gap: 2, marginTop: 8 }}>
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={11} />
          ))}
          <span style={{ fontSize: 9, color: C.dark500, marginRight: 4 }}>4.9 (127)</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {["מתמטיקה", "פיזיקה", "5 שנות ניסיון"].map((tag, i) => (
            <span key={i} style={S.tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Bio */}
      <p
        style={{
          marginTop: 12,
          fontSize: 9,
          lineHeight: 1.6,
          color: C.dark500,
          textAlign: "center",
        }}
      >
        מורה מנוסה עם תשוקה להוראה. מתמחה בהפיכת נושאים מורכבים לפשוטים ומובנים.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: 14,
          width: "100%",
          borderRadius: 12,
          background: `linear-gradient(to left, ${C.brand500}, ${C.brand600})`,
          padding: "10px 0",
          textAlign: "center",
          fontSize: 11,
          fontWeight: 700,
          color: C.white,
        }}
      >
        קבעו שיעור - ₪120/שעה
      </div>

      <SimpleTabBar activeIdx={1} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 3 — Booking Confirmation                                    */
/* ------------------------------------------------------------------ */
function BookingConfirmationContent() {
  const rows = [
    { label: "מורה", value: "שרה כהן" },
    { label: "מקצוע", value: "מתמטיקה" },
    { label: "תאריך", value: "יום ג׳ 17.1" },
    { label: "שעה", value: "14:00" },
    { label: "מחיר", value: "₪120" },
  ];

  return (
    <div style={{ ...S.screenContainer, display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Checkmark */}
      <div
        style={{
          marginTop: 24,
          width: 56,
          height: 56,
          borderRadius: 28,
          background: "rgba(16,185,129,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.emerald500} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </svg>
      </div>
      <div style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: C.dark900 }}>השיעור נקבע!</div>
      <div style={{ fontSize: 9, color: C.dark500, marginTop: 4 }}>אישור נשלח אליכם ולמורה</div>

      {/* Details card */}
      <div
        style={{
          marginTop: 14,
          width: "100%",
          ...S.card,
          padding: 14,
        }}
      >
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 0",
              borderBottom: i < rows.length - 1 ? `1px solid ${C.dark100}` : "none",
            }}
          >
            <span style={{ fontSize: 9, color: C.dark500 }}>{row.label}</span>
            <span style={{ fontSize: 9, fontWeight: 600, color: C.dark900 }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Calendar button */}
      <div
        style={{
          marginTop: 10,
          width: "100%",
          borderRadius: 12,
          border: `1px solid ${C.brand100}`,
          background: C.white,
          padding: "9px 0",
          textAlign: "center",
          fontSize: 11,
          fontWeight: 600,
          color: C.brand500,
        }}
      >
        הוסף ליומן
      </div>

      <SimpleTabBar activeIdx={0} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen content dispatcher                                          */
/* ------------------------------------------------------------------ */
function ScreenContent({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <HomeScreenContent />;
    case 1:
      return <SearchScreenContent />;
    case 2:
      return <TeacherProfileContent />;
    case 3:
      return <BookingConfirmationContent />;
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  HeroComposition (Remotion)                                         */
/* ------------------------------------------------------------------ */
export const HeroComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const screens = [0, 1, 2, 3];

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        position: "relative",
        overflow: "hidden",
        background: C.dark50,
        borderRadius: 40,
      }}
    >
      {screens.map((screenIdx) => {
        const screenStart = screenIdx * FRAMES_PER_SCREEN;

        const opacity = interpolate(
          frame,
          [
            screenStart,
            screenStart + FADE_FRAMES,
            screenStart + FRAMES_PER_SCREEN - FADE_FRAMES,
            screenStart + FRAMES_PER_SCREEN,
          ],
          [0, 1, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        const translateY = interpolate(
          frame,
          [
            screenStart,
            screenStart + FADE_FRAMES,
            screenStart + FRAMES_PER_SCREEN - FADE_FRAMES,
            screenStart + FRAMES_PER_SCREEN,
          ],
          [20, 0, 0, -20],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={screenIdx}
            style={{
              position: "absolute",
              inset: 0,
              opacity,
              transform: `translateY(${translateY}px)`,
            }}
          >
            <ScreenContent index={screenIdx} />
          </div>
        );
      })}
    </div>
  );
};
