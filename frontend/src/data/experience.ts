/** Canonical `projects_en` titles for experience → project navigation. */
export const EXPERIENCE_RELATED_PROJECTS = {
  beeing: "Beeing - The higher version of you",
  langdrill: "Langdrill - Educational platform (Stealth startup)",
  siemens: "Siemens - High-Frequency Real Time Monitoring System",
} as const;

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  link?: string;
  period: string;
  description: string;
  type: "work" | "education";
  /** When set, experience UI offers a link that scrolls to this project card. */
  relatedProjectTitle?: string;
}

export const experience_en: ExperienceEntry[] = [
  {
    title: "Fullstack developer",
    company: "Beeing",
    location: "Berlin, Germany",
    period: "04.2026 — Present",
    //link: "https://www.beeing.com/",
    description:
      "Took ownership of an AI-powered wellness platform and led refactoring, extension and ongoing development across frontend, backend, database, AI integrations and deployment infrastructure. Developed and maintained a Next.js/React/TypeScript frontend and FastAPI/Python backend. Integrated and orchestrated multiple AI and audio providers, including Google Gemini, OpenRouter, ElevenLabs and Deepgram for LLM generation, TTS, STT and voice cloning. Implemented Supabase/PostgreSQL data, authentication and storage infrastructure, including sessions, session claiming, email/password authentication, Google OAuth and persistent session history. Built an internal analytics and operations dashboard from scratch using React/Vite and FastAPI, providing metrics on users, sessions, AI generation, TTS providers, speech engines, costs, wellness, voice input, soundscapes and infrastructure. Integrated external APIs and infrastructure services including Vercel, Railway, Render, Supabase and ElevenLabs. Established and maintained CI/CD and security workflows using GitHub Actions, automated testing, dependency and security checks, secret scanning and deployment pipelines. Developed automated testing across the stack using pytest, Vitest and Playwright, covering backend services, frontend functionality and end-to-end user flows.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.beeing,
    type: "work",
  },
  {
    title: "UX/UI and Frontend developer (React + TS)",
    company: "Langdrill (Startup)",
    location: "Berlin, Germany",
    link: "https://www.langdrill.com/",
    period: "05.2025 — 08.2025",
    description:
      "Developed the React/TypeScript frontend for an AI-enhanced educational platform, building responsive and reusable interfaces for core user workflows. Designed UI/UX concepts, wireframes, prototypes and high-fidelity interfaces in Figma, translating product requirements into functional frontend experiences. Designed and wired the frontend to REST APIs, integrating backend services for dynamic content, user interactions and application state. Implemented a component-based frontend architecture with reusable and maintainable React components.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.langdrill,
    type: "work",
  },
  {
    title: "Backend developer for real-time monitoring systems",
    company: "Siemens AG",
    location: "Munich, Germany",
    link: "https://www.siemens.com/",
    period: "11.2024 — 04.2025",
    description:
      "Built a Python-based backend for processing high-frequency real-time sensor data using Pandas, NumPy, SciPy and Matplotlib for numerical analysis and visualization. Applied multithreading, logging and OOP principles to enhance performance, reliability, debugging, code maintainability and overall system reliability. Developed reusable and modular backend components following clean code and object-oriented design principles. Used Docker to containerize applications and ensure consistent deployment and development environments. Used Git/GitHub for version control and development workflows, including branch-based development and CI/CD pipelines. Designed system architecture and technical diagrams in Draw.io for data flows, system components and interactions. Contributed to technical documentation and system design discussions, translating engineering requirements into implementable software components. Zeugnis available on request.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.siemens,
    type: "work",
  },
  {
    title: "Software Engineering B.Sc.",
    company: "University of Europe for Applied Sciences",
    location: "Potsdam, Germany",
    link: "https://www.ue-germany.com/",
    period: "09.2022 — 08.2025",
    description:
      "Graduated with 180 credits, 88.64/100 grade points (1.7 in German grading system) and a Thesis focused on machine learning. The program focused on languages/algorithms (Python, Java, C/C++, JS), OOP, deployment (Docker, APIs and VMs), development practices (CI/CD,Agile, Scrum and SQA) and tools (Jira, Confluence), parallel programming, databases (SQL) UX/UI design (Figma) and Artificial Intelligence (ML, DL and data science). Bachelorkunde and transcript of records available on request.",
    type: "education",
  },
];

