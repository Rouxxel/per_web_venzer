import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
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
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-russo-a552602a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
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
