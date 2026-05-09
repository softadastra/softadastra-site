import { links } from "./links";

export const navigation = [
  {
    label: "Docs",
    href: links.docs,
  },
  {
    label: "Blog",
    href: links.blog,
  },
  {
    label: "Builds",
    href: links.builds,
  },
  {
    label: "Cloud",
    href: links.business,
  },
];

export const mobileNavigation = [
  ...navigation,
  {
    label: "GitHub",
    href: links.github,
  },
];

export const headerActions = [
  {
    label: "Start with Cloud",
    href: links.business,
    variant: "primary",
  },
];
