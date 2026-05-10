import { links } from "./links";

export const products = [
  {
    id: "softadastra-cloud",
    name: "Softadastra Cloud",
    category: "SaaS",
    label: "Commercial SaaS",
    tagline:
      "Reliability observability for applications that must not lose data.",
    description:
      "Softadastra Cloud helps teams test, observe, and improve application reliability under network failures, timeouts, retries, crashes, and offline conditions.",
    status: "in development",
    href: links.business,
    icon: "cloud",
  },
  {
    id: "softadastra-converdict",
    name: "Softadastra Converdict",
    category: "SaaS",
    label: "Reliability verdicts",
    tagline:
      "Clear verdicts on whether your application stays correct under failure.",
    description:
      "Softadastra Converdict turns reliability tests into simple, explainable verdicts by detecting data loss risks, duplicate operations, failed retries, broken recovery flows, and unsafe behavior under unstable network conditions.",
    status: "planned",
    href: links.business,
    icon: "shield",
  },
  {
    id: "softadastra-docs",
    name: "Softadastra Docs",
    category: "Open",
    label: "Developer documentation",
    tagline: "Technical documentation for the entire Softadastra ecosystem.",
    description:
      "Softadastra Docs explains the engine, SDKs, CLI, modules, architecture, and local-first reliability model behind the Softadastra stack.",
    status: "live",
    href: links.docs,
    icon: "docs",
  },
  {
    id: "softadastra-builds",
    name: "Softadastra Builds",
    category: "Platform",
    label: "Builds and releases",
    tagline: "Builds, binaries, SDK packages, and releases.",
    description:
      "Softadastra Builds is the distribution point for official binaries, SDK packages, installers, release artifacts, and future nightly builds.",
    status: "planned",
    href: links.builds,
    icon: "package",
  },
];
