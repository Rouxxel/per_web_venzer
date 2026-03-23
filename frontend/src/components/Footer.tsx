import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/languages/language_invoker";

const Footer = () => {
  const { language } = useLanguage();
  const mentionItems = language.footer.mentions ?? [];

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {language.footer.copyright_txt.replace("2026", String(new Date().getFullYear()))}
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Rouxxel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-russo-a552602a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=sebasruse03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        {mentionItems.map((mentionEntry, index) => {
          const mention = mentionEntry.icon_provider;
          return (
            <p key={`${mention.name}-${index}`} className="text-xs text-muted-foreground/80 text-center sm:text-left">
              {mention.prefix_txt}
              <a
                href={mention.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                {mention.name}
              </a>
              .
            </p>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
