import { useMemo, useState } from "react";

const skills = [
  { name: "React", values: [35, 55, 75, 90, 93, 95] },
  { name: "Vue", values: [20, 45, 70, 88, 90, 92] },
  { name: "Angular", values: [30, 60, 85, 90, 92, 93] },
  { name: "Performance", values: [25, 45, 72, 86, 89, 92] },
  { name: "UX", values: [28, 50, 74, 84, 87, 90] },
  { name: "Architecture", values: [20, 40, 65, 82, 86, 90] },
] as const;

const years = ["2021", "2022", "2023", "2024", "2025", "2026"] as const;

export const SkillsGrowth = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(5);
  const center = 150;
  const radius = 110;

  const points = useMemo(() => {
    return skills
      .map((skill, index) => {
        const value = skill.values[activeYearIndex];
        const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
        const r = (radius * value) / 100;
        const x = center + Math.cos(angle) * r;
        const y = center + Math.sin(angle) * r;
        return `${x},${y}`;
      })
      .join(" ");
  }, [activeYearIndex, center, radius]);

  return (
    <section className="c-space my-20" id="skills-growth">
      <h3 className="head-text">Skills Growth Timeline</h3>
      <p className="mt-3 max-w-3xl text-lg text-white-600">
        A year-by-year view of how my core frontend capabilities evolved across
        frameworks, performance engineering, UX quality, and architecture.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-black-200/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <svg viewBox="0 0 300 300" className="mx-auto w-full max-w-[320px]">
            {[25, 50, 75, 100].map((level) => (
              <circle
                key={level}
                cx={center}
                cy={center}
                r={(radius * level) / 100}
                fill="none"
                stroke="rgba(148,163,184,0.2)"
                strokeWidth="1"
              />
            ))}
            {skills.map((skill, index) => {
              const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
              const x = center + Math.cos(angle) * (radius + 16);
              const y = center + Math.sin(angle) * (radius + 16);
              return (
                <text
                  key={skill.name}
                  x={x}
                  y={y}
                  fill="#cbd5e1"
                  fontSize="10"
                  textAnchor="middle"
                >
                  {skill.name}
                </text>
              );
            })}
            <polygon
              points={points}
              fill="rgba(34,211,238,0.25)"
              stroke="rgba(34,211,238,0.9)"
              strokeWidth="2"
            />
          </svg>
        </article>

        <article className="rounded-2xl border border-white/10 bg-black-200/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="mb-6 flex flex-wrap gap-2">
            {years.map((year, idx) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYearIndex(idx)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  idx === activeYearIndex
                    ? "border border-cyan-300/45 bg-cyan-500/15 text-cyan-200"
                    : "border border-white/10 bg-white/5 text-white-600 hover:border-cyan-300/25"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-white-700">{skill.name}</span>
                  <span className="text-cyan-300">{skill.values[activeYearIndex]}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-700/40">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-500"
                    style={{ width: `${skill.values[activeYearIndex]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
