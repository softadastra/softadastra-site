import { links } from "./links";

export const footerSocialLinks = [
  {
    label: "GitHub",
    href: links.github,
    icon: "github",
  },
  {
    label: "X",
    href: links.x,
    icon: "x",
  },
];

export const footerGroups = [
  {
    title: "Open Source",
    links: [
      {
        label: "Vix.cpp",
        href: links.vixGithub,
      },
      {
        label: "Cnerium",
        href: links.cneriumGithub,
      },
      {
        label: "Kordex",
        href: links.kordexGithub,
      },
      {
        label: "Softadastra Engine",
        href: links.softadastraGithub,
      },
    ],
  },
  {
    title: "Tooling",
    links: [
      {
        label: "Vix CLI",
        href: links.vix,
      },
      {
        label: "Vix Registry",
        href: links.vixRegistry,
      },
      {
        label: "Cnerium",
        href: links.cnerium,
      },
      {
        label: "Kordex",
        href: links.kordex,
      },
    ],
  },
  {
    title: "Learn",
    links: [
      {
        label: "Vix Docs",
        href: links.vixDocs,
      },
      {
        label: "Cnerium Docs",
        href: links.cneriumDocs,
      },
      {
        label: "Kordex Docs",
        href: links.kordexDocs,
      },
      {
        label: "Softadastra Docs",
        href: links.softadastraDocs,
      },
    ],
  },
  {
    title: "Validation",
    links: [
      {
        label: "Pico",
        href: links.pico,
      },
      {
        label: "Vix Blog",
        href: links.vixBlog,
      },
      {
        label: "Engineering Blog",
        href: links.blog,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Company",
        href: links.company,
      },
      {
        label: "Open Source Model",
        href: links.openSourceModel,
      },
      {
        label: "Branding",
        href: links.branding,
      },
      {
        label: "Contact",
        href: links.contact,
      },
    ],
  },
];

export const footerMeta = {
  brand: "Softadastra",
  tagline: "The C++ Tooling Company.",
  copyright: `© ${new Date().getFullYear()} Softadastra Company. All rights reserved.`,
};
