import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionInnerProps {
  children: ReactNode;
  className?: string;
}

const SectionInner = ({ children, className }: SectionInnerProps) => {
  return <div className={cn("mx-auto w-[90vw] max-w-5xl", className)}>{children}</div>;
};

export default SectionInner;

