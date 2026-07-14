<template>
  <section class="hero">
    <!-- Background effects -->
    <div class="hero__glow-1" aria-hidden="true" />
    <div class="hero__glow-2" aria-hidden="true" />

    <div class="hero__inner">
      <!-- ─── LEFT: Copy ─── -->
      <div class="hero__copy">
        <div class="hero__badge">
          <span class="hero__badge-dot" />
          The C++ Tooling Company
        </div>

        <h1 class="hero__title">
          <span class="hero__title-line"><span>Open tooling for</span></span>
          <span class="hero__title-line">
            <span>
              modern
              <span class="hero__title-accent">C++ development.</span>
            </span>
          </span>
        </h1>

        <p class="hero__desc">
          Softadastra builds and maintains focused tools that make C++ projects
          easier to create, build, test, diagnose, package, and distribute.
        </p>

        <div class="hero__actions">
          <a :href="links.vix" class="hero__btn hero__btn--primary">
            <span class="hero__btn-sheen" aria-hidden="true" />
            Explore Vix.cpp
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
          <a href="/ecosystem" class="hero__btn hero__btn--secondary">
            View ecosystem
          </a>

          <a
            :href="links.github"
            class="hero__btn hero__btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            GitHub
          </a>
        </div>

        <div class="hero__stats">
          <div class="hero__stat">
            <strong>Open</strong>
            <span>C++ foundation</span>
          </div>
          <div class="hero__stat-div" />
          <div class="hero__stat">
            <strong>Native</strong>
            <span>Build &amp; package</span>
          </div>
          <div class="hero__stat-div" />
          <div class="hero__stat">
            <strong>Focused</strong>
            <span>Developer tooling</span>
          </div>
        </div>
      </div>

      <!-- ─── RIGHT: Toolchain console ─── -->
      <div
        class="hero__console"
        role="img"
        :aria-label="`Developer console demonstrating the ${activeTool.binary} CLI workflow.`"
      >
        <!-- Window chrome -->
        <div class="con__chrome">
          <div class="con__dots">
            <span class="con__dot con__dot--red" />
            <span class="con__dot con__dot--yellow" />
            <span class="con__dot con__dot--green" />
          </div>

          <!-- Tool tabs: which CLI is running -->
          <div class="con__tabs" role="presentation">
            <button
              v-for="tool in tools"
              :key="tool.id"
              type="button"
              class="con__tab"
              :class="{ 'con__tab--active': tool.id === activeToolId }"
              :data-accent="tool.accent"
              :aria-pressed="tool.id === activeToolId"
              @click="selectTool(tool.id)"
            >
              {{ tool.binary }}
            </button>
          </div>

          <div class="con__chrome-tag">{{ activeTool.context }}</div>
        </div>

        <!-- Console body -->
        <div class="con__body">
          <!-- Terminal -->
          <div class="con__terminal" aria-hidden="true">
            <div
              v-for="line in visibleLines"
              :key="line.id"
              class="con__line"
              :class="`con__line--${line.kind}`"
            >
              <span
                v-if="line.kind === 'cmd'"
                class="con__prompt"
                :data-accent="activeTool.accent"
                >{{ activeTool.prompt }}</span
              >
              <span
                v-else-if="line.kind === 'ok'"
                class="con__check con__check--pop"
                aria-hidden="true"
              >
                <svg viewBox="0 0 16 16" width="11" height="11" fill="none">
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                v-else-if="line.busy"
                class="con__spinner"
                :data-accent="activeTool.accent"
                aria-hidden="true"
              />
              <span v-else class="con__bullet" aria-hidden="true">›</span>

              <span class="con__text" v-html="line.html" />
              <span
                v-if="line.kind === 'cmd' && line.typing"
                class="con__caret"
                :data-accent="activeTool.accent"
              />
              <span v-if="line.meta" class="con__meta">{{ line.meta }}</span>
            </div>
            <div v-if="!typingActive" class="con__line con__line--cursor">
              <span class="con__prompt" :data-accent="activeTool.accent">{{
                activeTool.prompt
              }}</span>
              <span class="con__cursor" :data-accent="activeTool.accent" />
            </div>
          </div>

          <!-- Pipeline: the stages of the active tool -->
          <div
            class="con__pipeline"
            role="presentation"
            :aria-label="`${activeTool.binary} workflow stages`"
          >
            <template v-for="(stage, i) in activeTool.stages" :key="stage.id">
              <div
                class="con__stage"
                :data-accent="activeTool.accent"
                :class="{
                  'con__stage--active': i === activeStage,
                  'con__stage--done': i < activeStage,
                }"
              >
                <span class="con__stage-icon" v-html="stage.icon" />
                <span class="con__stage-label">{{ stage.label }}</span>
              </div>
              <span
                v-if="i < activeTool.stages.length - 1"
                class="con__arrow"
                :class="{ 'con__arrow--filled': i < activeStage }"
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

          <!-- Ecosystem map -->
          <div class="con__eco">
            <div class="con__eco-header">
              <span>Ecosystem</span>
              <span class="con__eco-root">built on Vix.cpp</span>
            </div>
            <div class="con__eco-grid">
              <div
                v-for="(node, i) in ecosystem"
                :key="node.id"
                class="con__node"
                :class="`con__node--${node.accent}`"
                :style="{ '--i': i }"
              >
                <div class="con__node-head">
                  <span class="con__node-name">{{ node.name }}</span>
                  <span class="con__node-pulse" />
                </div>
                <span class="con__node-desc">{{ node.desc }}</span>
              </div>
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

