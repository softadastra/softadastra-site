<template>
  <section class="hero">
    <!-- Background effects -->
    <div class="hero__grid" aria-hidden="true" />
    <div class="hero__glow-1" aria-hidden="true" />
    <div class="hero__glow-2" aria-hidden="true" />

    <div class="hero__inner">
      <!-- ─── LEFT: Copy ─── -->
      <div class="hero__copy">
        <div class="hero__badge">
          <span class="hero__badge-dot" />
          Local-first infrastructure
        </div>

        <h1 class="hero__title">
          Build apps that keep<br />
          working
          <span class="hero__title-accent">offline.</span>
        </h1>

        <p class="hero__desc">
          Softadastra builds open infrastructure, runtimes, tools, and cloud
          products for applications that must keep working when the network
          fails.
        </p>

        <div class="hero__actions">
          <a :href="links.docs" class="hero__btn hero__btn--primary">
            Explore docs
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
          <a :href="links.business" class="hero__btn hero__btn--secondary">
            Softadastra Cloud
          </a>
        </div>

        <div class="hero__stats">
          <div class="hero__stat">
            <strong>100%</strong>
            <span>Offline reads</span>
          </div>
          <div class="hero__stat-div" />
          <div class="hero__stat">
            <strong>Durable</strong>
            <span>Write-ahead log</span>
          </div>
          <div class="hero__stat-div" />
          <div class="hero__stat">
            <strong>Auto</strong>
            <span>Sync &amp; resolve</span>
          </div>
        </div>
      </div>

      <!-- ─── RIGHT: Dashboard ─── -->
      <div
        class="hero__dashboard"
        role="img"
        aria-label="Live dashboard: app continues working when network fails"
      >
        <!-- Window chrome -->
        <div class="dash__chrome">
          <div class="dash__dots">
            <span class="dash__dot dash__dot--red" />
            <span class="dash__dot dash__dot--yellow" />
            <span class="dash__dot dash__dot--green" />
          </div>
          <div class="dash__chrome-title">
            Softadastra — Infrastructure Console
          </div>
          <div
            class="dash__status-pill"
            :class="`dash__status-pill--${currentPhase}`"
          >
            <span class="dash__status-dot" />
            {{ statusLabel }}
          </div>
        </div>

        <!-- Dashboard body -->
        <div class="dash__body">
          <!-- Sidebar -->
          <nav class="dash__sidebar" aria-label="Console navigation">
            <div
              v-for="item in sidebarItems"
              :key="item.id"
              class="dash__sb-item"
              :class="{ 'dash__sb-item--active': item.id === 'overview' }"
            >
              <component
                :is="'svg'"
                v-html="item.icon"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              />
              {{ item.label }}
            </div>
          </nav>

          <!-- Main content -->
          <div class="dash__main">
            <!-- Stat cards -->
            <div class="dash__cards">
              <div class="dash__card dash__card--green">
                <span class="dash__card-label">Offline reads</span>
                <strong class="dash__card-val">100%</strong>
                <span class="dash__card-sub">Always available</span>
              </div>
              <div class="dash__card dash__card--amber">
                <span class="dash__card-label">Queued writes</span>
                <strong class="dash__card-val">{{ queuedCount }}</strong>
                <span class="dash__card-sub">Pending sync</span>
              </div>
              <div class="dash__card dash__card--purple">
                <span class="dash__card-label">WAL engine</span>
                <strong class="dash__card-val">Durable</strong>
                <span class="dash__card-sub">Write-ahead log</span>
              </div>
            </div>

            <!-- Animation panel -->
            <div class="dash__anim-panel">
              <!-- App node -->
              <div class="dash__app-node">
                <div class="dash__app-header">
                  <div class="dash__app-icon">
                    <img src="/logo.svg" alt="" width="18" height="18" />
                  </div>
                  <div class="dash__app-meta">
                    <strong>Your app</strong>
                    <span>Local-first</span>
                  </div>
                  <span class="dash__app-pulse" />
                </div>

                <!-- Log -->
                <div
                  class="dash__log"
                  aria-live="polite"
                  aria-label="Operation log"
                >
                  <div
                    v-for="(entry, i) in visibleLog"
                    :key="entry.id"
                    class="dash__log-row"
                    :class="{
                      'dash__log-row--queued': entry.queued && !entry.synced,
                      'dash__log-row--synced': entry.synced,
                    }"
                  >
                    <span class="dash__log-icon" aria-hidden="true">
                      <svg
                        v-if="entry.synced"
                        viewBox="0 0 16 16"
                        width="10"
                        height="10"
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
                      <svg
                        v-else-if="entry.queued"
                        viewBox="0 0 16 16"
                        width="10"
                        height="10"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="5"
                          stroke="currentColor"
                          stroke-width="1.6"
                        />
                        <path
                          d="M8 5v3l1.5 1.5"
                          stroke="currentColor"
                          stroke-width="1.4"
                          stroke-linecap="round"
                        />
                      </svg>
                      <svg v-else viewBox="0 0 16 16" width="10" height="10">
                        <circle cx="8" cy="8" r="3" fill="currentColor" />
                      </svg>
                    </span>
                    <span class="dash__log-text">{{ entry.text }}</span>
                    <span class="dash__log-tag">write</span>
                  </div>
                </div>
              </div>

              <!-- Connection line -->
              <div class="dash__conn">
                <svg
                  class="dash__conn-svg"
                  viewBox="0 0 220 32"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="16"
                    x2="220"
                    y2="16"
                    stroke="rgba(255,255,255,0.08)"
                    stroke-width="1.5"
                    stroke-dasharray="4 4"
                  />
                  <line
                    v-if="
                      currentPhase === 'online' || currentPhase === 'syncing'
                    "
                    x1="0"
                    y1="16"
                    x2="220"
                    y2="16"
                    stroke="url(#flowGrad)"
                    stroke-width="2"
                    class="dash__flow-line"
                  />
                  <defs>
                    <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stop-color="transparent" />
                      <stop offset="50%" stop-color="rgba(74,222,128,0.85)" />
                      <stop offset="100%" stop-color="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  class="dash__conn-badge"
                  :class="`dash__conn-badge--${currentPhase}`"
                >
                  <span v-if="currentPhase === 'offline'">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 2l12 12M5 9a4 4 0 016-1M2.5 6.5a8 8 0 0110-1"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    Network down
                  </span>
                  <span v-else-if="currentPhase === 'syncing'">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="dash__spin"
                      aria-hidden="true"
                    >
                      <path
                        d="M13 8a5 5 0 11-1.5-3.5L13 3v3h-3"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Syncing {{ queuedCount }}
                  </span>
                  <span v-else>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All synced
                  </span>
                </div>
              </div>

              <!-- Cloud node -->
              <div class="dash__cloud" :class="`dash__cloud--${currentPhase}`">
                <svg
                  class="dash__cloud-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.5 18a4.5 4.5 0 010-9 6 6 0 0111.5 1.5A4 4 0 0117.5 18z"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <strong>Cloud</strong>
                  <span>{{ cloudStatus }}</span>
                </div>
              </div>
            </div>

            <!-- Activity feed -->
            <div class="dash__feed">
              <div class="dash__feed-header">
                Recent activity
                <span>Live</span>
              </div>
              <div class="dash__feed-list" aria-live="polite">
                <div
                  v-for="item in activityFeed"
                  :key="item.id"
                  class="dash__feed-row"
                >
                  <span
                    class="dash__feed-dot"
                    :style="{ background: item.color }"
                  />
                  <span class="dash__feed-text">{{ item.text }}</span>
                  <span class="dash__feed-time">{{ item.time }}</span>
                </div>
              </div>
            </div>

            <!-- Phase indicators -->
            <div class="dash__phases">
              <div
                v-for="phase in phases"
                :key="phase.id"
                class="dash__phase"
                :class="{ 'dash__phase--active': phase.id === currentPhase }"
              >
                <span class="dash__phase-dot" />
                {{ phase.label }}
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

