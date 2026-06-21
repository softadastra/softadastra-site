<template>
  <section class="showcase sd-reveal">
    <div class="showcase__glow" aria-hidden="true" />
    <div class="showcase__grid" aria-hidden="true" />

    <div class="showcase__inner">
      <!-- LEFT: copy -->
      <div class="showcase__copy">
        <div class="showcase__badge">
          <span class="showcase__badge-dot" />
          Showcase
        </div>

        <h2 class="showcase__title">
          See the C++ tooling stack
          <span>in action.</span>
        </h2>

        <p class="showcase__desc">
          Pico validates the Vix.cpp ecosystem inside a real backend
          application. It brings together routing, runtime modules, storage,
          WebSocket, diagnostics, background jobs, and developer workflow in one
          practical C++ app.
        </p>

        <ul class="showcase__bullets">
          <li>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8.5l3 3 7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <div>
              <strong>Real backend application</strong>
              <span>A practical C++ app, not an isolated snippet.</span>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8.5l3 3 7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <div>
              <strong>Built with Vix.cpp</strong>
              <span>Runs on the open C++ runtime and tooling foundation.</span>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8.5l3 3 7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <div>
              <strong>Validates modules together</strong>
              <span>Routing, storage, WebSocket, jobs — exercised as one.</span>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8.5l3 3 7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <div>
              <strong>Beyond isolated examples</strong>
              <span>Shows the ecosystem working as a whole system.</span>
            </div>
          </li>
        </ul>

        <div class="showcase__actions">
          <a
            class="showcase__btn showcase__btn--primary"
            :href="links.pico"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Pico
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <a class="showcase__btn showcase__btn--secondary" href="/ecosystem">
            Explore ecosystem
          </a>

          <a
            class="showcase__btn showcase__btn--ghost"
            :href="links.vix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vix.cpp
          </a>
        </div>
      </div>

      <!-- RIGHT: Pico backend console -->
      <div
        class="showcase__console"
        role="img"
        aria-label="Pico backend booting on Vix.cpp: source compiles, modules come online, and the validation suite passes."
      >
        <!-- Window chrome -->
        <header class="con__chrome">
          <div class="con__dots">
            <span class="con__dot con__dot--red" />
            <span class="con__dot con__dot--yellow" />
            <span class="con__dot con__dot--green" />
          </div>
          <div class="con__chrome-title">pico — backend</div>
          <div class="con__chrome-pill" :class="`con__chrome-pill--${phase}`">
            <span class="con__chrome-pill-dot" />
            {{ phaseLabel }}
          </div>
        </header>

        <div class="con__body">
          <!-- Build pipeline -->
          <div class="con__pipeline" aria-hidden="true">
            <template v-for="(stage, i) in pipeline" :key="stage.id">
              <div
                class="con__stage"
                :class="{
                  'con__stage--active': i === pipeStage,
                  'con__stage--done': i < pipeStage,
                }"
              >
                <span class="con__stage-label">{{ stage.label }}</span>
              </div>
              <span
                v-if="i < pipeline.length - 1"
                class="con__arrow"
                :class="{ 'con__arrow--filled': i < pipeStage }"
                aria-hidden="true"
              >
                <svg viewBox="0 0 12 8" width="12" height="8" fill="none">
                  <path
                    d="M1 4h9M7 1l3 3-3 3"
                    stroke="currentColor"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </template>
          </div>

          <!-- Module grid -->
          <div class="con__modules-head">
            <span>Vix modules</span>
            <span class="con__modules-count">
              {{ readyCount }}/{{ modules.length }} validated
            </span>
          </div>

          <div class="con__modules" role="list">
            <div
              v-for="mod in modules"
              :key="mod.id"
              class="con__module"
              :class="`con__module--${mod.state}`"
              role="listitem"
            >
              <span class="con__module-icon" v-html="mod.icon" />
              <div class="con__module-meta">
                <strong>{{ mod.label }}</strong>
                <span>{{ mod.detail }}</span>
              </div>
              <span class="con__module-state" aria-hidden="true">
                <svg
                  v-if="mod.state === 'ready'"
                  viewBox="0 0 16 16"
                  width="13"
                  height="13"
                  fill="none"
                >
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span
                  v-else-if="mod.state === 'loading'"
                  class="con__spinner"
                />
                <span v-else class="con__pending-dot" />
              </span>
            </div>
          </div>

          <!-- Terminal log -->
          <div class="con__log" aria-hidden="true">
            <div
              v-for="line in visibleLog"
              :key="line.id"
              class="con__log-row"
              :class="`con__log-row--${line.kind}`"
            >
              <span v-if="line.kind === 'cmd'" class="con__log-prompt">$</span>
              <span v-else-if="line.kind === 'ok'" class="con__log-check">
                <svg viewBox="0 0 16 16" width="10" height="10" fill="none">
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span v-else class="con__log-bullet">›</span>
              <span class="con__log-text" v-html="line.html" />
              <span v-if="line.meta" class="con__log-meta">{{
                line.meta
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { links } from "../../data/links";

// ─── Module SVG icons ────────────────────────────────────
const ICON = {
  http: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M2 6h12M2 10h12M6 2.5l-1.5 11M11.5 2.5L10 13.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  ws: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M1.5 8a4 4 0 014-4M14.5 8a4 4 0 01-4 4M4 8a2.2 2.2 0 014.4 0M8 8a2.2 2.2 0 014.4 0" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  kv: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><rect x="2" y="3" width="5" height="10" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M9 6h5M9 10h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  sqlite:
    '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><ellipse cx="8" cy="4" rx="5" ry="2.2" stroke="currentColor" stroke-width="1.3"/><path d="M3 4v8c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2V4" stroke="currentColor" stroke-width="1.3"/></svg>',
  pool: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><circle cx="4.5" cy="4.5" r="1.8" stroke="currentColor" stroke-width="1.3"/><circle cx="11.5" cy="4.5" r="1.8" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="11.5" r="1.8" stroke="currentColor" stroke-width="1.3"/><path d="M5.8 5.8l4.4 0M5.5 6l1.6 4M10.5 6L8.9 10" stroke="currentColor" stroke-width="1.1"/></svg>',
  metrics:
    '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M2 12l3-4 3 2 3-5 3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  jobs: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.3"/><path d="M8 5v3l2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  runtime:
    '<svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M4 3l8 5-8 5V3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
};

// ─── Static config ───────────────────────────────────────
const pipeline = [
  { id: "src", label: "main.cpp" },
  { id: "vix", label: "Vix.cpp" },
  { id: "modules", label: "modules" },
  { id: "pico", label: "Pico" },
  { id: "diag", label: "diagnostics" },
];

const moduleDefs = [
  {
    id: "runtime",
    label: "Runtime",
    detail: "async event loop",
    icon: ICON.runtime,
  },
  { id: "http", label: "HTTP routes", detail: "24 endpoints", icon: ICON.http },
  { id: "ws", label: "WebSocket", detail: "live channels", icon: ICON.ws },
  { id: "kv", label: "KV store", detail: "vix::kv", icon: ICON.kv },
  { id: "sqlite", label: "SQLite", detail: "migrations ok", icon: ICON.sqlite },
  { id: "pool", label: "ThreadPool", detail: "8 workers", icon: ICON.pool },
  {
    id: "jobs",
    label: "Background jobs",
    detail: "queue drained",
    icon: ICON.jobs,
  },
  {
    id: "metrics",
    label: "Runtime metrics",
    detail: "exporter up",
    icon: ICON.metrics,
  },
];

// Terminal script. `mod` advances module loading; `stage` advances pipeline.
const script = [
  { kind: "cmd", html: cmdHtml("vix build", "--preset release"), stage: 1 },
  { kind: "log", text: "compiling main.cpp · linking Vix.cpp", stage: 1 },
  { kind: "ok", text: "native binary linked", meta: "1.2s", stage: 2 },
  { kind: "cmd", html: cmdHtml("vix run", "pico"), stage: 3, mod: "start" },
  { kind: "log", text: "booting Pico backend…", mod: "runtime" },
  { kind: "ok", text: "runtime online", mod: "http" },
  { kind: "ok", text: "http routes mounted", mod: "ws" },
  { kind: "ok", text: "websocket channels open", mod: "kv" },
  { kind: "ok", text: "kv store ready", mod: "sqlite" },
  { kind: "ok", text: "sqlite migrated", mod: "pool" },
  { kind: "ok", text: "threadpool warm", mod: "jobs" },
  { kind: "ok", text: "job queue draining", mod: "metrics" },
  { kind: "ok", text: "metrics exporter up", mod: "done", stage: 4 },
  { kind: "cmd", html: cmdHtml("vix tests"), stage: 4 },
  { kind: "ok", text: "ecosystem validated", meta: "all green" },
];

function cmdHtml(bin, rest = "") {
  const tokens = rest
    ? " " +
      rest
        .split(" ")
        .map((t) =>
          t.startsWith("-")
            ? `<span class="t-flag">${t}</span>`
            : `<span class="t-arg">${t}</span>`,
        )
        .join(" ")
    : "";
  return `<span class="t-bin">${bin}</span>${tokens}`;
}

// ─── Reactive state ──────────────────────────────────────
const modules = ref(
  moduleDefs.map((m) => ({ ...m, state: "pending" })), // pending | loading | ready
);
const log = ref([]);
const pipeStage = ref(0);
const phase = ref("building"); // building | booting | validated

let lineId = 0;
let scriptIndex = 0;
let stepTimer = null;
let reducedMotion = false;

const visibleLog = computed(() => log.value.slice(-5));
const readyCount = computed(
  () => modules.value.filter((m) => m.state === "ready").length,
);

const phaseLabel = computed(() => {
  if (phase.value === "building") return "Building";
  if (phase.value === "booting") return "Booting";
  return "Validated";
});

// ─── Module helpers ──────────────────────────────────────
function setModuleState(id, state) {
  const m = modules.value.find((x) => x.id === id);
  if (m) m.state = state;
}

// When the script names a module, mark the *previous* loading one ready
// and start loading the named one.
function advanceModule(name) {
  if (name === "start") {
    phase.value = "booting";
    return;
  }
  if (name === "done") {
    // finalize anything still loading
    modules.value.forEach((m) => {
      if (m.state === "loading") m.state = "ready";
    });
    phase.value = "validated";
    return;
  }
  // mark current loading → ready, then load the next
  modules.value.forEach((m) => {
    if (m.state === "loading") m.state = "ready";
  });
  setModuleState(name, "loading");
}

// ─── Animation loop ──────────────────────────────────────
function pushLine(item) {
  lineId++;
  log.value.push({
    id: lineId,
    kind: item.kind,
    html: item.html || `<span>${item.text}</span>`,
    meta: item.meta,
  });
  if (log.value.length > 12) log.value.shift();
}

function reset() {
  modules.value = moduleDefs.map((m) => ({ ...m, state: "pending" }));
  log.value = [];
  pipeStage.value = 0;
  phase.value = "building";
  scriptIndex = 0;
}

function step() {
  const item = script[scriptIndex];
  pushLine(item);
  if (typeof item.stage === "number") pipeStage.value = item.stage;
  if (item.mod) advanceModule(item.mod);

  scriptIndex++;

  if (scriptIndex >= script.length) {
    // hold the finished state, then loop
    stepTimer = setTimeout(() => {
      reset();
      stepTimer = setTimeout(step, 600);
    }, 3400);
    return;
  }

  const delay = item.kind === "cmd" ? 850 : 620;
  stepTimer = setTimeout(step, delay);
}

// Render the fully-validated end state with no motion.
function fillStatic() {
  modules.value = moduleDefs.map((m) => ({ ...m, state: "ready" }));
  pipeStage.value = pipeline.length - 1;
  phase.value = "validated";
  lineId = 0;
  log.value = script.slice(-5).map((item) => {
    lineId++;
    return {
      id: lineId,
      kind: item.kind,
      html: item.html || `<span>${item.text}</span>`,
      meta: item.meta,
    };
  });
}

// ─── Lifecycle ───────────────────────────────────────────
onMounted(() => {
  reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    fillStatic();
    return;
  }
  stepTimer = setTimeout(step, 600);
});

onBeforeUnmount(() => {
  if (stepTimer) clearTimeout(stepTimer);
});
</script>

<style scoped>
.showcase {
  --c-bg: #0b2b22;
  --c-surface: #102f27;
  --c-panel: #143a30;
  --c-border: rgba(255, 255, 255, 0.11);
  --c-border-strong: rgba(255, 255, 255, 0.18);
  --c-text: #f2fff8;
  --c-muted: rgba(224, 246, 235, 0.72);
  --c-hint: rgba(224, 246, 235, 0.5);

  --c-green: #2fd49c;
  --c-green-soft: rgba(47, 212, 156, 0.14);
  --c-orange: var(--sd-orange, #c06a22);
  --c-orange-strong: var(--sd-orange-strong, #d57a2a);
  --c-blue: #7cc7ff;

  --mono: "SF Mono", "JetBrains Mono", "Fira Code", Consolas, monospace;

  position: relative;
  overflow: hidden;
  padding: 110px 0;
  background:
    radial-gradient(
      ellipse 60% 80% at 90% 50%,
      rgba(47, 212, 156, 0.06),
      transparent 60%
    ),
    linear-gradient(180deg, #0a261f 0%, #0b2b22 100%);
  border-bottom: 1px solid var(--c-border);
}

.showcase__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(
    ellipse 80% 60% at 50% 50%,
    black 0%,
    transparent 75%
  );
  pointer-events: none;
}

.showcase__glow {
  position: absolute;
  right: -180px;
  top: 8%;
  width: 620px;
  height: 620px;
  border-radius: 999px;
  background: radial-gradient(
    circle,
    rgba(47, 212, 156, 0.14),
    transparent 70%
  );
  pointer-events: none;
  filter: blur(20px);
}

.showcase__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(40px, 6vw, 90px);
  align-items: center;
  width: min(100% - 48px, 1320px);
  margin-inline: auto;
}

/* ============== LEFT COPY ============== */
.showcase__copy {
  max-width: 560px;
}

.showcase__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 26px;
  padding: 6px 14px;
  border: 1px solid rgba(47, 212, 156, 0.28);
  border-radius: 999px;
  background: rgba(47, 212, 156, 0.09);
  color: rgba(220, 255, 240, 0.92);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.showcase__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--c-green);
  box-shadow: 0 0 0 4px rgba(47, 212, 156, 0.15);
  animation: sd-pulse 2.4s ease-in-out infinite;
}

