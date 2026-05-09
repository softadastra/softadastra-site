# Softadastra Site

Official website for Softadastra Company.

Softadastra builds reliable local-first infrastructure for applications that must keep working when the network fails.

This site is the central hub for the Softadastra ecosystem, including:

- Vix
- Softadastra
- Kordex
- Cnerium
- PulseGrid
- Softadastra Cloud

The goal of this repository is to keep the company website simple, clean, and easy to evolve as new stacks and products are added over time.

## Role of this website

`softadastra.com` is the main ecosystem hub.

It is not the SaaS dashboard.

The commercial SaaS and business layer should live on:

```txt
business.softadastra.com
```

Other focused subdomains:

```txt
docs.softadastra.com      Technical documentation
business.softadastra.com  SaaS, pricing, cloud, enterprise
builds.softadastra.com    Builds, binaries, SDK packages, releases
blog.softadastra.com      Engineering articles
```

## Tech stack

This site uses:

- Vue 3
- Vite
- Vue Router
- Plain CSS

## Project structure

```txt
softadastra-site/
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
│
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-image.png
│
└── src/
    ├── main.js
    ├── App.vue
    │
    ├── router/
    │   └── index.js
    │
    ├── data/
    │   ├── company.js
    │   ├── navigation.js
    │   ├── stacks.js
    │   ├── products.js
    │   ├── links.js
    │   └── footer.js
    │
    ├── pages/
    │   ├── HomePage.vue
    │   ├── EcosystemPage.vue
    │   ├── StackPage.vue
    │   ├── ProductPage.vue
    │   ├── CompanyPage.vue
    │   └── NotFoundPage.vue
    │
    ├── components/
    │   ├── layout/
    │   │   ├── SiteHeader.vue
    │   │   ├── SiteFooter.vue
    │   │   ├── SiteShell.vue
    │   │   └── MobileMenu.vue
    │   │
    │   ├── home/
    │   │   ├── HeroSection.vue
    │   │   ├── EcosystemMap.vue
    │   │   ├── StackGrid.vue
    │   │   ├── ProductGrid.vue
    │   │   ├── CompanySection.vue
    │   │   └── CtaSection.vue
    │   │
    │   ├── ecosystem/
    │   │   ├── EcosystemLayer.vue
    │   │   ├── EcosystemDiagram.vue
    │   │   └── StackCard.vue
    │   │
    │   ├── products/
    │   │   └── ProductCard.vue
    │   │
    │   └── ui/
    │       ├── BaseButton.vue
    │       ├── BaseBadge.vue
    │       ├── BaseCard.vue
    │       └── SectionHeading.vue
    │
    ├── styles/
    │   ├── main.css
    │   ├── variables.css
    │   ├── layout.css
    │   ├── components.css
    │   └── responsive.css
    │
    └── assets/
        ├── icons/
        └── images/
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How to add a new stack

Stacks are defined in:

```txt
src/data/stacks.js
```

Add a new object to the stacks array:

```js
{
  id: "example",
  name: "Example",
  label: "Runtime layer",
  tagline: "Short positioning sentence.",
  description: "Clear description of the stack and its role.",
  status: "Planned",
  license: "MIT",
  layer: "Application runtime",
  href: "#",
  docsHref: "#",
}
```

The new stack will automatically appear in the home page, ecosystem page, and stack detail route:

```txt
/stacks/example
```

## How to add a new product

Products are defined in:

```txt
src/data/products.js
```

Add a new object to the products array:

```js
{
  id: "example-product",
  name: "Example Product",
  label: "Commercial product",
  tagline: "Short positioning sentence.",
  description: "Clear description of the product and its role.",
  status: "Planned",
  category: "SaaS",
  href: "#",
}
```

The new product will automatically appear in the product grid and product detail route:

```txt
/products/example-product
```

## How to update navigation

Navigation links are defined in:

```txt
src/data/navigation.js
```

Main links are stored in:

```js
export const navigation = [];
```

Header buttons are stored in:

```js
export const headerActions = [];
```

External URLs are centralized in:

```txt
src/data/links.js
```

## Design principles

This website must stay:

- simple
- fast
- responsive
- easy to maintain
- clear for developers
- clear for business visitors
- ready for future stacks and products

`softadastra.com` should always explain the ecosystem first.

Commercial SaaS features should be linked to `business.softadastra.com`.

## Main positioning

```txt
Softadastra Company
Reliable local-first infrastructure.
```

## Ecosystem model

```txt
Softadastra Company
        ↓
Maintains:
- Vix
- Softadastra
- Kordex
- Cnerium
- PulseGrid
        ↓
MIT License
        ↓
Developer adoption
        ↓
Ecosystem
        ↓
Commercial products and services around it
```

## License

Released under the MIT License.

