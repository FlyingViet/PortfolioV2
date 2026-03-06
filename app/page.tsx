import Link from "next/link";

const cards = [
  {
    href: "/resume",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: "Resume",
    description: "Experience, skills, and education — all in one place.",
  },
  {
    href: "/shop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    label: "Shop",
    description: "Gear and products I actually use and recommend.",
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,211,238,0.12), transparent)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white light:text-zinc-900 mb-4 tracking-tight">
            Hi, I&apos;m{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Brian
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-400 light:text-zinc-600 mb-4 font-light">
            Senior Software Engineer · LinkedIn
          </p>

          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            I build secure, scalable systems at LinkedIn. Previously at Meta and Amazon,
            where I shipped features used by millions — from encrypted messaging to Alexa data infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/resume"
              className="px-6 py-3 rounded-xl font-medium text-sm text-black transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #22d3ee, #818cf8)" }}
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-20 max-w-4xl mx-auto w-full">
        <div className="grid sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group p-6 rounded-2xl border border-white/8 light:border-black/8 bg-zinc-900/40 light:bg-zinc-100/60 hover:border-cyan-400/20 hover:bg-zinc-900/80 light:hover:bg-zinc-100/80 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                {card.icon}
              </div>
              <h3 className="text-white light:text-zinc-900 font-semibold mb-1">{card.label}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
