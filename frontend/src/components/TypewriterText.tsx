import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Tweak this to change typing speed globally ───────────────────────────────
export const CHAR_DELAY = 0.003; // seconds per character — lower = faster
// ─────────────────────────────────────────────────────────────────────────────

/** Approximate time until the last character fades in (seconds → ms for timers). */
export function estimateTypewriterDurationMs(
  text: string,
  initialDelayS = 0,
  extraBufferMs = 200,
): number {
  return Math.ceil((initialDelayS + text.length * CHAR_DELAY) * 1000) + extraBufferMs;
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  tag?: "p" | "span" | "div";
  initialDelay?: number; // optional extra delay before typing starts
  onComplete?: () => void;
}

const TypewriterText = ({
  text,
  className,
  tag: Tag = "p",
  initialDelay = 0,
  onComplete,
}: TypewriterTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const lastIndex = text.length - 1;

  return (
    <Tag ref={ref as React.RefObject<HTMLParagraphElement & HTMLSpanElement & HTMLDivElement>} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0, delay: initialDelay + i * CHAR_DELAY }}
          onAnimationComplete={
            onComplete && i === lastIndex && isInView
              ? () => onComplete()
              : undefined
          }
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
};

export default TypewriterText;