@keyframes sd-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 4px rgba(47, 212, 156, 0.15);
  }
  50% {
    box-shadow: 0 0 0 7px rgba(47, 212, 156, 0.04);
  }
}

.showcase__title {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(38px, 4.4vw, 60px);
  font-weight: 860;
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.showcase__title span {
  display: block;
  background: linear-gradient(125deg, #2fd49c 0%, #86efac 60%, #d9ffec 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.showcase__desc {
  max-width: 520px;
  margin: 24px 0 0;
  color: var(--c-muted);
  font-size: 16px;
  line-height: 1.72;
}

.showcase__bullets {
  list-style: none;
  margin: 30px 0 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.showcase__bullets li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.showcase__bullets svg {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  padding: 2px;
  border-radius: 999px;
  background: var(--c-green-soft);
  color: var(--c-green);
}

.showcase__bullets strong {
  display: block;
  color: var(--c-text);
  font-size: 14.5px;
  font-weight: 760;
  letter-spacing: -0.015em;
}

.showcase__bullets span {
  display: block;
  margin-top: 2px;
  color: var(--c-hint);
  font-size: 13px;
  line-height: 1.55;
}

.showcase__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.showcase__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 22px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease;
}

.showcase__btn:hover {
  transform: translateY(-1px);
}

.showcase__btn--primary {
  border: 1px solid transparent;
  background: linear-gradient(180deg, var(--c-orange-strong), var(--c-orange));
  color: #1a0a02;
  box-shadow: 0 8px 24px rgba(213, 122, 42, 0.25);
}
.showcase__btn--primary:hover {
  box-shadow: 0 12px 32px rgba(213, 122, 42, 0.38);
}

.showcase__btn--secondary {
  border: 1px solid var(--c-border-strong);
  background: rgba(255, 255, 255, 0.05);
  color: var(--c-text);
}
.showcase__btn--secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(47, 212, 156, 0.3);
}

.showcase__btn--ghost {
  border: 1px solid var(--c-border);
  background: transparent;
  color: var(--c-muted);
}
.showcase__btn--ghost:hover {
  color: var(--c-text);
  border-color: var(--c-border-strong);
  background: rgba(255, 255, 255, 0.03);
}

/* ============== RIGHT CONSOLE ============== */
.showcase__console {
  position: relative;
  border: 1px solid var(--c-border-strong);
  border-radius: 18px;
  background: linear-gradient(
    180deg,
    rgba(20, 65, 53, 0.98),
    rgba(12, 42, 34, 0.98)
  );
  box-shadow:
    0 40px 80px -20px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(47, 212, 156, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.con__chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--c-border);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
}

.con__dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.con__dot {
  width: 11px;
  height: 11px;
  border-radius: 999px;
}
.con__dot--red {
  background: #ff5f56;
}
.con__dot--yellow {
  background: #ffbd2e;
}
.con__dot--green {
  background: #27c93f;
}

.con__chrome-title {
  flex: 1;
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--c-hint);
  letter-spacing: 0.02em;
}