// ─── Shared SVG icons for pipeline stages ────────────────
const ICON = {
  run: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><path d="M4 3l8 5-8 5V3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  build:
    '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><path d="M2 6l6-3 6 3-6 3-6-3zM2 6v4l6 3 6-3V6" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  test: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check:
    '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  pack: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><path d="M8 2l5 2.5v5L8 12 3 9.5v-5L8 2zM3 4.5L8 7l5-2.5M8 7v5" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  store:
    '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><ellipse cx="8" cy="4" rx="5" ry="2.2" stroke="currentColor" stroke-width="1.3"/><path d="M3 4v8c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2V4" stroke="currentColor" stroke-width="1.3"/></svg>',
  sync: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><path d="M13 8a5 5 0 11-1.5-3.5L13 3v3h-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  node: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2 2"/></svg>',
  peers:
    '<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><circle cx="5" cy="6" r="2" stroke="currentColor" stroke-width="1.3"/><circle cx="11" cy="6" r="2" stroke="currentColor" stroke-width="1.3"/><path d="M2.5 13a2.5 2.5 0 015 0M8.5 13a2.5 2.5 0 015 0" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
};

// Escape user-facing text before it goes through v-html.
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Highlight a full command string: binary + args + flags.
function highlightCmd(parts, accentVar) {
  const [bin, ...restParts] = parts;
  const rest = restParts.join(" ");
  return (
    `<span class="t-bin" style="color:var(${accentVar})">${esc(bin)}</span> ` +
    rest
      .split(" ")
      .filter(Boolean)
      .map((tok) =>
        tok.startsWith("-")
          ? `<span class="t-flag">${esc(tok)}</span>`
          : `<span class="t-arg">${esc(tok)}</span>`,
      )
      .join(" ")
  );
}