//-------------------------------------------------------------------------
//------------------------SPANISH VERSION---------------------------------- 
//-------------------------------------------------------------------------
export const experience_es: ExperienceEntry[] = [
  {
    title: "Desarrollador Fullstack",
    company: "Beeing",
    location: "Berlín, Alemania",
    period: "04.2026 — Presente",
    description:
      "Asumí la propiedad de una plataforma de bienestar con IA y lideré la refactorización, ampliación y el desarrollo continuo en frontend, backend, base de datos, integraciones de IA e infraestructura de despliegue. Desarrollé y mantuve un frontend Next.js/React/TypeScript y un backend FastAPI/Python. Integré y orquesté varios proveedores de IA y audio, incluidos Google Gemini, OpenRouter, ElevenLabs y Deepgram para generación LLM, TTS, STT y clonación de voz. Implementé infraestructura de datos, autenticación y almacenamiento con Supabase/PostgreSQL, incluyendo sesiones, reclamación de sesiones, autenticación email/contraseña, Google OAuth e historial persistente. Construí desde cero un panel interno de analíticas y operaciones con React/Vite y FastAPI, con métricas de usuarios, sesiones, generación IA, proveedores TTS, motores de voz, costes, bienestar, entrada de voz, paisajes sonoros e infraestructura. Integré APIs e infraestructura externas en Vercel, Railway, Render, Supabase y ElevenLabs. Establecí y mantuve flujos CI/CD y de seguridad con GitHub Actions, pruebas automatizadas, comprobaciones de dependencias y seguridad, escaneo de secretos y pipelines de despliegue. Desarrollé pruebas automatizadas en todo el stack con pytest, Vitest y Playwright, cubriendo servicios backend, funcionalidad frontend y flujos end-to-end.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.beeing,
    type: "work",
  },
  {
    title: "Desarrollador UX/UI y Frontend (React + TS)",
    company: "Langdrill (Startup)",
    location: "Berlín, Alemania",
    link: "https://www.langdrill.com/",
    period: "05.2025 — 08.2025",
    description:
      "Desarrollé el frontend React/TypeScript de una plataforma educativa mejorada con IA, construyendo interfaces responsivas y reutilizables para los flujos principales. Diseñé conceptos UI/UX, wireframes, prototipos e interfaces de alta fidelidad en Figma, traduciendo requisitos de producto en experiencias frontend funcionales. Conecté el frontend a APIs REST, integrando servicios backend para contenido dinámico, interacciones de usuario y estado de la aplicación. Implementé una arquitectura frontend basada en componentes con React reutilizable y mantenible.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.langdrill,
    type: "work",
  },
  {
    title: "Desarrollador backend para sistemas de monitoreo en tiempo real",
    company: "Siemens AG",
    location: "Múnich, Alemania",
    link: "https://www.siemens.com/",
    period: "11.2024 — 04.2025",
    description:
      "Construí un backend en Python para procesar datos de sensores en tiempo real y alta frecuencia usando Pandas, NumPy, SciPy y Matplotlib para análisis numérico y visualización. Apliqué multithreading, logging y POO para mejorar rendimiento, fiabilidad, depuración, mantenibilidad del código y fiabilidad del sistema. Desarrollé componentes backend reutilizables y modulares siguiendo clean code y diseño orientado a objetos. Usé Docker para containerizar aplicaciones y entornos de despliegue y desarrollo consistentes. Usé Git/GitHub para control de versiones y flujos por ramas, incluyendo pipelines CI/CD. Diseñé arquitectura del sistema y diagramas técnicos en Draw.io para flujos de datos, componentes e interacciones. Contribuí a documentación técnica y discusiones de diseño, traduciendo requisitos de ingeniería en componentes de software implementables. Zeugnis disponible bajo solicitud.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.siemens,
    type: "work",
  },
  {
    title: "Licenciatura en Ingeniería de Software",
    company: "University of Europe for Applied Sciences",
    location: "Potsdam, Alemania",
    link: "https://www.ue-germany.com/",
    period: "09.2022 — 08.2025",
    description:
      "Graduado con 180 créditos, 88.64/100 puntos (1.7 en el sistema de calificación alemán) y una tesis enfocada en Machine Learning. El programa de licenciatura se centró en lenguajes/algoritmos (Python, Java, C/C++, JS), OOP, despliegue (Docker, APIs y VMs), prácticas de desarrollo (CI/CD, Agile, Scrum y SQA), herramientas (Jira, Confluence), programación paralela, bases de datos (SQL), diseño UX/UI (Figma) e inteligencia artificial (ML, DL y ciencia de datos). Bachelorkunde y transcript of records disponibles bajo solicitud.",
    type: "education",
  },
];

