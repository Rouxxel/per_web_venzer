import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Photo placeholder - use /images/profile.jpg when available */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-square rounded-2xl bg-muted flex items-center justify-center"
          >
            <User className="h-20 w-20 text-muted-foreground/40" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              I'm a software engineer with a passion for building things that live on the
              internet. I specialize in creating exceptional digital experiences that are
              fast, accessible, and visually appealing. Replace this text with your own bio.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open source, or writing about what I've learned. I believe in continuous
              learning and sharing knowledge with the community.
            </motion.p>

            {/* Skills grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
