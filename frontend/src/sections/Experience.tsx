import { motion } from "framer-motion";
import { getExperienceByLanguage } from "@/data/experience";
import { Briefcase, GraduationCap, Download } from "lucide-react";
import SectionInner from "@/components/SectionInner";
import { useLanguage } from "@/languages/language_invoker";
import TypewriterText from "@/components/TypewriterText";

const Experience = () => {
  const { language, currentLanguageCode } = useLanguage();
  const experienceEntries = getExperienceByLanguage(currentLanguageCode);

  return (
    <section id="experience" className="py-24">
      <SectionInner>
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-12"
        >
          {language.sections.experience_section.section_title}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experienceEntries.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="relative pl-12 md:pl-20"
              >
                {/* Icon dot */}
                <div className="absolute left-1.5 md:left-5.5 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  {entry.type === "work" ? (
                    <Briefcase className="h-2.5 w-2.5 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="h-2.5 w-2.5 text-primary-foreground" />
                  )}
                </div>

                <p className="text-xs font-medium font-subtitle text-primary uppercase tracking-wider mb-1">
                  {entry.period}
                </p>
                <h3 className="text-lg font-semibold font-subtitle text-foreground">{entry.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {entry.link != null && entry.link.trim() !== "" ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-border underline-offset-4 text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={`${entry.company} (opens in new tab)`}
                    >
                      {entry.company}
                    </a>
                  ) : (
                    <span className="underline decoration-border underline-offset-4">{entry.company}</span>
                  )}
                  ; {entry.location}
                </p>
                <TypewriterText
                  text={entry.description}
                  className="text-sm text-muted-foreground leading-relaxed"
                  initialDelay={0.3 + i * 0.15}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-12 w-full"
        >
          <a
            href="/pdfs/CVRng.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border border-border rounded-lg text-foreground hover:bg-accent transition-colors"
          >
            <Download className="h-4 w-4 shrink-0" />
            <span>{language.sections.experience_section.download_cv_btn}</span>
          </a>
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default Experience;
