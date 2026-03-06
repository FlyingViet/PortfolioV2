"use client";

const experience = [
  {
    company: "LinkedIn",
    role: "Senior Software Engineer",
    period: "Nov 2025 – Present",
    location: "Mountain View, CA",
    bullets: [],
  },
  {
    company: "Meta",
    role: "Software Engineer",
    period: "Jan 2024 – Apr 2025",
    location: "Seattle, WA",
    bullets: [
      "Created new experiences which increased user onboarding to end-to-end encrypted messaging by over 60% in order to provide a better chat experience.",
      "Eliminated issues of missing or incorrect images being shown in end-to-end encrypted messaging.",
      "Reduced the capacity usage of code infrastructure by $30K/month by reorganizing dependencies to efficiently tree shake.",
      "Increased user registration for end-to-end encrypted chats by over 40% by creating new pipelines for enrollment.",
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer II",
    period: "Sep 2022 – Jan 2024",
    location: "Seattle, WA",
    bullets: [
      "Guided a team in the development of robust security controls for accessing 180PB of Alexa Data through AWS SageMaker, ensuring data protection and compliance.",
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer",
    period: "Feb 2021 – Sep 2022",
    location: "Seattle, WA",
    bullets: [
      "Designed internal services to monitor health and promises made by organization.",
      "Created systems to enforce policies and security of data throughout all of Amazon Alexa.",
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern – Secure AI Foundations",
    period: "Jun 2020 – Aug 2020",
    location: "Seattle, WA",
    bullets: [
      "Designed and created internal-facing APIs on AWS that dynamically generated documentation from internal policies.",
      "Implemented a React dashboard utilizing the API for internal customers to increase workflow productivity.",
      "Eliminated hours of manual wiki entry and stakeholder communication after policy changes.",
      "Created documentation for onboarding process to another internal team for hosting API and web application.",
    ],
  },
  {
    company: "Quad",
    role: "Software Developer",
    period: "Jun 2019 – Mar 2020",
    location: "Part-time",
    bullets: [
      "Followed SOLID and CRUD design patterns to update and integrate legacy programs into an internal web application for 50 internal users to design workflows.",
      "Streamlined user workflows by an hour, effectively doubling efficiency during client onboarding.",
      "Combined C#, SQL, React Redux, and TypeScript to create a dynamic UI for clients to customize workflows using the ASP.NET stack.",
      "Used reflection and dependency injection to reduce maintenance and technical debt.",
      "Implemented database and UI changes that increased user productivity and application responsiveness.",
    ],
  },
];

const education = [
  {
    school: "University of Wisconsin-Milwaukee",
    degree: "B.S. in Computer Science",
    period: "2018 – 2020",
    detail: "",
  },
];

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C#", "SQL"] },
  { category: "Frameworks", items: ["React", "React Redux", "Next.js", "Flask", "ASP.NET"] },
  { category: "Cloud & Tools", items: ["AWS", "AWS SageMaker", "Git", "Docker"] },
  { category: "Practices", items: ["SOLID Principles", "REST APIs", "Agile / Scrum", "Data Security"] },
];

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 print-page">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 pb-8 border-b border-white/8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-1">Brian Hoang</h1>
          <p className="text-cyan-400 text-lg mb-3">Senior Software Engineer</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-zinc-400 text-sm">
            <span>Mountain View, CA</span>
            <span>·</span>
            <a href="https://linkedin.com/in/brianthoang" className="hover:text-cyan-400 transition-colors">linkedin.com/in/brianthoang</a>
            <span>·</span>
            <a href="https://github.com/FlyingViet" className="hover:text-cyan-400 transition-colors">github.com/FlyingViet</a>
            <span>·</span>
            <a href="https://www.anhbrian.com" className="hover:text-cyan-400 transition-colors">anhbrian.com</a>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="no-print self-start flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-sm shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print / Save PDF
        </button>
      </div>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">Summary</h2>
        <p className="text-zinc-300 leading-relaxed">
          Senior Software Engineer with 5+ years of experience building secure, scalable systems at LinkedIn,
          Meta, and Amazon. Proven track record of driving measurable impact — from increasing encrypted
          messaging onboarding by 60% at Meta to securing access to 180PB of Alexa data at Amazon.
          Passionate about full-stack development, data security, and shipping products that matter.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <span className="text-white font-semibold">{job.role}</span>
                  <span className="text-zinc-500 mx-2">·</span>
                  <span className="text-zinc-300">{job.company}</span>
                </div>
                <div className="text-zinc-500 text-sm shrink-0">
                  {job.period} · {job.location}
                </div>
              </div>
              {job.bullets.length > 0 && (
                <ul className="space-y-1.5 pl-4">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-cyan-400 mt-1.5 shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <span className="text-white font-semibold">{edu.degree}</span>
                <span className="text-zinc-500 mx-2">·</span>
                <span className="text-zinc-300">{edu.school}</span>
                {edu.detail && (
                  <p className="text-zinc-500 text-sm mt-1">{edu.detail}</p>
                )}
              </div>
              <span className="text-zinc-500 text-sm shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-sm text-zinc-300 border border-white/8 bg-white/4"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
