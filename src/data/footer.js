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
    title: "Platform",
    links: [
      {
        label: "Ecosystem",
        href: links.main,
      },
      {
        label: "Vix",
        href: links.vixDocs,
      },
      {
        label: "Softadastra",
        href: links.softadastraDocs,
      },
      {
        label: "Kordex",
        href: links.kordexDocs,
      },
      {
        label: "Cnerium",
        href: links.cneriumDocs,
      },
      {
        label: "PulseGrid",
        href: links.pulsegridDocs,
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "Softadastra Cloud",
        href: links.business,
      },
      {
        label: "Softadastra Docs",
        href: links.docs,
      },
      {
        label: "Softadastra Builds",
        href: links.builds,
      },
      {
        label: "Business",
        href: links.business,
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "Documentation",
        href: links.docs,
      },
      {
        label: "Vix Docs",
        href: links.vixDocs,
      },
      {
        label: "GitHub",
        href: links.github,
      },
      {
        label: "Builds",
        href: links.builds,
      },
      {
        label: "Releases",
        href: links.builds,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        href: links.blog,
      },
      {
        label: "Engineering articles",
        href: links.blog,
      },
      {
        label: "Reliability guides",
        href: links.docs,
      },
      {
        label: "Open source",
        href: links.github,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Company",
        href: links.main,
      },
      {
        label: "Cloud",
        href: links.business,
      },
      {
        label: "Docs",
        href: links.docs,
      },
      {
        label: "Blog",
        href: links.blog,
      },
      {
        label: "GitHub",
        href: links.github,
      },
    ],
  },
];

export const footerMeta = {
  brand: "Softadastra",
  tagline: "Reliable local-first infrastructure.",
  copyright: `© ${new Date().getFullYear()} Softadastra Company. All rights reserved.`,
};
