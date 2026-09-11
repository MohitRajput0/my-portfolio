import { motion } from "framer-motion";
import {
  Code2,
  LayoutTemplate,
  Cloud,
  Database,
  Wrench,
  BookOpenCheck,
  Users,
} from "lucide-react";
import portfolioData from "../data/portfolio";

const CATEGORY_META = [
  { key: "languages", label: "Programming Languages", icon: Code2 },
  { key: "frameworks", label: "Frontend & Frameworks", icon: LayoutTemplate },
  { key: "cloud", label: "Cloud", icon: Cloud },
  { key: "databases", label: "Databases", icon: Database },
  { key: "tools", label: "DevOps & Tools", icon: Wrench },
  { key: "fundamentals", label: "Core CS", icon: BookOpenCheck },
  { key: "softSkills", label: "Soft Skills", icon: Users },
];

function SkillCategory({ label, icon: Icon, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
        >
          <Icon size={17} />
        </div>
        <h3 className="font-medium text-sm" style={{ color: "var(--text)" }}>
          {label}
        </h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs font-medium font-[var(--font-mono)]"
            style={{
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border-soft)",
              color: "var(--text-muted)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-pad" style={{ backgroundColor: "var(--bg-elev)" }}>
      <div className="container-app">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Technical Skills
        </motion.h2>
        <p className="mt-3 max-w-xl" style={{ color: "var(--text-muted)" }}>
          Tools and technologies I use to build and ship software.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORY_META.map((cat, i) => {
            const list = skills[cat.key];
            if (!list || list.length === 0) return null;
            return (
              <SkillCategory
                key={cat.key}
                label={cat.label}
                icon={cat.icon}
                skills={list}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