// ─── The two real CLIs ───────────────────────────────────
const tools = [
  {
    id: "vix",
    binary: "vix",
    prompt: "$",
    context: "~/api",
    accent: "--c-green",
    stages: [
      { id: "new", label: "new", icon: ICON.run },
      { id: "build", label: "build", icon: ICON.build },
      { id: "tests", label: "tests", icon: ICON.test },
      { id: "check", label: "check", icon: ICON.check },
      { id: "pack", label: "pack", icon: ICON.pack },
    ],
    script: [
      { kind: "cmd", c: ["vix", "new", "api"], stage: 0 },
      { kind: "ok", text: "created project", meta: "api", stage: 0 },
      { kind: "cmd", c: ["vix", "install"], stage: 0 },
      { kind: "ok", text: "dependencies resolved", meta: "vix.lock", stage: 0 },
      { kind: "cmd", c: ["vix", "build", "--preset", "release"], stage: 1 },
      { kind: "log", text: "configuring toolchain…", busy: true, stage: 1 },
      { kind: "ok", text: "native binary linked", meta: "1.1s", stage: 1 },
      { kind: "cmd", c: ["vix", "tests"], stage: 2 },
      { kind: "ok", text: "42 passed", meta: "0 failed", stage: 2 },
      { kind: "cmd", c: ["vix", "check", "--tests"], stage: 3 },
      { kind: "ok", text: "no diagnostics", meta: "clean", stage: 3 },
      {
        kind: "cmd",
        c: ["vix", "pack", "--name", "api", "--version", "1.0.0"],
        stage: 4,
      },
      { kind: "ok", text: "packaged api@1.0.0", meta: ".vixpkg", stage: 4 },
    ],
  },
  {
    id: "softadastra",
    binary: "softadastra",
    prompt: "$",
    context: "engine",
    accent: "--c-orange",
    stages: [
      { id: "node", label: "node", icon: ICON.node },
      { id: "store", label: "store", icon: ICON.store },
      { id: "sync", label: "sync", icon: ICON.sync },
      { id: "peers", label: "peers", icon: ICON.peers },
    ],
    script: [
      { kind: "cmd", c: ["softadastra", "node", "info"], stage: 0 },
      { kind: "ok", text: "node-a · healthy", meta: "v0.1.0", stage: 0 },
      {
        kind: "cmd",
        c: ["softadastra", "store", "put", "app/name", "Softadastra"],
        stage: 1,
      },
      { kind: "ok", text: "stored app/name", meta: "created", stage: 1 },
      { kind: "cmd", c: ["softadastra", "store", "get", "app/name"], stage: 1 },
      { kind: "log", text: "value: Softadastra", stage: 1 },
      { kind: "cmd", c: ["softadastra", "sync", "status"], stage: 2 },
      { kind: "log", text: "outbox 3 · queued 3 · failed 0", stage: 2 },
      { kind: "cmd", c: ["softadastra", "sync", "tick", "--prune"], stage: 2 },
      { kind: "ok", text: "synced batch", meta: "pruned 2", stage: 2 },
      { kind: "cmd", c: ["softadastra", "peers"], stage: 3 },
      { kind: "ok", text: "node-b available", meta: "1 peer", stage: 3 },
    ],
  },
];

const ecosystem = [
  {
    id: "engine",
    name: "Softadastra Engine",
    desc: "Offline-first runtime layer for C++ apps",
    accent: "orange",
  },
  {
    id: "cnerium",
    name: "Cnerium",
    desc: "Backend reliability layer for Vix apps",
    accent: "green",
  },
  {
    id: "kordex",
    name: "Kordex",
    desc: "JS / TS runtime built on Vix.cpp",
    accent: "purple",
  },
  {
    id: "pico",
    name: "Pico",
    desc: "Real C++ backend proving Vix.cpp",
    accent: "blue",
  },
];

// ─── Reactive state ──────────────────────────────────────
const activeToolId = ref("vix");
const lines = ref([]);
const activeStage = ref(0);
const typingActive = ref(false);

let lineCounter = 0;
let stepTimer = null;
let typeTimer = null;
let scriptIndex = 0;
let reducedMotion = false;
let userPinned = false;

const activeTool = computed(
  () => tools.find((t) => t.id === activeToolId.value) || tools[0],
);
const visibleLines = computed(() => lines.value.slice(-7));

function clearTimers() {
  if (stepTimer) clearTimeout(stepTimer);
  if (typeTimer) clearTimeout(typeTimer);
  stepTimer = null;
  typeTimer = null;
}

// Mark any pending "busy" spinner line as settled.
function settleBusyLines() {
  for (const l of lines.value) if (l.busy) l.busy = false;
}

function pushLine(partial) {
  lineCounter++;
  const line = {
    id: lineCounter,
    kind: partial.kind,
    html: partial.html,
    meta: partial.meta,
    busy: !!partial.busy,
    typing: !!partial.typing,
  };
  lines.value.push(line);
  if (lines.value.length > 14) lines.value.shift();
  return line;
}

function resetTerminal(toToolId) {
  clearTimers();
  activeToolId.value = toToolId;
  lines.value = [];
  activeStage.value = 0;
  scriptIndex = 0;
  typingActive.value = false;
}

// ─── Character-by-character command typing ───────────────
function typeCommand(item, tool, onDone) {
  const full = item.c.join(" ");
  const line = pushLine({ kind: "cmd", html: "", typing: true });
  typingActive.value = true;
  let pos = 0;

  const tick = () => {
    pos++;
    line.html = `<span class="t-typing">${esc(full.slice(0, pos))}</span>`;
    if (pos >= full.length) {
      // Swap in the fully highlighted command.
      line.html = highlightCmd(item.c, tool.accent);
      line.typing = false;
      typingActive.value = false;
      onDone();
      return;
    }
    // Slight human jitter: 16–40ms per char.
    typeTimer = setTimeout(tick, 16 + Math.random() * 24);
  };

  typeTimer = setTimeout(tick, 120);
}

