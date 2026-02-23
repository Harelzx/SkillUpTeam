import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import StoreButtons from "@/components/ui/StoreButtons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-dark-950">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <a href="/" className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
            <img
              src="/images/logo.png"
              alt={SITE_NAME}
              className="h-9 w-auto brightness-0 invert"
            />
          </a>

          {/* Store buttons */}
          <StoreButtons />

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-dark-500">
            <a
              href="/privacy"
              className="transition-colors hover:text-dark-300"
            >
              מדיניות פרטיות
            </a>
            <span className="text-white/10">|</span>
            <a
              href="/terms"
              className="transition-colors hover:text-dark-300"
            >
              תנאי שימוש
            </a>
            <span className="text-white/10">|</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-dark-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-dark-500">
            &copy; {currentYear} {SITE_NAME}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
