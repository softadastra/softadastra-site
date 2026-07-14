<template>
  <div
    class="hpv"
    role="img"
    aria-label="Softadastra platform showing native C++ projects, package information, local build reports, and team operations"
  >
    <div class="hpv__grid-pattern" aria-hidden="true" />

    <div class="hpv__window">
      <div class="hpv__window-bar">
        <div class="hpv__window-brand">
          <span class="hpv__brand-mark">S</span>

          <div>
            <strong>Softadastra Cloud</strong>
            <small>Project operations</small>
          </div>
        </div>

        <div class="hpv__window-context">
          <span>softadastra</span>
          <svg
            viewBox="0 0 24 24"
            width="10"
            height="10"
            fill="none"
            stroke="currentColor"
            stroke-width="2.4"
            aria-hidden="true"
          >
            <path d="m9 5 7 7-7 7" />
          </svg>
          <strong>native-platform</strong>
        </div>

        <div class="hpv__window-user">
          <span aria-hidden="true" />
          GK
        </div>
      </div>

      <div class="hpv__dashboard">
        <aside class="hpv__sidebar" aria-hidden="true">
          <span class="hpv__sidebar-label">Workspace</span>

          <span class="hpv__nav hpv__nav--active">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
            Overview
          </span>

          <span class="hpv__nav">
            <svg viewBox="0 0 24 24">
              <path d="m12 3 9 5-9 5-9-5 9-5Z" />
              <path d="m3 12 9 5 9-5" />
              <path d="m3 16 9 5 9-5" />
            </svg>
            Projects
          </span>

          <span class="hpv__nav">
            <svg viewBox="0 0 24 24">
              <path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" />
              <path d="m3.5 8.3 8.5 4.8 8.5-4.8" />
            </svg>
            Packages
          </span>

          <span class="hpv__nav">
            <svg viewBox="0 0 24 24">
              <path d="M4 19V5" />
              <path d="M4 19h16" />
              <path d="m7 15 3-4 3 2 4-6" />
            </svg>
            Build reports
          </span>

          <span class="hpv__nav">
            <svg viewBox="0 0 24 24">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <rect x="4" y="18" width="16" height="3" rx="1" />
            </svg>
            Lockfiles
          </span>

          <span class="hpv__sidebar-label hpv__sidebar-label--team">
            Team
          </span>

          <span class="hpv__nav">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="8" r="3" />
              <path d="M3.5 20c.8-3 2.9-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
              <circle cx="17" cy="9" r="2.3" />
              <path d="M16 15.7c2.2.2 3.8 1.6 4.4 4.3" />
            </svg>
            Members
          </span>

          <span class="hpv__nav">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.7a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.4 2.7h4l.4-2.7a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z"
              />
            </svg>
            Settings
          </span>
        </aside>

        <main class="hpv__main">
          <div class="hpv__project-head">
            <div class="hpv__project-identity">
              <span class="hpv__project-mark">N</span>

              <div>
                <div class="hpv__project-title">
                  <h2>Native Platform</h2>
                  <span>Production</span>
                </div>

                <p>
                  Modern C++ backend with private packages and local build
                  reporting.
                </p>
              </div>
            </div>

            <button type="button" tabindex="-1">Open project</button>
          </div>

          <div class="hpv__metrics">
            <article>
              <span>Packages</span>
              <strong>24</strong>
              <small>3 updated</small>
            </article>

            <article>
              <span>Dependencies</span>
              <strong>47</strong>
              <small>Fully locked</small>
            </article>

            <article>
              <span>Last build</span>
              <strong>12.4s</strong>
              <small class="hpv__positive">Passed</small>
            </article>

            <article>
              <span>Toolchain</span>
              <strong>GCC 14</strong>
              <small>Linux x86_64</small>
            </article>
          </div>

          <div class="hpv__content-grid">
            <section class="hpv__panel">
              <header>
                <div>
                  <strong>Project activity</strong>
                  <span>main branch</span>
                </div>

                <small>Today</small>
              </header>

              <div
                v-for="operation in operations"
                :key="operation.title"
                class="hpv__operation"
              >
                <span
                  class="hpv__operation-icon"
                  :class="`hpv__operation-icon--${operation.kind}`"
                  aria-hidden="true"
                >
                  {{ operation.mark }}
                </span>

                <div>
                  <strong>{{ operation.title }}</strong>
                  <small>{{ operation.detail }}</small>
                </div>

                <span
                  class="hpv__status"
                  :class="`hpv__status--${operation.status}`"
                >
                  <i aria-hidden="true" />
                  {{ operation.label }}
                </span>

                <time>{{ operation.time }}</time>
              </div>
            </section>

            <section class="hpv__panel hpv__panel--packages">
              <header>
                <div>
                  <strong>Private packages</strong>
                  <span>Current lockfile</span>
                </div>

                <small>vix.lock</small>
              </header>

              <div v-for="pkg in packages" :key="pkg.name" class="hpv__package">
                <span>{{ pkg.mark }}</span>

                <div>
                  <strong>{{ pkg.name }}</strong>
                  <small>{{ pkg.description }}</small>
                </div>

                <code>{{ pkg.version }}</code>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>

    <div class="hpv__projects-card">
      <header>
        <div>
          <span>Active projects</span>
          <strong>3 environments</strong>
        </div>

        <small>Live</small>
      </header>

      <article
        v-for="project in projects"
        :key="project.name"
        class="hpv__project-row"
      >
        <span
          class="hpv__project-row-mark"
          :class="`hpv__project-row-mark--${project.kind}`"
          aria-hidden="true"
        >
          {{ project.mark }}
        </span>

        <div class="hpv__project-row-name">
          <strong>{{ project.name }}</strong>
          <small>{{ project.target }}</small>
        </div>

        <div class="hpv__project-row-stat">
          <strong>{{ project.packages }}</strong>
          <small>Packages</small>
        </div>

        <div class="hpv__project-row-stat">
          <strong>{{ project.duration }}</strong>
          <small>Build</small>
        </div>

        <span class="hpv__project-row-state">
          {{ project.state }}
        </span>
      </article>
    </div>

    <div class="hpv__performance-card">
      <header>
        <div>
          <span>Build duration</span>
          <strong>Release · main</strong>
        </div>

        <small>Last 7 builds</small>
      </header>

      <div class="hpv__performance-value">
        <strong>12.4s</strong>
        <span>18% faster</span>
      </div>

      <svg
        class="hpv__chart"
        viewBox="0 0 360 150"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="build-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.2" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
          </linearGradient>
        </defs>

        <line x1="0" y1="28" x2="360" y2="28" />
        <line x1="0" y1="74" x2="360" y2="74" />
        <line x1="0" y1="120" x2="360" y2="120" />

        <path
          class="hpv__chart-area"
          d="M0 98 C35 85 47 90 72 82 C101 72 122 78 145 68 C178 53 195 65 220 55 C248 45 266 50 290 37 C315 25 334 31 360 20 L360 150 L0 150 Z"
        />

        <path
          class="hpv__chart-line"
          d="M0 98 C35 85 47 90 72 82 C101 72 122 78 145 68 C178 53 195 65 220 55 C248 45 266 50 290 37 C315 25 334 31 360 20"
        />
      </svg>

      <div class="hpv__chart-labels">
        <span>Build 1</span>
        <span>Build 4</span>
        <span>Build 7</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const operations = [
  {
    mark: "B",
    kind: "build",
    title: "Release build completed",
    detail: "GCC 14 · linux-x86_64 · 0 warnings",
    label: "Passed",
    status: "success",
    time: "2m",
  },
  {
    mark: "P",
    kind: "package",
    title: "Package version published",
    detail: "softadastra/runtime@1.4.2",
    label: "Published",
    status: "success",
    time: "9m",
  },
  {
    mark: "L",
    kind: "lock",
    title: "Lockfile synchronized",
    detail: "47 dependencies · checksum verified",
    label: "Synced",
    status: "active",
    time: "18m",
  },
];

