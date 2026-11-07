import type { Metadata } from "next";
import { projects, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Brian Hoang",
  description:
    "Cantrip, an open-source AI agent harness and launcher, and Bass Compass, a festival app for iPhone and Android.",
};

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ProjectMedia({ slug }: { slug: string }) {
  if (slug === "cantrip") {
    return (
      <figure className="mt-8">
        <img
          src="/img/cantrip-launcher.png"
          alt="The Cantrip launcher: a prompt bar reading 'How can I help you?' with the Copilot backend selected"
          className="w-full rounded-xl border border-white/10 light:border-black/10 shadow-lg shadow-black/20"
        />
        <figcaption className="mt-2 text-xs text-zinc-500">
          Press ⌥Space anywhere and pick a backend.
        </figcaption>
      </figure>
    );
  }
  if (slug === "bass-compass") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm mx-auto lg:mx-0 lg:flex lg:w-auto lg:max-w-none shrink-0 self-start">
        {[
          { src: "/img/bass-compass-schedule.webp", alt: "Bass Compass set-time schedule for a festival, with stages side by side" },
          { src: "/img/bass-compass-friends-map.webp", alt: "Bass Compass friends map showing where friends are at a festival" },
        ].map((shot) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className="w-full lg:w-44 h-auto rounded-[1.5rem] sm:rounded-[1.75rem] border border-white/10 light:border-black/10 shadow-lg shadow-black/20"
          />
        ))}
      </div>
    );
  }
  return null;
}

function ProjectCard({ project }: { project: Project }) {
  const sideMedia = project.slug === "bass-compass";

  return (
    <article
      id={project.slug}
      className="scroll-mt-24 rounded-3xl border border-white/8 light:border-black/8 bg-zinc-900/40 light:bg-white p-6 sm:p-8"
    >
      <div className={sideMedia ? "flex flex-col lg:flex-row gap-10" : ""}>
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src={project.icon}
              alt=""
              className="w-14 h-14 rounded-2xl shrink-0 border border-white/10 light:border-black/10"
            />
            <div className="min-w-0">
              <h2 className="text-2xl font-bold text-white light:text-zinc-900 leading-tight">
                {project.name}
              </h2>
              <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base">{project.tagline}</p>
              <p className="text-zinc-500 text-xs mt-1">
                {project.role} · {project.period}
              </p>
            </div>
          </div>

          <p className="text-zinc-300 light:text-zinc-700 leading-relaxed mb-6">{project.summary}</p>

          <ul className="space-y-2 mb-6">
            {project.features.map((feature) => (
              <li key={feature} className="text-zinc-400 light:text-zinc-600 text-sm leading-relaxed flex gap-2">
                <span className="text-cyan-400 shrink-0">›</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs text-zinc-300 light:text-zinc-700 border border-white/8 light:border-black/8 bg-white/4 light:bg-black/4"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.primary
                    ? "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-black transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    : "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-white/10 light:border-black/10 text-zinc-300 light:text-zinc-700 hover:text-white light:hover:text-zinc-900 hover:border-white/20 light:hover:border-black/20 transition-all duration-200"
                }
                style={link.primary ? { background: "linear-gradient(135deg, #22d3ee, #818cf8)" } : undefined}
              >
                {link.label}
                <ExternalIcon />
              </a>
            ))}
          </div>

          {!sideMedia && <ProjectMedia slug={project.slug} />}
        </div>

        {sideMedia && <ProjectMedia slug={project.slug} />}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white light:text-zinc-900 mb-2">Projects</h1>
        <p className="text-zinc-400 light:text-zinc-600 max-w-xl">
          What I build and ship on my own time, from the AI agent harness I use every day to a festival app
          on the App Store and Google Play.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
