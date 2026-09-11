import { ArrowDown, ArrowRight } from "lucide-react";

export default function ArchitectureDiagram({ steps }) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border-soft)" }}
    >
      <p
        className="font-[var(--font-mono)] text-xs uppercase tracking-wide mb-4"
        style={{ color: "var(--text-faint)" }}
      >
        Architecture flow
      </p>

      {/* Mobile: vertical flow */}
      <div className="flex flex-col items-stretch gap-0 sm:hidden">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium font-[var(--font-mono)]"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowDown size={16} className="my-1.5" style={{ color: "var(--accent)" }} />
            )}
          </div>
        ))}
      </div>

      {/* Desktop: wrapping horizontal flow */}
      <div className="hidden sm:flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className="px-4 py-2.5 rounded-lg text-sm font-medium font-[var(--font-mono)] whitespace-nowrap"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={16} className="shrink-0" style={{ color: "var(--accent)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