// ─── Props / data ───────────────────────────────────────
const phases = [
  { id: "online", label: "Online" },
  { id: "offline", label: "Offline" },
  { id: "syncing", label: "Sync" },
];

const sidebarItems = [
  {
    id: "overview",
    label: "Overview",
    icon: '<path d="M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>',
  },
  {
    id: "storage",
    label: "Storage",
    icon: '<ellipse cx="8" cy="5" rx="5" ry="2.5" stroke="currentColor" stroke-width="1.4"/><path d="M3 5v6c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V5" stroke="currentColor" stroke-width="1.4"/>',
  },
  {
    id: "sync",
    label: "Sync",
    icon: '<path d="M13 8a5 5 0 11-1.5-3.5L13 3v3h-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: "metrics",
    label: "Metrics",
    icon: '<path d="M2 12l3-4 3 2 3-5 3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: "settings",
    label: "Settings",
    icon: '<circle cx="8" cy="8" r="2.5" stroke="currentColor" stroke-width="1.4"/><path d="M8 2v1M8 13v1M2 8h1M13 8h1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  },
];

const sampleActions = [
  { text: "Create order #4821" },
  { text: "Update profile name" },
  { text: "Add note to record" },
  { text: "Mark task complete" },
  { text: "Upload attachment" },
  { text: "Save draft message" },
  { text: "Delete record #299" },
  { text: "Patch settings blob" },
];

// ─── Reactive state ──────────────────────────────────────
const currentPhase = ref("online");
const log = ref([
  { id: 1, text: "Create order #4820", queued: false, synced: true },
  { id: 2, text: "Update profile name", queued: false, synced: true },
]);
const activityFeed = ref([
  {
    id: 1,
    text: "Sync handshake established",
    color: "#4ade80",
    time: "2s ago",
  },
  { id: 2, text: "WAL engine initialised", color: "#a78bfa", time: "5s ago" },
]);

let logCounter = 2;
let activityCounter = 10;
let phaseTimer = null;
let logTimer = null;

// ─── Computed ────────────────────────────────────────────
const statusLabel = computed(() => {
  if (currentPhase.value === "offline") return "Offline — writes durable";
  if (currentPhase.value === "syncing") return "Reconnecting…";
  return "Connected";
});

const cloudStatus = computed(() => {
  if (currentPhase.value === "offline") return "unreachable";
  if (currentPhase.value === "syncing") return "receiving";
  return "in sync";
});

const queuedCount = computed(
  () => log.value.filter((e) => e.queued && !e.synced).length,
);

const visibleLog = computed(() => log.value.slice(-4));

// ─── Methods ─────────────────────────────────────────────
function pushActivity(text, color) {
  activityCounter++;
  activityFeed.value.unshift({
    id: activityCounter,
    text,
    color,
    time: "just now",
  });
  if (activityFeed.value.length > 5) activityFeed.value.pop();
}

function addLogEntry() {
  const action = sampleActions[logCounter % sampleActions.length];
  logCounter++;
  const entry = {
    id: logCounter,
    text: action.text,
    queued: currentPhase.value === "offline",
    synced: currentPhase.value === "online",
  };
  log.value.push(entry);
  if (log.value.length > 8) log.value.shift();

  const label =
    currentPhase.value === "offline"
      ? `Queued: ${entry.text}`
      : `Synced: ${entry.text}`;
  const color = currentPhase.value === "offline" ? "#fbbf24" : "#4ade80";
  pushActivity(label, color);
}

function advancePhase() {
  if (currentPhase.value === "online") {
    currentPhase.value = "offline";
    pushActivity("Network disconnected", "#fbbf24");
  } else if (currentPhase.value === "offline") {
    currentPhase.value = "syncing";
    pushActivity("Reconnected — flushing WAL", "#a78bfa");
    const queued = log.value.filter((e) => e.queued && !e.synced);
    queued.forEach((entry, i) => {
      setTimeout(
        () => {
          entry.synced = true;
        },
        350 + i * 300,
      );
    });
  } else {
    currentPhase.value = "online";
    pushActivity("All changes synced", "#4ade80");
  }

  const next =
    currentPhase.value === "offline"
      ? 5000
      : currentPhase.value === "syncing"
        ? 3200
        : 3500;
  phaseTimer = setTimeout(advancePhase, next);
}

// ─── Lifecycle ───────────────────────────────────────────
onMounted(() => {
  phaseTimer = setTimeout(advancePhase, 3500);
  logTimer = setInterval(addLogEntry, 1600);
});

onBeforeUnmount(() => {
  if (phaseTimer) clearTimeout(phaseTimer);
  if (logTimer) clearInterval(logTimer);
});
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
   Design tokens
═══════════════════════════════════════════════════════ */
.hero {
  --c-bg: #060e0a;
  --c-surface: #0b1812;
  --c-panel: #0f2018;
  --c-border: rgba(255, 255, 255, 0.07);
  --c-border-md: rgba(255, 255, 255, 0.11);
  --c-text: #e8f5ee;
  --c-muted: rgba(200, 230, 214, 0.55);
  --c-hint: rgba(200, 230, 214, 0.32);

  --c-green: #4ade80;
  --c-green-dim: rgba(74, 222, 128, 0.12);
  --c-green-glow: rgba(74, 222, 128, 0.22);
  --c-amber: #fbbf24;
  --c-amber-dim: rgba(251, 191, 36, 0.1);
  --c-purple: #a78bfa;
  --c-purple-dim: rgba(167, 139, 250, 0.12);

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;

  position: relative;
  overflow: hidden;
  padding: 96px 0 80px;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-border);
}

