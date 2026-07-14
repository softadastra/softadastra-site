<template>
  <section id="platform" class="platform-section sd-section">
    <div class="sd-section__inner platform-section__inner">
      <header class="platform-section__header sd-reveal">
        <div class="platform-section__heading">
          <p class="platform-section__eyebrow">
            <span aria-hidden="true" />
            The platform
          </p>

          <h2>
            One connected workflow
            <span>for modern C++ applications.</span>
          </h2>
        </div>

        <div class="platform-section__intro">
          <p>
            Softadastra connects local development, reusable application
            capabilities, and team operations without moving the build away from
            the developer’s machine.
          </p>

          <div class="platform-section__summary">
            <span>Local-first</span>
            <span>Native C++</span>
            <span>Team-ready</span>
          </div>
        </div>
      </header>

      <div
        class="platform-flow sd-reveal sd-reveal-d2"
        aria-label="A C++ project moving through Vix.cpp, Rix, and Softadastra Cloud"
      >
        <div class="platform-flow__pattern" aria-hidden="true" />

        <header class="platform-flow__topbar">
          <div class="platform-flow__project">
            <span class="platform-flow__project-icon" aria-hidden="true">
              C++
            </span>

            <div>
              <strong>native-service</strong>
              <small>One project moving through the platform</small>
            </div>
          </div>

          <div class="platform-flow__status">
            <span>
              <i aria-hidden="true" />
              Workflow connected
            </span>

            <code>main · release</code>
          </div>
        </header>

        <div class="platform-flow__route">
          <svg
            class="platform-route"
            viewBox="0 0 1000 130"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="platform-route-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stop-color="#2768c7" />
                <stop offset="50%" stop-color="#d86f1f" />
                <stop offset="100%" stop-color="#7047a3" />
              </linearGradient>

              <filter id="platform-packet-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path class="platform-route__base" d="M95 65 H905" />

            <path class="platform-route__active" d="M95 65 H905" />

            <circle
              class="platform-route__packet"
              cx="95"
              cy="65"
              r="7"
              filter="url(#platform-packet-glow)"
            />

            <circle
              class="platform-route__pulse platform-route__pulse--one"
              cx="95"
              cy="65"
              r="5"
            />
            <circle
              class="platform-route__pulse platform-route__pulse--two"
              cx="500"
              cy="65"
              r="5"
            />
            <circle
              class="platform-route__pulse platform-route__pulse--three"
              cx="905"
              cy="65"
              r="5"
            />
          </svg>

          <div class="platform-flow__stations">
            <article class="platform-station platform-station--vix">
              <span class="platform-station__step">01</span>

              <div class="platform-station__node">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m8 6-5 6 5 6" />
                  <path d="m16 6 5 6-5 6" />
                  <path d="M10 19 14 5" />
                </svg>
              </div>

              <div>
                <strong>Vix.cpp</strong>
                <small>Build and run locally</small>
              </div>
            </article>

            <article class="platform-station platform-station--rix">
              <span class="platform-station__step">02</span>

              <div class="platform-station__node">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="8" height="8" rx="1.5" />
                  <rect x="13" y="3" width="8" height="8" rx="1.5" />
                  <rect x="3" y="13" width="8" height="8" rx="1.5" />
                  <path d="M17 13v8M13 17h8" />
                </svg>
              </div>

              <div>
                <strong>Rix</strong>
                <small>Extend the application</small>
              </div>
            </article>

            <article class="platform-station platform-station--cloud">
              <span class="platform-station__step">03</span>

              <div class="platform-station__node">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" />
                  <path d="m3.3 8.3 8.7 4.8 8.7-4.8" />
                  <path d="M12 13v8" />
                </svg>
              </div>

              <div>
                <strong>Softadastra Cloud</strong>
                <small>Organize with the team</small>
              </div>
            </article>
          </div>
        </div>

        <div class="platform-solutions">
          <!-- Vix.cpp -->
          <article class="solution-card solution-card--vix">
            <header class="solution-card__header">
              <div class="solution-card__identity">
                <span class="solution-card__mark">V</span>

                <div>
                  <span>Local development</span>
                  <h3>Vix.cpp</h3>
                </div>
              </div>

              <span class="solution-card__state">
                <i aria-hidden="true" />
                Running
              </span>
            </header>

            <p class="solution-card__description">
              Create, build, run, test, and diagnose native applications through
              one C++ workflow.
            </p>

            <div class="vix-terminal">
              <header>
                <div aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <strong>native-service</strong>

                <small>local</small>
              </header>

              <div class="vix-terminal__body">
                <div class="vix-terminal__command">
                  <span>$</span>
                  <code>vix build</code>
                </div>

                <div
                  v-for="(line, index) in buildLines"
                  :key="line.text"
                  class="vix-terminal__line"
                  :class="`vix-terminal__line--${line.type}`"
                  :style="{ '--terminal-delay': `${index * 0.85}s` }"
                >
                  <span>{{ line.icon }}</span>
                  <code>{{ line.text }}</code>
                </div>

                <div class="vix-terminal__cursor" aria-hidden="true">
                  <span>$</span>
                  <i />
                </div>
              </div>
            </div>

            <div class="solution-card__capabilities">
              <span>Projects</span>
              <span>Modules</span>
              <span>Packages</span>
              <span>Diagnostics</span>
            </div>

            <a :href="links.vix" class="solution-card__link">
              Explore Vix.cpp
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </article>

          <!-- Rix -->
          <article class="solution-card solution-card--rix">
            <header class="solution-card__header">
              <div class="solution-card__identity">
                <span class="solution-card__mark">R</span>

                <div>
                  <span>Application capabilities</span>
                  <h3>Rix</h3>
                </div>
              </div>

              <span class="solution-card__state">
                <i aria-hidden="true" />
                Available
              </span>
            </header>

            <p class="solution-card__description">
              Add reusable application capabilities through focused libraries
              and simple native APIs.
            </p>

            <div class="rix-modules">
              <svg
                class="rix-modules__connections"
                viewBox="0 0 400 220"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M200 110 C140 110 124 48 77 48" />
                <path d="M200 110 C260 110 276 48 323 48" />
                <path d="M200 110 C140 110 124 172 77 172" />
                <path d="M200 110 C260 110 276 172 323 172" />
              </svg>

              <div class="rix-module rix-module--one">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <path d="M4 5h16v14H4z" />
                    <path d="m4 8 8 5 8-5" />
                  </svg>
                </span>
                <strong>Mail</strong>
                <small>Delivery APIs</small>
              </div>

              <div class="rix-module rix-module--two">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <path d="M4 19V5" />
                    <path d="M4 19h16" />
                    <path d="m7 15 3-4 3 2 4-6" />
                  </svg>
                </span>
                <strong>Metrics</strong>
                <small>Application insight</small>
              </div>

              <div class="rix-module rix-module--three">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </span>
                <strong>Jobs</strong>
                <small>Background work</small>
              </div>

              <div class="rix-module rix-module--four">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <path d="M6 3h9l3 3v15H6z" />
                    <path d="M15 3v4h4" />
                    <path d="M9 12h6M9 16h6" />
                  </svg>
                </span>
                <strong>Documents</strong>
                <small>Export and reports</small>
              </div>

              <div class="rix-modules__core">
                <span>R</span>
                <strong>Rix API</strong>
              </div>

              <span class="rix-modules__packet rix-modules__packet--one" />
              <span class="rix-modules__packet rix-modules__packet--two" />
              <span class="rix-modules__packet rix-modules__packet--three" />
              <span class="rix-modules__packet rix-modules__packet--four" />
            </div>

            <div class="solution-card__capabilities">
              <span>Simple APIs</span>
              <span>Reusable packages</span>
              <span>Native integration</span>
            </div>

            <a :href="links.rix" class="solution-card__link">
              Explore Rix
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </article>

          <!-- Cloud -->
          <article class="solution-card solution-card--cloud">
            <header class="solution-card__header">
              <div class="solution-card__identity">
                <span class="solution-card__mark">S</span>

                <div>
                  <span>Team operations</span>
                  <h3>Softadastra Cloud</h3>
                </div>
              </div>

              <span class="solution-card__state">
                <i aria-hidden="true" />
                Synced
              </span>
            </header>

            <p class="solution-card__description">
              Keep private packages, lockfiles, build information, and project
              context organized across the team.
            </p>

            <div class="cloud-panel">
              <header class="cloud-panel__header">
                <div>
                  <strong>native-service</strong>
                  <small>Team workspace</small>
                </div>

                <span>
                  <i aria-hidden="true" />
                  Connected
                </span>
              </header>

              <div class="cloud-panel__metrics">
                <article>
                  <span>Packages</span>
                  <strong>24</strong>
                  <small>3 updated</small>
                </article>

                <article>
                  <span>Lockfiles</span>
                  <strong>128</strong>
                  <small>Latest synced</small>
                </article>

                <article>
                  <span>Build reports</span>
                  <strong>1,043</strong>
                  <small>98.7% passed</small>
                </article>
              </div>

              <div class="cloud-panel__operations">
                <article
                  v-for="(operation, index) in cloudOperations"
                  :key="operation.title"
                  :style="{ '--operation-delay': `${index * 1.1}s` }"
                >
                  <span
                    class="cloud-panel__operation-icon"
                    :class="`cloud-panel__operation-icon--${operation.kind}`"
                  >
                    {{ operation.mark }}
                  </span>

                  <div>
                    <strong>{{ operation.title }}</strong>
                    <small>{{ operation.detail }}</small>
                  </div>

                  <span class="cloud-panel__operation-state">
                    <i aria-hidden="true" />
                    {{ operation.state }}
                  </span>
                </article>
              </div>
            </div>

            <div class="solution-card__capabilities">
              <span>Private registry</span>
              <span>Lockfiles</span>
              <span>Build reports</span>
              <span>Permissions</span>
            </div>

            <a :href="links.cloud" class="solution-card__link">
              Explore Softadastra Cloud
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </article>
        </div>

        <footer class="platform-result">
          <div class="platform-result__heading">
            <span class="platform-result__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m14 7 5 5-5 5" />
              </svg>
            </span>

            <div>
              <span>Connected result</span>
              <strong
                >One project context from local development to the team.</strong
              >
            </div>
          </div>

          <div class="platform-result__items">
            <span>
              <i aria-hidden="true">✓</i>
              Builds remain local
            </span>

            <span>
              <i aria-hidden="true">✓</i>
              Dependencies stay explicit
            </span>

            <span>
              <i aria-hidden="true">✓</i>
              Team context stays synchronized
            </span>
          </div>

          <span class="platform-result__sweep" aria-hidden="true" />
        </footer>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

