<template>
  <section class="ecosystem-diagram">
    <div class="ecosystem-diagram__glow" aria-hidden="true" />

    <div class="ecosystem-diagram__main">
      <div class="ecosystem-diagram__node ecosystem-diagram__node--company">
        <span class="ecosystem-diagram__label">
          Company
        </span>

        <strong>Softadastra</strong>

        <p>
          The company hub that maintains the open stack and connects it to
          commercial products.
        </p>
      </div>

      <div class="ecosystem-diagram__connector">
        <span />
      </div>

      <div class="ecosystem-diagram__layers">
        <div
          v-for="stack in stacks"
          :key="stack.id"
          :class="[
            'ecosystem-diagram__node',
            'ecosystem-diagram__node--stack',
            `ecosystem-diagram__node--${stack.color}`,
          ]"
        >
          <div
            :class="[
              'ecosystem-diagram__icon',
              `ecosystem-diagram__icon--${stack.color}`,
            ]"
            aria-hidden="true"
          >
            <svg
              v-if="stack.icon === 'layers'"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>

            <svg
              v-else-if="stack.icon === 'shield'"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>

            <svg
              v-else-if="stack.icon === 'runtime'"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="3"
              />
              <path d="M8 16V8l8 4-8 4z" />
            </svg>

            <svg
              v-else-if="stack.icon === 'framework'"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
            </svg>

            <svg
              v-else
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
              />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
              <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
            </svg>
          </div>

          <span class="ecosystem-diagram__label">
            {{ stack.layer }}
          </span>

          <strong>{{ stack.name }}</strong>

          <p>{{ stack.role }}</p>
        </div>
      </div>

      <div class="ecosystem-diagram__connector">
        <span />
      </div>

      <div class="ecosystem-diagram__node ecosystem-diagram__node--business">
        <span class="ecosystem-diagram__label">
          Business layer
        </span>

        <strong>Softadastra Cloud</strong>

        <p>
          Commercial SaaS, observability, builds, managed services, and
          enterprise support around the open foundation.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stacks } from "../../data/stacks";
</script>

<style scoped>
.ecosystem-diagram {
  position: relative;
  overflow: hidden;
  padding: 30px;
  border: 1px solid var(--sd-border);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012)),
    #0d1319;
  box-shadow:
    0 26px 90px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
}

.ecosystem-diagram__glow {
  position: absolute;
  top: -180px;
  left: 50%;
  width: 720px;
  height: 360px;
  border-radius: 999px;
  background: radial-gradient(
    ellipse at center,
    rgba(174, 185, 255, 0.12),
    rgba(110, 231, 183, 0.04),
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
  transform: translateX(-50%);
}

.ecosystem-diagram__main {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 18px;
}

.ecosystem-diagram__node {
  position: relative;
  overflow: hidden;
  padding: 22px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.038), rgba(255, 255, 255, 0.014)),
    rgba(12, 16, 21, 0.72);
  text-align: center;
  transition:
    transform 220ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 220ms ease;
}

.ecosystem-diagram__node::before {
  position: absolute;
  top: -90px;
  right: -90px;
  width: 200px;
  height: 200px;
  border-radius: 999px;
  background: rgba(174, 185, 255, 0.08);
  filter: blur(44px);
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 220ms ease;
}

.ecosystem-diagram__node:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.065), rgba(255, 255, 255, 0.018)),
    rgba(12, 16, 21, 0.78);
  box-shadow:
    0 18px 56px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-3px);
}

.ecosystem-diagram__node:hover::before {
  opacity: 1;
}

.ecosystem-diagram__node--company {
  border-color: rgba(174, 185, 255, 0.18);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.08), rgba(255, 255, 255, 0.016)),
    rgba(12, 16, 21, 0.82);
}

.ecosystem-diagram__node--business {
  border-color: rgba(110, 231, 183, 0.18);
  background:
    linear-gradient(180deg, rgba(110, 231, 183, 0.07), rgba(255, 255, 255, 0.016)),
    rgba(12, 16, 21, 0.82);
}

.ecosystem-diagram__node--business::before {
  background: rgba(110, 231, 183, 0.1);
}

.ecosystem-diagram__layers {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.ecosystem-diagram__node--stack {
  display: grid;
  justify-items: center;
  padding: 20px 14px;
}

.ecosystem-diagram__icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  margin-bottom: 14px;
  border-radius: 13px;
}

.ecosystem-diagram__icon svg {
  width: 21px;
  height: 21px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ecosystem-diagram__icon--vix {
  background: var(--sd-vix-bg);
  color: var(--sd-vix);
}

.ecosystem-diagram__icon--softadastra {
  background: var(--sd-softadastra-bg);
  color: var(--sd-softadastra);
}

.ecosystem-diagram__icon--kordex {
  background: var(--sd-kordex-bg);
  color: var(--sd-kordex);
}

.ecosystem-diagram__icon--cnerium {
  background: var(--sd-cnerium-bg);
  color: var(--sd-cnerium);
}

.ecosystem-diagram__icon--pulsegrid {
  background: var(--sd-pulsegrid-bg);
  color: var(--sd-pulsegrid);
}

.ecosystem-diagram__label {
  display: block;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ecosystem-diagram__node strong {
  display: block;
  margin-top: 8px;
  color: var(--sd-text);
  font-size: 22px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.045em;
}

.ecosystem-diagram__node p {
  max-width: 560px;
  margin: 10px auto 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.55;
}

.ecosystem-diagram__node--stack strong {
  font-size: 17px;
}

.ecosystem-diagram__node--stack p {
  max-width: 180px;
  font-size: 12.5px;
  line-height: 1.42;
}

.ecosystem-diagram__connector {
  display: grid;
  height: 34px;
  place-items: center;
}

.ecosystem-diagram__connector span {
  display: block;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(174, 185, 255, 0.24),
    transparent
  );
}

@media (max-width: 1080px) {
  .ecosystem-diagram__layers {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ecosystem-diagram__node--stack p {
    max-width: 280px;
  }
}

@media (max-width: 620px) {
  .ecosystem-diagram {
    padding: 20px;
    border-radius: 20px;
  }

  .ecosystem-diagram__layers {
    grid-template-columns: 1fr;
  }

  .ecosystem-diagram__node {
    padding: 20px;
  }

  .ecosystem-diagram__node--stack {
    justify-items: start;
    text-align: left;
  }

  .ecosystem-diagram__node--stack p {
    max-width: none;
  }

  .ecosystem-diagram__node strong {
    font-size: 20px;
  }
}
</style>
