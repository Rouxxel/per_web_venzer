import cvPdfFilenames from "@/data/cvPdfManifest.json";

/**
 * CV PDFs live in public/pdfs. Filenames are listed in cvPdfManifest.json (regenerated on build).
 * Pattern: CV{format}{lang?}.pdf — lang is optional 2-letter suffix (default English).
 */
export const CV_FILENAME_LANGUAGE_SUFFIXES = ["de", "es", "fr", "en"] as const;

export type CvLanguageCode = "en" | (typeof CV_FILENAME_LANGUAGE_SUFFIXES)[number];

export type ParsedCvPdf = {
  filename: string;
  href: string;
  formatKey: string;
  langCode: CvLanguageCode;
};

export function parseCvPdfFilename(filename: string): ParsedCvPdf | null {
  if (!filename.startsWith("CV") || !filename.toLowerCase().endsWith(".pdf")) {
    return null;
  }

  const body = filename.slice(0, -4).slice(2);
  if (!body) return null;

  let formatKey = body;
  let langCode: CvLanguageCode = "en";

  if (body.length > 2) {
    const suffix = body.slice(-2).toLowerCase();
    if ((CV_FILENAME_LANGUAGE_SUFFIXES as readonly string[]).includes(suffix)) {
      const candidateFormat = body.slice(0, -2);
      if (candidateFormat.length > 0) {
        langCode = suffix as CvLanguageCode;
        formatKey = candidateFormat;
      }
    }
  }

  return {
    filename,
    href: `/pdfs/${filename}`,
    formatKey,
    langCode,
  };
}

const LANG_SORT_ORDER: CvLanguageCode[] = ["en", "de", "es", "fr"];

export function getCvDownloadOptions(): ParsedCvPdf[] {
  const options = (cvPdfFilenames as string[])
    .map((filename) => parseCvPdfFilename(filename))
    .filter((entry): entry is ParsedCvPdf => entry != null);

  return options.sort((a, b) => {
    const byFormat = a.formatKey.localeCompare(b.formatKey);
    if (byFormat !== 0) return byFormat;
    const langA = LANG_SORT_ORDER.indexOf(a.langCode);
    const langB = LANG_SORT_ORDER.indexOf(b.langCode);
    return (langA === -1 ? 99 : langA) - (langB === -1 ? 99 : langB);
  });
}