//-------------------------------------------------------------------------
//-------------------------FRENCH VERSION---------------------------------- 
//-------------------------------------------------------------------------
export const experience_fr: ExperienceEntry[] = [
  {
    title: "Développeur Fullstack",
    company: "Beeing",
    location: "Berlin, Allemagne",
    period: "04.2026 — Présent",
    description:
      "Prise en charge d’une plateforme de bien-être alimentée par l’IA et pilotage du refactoring, de l’extension et du développement continu sur le frontend, le backend, la base de données, les intégrations IA et l’infrastructure de déploiement. Développement et maintenance d’un frontend Next.js/React/TypeScript et d’un backend FastAPI/Python. Intégration et orchestration de plusieurs fournisseurs IA et audio, dont Google Gemini, OpenRouter, ElevenLabs et Deepgram pour génération LLM, TTS, STT et clonage vocal. Mise en place de l’infrastructure Supabase/PostgreSQL (données, authentification, stockage), sessions, revendication de session, email/mot de passe, Google OAuth et historique persistant. Création d’un tableau de bord interne d’analytique et d’opérations avec React/Vite et FastAPI (utilisateurs, sessions, génération IA, TTS, moteurs vocaux, coûts, bien-être, saisie vocale, soundscapes, infrastructure). Intégration d’API et services sur Vercel, Railway, Render, Supabase et ElevenLabs. CI/CD et sécurité via GitHub Actions, tests automatisés, contrôles de dépendances et secrets, pipelines de déploiement. Tests automatisés avec pytest, Vitest et Playwright (backend, frontend, E2E).",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.beeing,
    type: "work",
  },
  {
    title: "Développeur UX/UI et Frontend (React + TS)",
    company: "Langdrill (Startup)",
    location: "Berlin, Allemagne",
    link: "https://www.langdrill.com/",
    period: "05.2025 — 08.2025",
    description:
      "Développement du frontend React/TypeScript d’une plateforme éducative enrichie par l’IA, avec interfaces responsives et réutilisables pour les parcours utilisateur clés. Conception UI/UX, wireframes, prototypes et maquettes haute fidélité sur Figma, traduction des exigences produit en expériences frontend. Connexion du frontend aux API REST pour contenu dynamique, interactions et état applicatif. Architecture frontend basée sur des composants React réutilisables et maintenables.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.langdrill,
    type: "work",
  },
  {
    title: "Développeur backend pour système de surveillance en temps réel",
    company: "Siemens AG",
    location: "Munich, Allemagne",
    link: "https://www.siemens.com/",
    period: "11.2024 — 04.2025",
    description:
      "Construction d’un backend Python pour traiter des données capteurs temps réel haute fréquence avec Pandas, NumPy, SciPy et Matplotlib (analyse et visualisation). Multithreading, logging et POO pour performance, fiabilité, débogage et maintenabilité. Composants backend modulaires et réutilisables (clean code, POO). Docker pour environnements de déploiement et de développement cohérents. Git/GitHub, branches et pipelines CI/CD. Architecture et diagrammes techniques sur Draw.io (flux de données, composants, interactions). Documentation technique et conception, traduction des besoins ingénierie en composants implémentables. Zeugnis disponible sur demande.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.siemens,
    type: "work",
  },
  {
    title: "Licence en sciences de l’ingénierie logicielle",
    company: "University of Europe for Applied Sciences",
    location: "Potsdam, Allemagne",
    link: "https://www.ue-germany.com/",
    period: "09.2022 — 08.2025",
    description:
      "Titulaire d’une Licence en sciences de l’ingénierie logicielle (180 crédits, 88,64/100 points ou 1,7 dans le système de notation allemand) avec mémoire axé sur le Machine Learning. Programme centré sur langages et algorithmes (Python, Java, C/C++, JS), POO, déploiement (Docker, API, VM), pratiques de développement (CI/CD, Agile, Scrum, SQA), outils (Jira, Confluence), programmation parallèle, bases de données (SQL), design UX/UI (Figma) et intelligence artificielle (ML, DL, data science). Bachelorkunde et transcript of records disponibles sur demande.",
    type: "education",
  },
];

