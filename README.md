# Softadastra Website

Official website for **Softadastra Company**.

Softadastra is **The C++ Tooling Company**.
The website presents Softadastra’s direction, ecosystem, tooling layers, documentation links, and open-source work around modern C++ development.

## Positioning

Softadastra builds and maintains open tooling for modern C++ development.

The mission is to make C++ development:

- simpler
- faster
- more productive
- more accessible
- easier to build, test, diagnose, package, and distribute

Softadastra is not positioned as a broad SaaS company or a commercial product company.

The website must stay focused on:

```txt
C++ tooling
Vix.cpp ecosystem
open technical foundations
developer workflow
backend reliability
local-first runtime foundations
real validation applications
```

## Ecosystem

The current ecosystem presented by the site is:

```txt
Vix.cpp
  -> open C++ foundation

Softadastra Engine
  -> offline-first runtime layer

Cnerium
  -> backend reliability layer for Vix applications

Kordex
  -> JavaScript and TypeScript runtime based on Vix.cpp

Pico
  -> real validation application proving Vix.cpp in action
```

## Strategic rule

Do not present Softadastra as having many unrelated products.

Avoid positioning such as:

```txt
Commercial products
Cloud products
SaaS products
Business layer
Reliable local-first infrastructure company
```

Use this positioning instead:

```txt
Softadastra is a C++ tooling company.
Softadastra builds and maintains open tooling for modern C++ development.
```

## Main sections

The site contains:

- Home page
- Ecosystem page
- Stack pages
- Tooling pages
- Company page
- Footer navigation
- Header navigation
- Ecosystem diagram
- Tooling grid
- Company model section

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```txt
src/
  components/
    ecosystem/
    home/
    layout/
    ui/

  data/
    company.js
    footer.js
    links.js
    navigation.js
    stacks.js
    tooling.js

  pages/
    CompanyPage.vue
    EcosystemPage.vue
    HomePage.vue
    NotFoundPage.vue
    StackPage.vue
    ToolingPage.vue

  router/
    index.js

  main.js
```

## Important data files

### `src/data/company.js`

Contains the company identity.

Current direction:

```txt
Softadastra — The C++ Tooling Company
```

### `src/data/links.js`

Contains official links for:

- Softadastra
- Vix.cpp
- Vix Docs
- Vix Blog
- Vix Registry
- Softadastra Engine
- Cnerium
- Kordex
- Pico
- GitHub
- X

### `src/data/stacks.js`

Contains the technical ecosystem layers.

Current stack:

```txt
Vix.cpp
Softadastra Engine
Cnerium
Kordex
Pico
```

### `src/data/tooling.js`

Contains Softadastra-maintained tooling items.

This replaces the old `products.js` direction.

Use `tooling`, not `products`, because Softadastra is not currently positioned as a company with commercial products.

### `src/data/footer.js`

Controls footer groups.

Recommended footer logic:

```txt
Open Source
Tooling
Learn
Validation
Company
```

### `src/data/navigation.js`

Controls the header navigation.

Navigation should focus on:

```txt
Open Source
Tooling
Learn
Company
```

Avoid old navigation entries such as:

```txt
Converdict
PulseGrid
Commercial Product
Solutions
```

## Routing

Main routes:

```txt
/              -> HomePage
/ecosystem     -> EcosystemPage
/stacks/:id    -> StackPage
/tooling/:id   -> ToolingPage
/company       -> CompanyPage
```

Legacy route:

```txt
/products/:id
```

This route should redirect to:

```txt
/tooling/:id
```

This keeps old links working without keeping the old product positioning.

## Naming rules

Use:

```txt
Tooling
Open tooling
C++ tooling
Technical layers
Ecosystem
Stack
Validation app
```

Avoid:

```txt
Products
Commercial products
SaaS
Cloud products
Business layer
Reliability cloud
```

## Pico positioning

Pico is not a product.

Pico is a validation application.

Correct positioning:

```txt
Pico is a production-style validation application built with Vix.cpp.
It proves that Vix.cpp modules work together inside a real C++ backend application.
```

Do not place Pico as a main product.

It can appear under:

```txt
Validation
Built with Vix
Real application
```

## Vix.cpp positioning

Vix.cpp is the technical foundation of the ecosystem.

Correct positioning:

```txt
Vix.cpp is a modern C++ runtime and developer toolkit.
```

Do not present Vix.cpp as a private Softadastra product.

Use language like:

```txt
Vix.cpp provides the open C++ foundation.
Softadastra builds and maintains tooling around modern C++ development.
```

## Softadastra Engine positioning

Correct positioning:

```txt
Softadastra Engine is an offline-first runtime layer for durable local state, WAL, store, sync, retry, delivery, and transport.
```

## Cnerium positioning

Correct positioning:

```txt
Cnerium is a backend reliability layer for Vix applications.
It adds durable, idempotent, retry-safe route handling for critical write operations.
```

## Kordex positioning

Correct positioning:

```txt
Kordex is a JavaScript and TypeScript runtime for reliable local-first applications, built on Vix.cpp.
```

## SEO direction

Use titles like:

```txt
Softadastra | The C++ Tooling Company
```

Use descriptions like:

```txt
Softadastra builds and maintains open C++ tooling to make modern C++ development simpler, faster, and more accessible.
```

Avoid old SEO descriptions around:

```txt
reliable local-first infrastructure
cloud reliability products
commercial products
business services
```

## Deployment

Build before deployment:

```bash
npm run build
```

The production output is generated in:

```txt
dist/
```

Deploy the `dist/` directory to the hosting provider used for `softadastra.com`.

## Brand rule

Softadastra must stay in one clear niche:

```txt
C++ tooling
```

Any page, section, link, or component that does not support this direction should be removed, renamed, or moved out of the main website.
