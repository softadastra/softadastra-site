import { links } from "./links";

export const stacks = [
  {
    id: "vix",
    name: "Vix",
    role: "Foundation / Runtime",
    layer: "Foundation",
    tagline: "A modern C++ runtime for building serious applications.",
    description:
      "Vix gives C++ a simpler application workflow. It lets developers run single files, create projects, build services, test code, and ship native applications without exposing every user directly to CMake complexity. Vix keeps the power of C++ while making the development loop faster and clearer.",
    status: "active",
    license: "MIT",
    color: "vix",
    href: links.vix,
    docsHref: links.vixDocs,
    githubHref: links.vixGithub,
    icon: "layers",
    highlights: [
      "Run C++ files directly with vix run",
      "Create real projects with vix new",
      "Build native services with a cleaner workflow",
      "Use HTTP, WebSocket, async, cache, sync, and runtime modules",
      "Keep CMake power internally without forcing it on simple apps",
      "Prepare C++ for modern application development",
    ],
    quickstart: `curl -fsSL https://vixcpp.com/install.sh | bash
vix run main.cpp`,
    features: [
      {
        label: "Application workflow",
        detail:
          "Run, build, test, format, inspect, and deploy C++ projects from one CLI.",
      },
      {
        label: "Runtime foundation",
        detail:
          "Provides core runtime modules for servers, async tasks, files, processes, logs, and application execution.",
      },
      {
        label: "Native performance",
        detail:
          "Keeps C++ close to the system while improving the developer experience around it.",
      },
      {
        label: "Project generation",
        detail:
          "Creates ready-to-use application structures for scripts, web apps, backends, and production services.",
      },
      {
        label: "vix.app",
        detail:
          "A simple application manifest that describes C++ projects without writing a visible CMakeLists.txt for simple cases.",
      },
      {
        label: "Ecosystem base",
        detail:
          "Vix is the foundation used by higher-level tools such as Cnerium, Kordex, and Vix AI.",
      },
    ],
    performance: {
      requestsPerSec: "~98k",
      avgLatency: "~8.47ms",
      p99Latency: "~14.01ms",
      version: "v2.5",
    },
    usedBy: [
      {
        name: "Cnerium",
        detail: "Reliability-first backend framework powered by Vix.",
      },
      {
        name: "Kordex",
        detail: "JavaScript runtime built on top of Vix and Softadastra.",
      },
      {
        name: "Vix AI",
        detail: "Local-first AI agent layer integrated into the Vix runtime.",
      },
    ],
  },

  {
    id: "vix-ai",
    name: "Vix AI",
    role: "AI Agent Layer",
    layer: "AI",
    tagline:
      "Local AI agents for understanding, inspecting, and improving code.",
    description:
      "Vix AI brings agent capabilities into the Vix ecosystem. It is designed to help developers analyze projects, inspect files, explain code, detect problems, and automate safe development tasks. The focus is not hype. The focus is practical AI inside a real developer runtime.",
    status: "experimental",
    license: "MIT",
    color: "ai",
    href: links.vix,
    docsHref: links.vixDocs,
    githubHref: links.vixGithub,
    icon: "spark",
    highlights: [
      "Analyze a project from the command line",
      "Ask questions about local code",
      "Inspect files inside a controlled workspace",
      "Run safe developer-oriented AI tasks",
      "Support local model providers such as Ollama",
      "Keep AI close to the runtime and the project structure",
    ],
    quickstart: `vix agent ask "Explain this project"
vix agent analyze .`,
    features: [
      {
        label: "Project analysis",
        detail:
          "Reads project structure and source files to explain how a codebase is organized.",
      },
      {
        label: "Code inspection",
        detail:
          "Helps identify errors, weak areas, missing pieces, and confusing implementation details.",
      },
      {
        label: "Local-first AI",
        detail:
          "Designed to work with local providers so sensitive code can stay on the developer machine.",
      },
      {
        label: "Agent workspace",
        detail:
          "Runs inside a controlled workspace with clear limits around file access and command execution.",
      },
      {
        label: "Developer commands",
        detail:
          "Provides CLI entry points such as ask, analyze, and scan for practical AI-assisted workflows.",
      },
      {
        label: "Runtime integration",
        detail:
          "Built as part of the Vix runtime instead of being a disconnected chatbot wrapper.",
      },
    ],
    coreModel: [
      "read project context",
      "understand developer intent",
      "inspect relevant files",
      "produce a grounded answer",
      "keep actions controlled",
      "store useful run history",
    ],
    modules: [
      {
        name: "agent",
        detail: "Main AI agent interface and execution flow.",
      },
      {
        name: "workspace",
        detail: "Controlled project workspace used during analysis.",
      },
      {
        name: "provider",
        detail: "Model provider abstraction for local or remote models.",
      },
      {
        name: "tools",
        detail: "Safe tool layer for file reading and command execution.",
      },
      {
        name: "history",
        detail: "Stores run metadata for debugging and reproducibility.",
      },
    ],
  },

  {
    id: "softadastra",
    name: "Softadastra",
    role: "Reliability / Sync",
    layer: "Reliability",
    tagline: "The network is an optimization. Local correctness comes first.",
    description:
      "Softadastra is the reliability layer for applications that must keep working when the network is slow, unstable, or unavailable. It focuses on local writes, durable operation logs, retry-safe synchronization, and deterministic convergence.",
    status: "active",
    license: "MIT",
    color: "softadastra",
    href: links.main,
    docsHref: links.softadastraDocs,
    githubHref: links.softadastraGithub,
    icon: "shield",
    highlights: [
      "Write locally before depending on the network",
      "Persist every important operation in a WAL",
      "Recover safely after crashes or interruptions",
      "Sync when possible and retry when needed",
      "Converge to a correct state after failures",
      "Make offline-first behavior a system property",
    ],
    quickstart: null,
    features: [
      {
        label: "Local-first writes",
        detail:
          "Applications can accept useful work locally before the network is available.",
      },
      {
        label: "WAL durability",
        detail:
          "Important operations are written to a durable log before synchronization.",
      },
      {
        label: "Outbox model",
        detail:
          "Pending operations are tracked until they are delivered or retried safely.",
      },
      {
        label: "Sync engine",
        detail:
          "Coordinates propagation, retry behavior, and state convergence.",
      },
      {
        label: "Failure recovery",
        detail:
          "The system can resume from crashes, timeouts, and network interruptions.",
      },
      {
        label: "Observable state",
        detail:
          "Operations, transitions, and failures can be inspected and explained.",
      },
    ],
    coreModel: [
      "write locally",
      "persist operation",
      "track pending work",
      "sync when possible",
      "retry safely",
      "converge deterministically",
    ],
    sdks: ["C++", "JavaScript"],
    modules: [
      {
        name: "wal",
        detail: "Write-ahead log used to protect accepted operations.",
      },
      {
        name: "outbox",
        detail: "Tracks operations that still need to be synchronized.",
      },
      {
        name: "sync",
        detail: "Coordinates retries, delivery, and convergence.",
      },
      {
        name: "store",
        detail: "Local state used while offline or online.",
      },
      {
        name: "transport",
        detail: "Moves operations between nodes or peers.",
      },
      {
        name: "observability",
        detail: "Makes the sync state understandable and inspectable.",
      },
    ],
  },

  {
    id: "kordex",
    name: "Kordex",
    role: "JavaScript Runtime",
    layer: "Application Runtime",
    tagline: "A JavaScript runtime for reliable local-first applications.",
    description:
      "Kordex is a JavaScript runtime built for applications that need local execution, controlled native capabilities, and reliable behavior under poor network conditions. It connects JavaScript development with the Vix and Softadastra foundation.",
    status: "early-stage",
    license: "MIT",
    color: "kordex",
    href: links.kordex,
    docsHref: links.kordexDocs,
    githubHref: links.kordexGithub,
    icon: "runtime",
    highlights: [
      "Run JavaScript through an embeddable engine",
      "Expose native modules through controlled permissions",
      "Support local-first application patterns",
      "Use project commands from a simple runtime config",
      "Build on top of Vix and Softadastra",
      "Prepare JavaScript apps for unreliable environments",
    ],
    quickstart: `kordex init app
cd app
kordex run`,
    features: [
      {
        label: "JavaScript execution",
        detail:
          "Runs JavaScript through a lightweight embeddable engine suitable for local-first apps.",
      },
      {
        label: "Permission model",
        detail:
          "Controls access to file system, environment, network, process, and native capabilities.",
      },
      {
        label: "Native modules",
        detail:
          "Provides standard modules through kordex imports for runtime-level features.",
      },
      {
        label: "Project workflow",
        detail:
          "Supports initialization, running, checking, building, and package workflows.",
      },
      {
        label: "Local-first direction",
        detail:
          "Designed to work naturally with durable local state and synchronization layers.",
      },
      {
        label: "Vix foundation",
        detail:
          "Uses Vix as the native runtime base instead of reinventing the low-level layer.",
      },
    ],
    cliCommands: [
      "kordex init <name>",
      "kordex run [file]",
      "kordex repl --eval <source>",
      "kordex check <file>",
      "kordex build <file|project>",
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
    id: "cnerium",
    name: "Cnerium",
    role: "Reliability-first Backend Framework",
    layer: "Backend Framework",
    tagline:
      "Backend reliability for APIs that must stay correct under failure.",
    description:
      "Cnerium is a reliability-first backend framework powered by Vix. It is not trying to be a general web framework or frontend framework. Its focus is durable APIs, retry-safe handlers, idempotency, request journaling, outbox workflows, audit logs, and backend correctness under crashes, retries, timeouts, and unstable networks.",
    status: "active",
    license: "MIT",
    color: "cnerium",
    href: links.cnerium,
    docsHref: links.cneriumDocs,
    githubHref: links.cneriumGithub,
    icon: "framework",
    highlights: [
      "Build APIs that stay correct under retries",
      "Protect important requests with durable handling",
      "Support idempotency and replay-safe operations",
      "Use request journals and backend outbox patterns",
      "Add auditability to critical API flows",
      "Run on top of the Vix runtime",
    ],
    quickstart: `vix new api --template backend
cd api
vix dev`,
    features: [
      {
        label: "Retry-safe handlers",
        detail:
          "Helps design API handlers that do not duplicate important effects when requests are retried.",
      },
      {
        label: "Idempotency",
        detail:
          "Provides a foundation for safely accepting repeated requests from clients, queues, or unstable networks.",
      },
      {
        label: "Request durability",
        detail:
          "Supports patterns where critical requests are recorded before risky processing continues.",
      },
      {
        label: "Backend outbox",
        detail:
          "Helps move side effects into controlled workflows that can be retried and inspected.",
      },
      {
        label: "Audit logs",
        detail:
          "Makes important backend decisions and state transitions easier to trace.",
      },
      {
        label: "Vix runtime",
        detail:
          "Uses Vix for the native execution model, server foundation, and developer workflow.",
      },
    ],
    packages: [
      {
        name: "cnerium/http",
        version: "API primitives and request handling",
      },
      {
        name: "cnerium/router",
        version: "Routing and route parameters",
      },
      {
        name: "cnerium/middleware",
        version: "Failure-aware middleware pipeline",
      },
      {
        name: "cnerium/runtime",
        version: "Application lifecycle powered by Vix",
      },
      {
        name: "cnerium/reliability",
        version: "Idempotency, request journal, and retry safety",
      },
      {
        name: "cnerium/app",
        version: "High-level backend application package",
      },
    ],
  },
];

export const ecosystemLayers = [
  {
    id: "foundation",
    label: "Foundation",
    name: "Vix",
    stackId: "vix",
    tagline: "A modern C++ runtime for building serious applications.",
  },
  {
    id: "ai",
    label: "AI",
    name: "Vix AI",
    stackId: "vix-ai",
    tagline: "Local AI agents for code analysis and developer workflows.",
  },
  {
    id: "reliability",
    label: "Reliability",
    name: "Softadastra",
    stackId: "softadastra",
    tagline: "Durable local-first infrastructure for real-world networks.",
  },
  {
    id: "app-runtime",
    label: "App Runtime",
    name: "Kordex",
    stackId: "kordex",
    tagline: "A JavaScript runtime for reliable local-first applications.",
  },
  {
    id: "backend-framework",
    label: "Backend Framework",
    name: "Cnerium",
    stackId: "cnerium",
    tagline: "Reliability-first backend framework powered by Vix.",
  },
];