/* ─── Background ────────────────────────────────────── */
.hero__grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.08) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
  opacity: 0.22;
  mask-image: radial-gradient(
    ellipse 75% 65% at 60% 40%,
    black 0%,
    transparent 80%
  );
  pointer-events: none;
}

.hero__glow-1 {
  position: absolute;
  top: -120px;
  right: -80px;
  width: 560px;
  height: 560px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(74, 222, 128, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.hero__glow-2 {
  position: absolute;
  bottom: -80px;
  left: 10%;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(167, 139, 250, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
}

/* ─── Layout ─────────────────────────────────────────── */
.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: clamp(40px, 5vw, 80px);
  align-items: center;
  width: min(100% - 48px, 1300px);
  margin-inline: auto;
}

/* ══════════════════════════════════════════════════════
   LEFT — Copy
══════════════════════════════════════════════════════ */
.hero__copy {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 26px;
  padding: 6px 14px;
  border: 1px solid rgba(74, 222, 128, 0.22);
  border-radius: 999px;
  background: rgba(74, 222, 128, 0.07);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: rgba(180, 240, 210, 0.9);
  text-transform: uppercase;
}

.hero__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c-green);
  box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.15);
  animation: dotPulse 2s ease-in-out infinite;
}

.hero__title {
  margin: 0 0 22px;
  font-size: clamp(42px, 4.8vw, 66px);
  font-weight: 860;
  line-height: 1.03;
  letter-spacing: -0.055em;
  color: var(--c-text);
}

