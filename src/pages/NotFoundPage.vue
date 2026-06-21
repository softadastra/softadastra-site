<template>
  <SiteShell>
    <div class="nf">
      <!-- Scanline overlay -->
      <div class="nf-scanlines" aria-hidden="true"></div>

      <!-- Noise grain overlay -->
      <svg class="nf-noise" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <!-- Speed particles (horizontal streaks) -->
      <div class="nf-particles" aria-hidden="true">
        <span
          v-for="i in 16"
          :key="i"
          class="nf-particle"
          :style="particleStyle(i)"
        ></span>
      </div>

      <!-- Radial pulse rings -->
      <div class="nf-pulse-rings" aria-hidden="true">
        <span class="nf-ring nf-ring--1"></span>
        <span class="nf-ring nf-ring--2"></span>
        <span class="nf-ring nf-ring--3"></span>
      </div>

      <!-- Main content -->
      <div class="nf-inner">
        <!-- Satellite dish SVG illustration -->
        <div class="nf-dish-wrap" aria-hidden="true">
          <svg
            class="nf-dish"
            viewBox="0 0 400 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Signal waves (animated) -->
            <g class="nf-signal">
              <path
                d="M260 90 Q290 80 300 60"
                stroke="var(--sd-orange)"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
                opacity="0.6"
                stroke-dasharray="4 6"
              />
              <path
                d="M270 80 Q310 65 325 38"
                stroke="var(--sd-orange-strong)"
                stroke-width="1.8"
                stroke-linecap="round"
                fill="none"
                opacity="0.45"
                stroke-dasharray="3 8"
              />
              <path
                d="M278 72 Q325 50 348 18"
                stroke="var(--sd-orange)"
                stroke-width="1.5"
                stroke-linecap="round"
                fill="none"
                opacity="0.3"
                stroke-dasharray="2 10"
              />
            </g>

            <!-- Signal "X" — lost connection -->
            <g class="nf-signal-x">
              <line
                x1="304"
                y1="30"
                x2="324"
                y2="50"
                stroke="#ef4444"
                stroke-width="2.5"
                stroke-linecap="round"
                opacity="0.8"
              />
              <line
                x1="324"
                y1="30"
                x2="304"
                y2="50"
                stroke="#ef4444"
                stroke-width="2.5"
                stroke-linecap="round"
                opacity="0.8"
              />
            </g>

            <!-- Dish base / pedestal -->
            <rect
              x="185"
              y="240"
              width="30"
              height="50"
              rx="4"
              fill="var(--sd-bg-raised)"
              stroke="var(--sd-orange)"
              stroke-width="1"
            />
            <rect
              x="170"
              y="284"
              width="60"
              height="10"
              rx="5"
              fill="var(--sd-bg-raised)"
              stroke="var(--sd-orange)"
              stroke-width="1"
            />

            <!-- Support arm -->
            <line
              x1="200"
              y1="240"
              x2="220"
              y2="165"
              stroke="var(--sd-orange)"
              stroke-width="2.5"
              stroke-linecap="round"
            />
            <line
              x1="200"
              y1="240"
              x2="220"
              y2="165"
              stroke="var(--sd-bg-soft)"
              stroke-width="1.2"
              stroke-linecap="round"
            />

            <!-- Dish (parabolic shape) -->
            <path
              class="nf-dish-bowl"
              d="M130 170 Q145 95 220 80 Q295 95 310 170 Q220 155 130 170 Z"
              fill="var(--sd-bg-muted)"
              stroke="var(--sd-orange)"
              stroke-width="1.5"
            />

            <!-- Dish inner ring details -->
            <path
              d="M155 160 Q165 115 220 105 Q275 115 285 160"
              stroke="var(--sd-orange)"
              stroke-width="0.8"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M175 152 Q182 125 220 118 Q258 125 265 152"
              stroke="var(--sd-orange)"
              stroke-width="0.6"
              fill="none"
              opacity="0.2"
            />

            <!-- Feed horn (receiver at center) -->
            <line
              x1="220"
              y1="135"
              x2="248"
              y2="100"
              stroke="var(--sd-orange-strong)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="250"
              cy="97"
              r="5"
              fill="var(--sd-orange)"
              opacity="0.9"
            />
            <circle
              class="nf-feed-blink"
              cx="250"
              cy="97"
              r="8"
              fill="none"
              stroke="var(--sd-orange-strong)"
              stroke-width="1.5"
              opacity="0"
            />

            <!-- Cable from base -->
            <path
              d="M200 290 Q170 300 155 298 Q140 295 130 300"
              stroke="var(--sd-orange)"
              stroke-width="1.2"
              stroke-linecap="round"
              fill="none"
              opacity="0.35"
              stroke-dasharray="3 5"
            />

            <!-- Ground shadow -->
            <ellipse
              cx="200"
              cy="298"
              rx="75"
              ry="5"
              fill="var(--sd-orange)"
              opacity="0.04"
            />

            <!-- Softadastra logo mark on dish -->
            <text
              x="220"
              y="148"
              text-anchor="middle"
              fill="var(--sd-orange)"
              font-family="var(--sd-font-mono)"
              font-size="9"
              font-weight="800"
              letter-spacing="0.15em"
              opacity="0.25"
            >
              SD
            </text>

            <!-- Glow defs -->
            <defs>
              <filter
                id="dishGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          <!-- Ground speed lines under dish -->
          <div class="nf-ground-lines" aria-hidden="true">
            <span
              v-for="j in 5"
              :key="j"
              class="nf-ground-line"
              :style="`animation-delay:${j * 0.15}s`"
            ></span>
          </div>
        </div>

        <!-- Text block -->
        <div class="nf-text">
          <!-- 404 code -->
          <div class="nf-404-wrap">
            <span class="nf-404">404</span>
            <span class="nf-404-sub">SIGNAL_LOST</span>
          </div>

          <!-- Headline -->
          <h1 class="nf-title">
            Connection dropped.<br />
            <span class="nf-title-accent">Page unreachable.</span>
          </h1>

          <!-- Description -->
          <p class="nf-desc">
            This route doesn't exist — or the network fell away before it could
            load. Softadastra keeps your apps running offline, but even we can't
            serve a page that was never there.
          </p>

          <!-- Terminal snippet -->
          <div class="nf-terminal">
            <div class="nf-terminal-bar">
              <span class="nf-terminal-dot nf-terminal-dot--red"></span>
              <span class="nf-terminal-dot nf-terminal-dot--yellow"></span>
              <span class="nf-terminal-dot nf-terminal-dot--green"></span>
              <span class="nf-terminal-bar-title">terminal</span>
            </div>
            <div class="nf-terminal-body">
              <span class="nf-prompt">$</span>
              <span class="nf-cmd"
                >curl -s softadastra.com<span class="nf-path">{{
                  path
                }}</span></span
              >
              <br />
              <span class="nf-err"
                >✗ 404 — route not found. no fallback configured.</span
              >
              <br />
              <span class="nf-hint">
                <span class="nf-prompt">$</span>
                <span class="nf-cmd-hint"
                  >cd / <span class="nf-cursor">▌</span></span
                >
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div class="nf-actions">
            <BaseButton to="/" class="nf-btn-primary">
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back home
            </BaseButton>
            <BaseButton
              to="/ecosystem"
              variant="secondary"
              class="nf-btn-secondary"
            >
              View ecosystem
            </BaseButton>
            <BaseButton to="/docs" variant="secondary" class="nf-btn-secondary">
              Docs
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </SiteShell>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SiteShell from "../components/layout/SiteShell.vue";
import BaseButton from "../components/ui/BaseButton.vue";