// ─── Animation loop ──────────────────────────────────────
function step() {
  const tool = activeTool.value;
  const item = tool.script[scriptIndex];
  scriptIndex++;

  const isLast = scriptIndex >= tool.script.length;

  const scheduleNext = () => {
    if (isLast) {
      const hold = 2600;
      stepTimer = setTimeout(() => {
        const next = userPinned
          ? tool
          : tools[(tools.indexOf(tool) + 1) % tools.length];
        resetTerminal(next.id);
        stepTimer = setTimeout(step, 500);
      }, hold);
      return;
    }
    const delay = item.kind === "cmd" ? 420 : item.busy ? 900 : 620;
    stepTimer = setTimeout(step, delay);
  };

  if (item.kind === "cmd") {
    settleBusyLines();
    if (typeof item.stage === "number") activeStage.value = item.stage;
    typeCommand(item, tool, scheduleNext);
    return;
  }

  settleBusyLines();
  pushLine({
    kind: item.kind,
    html: `<span>${esc(item.text)}</span>`,
    meta: item.meta,
    busy: item.busy,
  });
  if (typeof item.stage === "number") activeStage.value = item.stage;
  scheduleNext();
}

// ─── User interaction ────────────────────────────────────
function selectTool(id) {
  userPinned = true;
  resetTerminal(id);

  if (reducedMotion) {
    fillStatic(activeTool.value);
    return;
  }
  stepTimer = setTimeout(step, 350);
}

function fillStatic(tool) {
  lines.value = tool.script.map((item) => {
    lineCounter++;
    return {
      id: lineCounter,
      kind: item.kind,
      html:
        item.kind === "cmd"
          ? highlightCmd(item.c, tool.accent)
          : `<span>${esc(item.text)}</span>`,
      meta: item.meta,
      busy: false,
      typing: false,
    };
  });
  activeStage.value = tool.stages.length - 1;
  typingActive.value = false;
}

// ─── Lifecycle ───────────────────────────────────────────
onMounted(() => {
  reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    fillStatic(activeTool.value);
    return;
  }

  stepTimer = setTimeout(step, 700);
});

onBeforeUnmount(clearTimers);
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
   Design tokens — Softadastra identity
   Deep green base · warm amber accent · sand highlights
═══════════════════════════════════════════════════════ */
.hero {
  --c-bg: #111417;
  --c-border: rgba(255, 255, 255, 0.12);
  --c-border-md: rgba(255, 255, 255, 0.22);

  --c-text: #f4f7f5;
  --c-muted: rgba(226, 232, 228, 0.76);
  --c-hint: rgba(226, 232, 228, 0.56);

  --c-green: var(--sd-orange);
  --c-green-dim: rgba(216, 111, 31, 0.16);
  --c-orange: var(--sd-orange);
  --c-orange-deep: var(--sd-orange-dark);
  --c-orange-dim: rgba(213, 122, 42, 0.16);
  --c-sand: var(--sd-orange-strong);
  --c-purple: #d3b4ff;
  --c-purple-dim: rgba(211, 180, 255, 0.16);
  --c-blue: #7cc7ff;
  --c-blue-dim: rgba(124, 199, 255, 0.16);

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-xl: 24px;

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --mono: "SF Mono", "Fira Code", "JetBrains Mono", ui-monospace, monospace;

  position: relative;
  overflow: hidden;
  padding: 42px 0 72px;
  background: var(--sd-bg);
  border-bottom: 1px solid var(--sd-border);
}

/* Sunbeam background layers */
.hero::before,
.hero::after {
  content: none;
}

.hero__glow-1,
.hero__glow-2 {
  display: none;
}

/* ─── Layout ─────────────────────────────────────────── */
.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(40px, 5vw, 80px);
  align-items: center;
  width: min(100% - 48px, 1300px);
  margin-inline: auto;
}

/* ══════════════════════════════════════════════════════
   LEFT — Copy (orchestrated entrance)
══════════════════════════════════════════════════════ */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 26px;
  padding: 6px 14px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-raised);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--sd-orange-dark);
  text-transform: uppercase;
  animation: fadeUp 0.6s var(--ease-out) 0.05s both;
}

.hero__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
  animation: dotPulse 2s ease-in-out infinite;
}

