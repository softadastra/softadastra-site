import { links } from "./links";

export const navigationGroups = [
  {
    label: "Platform",
    items: [
      {
        label: "Ecosystem",
        description: "Understand how the Softadastra stack is organized.",
        to: "/ecosystem",
      },
      {
        label: "Vix",
        description: "Modern C++ runtime foundation.",
        href: links.vix,
      },
      {
        label: "Softadastra",
        description: "Durability, WAL, sync, and local-first engine.",
        href: links.softadastraDocs,
      },
      {
        label: "Kordex",
        description: "JavaScript runtime for reliable local-first apps.",
        href: links.kordexDocs,
      },
      {
        label: "Cnerium",
        description: "Minimalist web framework for Vix.",
        href: links.cnerium,
      },
      {
        label: "PulseGrid",
        description: "Deployment and reliability infrastructure.",
        href: links.pulsegridDocs,
      },
    ],
  },
  {
    label: "Products",
    items: [
      {
        label: "Softadastra Cloud",
        description: "Reliability observability and SaaS business layer.",
        href: links.business,
      },
      {
        label: "Softadastra Docs",
        description: "Technical documentation for the ecosystem.",
        href: links.docs,
      },
      {
        label: "Softadastra Builds",
        description: "Builds, binaries, SDK packages, and releases.",
        href: links.builds,
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Documentation",
        description: "Start learning the Softadastra architecture.",
        href: links.docs,
      },
      {
        label: "GitHub",
        description: "Explore the open source repositories.",
        href: links.github,
      },
      {
        label: "Vix Docs",
        description: "Documentation for the Vix C++ runtime.",
        href: links.vixDocs,
      },
      {
        label: "Vix Registry",
        description: "Discover official Vix packages and modules.",
        href: links.vixRegistry,
      },
      {
        label: "Builds",
        description: "Download official packages and artifacts.",
        href: links.builds,
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Blog",
        description: "Engineering articles and ecosystem updates.",
        href: links.blog,
      },
      {
        label: "Reliability guides",
        description:
          "Learn about WAL, sync, replay, and offline-first systems.",
        href: links.docs,
      },
      {
        label: "Vix Registry",
        description: "Browse reusable Vix packages for applications.",
        href: links.vixRegistry,
      },
      {
        label: "Releases",
        description: "Follow builds, binaries, SDKs, and release artifacts.",
        href: links.builds,
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "Company",
        description: "Softadastra Company and its ecosystem model.",
        to: "/company",
      },
      {
        label: "Open source model",
        description:
          "MIT licensed foundations with commercial services around them.",
        to: "/ecosystem",
      },
      {
        label: "Business",
        description: "SaaS, pricing, cloud, and enterprise layer.",
        href: links.business,
      },
    ],
  },
];

export const headerActions = [
  {
    label: "Docs",
    href: links.docs,
    variant: "secondary",
  },
  {
    label: "Start with Cloud",
    href: links.business,
    variant: "primary",
  },
];

export const mobileNavigationGroups = navigationGroups;
