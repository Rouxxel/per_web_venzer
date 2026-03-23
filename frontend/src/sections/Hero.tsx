import { motion } from "framer-motion";
import { useLanguage } from "@/languages/language_invoker";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-muted/70"
    >
      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
        >
          {language.sections.hero_section.greet_txt}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground mb-6"
        >
          Sebastian Russo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {language.sections.hero_section.slogan_txt}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {language.sections.hero_section.view_work_btn}
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
          >
            {language.sections.hero_section.get_in_touch_btn}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
