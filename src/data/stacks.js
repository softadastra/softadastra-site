import { links } from "./links";

export const stacks = [
  {
    id: "vix",
    name: "Vix",
    role: "Foundation / Runtime",
    layer: "Foundation",
    tagline:
      "A modern C++ runtime for building fast and reliable applications.",
    description:
      "Vix provides the C++ runtime foundation behind the Softadastra ecosystem: HTTP, WebSocket, async execution, CLI tooling, process control, caching, and system-level primitives.",
    status: "active",
    license: "MIT",
    color: "vix",
    href: links.vix,
    docsHref: links.vixDocs,
    githubHref: links.vixGithub,
    icon: "layers",
  },
  {
    id: "softadastra",
    name: "Softadastra",
    role: "Reliability / Sync",
    layer: "Reliability",
    tagline: "Durable local-first infrastructure for real-world networks.",
    description:
      "Softadastra provides WAL-based durability, local-first storage, replay, sync, convergence, and offline-first guarantees for applications that cannot lose operations.",
    status: "active",
    license: "MIT",
    color: "softadastra",
    href: links.main,
    docsHref: links.softadastraDocs,
    githubHref: links.softadastraGithub,
    icon: "shield",
  },
  {
    id: "kordex",
    name: "Kordex",
    role: "JavaScript Runtime",
    layer: "Application Runtime",
    tagline: "A JavaScript runtime for reliable local-first applications.",
    description:
      "Kordex is the JavaScript and TypeScript runtime layer built on Vix and Softadastra. It gives developers reliable local-first APIs with durable writes, replay, and sync built in.",
    status: "planned",
    license: "MIT",
    color: "kordex",
    href: links.kordex,
    docsHref: links.kordexDocs,
    githubHref: links.kordexGithub,
    icon: "runtime",
  },
  {
    id: "cnerium",
    name: "Cnerium",
    role: "Backend Reliability Framework",
    layer: "Backend Framework",
    tagline: "A reliability-first backend framework for durable APIs.",
    description:
      "Cnerium helps developers build backend APIs that remain correct under retries, crashes, timeouts, and unstable networks. It focuses on idempotency, request durability, request journaling, safe retries, audit logs, replay protection, and Softadastra integration.",
    status: "active",
    license: "MIT",
    color: "cnerium",
    href: links.cnerium,
    docsHref: links.cneriumDocs,
    githubHref: links.cneriumGithub,
    icon: "framework",
  },
];

export const ecosystemLayers = [
  {
    id: "foundation",
    label: "Foundation",
    name: "Vix",
    stackId: "vix",
    tagline:
      "A modern C++ runtime for building fast and reliable applications.",
  },
  {
    id: "reliability",
    label: "Reliability",
    name: "Softadastra",
    stackId: "softadastra",
    tagline: "Durable local-first infrastructure for real-world networks.",
  },
  {
    id: "app-runtime",
    label: "App Runtime",
    name: "Kordex",
    stackId: "kordex",
    tagline: "A JavaScript runtime for reliable local-first applications.",
  },
  {
    id: "backend-framework",
    label: "Backend Framework",
    name: "Cnerium",
    stackId: "cnerium",
    tagline: "A reliability-first backend framework for durable APIs.",
  },
];