/* Line-by-line masked title reveal */
.hero__title {
  margin: 0 0 22px;
  font-size: clamp(42px, 4.8vw, 64px);
  font-weight: 860;
  line-height: 1.04;
  letter-spacing: -0.055em;
  color: var(--sd-text);
}

.hero__title-line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.08em;
  margin-bottom: -0.08em;
}

.hero__title-line > span {
  display: block;
  animation: lineReveal 0.85s var(--ease-out) both;
}

.hero__title-line:nth-child(1) > span {
  animation-delay: 0.12s;
}
.hero__title-line:nth-child(2) > span {
  animation-delay: 0.24s;
}

.hero__title-accent {
  color: var(--sd-orange-dark);
}

.hero__desc {
  max-width: 520px;
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 1.72;
  color: var(--sd-text-soft);
  animation: fadeUp 0.7s var(--ease-out) 0.34s both;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
  animation: fadeUp 0.7s var(--ease-out) 0.44s both;
}

.hero__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease;
}

.hero__btn:hover {
  transform: translateY(-1px);
}
.hero__btn:active {
  transform: translateY(0);
}
.hero__btn:focus-visible {
  outline: 2px solid var(--c-sand);
  outline-offset: 2px;
}

.hero__btn--primary {
  border: 1px solid var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.hero__btn--primary:hover {
  background: var(--sd-orange-dark);
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.hero__btn-sheen {
  display: none;
}

.hero__btn--secondary,
.hero__btn--ghost {
  border: 1px solid var(--sd-border-strong);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
}

.hero__btn--secondary:hover,
.hero__btn--ghost:hover {
  border-color: var(--sd-border-strong);
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 0 0;
  border-top: 1px solid var(--sd-border);
  animation: fadeUp 0.7s var(--ease-out) 0.54s both;
}

.hero__stat {
  display: grid;
  gap: 3px;
}

.hero__stat strong {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--sd-text);
}

.hero__stat span {
  font-size: 11px;
  color: var(--sd-text-muted);
  font-family: var(--mono);
  letter-spacing: 0.02em;
}

.hero__stat-div {
  width: 1px;
  height: 28px;
  background: var(--sd-border);
}

/* ══════════════════════════════════════════════════════
   RIGHT — Toolchain console
══════════════════════════════════════════════════════ */
.hero__console {
  animation: consoleIn 0.9s var(--ease-out) 0.3s both;
  border-radius: var(--radius-xl);
  border: 1px solid var(--sd-border);
  background: linear-gradient(180deg, #202428, #111417);
  box-shadow: var(--sd-shadow-soft);
  overflow: hidden;
}

/* Window chrome */
.con__chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.055);
}

.con__dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.con__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
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

/* Tool tabs */
.con__tabs {
  display: flex;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.con__tab {
  appearance: none;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.02);
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--c-hint);
  transition: all 0.25s ease;
}
.con__tab:hover {
  color: var(--sd-text);
  border-color: var(--c-border-md);
}
.con__tab:focus-visible {
  outline: 2px solid var(--c-sand);
  outline-offset: 2px;
}

.con__tab--active[data-accent="--c-green"] {
  color: #eafff6;
  border-color: rgba(216, 111, 31, 0.5);
  background: rgba(216, 111, 31, 0.14);
}
.con__tab--active[data-accent="--c-orange"] {
  color: #fff3e8;
  border-color: rgba(226, 154, 85, 0.5);
  background: rgba(213, 122, 42, 0.14);
}

.con__chrome-tag {
  flex-shrink: 0;
  font-size: 10.5px;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--c-border);
  color: var(--c-hint);
  font-family: var(--mono);
}

/* Console body */
.con__body {
  display: grid;
  gap: 14px;
  padding: 16px;
  background:
    radial-gradient(
      520px 260px at 72% 14%,
      rgba(213, 122, 42, 0.12),
      transparent 70%
    ),
    rgba(9, 35, 28, 0.3);
}

/* Terminal */
.con__terminal {
  display: grid;
  gap: 5px;
  height: 200px;
  align-content: end;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  background: rgba(6, 24, 19, 0.58);
  font-family: var(--mono);
  font-size: 12px;
  overflow: hidden;
}

.con__line {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.4;
  animation: lineIn 0.3s var(--ease-out) both;
}

.con__prompt {
  font-weight: 700;
  flex-shrink: 0;
}
.con__prompt[data-accent="--c-green"] {
  color: var(--c-green);
}
.con__prompt[data-accent="--c-orange"] {
  color: var(--c-orange);
}

