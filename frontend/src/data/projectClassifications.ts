/**
 * Three-layer classification vocabulary for portfolio projects.
 * Domain / Technical, Context / Origin, and Industry / Theme share no duplicate
 * option labels except "Industrial" (appears in both Context and Industry lists for filtering).
 */

export const DOMAIN_TECH_OPTIONS = [
  "Backend",
  "Frontend",
  "Fullstack",
  "Mobile",
  "Database",
  "Web",
  "AI / Data",
  "AR",
] as const;

export const CONTEXT_OPTIONS = [
  "Professional",
  "Personal",
  "University",
  "Hackathon",
  "Research",
] as const;

export const INDUSTRY_THEME_OPTIONS = [
  "Gaming",
  "Educational",
  "Industrial",
  "AR",
  "Military",
] as const;

export type DomainTechClassification = (typeof DOMAIN_TECH_OPTIONS)[number];
export type ContextClassification = (typeof CONTEXT_OPTIONS)[number];
export type IndustryThemeClassification = (typeof INDUSTRY_THEME_OPTIONS)[number];

export type ProjectClassification =
  | DomainTechClassification
  | ContextClassification
  | IndustryThemeClassification;

/** All valid classification strings (deduped; "Industrial" appears once). */
export const ALL_CLASSIFICATIONS: ProjectClassification[] = Array.from(
  new Set<ProjectClassification>([
    ...DOMAIN_TECH_OPTIONS,
    ...CONTEXT_OPTIONS,
    ...INDUSTRY_THEME_OPTIONS,
  ]),
);

export const NONE_FILTER_VALUE = "__none__" as const;
