# Portfolio Data Guide

Reference for adding or editing content in `frontend/src/data/`.  
All four files are plain TypeScript — no build step needed beyond saving.

---

## Files at a glance

| File | What it controls |
|---|---|
| `skills.ts` | Skills section — grouped skill chips |
| `experience.ts` | Experience / Education timeline entries |
| `projectClassifications.ts` | Filter dropdown options for the Projects section |
| `projects.ts` | Project cards (all languages) |

---

## 1. Adding a skill

**File:** `skills.ts`

Skills are grouped into named sections. Each section renders as a labelled group of chips.

```ts
export const skillSections: SkillSection[] = [
  {
    section: "frameworks",   // internal key — maps to a translation label
    skills: [
      "React",
      "Vite",
      // add your new skill here as a plain string
      "Next.js",
    ],
  },
  // ...
];
```

**Steps:**
1. Find the section that fits (e.g. `"languages"`, `"frameworks"`, `"ai"`, `"providers"`, etc.).
2. Append the skill string to its `skills` array.
3. To add a brand-new section, append a new `{ section: "mysection", skills: [...] }` object to `skillSections`. Then add the matching translation key to every language file under `frontend/src/languages/` (look for the `skills_section` block).

**Skills are not translated** — the strings are displayed as-is in every language.

---

## 2. Adding an experience or education entry

**File:** `experience.ts`

There are three language arrays: `experience_en`, `experience_es`, `experience_fr`.  
`getExperienceByLanguage(code)` picks the right one at runtime.

### Interface

```ts
interface ExperienceEntry {
  title: string;       // job title or degree name
  company: string;     // employer or university
  location: string;    // city, country
  link: string;        // URL for the company/university
  period: string;      // "MM.YYYY — MM.YYYY"  (use "Present" / "Actualidad" etc. for ongoing)
  description: string; // paragraph shown on expand
  type: "work" | "education";
}
```

### Steps

1. Add the English entry to `experience_en` (insert at the top to show it first in the timeline):

```ts
{
  title: "Senior Frontend Developer",
  company: "Acme Corp",
  location: "Berlin, Germany",
  link: "https://acme.example.com",
  period: "08.2025 — Present",
  description: "Built and maintained the design system...",
  type: "work",
},
```

2. Add the **same entry translated** to `experience_es` and `experience_fr` at the same array position.  
   Keep `link`, `period`, and `type` identical — only translate `title`, `company` (if needed), `location`, and `description`.

3. If you only speak English and don't want to translate right now, copy the English object verbatim into the other arrays — it will fall back gracefully.

---

## 3. Adding a new project classification (filter option)

**File:** `projectClassifications.ts`

Classifications are split into three canonical lists that power the three filter dropdowns:

| Constant | Dropdown label |
|---|---|
| `DOMAIN_TECH_OPTIONS` | Domain / Technical |
| `CONTEXT_OPTIONS` | Context / Origin |
| `INDUSTRY_THEME_OPTIONS` | Industry / Theme |

### Adding a new option to an existing list

**Rule:** The canonical English arrays are the source of truth. Every localized array must have the **same number of items in the same order** — they are matched by index.

**Example — adding "Finance" to Industry / Theme:**

1. `INDUSTRY_THEME_OPTIONS` (English canonical):
```ts
export const INDUSTRY_THEME_OPTIONS = [
  "Gaming",
  "Educational",
  "Industrial",
  "AR",
  "Military",
  "Finance",   // ← add here
] as const;
```

2. `INDUSTRY_THEME_OPTIONS_ES` (Spanish, same index):
```ts
export const INDUSTRY_THEME_OPTIONS_ES = [
  "Videojuegos",
  "Educación",
  "Industrial",
  "RA",
  "Militar",
  "Finanzas",  // ← add at the same position
] as const;
```

3. `INDUSTRY_THEME_OPTIONS_FR` (French, same index):
```ts
export const INDUSTRY_THEME_OPTIONS_FR = [
  "Jeux vidéo",
  "Éducation",
  "Industrielle",
  "RA",
  "Militaire",
  "Finance",   // ← add at the same position
] as const;
```

4. TypeScript will automatically include `"Finance"` in the `IndustryThemeClassification` union type — no extra type changes needed.

5. You can now use `"Finance"` in any project's `classifications` array.

### Adding a completely new filter category (advanced)

This requires changes in multiple places and is rarely needed. Only do this if none of the three existing dropdowns fit:

