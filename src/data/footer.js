import { links } from "./links";

export const footerGroups = [
  {
    title: "Open Source",
    links: [
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
        label: "Documentation",
        href: links.docs,
      },
      {
        label: "Builds & Releases",
        href: links.builds,
      },
    ],
  },
  {
    title: "Company",
    links: [
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
