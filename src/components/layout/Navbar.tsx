"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuIcon, CloseIcon } from "@/components/icons/CustomIcons";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

const SECTION_IDS = NAV_LINKS.filter((l) => l.href.startsWith("#")).map(
  (l) => l.href.slice(1)
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateActiveSection = useCallback(() => {
    const offset = 120;
    let current = "";
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
      updateActiveSection();
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(3,7,18,0.85)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center shrink-0">
          <img
            src="/images/logo.png"
            alt="SkillUp"
            className="h-10 w-auto brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href.startsWith("#") &&
              activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-dark-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="block mx-auto mt-1 h-0.5 w-4 rounded-full bg-brand-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="small" href="#download" arrow>
            הורידו עכשיו
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[rgba(3,7,18,0.95)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href.startsWith("#") &&
                  activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 text-base transition-colors ${
                      isActive
                        ? "bg-brand-500/10 text-brand-400 font-semibold"
                        : "text-dark-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-3 border-t border-white/10 pt-4">
                <Button
                  variant="primary"
                  size="default"
                  href="#download"
                  arrow
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  הורידו עכשיו
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
