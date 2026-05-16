import AppLinkShell from "@/components/layout/AppLinkShell";
import UAAwareStoreCTAs from "@/components/ui/UAAwareStoreCTAs";

// Shared body for the teacher-share Universal-Link fallback. Rendered by both
// /teacher/[id] (prod app target) and /dev/teacher/[id] (dev app target). The
// two routes exist as distinct AASA-claimed paths so dev and prod bundles
// don't collide on the same URL; the page content itself is identical.
export default function TeacherDeepLinkContent() {
  return (
    <AppLinkShell
      title="פותחים את SkillUp..."
      subtitle="פרופיל המורה ייפתח באפליקציה. אם האפליקציה לא מותקנת, הורידו אותה כאן:"
    >
      <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
        <UAAwareStoreCTAs />
      </div>
    </AppLinkShell>
  );
}
