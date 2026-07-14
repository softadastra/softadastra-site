<template>
  <section class="problem-section sd-section">
    <div class="sd-section__inner problem-section__inner">
      <div class="problem-section__copy sd-reveal">
        <p class="problem-section__eyebrow">
          <span class="problem-section__eyebrow-dot" aria-hidden="true" />
          The problem
        </p>

        <h2>C++ development is still fragmented.</h2>

        <p>
          Modern C++ teams still rely on separate systems for builds,
          application libraries, public and private packages, diagnostics,
          runtime infrastructure, and team operations.
        </p>

        <p>
          Softadastra connects these layers through one coherent C++ toolchain.
        </p>

        <div class="problem-section__stat" aria-hidden="true">
          <span class="problem-section__stat-num">6+</span>
          <span class="problem-section__stat-text">
            disconnected systems across one development workflow
          </span>
        </div>
      </div>

      <div
        class="problem-section__model sd-reveal sd-reveal-d2"
        aria-label="Fragmented C++ workflow converging into one platform"
      >
        <!-- Scattered layers -->
        <div class="pm__scatter">
          <span class="pm__chip pm__chip--a">
            <i aria-hidden="true">{ }</i>
            Build tools
          </span>
          <span class="pm__chip pm__chip--b">
            <i aria-hidden="true">⚙</i>
            Runtime libraries
          </span>
          <span class="pm__chip pm__chip--c">
            <i aria-hidden="true">▦</i>
            Packages
          </span>
          <span class="pm__chip pm__chip--d">
            <i aria-hidden="true">!</i>
            Diagnostics
          </span>
          <span class="pm__chip pm__chip--e">
            <i aria-hidden="true">◎</i>
            Team operations
          </span>

          <!-- Converging connectors -->
          <svg
            class="pm__wires"
            viewBox="0 0 320 200"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path d="M60 34 C 60 110, 160 120, 160 180" />
            <path d="M250 30 C 250 108, 160 122, 160 180" />
            <path d="M40 92 C 40 130, 160 140, 160 180" />
            <path d="M280 96 C 280 132, 160 140, 160 180" />
            <path d="M160 70 C 160 120, 160 130, 160 180" />
          </svg>
        </div>

        <!-- Unified rail -->
        <div class="pm__unified">
          <span class="pm__unified-glow" aria-hidden="true" />
          <span class="pm__unified-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
              <path d="M3.3 8.3 12 13l8.7-4.7" />
              <path d="M12 22V13" />
            </svg>
          </span>
          <div class="pm__unified-text">
            <strong>One C++ platform path</strong>
            <em>Vix.cpp · Rix · Softadastra Cloud</em>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(340px, 0.86fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

/* ---------- Copy ---------- */
.problem-section__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.problem-section__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
}

.problem-section h2 {
  max-width: 680px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.problem-section p:not(.problem-section__eyebrow) {
  max-width: 640px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.problem-section__stat {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--sd-border);
}

.problem-section__stat-num {
  color: var(--sd-orange-dark);
  font-size: 30px;
  font-weight: 780;
  letter-spacing: -0.04em;
  line-height: 1;
}

.problem-section__stat-text {
  color: var(--sd-text-muted);
  font-size: 13px;
  font-weight: 640;
}

/* ---------- Model visual ---------- */
.problem-section__model {
  position: relative;
  overflow: hidden;
  padding: 20px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background:
    radial-gradient(
      120% 90% at 50% 0%,
      var(--sd-accent-bg-soft),
      transparent 60%
    ),
    var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

/* dotted texture backdrop */
.problem-section__model::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--sd-border) 1px, transparent 1px);
  background-size: 16px 16px;
  opacity: 0.5;
  mask-image: radial-gradient(closest-side at 50% 30%, #000, transparent 85%);
  pointer-events: none;
}

.pm__scatter {
  position: relative;
  height: 196px;
}

.pm__wires {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.pm__wires path {
  stroke: var(--sd-border-strong);
  stroke-width: 1.5;
  stroke-dasharray: 4 5;
  animation: pm-flow 3.2s linear infinite;
}

@keyframes pm-flow {
  to {
    stroke-dashoffset: -18;
  }
}

.pm__chip {
  position: absolute;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 11px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
  font-size: 12.5px;
  font-weight: 660;
  white-space: nowrap;
  box-shadow: var(--sd-shadow-soft);
  animation: pm-float 6s ease-in-out infinite;
}

.pm__chip i {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-muted);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
}

.pm__chip--a {
  top: 6px;
  left: 2%;
  animation-delay: 0s;
}
.pm__chip--b {
  top: 2px;
  right: 4%;
  animation-delay: 0.8s;
}
.pm__chip--c {
  top: 60px;
  left: -2%;
  animation-delay: 1.6s;
}
.pm__chip--d {
  top: 66px;
  right: 0%;
  animation-delay: 2.4s;
}
.pm__chip--e {
  top: 40px;
  left: 32%;
  animation-delay: 3.2s;
}

@keyframes pm-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* ---------- Unified rail ---------- */
.pm__unified {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  padding: 14px;
  border: 1px solid var(--sd-border-highlight);
  border-radius: var(--sd-radius-md);
  background: var(--sd-accent-bg-soft);
  overflow: hidden;
}

.pm__unified-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(214, 106, 40, 0.14),
    transparent
  );
  transform: translateX(-100%);
  animation: pm-sweep 3.4s ease-in-out infinite;
}

@keyframes pm-sweep {
  0%,
  60% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.pm__unified-icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: var(--sd-radius-md);
  background: var(--sd-orange);
  color: #fff;
  box-shadow: 0 2px 8px rgba(173, 81, 23, 0.3);
}

.pm__unified-icon svg {
  width: 19px;
  height: 19px;
}

.pm__unified-text {
  display: grid;
  gap: 2px;
  line-height: 1.3;
}

.pm__unified-text strong {
  color: var(--sd-orange-dark);
  font-size: 14px;
  font-weight: 740;
  letter-spacing: -0.01em;
}

.pm__unified-text em {
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-style: normal;
  font-weight: 640;
}

/* ---------- Motion / responsive ---------- */
@media (prefers-reduced-motion: reduce) {
  .pm__chip,
  .pm__wires path,
  .pm__unified-glow {
    animation: none;
  }
}

@media (max-width: 860px) {
  .problem-section__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .pm__scatter {
    height: 220px;
  }

  .pm__chip {
    font-size: 11.5px;
    padding: 6px 9px;
  }

  .pm__chip--e {
    left: 26%;
  }
}
</style>
