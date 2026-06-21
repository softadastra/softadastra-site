<template>
  <section class="ecosystem-diagram">
    <div class="ecosystem-diagram__inner">
      <div class="ecosystem-diagram__head">
        <span class="ecosystem-diagram__eyebrow"> Architecture </span>

        <h3>Focused C++ tooling. Clear technical layers.</h3>

        <p>
          Softadastra is a C++ tooling company. Vix.cpp provides the open C++
          foundation, while Softadastra Engine, Cnerium, Kordex, and Pico each
          serve a clear technical role in the ecosystem.
        </p>
      </div>

      <div class="ecosystem-diagram__map">
        <div class="ecosystem-diagram__center">
          <span class="ecosystem-diagram__logo">
            <img src="/logos/softadastra.svg" alt="" aria-hidden="true" />
          </span>

          <span class="ecosystem-diagram__center-copy">
            <strong>Softadastra</strong>
            <small>The C++ Tooling Company</small>
          </span>
        </div>

        <div class="ecosystem-diagram__rail" aria-hidden="true" />

        <div class="ecosystem-diagram__layers">
          <RouterLink
            v-for="(stack, index) in visibleStacks"
            :key="stack.id"
            :to="`/stacks/${stack.id}`"
            :class="[
              'ecosystem-diagram__layer',
              `ecosystem-diagram__layer--${stack.color}`,
            ]"
            :style="{ '--layer-index': index }"
          >
            <span
              class="ecosystem-diagram__marker"
              :class="`ecosystem-diagram__marker--${stack.color}`"
              aria-hidden="true"
            >
              <img :src="getStackLogo(stack)" :alt="`${stack.name} logo`" />
            </span>

            <span class="ecosystem-diagram__layer-body">
              <span class="ecosystem-diagram__layer-meta">
                {{ stack.layer }}
              </span>

              <strong>{{ stack.name }}</strong>

              <small>{{ stack.role }}</small>
            </span>
          </RouterLink>
        </div>

        <div class="ecosystem-diagram__business">
          <div class="ecosystem-diagram__business-line" />

          <RouterLink to="/company" class="ecosystem-diagram__business-item">
            <span>Company direction</span>
            <strong>C++ Tooling</strong>
            <small>
              Build and maintain open tooling that makes modern C++ development
              simpler, faster, and more accessible.
            </small>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

import { stacks } from "../../data/stacks";

const logoMap = {
  vix: "/logos/vix.svg",
  "softadastra-engine": "/logos/softadastra.svg",
  cnerium: "/logos/cnerium.svg",
  kordex: "/logos/kordex.svg",
  pico: "/logos/pico.svg",
  registry: "/logos/vix-registry.svg",
};

const visibleStacks = computed(() => {
  return stacks;
});

function getStackLogo(stack) {
  return (
    logoMap[stack.id] || logoMap[stack.color] || logoMap["softadastra-engine"]
  );
}
</script>

<style scoped>
.ecosystem-diagram {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 28px;
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  );
}

.ecosystem-diagram__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(36px, 5vw, 78px);
  align-items: center;
  padding: clamp(28px, 4vw, 46px);
}

.ecosystem-diagram__head {
  max-width: 480px;
}

.ecosystem-diagram__eyebrow {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 28px;
  padding: 0 11px;
  border: 1px solid rgba(213, 122, 42, 0.24);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.1);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ecosystem-diagram__head h3 {
  max-width: 440px;
  margin: 18px 0 0;
  color: var(--sd-text);
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 860;
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.ecosystem-diagram__head p {
  max-width: 440px;
  margin: 18px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.7;
}

.ecosystem-diagram__map {
  position: relative;
  min-height: 520px;
}

.ecosystem-diagram__center {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  display: inline-flex;
  align-items: center;
  gap: 13px;
  padding: 13px 16px 13px 13px;
  border: 1px solid rgba(213, 122, 42, 0.28);
  border-radius: 999px;
  background: rgba(15, 55, 45, 0.92);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);
  transform: translate(-50%, -50%);
}

.ecosystem-diagram__logo {
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
}

.ecosystem-diagram__logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.ecosystem-diagram__center-copy {
  display: grid;
  gap: 3px;
}

.ecosystem-diagram__center-copy strong {
  color: var(--sd-text);
  font-size: 16px;
  font-weight: 820;
  line-height: 1;
  letter-spacing: -0.035em;
}

.ecosystem-diagram__center-copy small {
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ecosystem-diagram__rail {
  position: absolute;
  top: 50%;
  right: 8%;
  left: 8%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(213, 122, 42, 0.38),
    rgba(255, 255, 255, 0.18),
    rgba(213, 122, 42, 0.38),
    transparent
  );
  transform: translateY(-50%);
}

.ecosystem-diagram__rail::before,
.ecosystem-diagram__rail::after {
  position: absolute;
  top: 50%;
  width: 1px;
  height: 360px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(255, 255, 255, 0.18),
    transparent
  );
  content: "";
  transform: translateY(-50%);
}

.ecosystem-diagram__rail::before {
  left: 28%;
}

.ecosystem-diagram__rail::after {
  right: 28%;
}

.ecosystem-diagram__layers {
  position: absolute;
  inset: 0;
}

.ecosystem-diagram__layer {
  position: absolute;
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 12px;
  width: min(230px, 44%);
  align-items: start;
  color: inherit;
  text-decoration: none;
  transition:
    transform 180ms ease,
    opacity 180ms ease;
}

.ecosystem-diagram__layer:hover {
  transform: translateY(-3px);
}

