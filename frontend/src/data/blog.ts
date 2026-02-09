export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Accessible Component Libraries",
    excerpt:
      "A deep dive into creating reusable UI components that work for everyone, with practical tips on ARIA patterns and keyboard navigation.",
    date: "2025-01-15",
    readTime: "8 min read",
    slug: "accessible-components",
  },
  {
    title: "Why I Switched to TypeScript (And Never Looked Back)",
    excerpt:
      "My journey from JavaScript to TypeScript, the pain points I encountered, and why the trade-offs were absolutely worth it.",
    date: "2024-11-02",
    readTime: "5 min read",
    slug: "switching-to-typescript",
  },
  {
    title: "Optimizing React Performance at Scale",
    excerpt:
      "Lessons learned from profiling and optimizing a React application with 100k+ daily active users.",
    date: "2024-09-18",
    readTime: "10 min read",
    slug: "react-performance",
  },
];