const route = useRoute();
const path = computed(() => route.path);

function particleStyle(i) {
  const seed = i * 137.5;
  const top = ((seed * 0.618) % 82) + 6;
  const width = 18 + ((i * 27) % 110);
  const delay = (i * 0.22) % 3;
  const duration = 0.7 + ((i * 0.13) % 0.9);
  const opacity = 0.03 + (i % 5) * 0.018;
  return `top:${top}%;width:${width}px;animation-delay:${delay}s;animation-duration:${duration}s;opacity:${opacity}`;
}
</script>

<style scoped>
/* ================================================================
   SOFTADASTRA — 404 "SIGNAL LOST"
   ================================================================ */

/* ── Page ─────────────────────────────────────────────────────── */
.nf {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse 50% 45% at 50% 38%,
      rgba(213, 122, 42, 0.045) 0%,
      transparent 70%
    ),
    linear-gradient(180deg, var(--sd-deep-green) 0%, #071e17 100%);
}

/* ── Scanlines ────────────────────────────────────────────────── */
.nf-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 3px,
    rgba(213, 122, 42, 0.012) 3px,
    rgba(213, 122, 42, 0.012) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* ── Film grain ───────────────────────────────────────────────── */
.nf-noise {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.028;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: overlay;
}

/* ── Particles ────────────────────────────────────────────────── */
.nf-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.nf-particle {
  position: absolute;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--sd-orange),
    transparent
  );
  border-radius: var(--sd-radius-full);
  right: -140px;
  animation: particle-fly linear infinite;
}