const buildLines = [
  {
    icon: "→",
    text: "Resolving project and modules",
    type: "normal",
  },
  {
    icon: "→",
    text: "Using locked package graph",
    type: "normal",
  },
  {
    icon: "✓",
    text: "Release build completed in 12.4s",
    type: "success",
  },
];

const cloudOperations = [
  {
    mark: "P",
    kind: "package",
    title: "Package version published",
    detail: "native-service@1.4.2",
    state: "Published",
  },
  {
    mark: "L",
    kind: "lock",
    title: "Lockfile synchronized",
    detail: "47 dependencies verified",
    state: "Synced",
  },
  {
    mark: "B",
    kind: "build",
    title: "Build report received",
    detail: "release · GCC 14 · 12.4s",
    state: "Passed",
  },
];
</script>

<style scoped>
.platform-section {
  position: relative;
  overflow: hidden;
  border-block: 1px solid var(--sd-border);
  background: var(--sd-bg);
}

.platform-section::before {
  position: absolute;
  top: -240px;
  left: 50%;
  width: 740px;
  height: 440px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(216, 111, 31, 0.055),
    transparent 68%
  );
  content: "";
  pointer-events: none;
  transform: translateX(-50%);
}

.platform-section__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(42px, 6vw, 68px);
}

/* Header */

