import { motion } from "framer-motion";
import { Cloud, Code2, Sparkles, Braces } from "lucide-react";
import portfolioData from "../data/portfolio";

const ICONS = [Cloud, Code2, Sparkles, Braces];

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-pad">
      <div className="container-app grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            About
          </h2>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {about.intro}
          </p>
          <p
            className="mt-4 text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {about.focus}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-2xl p-6 sm:p-7"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p
            className="font-[var(--font-mono)] text-xs uppercase tracking-wide"
            style={{ color: "var(--text-faint)" }}
          >
            Developer profile
          </p>
          <p className="mt-2 font-medium" style={{ color: "var(--text)" }}>
            {about.status}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {about.interests.map((interest, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={interest}
                  className="rounded-xl p-4 flex flex-col gap-2.5"
                  style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border-soft)" }}
                >
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                  <span className="text-sm leading-snug" style={{ color: "var(--text)" }}>
                    {interest}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
