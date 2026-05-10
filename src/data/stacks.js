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
    role: "Application Runtime",
    layer: "Application Runtime",
    tagline: "A JavaScript runtime for reliable local-first applications.",
    description:
      "Kordex is the JavaScript and TypeScript runtime layer built on Vix and Softadastra, giving developers reliable local-first APIs with durable writes, replay, and sync built in.",
    status: "planned",
    license: "MIT",
    color: "kordex",
    href: "#",
    docsHref: links.kordexDocs,
    githubHref: links.kordexGithub,
    icon: "runtime",
  },
  {
    id: "cnerium",
    name: "Cnerium",
    role: "Framework",
    layer: "Framework",
    tagline: "A fast, minimalist web framework for Vix.",
    description:
      "Cnerium gives developers a clean application layer for building web services on top of Vix, with routing, middleware, request handling, and production-oriented structure.",
    status: "active",
    license: "MIT",
    color: "cnerium",
    href: links.cnerium,
    docsHref: links.cneriumDocs,
    githubHref: links.cneriumGithub,
    icon: "framework",
  },
  {
    id: "pulsegrid",
    name: "PulseGrid",
    role: "Cloud / Operations",
    layer: "Cloud and Operations",
    tagline: "Deployment and reliability infrastructure for resilient systems.",
    description:
      "PulseGrid focuses on deployment, runtime operations, reliability infrastructure, and the production environment around Softadastra-powered applications.",
    status: "planned",
    license: "MIT",
    color: "pulsegrid",
    href: "#",
    docsHref: links.pulsegridDocs,
    githubHref: links.pulsegridGithub,
    icon: "network",
  },
  {
    id: "converdict",
    name: "Converdict",
    role: "Reliability Verdicts",
    layer: "Product Intelligence",
    tagline:
      "Clear verdicts on whether an application stays correct under failure.",
    description:
      "Converdict analyzes reliability test results and turns them into simple, explainable verdicts. It helps detect data loss risks, duplicate operations, unsafe retries, broken recovery flows, and convergence problems under unstable network conditions.",
    status: "planned",
    license: "Commercial",
    color: "converdict",
    href: links.business,
    docsHref: links.docs,
    githubHref: links.github,
    icon: "verdict",
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
    id: "framework",
    label: "Framework",
    name: "Cnerium",
    stackId: "cnerium",
    tagline: "A fast, minimalist web framework for Vix.",
  },
  {
    id: "cloud-ops",
    label: "Cloud & Ops",
    name: "PulseGrid",
    stackId: "pulsegrid",
    tagline: "Deployment and reliability infrastructure for resilient systems.",
  },
  {
    id: "product-intelligence",
    label: "Product Intelligence",
    name: "Converdict",
    stackId: "converdict",
    tagline:
      "Clear verdicts on whether an application stays correct under failure.",
  },
];
