import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillSections } from "@/data/skills";
import SectionInner from "@/components/SectionInner";
import { useLanguage } from "@/languages/language_invoker";

// ─── Add your portrait images here ───────────────────────────────────────────
// To add more: just append entries to this array, e.g.:
// { src: "/images/portray_2.png", alt: "photo name" }
const PORTRAIT_IMAGES = [
  { src: "/images/portray_alt.png", alt: "Sebastian Russo" },
];

const About = () => {
  const { language } = useLanguage();
  const aboutLanguage = language.sections.about_section;
  const [photoIndex, setPhotoIndex] = useState(0);
  const hasMultiple = PORTRAIT_IMAGES.length > 1;

  const prev = () => setPhotoIndex((i) => (i - 1 + PORTRAIT_IMAGES.length) % PORTRAIT_IMAGES.length);
  const next = () => setPhotoIndex((i) => (i + 1) % PORTRAIT_IMAGES.length);

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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-12"
        >
          {aboutLanguage.section_title}
        </motion.h2>

        {/* Row: photo left, intro bio right */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative aspect-square rounded-2xl overflow-hidden shrink-0"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photoIndex}
                src={PORTRAIT_IMAGES[photoIndex].src}
                alt={PORTRAIT_IMAGES[photoIndex].alt}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur-sm p-1.5 text-foreground hover:bg-background/90 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur-sm p-1.5 text-foreground hover:bg-background/90 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {PORTRAIT_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIndex(i)}
                      aria-label={`Photo ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === photoIndex ? "w-4 bg-primary" : "w-1.5 bg-background/70"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          <div className="space-y-4">
            {aboutLanguage.bio_intro_txts.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 * i, ease: "easeOut" }}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Skills: 2 sections per row */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-16"
        >
          <h3 className="text-sm font-semibold font-subtitle text-foreground uppercase tracking-wider mb-6">
            {aboutLanguage.tech_stack_title}
          </h3>
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } },
            }}
          >
            {skillSections.map((section) => (
              <motion.div
                key={section.section}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
                }}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default About;