@keyframes particle-fly {
  from {
    transform: translateX(0);
  }
  60% {
    opacity: inherit;
  }
  to {
    transform: translateX(-120vw);
    opacity: 0;
  }
}

/* ── Pulse rings ──────────────────────────────────────────────── */
.nf-pulse-rings {
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

.nf-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--sd-orange);
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.3);
  animation: ring-expand 4.5s ease-out infinite;
}

.nf-ring--1 {
  width: 300px;
  height: 300px;
  animation-delay: 0s;
}
.nf-ring--2 {
  width: 300px;
  height: 300px;
  animation-delay: 1.5s;
}
.nf-ring--3 {
  width: 300px;
  height: 300px;
  animation-delay: 3s;
}

@keyframes ring-expand {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  15% {
    opacity: 0.12;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(3.5);
  }
}

/* ── Inner ────────────────────────────────────────────────────── */
.nf-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 24px 1.5rem 56px;
  max-width: 860px;
  width: 100%;
  text-align: center;
}

/* ================================================================
   SATELLITE DISH SVG
   ================================================================ */
.nf-dish-wrap {
  position: relative;
  width: 100%;
  max-width: 400px;
  animation: dish-hover 3s var(--sd-ease-out) infinite alternate;
}

@keyframes dish-hover {
  from {
    transform: translateY(0) rotate(-0.2deg);
  }
  to {
    transform: translateY(-6px) rotate(0.2deg);
  }
}

.nf-dish {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(213, 122, 42, 0.18))
    drop-shadow(0 0 50px rgba(213, 122, 42, 0.06));
  animation: dish-glow 2.8s ease-in-out infinite;
}

@keyframes dish-glow {
  0%,
  100% {
    filter: drop-shadow(0 0 18px rgba(213, 122, 42, 0.16))
      drop-shadow(0 0 44px rgba(213, 122, 42, 0.05));
  }
  50% {
    filter: drop-shadow(0 0 28px rgba(213, 122, 42, 0.3))
      drop-shadow(0 0 60px rgba(213, 122, 42, 0.1));
  }
}

/* Signal waves — dash animation */
.nf-signal path {
  animation: signal-dash 1.8s linear infinite;
}

@keyframes signal-dash {
  to {
    stroke-dashoffset: -30;
  }
}

/* Signal X blink */
.nf-signal-x {
  animation: x-blink 2s ease-in-out infinite;
}

@keyframes x-blink {
  0%,
  40%,
  100% {
    opacity: 1;
  }
  50%,
  55% {
    opacity: 0.15;
  }
  60% {
    opacity: 1;
  }
  65%,
  68% {
    opacity: 0.2;
  }
}

/* Feed horn blink */
.nf-feed-blink {
  animation: feed-ping 2.2s ease-out infinite;
}

@keyframes feed-ping {
  0% {
    r: 5;
    opacity: 0.6;
  }
  70% {
    r: 14;
    opacity: 0;
  }
  100% {
    r: 14;
    opacity: 0;
  }
}