.platform-section__header {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.72fr);
  gap: clamp(42px, 8vw, 110px);
  align-items: end;
}

.platform-section__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 15px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.platform-section__eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 4px var(--sd-accent-bg-soft);
}

.platform-section h2 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(35px, 4.5vw, 58px);
  font-weight: 720;
  line-height: 1.01;
  letter-spacing: -0.05em;
}

.platform-section h2 span {
  display: block;
  color: var(--sd-orange);
}

.platform-section__intro {
  max-width: 520px;
  padding-bottom: 4px;
}

.platform-section__intro > p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 14.5px;
  line-height: 1.66;
}

.platform-section__summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.platform-section__summary span {
  padding: 6px 9px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: #ffffff;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9px;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.035);
}

/* Main flow */

.platform-flow {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background: #ffffff;
  box-shadow:
    0 2px 5px rgba(15, 23, 42, 0.04),
    0 24px 70px rgba(15, 23, 42, 0.1);
}

.platform-flow__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(95, 99, 104, 0.16) 0.8px,
    transparent 0.8px
  );
  background-size: 18px 18px;
  opacity: 0.22;
  mask-image: radial-gradient(circle at 50% 0%, #000, transparent 50%);
  pointer-events: none;
}

.platform-flow__topbar {
  position: relative;
  z-index: 2;
  display: flex;
  min-height: 68px;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 13px 18px;
  border-bottom: 1px solid var(--sd-border);
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(16px);
}

