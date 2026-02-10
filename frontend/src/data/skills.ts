export type SkillSection = {
  title: string;
  skills: string[];
};

export const skillSections: SkillSection[] = [
  {
    title: "Programming languages",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "C#", "Dart", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & libraries",
    skills: ["React", "Tailwind", "Flutter", "Unity"],
  },
  {
    title: "Prototyping & design",
    skills: ["Figma", "draw.io"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "APIs & integration",
    skills: ["REST API", "GraphQL", "WebSocket"],
  },
  {
    title: "Team & development practices",
    skills: ["Git / GitHub", "Atlassian (Jira, Confluence)", "Agile/Scrum", "SQA"],
  },
  {
    title: "DevOps & infrastructure",
    skills: ["Docker", "CI/CD", "Oracle/VMs"],
  },
  {
    title: "AI & data",
    skills: ["Machine Learning", "AI", "Deep Learning", "EDA", "Data science/analysis"],
  },
];
