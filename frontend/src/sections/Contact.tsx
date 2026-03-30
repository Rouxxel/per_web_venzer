import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

import SectionInner from "@/components/SectionInner";
import { useLanguage } from "@/languages/language_invoker";

const socials = [
  { icon: SiGithub, label: "GitHub", href: "https://github.com/Rouxxel" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-russo-a552602a0" },
  { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&to=sebasruse03@gmail.com" },
];

const Contact = () => {
  const { language } = useLanguage();

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
          {language.sections.contact_section.contact_title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed"
        >
          {language.sections.contact_section.contact_txt}
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
              <span className="text-sm font-medium font-accent">{s.label}</span>
            </a>
          ))}
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default Contact;
