export type SkillSection = {
  title: string;
  skills: string[];
};

export const skillSections: SkillSection[] = [
  {
    title: "Programming languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "C#", "Dart", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & libraries",
    skills: ["React", "Vite", "Tailwind CSS", "Flutter", "Unity", "FastAPI"],
  },
  {
    title: "Prototyping & design",
    skills: ["Figma", "draw.io", "Pixel Art Studio"],
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
    skills: [
      "Machine Learning",
      "AI",
      "Deep Learning",
      "EDA",
      "Data science/analysis",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Keras",
      "TensorFlow",
    ],
  },
  {
    title: "Service providers",
    skills: ["Render", "Vercel", "Railway", "Supabase", "RunPod", "AWS", "Google Cloud","Black forest API","Lyceum"],
  }
];
