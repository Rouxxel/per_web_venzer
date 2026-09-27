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
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

/** Matches navbar offset used for section scroll. */
const NAVBAR_HEIGHT_PX = 80;

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

  const panelBodyMaxHeight = `calc((100vh - ${NAVBAR_HEIGHT_PX}px) * 0.85 - 3.25rem)`;

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogPortal>
        <DialogPrimitive.Overlay
          className="fixed left-0 right-0 bottom-0 top-[80px] z-40 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-40 flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl outline-none",
            "left-1/2 w-[85vw] -translate-x-1/2",
            "top-[calc(80px+(100vh-80px)*0.075)]",
            "h-[calc((100vh-80px)*0.85)] max-h-[calc((100vh-80px)*0.85)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
          style={{ maxHeight: `calc((100vh - ${NAVBAR_HEIGHT_PX}px) * 0.85)` }}
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
                    className="max-h-[min(36vh,calc((100vh-80px)*0.85-8rem))] w-full object-contain lg:max-h-[calc((100vh-80px)*0.85-8rem)]"
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