.hero__title-accent {
  background: linear-gradient(125deg, #4ade80, #86efac);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__desc {
  max-width: 520px;
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 1.72;
  color: var(--c-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    opacity 0.18s ease;
}

.hero__btn:hover {
  transform: translateY(-1px);
}
.hero__btn:active {
  transform: translateY(0);
}

.hero__btn--primary {
  background: linear-gradient(
    180deg,
    var(--sd-orange-strong, #d57a2a),
    var(--sd-orange, #c06a22)
  );
  color: #061009;
}
.hero__btn--primary:hover {
  box-shadow:
    0 0 0 1px rgba(74, 222, 128, 0.5),
    0 12px 32px rgba(74, 222, 128, 0.28);
}

.hero__btn--secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--c-text);
  border: 1px solid var(--c-border-md);
}
.hero__btn--secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 0 0;
  border-top: 1px solid var(--c-border);
}

.hero__stat {
  display: grid;
  gap: 3px;
}

.hero__stat strong {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--c-text);
}

.hero__stat span {
  font-size: 11px;
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
  letter-spacing: 0.02em;
}

.hero__stat-div {
  width: 1px;
  height: 28px;
  background: var(--c-border);
}

/* ══════════════════════════════════════════════════════
   RIGHT — Dashboard
══════════════════════════════════════════════════════ */
.hero__dashboard {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.28s both;
  border-radius: var(--radius-xl);
  border: 1px solid var(--c-border-md);
  background: var(--c-surface);
  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  overflow: hidden;
}

/* Window chrome */
.dash__chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.02);
}

.dash__dots {
  display: flex;
  gap: 6px;
}

.dash__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dash__dot--red {
  background: #ff5f56;
}
.dash__dot--yellow {
  background: #ffbd2e;
}
.dash__dot--green {
  background: #27c93f;
}

