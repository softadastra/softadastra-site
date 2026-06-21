import { links } from "./links";

export const navigationGroups = [
  {
    label: "Open Source",
    items: [
      {
        label: "Vix.cpp",
        description:
          "Modern C++ runtime and developer toolkit for building real applications.",
        href: links.vix,
      },
      {
        label: "Softadastra Engine",
        description:
          "Offline-first runtime layer for durable local state, WAL, sync, and transport.",
        href: links.softadastraEngine,
      },
      {
        label: "Cnerium",
        description:
          "Reliability layer for Vix backends with durable, retry-safe write operations.",
        href: links.cnerium,
      },
      {
        label: "Kordex",
        description:
          "JavaScript and TypeScript runtime for reliable local-first applications, built on Vix.cpp.",
        href: links.kordex,
      },
    ],
  },
  {
    label: "Tooling",
    items: [
      {
        label: "Vix CLI",
        description:
          "Create, build, run, test, check, package, and operate C++ projects from one command surface.",
        href: links.vix,
      },
      {
        label: "Vix Registry",
        description: "Package and dependency workflow for Vix.cpp projects.",
        href: links.vixRegistry,
      },
      {
        label: "Pico",
        description:
          "Production-style validation app showing Vix.cpp modules working together in a real C++ backend.",
        href: links.pico,
      },
    ],
  },
  {
    label: "Learn",
    items: [
      {
        label: "Vix Docs",
        description:
          "Documentation for the Vix.cpp runtime, CLI, modules, and application workflow.",
        href: links.vixDocs,
      },
      {
        label: "Softadastra Docs",
        description:
          "Documentation for the offline-first engine, WAL, store, sync, and transport layers.",
        href: links.softadastraDocs,
      },
      {
        label: "Cnerium Docs",
        description:
          "Documentation for durable routes, idempotency, stored responses, and retry-safe APIs.",
        href: links.cneriumDocs,
      },
      {
        label: "Kordex Docs",
        description:
          "Documentation for the Kordex runtime, permissions, native modules, and local-first JavaScript model.",
        href: links.kordexDocs,
      },
      {
        label: "Vix Blog",
        description:
          "Engineering notes, release updates, benchmarks, and technical articles around Vix.cpp.",
        href: links.vixBlog,
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "Company",
        description:
          "Learn about Softadastra, the C++ tooling company behind Vix.cpp ecosystem work.",
        href: links.company,
      },
      {
        label: "Open Source Model",
        description:
          "How Softadastra builds and maintains open C++ tooling while growing a focused ecosystem.",
        href: links.openSourceModel,
      },
      {
        label: "Branding",
        description:
          "Softadastra brand assets, identity, and usage guidelines.",
        href: links.branding,
      },
      {
        label: "Contact",
        description:
          "Reach Softadastra for ecosystem, tooling, partnership, or engineering inquiries.",
        href: links.contact,
      },
    ],
  },
];

export const headerActions = [
  {
    label: "Vix Docs",
    href: links.vixDocs,
    variant: "secondary",
  },
  {
    label: "Explore Vix.cpp",
    href: links.vix,
    variant: "primary",
  },
];

export const mobileNavigationGroups = navigationGroups;
