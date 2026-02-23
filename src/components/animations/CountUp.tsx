"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  target: number;
  suffix?: string;
  decimal?: boolean;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = "",
  decimal = false,
  duration = 2000,
  className,
}: CountUpProps) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // ease out quart
      setValue(target * ease);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [inView, target, duration]);

  const display = decimal
    ? value.toFixed(1)
    : Math.floor(value).toLocaleString("he-IL");

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