.con__check {
  display: grid;
  place-items: center;
  color: var(--c-green);
  flex-shrink: 0;
}
.con__check--pop {
  animation: checkPop 0.35s var(--ease-out) both;
}

.con__bullet {
  color: var(--c-hint);
  flex-shrink: 0;
}

/* Rotating arc spinner for in-progress log lines */
.con__spinner {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.6px solid rgba(255, 255, 255, 0.16);
  border-top-color: var(--c-green);
  animation: spin 0.7s linear infinite;
}
.con__spinner[data-accent="--c-orange"] {
  border-top-color: var(--c-orange);
}

.con__text {
  color: rgba(242, 255, 248, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.con__line--log .con__text {
  color: var(--c-hint);
}
.con__line--ok .con__text {
  color: rgba(200, 255, 233, 0.86);
}

/* Syntax tokens (set via v-html) */
.con__text :deep(.t-bin) {
  font-weight: 700;
}
.con__text :deep(.t-arg) {
  color: #eafff6;
}
.con__text :deep(.t-flag) {
  color: var(--c-blue);
}
.con__text :deep(.t-typing) {
  color: #eafff6;
}

.con__meta {
  margin-left: auto;
  font-size: 10px;
  padding: 1px 7px;
  border-radius: 999px;
  background: rgba(216, 111, 31, 0.12);
  color: var(--c-green);
  flex-shrink: 0;
  animation: metaIn 0.3s var(--ease-out) both;
}

/* Caret shown while a command is being typed */
.con__caret {
  display: inline-block;
  width: 7px;
  height: 13px;
  margin-left: -4px;
  background: var(--c-green);
  flex-shrink: 0;
}
.con__caret[data-accent="--c-orange"] {
  background: var(--c-orange);
}

.con__cursor {
  display: inline-block;
  width: 7px;
  height: 14px;
  background: var(--c-green);
  animation: blink 1.1s step-end infinite;
}
.con__cursor[data-accent="--c-orange"] {
  background: var(--c-orange);
}

/* Pipeline */
.con__pipeline {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  overflow-x: auto;
  scrollbar-width: none;
}
.con__pipeline::-webkit-scrollbar {
  display: none;
}

.con__stage {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.02);
  font-family: var(--mono);
  font-size: 11px;
  color: var(--c-hint);
  white-space: nowrap;
  transition: all 0.35s ease;
}

.con__stage-icon {
  display: grid;
  place-items: center;
  opacity: 0.7;
}

/* Active stage gets a soft breathing glow */
.con__stage--active {
  animation: stageBreath 2.2s ease-in-out infinite;
}

/* Green-accent tool (vix) */
.con__stage[data-accent="--c-green"].con__stage--done {
  border-color: rgba(216, 111, 31, 0.28);
  background: var(--sd-accent-bg-soft);
  color: rgba(180, 240, 210, 0.85);
}
.con__stage[data-accent="--c-green"].con__stage--done .con__stage-icon {
  opacity: 1;
  color: var(--c-green);
}
.con__stage[data-accent="--c-green"].con__stage--active {
  border-color: rgba(216, 111, 31, 0.5);
  background: rgba(216, 111, 31, 0.15);
  color: #eafff6;
  box-shadow: 0 0 0 1px rgba(216, 111, 31, 0.18);
}
.con__stage[data-accent="--c-green"].con__stage--active .con__stage-icon {
  opacity: 1;
  color: var(--c-green);
}

/* Orange-accent tool (softadastra) */
.con__stage[data-accent="--c-orange"].con__stage--done {
  border-color: rgba(226, 154, 85, 0.28);
  background: rgba(213, 122, 42, 0.08);
  color: rgba(255, 220, 190, 0.85);
}
.con__stage[data-accent="--c-orange"].con__stage--done .con__stage-icon {
  opacity: 1;
  color: var(--c-orange);
}
.con__stage[data-accent="--c-orange"].con__stage--active {
  border-color: rgba(226, 154, 85, 0.5);
  background: rgba(213, 122, 42, 0.15);
  color: #fff3e8;
  box-shadow: 0 0 0 1px rgba(226, 154, 85, 0.18);
}
.con__stage[data-accent="--c-orange"].con__stage--active .con__stage-icon {
  opacity: 1;
  color: var(--c-orange);
}

.con__arrow {
  display: grid;
  place-items: center;
  color: var(--c-hint);
  opacity: 0.4;
  flex-shrink: 0;
  transition:
    color 0.35s ease,
    opacity 0.35s ease;
}
.con__arrow--filled {
  color: var(--sd-text-soft);
  opacity: 0.9;
}

/* Ecosystem map */
.con__eco {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
}

.con__eco-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid var(--c-border);
  font-size: 11px;
  font-weight: 600;
  color: var(--sd-text);
}

