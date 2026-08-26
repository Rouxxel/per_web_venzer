import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SectionLoadingContextValue = {
  deferredSectionsComplete: boolean;
  setDeferredSectionsComplete: (complete: boolean) => void;
};

const SectionLoadingContext = createContext<SectionLoadingContextValue | null>(null);

export function SectionLoadingProvider({ children }: { children: ReactNode }) {
  const [deferredSectionsComplete, setDeferredSectionsComplete] = useState(false);

  const value = useMemo(
    () => ({ deferredSectionsComplete, setDeferredSectionsComplete }),
    [deferredSectionsComplete],
  );

  return (
    <SectionLoadingContext.Provider value={value}>{children}</SectionLoadingContext.Provider>
  );
}

export function useSectionLoading() {
  const context = useContext(SectionLoadingContext);
  if (!context) {
    throw new Error("useSectionLoading must be used within SectionLoadingProvider");
  }
  return context;
}
