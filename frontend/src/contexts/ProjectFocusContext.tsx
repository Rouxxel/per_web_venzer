import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { scrollToSection } from "@/lib/scrollToSection";

export type ProjectFocusRequest = {
  projectTitle: string;
  requestId: number;
};

type ProjectFocusContextValue = {
  focusRequest: ProjectFocusRequest | null;
  focusProject: (projectTitle: string) => void;
  clearFocusRequest: () => void;
};

const ProjectFocusContext = createContext<ProjectFocusContextValue | null>(null);

export function ProjectFocusProvider({ children }: { children: ReactNode }) {
  const [focusRequest, setFocusRequest] = useState<ProjectFocusRequest | null>(null);

  const focusProject = useCallback((projectTitle: string) => {
    setFocusRequest({ projectTitle, requestId: Date.now() });
    scrollToSection("#projects");
  }, []);

  const clearFocusRequest = useCallback(() => {
    setFocusRequest(null);
  }, []);

  const value = useMemo(
    () => ({ focusRequest, focusProject, clearFocusRequest }),
    [focusRequest, focusProject, clearFocusRequest],
  );

  return (
    <ProjectFocusContext.Provider value={value}>{children}</ProjectFocusContext.Provider>
  );
}

export function useProjectFocus() {
  const ctx = useContext(ProjectFocusContext);
  if (!ctx) {
    throw new Error("useProjectFocus must be used within ProjectFocusProvider");
  }
  return ctx;
}
