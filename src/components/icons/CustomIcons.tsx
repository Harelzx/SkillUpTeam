/**
 * Custom SVG icons with advanced techniques:
 * gradients, layered shapes, filters, and depth.
 * Replaces all emoji and generic lucide-react icons.
 */

interface IconProps {
  className?: string;
  size?: number;
}

/* ──────────────────────────────────────────
   PAIN POINT ILLUSTRATIONS (large, expressive)
   ────────────────────────────────────────── */

/** Frustrated search — magnifying glass with cracks radiating outward */
export function FrustratedSearchIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="search-glass" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="search-handle" x1="28" y1="28" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <radialGradient id="search-glare" cx="14" cy="14" r="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id="search-shadow" x="-4" y="-2" width="56" height="56">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1E40AF" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Main magnifying glass circle */}
      <circle cx="20" cy="20" r="13" stroke="url(#search-glass)" strokeWidth="3.5" filter="url(#search-shadow)" />

      {/* Glass reflection */}
      <circle cx="20" cy="20" r="11" fill="url(#search-glare)" />

      {/* Handle */}
      <line x1="30" y1="30" x2="40" y2="40" stroke="url(#search-handle)" strokeWidth="4" strokeLinecap="round" />

      {/* Crack lines radiating from center — frustration */}
      <g stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.9">
        <path d="M16 16 L12 10" />
        <path d="M20 14 L20 7" />
        <path d="M24 16 L29 11" />
        <path d="M16 21 L10 22" />
      </g>

      {/* Question marks — confusion */}
      <text x="36" y="14" fontSize="10" fontWeight="700" fill="#F59E0B" opacity="0.8" fontFamily="sans-serif">?</text>
      <text x="6" y="38" fontSize="8" fontWeight="700" fill="#F59E0B" opacity="0.5" fontFamily="sans-serif">?</text>
    </svg>
  );
}

/** Unverified teacher — silhouette with warning badge */
export function UnverifiedTeacherIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="teacher-body" x1="12" y1="18" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="teacher-head" x1="18" y1="4" x2="30" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <linearGradient id="warning-bg" x1="30" y1="4" x2="44" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="warning-glow" x="26" y="0" width="24" height="24">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#F59E0B" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Person silhouette — head */}
      <circle cx="22" cy="14" r="8" fill="url(#teacher-head)" />

      {/* Person silhouette — body */}
      <path
        d="M8 44 C8 32 14 26 22 26 C30 26 36 32 36 44"
        fill="url(#teacher-body)"
      />

      {/* Dashed outline — uncertainty */}
      <circle cx="22" cy="14" r="9.5" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

      {/* Warning triangle badge */}
      <g filter="url(#warning-glow)">
        <path d="M38 6 L44 18 L32 18 Z" fill="url(#warning-bg)" />
        <text x="38" y="16" fontSize="9" fontWeight="800" fill="#78350F" textAnchor="middle" fontFamily="sans-serif">!</text>
      </g>

      {/* Cross marks — rejection */}
      <g stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <path d="M6 8 L10 12" />
        <path d="M10 8 L6 12" />
      </g>
    </svg>
  );
}

/** Complicated coordination — tangled calendar/messages */
export function ComplicatedCoordIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="calendar-face" x1="4" y1="10" x2="32" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="calendar-top" x1="4" y1="8" x2="32" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="bubble-grad" x1="28" y1="6" x2="44" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="coord-shadow" x="-2" y="0" width="52" height="52">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#334155" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Calendar body */}
      <rect x="4" y="14" width="28" height="26" rx="4" fill="url(#calendar-face)" filter="url(#coord-shadow)" />

      {/* Calendar top bar */}
      <rect x="4" y="10" width="28" height="10" rx="4" fill="url(#calendar-top)" />
      <rect x="4" y="16" width="28" height="4" fill="url(#calendar-top)" />

      {/* Calendar pins */}
      <rect x="12" y="7" width="2.5" height="6" rx="1.25" fill="#4F46E5" />
      <rect x="22" y="7" width="2.5" height="6" rx="1.25" fill="#4F46E5" />

      {/* Calendar grid dots — scattered mess */}
      <g fill="#94A3B8" opacity="0.6">
        <rect x="9" y="24" width="4" height="3" rx="1" />
        <rect x="16" y="24" width="4" height="3" rx="1" />
        <rect x="23" y="24" width="4" height="3" rx="1" />
        <rect x="9" y="30" width="4" height="3" rx="1" />
        <rect x="16" y="30" width="4" height="3" rx="1" />
        <rect x="23" y="30" width="4" height="3" rx="1" />
      </g>

      {/* Scribble/tangle lines — chaos */}
      <path
        d="M11 25 C14 22, 18 30, 22 26 C26 22, 21 32, 26 29"
        stroke="#EF4444"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Chat bubble — overlapping tasks */}
      <rect x="30" y="6" width="16" height="13" rx="4" fill="url(#bubble-grad)" filter="url(#coord-shadow)" />
      <path d="M34 19 L32 23 L38 19" fill="url(#bubble-grad)" />

      {/* Dots inside bubble — message typing */}
      <circle cx="35" cy="12.5" r="1.5" fill="white" opacity="0.8" />
      <circle cx="39" cy="12.5" r="1.5" fill="white" opacity="0.6" />
      <circle cx="43" cy="12.5" r="1.5" fill="white" opacity="0.4" />
    </svg>
  );
}

/* ──────────────────────────────────────────
   FEATURE ICONS (medium, crisp)
   ────────────────────────────────────────── */

