interface SectionDividerProps {
  topColor: string;
  bottomColor: string;
  variant?: "wave" | "curve" | "slant" | "tilt";
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  topColor,
  bottomColor,
  variant = "wave",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const transform = flip ? "scaleY(-1)" : undefined;

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: topColor, transform }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: "clamp(40px, 8vw, 120px)" }}
      >
        {variant === "wave" && (
          <path
            d="M0,60 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,60 1440,60 L1440,120 L0,120 Z"
            fill={bottomColor}
          />
        )}
        {variant === "curve" && (
          <path
            d="M0,80 Q720,0 1440,80 L1440,120 L0,120 Z"
            fill={bottomColor}
          />
        )}
        {variant === "slant" && (
          <path
            d="M0,40 L1440,100 L1440,120 L0,120 Z"
            fill={bottomColor}
          />
        )}
        {variant === "tilt" && (
          <path
            d="M0,80 C480,20 960,100 1440,40 L1440,120 L0,120 Z"
            fill={bottomColor}
          />
        )}
      </svg>
    </div>
  );
}
