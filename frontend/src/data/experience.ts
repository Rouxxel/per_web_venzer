export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  /** Company or institution website (opens in new tab from Experience section). */
  link: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const experience: ExperienceEntry[] = [
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
      "Graduated with 180 credits, 88.64/100 grade points (1.7 in German grading system) and a near perfect Thesis focused on machine learning. The program focused on languages/algorithms (Python, Java, C/C++, JS), OOP, deployment (Docker, APIs and VMs), development practices (CI/CD,Agile, Scrum and SQA) and tools (Jira, Confluence), parallel programming, databases (SQL) UX/UI design (Figma) and Artificial Intelligence (ML, DL and data science). Bachelorkunde and transcript of records available on request.",
    type: "education",
  },
];
