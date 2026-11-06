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
import { ExternalLink, Github, ImageIcon, Play, X } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";

/** Matches navbar offset used for section scroll. */
const NAVBAR_HEIGHT_PX = 80;
/**
 * Fraction of the available (below-navbar) viewport height the dialog occupies.
 * Set as a CSS variable so it can differ per breakpoint (mobile 95%, sm+ 96%).
 */
const DIALOG_HEIGHT_RATIO_CLASSES = "[--dialog-h:0.95] sm:[--dialog-h:0.96]";
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
  mediaLabels: {
    showVideo: string;
    showImage: string;
  };
};

function hasExternalLinks(project: Project): boolean {
  if (project.github?.trim()) return true;
  if (project.demo != null && project.demo.trim() !== "") return true;
  if (project.live_demo != null && project.live_demo.trim() !== "") return true;
  return false;
}

/**
 * Converts a YouTube watch/short/share URL into a privacy-enhanced embed URL.
 * Returns null for non-YouTube links (e.g. Vimeo) so the toggle is hidden.
 */
function getYouTubeEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  const host = parsed.hostname.replace(/^www\.|^m\./, "");
  let id: string | null = null;
  if (host === "youtu.be") {
    id = parsed.pathname.slice(1).split("/")[0];
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    const segments = parsed.pathname.split("/").filter(Boolean);
    if (segments[0] === "watch") id = parsed.searchParams.get("v");
    else if (segments[0] === "embed" || segments[0] === "shorts" || segments[0] === "live") id = segments[1] ?? null;
  }
  if (!id || !/^[\w-]{11}$/.test(id)) return null;
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
}

const ProjectDetailDialog = ({ project, open, onClose, linkLabels, mediaLabels }: ProjectDetailDialogProps) => {
  // Title of the project currently showing its video; keyed by title so switching
  // projects automatically falls back to the image without an effect.
  const [videoProjectTitle, setVideoProjectTitle] = useState<string | null>(null);

  const handleClose = () => {
    setVideoProjectTitle(null);
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const header = document.querySelector("header");
    const onHeaderClick = () => handleClose();
    header?.addEventListener("click", onHeaderClick);
    return () => header?.removeEventListener("click", onHeaderClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, onClose]);

  if (!project) return null;

  const embedUrl = getYouTubeEmbedUrl(project.demo);
  const showVideo = videoProjectTitle === project.title;
  const canToggleMedia = embedUrl != null && Boolean(project.image);
  const isVideoVisible = embedUrl != null && (showVideo || !project.image);
  const toggleMedia = () => setVideoProjectTitle(showVideo ? null : project.title);

  // 100dvh tracks the *visible* viewport on mobile (URL bar shown/hidden); 100vh does not,
  // which is what pushed the dialog's bottom edge off-screen.
  const availableHeight = `calc(100dvh - ${NAVBAR_HEIGHT_PX}px)`;
  const panelHeight = `calc(${availableHeight} * var(--dialog-h))`;
  const panelTop = `calc(${NAVBAR_HEIGHT_PX}px + ${availableHeight} * (1 - var(--dialog-h)) / 2)`;
  const panelBodyMaxHeight = `calc(${panelHeight} - ${DIALOG_HEADER_REM}rem)`;

  return (
    <Dialog open={open} onOpenChange={(next) => !next && handleClose()}>
      <DialogPortal>
        <DialogPrimitive.Overlay
          className="fixed left-0 right-0 bottom-0 top-[80px] z-40 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-40 flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl outline-none",
            "left-1/2 w-[95vw] -translate-x-1/2 sm:w-[90vw]",
            DIALOG_HEIGHT_RATIO_CLASSES,
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
                className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-muted p-3 [--media-max-h:min(36dvh,calc(var(--panel-h)-10rem))] lg:[--media-max-h:calc(var(--panel-h)-10rem)]"
                style={{ maxHeight: panelBodyMaxHeight, "--panel-h": panelHeight } as CSSProperties}
              >
                {isVideoVisible ? (
                  <div className="relative aspect-video w-full max-w-[calc(var(--media-max-h)*16/9)] overflow-hidden rounded-md bg-black">
                    <iframe
                      src={embedUrl}
                      title={project.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-contain max-h-[var(--media-max-h)]"
                  />
                ) : (
                  <div className="flex min-h-[10rem] w-full items-center justify-center text-sm text-muted-foreground/50">
                    No image
                  </div>
                )}

                {canToggleMedia && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="shrink-0 gap-2"
                    onClick={toggleMedia}
                    aria-pressed={showVideo}
                  >
                    {showVideo ? <ImageIcon className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    <span className="font-accent">{showVideo ? mediaLabels.showImage : mediaLabels.showVideo}</span>
                  </Button>
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
