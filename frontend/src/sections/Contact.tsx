import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionInner from "@/components/SectionInner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Rouxxel" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-russo-a552602a0" },
  { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&to=sebasruse03@gmail.com" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/70">
      <SectionInner className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed"
        >
          I'm always open to new opportunities and interesting conversations.
          Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent transition-all"
            >
              <s.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{s.label}</span>
            </a>
          ))}
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default Contact;
