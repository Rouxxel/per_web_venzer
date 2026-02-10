import { motion } from "framer-motion";
import { skillSections } from "@/data/skills";
import { User } from "lucide-react";

/* Bio beside the image (short intro) – each string is its own paragraph */
const bioIntro = [
  "Software engineer based in Germany with a strong academic foundation and hands-on industry experience building backend and frontend systems connected to databases and AI implementation.",
  "Completed the Software Engineering B.Sc. program at the University of Europe for Applied Sciences, where I worked extensively with Python, Java, C/C++, JavaScript and SQL across AI (ML and DL), web, mobile and backend projects, applying OOP design, parallel programming and Agile development practices like Scrum and SQA. My thesis consisted on a comparative study between 4 Machine learning models to determine which of them is the best suited for predicting Diabetes before it becomes obvious.",
];

/* Bio below the photo row – each string is its own paragraph */
const bioBelow = [
  "During my internship at Siemens AG in Munich, I contributed to the SRS, design, development, test, refactor and deployment of a production-grade real-time high frequency monitoring system. I developed Python-based backend software for processing high-frequency sensor data using Pandas, NumPy, Matplotlib and multithreading, focusing on performance, reliability and maintainability, adding Docker for deployment, Git-based workflows for version control and created/designed system architecture diagrams with draw.io.",
  "Alongside backend development, I have experience building modern, user-facing applications. At a stealth startup called Langdrill I worked as a Frontend Engineer, designing low and high fidelity wireframes in Figma and implementing them in a React + TypeScript frontend for an AI-enhanced language learning platform. I focused on scalable component architecture, performance and clean integration with backend services to support concurrent users.",
  "Beyond professional and academical work, I actively pursue personal projects to expand my skill set. These include developing 2D games in Unity with C#, building and deploying full-stack web applications with React and Python backends, particularly an AI-powered chatbot using Flutter/Dart, the Gemini API and a Supabase database. I am driven by curiosity, continuous learning and a desire to build scalable, impactful software.",
];

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

        {/* Row: photo left, intro bio right */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Photo placeholder - use /images/profile.jpg when available */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-square rounded-2xl bg-muted flex items-center justify-center shrink-0"
          >
            <User className="h-20 w-20 text-muted-foreground/40" />
          </motion.div>

          <div className="space-y-4">
            {bioIntro.map((paragraph, i) => (
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
          {bioBelow.map((paragraph, i) => (
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
            Technologies I Work With
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillSections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {section.title}
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
      </div>
    </section>
  );
};

export default About;
