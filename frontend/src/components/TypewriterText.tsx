import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Tweak this to change typing speed globally ───────────────────────────────
export const CHAR_DELAY = 0.006; // seconds per character — lower = faster
// ─────────────────────────────────────────────────────────────────────────────

interface TypewriterTextProps {
  text: string;
  className?: string;
  tag?: "p" | "span" | "div";
  initialDelay?: number; // optional extra delay before typing starts
}

const TypewriterText = ({ text, className, tag: Tag = "p", initialDelay = 0 }: TypewriterTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  return (
    <Tag ref={ref as React.RefObject<HTMLParagraphElement & HTMLSpanElement & HTMLDivElement>} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0, delay: initialDelay + i * CHAR_DELAY }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
};

export default TypewriterText;