.platform-flow__project {
  display: flex;
  align-items: center;
  gap: 10px;
}

.platform-flow__project-icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 8px;
  background: var(--sd-text);
  color: #ffffff;
  font-family: var(--sd-font-mono);
  font-size: 9px;
  font-weight: 800;
  box-shadow: 0 5px 15px rgba(31, 31, 31, 0.16);
}

.platform-flow__project > div {
  display: grid;
  line-height: 1.3;
}

.platform-flow__project strong {
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 730;
}

.platform-flow__project small {
  color: var(--sd-text-muted);
  font-size: 9px;
}

.platform-flow__status {
  display: flex;
  align-items: center;
  gap: 12px;
}

.platform-flow__status > span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 9px;
  border: 1px solid rgba(46, 125, 50, 0.18);
  border-radius: var(--sd-radius-full);
  background: var(--sd-green-bg);
  color: var(--sd-green);
  font-size: 8px;
  font-weight: 720;
}

.platform-flow__status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--sd-green);
  animation: platform-connected 1.8s ease-in-out infinite;
}

@keyframes platform-connected {
  50% {
    box-shadow: 0 0 0 6px rgba(46, 125, 50, 0);
  }
}

.platform-flow__status code {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 8.5px;
}

/* Route */

.platform-flow__route {
  position: relative;
  z-index: 1;
  padding: 20px 28px 26px;
  border-bottom: 1px solid var(--sd-border);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.8),
    rgba(255, 255, 255, 0.98)
  );
}

.platform-route {
  position: absolute;
  top: 31px;
  left: 7%;
  width: 86%;
  height: 92px;
  overflow: visible;
  pointer-events: none;
}

.platform-route__base {
  fill: none;
  stroke: var(--sd-border-strong);
  stroke-width: 2;
}

.platform-route__active {
  fill: none;
  stroke: url("#platform-route-gradient");
  stroke-width: 2.5;
  stroke-dasharray: 8 9;
  animation: platform-route-flow 1.5s linear infinite;
}

@keyframes platform-route-flow {
  to {
    stroke-dashoffset: -34;
  }
}

.platform-route__packet {
  fill: var(--sd-orange);
  animation: platform-main-packet 6s var(--sd-ease-out) infinite;
}

@keyframes platform-main-packet {
  0%,
  8% {
    transform: translateX(0);
  }

  30%,
  39% {
    transform: translateX(405px);
  }

  63%,
  72% {
    transform: translateX(810px);
  }

  94%,
  100% {
    transform: translateX(0);
  }
}

.platform-route__pulse {
  fill: #ffffff;
  stroke-width: 2.5;
}

.platform-route__pulse--one {
  stroke: var(--sd-blue);
}

.platform-route__pulse--two {
  stroke: var(--sd-orange);
}

.platform-route__pulse--three {
  stroke: var(--sd-purple);
}

