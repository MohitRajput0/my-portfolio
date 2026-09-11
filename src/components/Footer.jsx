import { Github, Linkedin, Mail } from "lucide-react";
import portfolioData from "../data/portfolio";

export default function Footer() {
  const { personal, social } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border-soft)" }}>
      <div className="container-app py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-[var(--font-display)] font-semibold" style={{ color: "var(--text)" }}>
            {personal.name}
          </p>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
            {personal.title}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "var(--text-muted)" }}
          >
            <Github size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "var(--text-muted)" }}
          >
            <Linkedin size={18} />
          </a>
          <a href={social.email} aria-label="Email" style={{ color: "var(--text-muted)" }}>
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs" style={{ color: "var(--text-faint)" }}>
          © {year} {personal.name} · Built with React
        </p>
      </div>
    </footer>
  );
}
