import { useSyncExternalStore } from "react";
import englishLanguage from "./eng.json";
import spanishLanguage from "./esp.json";
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
  es: spanishLanguage,
  // de: germanLanguage,
};

export type LanguageCode = keyof typeof languageRegistry;

/**
 * Current in-memory language state.
 * Note: `useLanguage()` is the recommended API for React components so they re-render
 * when `setLanguage()` changes the active language.
 */
export let currentLanguageCode: LanguageCode = "en";
export let language: LanguageData = languageRegistry[currentLanguageCode];
const listeners = new Set<() => void>();

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
  listeners.forEach((listener) => listener());
  return language;
};

/**
 * Returns all loaded languages.
 * Add new imports to languageRegistry and they are available here.
 */
export const allLanguages = languageRegistry;

/** Returns language options (code + display name) for dropdown UIs. */
export const getLanguageOptions = (): Array<{ code: LanguageCode; name: string }> =>
  (Object.keys(languageRegistry) as LanguageCode[]).map((code) => ({
    code,
    name: languageRegistry[code].language,
  }));

/** Subscribe to language updates. Used by useLanguage(). */
export const subscribeToLanguageChange = (listener: () => void): (() => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

/** Reactive language hook for components. */
export const useLanguage = () => {
  const currentCode = useSyncExternalStore(
    subscribeToLanguageChange,
    () => currentLanguageCode,
    () => currentLanguageCode,
  );
  return {
    language: getLanguage(currentCode),
    currentLanguageCode: currentCode,
    setLanguage,
    getLanguageOptions: getLanguageOptions(),
  };
};

export default language;

/* -------------------------------------------------------------------------- */
/* Guide and examples                                                         */
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

// React usage (recommended):
import { useLanguage } from "@/languages/language_invoker";

const { language, currentLanguageCode, setLanguage, getLanguageOptions } = useLanguage();
const greetText = language.sections.hero_section.greet_txt;
setLanguage("en");
const options = getLanguageOptions; // [{ code: "en", name: "English" }, ...]

// Non-react usage:
import { language, setLanguage, getLanguage, allLanguages } from "@/languages/language_invoker";

// 1) Access current language data directly
const greetText = language.sections.hero_section.greet_txt;
const aboutTitle = language.sections.about_section.section_title;

// 2) Switch active language globally
setLanguage("en"); // later: setLanguage("es"), setLanguage("de"), etc.
const contactTitle = language.sections.contact_section.contact_title;

// 3) Read a language without changing global state
const spanishData = getLanguage("es");
const heroButtonText = spanishData.sections.hero_section.view_work_btn;

// 4) List loaded language codes
const loadedCodes = Object.keys(allLanguages); // ["en", ...]
*/
