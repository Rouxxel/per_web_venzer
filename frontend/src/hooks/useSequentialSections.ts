import { useEffect, useState, startTransition, type ComponentType } from "react";

type SectionModule = { default: ComponentType };

type SectionEntry = {
  id: string;
  loader: () => Promise<SectionModule>;
};

type UseSequentialSectionsOptions = {
  /** Wait before fetching the first chunk (lets above-the-fold animations finish). */
  startDelayMs?: number;
};

/** Yield the main thread so the browser can paint before loading the next chunk. */
function yieldToMain(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => resolve(), { timeout: 100 });
      } else {
        setTimeout(resolve, 0);
      }
    });
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Loads section modules one at a time, appending each to state as it resolves.
 * Earlier sections render (and can paint) before later chunks are fetched.
 */
export function useSequentialSections(
  entries: readonly SectionEntry[],
  { startDelayMs = 0 }: UseSequentialSectionsOptions = {},
) {
  const [sections, setSections] = useState<ComponentType[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadInOrder() {
      if (startDelayMs > 0) {
        await wait(startDelayMs);
        if (cancelled) return;
      }

      const loaded: ComponentType[] = [];

      for (const entry of entries) {
        if (cancelled) return;

        const mod = await entry.loader();
        if (cancelled) return;

        loaded.push(mod.default);
        startTransition(() => {
          setSections([...loaded]);
        });

        await yieldToMain();
      }

      if (!cancelled) setIsComplete(true);
    }

    void loadInOrder();

    return () => {
      cancelled = true;
    };
  }, [entries, startDelayMs]);

  return { sections, isComplete };
}