.con__chrome-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 11px;
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  transition: all 0.4s ease;
}

.con__chrome-pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: currentColor;
  animation: sd-pulse 1.5s ease-in-out infinite;
}

.con__chrome-pill--building {
  background: rgba(255, 184, 77, 0.14);
  color: #ffb84d;
}
.con__chrome-pill--booting {
  background: rgba(124, 199, 255, 0.14);
  color: var(--c-blue);
}
.con__chrome-pill--validated {
  background: var(--c-green-soft);
  color: var(--c-green);
}

.con__body {
  display: grid;
  gap: 14px;
  padding: 16px;
  background:
    radial-gradient(
      520px 260px at 75% 10%,
      rgba(47, 212, 156, 0.08),
      transparent 70%
    ),
    rgba(9, 35, 28, 0.34);
}

/* Pipeline */
.con__pipeline {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 8px;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  overflow-x: auto;
  scrollbar-width: none;
}
.con__pipeline::-webkit-scrollbar {
  display: none;
}

.con__stage {
  padding: 6px 11px;
  border-radius: 8px;
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.02);
  font-family: var(--mono);
  font-size: 11px;
  color: var(--c-hint);
  white-space: nowrap;
  transition: all 0.35s ease;
}

.con__stage--done {
  border-color: rgba(47, 212, 156, 0.28);
  background: rgba(47, 212, 156, 0.08);
  color: rgba(180, 240, 210, 0.85);
}
.con__stage--active {
  border-color: rgba(47, 212, 156, 0.5);
  background: rgba(47, 212, 156, 0.15);
  color: #eafff6;
  box-shadow: 0 0 0 1px rgba(47, 212, 156, 0.18);
}

