import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Build-time generated OG/Twitter card (Next file convention).
// Satori has no bidi algorithm, so Hebrew comes out character-reversed.
// Hebrew has no contextual letter shaping, so reversing each single-line
// string restores the correct visual order. Keep every Hebrew string on
// one explicit line (no wrapping) or the line order breaks.

export const alt = "SkillUp. האפליקציה הישראלית לשיעורים פרטיים";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const rtl = (s: string) => s.split("").reverse().join("");

const HEADLINE_LINES = ["המורה הפרטי הנכון לכם", "נמצא כאן"];
const SUBLINE = "האפליקציה הישראלית לשיעורים פרטיים";
const CHIPS = ["9 תחומי לימוד", "3 דרכי לימוד", "מורים מאומתים"];

export default async function OpengraphImage() {
  const [heeboBlack, heeboMedium, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/app/_og/Heebo-Black.ttf")),
    readFile(join(process.cwd(), "src/app/_og/Heebo-Medium.ttf")),
    readFile(join(process.cwd(), "public/images/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #312E81 0%, #4338CA 55%, #6366F1 100%)",
          fontFamily: "Heebo",
        }}
      >
        {/* Top row: logo + wordmark (LTR content) */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img
            src={logoSrc}
            alt=""
            width={96}
            height={96}
            style={{ borderRadius: 24 }}
          />
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 56,
              fontWeight: 900,
              display: "flex",
            }}
          >
            SkillUp
          </div>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#F97316",
              marginTop: 18,
              display: "flex",
            }}
          />
        </div>

        {/* Headline (pure Hebrew, manually bidi-reversed, one node per line) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 18,
          }}
        >
          {HEADLINE_LINES.map((line) => (
            <div
              key={line}
              style={{
                color: "#FFFFFF",
                fontSize: 84,
                fontWeight: 900,
                lineHeight: 1.05,
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              {rtl(line)}
            </div>
          ))}
          <div
            style={{
              color: "#C7D2FE",
              fontSize: 38,
              fontWeight: 500,
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {rtl(SUBLINE)}
          </div>
        </div>

        {/* Bottom chips (Hebrew, RTL row) */}
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 20,
          }}
        >
          {CHIPS.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 28px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#FFFFFF",
                fontSize: 28,
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {rtl(chip)}
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#F97316",
                  display: "flex",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Heebo", data: heeboBlack, weight: 900, style: "normal" },
        { name: "Heebo", data: heeboMedium, weight: 500, style: "normal" },
      ],
    }
  );
}