//-------------------------------------------------------------------------
//-------------------------GERMAN VERSION----------------------------------
//-------------------------------------------------------------------------
export const experience_de: ExperienceEntry[] = [
  {
    title: "Fullstack-Entwickler",
    company: "Beeing",
    location: "Berlin, Deutschland",
    period: "04.2026 — Heute",
    description:
      "Übernahme einer KI-gestützten Wellness-Plattform und Leitung von Refactoring, Erweiterung und laufender Entwicklung über Frontend, Backend, Datenbank, KI-Integrationen und Deployment-Infrastruktur. Entwicklung und Pflege eines Next.js/React/TypeScript-Frontends und FastAPI/Python-Backends. Integration und Orchestrierung mehrerer KI- und Audio-Provider, darunter Google Gemini, OpenRouter, ElevenLabs und Deepgram für LLM-Generierung, TTS, STT und Voice Cloning. Supabase/PostgreSQL für Daten, Authentifizierung und Storage, inkl. Sessions, Session Claiming, E-Mail/Passwort, Google OAuth und persistentem Session-Verlauf. Aufbau eines internen Analytics- und Operations-Dashboards mit React/Vite und FastAPI (Nutzer, Sessions, KI-Generierung, TTS-Provider, Speech Engines, Kosten, Wellness, Spracheingabe, Soundscapes, Infrastruktur). Anbindung externer APIs und Infrastruktur auf Vercel, Railway, Render, Supabase und ElevenLabs. CI/CD- und Security-Workflows mit GitHub Actions, automatisierten Tests, Dependency- und Security-Checks, Secret Scanning und Deployment-Pipelines. Automatisierte Tests mit pytest, Vitest und Playwright über den gesamten Stack.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.beeing,
    type: "work",
  },
  {
    title: "UX/UI- und Frontend-Entwickler (React + TS)",
    company: "Langdrill (Startup)",
    location: "Berlin, Deutschland",
    link: "https://www.langdrill.com/",
    period: "05.2025 — 08.2025",
    description:
      "Entwicklung des React/TypeScript-Frontends einer KI-gestützten Bildungsplattform mit responsiven, wiederverwendbaren Oberflächen für zentrale Nutzerflows. UI/UX-Konzepte, Wireframes, Prototypen und High-Fidelity-Interfaces in Figma; Umsetzung von Produktanforderungen in funktionale Frontend-Erlebnisse. Anbindung an REST-APIs für dynamische Inhalte, Interaktionen und Anwendungszustand. Komponentenbasierte Frontend-Architektur mit wartbaren React-Komponenten.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.langdrill,
    type: "work",
  },
  {
    title: "Backend-Entwickler für Echtzeit-Überwachungssysteme",
    company: "Siemens AG",
    location: "München, Deutschland",
    link: "https://www.siemens.com/",
    period: "11.2024 — 04.2025",
    description:
      "Python-Backend zur Verarbeitung hochfrequenter Echtzeit-Sensordaten mit Pandas, NumPy, SciPy und Matplotlib für numerische Analyse und Visualisierung. Multithreading, Logging und OOP für Performance, Zuverlässigkeit, Debugging, Wartbarkeit und Systemstabilität. Wiederverwendbare, modulare Backend-Komponenten nach Clean Code und objektorientiertem Design. Docker für konsistente Deployment- und Entwicklungsumgebungen. Git/GitHub mit Branch-Workflows und CI/CD-Pipelines. Systemarchitektur und technische Diagramme in Draw.io für Datenflüsse, Komponenten und Interaktionen. Technische Dokumentation und Systemdesign, Übersetzung von Engineering-Anforderungen in implementierbare Software. Zeugnis auf Anfrage erhältlich.",
    relatedProjectTitle: EXPERIENCE_RELATED_PROJECTS.siemens,
    type: "work",
  },
  {
    title: "B.Sc. Software Engineering",
    company: "University of Europe for Applied Sciences",
    location: "Potsdam, Deutschland",
    link: "https://www.ue-germany.com/",
    period: "09.2022 — 08.2025",
    description:
      "Abschluss mit 180 ECTS, 88,64/100 Notenpunkten (1,7 im deutschen Notensystem) und einer Abschlussarbeit mit Schwerpunkt Machine Learning. Das Studium umfasste Sprachen und Algorithmen (Python, Java, C/C++, JS), OOP, Deployment (Docker, APIs und VMs), Entwicklungspraktiken (CI/CD, Agile, Scrum und SQA), Tools (Jira, Confluence), parallele Programmierung, Datenbanken (SQL), UX/UI-Design (Figma) und Künstliche Intelligenz (ML, DL und Data Science). Bachelorkunde und Notenspiegel auf Anfrage erhältlich.",
    type: "education",
  },
];

/** Returns language-specific experience entries, with English fallback. */
export const getExperienceByLanguage = (languageCode: string): ExperienceEntry[] => {
  if (languageCode === "fr") return experience_fr;
  if (languageCode === "es") return experience_es;
  if (languageCode === "de") return experience_de;
  return experience_en;
};
