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
    title: "Product",
    links: [
      {
        label: "Converdict",
        href: links.converdict,
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "PulseGrid",
        href: links.pulsegrid,
      },
    ],
  },
  {
    title: "Open Source",
    links: [
      {
        label: "Vix Runtime",
        href: links.vix,
      },
      {
        label: "Cnerium",
        href: links.cnerium,
      },
      {
        label: "Kordex",
        href: links.kordex,
      },
      {
        label: "Vix Agent",
        href: links.vixAgent,
      },
      {
        label: "Vix Game",
        href: links.vixGame,
      },
      {
        label: "Ivi.hpp",
        href: links.ivi,
      },
      {
        label: "Rix",
        href: links.rix,
      },
      {
        label: "Communities",
        href: links.communities,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Softadastra Docs",
        href: links.softadastraDocs,
      },
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
        label: "Engineering Blog",
        href: links.blog,
      },
      {
        label: "Vix Registry",
        href: links.vixRegistry,
      },
      {
        label: "Builds",
        href: links.builds,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Company",
        href: `${links.main}/company`,
      },
      {
        label: "Ecosystem",
        href: `${links.main}/ecosystem`,
      },
      {
        label: "Open Source Model",
        href: `${links.main}/ecosystem`,
      },
      {
        label: "GitHub",
        href: links.github,
      },
      {
        label: "X",
        href: links.x,
      },
    ],
  },
];

export const footerMeta = {
  brand: "Softadastra",
  tagline: "Reliable local-first infrastructure.",
  copyright: `© ${new Date().getFullYear()} Softadastra Company. All rights reserved.`,
};
