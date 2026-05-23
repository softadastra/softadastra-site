import { links } from "./links";

export const navigationGroups = [
  {
    label: "Product",
    items: [
      {
        label: "Converdict",
        description:
          "A commercial product for turning complex technical signals, reviews, and evaluations into clear, explainable verdicts.",
        href: links.converdict,
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        label: "PulseGrid",
        description:
          "Deployment and reliability infrastructure for production services.",
        href: links.pulsegrid,
      },
    ],
  },
  {
    label: "Open Source",
    items: [
      {
        label: "Vix Runtime",
        description:
          "Modern C++ runtime foundation for building fast, reliable applications.",
        href: links.vix,
      },
      {
        label: "Cnerium",
        description:
          "Reliability-first backend framework for durable APIs powered by Vix and Softadastra.",
        href: links.cnerium,
      },
      {
        label: "Kordex",
        description:
          "JavaScript runtime for reliable local-first applications.",
        href: links.kordex,
      },
      {
        label: "Vix Agent",
        description:
          "Local-first AI agent infrastructure for C++ applications and developer workflows.",
        href: links.vixAgent,
      },
      {
        label: "Vix Game",
        description:
          "Game runtime layer for building simple 2D applications with Vix, SDL, and OpenGL.",
        href: links.vixGame,
      },
      {
        label: "Ivi.hpp",
        description:
          "Modern C++ header-only utilities designed for expressive application development.",
        href: links.ivi,
      },
      {
        label: "Rix",
        description:
          "Experimental runtime and tooling project within the Softadastra ecosystem.",
        href: links.rix,
      },
      {
        label: "Communities",
        description:
          "Community spaces for contributors, users, and ecosystem discussions.",
        href: links.communities,
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Vix Docs",
        description:
          "Documentation for the Vix C++ runtime, CLI, modules, and application workflow.",
        href: links.vixDocs,
      },
      {
        label: "Cnerium Docs",
        description:
          "Documentation for building durable and retry-safe backend APIs.",
        href: links.cneriumDocs,
      },
      {
        label: "Softadastra Docs",
        description:
          "Documentation for the Softadastra reliability, WAL, sync, and local-first architecture.",
        href: links.softadastraDocs,
      },
      {
        label: "Kordex Docs",
        description:
          "Documentation for the Kordex JavaScript runtime and local-first application model.",
        href: links.kordexDocs,
      },
      {
        label: "Engineering Blog",
        description:
          "Technical articles, release notes, architecture notes, and ecosystem updates.",
        href: links.blog,
      },
    ],
  },
  {
    label: "Docs",
    href: links.softadastraDocs,
  },
  {
    label: "Blog",
    href: links.blog,
  },
  {
    label: "Company",
    items: [
      {
        label: "Company",
        description:
          "Learn about Softadastra, its mission, and its ecosystem strategy.",
        to: "/company",
      },
      {
        label: "Ecosystem",
        description:
          "Understand how Vix, Softadastra, Kordex, Cnerium, and the product layer fit together.",
        to: "/ecosystem",
      },
      {
        label: "Open Source Model",
        description:
          "MIT licensed foundations with commercial reliability products built around them.",
        to: "/ecosystem",
      },
    ],
  },
];

export const headerActions = [
  {
    label: "Docs",
    href: links.softadastraDocs,
    variant: "secondary",
  },
  {
    label: "Explore Converdict",
    href: links.converdict,
    variant: "primary",
  },
];

export const mobileNavigationGroups = navigationGroups;
