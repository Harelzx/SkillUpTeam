"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

/* ─── Context ─── */
interface FullPageContextValue {
  currentIndex: number;
  sectionCount: number;
  sectionIds: string[];
  isMobile: boolean;
  scrollTo: (index: number) => void;
  scrollToId: (id: string) => void;
}

const FullPageContext = createContext<FullPageContextValue | null>(null);

export function useFullPage() {
  const ctx = useContext(FullPageContext);
  if (!ctx) throw new Error("useFullPage must be used inside <FullPageProvider>");
  return ctx;
}

/** Safe version that returns null outside FullPageProvider (for shared components like Navbar) */
export function useFullPageOptional() {
  return useContext(FullPageContext);
}

/* ─── Constants ─── */
const TRANSITION_DURATION = 800;
const EASING = "cubic-bezier(0.65, 0, 0.35, 1)";
const WHEEL_THRESHOLD = 30;
const TOUCH_THRESHOLD = 50;
const MOBILE_BREAKPOINT = "(max-width: 767px)";

/* ─── Provider ─── */
interface FullPageProviderProps {
  children: ReactNode;
  sectionIds: string[];
}

export function FullPageProvider({ children, sectionIds }: FullPageProviderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const mq = window.matchMedia(MOBILE_BREAKPOINT);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    // Read initial hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      const idx = sectionIds.indexOf(hash);
      if (idx !== -1) setCurrentIndex(idx);
    }

    // Add class to html so fullpage CSS only applies on this page
    document.documentElement.classList.add("fullpage-active");
    return () => {
      mq.removeEventListener("change", handler);
      document.documentElement.classList.remove("fullpage-active");
    };
  }, [sectionIds]);

  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, sectionIds.length - 1));
      setCurrentIndex(clamped);

      const id = sectionIds[clamped];
      window.history.replaceState(null, "", `#${id}`);
    },
    [sectionIds]
  );

  const scrollToId = useCallback(
    (id: string) => {
      const idx = sectionIds.indexOf(id);
      if (idx !== -1) {
        if (isMobile) {
          // On mobile, use native smooth scroll
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          setCurrentIndex(idx);
          window.history.replaceState(null, "", `#${id}`);
        } else {
          scrollTo(idx);
        }
      }
    },
    [sectionIds, scrollTo, isMobile]
  );

  return (
    <FullPageContext.Provider
      value={{
        currentIndex,
        sectionCount: sectionIds.length,
        sectionIds,
        isMobile,
        scrollTo,
        scrollToId,
      }}
    >
      {children}
    </FullPageContext.Provider>
  );
}

/* ─── Container ─── */
interface FullPageContainerProps {
  children: ReactNode;
}

export function FullPageContainer({ children }: FullPageContainerProps) {
  const { currentIndex, sectionCount, scrollTo, isMobile } = useFullPage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const reducedMotion = useRef(false);
  const currentIndexRef = useRef(currentIndex);

  currentIndexRef.current = currentIndex;

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimatingRef.current) return;
      if (index === currentIndexRef.current) return;
      if (index < 0 || index >= sectionCount) return;

      isAnimatingRef.current = true;
      scrollTo(index);

      if (reducedMotion.current) {
        isAnimatingRef.current = false;
      }
    },
    [scrollTo, sectionCount]
  );

  // Wheel handler — desktop only
  useEffect(() => {
    if (isMobile) return;
    const el = containerRef.current;
    if (!el) return;

    let accDelta = 0;
    let accTimer: ReturnType<typeof setTimeout> | null = null;

    function handleWheel(e: WheelEvent) {
      e.preventDefault();
      if (isAnimatingRef.current) return;

      accDelta += e.deltaY;

      if (accTimer) clearTimeout(accTimer);
      accTimer = setTimeout(() => {
        accDelta = 0;
      }, 150);

      if (accDelta > WHEEL_THRESHOLD) {
        accDelta = 0;
        goTo(currentIndexRef.current + 1);
      } else if (accDelta < -WHEEL_THRESHOLD) {
        accDelta = 0;
        goTo(currentIndexRef.current - 1);
      }
    }

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [goTo, isMobile]);

  // Touch handlers — desktop only (mobile uses native scroll)
  useEffect(() => {
    if (isMobile) return;
    const el = containerRef.current;
    if (!el) return;

    function handleTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }

    function handleTouchEnd(e: TouchEvent) {
      if (touchStartY.current === null || isAnimatingRef.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;

      if (delta > TOUCH_THRESHOLD) {
        goTo(currentIndexRef.current + 1);
      } else if (delta < -TOUCH_THRESHOLD) {
        goTo(currentIndexRef.current - 1);
      }
    }

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goTo, isMobile]);

  // Keyboard handler — desktop only
  useEffect(() => {
    if (isMobile) return;

    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          goTo(currentIndexRef.current + 1);
          break;
        case " ":
          if (
            !(e.target instanceof HTMLInputElement) &&
            !(e.target instanceof HTMLTextAreaElement)
          ) {
            e.preventDefault();
            if (e.shiftKey) goTo(currentIndexRef.current - 1);
            else goTo(currentIndexRef.current + 1);
          }
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          goTo(currentIndexRef.current - 1);
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(sectionCount - 1);
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goTo, sectionCount, isMobile]);

  // Mobile: track active section via IntersectionObserver
  useEffect(() => {
    if (!isMobile) return;

    const observers: IntersectionObserver[] = [];
    const sectionEls = containerRef.current?.querySelectorAll("section[id]");
    if (!sectionEls) return;

    sectionEls.forEach((section, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            currentIndexRef.current = i;
            // Don't call scrollTo here to avoid re-renders during scroll
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(section);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isMobile]);

  function handleTransitionEnd(e: React.TransitionEvent) {
    if (e.target === containerRef.current) {
      isAnimatingRef.current = false;
    }
  }

  // Mobile: normal scrollable flow
  if (isMobile) {
    return (
      <div
        ref={containerRef}
        role="main"
        aria-label="Main content sections"
      >
        {children}
      </div>
    );
  }

  // Desktop: fullpage transform
  const transitionStyle = reducedMotion.current
    ? "none"
    : `transform ${TRANSITION_DURATION}ms ${EASING}`;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full"
      style={{
        transform: `translateY(-${currentIndex * 100}vh)`,
        transition: transitionStyle,
        willChange: "transform",
      }}
      onTransitionEnd={handleTransitionEnd}
      tabIndex={0}
      role="main"
      aria-label="Main content sections"
    >
      {children}
    </div>
  );
}

/* ─── Section Wrapper ─── */
interface FullPageSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Override the inner flex container classes (default: centered) */
  innerClassName?: string;
  /** Override the inner flex container classes on mobile */
  mobileInnerClassName?: string;
}

export function FullPageSection({
  id,
  children,
  className = "",
  innerClassName,
  mobileInnerClassName,
}: FullPageSectionProps) {
  const ctx = useContext(FullPageContext);
  const isMobile = ctx?.isMobile ?? false;

  const defaultInner = "flex h-full w-full flex-col items-center justify-center overflow-y-auto";

  const activeInnerClassName = isMobile
    ? (mobileInnerClassName ?? "flex w-full flex-col items-center justify-center")
    : (innerClassName ?? defaultInner);

  return (
    <section
      id={id}
      className={`w-full ${isMobile ? "min-h-svh" : "h-screen overflow-hidden"} ${className}`}
      role="region"
      aria-label={id}
    >
      <div className={activeInnerClassName}>
        {children}
      </div>
    </section>
  );
}