const packages = [
  {
    mark: "V",
    name: "vix/web",
    description: "HTTP server and routing",
    version: "2.7.5",
  },
  {
    mark: "R",
    name: "rix/core",
    description: "Application utilities",
    version: "0.9.1",
  },
  {
    mark: "S",
    name: "softadastra/runtime",
    description: "Durable local state",
    version: "1.4.2",
  },
];

const projects = [
  {
    mark: "A",
    kind: "api",
    name: "Atlas API",
    target: "C++23 · linux-x86_64",
    packages: "24",
    duration: "12.4s",
    state: "Passed",
  },
  {
    mark: "E",
    kind: "edge",
    name: "Edge Agent",
    target: "C++20 · linux-arm64",
    packages: "18",
    duration: "8.7s",
    state: "Passed",
  },
  {
    mark: "D",
    kind: "desktop",
    name: "Desktop Sync",
    target: "C++20 · windows-x64",
    packages: "31",
    duration: "15.2s",
    state: "Passed",
  },
];
</script>

<style scoped>
.hpv {
  position: relative;
  min-height: clamp(470px, 52vw, 630px);
  overflow: hidden;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 3px;
  background:
    radial-gradient(
      circle at 16% 5%,
      rgba(255, 191, 143, 0.32),
      transparent 32%
    ),
    radial-gradient(
      circle at 86% 12%,
      rgba(90, 131, 119, 0.26),
      transparent 33%
    ),
    linear-gradient(135deg, #3c2117 0%, #5c2f1d 48%, #173c33 100%);
  box-shadow:
    0 2px 5px rgba(15, 23, 42, 0.05),
    0 20px 55px rgba(15, 23, 42, 0.14);
}

.hpv::before {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(110deg, rgba(255, 255, 255, 0.08), transparent 38%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.14));
  content: "";
  pointer-events: none;
}

