export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  icon: string;
  url: string;
  urlLabel: string;
  summary: string;
  features: string[];
  resumeBullets: string[];
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "cantrip",
    name: "Cantrip",
    tagline: "An open-source AI agent harness behind a Spotlight-style launcher",
    role: "Creator",
    period: "Jun 2026 – Present",
    icon: "/img/cantrip-icon.png",
    url: "https://github.com/FlyingViet/cantrip",
    urlLabel: "github.com/FlyingViet/cantrip",
    summary:
      "Cantrip is a keyboard-first launcher for macOS and Windows with an AI agent built in. Press ⌥Space to open apps, do math, ask a question, or hand an agent a real task. Under the hood it's a multi-model harness: one place to drive Claude Code, GitHub Copilot CLI, OpenAI Codex CLI, Google Antigravity, or a self-hosted model, with the same tools, skills, and memory on every backend. It's the harness I use every day.",
    features: [
      "Pick a backend per tab (Claude, Copilot, Codex, Antigravity, or a local OpenAI-compatible model), with usage-limit backups and a council mode for multi-model answers.",
      "Session tabs survive crashes and relaunches. Independent follow-ups run as child tabs on their own git branches and merge back when the parent is idle.",
      "Cantrip Home: one permanent conversation that routes project work to the right tab and runs scheduled tasks, trackers, and incident investigations.",
      "Remote control from a native iPhone and iPad app, a Mac client, or any browser over LAN or Tailscale, with push alerts and approvals.",
      "One skills library, editable Markdown memory, and a single allow/ask/deny policy shared by every backend, plus an OpenAI-compatible local API for other apps.",
    ],
    resumeBullets: [
      "Built an open-source multi-model LLM harness with sub-chat routing across Copilot, Claude, Codex, and local models, plus a companion iOS client.",
      "Developed a secure remote agent gateway using Tailscale and an always-on Mac mini, including local voice-assistant workflows powered by Parakeet.",
    ],
    tech: ["Swift", "SwiftUI", "SwiftPM", "Electron", "Python"],
    links: [
      { label: "View on GitHub", href: "https://github.com/FlyingViet/cantrip", primary: true },
      { label: "Download", href: "https://github.com/FlyingViet/cantrip/releases/latest" },
    ],
  },
  {
    slug: "bass-compass",
    name: "Bass Compass",
    tagline: "The festival app that keeps your crew together",
    role: "Creator",
    period: "Mar 2026 – Present",
    icon: "/img/bass-compass-icon.png",
    url: "https://basscompass.app",
    urlLabel: "basscompass.app",
    summary:
      "Bass Compass is a festival and rave planner for iPhone and Android. It tracks thousands of upcoming EDM festivals, raves, and club nights with set times and official maps, and keeps your crew in touch even when the cell network gives out.",
    features: [
      "Clash-free set-time schedules with your friends' picks side by side, reminders before each set, and alerts when a festival changes its schedule.",
      "Official festival maps with your GPS position, meetup pins, and offline access.",
      "A friends map and crew chat. Pair a Meshtastic radio and chat keeps working over long-range LoRa when crowds overload the cell towers.",
      "Built for the big screen too: optimized for iPhone Duo and Android foldables.",
    ],
    resumeBullets: [
      "Built a festival planning app for iOS and Android allowing for offline communications at festivals.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    links: [
      { label: "Visit basscompass.app", href: "https://basscompass.app", primary: true },
      { label: "App Store", href: "https://apps.apple.com/us/app/bass-compass/id6772378963" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.basscompass.app" },
    ],
  },
];