.con__arrow {
  display: grid;
  place-items: center;
  color: var(--c-hint);
  opacity: 0.4;
  flex-shrink: 0;
  transition: all 0.35s ease;
}
.con__arrow--filled {
  color: var(--c-green);
  opacity: 0.85;
}

/* Modules header */
.con__modules-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text);
  padding: 0 2px;
}

.con__modules-count {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 600;
  color: var(--c-green);
}

/* Module grid */
.con__modules {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.con__module {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border-radius: 9px;
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.025);
  transition:
    border-color 0.4s ease,
    background 0.4s ease,
    opacity 0.4s ease;
}

.con__module--pending {
  opacity: 0.5;
}
.con__module--loading {
  border-color: rgba(124, 199, 255, 0.3);
  background: rgba(124, 199, 255, 0.05);
}
.con__module--ready {
  border-color: rgba(47, 212, 156, 0.28);
  background: rgba(47, 212, 156, 0.06);
}

.con__module-icon {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  flex-shrink: 0;
  color: var(--c-hint);
  background: rgba(255, 255, 255, 0.04);
  transition: color 0.4s ease;
}
.con__module--ready .con__module-icon {
  color: var(--c-green);
  background: var(--c-green-soft);
}
.con__module--loading .con__module-icon {
  color: var(--c-blue);
}

