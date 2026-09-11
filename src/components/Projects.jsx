import { useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="section-pad">
      <div className="container-app">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Featured Projects
        </motion.h2>
        <p className="mt-3 max-w-xl" style={{ color: "var(--text-muted)" }}>
          Real systems I'm actively building — cloud infrastructure, full-stack
          apps, and applied AI.
        </p>

        <div className="mt-10 grid gap-6">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setOpenProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
