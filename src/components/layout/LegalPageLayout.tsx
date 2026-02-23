"use client";

import { useEffect, useRef, useState } from "react";
import type { LegalSection } from "@/lib/legal-content";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that is intersecting from the top
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the one closest to the top of the viewport
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  function handleTocClick(id: string) {
    const el = sectionRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm text-dark-400">
            עודכן לאחרונה: {lastUpdated}
          </p>
        </header>

        {/* Main layout: TOC + Content */}
        <div className="flex gap-12">
          {/* TOC Sidebar — right side in RTL */}
          <aside className="hidden w-64 shrink-0 md:block">
            <nav className="sticky top-24">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleTocClick(section.id)}
                      className={`block w-full text-start px-3 py-2 text-sm rounded-md transition-colors ${
                        activeId === section.id
                          ? "border-s-2 border-brand-500 text-brand-400 bg-brand-500/5 font-medium"
                          : "text-dark-400 hover:text-dark-200 hover:bg-white/5"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content area */}
          <main className="min-w-0 flex-1">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => {
                  if (el) sectionRefs.current.set(section.id, el);
                }}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="mb-4 text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <div
                  className="legal-prose"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </main>
        </div>
      </div>

      <Footer />

      {/* Scoped styles for legal prose HTML content */}
      <style jsx global>{`
        .legal-prose p {
          color: var(--color-dark-400);
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }

        .legal-prose h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-dark-300);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .legal-prose ul {
          list-style-type: disc;
          padding-inline-start: 1.5rem;
          color: var(--color-dark-400);
        }

        .legal-prose li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }

        .legal-prose li strong {
          color: var(--color-dark-300);
        }

        .legal-prose a {
          color: var(--color-brand-400);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .legal-prose a:hover {
          color: var(--color-brand-300);
        }
      `}</style>
    </div>
  );
}
