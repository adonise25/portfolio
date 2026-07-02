export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16"
    >
      <p className="text-indigo-600 font-medium tracking-widest text-sm uppercase mb-4">
        Hey, I&apos;m
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
        Thulani Dakile
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-slate-500 font-light">
        Graduate Software Engineer
      </p>
      <p className="mt-6 max-w-xl text-slate-600 leading-relaxed">
        I build clean, scalable web applications with a focus on great user
        experience and solid engineering fundamentals.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-colors"
        >
          Get in touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce text-slate-400">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
