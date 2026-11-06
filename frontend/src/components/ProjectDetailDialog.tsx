import {
  Dialog,
  DialogDescription,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ExternalLink, Github, Play, X } from "lucide-react";
import { useEffect, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";

/** Matches navbar offset used for section scroll. */
const NAVBAR_HEIGHT_PX = 80;
/** Fraction of the available (below-navbar) viewport height the dialog occupies. */
const DIALOG_HEIGHT_RATIO = 0.9;
/** Dialog header (title row) height, subtracted to size the scrollable body. */
const DIALOG_HEADER_REM = 3.25;

type ProjectDetailDialogProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
  linkLabels: {
    github: string;
    showcase: string;
    liveDemo: string;
  };
};

function hasExternalLinks(project: Project): boolean {
  if (project.github?.trim()) return true;
  if (project.demo != null && project.demo.trim() !== "") return true;
  if (project.live_demo != null && project.live_demo.trim() !== "") return true;
  return false;
}

const ProjectDetailDialog = ({ project, open, onClose, linkLabels }: ProjectDetailDialogProps) => {
  useEffect(() => {
    if (!open) return;
    const header = document.querySelector("header");
    const onHeaderClick = () => onClose();
    header?.addEventListener("click", onHeaderClick);
    return () => header?.removeEventListener("click", onHeaderClick);
  }, [open, onClose]);

  if (!project) return null;

  // 100dvh tracks the *visible* viewport on mobile (URL bar shown/hidden); 100vh does not,
  // which is what pushed the dialog's bottom edge off-screen.
  const availableHeight = `calc(100dvh - ${NAVBAR_HEIGHT_PX}px)`;
  const panelHeight = `calc(${availableHeight} * ${DIALOG_HEIGHT_RATIO})`;
  const panelTop = `calc(${NAVBAR_HEIGHT_PX}px + ${availableHeight} * ${(1 - DIALOG_HEIGHT_RATIO) / 2})`;
  const panelBodyMaxHeight = `calc(${panelHeight} - ${DIALOG_HEADER_REM}rem)`;

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogPortal>
        <DialogPrimitive.Overlay
          className="fixed left-0 right-0 bottom-0 top-[80px] z-40 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-40 flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl outline-none",
            "left-1/2 w-[95vw] -translate-x-1/2 sm:w-[85vw]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
          style={{ top: panelTop, height: panelHeight, maxHeight: panelHeight }}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
            <DialogTitle className="text-lg font-semibold font-subtitle text-card-foreground pr-2">
              {project.title}
            </DialogTitle>
            <DialogPrimitive.Close asChild>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8 shrink-0" aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
            <div
              className="flex shrink-0 items-center justify-center border-b border-border px-4 py-4 lg:w-[42%] lg:max-w-md lg:border-b-0 lg:border-r lg:py-5 lg:pl-5 lg:pr-4"
              style={{ maxHeight: panelBodyMaxHeight }}
            >
              <div
                className="flex w-full items-center justify-center rounded-lg bg-muted p-3"
                style={{ maxHeight: panelBodyMaxHeight }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-contain max-h-[min(36dvh,var(--image-max-h))] lg:max-h-[var(--image-max-h)]"
                    style={{ "--image-max-h": `calc(${panelHeight} - 8rem)` } as CSSProperties}
                  />
                ) : (
                  <div className="flex min-h-[10rem] w-full items-center justify-center text-sm text-muted-foreground/50">
                    No image
                  </div>
                )}
              </div>
            </div>

            <div
              className="themed-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 sm:py-5"
            >
              <div className="flex flex-col gap-4 pb-4">
                <DialogDescription asChild>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                    {project.description}
                  </p>
                </DialogDescription>

                <div>
                  <p className="mb-2 text-xs font-medium font-subtitle uppercase tracking-wider text-primary">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {hasExternalLinks(project) && (
                  <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
                    {project.github != null && project.github.trim() !== "" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium font-accent">{linkLabels.github}</span>
                      </a>
                    )}
                    {project.demo != null && project.demo.trim() !== "" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Play className="h-4 w-4" />
                        <span className="text-sm font-medium font-accent">{linkLabels.showcase}</span>
                      </a>
                    )}
                    {project.live_demo != null && project.live_demo.trim() !== "" && (
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium font-accent">{linkLabels.liveDemo}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default ProjectDetailDialog;
