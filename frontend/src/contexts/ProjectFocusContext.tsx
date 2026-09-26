import { smoothScrollToId, smoothScrollToElement, waitForElementById } from "@/lib/smoothScroll";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
export type ProjectFocusRequest = {
  projectTitle: string;
  requestId: number;
};

type ProjectFocusContextValue = {
  focusRequest: ProjectFocusRequest | null;
  focusProject: (projectTitle: string) => void;
  clearFocusRequest: () => void;
  /** Waits for the Projects scroll started on "Go to project" (or runs it if missing). */
  awaitProjectsSectionScroll: () => Promise<void>;
};

const ProjectFocusContext = createContext<ProjectFocusContextValue | null>(null);

export function ProjectFocusProvider({ children }: { children: ReactNode }) {
  const [focusRequest, setFocusRequest] = useState<ProjectFocusRequest | null>(null);
  /** Section scroll started on click so it runs in the same frame as the gesture. */
  const projectsScrollPromiseRef = useRef<Promise<boolean> | null>(null);

  const focusProject = useCallback((projectTitle: string) => {
    projectsScrollPromiseRef.current = smoothScrollToId("projects");
    setFocusRequest({ projectTitle, requestId: Date.now() });
  }, []);

  const clearFocusRequest = useCallback(() => {
    setFocusRequest(null);
  }, []);

  const awaitProjectsSectionScroll = useCallback(async () => {
    const pending = projectsScrollPromiseRef.current;
    projectsScrollPromiseRef.current = null;
    if (pending) {
      await pending;
      return;
    }
    const section = await waitForElementById("projects");
    if (section) {
      await smoothScrollToElement(section);
    }
  }, []);

  const value = useMemo(
    () => ({
      focusRequest,
      focusProject,
      clearFocusRequest,
      awaitProjectsSectionScroll,
    }),
    [focusRequest, focusProject, clearFocusRequest, awaitProjectsSectionScroll],
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
