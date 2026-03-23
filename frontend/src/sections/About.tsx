import { motion } from "framer-motion";
import { skillSections } from "@/data/skills";
import SectionInner from "@/components/SectionInner";
import { useLanguage } from "@/languages/language_invoker";

const About = () => {
  const { language } = useLanguage();
  const aboutLanguage = language.sections.about_section;

  const subsectionBySkillSection = Object.values(aboutLanguage.tech_subsections).reduce<
    Record<string, string>
  >((acc, entry) => {
    acc[entry.section] = entry.title;
    return acc;
  }, {});

  return (
    <section id="about" className="py-24">
      <SectionInner>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-12"
        >
          {aboutLanguage.section_title}
        </motion.h2>

        {/* Row: photo left, intro bio right */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-square rounded-2xl overflow-hidden shrink-0"
          >
            <img
              src="/images/portray_alt.png"
              alt="Sebastian Russo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-4">
            {aboutLanguage.bio_intro_txts.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Rest of bio: full width below photo + intro */}
        <div className="mt-8 space-y-4 mb-16">
          {aboutLanguage.bio_below_txts.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Skills: 2 sections per row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
            {aboutLanguage.tech_stack_title}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillSections.map((section) => (
              <div
                key={section.section}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {subsectionBySkillSection[section.section] ?? section.section}
                </p>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default About;
