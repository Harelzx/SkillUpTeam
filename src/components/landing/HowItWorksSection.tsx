"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PhoneMockup from "@/components/phone/PhoneMockup";
import { STEPS } from "@/lib/constants";

const INTERVAL_MS = 3500;

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (pausedRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STEPS.length);
    }, INTERVAL_MS);
  }, []);

  const pauseInterval = useCallback(() => {
    pausedRef.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const resumeInterval = useCallback(() => {
    pausedRef.current = false;
    startInterval();
  }, [startInterval]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    pausedRef.current = false;
    startInterval();
  };

  return (
    <div className="w-full px-6 md:px-16">
      <ScrollReveal>
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-dark-900">
          איך זה עובד?
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="mt-3 mb-16 text-center text-dark-500">
          ארבעה צעדים פשוטים ואתם בדרך להצלחה
        </p>
      </ScrollReveal>

      <div
        className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-16 md:flex-row"
        onMouseEnter={pauseInterval}
        onMouseLeave={resumeInterval}
      >
        {/* Steps list */}
        <div className="flex w-full flex-col gap-3 md:min-w-80 md:w-auto">
          {STEPS.map((step, i) => {
            const isActive = currentStep === i;
            return (
              <motion.div
                key={i}
                className={`flex cursor-pointer items-start gap-3.5 rounded-xl p-4 transition-all ${
                  isActive
                    ? "border border-dark-200 bg-white shadow-md"
                    : "border border-transparent bg-transparent"
                }`}
                onClick={() => handleStepClick(i)}
                layout
              >
                {/* Step number */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold transition-all ${
                    isActive
                      ? "bg-brand-500 text-white shadow-md"
                      : "bg-dark-200 text-dark-400"
                  }`}
                >
                  {step.number}
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-dark-900">
                    {step.title}
                  </h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        key={`desc-${i}`}
                        className="overflow-hidden text-sm leading-relaxed text-dark-500"
                        initial={{ maxHeight: 0, opacity: 0, marginTop: 0 }}
                        animate={{
                          maxHeight: 120,
                          opacity: 1,
                          marginTop: 4,
                        }}
                        exit={{ maxHeight: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Phone mockup */}
        <div className="flex flex-col items-center">
          <PhoneMockup activeScreen={currentStep} animate={false} />

          {/* Step dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => handleStepClick(i)}
                aria-label={`צעד ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  currentStep === i
                    ? "h-2 w-6 rounded bg-brand-500"
                    : "h-2 w-2 bg-dark-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