/* Dish bowl subtle tilt */
.nf-dish-bowl {
  animation: bowl-scan 6s ease-in-out infinite alternate;
  transform-origin: 220px 170px;
}

@keyframes bowl-scan {
  from {
    transform: rotate(-1deg);
  }
  to {
    transform: rotate(1deg);
  }
}

/* Ground lines below dish */
.nf-ground-lines {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: -8px;
}

.nf-ground-line {
  height: 1.5px;
  border-radius: var(--sd-radius-full);
  background: linear-gradient(
    to right,
    transparent,
    rgba(213, 122, 42, 0.25),
    transparent
  );
  animation: ground-line 0.7s ease-in-out infinite alternate;
}

.nf-ground-line:nth-child(1) {
  width: 70px;
}
.nf-ground-line:nth-child(2) {
  width: 45px;
}
.nf-ground-line:nth-child(3) {
  width: 90px;
}
.nf-ground-line:nth-child(4) {
  width: 35px;
}
.nf-ground-line:nth-child(5) {
  width: 55px;
}

@keyframes ground-line {
  from {
    transform: scaleX(1);
    opacity: 0.5;
  }
  to {
    transform: scaleX(0.35);
    opacity: 0.1;
  }
}

/* ================================================================
   TEXT CONTENT
   ================================================================ */
.nf-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: 12px;
}