.hpv__grid-pattern {
  position: absolute;
  top: -20px;
  left: 13%;
  width: 58%;
  height: 47%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 8px 8px;
  mask-image: radial-gradient(circle at 50% 30%, #000, transparent 72%);
  opacity: 0.72;
  pointer-events: none;
}

/* Main application */

.hpv__window {
  position: absolute;
  top: 9%;
  left: 13%;
  width: 74%;
  height: 67%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 6px;
  background: #ffffff;
  box-shadow:
    0 28px 70px rgba(0, 0, 0, 0.34),
    0 8px 22px rgba(0, 0, 0, 0.2);
}

.hpv__window-bar {
  display: grid;
  grid-template-columns: minmax(150px, 0.8fr) minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  min-height: 43px;
  padding: 0 14px;
  border-bottom: 1px solid var(--sd-border);
  background: #ffffff;
}

.hpv__window-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.hpv__brand-mark {
  display: grid;
  width: 24px;
  height: 24px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 5px;
  background: var(--sd-orange);
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
}

.hpv__window-brand div {
  display: grid;
  min-width: 0;
  line-height: 1.1;
}

.hpv__window-brand strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 10.5px;
  font-weight: 750;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__window-brand small {
  color: var(--sd-text-muted);
  font-size: 8px;
}

.hpv__window-context {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 0;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 8.5px;
}

.hpv__window-context strong {
  overflow: hidden;
  color: var(--sd-text);
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__window-user {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 740;
}

.hpv__window-user span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--sd-green);
}

.hpv__dashboard {
  display: grid;
  grid-template-columns: 122px minmax(0, 1fr);
  height: calc(100% - 43px);
}

/* Sidebar */

.hpv__sidebar {
  display: grid;
  align-content: start;
  gap: 2px;
  padding: 12px 8px;
  border-right: 1px solid var(--sd-border);
  background: #fafafa;
}

.hpv__sidebar-label {
  margin: 0 7px 4px;
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  font-weight: 760;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hpv__sidebar-label--team {
  margin-top: 10px;
}

.hpv__nav {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 25px;
  padding: 0 7px;
  border-radius: 5px;
  color: var(--sd-text-muted);
  font-size: 8.5px;
  font-weight: 660;
}

.hpv__nav svg {
  width: 10px;
  height: 10px;
  flex: 0 0 auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hpv__nav--active {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

/* Project content */

.hpv__main {
  min-width: 0;
  overflow: hidden;
  padding: 16px;
  background: #ffffff;
}

.hpv__project-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.hpv__project-identity {
  display: flex;
  gap: 10px;
  min-width: 0;
}

.hpv__project-mark {
  display: grid;
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--sd-border);
  border-radius: 6px;
  background: #fafafa;
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 800;
}

.hpv__project-identity > div {
  min-width: 0;
}

.hpv__project-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
}

.hpv__project-title h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 750;
  letter-spacing: -0.025em;
}

