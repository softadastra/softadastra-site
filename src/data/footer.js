import { links } from "./links";

export const footerGroups = [
  {
    title: "Company",
    links: [
      {
        label: "Home",
        href: links.main,
      },
      {
        label: "Business",
        href: links.business,
      },
      {
        label: "Blog",
        href: links.blog,
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "Docs",
        href: links.docs,
      },
      {
        label: "Builds",
        href: links.builds,
      },
      {
        label: "GitHub",
        href: links.github,
      },
    ],
  },
  {
    title: "Stack",
    links: [
      {
        label: "Vix",
        href: links.vix,
      },
      {
        label: "Vix Docs",
        href: links.vixDocs,
      },
      {
        label: "Cnerium",
        href: links.cnerium,
      },
    ],
  },
];

export const footerMeta = {
  copyright: `© ${new Date().getFullYear()} Softadastra. All rights reserved.`,
  license: "Released under the MIT License.",
};