.dash__chrome-title {
  flex: 1;
  font-size: 11.5px;
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
  letter-spacing: 0.02em;
}

.dash__status-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-family: "SF Mono", "Fira Code", monospace;
  font-weight: 600;
  transition: all 0.4s ease;
}

.dash__status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: dotPulse 1.4s ease-in-out infinite;
}

.dash__status-pill--online {
  background: var(--c-green-dim);
  color: var(--c-green);
}
.dash__status-pill--offline {
  background: var(--c-amber-dim);
  color: var(--c-amber);
}
.dash__status-pill--syncing {
  background: var(--c-purple-dim);
  color: var(--c-purple);
}

/* Dashboard body */
.dash__body {
  display: grid;
  grid-template-columns: 110px 1fr;
  height: 420px;
}

/* Sidebar */
.dash__sidebar {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 8px;
  border-right: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.015);
}

.dash__sb-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: var(--radius-sm);
  font-size: 11.5px;
  color: var(--c-hint);
  cursor: default;
  transition: all 0.2s;
}

.dash__sb-item svg {
  flex-shrink: 0;
  opacity: 0.6;
}

.dash__sb-item--active {
  background: rgba(74, 222, 128, 0.07);
  color: rgba(180, 240, 210, 0.9);
  font-weight: 600;
  border: 1px solid rgba(74, 222, 128, 0.15);
}
.dash__sb-item--active svg {
  opacity: 1;
}

/* Main panel */
.dash__main {
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  gap: 12px;
  padding: 14px;
  overflow: hidden;
}

/* Stat cards */
.dash__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.dash__card {
  display: grid;
  gap: 2px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  background: var(--c-panel);
}

.dash__card-label {
  font-size: 10px;
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
  letter-spacing: 0.03em;
}

.dash__card-val {
  font-size: 17px;
  font-weight: 780;
  letter-spacing: -0.02em;
  color: var(--c-text);
}

.dash__card-sub {
  font-size: 9.5px;
  color: var(--c-hint);
}

.dash__card--green .dash__card-val {
  color: var(--c-green);
}
.dash__card--amber .dash__card-val {
  color: var(--c-amber);
}
.dash__card--purple .dash__card-val {
  color: var(--c-purple);
}

/* Animation panel */
.dash__anim-panel {
  display: grid;
  grid-template-columns: 1fr 160px 120px;
  gap: 10px;
  align-items: center;
  overflow: hidden;
}

/* App node */
.dash__app-node {
  display: grid;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
}

.dash__app-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dash__app-icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  background: rgba(74, 222, 128, 0.1);
  display: grid;
  place-items: center;
}

.dash__app-meta {
  flex: 1;
  display: grid;
  gap: 1px;
}
.dash__app-meta strong {
  font-size: 12px;
  font-weight: 700;
  color: var(--c-text);
}
.dash__app-meta span {
  font-size: 9.5px;
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
}

.dash__app-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c-green);
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
  animation: appPulse 1.6s ease-in-out infinite;
}

/* Log */
.dash__log {
  display: grid;
  gap: 4px;
}

.dash__log-row {
  display: grid;
  grid-template-columns: 14px 1fr auto;
  gap: 7px;
  align-items: center;
  padding: 5px 8px;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.015);
  font-size: 10.5px;
  animation: logIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition:
    border-color 0.4s,
    background 0.4s;
}

.dash__log-row--queued {
  border-color: rgba(251, 191, 36, 0.2);
  background: rgba(251, 191, 36, 0.04);
}

.dash__log-row--synced {
  border-color: rgba(74, 222, 128, 0.18);
  background: rgba(74, 222, 128, 0.04);
}

.dash__log-icon {
  display: grid;
  place-items: center;
  color: var(--c-hint);
}
.dash__log-row--queued .dash__log-icon {
  color: var(--c-amber);
}
.dash__log-row--synced .dash__log-icon {
  color: var(--c-green);
}