.hpv__project-title span {
  padding: 2px 6px;
  border: 1px solid rgba(46, 125, 50, 0.18);
  border-radius: 999px;
  background: var(--sd-green-bg);
  color: var(--sd-green);
  font-size: 7px;
  font-weight: 750;
  text-transform: uppercase;
}

.hpv__project-identity p {
  margin: 3px 0 0;
  color: var(--sd-text-muted);
  font-size: 8.5px;
  line-height: 1.45;
}

.hpv__project-head button {
  flex: 0 0 auto;
  padding: 6px 9px;
  border: 1px solid var(--sd-border-strong);
  border-radius: 5px;
  background: #ffffff;
  color: var(--sd-text-soft);
  font-size: 8px;
  font-weight: 700;
}

.hpv__metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 14px;
  border-block: 1px solid var(--sd-border);
}

.hpv__metrics article {
  display: grid;
  gap: 2px;
  padding: 10px 10px 9px;
  border-right: 1px solid var(--sd-border);
}

.hpv__metrics article:first-child {
  padding-left: 0;
}

.hpv__metrics article:last-child {
  border-right: 0;
}

.hpv__metrics span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.8px;
  font-weight: 720;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hpv__metrics strong {
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 740;
}

.hpv__metrics small {
  color: var(--sd-text-muted);
  font-size: 7px;
}

.hpv__metrics .hpv__positive {
  color: var(--sd-green);
}

.hpv__content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(160px, 0.8fr);
  gap: 10px;
  margin-top: 12px;
}

.hpv__panel {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 6px;
  background: #ffffff;
}

.hpv__panel > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 9px;
  border-bottom: 1px solid var(--sd-border);
  background: #fafafa;
}

.hpv__panel > header div {
  display: grid;
  line-height: 1.25;
}

.hpv__panel > header strong {
  color: var(--sd-text);
  font-size: 8px;
  font-weight: 730;
}

.hpv__panel > header span,
.hpv__panel > header small {
  color: var(--sd-text-muted);
  font-size: 6.5px;
}

.hpv__operation {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 7px;
  padding: 7px 8px;
  border-bottom: 1px solid var(--sd-border);
}

.hpv__operation:last-child {
  border-bottom: 0;
}

.hpv__operation-icon {
  display: grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 4px;
  font-size: 7px;
  font-weight: 800;
}

.hpv__operation-icon--build {
  background: var(--sd-blue-bg);
  color: var(--sd-blue);
}

.hpv__operation-icon--package {
  background: var(--sd-purple-bg);
  color: var(--sd-purple);
}

