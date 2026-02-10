import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, GraduationCap, Download } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-12"
        >
          Experience/Road
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experience.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
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

                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                  {entry.period}
                </p>
                <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{entry.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
            <span>Download CV / Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
