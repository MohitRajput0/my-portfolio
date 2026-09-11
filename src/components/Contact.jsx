import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown, Send } from "lucide-react";
import portfolioData from "../data/portfolio";

export default function Contact() {
  const { personal, social } = portfolioData;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad" style={{ backgroundColor: "var(--bg-elev)" }}>
      <div className="container-app grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight leading-tight"
            style={{ color: "var(--text)" }}
          >
            Let's build something meaningful.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I'm open to internships and collaborative projects in software
            engineering, cloud, and AI. Reach out however works best for you.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={social.email}
              className="inline-flex items-center gap-3 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <Mail size={16} style={{ color: "var(--accent-strong)" }} />
              </span>
              {personal.email}
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <Linkedin size={16} style={{ color: "var(--accent-strong)" }} />
              </span>
              LinkedIn
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <Github size={16} style={{ color: "var(--accent-strong)" }} />
              </span>
              GitHub
            </a>
            <a
              href={personal.resume}
              download
              className="inline-flex items-center gap-3 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <FileDown size={16} style={{ color: "var(--accent-strong)" }} />
              </span>
              Download resume
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium" style={{ color: "var(--text)" }}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg px-4 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--border-soft)",
                color: "var(--text)",
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--text)" }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg px-4 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--border-soft)",
                color: "var(--text)",
              }}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--text)" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg px-4 py-2.5 text-sm outline-none resize-none"
              style={{
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--border-soft)",
                color: "var(--text)",
              }}
            />
          </div>
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            Send message <Send size={15} />
          </button>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            Opens your email client, addressed to {personal.email}.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
