import { links } from "./links";

export const products = [
  {
    id: "softadastra-cloud",
    name: "Softadastra Cloud",
    label: "Commercial SaaS",
    tagline:
      "Reliability observability for applications that must not lose data.",
    description:
      "Softadastra Cloud helps teams test, observe, and improve application reliability under network failures, timeouts, retries, crashes, and offline conditions.",
    status: "In development",
    category: "SaaS",
    href: links.business,
  },
  {
    id: "softadastra-docs",
    name: "Softadastra Docs",
    label: "Developer documentation",
    tagline: "Technical documentation for the Softadastra ecosystem.",
    description:
      "The documentation portal explains the engine, SDKs, CLI, concepts, modules, architecture, and local-first reliability model behind Softadastra.",
    status: "Live",
    category: "Documentation",
    href: links.docs,
  },
  {
    id: "softadastra-builds",
    name: "Softadastra Builds",
    label: "Builds and releases",
    tagline: "A home for releases, SDKs, binaries, and build artifacts.",
    description:
      "Softadastra Builds is planned as the distribution point for official binaries, SDK packages, installers, release artifacts, and nightly builds.",
    status: "Planned",
    category: "Distribution",
    href: links.builds,
  },
];