.con__module-meta {
  flex: 1;
  min-width: 0;
  display: grid;
  gap: 1px;
}
.con__module-meta strong {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--c-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.con__module-meta span {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--c-hint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.con__module-state {
  display: grid;
  place-items: center;
  width: 16px;
  flex-shrink: 0;
}
.con__module--ready .con__module-state {
  color: var(--c-green);
}

.con__pending-dot {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--c-hint);
  opacity: 0.5;
}

.con__spinner {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 1.6px solid rgba(124, 199, 255, 0.25);
  border-top-color: var(--c-blue);
  animation: sd-spin 0.7s linear infinite;
}

@keyframes sd-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Terminal log */
.con__log {
  display: grid;
  gap: 4px;
  height: 116px;
  align-content: end;
  padding: 12px;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  background: rgba(6, 24, 19, 0.6);
  font-family: var(--mono);
  font-size: 11px;
  overflow: hidden;
}

.con__log-row {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.4;
  animation: lineIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.con__log-prompt {
  color: var(--c-green);
  font-weight: 700;
  flex-shrink: 0;
}

.con__log-check {
  display: grid;
  place-items: center;
  color: var(--c-green);
  flex-shrink: 0;
}

.con__log-bullet {
  color: var(--c-hint);
  flex-shrink: 0;
}

.con__log-text {
  color: rgba(242, 255, 248, 0.88);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.con__log-row--log .con__log-text {
  color: var(--c-hint);
}
.con__log-row--ok .con__log-text {
  color: rgba(200, 255, 233, 0.86);
}

.con__log-text :deep(.t-bin) {
  color: var(--c-green);
  font-weight: 700;
}
.con__log-text :deep(.t-arg) {
  color: #eafff6;
}
.con__log-text :deep(.t-flag) {
  color: var(--c-blue);
}

.con__log-meta {
  margin-left: auto;
  font-size: 9.5px;
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--c-green-soft);
  color: var(--c-green);
  flex-shrink: 0;
}

@keyframes lineIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============== REDUCED MOTION ============== */
@media (prefers-reduced-motion: reduce) {
  .showcase__badge-dot,
  .con__chrome-pill-dot,
  .con__spinner,
  .con__log-row,
  .con__module {
    animation: none !important;
  }
  .con__spinner {
    border-top-color: rgba(124, 199, 255, 0.25);
  }
}

/* ============== RESPONSIVE ============== */
@media (max-width: 1100px) {
  .showcase__inner {
    grid-template-columns: 1fr;
  }
  .showcase__copy {
    max-width: 720px;
    margin-inline: auto;
  }
  .showcase__console {
    max-width: 720px;
    margin-inline: auto;
    width: 100%;
  }
}

@media (max-width: 760px) {
  .showcase {
    padding: 64px 0;
  }
  .showcase__inner {
    width: min(100% - 32px, 1320px);
  }
  .con__modules {
    grid-template-columns: 1fr;
  }
  .con__log {
    height: 100px;
  }
}

@media (max-width: 480px) {
  .con__chrome-title {
    display: none;
  }
}

/* ==========================================================================
   Softadastra Engine showcase override
   ========================================================================== */

.showcase {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 244, 224, 0.09);
}

.showcase::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 78% 42%,
      rgba(226, 154, 85, 0.14) 0%,
      transparent 36%
    ),
    radial-gradient(
      circle at 12% 68%,
      rgba(246, 222, 184, 0.09) 0%,
      transparent 34%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 30%,
      rgba(213, 122, 42, 0.14) 31%,
      rgba(226, 154, 85, 0.1) 38%,
      transparent 46%
    );

  opacity: 0.85;
}

