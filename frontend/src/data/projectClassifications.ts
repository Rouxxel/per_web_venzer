//-------------------------------------------------------------------------
//---------------------------------ENGLISH---------------------------------
//-------------------------------------------------------------------------
/**
 * Canonical three-layer classification vocabulary for portfolio projects.
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
  "MLOps",
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

/** Runtime UI metadata for filter controls (default English). */
export const PROJECT_FILTER_LABELS = {
  defaultOption: "None",
  domainTitle: "Domain / Technical",
  contextTitle: "Context / Origin",
  industryTitle: "Industry / Theme",
} as const;

//-------------------------------------------------------------------------
//---------------------------------SPANISH---------------------------------
//-------------------------------------------------------------------------
/** Spanish labels for filter UI. */
export const PROJECT_FILTER_LABELS_ES = {
  defaultOption: "Ninguno",
  domainTitle: "Dominio / Técnico",
  contextTitle: "Contexto / Origen",
  industryTitle: "Industria / Temática",
} as const;

/** Spanish display labels mapped by index to canonical DOMAIN_TECH_OPTIONS values. */
export const DOMAIN_TECH_OPTIONS_ES = [
  "Backend",
  "Frontend",
  "Fullstack",
  "Móvil",
  "Base de datos",
  "Web",
  "MLOps",
  "IA / Datos",
  "RA",
] as const;

/** Spanish display labels mapped by index to canonical CONTEXT_OPTIONS values. */
export const CONTEXT_OPTIONS_ES = [
  "Profesional",
  "Personal",
  "Universidad",
  "Hackatón",
  "Investigación",
] as const;

/** Spanish display labels mapped by index to canonical INDUSTRY_THEME_OPTIONS values. */
export const INDUSTRY_THEME_OPTIONS_ES = [
  "Videojuegos",
  "Educación",
  "Industrial",
  "RA",
  "Militar",
] as const;

//-------------------------------------------------------------------------
//---------------------------------FRENCH----------------------------------
//-------------------------------------------------------------------------
/** French labels for filter UI. */
export const PROJECT_FILTER_LABELS_FR = {
  defaultOption: "Aucun",
  domainTitle: "Domaine / Technique",
  contextTitle: "Contexte / Origine",
  industryTitle: "Industrie / Thématique",
} as const;

/** French display labels mapped by index to canonical DOMAIN_TECH_OPTIONS values. */
export const DOMAIN_TECH_OPTIONS_FR = [
  "Backend",
  "Frontend",
  "Fullstack",
  "Mobile",
  "Base de données",
  "Web",
  "MLOps",
  "IA / Données",
  "RA"
] as const;

/** French display labels mapped by index to canonical CONTEXT_OPTIONS values. */
export const CONTEXT_OPTIONS_FR = [
  "Profesionelle",
  "Personelle",
  "Université",
  "Hackathon",
  "Recherche",
] as const;

/** French display labels mapped by index to canonical INDUSTRY_THEME_OPTIONS values. */
export const INDUSTRY_THEME_OPTIONS_FR = [
  "Jeux vidéo",
  "Éducation",
  "Industrielle",
  "RA",
  "Militaire",
] as const;

//-------------------------------------------------------------------------
//---------------------------------GERMAN----------------------------------
//-------------------------------------------------------------------------
// Add German labels/options here when ready:
// - PROJECT_FILTER_LABELS_DE
// - DOMAIN_TECH_OPTIONS_DE
// - CONTEXT_OPTIONS_DE
// - INDUSTRY_THEME_OPTIONS_DE

//-------------------------------------------------------------------------
//---------------------------------Exports---------------------------------
//-------------------------------------------------------------------------
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

/** Returns localized filter labels/options while preserving canonical classification values. */
export const getProjectFilterLocalization = (languageCode: string) => {
    //if (languageCode === "languagecodehere") {
    //  return {
    //    labels: PROJECT_FILTER_LABELS_language,
    //    domainOptions: DOMAIN_TECH_OPTIONS_language,
    //    contextOptions: CONTEXT_OPTIONS_language,
    //    industryOptions: INDUSTRY_THEME_OPTIONS_language,
    //  } as const;
    //}
  if (languageCode === "fr") {
    return {
      labels: PROJECT_FILTER_LABELS_FR,
      domainOptions: DOMAIN_TECH_OPTIONS_FR,
      contextOptions: CONTEXT_OPTIONS_FR,
      industryOptions: INDUSTRY_THEME_OPTIONS_FR,
    } as const;
  }
  if (languageCode === "es") {
    return {
      labels: PROJECT_FILTER_LABELS_ES,
      domainOptions: DOMAIN_TECH_OPTIONS_ES,
      contextOptions: CONTEXT_OPTIONS_ES,
      industryOptions: INDUSTRY_THEME_OPTIONS_ES,
    } as const;
  }
  return {
    labels: PROJECT_FILTER_LABELS,
    domainOptions: DOMAIN_TECH_OPTIONS,
    contextOptions: CONTEXT_OPTIONS,
    industryOptions: INDUSTRY_THEME_OPTIONS,
  } as const;
};
