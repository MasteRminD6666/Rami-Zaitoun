const process = [
  {
    title: "1. Discovery",
    desc: "Align business goals, audience needs, technical constraints, and success metrics before coding starts.",
  },
  {
    title: "2. Architecture",
    desc: "Design scalable UI architecture, data flow, and performance strategy to reduce future complexity.",
  },
  {
    title: "3. Build",
    desc: "Implement production-grade features with reusable components, quality checks, and rapid iteration.",
  },
  {
    title: "4. Optimize",
    desc: "Measure, refine, and improve speed, UX, accessibility, and maintainability for long-term value.",
  },
] as const;

export const HowIWork = () => {
  return (
    <section className="c-space my-20" id="process">
      <h3 className="head-text">How I Work</h3>
      <p className="mt-3 max-w-3xl text-lg text-white-600">
        Predictable delivery process designed for product teams that care about
        quality, speed, and measurable outcomes.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {process.map((step) => (
          <article
            key={step.title}
            className="rounded-2xl border border-white/10 bg-black-200/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_24px_50px_rgba(0,0,0,0.55),0_0_26px_rgba(34,211,238,0.12)]"
          >
            <h4 className="mb-3 text-lg font-semibold text-white-800">{step.title}</h4>
            <p className="text-sm leading-relaxed text-white-600">{step.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-start">
        <a
          href="https://drive.google.com/file/d/10ivPkL3PiwNDoMkNQh5q3PjJ7186JD2N/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          Download One-Page Resume (PDF)
        </a>
      </div>
    </section>
  );
};
