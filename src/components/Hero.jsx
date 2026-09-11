import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, FileDown, Mail } from "lucide-react";
import portfolioData from "../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { personal } = portfolioData;
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % personal.dynamicTitles.length);
    }, 3200);
    return () => clearInterval(id);
  }, [personal.dynamicTitles.length]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-16"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-soft), transparent 70%)",
          filter: "blur(10px)",
        }}
        aria-hidden="true"
      />

      <div className="container-app relative grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-8 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium font-[var(--font-mono)]"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--accent-strong)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            {personal.badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-[var(--font-display)] font-semibold tracking-tight leading-[1.05] text-[2.5rem] sm:text-5xl lg:text-[3.4rem]"
            style={{ color: "var(--text)" }}
          >
            Hi, I'm {personal.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 h-9 overflow-hidden"
          >
            <motion.p
              key={titleIndex}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-lg sm:text-xl font-medium"
              style={{ color: "var(--accent-strong)" }}
            >
              {personal.dynamicTitles[titleIndex]}
            </motion.p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              View My Projects <ArrowRight size={16} />
            </button>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={personal.resume}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              <FileDown size={16} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              <Mail size={16} /> Let's Connect
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto md:mx-0 w-[240px] sm:w-[300px] md:w-full md:max-w-[340px]"
        >
          <div
            className="absolute -inset-3 rounded-[2rem] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, var(--accent-soft), transparent 60%)",
              filter: "blur(6px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-3 -left-3 w-16 h-16 rounded-xl -z-10"
            style={{ border: "1px solid var(--border)" }}
            aria-hidden="true"
          />
          <div
            className="relative rounded-[1.75rem] overflow-hidden"
            style={{
              border: "1px solid var(--border)",
              boxShadow: "0 0 0 1px var(--border-soft), 0 30px 60px -20px rgba(0,0,0,0.35)",
            }}
          >
            <img
              src={personal.profileImage}
              alt={`Portrait of ${personal.name}`}
              className="w-full aspect-[4/5] object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
