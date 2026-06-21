import { links } from "./links";

export const stacks = [
  {
    id: "vix",
    name: "Vix.cpp",
    role: "C++ Toolchain Foundation",
    layer: "Foundation",
    tagline: "Modern C++ tooling for real applications.",
    description:
      "Vix.cpp gives C++ developers a modern command surface for creating, running, building, testing, diagnosing, packaging, and distributing native applications while keeping the power and control of C++.",
    status: "active development",
    license: "MIT",
    color: "vix",
    href: links.vix,
    docsHref: links.vixDocs,
    githubHref: links.vixGithub,
    icon: "layers",
    highlights: [
      "Run single C++ files with vix run",
      "Create real C++ projects with vix new",
      "Build, test, check, format, and package from one CLI",
      "Use runtime modules for HTTP, WebSocket, KV, ORM, ThreadPool, time, filesystem, and more",
      "Keep native C++ and CMake compatibility",
      "Move from local development to production with a clearer workflow",
    ],
    quickstart: `curl -fsSL https://vixcpp.com/install.sh | bash
vix run main.cpp`,
    features: [
      {
        label: "Developer workflow",
        detail:
          "Run, build, test, format, inspect, package, and operate C++ projects from one toolchain.",
      },
      {
        label: "Runtime modules",
        detail:
          "Provides reusable modules for real applications: HTTP, WebSocket, KV, ORM, ThreadPool, filesystem, time, process, logs, and more.",
      },
      {
        label: "Native C++",
        detail:
          "Keeps C++ close to the system while making the development workflow simpler and more consistent.",
      },
      {
        label: "Project model",
        detail:
          "Supports both existing CMake projects and simpler Vix application manifests.",
      },
      {
        label: "Diagnostics",
        detail:
          "Makes builds, errors, tests, runtime state, and production behavior easier to inspect.",
      },
      {
        label: "Ecosystem foundation",
        detail:
          "Acts as the base for higher-level tools such as Cnerium, Kordex, and Pico.",
      },
    ],
    usedBy: [
      {
        name: "Cnerium",
        detail: "Reliability layer for Vix backends.",
      },
      {
        name: "Kordex",
        detail: "JavaScript and TypeScript runtime built on top of Vix.cpp.",
      },
      {
        name: "Pico",
        detail: "Production-style validation application built with Vix.cpp.",
      },
    ],
  },

  {
    id: "softadastra-engine",
    name: "Softadastra Engine",
    role: "Offline-first Runtime Layer",
    layer: "Local-first",
    tagline: "Durable local state for applications that must keep working.",
    description:
      "Softadastra Engine is the offline-first runtime layer inside the Softadastra C++ tooling ecosystem. It focuses on local state, write-ahead logging, store, sync, retry, delivery, and transport for applications that must keep working when networks are unstable.",
    status: "active development",
    license: "Apache-2.0",
    color: "softadastra",
    href: links.softadastraEngine,
    docsHref: links.softadastraDocs,
    githubHref: links.softadastraGithub,
    icon: "shield",
    highlights: [
      "Write locally before depending on the network",
      "Persist important operations in a WAL",
      "Recover safely after crashes or interruptions",
      "Track pending work until delivery succeeds",
      "Sync when possible and retry when needed",
      "Keep local-first behavior explicit and inspectable",
    ],
    quickstart: null,
    features: [
      {
        label: "Local state",
        detail:
          "Applications can save useful state locally before a remote service is available.",
      },
      {
        label: "WAL durability",
        detail:
          "Important operations can be recorded in a write-ahead log before synchronization.",
      },
      {
        label: "Store",
        detail:
          "Provides a durable local storage foundation for offline-first workflows.",
      },
      {
        label: "Retry model",
        detail:
          "Tracks operations that need to be retried when connectivity or delivery fails.",
      },
      {
        label: "Sync foundation",
        detail:
          "Provides the base for synchronization, delivery, and convergence workflows.",
      },
      {
        label: "Transport",
        detail:
          "Keeps the network as a delivery layer instead of the only place where work can happen.",
      },
    ],
    coreModel: [
      "write locally",
      "persist operation",
      "track pending work",
      "retry safely",
      "sync when possible",
      "inspect state",
    ],
    modules: [
      {
        name: "wal",
        detail: "Write-ahead log used to protect accepted operations.",
      },
      {
        name: "store",
        detail: "Durable local state used while offline or online.",
      },
      {
        name: "sync",
        detail: "Coordinates retries, delivery, and convergence.",
      },
      {
        name: "transport",
        detail: "Moves operations between local and remote systems.",
      },
      {
        name: "metadata",
        detail: "Tracks state needed to understand what happened.",
      },
    ],
  },

  {
    id: "cnerium",
    name: "Cnerium",
    role: "Backend Reliability Layer",
    layer: "Backend Reliability",
    tagline: "Retry-safe writes for Vix backends.",
    description:
      "Cnerium attaches to existing Vix applications and adds durable, idempotent, retry-safe route handling for critical write operations that must not be executed twice by accident.",
    status: "active development",
    license: "MIT",
    color: "cnerium",
    href: links.cnerium,
    docsHref: links.cneriumDocs,
    githubHref: links.cneriumGithub,
    icon: "framework",
    highlights: [
      "Attach reliability behavior to existing Vix apps",
      "Protect critical POST routes from duplicate execution",
      "Use Idempotency-Key for retry-safe operations",
      "Store responses so safe retries return the same result",
      "Reject unsafe key reuse with conflicting request bodies",
      "Keep Vix as the backend runtime and application model",
    ],
    quickstart: `auto cnerium = cnerium::attach(app);

cnerium.durable_post(
  "/orders",
  "orders.create",
  handler
);`,
    features: [
      {
        label: "Durable routes",
        detail:
          "Wraps selected write routes with reliability rules before the handler executes.",
      },
      {
        label: "Idempotency",
        detail:
          "Uses operation names and Idempotency-Key headers to identify one logical client operation.",
      },
      {
        label: "Request body hashing",
        detail:
          "Detects when the same key is reused with a different request body and rejects it safely.",
      },
      {
        label: "Stored responses",
        detail:
          "Returns the original stored response when the same request is retried safely.",
      },
      {
        label: "Replay protection",
        detail:
          "Prevents duplicate backend effects for retries after timeouts or lost responses.",
      },
      {
        label: "Vix integration",
        detail:
          "Keeps routing, middleware, HTTP, WebSocket, and runtime lifecycle inside Vix.",
      },
    ],
    packages: [
      {
        name: "durable routes",
        version: "Retry-safe route execution",
      },
      {
        name: "idempotency",
        version: "Idempotency-Key handling",
      },
      {
        name: "stored responses",
        version: "Replay successful results",
      },
      {
        name: "conflict detection",
        version: "Reject unsafe key reuse",
      },
    ],
  },

  {
    id: "kordex",
    name: "Kordex",
    role: "JavaScript / TypeScript Runtime",
    layer: "Application Runtime",
    tagline: "Reliable local-first JavaScript built on Vix.cpp.",
    description:
      "Kordex is a JavaScript and TypeScript runtime built on top of Vix.cpp and Softadastra. It is designed for local execution, explicit permissions, native modules, and reliable local-first application workflows.",
    status: "early-stage",
    license: "MIT",
    color: "kordex",
    href: links.kordex,
    docsHref: links.kordexDocs,
    githubHref: links.kordexGithub,
    icon: "runtime",
    highlights: [
      "Run JavaScript and TypeScript files",
      "Use explicit permissions for native capabilities",
      "Expose native modules through kordex: imports",
      "Support local-first application workflows",
      "Connect JavaScript code to C++ foundations",
      "Build on top of Vix.cpp instead of reinventing the native layer",
    ],
    quickstart: `npm install kordex
npx kordex run main.js`,
    features: [
      {
        label: "JavaScript execution",
        detail:
          "Runs JavaScript through a lightweight embeddable engine suitable for local-first applications.",
      },
      {
        label: "TypeScript MVP",
        detail:
          "Supports early TypeScript workflows for simple runtime execution.",
      },
      {
        label: "Permission model",
        detail:
          "Controls access to filesystem, environment, network, process, and Softadastra capabilities.",
      },
      {
        label: "Native modules",
        detail:
          "Provides standard modules through kordex: imports for runtime-level features.",
      },
      {
        label: "Local-first direction",
        detail:
          "Designed for applications that must keep useful behavior close to the machine.",
      },
      {
        label: "Vix.cpp foundation",
        detail:
          "Uses Vix.cpp as the native runtime and developer tooling foundation.",
      },
    ],
    cliCommands: [
      "kordex init <name>",
      "kordex run [file]",
      "kordex check <file>",
      "kordex build <file|project>",
      "kordex repl",
      "kordex install [package]",
      "kordex update [package]",
      "kordex version",
    ],
    runtimeModules: [
      {
        name: "runtime",
        detail: "Configuration, lifecycle, permissions, timers, and tasks.",
      },
      {
        name: "bindings",
        detail: "Engine abstraction and script execution backend.",
      },
      {
        name: "std",
        detail: "Native modules exposed to JavaScript.",
      },
      {
        name: "cli",
        detail: "User-facing command-line interface.",
      },
    ],
  },

  {
    id: "pico",
    name: "Pico",
    role: "Vix Validation App",
    layer: "Validation",
    tagline: "A real backend application proving Vix.cpp in action.",
    description:
      "Pico is a production-style validation application built with Vix.cpp. It is not a framework and not a separate runtime. It exists to verify that Vix.cpp modules work together inside a real C++ backend shape.",
    status: "active",
    license: "MIT",
    color: "pico",
    href: links.pico,
    docsHref: links.pico,
    githubHref: links.picoGithub,
    icon: "app",
    highlights: [
      "Validates Vix.cpp modules inside one real backend application",
      "Connects HTTP routing, middleware, static files, SQLite, KV, ThreadPool, and WebSocket",
      "Includes a browser-based runtime status dashboard",
      "Exercises runtime metrics, background jobs, and event APIs",
      "Uses Rix CSV, Rix Auth diagnostics, and Rix PDF generation",
      "Keeps the app small enough to understand and real enough to catch integration problems",
    ],
    quickstart: `cd pico
cp .env.example .env
vix dev`,
    features: [
      {
        label: "Runtime validation",
        detail:
          "Confirms that Vix modules work together under a real application shape.",
      },
      {
        label: "Backend structure",
        detail:
          "Uses controllers, services, infrastructure wrappers, routes, middleware, and app bootstrap.",
      },
      {
        label: "Runtime dashboard",
        detail:
          "Shows health, uptime, requests, events, KV behavior, ThreadPool metrics, and WebSocket checks.",
      },
      {
        label: "Persistence",
        detail:
          "Uses SQLite events and durable Vix KV state for runtime diagnostics.",
      },
      {
        label: "WebSocket runtime",
        detail: "Validates WebSocket behavior through Vix AttachedRuntime.",
      },
      {
        label: "Rix integration",
        detail:
          "Exercises optional userland libraries such as CSV export, Auth diagnostics, and PDF generation.",
      },
    ],
    coreModel: [
      "start Vix app",
      "register middleware",
      "register routes",
      "store runtime state",
      "serve dashboard",
      "validate modules together",
    ],
  },
];

export const ecosystemLayers = [
  {
    id: "foundation",
    label: "Foundation",
    name: "Vix.cpp",
    stackId: "vix",
    tagline: "Modern C++ tooling for real applications.",
  },
  {
    id: "local-first",
    label: "Local-first",
    name: "Softadastra Engine",
    stackId: "softadastra-engine",
    tagline: "Durable local state for applications that must keep working.",
  },
  {
    id: "backend-reliability",
    label: "Backend Reliability",
    name: "Cnerium",
    stackId: "cnerium",
    tagline: "Retry-safe writes for Vix backends.",
  },
  {
    id: "application-runtime",
    label: "Application Runtime",
    name: "Kordex",
    stackId: "kordex",
    tagline: "Reliable local-first JavaScript built on Vix.cpp.",
  },
  {
    id: "validation",
    label: "Validation",
    name: "Pico",
    stackId: "pico",
    tagline: "A real backend application proving Vix.cpp in action.",
  },
];
