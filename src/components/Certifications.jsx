import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import portfolioData from "../data/portfolio";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section
      id="certifications"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-elev)" }}
    >
      <div className="container-app">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Certifications
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl p-5 sm:p-6 flex flex-col gap-3"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
                >
                  <Award size={17} />
                </div>
                <div>
                  <h3 className="font-medium leading-snug" style={{ color: "var(--text)" }}>
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                    {cert.organization}
                    {cert.platform ? ` · ${cert.platform}` : ""}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-[var(--font-mono)]" style={{ color: "var(--text-faint)" }}>
                  {cert.date}
                </span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
