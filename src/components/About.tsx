export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar placeholder */}
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-400 text-7xl font-bold select-none">
            TD
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            I&apos;m a passionate software engineer who loves turning complex problems
            into elegant, user-friendly solutions. I&apos;m comfortable across the full
            stack — from crafting pixel-perfect UIs to designing robust APIs and
            databases.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            I&apos;m eager to join a team where I can contribute from day one, keep
            learning, and help build products that matter.
          </p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <span className="text-indigo-500">▸</span> South Africa, available remotely
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-500">▸</span> Open to full-time &amp; contract roles
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-500">▸</span>
              <a
                href="mailto:dubazanaadonise@gmail.com"
                className="hover:text-indigo-600 transition-colors"
              >
                dubazanaadonise@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