1. Define a new canonical array (e.g. `SIZE_OPTIONS`) and its localized variants.
2. Add a new `export type SizeClassification = (typeof SIZE_OPTIONS)[number]` and add it to the `ProjectClassification` union.
3. Add the new array to `ALL_CLASSIFICATIONS`.
4. Add a new label key to `PROJECT_FILTER_LABELS` and all localized label objects.
5. Update `getProjectFilterLocalization` to return the new options.
6. Add a new filter `<Select>` in `frontend/src/sections/Projects.tsx` following the existing pattern.

---

## 4. Adding a new project

**File:** `projects.ts`

### Interface

```ts
interface Project {
  title: string;                          // unique — used as the key everywhere
  description: string;                    // shown when the user clicks "Display description"
  tags: string[];                         // tech/tool chips shown on the card
  classifications: ProjectClassification[]; // must be valid values from projectClassifications.ts
  github?: string;                        // optional — omit or leave empty string to hide
  demo?: string;                          // optional — renders as "Showcase" link
  live_demo?: string;                     // optional — renders as "Live demo" link
  image?: string;                         // optional — path relative to /public
}
```

`demo` and `live_demo` are both optional external links. Use `demo` for videos/recordings and `live_demo` for a deployed URL. You can have both, one, or neither.  
If none of `github`, `demo`, or `live_demo` are set, the card shows a "Not Available" badge.

### Steps

#### Step 1 — Add the image

Place the image in `frontend/public/images/<project-slug>/` (create the folder if needed).  
Reference it as `"/images/<project-slug>/filename.png"` — the leading `/` is required.

#### Step 2 — Add the English entry to `projects_en`

Insert it at the position you want it to appear in the grid (top = first card).

```ts
{
  title: "My New Project",
  image: "/images/my-project/logo.png",
  description:
    "One or two sentences describing what the project does, the tech used, and your role.",
  tags: [
    "React",
    "TypeScript",
    "FastAPI",
    // ... any strings you like
  ],
  classifications: ["Fullstack", "Web", "Hackathon"],
  github: "https://github.com/you/repo",
  demo: "https://vimeo.com/...",
  live_demo: "https://myproject.vercel.app",
},
```

**Valid classification values** (copy-paste from the lists in `projectClassifications.ts`):

- Domain: `"Backend"` `"Frontend"` `"Fullstack"` `"Mobile"` `"Database"` `"Web"` `"AI / Data"` `"AR"`
- Context: `"Professional"` `"Personal"` `"University"` `"Hackathon"` `"Research"`
- Industry: `"Gaming"` `"Educational"` `"Industrial"` `"AR"` `"Military"`

You can mix from all three lists freely.

#### Step 3 — Add Spanish and French descriptions

Find the `projectDescriptionsEs` and `projectDescriptionsFr` objects and add an entry keyed by the **exact same title string**:

```ts
// in projectDescriptionsEs
"My New Project":
  "Descripción en español del proyecto...",

// in projectDescriptionsFr
"My New Project":
  "Description en français du projet...",
```

If you skip a language, the English description is used as fallback — no crash, just untranslated text.

#### Step 4 — Adding a new language entirely (future)

When you add a new language (e.g. German `"de"`):

1. Create `projectDescriptionsDe` record with all project titles as keys.
2. Create `projects_de` by mapping `projects_en` with the new descriptions (copy the `projects_fr` block as a template).
3. Add `if (languageCode === "de") return projects_de;` to `getProjectsByLanguage`.
4. Do the same in `projectClassifications.ts` (add `DOMAIN_TECH_OPTIONS_DE`, etc.) and wire it into `getProjectFilterLocalization`.
5. Add the language JSON file to `frontend/src/languages/` and register it in `language_invoker.ts`.

---

## Quick checklist

### New skill
- [ ] Add string to the right `skills` array in `skillSections`

### New experience entry
- [ ] Add to `experience_en`
- [ ] Add translated version to `experience_es`
- [ ] Add translated version to `experience_fr`

### New classification option
- [ ] Add to the canonical English array (`DOMAIN_TECH_OPTIONS` / `CONTEXT_OPTIONS` / `INDUSTRY_THEME_OPTIONS`)
- [ ] Add translated label at the **same index** in the `_ES` array
- [ ] Add translated label at the **same index** in the `_FR` array

### New project
- [ ] Drop image in `frontend/public/images/<slug>/`
- [ ] Add entry to `projects_en` with valid `classifications` values
- [ ] Add Spanish description to `projectDescriptionsEs`
- [ ] Add French description to `projectDescriptionsFr`
