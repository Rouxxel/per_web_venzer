import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillSections } from "@/data/skills";
import SectionInner from "@/components/SectionInner";
import { useLanguage } from "@/languages/language_invoker";
import TypewriterText, { CHAR_DELAY } from "@/components/TypewriterText";
//import { SiGithub } from "@icons-pack/react-simple-icons";
//import { Mail } from "lucide-react";

// ─── Add your portrait images here ───────────────────────────────────────────
// To add more: just append entries to this array, e.g.:
// { src: "/images/portray_2.png", alt: "photo name" }
const PORTRAIT_IMAGES = [
  { src: "/images/portray_alt.png", alt: "Sebastian Russo" },
];

//Conctact values
/*
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const socials = [
  { icon: SiGithub, label: "GitHub", href: "https://github.com/Rouxxel" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-russo-a552602a0" },
  { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&to=sebasruse03@gmail.com" },
];
*/

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
            {aboutLanguage.bio_intro_txts.map((paragraph, i) => {
              // Each paragraph starts after all previous ones finish typing
              const prevChars = aboutLanguage.bio_intro_txts
                .slice(0, i)
                .reduce((sum, p) => sum + p.length, 0);
              const startDelay = 0.2 + prevChars * CHAR_DELAY;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 * i, ease: "easeOut" }}
                >
                  <TypewriterText
                    text={paragraph}
                    className="text-muted-foreground leading-relaxed"
                    initialDelay={startDelay}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Socials (moved here) */}
        {/*
        <div className="mt-8">
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent transition-all"
              >
                <s.icon className="h-5 w-5" />
                <span className="text-sm font-medium font-accent">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
        */}

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
