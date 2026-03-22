import { motion } from "framer-motion";
import { skillSections } from "@/data/skills";
import SectionInner from "@/components/SectionInner";

/* Bio beside the image (short intro) – each string is its own paragraph */
const bioIntro = [
  "Software engineer based in Germany with a strong academic foundation and hands-on industry experience building backend, frontend and fullstack systems connected to databases and AI implementation/integration.", 
  "Completed a Software Engineering B.Sc. degree at the University of Europe for Applied Sciences (Potsdam Campus), where I learned extensively about languages like Python, Java, C/C++, JavaScript and SQL across AI (ML and DL), web, mobile, backend and frontend projects, applying OOP design, parallel programming and Agile development practices like Scrum and SQA. My final thesis was focused on a comparative study between 4 Machine learning models to determine which of them is the best suited for predicting Diabetes on patients before obvious symptoms arise and for easy integration.", 
];

/* Bio below the photo row – each string is its own paragraph */
const bioBelow = [
  "Worked profesionally as a backend developer for a production-grade real-time monitoring systems at Siemens. Also as a frontend developer for a stealth startup called Langdrill based in Berlin, Germany. Both experiences allowed me to work on a variety of technologies and understand both corporate and startup environments.",
  "Beyond professional and academical work, I actively pursue personal projects to expand my skill set. Including the development of 2D games in Unity, building and deploying full-stack web applications and my favorite personal project being an AI-powered chatbot using Flutter/Dart.",
  "I enjoy regularly attending hackathons, workshops and seminars to expand my knowledge on the newest technologies and network, because Iam driven by curiosity, continuous learning and a desire to build scalable, impactful software.",
];

const About = () => {
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
          About Me
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
            Technologies I Worked With
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
      </SectionInner>
    </section>
  );
};

export default About;
