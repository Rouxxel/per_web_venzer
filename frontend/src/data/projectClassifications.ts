/**
 * Canonical three-layer classification vocabulary for portfolio projects.
 * Domain / Technical, Context / Origin and Industry / Theme share no duplicate
 * option labels except "Industrial" (appears in both Context and Industry lists for filtering).
 */
export const DOMAIN_TECH_OPTIONS = [
  "Backend",
  "Frontend",
  "Fullstack",
  "Standalone",
  "Mobile",
  "Database",
  "Web",
  "MLOps",
  "MCP",
  "AI/Data",
  "Privacy",
  "AR",
] as const;

export const CONTEXT_OPTIONS = [
  "Professional",
  "Personal",
  "University",
  "Hackathon",
  "Research/Experimental",
  "Humanitarian",
  "Tooling",
] as const;

export const INDUSTRY_THEME_OPTIONS = [
  "Gaming",
  "Educational",
  "Industrial",
  "Finance/Fintech",
  "AR",
  "Military",
  "Disaster Relieve",
  "Dev Tools",
  "Government",
  "Logistics/Supply Chain"
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
  "Autónoma",
  "Móvil",
  "Base de datos",
  "Web",
  "MLOps",
  "MCP",
  "IA / Datos",
  "Privacidad",
  "RA",
] as const;

/** Spanish display labels mapped by index to canonical CONTEXT_OPTIONS values. */
export const CONTEXT_OPTIONS_ES = [
  "Profesional",
  "Personal",
  "Universidad",
  "Hackatón",
  "Investigación/Experimental",
  "Humanitaria",
  "Herramientas",
] as const;

/** Spanish display labels mapped by index to canonical INDUSTRY_THEME_OPTIONS values. */
export const INDUSTRY_THEME_OPTIONS_ES = [
  "Videojuegos",
  "Educación",
  "Industrial",
  "Finanzas/Fintech",
  "RA",
  "Militar",
  "Alivio de desastres",
  "Herramientas de desarrollo",
  "Gobierno",
  "Logística/Cadena de Suministros"
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
  "Autonome",
  "Mobile",
  "Base de données",
  "Web",
  "MLOps",
  "MCP",
  "IA / Données",
  "Confidentialité",
  "RA"
] as const;

/** French display labels mapped by index to canonical CONTEXT_OPTIONS values. */
export const CONTEXT_OPTIONS_FR = [
  "Profesionelle",
  "Personelle",
  "Université",
  "Hackathon",
  "Recherche/Expérimental",
  "Humanitaire",
  "Outils",
] as const;

/** French display labels mapped by index to canonical INDUSTRY_THEME_OPTIONS values. */
export const INDUSTRY_THEME_OPTIONS_FR = [
  "Jeux vidéo",
  "Éducation",
  "Industrielle",
  "Finances/Fintech",
  "RA",
  "Militaire",
  "Alleviation de catastrophe",
  "Dev outils",
  "Gouvernement",
  "Logistique/Chaîne d'approvisionnement"
] as const;

//-------------------------------------------------------------------------
//---------------------------------GERMAN----------------------------------
//-------------------------------------------------------------------------
/** German labels for filter UI. */
export const PROJECT_FILTER_LABELS_DE = {
  defaultOption: "Keine",
  domainTitle: "Domäne / Technisch",
  contextTitle: "Kontext / Ursprung",
  industryTitle: "Branche / Thema",
} as const;

/** German display labels mapped by index to canonical DOMAIN_TECH_OPTIONS values. */
export const DOMAIN_TECH_OPTIONS_DE = [
  "Backend",
  "Frontend",
  "Fullstack",
  "Eigenständig",
  "Mobil",
  "Datenbank",
  "Web",
  "MLOps",
  "MCP",
  "KI / Daten",
  "Datenschutz",
  "AR",
] as const;

/** German display labels mapped by index to canonical CONTEXT_OPTIONS values. */
export const CONTEXT_OPTIONS_DE = [
  "Beruflich",
  "Persönlich",
  "Universität",
  "Hackathon",
  "Forschung/Experimentell",
  "Humanitär",
  "Werkzeuge",
] as const;

/** German display labels mapped by index to canonical INDUSTRY_THEME_OPTIONS values. */
export const INDUSTRY_THEME_OPTIONS_DE = [
  "Gaming",
  "Bildung",
  "Industrial",
  "Finanzen/Fintech",
  "AR",
  "Militär",
  "Katastrophenhilfe",
  "Entwicklertools",
  "Regierung",
  "Logistik/Lieferkette",
] as const;

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

export type ProjectFocusFilters = {
  domain: string;
  context: string;
  industry: string;
};

const DOMAIN_TECH_SET = new Set<string>(DOMAIN_TECH_OPTIONS);
const CONTEXT_SET = new Set<string>(CONTEXT_OPTIONS);
const INDUSTRY_THEME_SET = new Set<string>(INDUSTRY_THEME_OPTIONS);

/**
 * Picks one filter per layer from a project's classifications (first match in list order).
 * e.g. Beeing → Fullstack, Professional, AR.
 */
export function pickFocusFiltersFromClassifications(
  classifications: ProjectClassification[],
): ProjectFocusFilters {
  let domain = NONE_FILTER_VALUE;
  let context = NONE_FILTER_VALUE;
  let industry = NONE_FILTER_VALUE;

  for (const value of classifications) {
    if (domain === NONE_FILTER_VALUE && DOMAIN_TECH_SET.has(value)) {
      domain = value;
    }
    if (context === NONE_FILTER_VALUE && CONTEXT_SET.has(value)) {
      context = value;
    }
    if (industry === NONE_FILTER_VALUE && INDUSTRY_THEME_SET.has(value)) {
      industry = value;
    }
  }

  return { domain, context, industry };
}

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
  if (languageCode === "de") {
    return {
      labels: PROJECT_FILTER_LABELS_DE,
      domainOptions: DOMAIN_TECH_OPTIONS_DE,
      contextOptions: CONTEXT_OPTIONS_DE,
      industryOptions: INDUSTRY_THEME_OPTIONS_DE,
    } as const;
  }
  return {
    labels: PROJECT_FILTER_LABELS,
    domainOptions: DOMAIN_TECH_OPTIONS,
    contextOptions: CONTEXT_OPTIONS,
    industryOptions: INDUSTRY_THEME_OPTIONS,
  } as const;
};
