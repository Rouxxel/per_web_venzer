import { useEffect } from "react";
import { useSectionLoading } from "@/contexts/SectionLoadingContext";
import { useSequentialSections } from "@/hooks/useSequentialSections";

/** Longest hero motion: 0.52s delay + 0.6s duration — defer chunk work until this finishes. */
const HERO_INTRO_MS = 1200;

const DEFERRED_SECTIONS = [
  { id: "about", loader: () => import("@/sections/About") },
  { id: "projects", loader: () => import("@/sections/Projects") },
  { id: "experience", loader: () => import("@/sections/Experience") },
  { id: "contact", loader: () => import("@/sections/Contact") },
] as const;

/**
 * Loads below-the-fold sections after the hero intro animation.
 * State lives here so Index (and Hero) do not re-render on each chunk.
 */
export default function DeferredSections() {
  const { setDeferredSectionsComplete } = useSectionLoading();
  const { sections, isComplete } = useSequentialSections(DEFERRED_SECTIONS, {
    startDelayMs: HERO_INTRO_MS,
  });

  useEffect(() => {
    if (isComplete) setDeferredSectionsComplete(true);
  }, [isComplete, setDeferredSectionsComplete]);

  return (
    <>
      {sections.map((Section, index) => (
        <Section key={DEFERRED_SECTIONS[index].id} />
      ))}
    </>
  );
}