/** Verified shield with gradient and check mark */
export function ShieldVerifiedIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shield-fill" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="shield-shine" x1="6" y1="4" x2="14" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Shield body */}
      <path
        d="M12 2 L4 6 V12 C4 17.5 7.8 21.7 12 23 C16.2 21.7 20 17.5 20 12 V6 L12 2Z"
        fill="url(#shield-fill)"
      />

      {/* Shine overlay */}
      <path
        d="M12 2 L4 6 V12 C4 14 5 16 6.5 17.5 L14 4 L12 2Z"
        fill="url(#shield-shine)"
      />

      {/* Check mark */}
      <path
        d="M8.5 12.5 L11 15 L16 9.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Lightning bolt with energy glow */
export function BoltIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bolt-fill" x1="8" y1="1" x2="16" y2="23" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="bolt-glow" x="-4" y="-4" width="32" height="32">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Bolt shape */}
      <path
        d="M13.5 1.5 L5 13.5 H11 L10 22.5 L19 10.5 H13 L13.5 1.5Z"
        fill="url(#bolt-fill)"
        filter="url(#bolt-glow)"
      />

      {/* Inner highlight */}
      <path
        d="M13 3 L7 12 H11.5 L11 19 L17 11.5 H13.5 L13 3Z"
        fill="white"
        opacity="0.15"
      />
    </svg>
  );
}

/** Secure lock with gradient and keyhole */
export function SecureLockIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lock-body" x1="5" y1="10" x2="19" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="lock-shackle" x1="7" y1="3" x2="17" y2="11" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A5B4FC" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>

      {/* Shackle (top arc) */}
      <path
        d="M8 10 V7 C8 4.24 9.79 2 12 2 C14.21 2 16 4.24 16 7 V10"
        stroke="url(#lock-shackle)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lock body */}
      <rect x="5" y="10" width="14" height="12" rx="3" fill="url(#lock-body)" />

      {/* Body shine */}
      <rect x="5" y="10" width="7" height="8" rx="3" fill="white" opacity="0.1" />

      {/* Keyhole */}
      <circle cx="12" cy="15" r="2" fill="#312E81" />
      <rect x="11.25" y="16" width="1.5" height="3" rx="0.75" fill="#312E81" />
    </svg>
  );
}

/** Chat bubble with layered depth */
export function ChatBubbleIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="chat-fill" x1="2" y1="3" x2="22" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="chat-back" x1="4" y1="6" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Back bubble — depth layer */}
      <path
        d="M6 6 H20 C21.1 6 22 6.9 22 8 V16 C22 17.1 21.1 18 20 18 H18 L15 21 V18 H6 C4.9 18 4 17.1 4 16 V8 C4 6.9 4.9 6 6 6Z"
        fill="url(#chat-back)"
      />

      {/* Front bubble */}
      <path
        d="M4 3 H18 C19.1 3 20 3.9 20 5 V13 C20 14.1 19.1 15 18 15 H16 L13 18 V15 H4 C2.9 15 2 14.1 2 13 V5 C2 3.9 2.9 3 4 3Z"
        fill="url(#chat-fill)"
      />

      {/* Chat dots */}
      <circle cx="7.5" cy="9.5" r="1.2" fill="#78350F" opacity="0.6" />
      <circle cx="11" cy="9.5" r="1.2" fill="#78350F" opacity="0.6" />
      <circle cx="14.5" cy="9.5" r="1.2" fill="#78350F" opacity="0.6" />
    </svg>
  );
}

/* ──────────────────────────────────────────
   UTILITY / UI ICONS
   ────────────────────────────────────────── */

/** Arrow left with subtle gradient */
export function ArrowIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 3 L5 8 L10 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="5.5"
        y1="8"
        x2="13"
        y2="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Hamburger menu — three layered lines with rounded caps */
export function MenuIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="16" y2="12" opacity="0.7" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </g>
    </svg>
  );
}

/** Close icon — X with subtle depth */
export function CloseIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </g>
    </svg>
  );
}

/** Chevron down arrow */
export function ChevronDownIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="chevron-grad" x1="12" y1="6" x2="12" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M6 9 L12 15 L18 9"
        stroke="url(#chevron-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Sparkle / star decorative element */
export function SparkleIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sparkle-grad" x1="2" y1="2" x2="18" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Four-pointed star */}
      <path
        d="M10 1 L12 7 L18 8 L13 12 L14.5 19 L10 15 L5.5 19 L7 12 L2 8 L8 7 Z"
        fill="url(#sparkle-grad)"
      />

      {/* Center glow dot */}
      <circle cx="10" cy="10" r="2" fill="white" opacity="0.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────
   CTA TRUST BADGE ICONS (compact)
   ────────────────────────────────────────── */

/** Small lock for trust badges */
export function TrustLockIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 7 V5.5 C5 3.57 6.34 2 8 2 C9.66 2 11 3.57 11 5.5 V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="3.5" y="7" width="9" height="7" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="3.5" y="7" width="9" height="7" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="8" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

/** Check circle for trust badges */
export function TrustCheckIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.5" fill="currentColor" opacity="0.15" />
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path
        d="M5.5 8.2 L7.2 10 L10.8 6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Star for trust badges */
export function TrustStarIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 1.5 L9.8 5.2 L13.8 5.8 L10.9 8.6 L11.6 12.6 L8 10.7 L4.4 12.6 L5.1 8.6 L2.2 5.8 L6.2 5.2 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M8 1.5 L9.8 5.2 L13.8 5.8 L10.9 8.6 L11.6 12.6 L8 10.7 L4.4 12.6 L5.1 8.6 L2.2 5.8 L6.2 5.2 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
