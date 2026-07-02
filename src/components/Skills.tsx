const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma"] },
  { category: "Tools & Infra", items: ["Git", "GitHub", "Vercel", "PostgreSQL", "Docker"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
          Skills
        </h2>
        <p className="text-center text-slate-500 mb-14">
          Technologies I work with
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-slate-700 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
