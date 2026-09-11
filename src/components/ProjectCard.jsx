import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="group rounded-2xl p-6 sm:p-8 transition-colors"
      style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3
              className="font-[var(--font-display)] text-2xl font-semibold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              {project.name}
            </h3>
            <span
              className="px-2.5 py-1 rounded-full text-xs font-medium font-[var(--font-mono)]"
              style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
            >
              {project.status}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            {project.subtitle}
          </p>
        </div>
        <span className="text-xs font-[var(--font-mono)]" style={{ color: "var(--text-faint)" }}>
          {project.date}
        </span>
      </div>

      <p className="mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 8).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-[var(--font-mono)]"
            style={{
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border-soft)",
              color: "var(--text-muted)",
            }}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 8 && (
          <span className="px-2.5 py-1 text-xs" style={{ color: "var(--text-faint)" }}>
            +{project.technologies.length - 8} more
          </span>
        )}
      </div>

      <div className="mt-6">
        <ArchitectureDiagram steps={project.architecture} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--accent-strong)" }}
        >
          View details <ArrowUpRight size={15} />
        </button>
        <span style={{ color: "var(--border)" }}>·</span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          <Github size={15} /> Code
        </a>
        {project.liveDemo && (
          <>
            <span style={{ color: "var(--border)" }}>·</span>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              <ExternalLink size={15} /> Live demo
            </a>
          </>
        )}
      </div>
    </motion.article>
  );
}