.con__eco-root {
  font-size: 9.5px;
  font-weight: 500;
  color: var(--c-green);
  font-family: var(--mono);
}

.con__eco-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 10px;
}

.con__node {
  display: grid;
  gap: 4px;
  padding: 9px 11px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--c-border);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;
  animation: fadeUp 0.5s var(--ease-out) calc(0.7s + var(--i, 0) * 0.08s) both;
}
.con__node:hover {
  border-color: var(--c-border-md);
  transform: translateY(-1px);
}

.con__node-head {
  display: flex;
  align-items: center;
  gap: 6px;
}

.con__node-name {
  flex: 1;
  font-size: 11.5px;
  font-weight: 700;
  color: var(--sd-text);
}

.con__node-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  animation: dotPulse 2.4s ease-in-out infinite;
}

.con__node-desc {
  font-size: 9.5px;
  line-height: 1.45;
  color: var(--c-hint);
  font-family: var(--mono);
}

.con__node--green .con__node-pulse {
  background: var(--c-green);
  box-shadow: 0 0 7px var(--c-green-dim);
}
.con__node--orange .con__node-pulse {
  background: var(--c-orange);
  box-shadow: 0 0 7px var(--c-orange-dim);
}
.con__node--purple .con__node-pulse {
  background: var(--c-purple);
  box-shadow: 0 0 7px var(--c-purple-dim);
}
.con__node--blue .con__node-pulse {
  background: var(--c-blue);
  box-shadow: 0 0 7px var(--c-blue-dim);
}

.con__node--green {
  border-color: rgba(216, 111, 31, 0.2);
}
.con__node--orange {
  border-color: rgba(226, 154, 85, 0.2);
}
.con__node--purple {
  border-color: rgba(211, 180, 255, 0.2);
}
.con__node--blue {
  border-color: rgba(124, 199, 255, 0.2);
}

/* ══════════════════════════════════════════════════════
   Keyframes
══════════════════════════════════════════════════════ */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes lineReveal {
  from {
    opacity: 0;
    transform: translateY(105%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes consoleIn {
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.975);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes glowDrift {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-24px, 18px);
  }
}

@keyframes dotPulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
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

@keyframes metaIn {
  from {
    opacity: 0;
    transform: translateX(6px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes checkPop {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  60% {
    transform: scale(1.25);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes stageBreath {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.18);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* ══════════════════════════════════════════════════════
   Reduced motion
══════════════════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .hero__badge,
  .hero__desc,
  .hero__actions,
  .hero__stats,
  .hero__console,
  .hero__title-line > span,
  .hero__glow-1,
  .hero__glow-2,
  .con__line,
  .con__meta,
  .con__check--pop,
  .con__stage--active,
  .con__node,
  .hero__badge-dot,
  .con__node-pulse,
  .con__spinner,
  .con__cursor {
    animation: none !important;
  }
  .hero__btn-sheen {
    display: none;
  }
  .con__cursor {
    opacity: 1;
  }
}

/* ══════════════════════════════════════════════════════
   Responsive
══════════════════════════════════════════════════════ */
@media (max-width: 1100px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero__console {
    max-width: 720px;
    margin-inline: auto;
    width: 100%;
  }
}

@media (max-width: 760px) {
  .hero {
    padding: 40px 0 48px;
  }
  .hero__inner {
    width: min(100% - 32px, 1300px);
    gap: 40px;
  }
  .hero__title {
    font-size: clamp(36px, 10vw, 52px);
  }
  .hero__desc {
    font-size: 15px;
  }
  .con__terminal {
    height: 176px;
    font-size: 11px;
  }
  .con__chrome-tag {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero__stat-div {
    display: none;
  }
  .hero__stats {
    flex-wrap: wrap;
    gap: 16px 24px;
  }
  .con__eco-grid {
    grid-template-columns: 1fr;
  }
  .con__tabs {
    justify-content: flex-start;
  }
}
</style>