.platform-flow__stations {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.platform-station {
  display: grid;
  justify-items: center;
  gap: 8px;
  text-align: center;
}

.platform-station__step {
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 730;
  letter-spacing: 0.07em;
}

.platform-station__node {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border: 1px solid var(--sd-border);
  border-radius: 13px;
  background: #ffffff;
  box-shadow:
    0 4px 12px rgba(15, 23, 42, 0.06),
    0 0 0 7px rgba(255, 255, 255, 0.82);
  animation: platform-node-cycle 6s ease-in-out infinite;
}

.platform-station__node svg {
  width: 21px;
  height: 21px;
}

.platform-station--vix .platform-station__node {
  color: var(--sd-blue);
  animation-delay: 0s;
}

.platform-station--rix .platform-station__node {
  color: var(--sd-orange);
  animation-delay: 2s;
}

.platform-station--cloud .platform-station__node {
  color: var(--sd-purple);
  animation-delay: 4s;
}

@keyframes platform-node-cycle {
  0%,
  18%,
  100% {
    transform: translateY(0);
    box-shadow:
      0 4px 12px rgba(15, 23, 42, 0.06),
      0 0 0 7px rgba(255, 255, 255, 0.82);
  }

  8% {
    transform: translateY(-4px);
    box-shadow:
      0 12px 24px rgba(15, 23, 42, 0.1),
      0 0 0 11px rgba(216, 111, 31, 0.07);
  }
}

.platform-station > div:last-child {
  display: grid;
  line-height: 1.35;
}

.platform-station strong {
  color: var(--sd-text);
  font-size: 11px;
  font-weight: 730;
}

.platform-station small {
  color: var(--sd-text-muted);
  font-size: 8px;
}

/* Solution cards */

.platform-solutions {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  padding: 20px;
  background: #ffffff;
}

.solution-card {
  display: flex;
  min-width: 0;
  min-height: 520px;
  flex-direction: column;
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: #ffffff;
  box-shadow:
    0 2px 4px rgba(15, 23, 42, 0.03),
    0 12px 30px rgba(15, 23, 42, 0.06);
  transition:
    border-color var(--sd-transition),
    box-shadow var(--sd-transition),
    transform var(--sd-transition);
}

.solution-card:hover {
  border-color: var(--sd-border-strong);
  box-shadow: var(--sd-shadow-card);
  transform: translateY(-3px);
}

.solution-card--vix {
  border-top: 3px solid var(--sd-blue);
}

.solution-card--rix {
  border-top: 3px solid var(--sd-orange);
}

.solution-card--cloud {
  border-top: 3px solid var(--sd-purple);
}

.solution-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.solution-card__identity {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
}

.solution-card__mark {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
}

.solution-card--vix .solution-card__mark {
  background: var(--sd-blue-bg);
  color: var(--sd-blue);
}

.solution-card--rix .solution-card__mark {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.solution-card--cloud .solution-card__mark {
  background: var(--sd-purple-bg);
  color: var(--sd-purple);
}

.solution-card__identity > div {
  display: grid;
  min-width: 0;
  line-height: 1.2;
}

.solution-card__identity span {
  overflow: hidden;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  font-weight: 730;
  letter-spacing: 0.06em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.solution-card h3 {
  margin: 2px 0 0;
  color: var(--sd-text);
  font-size: 16px;
  font-weight: 740;
  letter-spacing: -0.025em;
}

.solution-card__state {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  border: 1px solid rgba(46, 125, 50, 0.17);
  border-radius: var(--sd-radius-full);
  background: var(--sd-green-bg);
  color: var(--sd-green);
  font-size: 7px;
  font-weight: 710;
}

.solution-card__state i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.solution-card__description {
  min-height: 64px;
  margin: 15px 0 0;
  color: var(--sd-text-soft);
  font-size: 12px;
  line-height: 1.55;
}

/* Vix terminal */

.vix-terminal {
  overflow: hidden;
  min-height: 235px;
  margin-top: 14px;
  border: 1px solid #252a32;
  border-radius: 9px;
  background: #101318;
  box-shadow: 0 12px 28px rgba(15, 19, 24, 0.14);
}

.vix-terminal > header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  min-height: 37px;
  padding: 0 11px;
  border-bottom: 1px solid #252a32;
  background: #151920;
}

.vix-terminal > header > div {
  display: flex;
  gap: 4px;
}

.vix-terminal > header > div span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3d434d;
}

.vix-terminal > header strong,
.vix-terminal > header small {
  font-family: var(--sd-font-mono);
  font-size: 7px;
}

.vix-terminal > header strong {
  overflow: hidden;
  color: #b8bec7;
  font-weight: 650;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vix-terminal > header small {
  color: #69717d;
}

.vix-terminal__body {
  padding: 14px;
}

.vix-terminal__command,
.vix-terminal__line {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  align-items: center;
  min-height: 31px;
  font-family: var(--sd-font-mono);
  font-size: 8.5px;
}

.vix-terminal__command span {
  color: var(--sd-orange);
  font-weight: 800;
}

.vix-terminal code {
  overflow: hidden;
  color: #dfe3e8;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vix-terminal__line {
  opacity: 0;
  animation: vix-terminal-line 5.4s ease infinite;
  animation-delay: var(--terminal-delay);
}

.vix-terminal__line span {
  color: #6e7681;
}

.vix-terminal__line code {
  color: #939ba6;
}

.vix-terminal__line--success span,
.vix-terminal__line--success code {
  color: #58d18f;
}

@keyframes vix-terminal-line {
  0%,
  9% {
    opacity: 0;
    transform: translateX(-5px);
  }

  16%,
  84% {
    opacity: 1;
    transform: none;
  }

  95%,
  100% {
    opacity: 0;
  }
}

.vix-terminal__cursor {
  display: flex;
  min-height: 28px;
  align-items: center;
  gap: 8px;
  color: var(--sd-orange);
  font-family: var(--sd-font-mono);
  font-size: 8.5px;
}

.vix-terminal__cursor i {
  width: 6px;
  height: 11px;
  background: #dfe3e8;
  animation: platform-cursor 0.9s steps(1) infinite;
}

@keyframes platform-cursor {
  50% {
    opacity: 0;
  }
}

/* Rix visual */

.rix-modules {
  position: relative;
  min-height: 235px;
  margin-top: 14px;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 9px;
  background:
    radial-gradient(
      circle at 50% 50%,
      var(--sd-accent-bg-soft),
      transparent 52%
    ),
    #fafafa;
}

.rix-modules::before {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(95, 99, 104, 0.18) 0.8px,
    transparent 0.8px
  );
  background-size: 14px 14px;
  content: "";
  opacity: 0.35;
  pointer-events: none;
}

.rix-modules__connections {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.rix-modules__connections path {
  fill: none;
  stroke: rgba(216, 111, 31, 0.35);
  stroke-width: 1.4;
  stroke-dasharray: 4 6;
  animation: rix-connection-flow 1.8s linear infinite;
}

@keyframes rix-connection-flow {
  to {
    stroke-dashoffset: -20;
  }
}

.rix-module {
  position: absolute;
  z-index: 2;
  display: grid;
  width: 96px;
  min-height: 57px;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 7px;
  padding: 8px;
  border: 1px solid var(--sd-border);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.07);
  animation: rix-module-float 5s ease-in-out infinite;
}

.rix-module > span {
  display: grid;
  width: 25px;
  height: 25px;
  grid-row: 1 / 3;
  place-items: center;
  border-radius: 6px;
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.rix-module svg {
  width: 13px;
  height: 13px;
}

.rix-module strong,
.rix-module small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rix-module strong {
  color: var(--sd-text);
  font-size: 7.5px;
}

.rix-module small {
  color: var(--sd-text-muted);
  font-size: 6px;
}

.rix-module--one {
  top: 20px;
  left: 14px;
}

.rix-module--two {
  top: 20px;
  right: 14px;
  animation-delay: 0.8s;
}

.rix-module--three {
  bottom: 20px;
  left: 14px;
  animation-delay: 1.6s;
}

.rix-module--four {
  right: 14px;
  bottom: 20px;
  animation-delay: 2.4s;
}

@keyframes rix-module-float {
  50% {
    transform: translateY(-4px);
  }
}

.rix-modules__core {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  display: grid;
  width: 72px;
  height: 72px;
  place-items: center;
  border: 1px solid rgba(216, 111, 31, 0.3);
  border-radius: 18px;
  background: #ffffff;
  box-shadow:
    0 12px 30px rgba(216, 111, 31, 0.12),
    0 0 0 8px rgba(255, 245, 237, 0.82);
  transform: translate(-50%, -50%);
}

.rix-modules__core span {
  display: grid;
  width: 27px;
  height: 27px;
  place-items: center;
  border-radius: 7px;
  background: var(--sd-orange);
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
}

.rix-modules__core strong {
  margin-top: -11px;
  color: var(--sd-text);
  font-size: 7px;
}

.rix-modules__packet {
  position: absolute;
  z-index: 4;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 8px rgba(216, 111, 31, 0.65);
}

.rix-modules__packet--one {
  top: 47px;
  left: 111px;
  animation: rix-packet-one 3s ease-in-out infinite;
}

.rix-modules__packet--two {
  top: 47px;
  right: 111px;
  animation: rix-packet-two 3s ease-in-out infinite;
  animation-delay: 0.7s;
}

.rix-modules__packet--three {
  bottom: 47px;
  left: 111px;
  animation: rix-packet-three 3s ease-in-out infinite;
  animation-delay: 1.4s;
}

.rix-modules__packet--four {
  right: 111px;
  bottom: 47px;
  animation: rix-packet-four 3s ease-in-out infinite;
  animation-delay: 2.1s;
}

@keyframes rix-packet-one {
  50% {
    transform: translate(32px, 48px);
  }
}

@keyframes rix-packet-two {
  50% {
    transform: translate(-32px, 48px);
  }
}

@keyframes rix-packet-three {
  50% {
    transform: translate(32px, -48px);
  }
}

@keyframes rix-packet-four {
  50% {
    transform: translate(-32px, -48px);
  }
}

/* Cloud panel */

.cloud-panel {
  overflow: hidden;
  min-height: 235px;
  margin-top: 14px;
  border: 1px solid var(--sd-border);
  border-radius: 9px;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
}

.cloud-panel__header {
  display: flex;
  min-height: 43px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 11px;
  border-bottom: 1px solid var(--sd-border);
  background: #fafafa;
}

.cloud-panel__header > div {
  display: grid;
  line-height: 1.25;
}

.cloud-panel__header strong {
  color: var(--sd-text);
  font-size: 8px;
}

.cloud-panel__header small {
  color: var(--sd-text-muted);
  font-size: 6.5px;
}

.cloud-panel__header > span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--sd-green);
  font-size: 6.5px;
  font-weight: 700;
}

