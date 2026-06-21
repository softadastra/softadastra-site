import { links } from "./links";

export const tooling = [
  {
    id: "softadastra-engine",
    name: "Softadastra Engine",
    category: "Offline-first Engine",
    label: "Core Product",
    tagline: "Durable local-first foundations for C++ applications.",
    description:
      "Softadastra Engine provides local state, WAL, store, sync, retry, delivery, and transport foundations for applications that must keep working when networks are unstable.",
    status: "active development",
    href: links.softadastraEngine,
    icon: "database",
  },
  {
    id: "cnerium",
    name: "Cnerium",
    category: "Backend Reliability",
    label: "Built on Vix.cpp",
    tagline: "Retry-safe backend writes for Vix applications.",
    description:
      "Cnerium attaches to Vix backends and adds durable, idempotent, retry-safe route handling for critical write operations that must not be executed twice by accident.",
    status: "active development",
    href: links.cnerium,
    icon: "shield",
  },
  {
    id: "kordex",
    name: "Kordex",
    category: "JavaScript Runtime",
    label: "Built on Vix.cpp",
    tagline: "Reliable local-first JavaScript and TypeScript applications.",
    description:
      "Kordex is a JavaScript and TypeScript runtime built on Vix.cpp for local-first workflows, explicit permissions, native modules, and offline-ready applications.",
    status: "early stage",
    href: links.kordex,
    icon: "code",
  },
];