.showcase::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.014) 0px,
    rgba(255, 255, 255, 0.014) 1px,
    transparent 1px,
    transparent 4px
  );

  opacity: 0.28;
  mix-blend-mode: soft-light;
}

.showcase__inner {
  position: relative;
  z-index: 2;
}

.showcase__grid {
  position: absolute;
  z-index: 1;
  opacity: 0.16;
  background-image:
    linear-gradient(rgba(255, 244, 224, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 244, 224, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
}

.showcase__glow {
  position: absolute;
  z-index: 1;
  right: -220px;
  top: 10%;
  width: 620px;
  height: 620px;
  opacity: 0.55;
  background: radial-gradient(
    circle,
    rgba(213, 122, 42, 0.14),
    transparent 70%
  );
  pointer-events: none;
  filter: blur(22px);
}

/* ==========================================================================
   Showcase colors override
   ========================================================================== */

.showcase__badge {
  border-color: rgba(226, 154, 85, 0.28);
  background: rgba(213, 122, 42, 0.12);
  color: rgba(255, 224, 190, 0.94);
}

.showcase__badge-dot {
  background: var(--c-orange);
  box-shadow: 0 0 0 4px rgba(213, 122, 42, 0.18);
}

.showcase__title {
  color: rgba(255, 248, 235, 0.96);
}

.showcase__title span {
  background: linear-gradient(125deg, #e29a55, #f6d6aa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.showcase__desc,
.showcase__bullets span {
  color: rgba(246, 232, 204, 0.68);
}

.showcase__bullets strong {
  color: rgba(255, 248, 235, 0.94);
}

.showcase__bullets svg {
  background: rgba(213, 122, 42, 0.13);
  color: var(--c-orange-strong);
}

.showcase__btn--primary {
  background: linear-gradient(180deg, #e29a55, #d57a2a);
  color: #102b23;
  box-shadow:
    0 10px 28px rgba(213, 122, 42, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.26);
}

.showcase__btn--secondary,
.showcase__btn--ghost {
  border-color: rgba(255, 244, 224, 0.14);
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.82);
  backdrop-filter: blur(14px);
}

.showcase__btn--secondary:hover,
.showcase__btn--ghost:hover {
  border-color: rgba(255, 244, 224, 0.24);
  background: rgba(255, 244, 224, 0.075);
  color: rgba(255, 248, 235, 0.96);
}

.showcase__console {
  border-color: rgba(255, 244, 224, 0.14);
  background: linear-gradient(
    180deg,
    rgba(22, 75, 60, 0.76),
    rgba(11, 43, 34, 0.74)
  );
  box-shadow:
    0 34px 90px rgba(0, 0, 0, 0.32),
    0 0 0 1px rgba(255, 244, 224, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
}

.con__chrome {
  border-bottom-color: rgba(255, 244, 224, 0.1);
  background: rgba(255, 244, 224, 0.055);
}

.con__body {
  background:
    radial-gradient(
      520px 260px at 72% 14%,
      rgba(213, 122, 42, 0.12),
      transparent 70%
    ),
    rgba(9, 35, 28, 0.3);
}

.con__pipeline,
.con__modules,
.con__log {
  border-color: rgba(255, 244, 224, 0.1);
}

.con__log {
  background: rgba(6, 24, 19, 0.58);
}
</style>
