import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import {
  CONTEXT_OPTIONS,
  DOMAIN_TECH_OPTIONS,
  INDUSTRY_THEME_OPTIONS,
  NONE_FILTER_VALUE,
  type ProjectClassification,
} from "@/data/projectClassifications";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionInner from "@/components/SectionInner";

/** True if at least one of github / demo / live_demo is set to a non-empty value. */
function hasExternalLinks(project: Project): boolean {
  if (project.github?.trim()) return true;
  if (project.demo != null && project.demo.trim() !== "") return true;
  if (project.live_demo != null && project.live_demo.trim() !== "") return true;
  return false;
}

function filterProjectsBySelections(
  domain: string,
  context: string,
  industry: string,
): Project[] {
  const active = [domain, context, industry].filter((v) => v !== NONE_FILTER_VALUE);
  if (active.length === 0) return projects;
  return projects.filter((p) =>
    active.some((sel) => p.classifications.includes(sel as ProjectClassification)),
  );
}

const Projects = () => {
  const [domainFilter, setDomainFilter] = useState<string>(NONE_FILTER_VALUE);
  const [contextFilter, setContextFilter] = useState<string>(NONE_FILTER_VALUE);
  const [industryFilter, setIndustryFilter] = useState<string>(NONE_FILTER_VALUE);
  /** When true for a title, the full project description is shown; otherwise "Display description". */
  const [descriptionOpenByTitle, setDescriptionOpenByTitle] = useState<Record<string, boolean>>({});

  const toggleProjectDescription = (title: string) => {
    setDescriptionOpenByTitle((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filteredProjects = useMemo(
    () => filterProjectsBySelections(domainFilter, contextFilter, industryFilter),
    [domainFilter, contextFilter, industryFilter],
  );

  const clearFilters = () => {
    setDomainFilter(NONE_FILTER_VALUE);
    setContextFilter(NONE_FILTER_VALUE);
    setIndustryFilter(NONE_FILTER_VALUE);
  };

  const hasActiveFilters =
    domainFilter !== NONE_FILTER_VALUE ||
    contextFilter !== NONE_FILTER_VALUE ||
    industryFilter !== NONE_FILTER_VALUE;

  return (
    <section id="projects" className="py-24 bg-muted/70">
      <SectionInner>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-8"
        >
          Projects
        </motion.h2>

        <div className="mb-10 flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:min-w-[12rem]">
              <Label htmlFor="filter-domain" className="text-muted-foreground">
                Domain / Technical
              </Label>
              <Select value={domainFilter} onValueChange={setDomainFilter}>
                <SelectTrigger id="filter-domain" className="w-full">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={NONE_FILTER_VALUE}>None</SelectItem>
                  {DOMAIN_TECH_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:min-w-[12rem]">
              <Label htmlFor="filter-context" className="text-muted-foreground">
                Context / Origin
              </Label>
              <Select value={contextFilter} onValueChange={setContextFilter}>
                <SelectTrigger id="filter-context" className="w-full">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={NONE_FILTER_VALUE}>None</SelectItem>
                  {CONTEXT_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:min-w-[12rem]">
              <Label htmlFor="filter-industry" className="text-muted-foreground">
                Industry / Theme
              </Label>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger id="filter-industry" className="w-full">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={NONE_FILTER_VALUE}>None</SelectItem>
                  {INDUSTRY_THEME_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="button"
              variant="outline"
              className="shrink-0 sm:mb-0"
              onClick={clearFilters}
              disabled={!hasActiveFilters}
            >
              Clear filters
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Showing projects that match <span className="font-medium text-foreground">any</span> of the
            selected filters (or all projects when every dropdown is None).
          </p>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border bg-card/50 px-4 py-8 text-center text-sm text-muted-foreground">
            No projects match these filters. Try clearing filters or choosing different options.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border bg-card p-6 flex flex-col transition-shadow hover:shadow-lg"
              >
                {/* Project image or placeholder */}
                <div className="aspect-square rounded-lg bg-muted mb-4 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-sm">
                      No image
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <button
                  type="button"
                  onClick={() => toggleProjectDescription(project.title)}
                  aria-expanded={descriptionOpenByTitle[project.title] === true}
                  className={cn(
                    "mb-4 flex-1 w-full text-left text-sm leading-relaxed rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    descriptionOpenByTitle[project.title]
                      ? "text-muted-foreground cursor-pointer hover:text-foreground"
                      : "text-primary font-medium underline decoration-primary/60 underline-offset-2 hover:decoration-primary",
                  )}
                >
                  {descriptionOpenByTitle[project.title] ? project.description : "Display description"}
                </button>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.github != null && project.github.trim() !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  {project.demo != null && project.demo.trim() !== "" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Showcase</span>
                    </a>
                  )}
                  {project.live_demo != null && project.live_demo.trim() !== "" && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Live demo</span>
                    </a>
                  )}
                  {!hasExternalLinks(project) && (
                    <span
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                      title="No public repository or demo for this project"
                    >
                      <span className="font-semibold leading-none" aria-hidden="true">
                        !
                      </span>
                      <span>not available</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </SectionInner>
    </section>
  );
};

export default Projects;
