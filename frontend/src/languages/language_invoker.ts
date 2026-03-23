import englishLanguage from "./eng.json";
// import spanishLanguage from "./es.json";
// import germanLanguage from "./de.json";

/**
 * Base schema inferred from the English language file.
 * Keep other language JSON files compatible with this structure.
 */
export type LanguageData = typeof englishLanguage;

/**
 * Language registry.
 * Add new language imports here as you create more JSON files.
 */
const languageRegistry: Record<string, LanguageData> = {
  en: englishLanguage,
  // es: spanishLanguage,
  // de: germanLanguage,
};

export type LanguageCode = keyof typeof languageRegistry;

/**
 * Default language object to import in components.
 * Usage:
 *   import { language } from "@/languages/language_invoker";
 *   language.sections.hero_section.greet_txt
 */
export let currentLanguageCode: LanguageCode = "en";
export let language: LanguageData = languageRegistry[currentLanguageCode];

/**
 * Returns the language object for a given code.
 * Falls back to English when the code is unknown.
 */
export const getLanguage = (languageCode: string): LanguageData =>
  languageRegistry[languageCode] ?? languageRegistry.en;

/**
 * Switches the global language variable.
 * Returns the active language object after switching.
 */
export const setLanguage = (languageCode: string): LanguageData => {
  const nextLanguage = getLanguage(languageCode);
  currentLanguageCode =
    languageRegistry[languageCode] != null ? (languageCode as LanguageCode) : "en";
  language = nextLanguage;
  return language;
};

/**
 * Returns all loaded languages.
 * Add new imports to languageRegistry and they are available here.
 */
export const allLanguages = languageRegistry;

export default language;

/* -------------------------------------------------------------------------- */
/* Explanations                                                               */
/* -------------------------------------------------------------------------- */
/*
How to add another language JSON:

1) Create the file in this folder (example: es.json, de.json).
2) Copy eng.json structure exactly and only translate values.
3) Add import(s) at the top of this file:
   import spanishLanguage from "./es.json";
4) Register it in languageRegistry:
   const languageRegistry: Record<string, LanguageData> = {
     en: englishLanguage,
     es: spanishLanguage,
   };
5) Use it in UI:
   setLanguage("es");
   // then read: language.sections.hero_section.greet_txt

//Example of usage:
import { language, setLanguage, getLanguage, allLanguages } from "@/languages/language_invoker";

// 1) Access text directly
const greetText = language.sections.hero_section.greet_txt;
const aboutTitle = language.sections.about_section.section_title;

// 2) Switch active language globally (for example on toggle click)
setLanguage("en"); // later: setLanguage("es"), setLanguage("de"), etc.
const contactTitle = language.sections.contact_section.contact_title;

// 3) Read language without changing global state
const spanishData = getLanguage("es");
const heroButtonText = spanishData.sections.hero_section.view_work_btn;

// 4) List loaded language codes
const loadedCodes = Object.keys(allLanguages); // ["en", ...]
*/
