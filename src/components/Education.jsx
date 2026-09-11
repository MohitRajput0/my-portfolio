import { motion } from "framer-motion";
import { School } from "lucide-react";
import portfolioData from "../data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-pad">
      <div className="container-app">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Education
        </motion.h2>

        <div className="mt-10 space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl flex flex-wrap items-center justify-between gap-4"
              style={
                edu.primary
                  ? {
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--accent)",
                      padding: "1.75rem 1.75rem",
                    }
                  : {
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--border)",
                      padding: "1.25rem 1.5rem",
                    }
              }
            >
              <div className="flex items-start gap-3.5">
                <div
                  className="rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    width: edu.primary ? 44 : 36,
                    height: edu.primary ? 44 : 36,
                    backgroundColor: "var(--accent-soft)",
                    color: "var(--accent-strong)",
                  }}
                >
                  <School size={edu.primary ? 20 : 16} />
                </div>
                <div>
                  <h3
                    className={edu.primary ? "font-[var(--font-display)] text-xl font-semibold" : "font-medium"}
                    style={{ color: "var(--text)" }}
                  >
                    {edu.degree}
                    {edu.field ? ` — ${edu.field}` : ""}
                  </h3>
                  <p className="mt-0.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className="font-[var(--font-mono)] text-sm font-medium"
                  style={{ color: edu.primary ? "var(--accent-strong)" : "var(--text)" }}
                >
                  {edu.score}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
                  {edu.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
