/** Stable DOM id for a project card (must match `projects.ts` title strings). */
export function getProjectCardId(projectTitle: string): string {
  const slug = projectTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `project-card-${slug}`;
}