.dash__log-text {
  color: rgba(230, 245, 238, 0.8);
  font-size: 10px;
  font-family: "SF Mono", "Fira Code", monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dash__log-tag {
  font-size: 8.5px;
  padding: 1px 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Connection */
.dash__conn {
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
}

.dash__conn-svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.dash__flow-line {
  animation: flowAnim 1.6s linear infinite;
}

.dash__conn-badge {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid;
  font-size: 9.5px;
  font-family: "SF Mono", "Fira Code", monospace;
  font-weight: 600;
  background: var(--c-surface);
  transition: all 0.4s ease;
  white-space: nowrap;
}

.dash__conn-badge--online {
  border-color: rgba(74, 222, 128, 0.3);
  color: var(--c-green);
}
.dash__conn-badge--offline {
  border-color: rgba(251, 191, 36, 0.3);
  color: var(--c-amber);
}
.dash__conn-badge--syncing {
  border-color: rgba(167, 139, 250, 0.3);
  color: var(--c-purple);
}

.dash__spin {
  animation: spin 1s linear infinite;
}

/* Cloud node */
.dash__cloud {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  background: var(--c-panel);
  transition: all 0.5s ease;
  overflow: hidden;
}

.dash__cloud--offline {
  opacity: 0.4;
  border-color: rgba(251, 191, 36, 0.2);
}
.dash__cloud--syncing {
  border-color: rgba(167, 139, 250, 0.25);
  background: rgba(167, 139, 250, 0.06);
}
.dash__cloud--online {
  border-color: rgba(74, 222, 128, 0.18);
}

.dash__cloud-icon {
  color: var(--c-muted);
}

.dash__cloud strong {
  display: block;
  font-size: 11.5px;
  font-weight: 700;
  color: var(--c-text);
}
.dash__cloud span {
  display: block;
  font-size: 9.5px;
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
  transition: color 0.4s;
}

/* Activity feed */
.dash__feed {
  background: var(--c-panel);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.dash__feed-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 12px;
  border-bottom: 1px solid var(--c-border);
  font-size: 11px;
  font-weight: 600;
  color: var(--c-text);
}

.dash__feed-header span {
  font-size: 9.5px;
  font-weight: 500;
  color: var(--c-green);
  font-family: "SF Mono", "Fira Code", monospace;
}

.dash__feed-list {
  display: grid;
}

.dash__feed-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-bottom: 1px solid var(--c-border);
  animation: logIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.dash__feed-row:last-child {
  border-bottom: none;
}

.dash__feed-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dash__feed-text {
  flex: 1;
  font-size: 10.5px;
  color: var(--c-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dash__feed-time {
  font-size: 9.5px;
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
  flex-shrink: 0;
}

/* Phases footer */
.dash__phases {
  display: flex;
  gap: 6px;
  padding-top: 4px;
}

.dash__phase {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 8px;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.015);
  font-size: 9.5px;
  color: var(--c-hint);
  font-family: "SF Mono", "Fira Code", monospace;
  font-weight: 600;
  transition: all 0.35s ease;
}

.dash__phase-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--c-hint);
  transition: all 0.35s ease;
}

.dash__phase--active {
  border-color: rgba(74, 222, 128, 0.28);
  background: rgba(74, 222, 128, 0.06);
  color: var(--c-green);
}
.dash__phase--active .dash__phase-dot {
  background: var(--c-green);
  box-shadow: 0 0 6px rgba(74, 222, 128, 0.6);
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

@keyframes appPulse {
  0%,
  100% {
    box-shadow: 0 0 12px rgba(74, 222, 128, 0.6);
  }
  50% {
    box-shadow: 0 0 4px rgba(74, 222, 128, 0.2);
    opacity: 0.7;
  }
}

@keyframes logIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes flowAnim {
  0% {
    stroke-dashoffset: 220;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.dash__body {
  display: grid;
  grid-template-columns: 110px 1fr;
  height: 480px;
}
.dash__main {
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  gap: 14px;
  padding: 16px;
  overflow: hidden;
}
/* ══════════════════════════════════════════════════════
   Responsive
══════════════════════════════════════════════════════ */
@media (max-width: 1100px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero__dashboard {
    max-width: 720px;
    margin-inline: auto;
    width: 100%;
  }
}

@media (max-width: 760px) {
  .hero {
    padding: 56px 0 48px;
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

  .dash__body {
    grid-template-columns: 1fr;
    height: auto;
  }
  .dash__sidebar {
    display: none;
  }
  .dash__main {
    padding: 12px;
    gap: 10px;
  }
  .dash__cards {
    grid-template-columns: 1fr 1fr;
  }
  .dash__anim-panel {
    grid-template-columns: 1fr;
  }
  .dash__conn {
    height: 36px;
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
  .dash__cards {
    grid-template-columns: 1fr;
  }
}
/* ==========================================================================
   Hero background override
   Softadastra green background
   ========================================================================== */

.hero {
  --c-bg: #0b2b22;
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.86)
  ) !important;
}
.hero__grid,
.hero__glow-1,
.hero__glow-2 {
  display: none !important;
}
/* ==========================================================================
   Dashboard color override
   Better contrast on Softadastra green background
   ========================================================================== */

.hero {
  --c-surface: #102f27;
  --c-panel: #143a30;
  --c-border: rgba(255, 255, 255, 0.11);
  --c-border-md: rgba(255, 255, 255, 0.18);
  --c-text: #f2fff8;
  --c-muted: rgba(224, 246, 235, 0.72);
  --c-hint: rgba(224, 246, 235, 0.5);

  --c-green: #2fd49c;
  --c-green-dim: rgba(47, 212, 156, 0.16);
  --c-green-glow: rgba(47, 212, 156, 0.28);

  --c-amber: #ffb84d;
  --c-amber-dim: rgba(255, 184, 77, 0.16);

  --c-purple: #d3b4ff;
  --c-purple-dim: rgba(211, 180, 255, 0.16);
}

.hero__dashboard {
  border-color: rgba(255, 255, 255, 0.18) !important;
  background: linear-gradient(
    180deg,
    rgba(20, 65, 53, 0.98),
    rgba(12, 42, 34, 0.98)
  ) !important;
  box-shadow:
    0 34px 80px rgba(0, 0, 0, 0.36),
    0 0 0 1px rgba(255, 255, 255, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}

.dash__chrome {
  border-bottom-color: rgba(255, 255, 255, 0.13) !important;
  background: rgba(255, 255, 255, 0.055) !important;
}

.dash__body {
  background:
    radial-gradient(
      520px 260px at 70% 20%,
      rgba(47, 212, 156, 0.1),
      transparent 70%
    ),
    rgba(9, 35, 28, 0.34);
}

.dash__sidebar {
  border-right-color: rgba(255, 255, 255, 0.12) !important;
  background: rgba(255, 255, 255, 0.045) !important;
}

.dash__sb-item {
  color: rgba(232, 250, 241, 0.56) !important;
}

.dash__sb-item--active {
  border-color: rgba(47, 212, 156, 0.34) !important;
  background: rgba(47, 212, 156, 0.13) !important;
  color: #eafff6 !important;
}

.dash__card,
.dash__app-node,
.dash__feed,
.dash__cloud,
.dash__phase {
  border-color: rgba(255, 255, 255, 0.13) !important;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.075),
    rgba(255, 255, 255, 0.035)
  ) !important;
}

.dash__card {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.dash__card-label,
.dash__card-sub,
.dash__app-meta span,
.dash__cloud span,
.dash__feed-text,
.dash__feed-time,
.dash__phase {
  color: rgba(232, 250, 241, 0.62) !important;
}

.dash__card-val,
.dash__app-meta strong,
.dash__cloud strong,
.dash__feed-header {
  color: #f2fff8 !important;
}

.dash__app-icon {
  border-color: rgba(47, 212, 156, 0.34) !important;
  background: rgba(47, 212, 156, 0.14) !important;
}

.dash__log-row {
  border-color: rgba(255, 255, 255, 0.12) !important;
  background: rgba(255, 255, 255, 0.045) !important;
}

.dash__log-text {
  color: rgba(242, 255, 248, 0.86) !important;
}

.dash__log-tag {
  background: rgba(255, 255, 255, 0.09) !important;
  color: rgba(242, 255, 248, 0.58) !important;
}

.dash__conn-badge {
  background: #12352c !important;
}

.dash__feed-header {
  border-bottom-color: rgba(255, 255, 255, 0.12) !important;
}

.dash__feed-row {
  border-bottom-color: rgba(255, 255, 255, 0.08) !important;
}

.dash__phase--active {
  border-color: rgba(47, 212, 156, 0.38) !important;
  background: rgba(47, 212, 156, 0.13) !important;
  color: var(--c-green) !important;
}
</style>
