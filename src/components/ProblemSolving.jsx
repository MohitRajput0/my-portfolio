import { motion } from "framer-motion";
import { Layers, GitBranch, Timer, Blocks } from "lucide-react";
import portfolioData from "../data/portfolio";

const AREA_ICONS = [Layers, GitBranch, Timer, Blocks];

export default function ProblemSolving() {
  const { problemSolving } = portfolioData;

  return (
    <section style={{ backgroundColor: "var(--bg-elev)" }} className="section-pad">
      <div className="container-app grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 text-center lg:text-left"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="font-[var(--font-mono)] text-xs uppercase tracking-wide"
            style={{ color: "var(--text-faint)" }}
          >
            Problem solving
          </p>
          <p
            className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--accent-strong)" }}
          >
            {problemSolving.headline}
          </p>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Practiced consistently across
          </p>
          <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-2">
            {problemSolving.platforms.map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border-soft)",
                  color: "var(--text)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {problemSolving.areas.map((area, i) => {
            const Icon = AREA_ICONS[i % AREA_ICONS.length];
            return (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl p-5 flex items-start gap-3"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
                >
                  <Icon size={17} />
                </div>
                <span className="text-sm font-medium pt-1.5" style={{ color: "var(--text)" }}>
                  {area}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
