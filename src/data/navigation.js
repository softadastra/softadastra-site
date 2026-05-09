import { links } from "./links";

export const navigation = [
  {
    label: "Ecosystem",
    to: "/ecosystem",
  },
  {
    label: "Company",
    to: "/company",
  },
  {
    label: "Docs",
    href: links.docs,
  },
  {
    label: "Blog",
    href: links.blog,
  },
];

export const headerActions = [
  {
    label: "Business",
    href: links.business,
    variant: "secondary",
  },
  {
    label: "Get started",
    href: links.docs,
    variant: "primary",
  },
];