.cloud-panel__header i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.cloud-panel__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-bottom: 1px solid var(--sd-border);
}

.cloud-panel__metrics article {
  display: grid;
  gap: 2px;
  padding: 9px;
  border-right: 1px solid var(--sd-border);
}

.cloud-panel__metrics article:last-child {
  border-right: 0;
}

.cloud-panel__metrics span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 5.7px;
  text-transform: uppercase;
}

.cloud-panel__metrics strong {
  color: var(--sd-text);
  font-size: 12px;
}

.cloud-panel__metrics small {
  color: var(--sd-text-muted);
  font-size: 5.7px;
}

.cloud-panel__operations article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  padding: 8px 9px;
  border-bottom: 1px solid var(--sd-border);
  animation: cloud-operation-highlight 5s ease infinite;
  animation-delay: var(--operation-delay);
}

.cloud-panel__operations article:last-child {
  border-bottom: 0;
}

@keyframes cloud-operation-highlight {
  0%,
  24%,
  100% {
    background: transparent;
  }

  8%,
  16% {
    background: var(--sd-purple-bg);
  }
}

.cloud-panel__operation-icon {
  display: grid;
  width: 23px;
  height: 23px;
  place-items: center;
  border-radius: 5px;
  font-size: 7px;
  font-weight: 800;
}

