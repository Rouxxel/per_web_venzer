export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  link: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const experience_en: ExperienceEntry[] = [
  {
    title: "UX/UI and Frontend developer (React + TS)",
    company: "Langdrill (Stealth Startup)",
    location: "Berlin, Germany",
    link: "https://www.langdrill.com/",
    period: "06.2025 — 07.2025",
    description:
      "Designed low and high-fidelity wireframes on Figma and implemented them in a React + TypeScript frontend that connected to a deployed (on Render) Python-based FastAPI backend. Maintained a component based architecture and clean integration with the REST API services to support concurrent users and AI features.",
    type: "work",
  },
  {
    title: "Backend developer for real-time monitoring systems",
    company: "Siemens AG",
    location: "Munich, Germany",
    link: "https://www.siemens.com/",
    period: "10.2024 — 04.2025",
    description:
      "Designed, developed, tested, refactored and deployed a production-grade Python-based backend software for processing high-frequency sensor data using Pandas, NumPy, Matplotlib and multithreading, focusing on OOP, performance, reliability and maintainability, adding Docker for deployment, a custom logger for longterm progress register and debugging, Git-based workflows for version control with a CI/CD pipelines, linting for code quality and created/designed system architecture diagrams with draw.io for research and planning. Zeugnis available on request.",
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

export const experience_es: ExperienceEntry[] = [
  {
    title: "Desarrollador UX/UI y Frontend (React + TS)",
    company: "Langdrill (Startup stealth)",
    location: "Berlín, Alemania",
    link: "https://www.langdrill.com/",
    period: "06.2025 — 07.2025",
    description:
      "Diseñé wireframes de baja y alta fidelidad en Figma y los implementé en un frontend de React + TypeScript conectado a un backend en Python con FastAPI desplegado en Render. Mantuve una arquitectura basada en componentes y una integración limpia con los servicios REST para soportar usuarios concurrentes y funciones de IA integrada.",
    type: "work",
  },
  {
    title: "Desarrollador backend para sistemas de monitoreo en tiempo real",
    company: "Siemens AG",
    location: "Múnich, Alemania",
    link: "https://www.siemens.com/",
    period: "10.2024 — 04.2025",
    description:
      "Diseñé, desarrollé, testeé, refactoricé y desplegué software backend en Python de nivel productivo para procesar datos de sensores de alta frecuencia usando Pandas, NumPy, Matplotlib y multithreading, enfocado en POO, rendimiento, fiabilidad y mantenibilidad. Añadí Docker para despliegue, un logger personalizado para registro de largo plazo y depuración, flujos con Git y pipeline CI/CD, linting para calidad de código y diagramas de arquitectura en draw.io para investigación y planificación. Zeugnis disponible bajo solicitud.",
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

export const experience_fr: ExperienceEntry[] = [
  {
    title: "Développeur UX/UI et Frontend (React + TS)",
    company: "Langdrill (Startup stealth)",
    location: "Berlin, Allemagne",
    link: "https://www.langdrill.com/",
    period: "06.2025 — 07.2025",
    description: 
      "Conception de wireframes basse et haute fidélité sur Figma et implémentation dans un frontend React + TypeScript connecté à un backend Python avec FastAPI, déployé sur Render. Maintien d’une architecture basée sur des composants et intégration propre avec les services REST pour supporter des utilisateurs concurrents et des fonctionnalités d’IA intégrées.",
    type: "work",
  },
  {
    title: "Développeur backend pour système de surveillance en temps réel",
    company: "Siemens AG",
    location: "Munich, Allemagne",
    link: "https://www.siemens.com/",
    period: "10.2024 — 04.2025",
    description: 
      "Conception, développement, tests, refactoring et déploiement d’un logiciel backend Python de niveau production pour traiter des données de capteurs haute fréquence (Pandas, NumPy, Matplotlib, multithreading), avec focus sur POO, performance, fiabilité et maintenabilité. Ajout de Docker pour le déploiement, logger personnalisé pour suivi long terme et débogage, workflows Git et pipeline CI/CD, linting pour qualité du code, et diagrammes d’architecture sur draw.io pour recherche et planification. Zeugnis disponible sur demande.",
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

/** Returns language-specific experience entries, with English fallback. */
export const getExperienceByLanguage = (languageCode: string): ExperienceEntry[] => {
  if (languageCode === "fr") return experience_fr;
  if (languageCode === "es") return experience_es;
  return experience_en;
};
