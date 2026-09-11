import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import portfolioData from "../data/portfolio";

export default function Training() {
  const { training } = portfolioData;

  return (
    <section id="training" className="section-pad">
      <div className="container-app">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Training
        </motion.h2>

        <div className="mt-10 space-y-6">
          {training.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative pl-8 sm:pl-10 rounded-2xl p-6 sm:p-7"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div
                className="absolute left-4 sm:left-5 top-7 bottom-7 w-px"
                style={{ backgroundColor: "var(--border)" }}
                aria-hidden="true"
              />
              <div
                className="absolute left-[9px] sm:left-[13px] top-7 w-3 h-3 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={18} style={{ color: "var(--accent-strong)" }} />
                  <h3 className="font-semibold text-lg" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs font-[var(--font-mono)]" style={{ color: "var(--text-faint)" }}>
                  {item.date}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                {item.organization}
              </p>

              <ul className="mt-4 space-y-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    {p}
                  </li>
                ))}
              </ul>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: "var(--accent-strong)" }}
                >
                  View credential <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