.cloud-panel__operation-icon--package {
  background: var(--sd-purple-bg);
  color: var(--sd-purple);
}

.cloud-panel__operation-icon--lock {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.cloud-panel__operation-icon--build {
  background: var(--sd-blue-bg);
  color: var(--sd-blue);
}

.cloud-panel__operations article > div {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.cloud-panel__operations strong,
.cloud-panel__operations small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cloud-panel__operations strong {
  color: var(--sd-text);
  font-size: 7px;
}

.cloud-panel__operations small {
  color: var(--sd-text-muted);
  font-size: 5.8px;
}

.cloud-panel__operation-state {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 5px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-green-bg);
  color: var(--sd-green);
  font-size: 5.8px;
  font-weight: 700;
}

.cloud-panel__operation-state i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
}

/* Card footer */

.solution-card__capabilities {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.solution-card__capabilities span {
  padding: 5px 7px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: #fafafa;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 680;
}

.solution-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  padding-top: 17px;
  color: var(--sd-text);
  font-size: 10px;
  font-weight: 720;
  text-decoration: none;
}

.solution-card__link svg {
  transition: transform var(--sd-transition-fast);
}

.solution-card--vix .solution-card__link:hover {
  color: var(--sd-blue);
}

.solution-card--rix .solution-card__link:hover {
  color: var(--sd-orange);
}

.solution-card--cloud .solution-card__link:hover {
  color: var(--sd-purple);
}