/* ── 404 badge ────────────────────────────────────────────────── */
.nf-404-wrap {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 18px;
  animation: fade-up 0.7s var(--sd-ease-out) both;
  animation-delay: 0.1s;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nf-404 {
  font-family: var(--sd-font-mono);
  font-size: clamp(4rem, 12vw, 7.5rem);
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(213, 122, 42, 0.45);
  background: linear-gradient(
    135deg,
    var(--sd-orange) 0%,
    var(--sd-orange-strong) 40%,
    rgba(213, 122, 42, 0.25) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nf-404-sub {
  font-family: var(--sd-font-mono);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(213, 122, 42, 0.38);
  text-transform: uppercase;
  align-self: center;
}

/* ── Headline ─────────────────────────────────────────────────── */
.nf-title {
  margin: 0 0 14px;
  font-family: var(--sd-font);
  font-size: clamp(1.55rem, 4vw, 2.6rem);
  font-weight: 850;
  letter-spacing: -0.04em;
  line-height: 1.12;
  color: var(--sd-text);
  animation: fade-up 0.7s var(--sd-ease-out) both;
  animation-delay: 0.2s;
}

.nf-title-accent {
  background: linear-gradient(90deg, var(--sd-orange-strong), var(--sd-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Description ──────────────────────────────────────────────── */
.nf-desc {
  margin: 0 0 26px;
  font-family: var(--sd-font);
  font-size: 0.95rem;
  color: var(--sd-text-soft);
  line-height: 1.75;
  max-width: 44ch;
  animation: fade-up 0.7s var(--sd-ease-out) both;
  animation-delay: 0.3s;
}

/* ── Terminal ─────────────────────────────────────────────────── */
.nf-terminal {
  width: 100%;
  max-width: 480px;
  border-radius: var(--sd-radius-md);
  overflow: hidden;
  border: 1px solid var(--sd-border);
  margin-bottom: 30px;
  animation: fade-up 0.7s var(--sd-ease-out) both;
  animation-delay: 0.4s;
  box-shadow: var(--sd-shadow-soft);
}

.nf-terminal-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.35);
  border-bottom: 1px solid var(--sd-border);
}

.nf-terminal-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.nf-terminal-dot--red {
  background: #ef4444;
  opacity: 0.7;
}
.nf-terminal-dot--yellow {
  background: var(--sd-yellow);
  opacity: 0.7;
}
.nf-terminal-dot--green {
  background: var(--sd-green);
  opacity: 0.7;
}

.nf-terminal-bar-title {
  margin-left: auto;
  font-family: var(--sd-font-mono);
  font-size: 0.6rem;
  color: var(--sd-text-dim);
  letter-spacing: 0.08em;
}

.nf-terminal-body {
  font-family: var(--sd-font-mono);
  font-size: 0.78rem;
  line-height: 1.9;
  padding: 14px 16px;
  background: rgba(4, 18, 13, 0.85);
  text-align: left;
}

.nf-prompt {
  color: var(--sd-orange);
  font-weight: 800;
  margin-right: 8px;
}

.nf-cmd {
  color: var(--sd-text);
}

.nf-path {
  color: var(--sd-cyan);
}

.nf-err {
  color: rgba(248, 113, 113, 0.75);
  padding-left: 20px;
  font-size: 0.72rem;
}

.nf-hint {
  display: inline-flex;
  align-items: center;
  opacity: 0.5;
}

.nf-cmd-hint {
  color: var(--sd-text-muted);
}

.nf-cursor {
  color: var(--sd-orange);
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

/* ── Actions ──────────────────────────────────────────────────── */
.nf-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  animation: fade-up 0.7s var(--sd-ease-out) both;
  animation-delay: 0.5s;
}

/* ================================================================
   RESPONSIVE
   ================================================================ */
@media (max-width: 620px) {
  .nf-dish-wrap {
    max-width: 280px;
  }

  .nf-terminal-body {
    font-size: 0.68rem;
  }

  .nf-actions {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 280px;
  }

  .nf-ring--1,
  .nf-ring--2,
  .nf-ring--3 {
    width: 180px;
    height: 180px;
  }

  .nf-desc {
    font-size: 0.9rem;
    padding: 0 8px;
  }
}
/* ==========================================================================
   Softadastra Engine 404 override
   ========================================================================== */

.nf {
  position: relative;
  isolation: isolate;
  min-height: calc(100vh - var(--sd-header-height, 60px));
  overflow: hidden;

  background:
    radial-gradient(
      circle at 50% -10%,
      rgba(246, 222, 184, 0.48) 0%,
      rgba(222, 174, 111, 0.16) 22%,
      transparent 46%
    ),
    radial-gradient(
      circle at 82% 28%,
      rgba(213, 122, 42, 0.16) 0%,
      transparent 38%
    ),
    radial-gradient(
      circle at 16% 62%,
      rgba(246, 222, 184, 0.08) 0%,
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(18, 55, 47, 0.96) 0%,
      rgba(11, 43, 34, 0.98) 48%,
      rgba(7, 28, 23, 1) 100%
    );
}

.nf::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 35%,
      rgba(213, 122, 42, 0.14) 36%,
      rgba(226, 154, 85, 0.1) 43%,
      transparent 52%
    ),
    linear-gradient(
      18deg,
      transparent 0%,
      transparent 70%,
      rgba(213, 122, 42, 0.12) 71%,
      rgba(246, 222, 184, 0.08) 77%,
      transparent 84%
    );
}

.nf::after {
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

  opacity: 0.26;
  mix-blend-mode: soft-light;
}

.nf-inner {
  z-index: 3;
  padding-top: 18px;
  padding-bottom: 54px;
}

.nf-scanlines,
.nf-noise {
  z-index: 2;
}

.nf-particles,
.nf-pulse-rings {
  z-index: 1;
}

/* ==========================================================================
   404 satellite polish
   ========================================================================== */

.nf-dish-wrap {
  max-width: 360px;
  margin-bottom: -8px;
}

.nf-dish {
  filter: drop-shadow(0 0 22px rgba(213, 122, 42, 0.2))
    drop-shadow(0 0 58px rgba(246, 222, 184, 0.06));
}

.nf-pulse-rings {
  top: 28%;
}

.nf-ring {
  border-color: rgba(226, 154, 85, 0.42);
}

.nf-particle {
  background: linear-gradient(
    to right,
    transparent,
    rgba(226, 154, 85, 0.68),
    transparent
  );
}

/* ==========================================================================
   404 text polish
   ========================================================================== */

.nf-404 {
  -webkit-text-stroke: 1.4px rgba(226, 154, 85, 0.5);

  background: linear-gradient(
    135deg,
    #f6d6aa 0%,
    var(--sd-orange-strong) 42%,
    var(--sd-orange) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  text-shadow:
    0 0 28px rgba(213, 122, 42, 0.14),
    0 12px 42px rgba(0, 0, 0, 0.24);
}

.nf-404-sub {
  color: rgba(246, 232, 204, 0.44);
}

.nf-title {
  color: rgba(255, 248, 235, 0.96);
}

.nf-title-accent {
  background: linear-gradient(125deg, #e29a55, #f6d6aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nf-desc {
  max-width: 48ch;
  color: rgba(246, 232, 204, 0.68);
}

/* ==========================================================================
   404 terminal polish
   ========================================================================== */

.nf-terminal {
  max-width: 520px;
  border-color: rgba(255, 244, 224, 0.12);
  border-radius: 16px;

  background: linear-gradient(
    180deg,
    rgba(22, 75, 60, 0.66),
    rgba(11, 43, 34, 0.72)
  );

  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.28),
    0 0 0 1px rgba(255, 244, 224, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.nf-terminal-bar {
  border-bottom-color: rgba(255, 244, 224, 0.1);
  background: rgba(255, 244, 224, 0.055);
}

.nf-terminal-body {
  background:
    radial-gradient(
      420px 180px at 72% 0%,
      rgba(213, 122, 42, 0.1),
      transparent 70%
    ),
    rgba(6, 24, 19, 0.6);
}

.nf-terminal-bar-title {
  color: rgba(246, 232, 204, 0.38);
}

.nf-cmd {
  color: rgba(255, 248, 235, 0.9);
}

.nf-path {
  color: #f6d6aa;
}

.nf-err {
  color: rgba(248, 113, 113, 0.82);
}

.nf-cmd-hint {
  color: rgba(246, 232, 204, 0.5);
}

/* ==========================================================================
   404 actions polish
   ========================================================================== */

.nf-actions :deep(.sd-button) {
  min-height: 42px;
  border-radius: 10px;
}

.nf-actions :deep(.sd-button-primary),
.nf-btn-primary {
  border: 1px solid rgba(255, 215, 168, 0.18);
  background: linear-gradient(
    180deg,
    var(--sd-orange-strong),
    var(--sd-orange)
  );
  color: #102b23;

  box-shadow:
    0 10px 28px rgba(213, 122, 42, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.26);
}

.nf-actions :deep(.sd-button-primary:hover),
.nf-btn-primary:hover {
  box-shadow:
    0 14px 34px rgba(213, 122, 42, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.32);
}

.nf-actions :deep(.sd-button-secondary),
.nf-btn-secondary {
  border-color: rgba(255, 244, 224, 0.13);
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.nf-actions :deep(.sd-button-secondary:hover),
.nf-btn-secondary:hover {
  border-color: rgba(255, 244, 224, 0.22);
  background: rgba(255, 244, 224, 0.075);
  color: rgba(255, 248, 235, 0.96);
}

/* ==========================================================================
   404 responsive polish
   ========================================================================== */

@media (max-width: 620px) {
  .nf {
    align-items: flex-start;
  }

  .nf-inner {
    padding-top: 18px;
    padding-bottom: 42px;
  }

  .nf-dish-wrap {
    max-width: 250px;
    margin-bottom: -4px;
  }

  .nf-404-wrap {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
  }

  .nf-404-sub {
    letter-spacing: 0.18em;
  }

  .nf-terminal {
    max-width: 100%;
    margin-bottom: 24px;
  }

  .nf-terminal-body {
    overflow-x: auto;
    white-space: nowrap;
  }

  .nf-actions {
    max-width: 320px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nf-particle,
  .nf-ring,
  .nf-dish-wrap,
  .nf-dish,
  .nf-signal path,
  .nf-signal-x,
  .nf-feed-blink,
  .nf-dish-bowl,
  .nf-ground-line,
  .nf-cursor,
  .nf-404-wrap,
  .nf-title,
  .nf-desc,
  .nf-terminal,
  .nf-actions {
    animation: none !important;
  }
}
</style>
