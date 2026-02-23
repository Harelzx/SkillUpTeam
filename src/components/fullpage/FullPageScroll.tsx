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

/* ─── Provider ─── */
const TRANSITION_DURATION = 800; // ms
const EASING = "cubic-bezier(0.65, 0, 0.35, 1)";
const WHEEL_THRESHOLD = 30;
const TOUCH_THRESHOLD = 50;

interface FullPageProviderProps {
  children: ReactNode;
  sectionIds: string[];
}

export function FullPageProvider({ children, sectionIds }: FullPageProviderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Read initial hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      const idx = sectionIds.indexOf(hash);
      if (idx !== -1) setCurrentIndex(idx);
    }
  }, [sectionIds]);

  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, sectionIds.length - 1));
      setCurrentIndex(clamped);

      // Update URL hash without adding history entries
      const id = sectionIds[clamped];
      window.history.replaceState(null, "", `#${id}`);
    },
    [sectionIds]
  );

  const scrollToId = useCallback(
    (id: string) => {
      const idx = sectionIds.indexOf(id);
      if (idx !== -1) scrollTo(idx);
    },
    [sectionIds, scrollTo]
  );

  return (
    <FullPageContext.Provider
      value={{
        currentIndex,
        sectionCount: sectionIds.length,
        sectionIds,
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
  const { currentIndex, sectionCount, scrollTo } = useFullPage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const reducedMotion = useRef(false);
  const currentIndexRef = useRef(currentIndex);

  // Keep ref in sync for use in event handlers
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

  // Wheel handler
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Accumulated delta for trackpad
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
  }, [goTo]);

  // Touch handlers
  useEffect(() => {
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
  }, [goTo]);

  // Keyboard handler
  useEffect(() => {
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
  }, [goTo, sectionCount]);

  // Clear animation lock on transitionend
  function handleTransitionEnd(e: React.TransitionEvent) {
    // Only handle our own transform transition, not child transitions
    if (e.target === containerRef.current) {
      isAnimatingRef.current = false;
    }
  }

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
}

export function FullPageSection({ id, children, className = "" }: FullPageSectionProps) {
  return (
    <section
      id={id}
      className={`h-screen w-full overflow-hidden ${className}`}
      role="region"
      aria-label={id}
    >
      <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto">
        {children}
      </div>
    </section>
  );
}
