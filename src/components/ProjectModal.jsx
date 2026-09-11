import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full sm:max-w-2xl max-h-[100vh] sm:max-h-[85vh] overflow-y-auto sm:rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: "var(--bg-elev)", border: "1px solid var(--border)" }}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-5 right-5 p-2 rounded-lg"
              style={{ backgroundColor: "var(--surface)", color: "var(--text-muted)" }}
            >
              <X size={18} />
            </button>

            <span
              className="px-2.5 py-1 rounded-full text-xs font-medium font-[var(--font-mono)]"
              style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
            >
              {project.status}
            </span>

            <h2
              id="project-modal-title"
              className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight pr-8"
              style={{ color: "var(--text)" }}
            >
              {project.name}
            </h2>
            <p className="mt-1 font-medium" style={{ color: "var(--text-muted)" }}>
              {project.subtitle}
            </p>
            <p className="mt-1 text-xs font-[var(--font-mono)]" style={{ color: "var(--text-faint)" }}>
              {project.date}
            </p>

            <Section title="Overview" text={project.description} />
            <Section title="Problem" text={project.problem} />
            <Section title="Solution" text={project.solution} />

            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>
                Architecture
              </h3>
              <ArchitectureDiagram steps={project.architecture} />
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>
                Key features
              </h3>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-[var(--font-mono)]"
                    style={{
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--border-soft)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
                style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              >
                <Github size={16} /> View code
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, text }) {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--text)" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {text}
      </p>
    </div>
  );
}
