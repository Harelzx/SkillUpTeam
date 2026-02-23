import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-family-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkillUp - הדרך החכמה ללמוד ולהצליח",
  description:
    "מצאו את המורה המושלם בקליק - שיעורים פרטיים בכל מקצוע, מכל מקום, בכל זמן. מורים מאומתים, הזמנה מהירה, תשלום מאובטח.",
  keywords: [
    "שיעורים פרטיים",
    "מורה פרטי",
    "SkillUp",
    "לימודים",
    "מורים מאומתים",
    "הוראה פרטית",
  ],
  openGraph: {
    title: "SkillUp - הדרך החכמה ללמוד ולהצליח",
    description: "מצאו את המורה המושלם בקליק - שיעורים פרטיים בכל מקצוע",
    type: "website",
    locale: "he_IL",
    siteName: "SkillUp",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillUp - הדרך החכמה ללמוד ולהצליח",
    description: "מצאו את המורה המושלם בקליק",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} font-[family-name:var(--font-family-rubik)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
