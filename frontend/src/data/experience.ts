export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const experience: ExperienceEntry[] = [
  {
    title: "Senior Frontend Engineer",
    company: "Tech Corp",
    period: "2023 — Present",
    description:
      "Leading the frontend architecture for a SaaS platform serving 50k+ users. Built a component library and improved performance by 40%.",
    type: "work",
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2021 — 2023",
    description:
      "Developed and shipped 3 major product features from concept to production. Mentored junior developers.",
    type: "work",
  },
  {
    title: "B.S. Computer Science",
    company: "State University",
    period: "2017 — 2021",
    description:
      "Graduated with honors. Focused on algorithms, distributed systems, and human-computer interaction.",
    type: "education",
  },
];
