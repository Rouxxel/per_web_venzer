export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application for managing tasks with real-time collaboration features and a clean, intuitive interface.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Beta",
    description:
      "An open-source CLI tool that automates deployment pipelines, reducing release time by 60%.",
    tags: ["Go", "Docker", "CI/CD", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Gamma",
    description:
      "A mobile-first e-commerce platform with AI-powered product recommendations and seamless checkout.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];