.hpv__operation-icon--lock {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.hpv__operation > div {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.hpv__operation > div strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 7.5px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__operation > div small {
  overflow: hidden;
  color: var(--sd-text-muted);
  font-size: 6.3px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__status {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 5px;
  border-radius: 999px;
  font-size: 6.5px;
  font-weight: 700;
  white-space: nowrap;
}

.hpv__status i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
}

.hpv__status--success {
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.hpv__status--active {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.hpv__operation time {
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.hpv__package {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  padding: 8px;
  border-bottom: 1px solid var(--sd-border);
}

.hpv__package:last-child {
  border-bottom: 0;
}

.hpv__package > span {
  display: grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 4px;
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
  font-size: 7px;
  font-weight: 800;
}

.hpv__package > div {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.hpv__package strong {
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 7px;
}

.hpv__package small {
  overflow: hidden;
  color: var(--sd-text-muted);
  font-size: 6.3px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__package code {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

/* Floating projects */

.hpv__projects-card,
.hpv__performance-card {
  position: absolute;
  z-index: 3;
  overflow: hidden;
  border: 1px solid rgba(31, 31, 31, 0.09);
  border-radius: 6px;
  background: #ffffff;
  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.24),
    0 5px 15px rgba(0, 0, 0, 0.13);
}

.hpv__projects-card {
  bottom: 8%;
  left: 5%;
  width: 43%;
}

.hpv__projects-card > header,
.hpv__performance-card > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--sd-border);
  background: #ffffff;
}

.hpv__projects-card > header div,
.hpv__performance-card > header div {
  display: grid;
  line-height: 1.3;
}

.hpv__projects-card > header span,
.hpv__performance-card > header span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  font-weight: 720;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hpv__projects-card > header strong,
.hpv__performance-card > header strong {
  color: var(--sd-text);
  font-size: 9px;
  font-weight: 740;
}

.hpv__projects-card > header small,
.hpv__performance-card > header small {
  color: var(--sd-green);
  font-size: 7px;
  font-weight: 700;
}

.hpv__project-row {
  display: grid;
  grid-template-columns:
    auto
    minmax(0, 1fr)
    minmax(52px, auto)
    minmax(52px, auto)
    auto;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border-bottom: 1px solid var(--sd-border);
}

.hpv__project-row:last-child {
  border-bottom: 0;
}

.hpv__project-row-mark {
  display: grid;
  width: 27px;
  height: 27px;
  place-items: center;
  border-radius: 5px;
  font-size: 9px;
  font-weight: 800;
}

.hpv__project-row-mark--api {
  background: var(--sd-blue-bg);
  color: var(--sd-blue);
}

.hpv__project-row-mark--edge {
  background: var(--sd-cyan-bg);
  color: var(--sd-cyan);
}

.hpv__project-row-mark--desktop {
  background: var(--sd-purple-bg);
  color: var(--sd-purple);
}

.hpv__project-row-name,
.hpv__project-row-stat {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.hpv__project-row-name strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 8.5px;
  font-weight: 720;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__project-row-name small,
.hpv__project-row-stat small {
  color: var(--sd-text-muted);
  font-size: 6.3px;
}

.hpv__project-row-stat strong {
  color: var(--sd-orange);
  font-family: var(--sd-font-mono);
  font-size: 8px;
}

.hpv__project-row-state {
  padding: 3px 6px;
  border-radius: 999px;
  background: var(--sd-green-bg);
  color: var(--sd-green);
  font-size: 6.5px;
  font-weight: 720;
}

/* Floating performance chart */

.hpv__performance-card {
  right: 4%;
  bottom: 12%;
  width: 31%;
  padding-bottom: 10px;
}

.hpv__performance-value {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 11px 13px 0;
}

.hpv__performance-value strong {
  color: var(--sd-text);
  font-size: 19px;
  font-weight: 740;
  letter-spacing: -0.04em;
}

.hpv__performance-value span {
  color: var(--sd-green);
  font-size: 7px;
  font-weight: 720;
}

.hpv__chart {
  width: calc(100% - 26px);
  height: 96px;
  margin: 3px 13px 0;
  overflow: visible;
  color: var(--sd-orange);
}

.hpv__chart line {
  stroke: var(--sd-border);
  stroke-width: 1;
}

.hpv__chart-area {
  fill: url("#build-area");
}

.hpv__chart-line {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
}

.hpv__chart-labels {
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 6px;
}

@media (max-width: 960px) {
  .hpv {
    min-height: 650px;
  }

  .hpv__window {
    top: 6%;
    left: 5%;
    width: 90%;
    height: 60%;
  }

  .hpv__projects-card {
    bottom: 5%;
    left: 4%;
    width: 54%;
  }

  .hpv__performance-card {
    right: 4%;
    bottom: 7%;
    width: 37%;
  }
}

@media (max-width: 700px) {
  .hpv {
    display: grid;
    min-height: auto;
    gap: 12px;
    padding: 18px;
  }

  .hpv__window,
  .hpv__projects-card,
  .hpv__performance-card {
    position: relative;
    inset: auto;
    width: 100%;
  }

  .hpv__window {
    height: auto;
  }

  .hpv__dashboard {
    grid-template-columns: 1fr;
    height: auto;
  }

  .hpv__sidebar {
    display: none;
  }

  .hpv__main {
    min-height: 360px;
  }

  .hpv__projects-card,
  .hpv__performance-card {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
  }
}

@media (max-width: 520px) {
  .hpv {
    padding: 12px;
  }

  .hpv__window-context {
    display: none;
  }

  .hpv__window-bar {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .hpv__metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hpv__metrics article:nth-child(2) {
    border-right: 0;
  }

  .hpv__content-grid {
    grid-template-columns: 1fr;
  }

  .hpv__project-row {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }

  .hpv__project-row-stat {
    display: none;
  }

  .hpv__project-head button {
    display: none;
  }
}
</style>
