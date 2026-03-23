export type SkillSection = {
  section: string;
  skills: string[];
};

export const skillSections: SkillSection[] = [
  {
    section: "languages",
    skills: [
      "Python", 
      "Java", 
      "JavaScript", 
      "TypeScript", 
      "C/C++", 
      "C#", 
      "Dart", 
      "HTML5", 
      "CSS3"
    ],
  },
  {
    section: "frameworks",
    skills: [
      "React", 
      "Vite", 
      "Tailwind CSS", 
      "Flutter", 
      "Unity", 
      "FastAPI"
    ],
  },
  {
    section: "prototyping",
    skills: [
      "Figma", 
      "draw.io", 
      "Pixel Art Studio"
    ],
  },
  {
    section: "database",
    skills: [
      "PostgreSQL", 
      "MySQL"
    ],
  },
  {
    section: "integration",
    skills: [
      "REST API", 
      "GraphQL", 
      "WebSocket"
    ],
  },
  {
    section: "team",
    skills: [
      "Git / GitHub", 
      "OOP", 
      "Atlassian (Jira, Confluence)", 
      "Agile/Scrum", 
      "SQA"
    ],
  },
  {
    section: "infrastructure",
    skills: [
      "Docker", 
      "CI/CD", 
      "Oracle/VMs"
    ],
  },
  {
    section: "ai",
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
    section: "providers",
    skills: [
      "Render", 
      "Vercel", 
      "Railway", 
      "Supabase", 
      "RunPod", 
      "AWS", 
      "Google Cloud",
      "Black forest API",
      "Lyceum"
    ],
  }
];
