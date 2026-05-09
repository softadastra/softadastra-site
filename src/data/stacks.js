import { links } from "./links";

export const stacks = [
  {
    id: "vix",
    name: "Vix",
    label: "Runtime foundation",
    tagline:
      "A modern C++ runtime for building fast and reliable applications.",
    description:
      "Vix provides the C++ runtime foundation behind Softadastra infrastructure: HTTP, WebSocket, async execution, CLI tooling, process control, caching, and system-level primitives.",
    status: "Active",
    license: "MIT",
    layer: "Foundation",
    href: links.vix,
    docsHref: links.vixDocs,
  },
  {
    id: "softadastra",
    name: "Softadastra",
    label: "Reliability engine",
    tagline: "Durable local-first infrastructure for real-world networks.",
    description:
      "Softadastra provides WAL-based durability, local-first storage, replay, sync, convergence, and offline-first guarantees for applications that cannot lose operations.",
    status: "Active",
    license: "MIT",
    layer: "Reliability",
    href: links.main,
    docsHref: links.docs,
  },
  {
    id: "kordex",
    name: "Kordex",
    label: "JavaScript runtime",
    tagline: "A JavaScript runtime for reliable local-first applications.",
    description:
      "Kordex is the JavaScript and TypeScript runtime layer built on Vix and Softadastra, giving developers reliable local-first APIs with durable writes, replay, and sync built in.",
    status: "Planned",
    license: "MIT",
    layer: "Application runtime",
    href: "#",
    docsHref: "#",
  },
  {
    id: "cnerium",
    name: "Cnerium",
    label: "Web framework",
    tagline: "A fast, minimalist web framework for Vix.",
    description:
      "Cnerium gives developers a clean application layer for building web services on top of Vix, with routing, middleware, request handling, and production-oriented structure.",
    status: "Active",
    license: "MIT",
    layer: "Framework",
    href: links.cnerium,
    docsHref: "#",
  },
  {
    id: "pulsegrid",
    name: "PulseGrid",
    label: "Infrastructure layer",
    tagline: "Deployment and reliability infrastructure for resilient systems.",
    description:
      "PulseGrid focuses on deployment, runtime operations, reliability infrastructure, and the production environment around Softadastra-powered applications.",
    status: "Planned",
    license: "MIT",
    layer: "Cloud and operations",
    href: "#",
    docsHref: "#",
  },
];
