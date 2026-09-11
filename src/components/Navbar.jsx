import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, FileDown, Menu, X, Sun, Moon } from "lucide-react";
import portfolioData from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "training", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-soft)" : "1px solid transparent",
      }}
    >
      <nav className="container-app flex items-center justify-between h-16 md:h-[72px]">
        <button
          onClick={() => handleNavClick("home")}
          className="font-[var(--font-display)] text-lg font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
          aria-label="Go to top"
        >
          {portfolioData.personal.firstName}
          <span style={{ color: "var(--accent)" }}>.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className="relative px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: active === link.id ? "var(--text)" : "var(--text-muted)" }}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-[1px] h-[2px] rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <Github size={18} />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <Linkedin size={18} />
          </a>
          <a
            href={portfolioData.personal.resume}
            download
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            <FileDown size={16} /> Resume
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "var(--bg-elev)", borderTop: "1px solid var(--border-soft)" }}
          >
            <ul className="container-app py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="w-full text-left py-3 text-base font-medium"
                    style={{ color: active === link.id ? "var(--accent)" : "var(--text)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="container-app pb-6 flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={portfolioData.personal.resume}
                download
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
                style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              >
                <FileDown size={16} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
