import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCvDownloadOptions, type ParsedCvPdf } from "@/lib/cvDownloads";
import { useLanguage, type LanguageData } from "@/languages/language_invoker";
import { ChevronDown, Download } from "lucide-react";
import { useMemo } from "react";

function getCvOptionLabel(cv: ParsedCvPdf, language: LanguageData): string {
  const copy = language.sections.experience_section.cv_download_options;
  const formatName = copy.formats[cv.formatKey as keyof typeof copy.formats] ?? cv.formatKey;
  const langName = copy.languages[cv.langCode as keyof typeof copy.languages] ?? cv.langCode;
  return copy.option_label.replace("{format}", formatName).replace("{language}", langName);
}

const CvDownloadMenu = () => {
  const { language } = useLanguage();
  const options = useMemo(() => getCvDownloadOptions(), []);

  if (options.length === 0) {
    return null;
  }

  if (options.length === 1) {
    const only = options[0];
    return (
      <a
        href={only.href}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border border-border rounded-lg text-foreground hover:bg-accent transition-colors"
      >
        <Download className="h-4 w-4 shrink-0" />
        <span>{getCvOptionLabel(only, language)}</span>
      </a>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border border-border rounded-lg text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Download className="h-4 w-4 shrink-0" />
          <span>{language.sections.experience_section.download_cv_btn}</span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="min-w-[var(--radix-dropdown-menu-trigger-width)] max-w-sm"
      >
        {options.map((cv) => (
          <DropdownMenuItem key={cv.filename} asChild>
            <a
              href={cv.href}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {getCvOptionLabel(cv, language)}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CvDownloadMenu;