.ecosystem-diagram__layer:nth-child(1) {
  top: 4%;
  left: 4%;
}

.ecosystem-diagram__layer:nth-child(2) {
  top: 4%;
  right: 4%;
}

.ecosystem-diagram__layer:nth-child(3) {
  top: 38%;
  left: 0;
}

.ecosystem-diagram__layer:nth-child(4) {
  top: 38%;
  right: 0;
}

.ecosystem-diagram__layer:nth-child(5) {
  bottom: 5%;
  left: 7%;
}

.ecosystem-diagram__layer:nth-child(6) {
  right: 7%;
  bottom: 5%;
}

.ecosystem-diagram__marker {
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 0;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
  box-shadow: none;
}

.ecosystem-diagram__marker img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.ecosystem-diagram__marker--vix {
  color: var(--sd-vix);
}

.ecosystem-diagram__marker--softadastra {
  color: var(--sd-softadastra);
}

.ecosystem-diagram__marker--kordex {
  color: var(--sd-kordex);
}

.ecosystem-diagram__marker--cnerium {
  color: var(--sd-cnerium);
}

.ecosystem-diagram__marker--pulsegrid {
  color: var(--sd-pulsegrid);
}

.ecosystem-diagram__marker--converdict {
  color: var(--sd-converdict);
}

.ecosystem-diagram__layer-body {
  display: grid;
  gap: 5px;
}

.ecosystem-diagram__layer-meta {
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.ecosystem-diagram__layer strong {
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 820;
  line-height: 1.05;
  letter-spacing: -0.035em;
  transition: color 180ms ease;
}

.ecosystem-diagram__layer small {
  max-width: 210px;
  color: var(--sd-text-muted);
  font-size: 12.5px;
  line-height: 1.45;
}

.ecosystem-diagram__layer:hover strong {
  color: var(--sd-orange-strong);
}

.ecosystem-diagram__business {
  position: absolute;
  right: 50%;
  bottom: -2px;
  left: 50%;
  z-index: 3;
  display: grid;
  justify-items: center;
  transform: translateX(-50%);
}

.ecosystem-diagram__business-line {
  width: 1px;
  height: 56px;
  background: linear-gradient(180deg, rgba(213, 122, 42, 0.42), transparent);
}

.ecosystem-diagram__business-item {
  display: grid;
  width: min(360px, 90vw);
  gap: 5px;
  padding: 14px 16px;
  border: 1px solid rgba(213, 122, 42, 0.22);
  border-radius: 18px;
  background: rgba(15, 55, 45, 0.92);
  color: inherit;
  text-align: center;
  text-decoration: none;
  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}

.ecosystem-diagram__business-item:hover {
  border-color: rgba(213, 122, 42, 0.36);
  transform: translateY(-2px);
}

.ecosystem-diagram__business-item span {
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ecosystem-diagram__business-item strong {
  color: var(--sd-text);
  font-size: 16px;
  font-weight: 820;
  letter-spacing: -0.025em;
}

.ecosystem-diagram__business-item small {
  color: var(--sd-text-muted);
  font-size: 12.5px;
  line-height: 1.45;
}
.ecosystem-diagram__logo,
.ecosystem-diagram__marker {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
  box-shadow: none;
  flex: 0 0 auto;
}

.ecosystem-diagram__logo {
  width: 46px;
  height: 46px;
}

.ecosystem-diagram__marker {
  width: 42px;
  height: 42px;
  margin-top: 0;
}

.ecosystem-diagram__logo img,
.ecosystem-diagram__marker img {
  display: block;
  width: 30px;
  height: 30px;
  max-width: 30px;
  max-height: 30px;
  object-fit: contain;
  flex: 0 0 auto;
  transform: none;
  filter: none;
  opacity: 1;
  image-rendering: auto;
}
@media (max-width: 1120px) {
  .ecosystem-diagram__inner {
    grid-template-columns: 1fr;
  }

  .ecosystem-diagram__head {
    max-width: 720px;
  }

  .ecosystem-diagram__head h3,
  .ecosystem-diagram__head p {
    max-width: 720px;
  }
}

@media (max-width: 760px) {
  .ecosystem-diagram__inner {
    padding: 24px;
  }

  .ecosystem-diagram__map {
    display: grid;
    min-height: auto;
    gap: 18px;
  }

  .ecosystem-diagram__center,
  .ecosystem-diagram__business,
  .ecosystem-diagram__layer {
    position: relative;
    inset: auto;
    right: auto;
    bottom: auto;
    left: auto;
    width: 100%;
    transform: none;
  }

  .ecosystem-diagram__center {
    justify-content: flex-start;
    border-radius: 20px;
  }

  .ecosystem-diagram__rail,
  .ecosystem-diagram__business-line {
    display: none;
  }

  .ecosystem-diagram__layers {
    position: relative;
    display: grid;
    gap: 14px;
  }

  .ecosystem-diagram__layer {
    grid-template-columns: 38px minmax(0, 1fr);
    padding: 0;
  }

  .ecosystem-diagram__business {
    justify-items: stretch;
  }

  .ecosystem-diagram__business-item {
    width: 100%;
    text-align: left;
  }

  .ecosystem-diagram__marker {
    width: 40px;
    height: 40px;
  }

  .ecosystem-diagram__marker img {
    width: 28px;
    height: 28px;
    max-width: 28px;
    max-height: 28px;
  }
  .ecosystem-diagram__layer {
    grid-template-columns: 42px minmax(0, 1fr);
  }
}
</style>