.solution-card__link:hover svg {
  transform: translateX(3px);
}

/* Connected result */

.platform-result {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1.22fr);
  gap: 24px;
  align-items: center;
  overflow: hidden;
  padding: 18px 20px;
  border-top: 1px solid var(--sd-border);
  background:
    linear-gradient(
      90deg,
      rgba(232, 240, 253, 0.55),
      rgba(255, 245, 237, 0.5),
      rgba(240, 233, 248, 0.55)
    ),
    #ffffff;
}

.platform-result__heading {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 11px;
}

.platform-result__icon {
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgba(216, 111, 31, 0.22);
  border-radius: 9px;
  background: #ffffff;
  color: var(--sd-orange);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}

.platform-result__icon svg {
  width: 17px;
  height: 17px;
}

.platform-result__heading > div {
  display: grid;
  line-height: 1.35;
}

.platform-result__heading span:not(.platform-result__icon) {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  font-weight: 730;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.platform-result__heading strong {
  max-width: 390px;
  color: var(--sd-text);
  font-size: 10px;
}

.platform-result__items {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.platform-result__items > span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 9px;
  border: 1px solid var(--sd-border);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.84);
  color: var(--sd-text-soft);
  font-size: 8px;
  font-weight: 650;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
}

.platform-result__items i {
  display: grid;
  width: 16px;
  height: 16px;
  place-items: center;
  border-radius: 50%;
  background: var(--sd-green-bg);
  color: var(--sd-green);
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
}

.platform-result__sweep {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    transparent 20%,
    rgba(255, 255, 255, 0.7),
    transparent 80%
  );
  transform: translateX(-100%);
  animation: platform-result-sweep 5s ease-in-out infinite;
}

@keyframes platform-result-sweep {
  0%,
  60% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

/* Responsive */

@media (prefers-reduced-motion: reduce) {
  .platform-flow__status i,
  .platform-route__active,
  .platform-route__packet,
  .platform-station__node,
  .vix-terminal__line,
  .vix-terminal__cursor i,
  .rix-modules__connections path,
  .rix-module,
  .rix-modules__packet,
  .cloud-panel__operations article,
  .platform-result__sweep {
    animation: none;
  }

  .vix-terminal__line {
    opacity: 1;
  }
}

@media (max-width: 1020px) {
  .platform-solutions {
    grid-template-columns: 1fr;
  }

  .solution-card {
    min-height: auto;
  }

  .solution-card__description {
    min-height: 0;
  }

  .vix-terminal,
  .rix-modules,
  .cloud-panel {
    min-height: 250px;
  }

  .platform-result {
    grid-template-columns: 1fr;
  }

  .platform-result__items {
    justify-content: flex-start;
  }
}

@media (max-width: 820px) {
  .platform-section__header {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .platform-section__intro {
    max-width: 700px;
  }

  .platform-route {
    display: none;
  }

  .platform-flow__stations {
    gap: 10px;
  }

  .platform-station__node {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 620px) {
  .platform-section h2 {
    font-size: clamp(2.3rem, 11vw, 3rem);
  }

  .platform-flow__topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .platform-flow__status {
    width: 100%;
    justify-content: space-between;
  }

  .platform-flow__route {
    padding-inline: 14px;
  }

  .platform-flow__stations {
    grid-template-columns: 1fr;
  }

  .platform-station {
    grid-template-columns: auto auto minmax(0, 1fr);
    justify-items: start;
    padding: 9px;
    border: 1px solid var(--sd-border);
    border-radius: 9px;
    background: #ffffff;
    text-align: left;
  }

  .platform-station__step {
    align-self: center;
  }

  .platform-station > div:last-child {
    align-self: center;
  }

  .platform-solutions {
    padding: 12px;
  }

  .solution-card {
    padding: 15px;
  }

  .solution-card__header {
    align-items: flex-start;
  }

  .solution-card__state {
    display: none;
  }

  .rix-module {
    width: 86px;
  }

  .rix-module--one,
  .rix-module--three {
    left: 8px;
  }

  .rix-module--two,
  .rix-module--four {
    right: 8px;
  }

  .rix-modules__packet {
    display: none;
  }

  .platform-result {
    padding: 16px;
  }

  .platform-result__items {
    display: grid;
  }
}
</style>
