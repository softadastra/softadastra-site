<template>
  <section class="hero-section">
    <div
      class="hero-section__bg-grid"
      aria-hidden="true"
    />

    <div
      class="hero-section__glow"
      aria-hidden="true"
    />

    <div class="hero-section__inner">
      <div class="hero-section__content">
        <BaseBadge class="hero-section__badge">
          Softadastra Company
        </BaseBadge>

        <h1 class="hero-section__title">
          Reliable
          <span>local-first</span>
          infrastructure for real-world applications.
        </h1>

        <p class="hero-section__desc">
          An open stack of runtimes, sync engines, developer tools, and cloud
          products, built for software that must keep working when the network
          fails.
        </p>

        <div class="hero-section__actions">
          <BaseButton
            :href="links.docs"
            arrow
          >
            Explore docs
          </BaseButton>

          <BaseButton
            :href="links.business"
            variant="secondary"
          >
            Softadastra Cloud
          </BaseButton>
        </div>
      </div>

      <div
        class="hero-section__visual"
        aria-label="Softadastra ecosystem"
      >
        <svg
          class="hero-section__visual-svg"
          viewBox="0 0 440 440"
          fill="none"
          aria-hidden="true"
        >
          <circle
            class="hero-section__ring"
            cx="220"
            cy="220"
            r="80"
          />

          <circle
            class="hero-section__ring hero-section__ring--soft"
            cx="220"
            cy="220"
            r="120"
          />

          <line
            class="hero-section__line"
            x1="220"
            y1="220"
            x2="220"
            y2="50"
          />

          <line
            class="hero-section__line"
            x1="220"
            y1="220"
            x2="382"
            y2="158"
          />

          <line
            class="hero-section__line"
            x1="220"
            y1="220"
            x2="320"
            y2="368"
          />

          <line
            class="hero-section__line"
            x1="220"
            y1="220"
            x2="120"
            y2="368"
          />

          <line
            class="hero-section__line"
            x1="220"
            y1="220"
            x2="58"
            y2="158"
          />
        </svg>

        <div class="hero-section__hub">
          <span class="hero-section__hub-icon">
            <img
              src="/logo.svg"
              alt=""
              aria-hidden="true"
            />
          </span>

          <span class="hero-section__hub-label">
            Softadastra<br />
            Company
          </span>
        </div>

        <div
          v-for="(stack, index) in heroStacks"
          :key="stack.id"
          :class="[
            'hero-section__node',
            `hero-section__node--${index}`,
          ]"
        >
          <span
            class="hero-section__node-dot"
            :class="`hero-section__node-dot--${stack.color}`"
          />

          <span class="hero-section__node-name">
            {{ stack.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

import { links } from "../../data/links";
import { stacks } from "../../data/stacks";

import BaseBadge from "../ui/BaseBadge.vue";
import BaseButton from "../ui/BaseButton.vue";

const heroStacks = computed(() => {
  return stacks.slice(0, 5);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 96px 0 72px;
}

.hero-section__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 64px 64px;
  animation: sd-grid-scroll 12s linear infinite;
  mask-image: radial-gradient(
    ellipse 80% 70% at 50% 25%,
    black 0%,
    transparent 70%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 80% 70% at 50% 25%,
    black 0%,
    transparent 70%
  );
}

.hero-section__glow {
  position: absolute;
  top: -200px;
  left: 50%;
  width: 1000px;
  height: 540px;
  background: radial-gradient(
    ellipse at center,
    rgba(174, 185, 255, 0.09) 0%,
    rgba(110, 231, 183, 0.03) 40%,
    transparent 70%
  );
  pointer-events: none;
  transform: translateX(-50%);
}

.hero-section__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 440px;
  gap: 56px;
  width: min(100% - 48px, var(--sd-container));
  align-items: center;
  margin-inline: auto;
}

.hero-section__content {
  min-width: 0;
}

.hero-section__badge {
  margin-bottom: 28px;
  animation: sd-fade-up 0.6s var(--sd-ease-out) 0.1s both;
}

.hero-section__title {
  max-width: 640px;
  margin: 0 0 22px;
  color: var(--sd-text);
  font-size: clamp(40px, 4.8vw, 64px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.045em;
  animation: sd-fade-up 0.7s var(--sd-ease-out) 0.2s both;
}

.hero-section__title span {
  color: var(--sd-accent);
  white-space: nowrap;
}

.hero-section__desc {
  max-width: 520px;
  margin: 0 0 36px;
  color: var(--sd-text-soft);
  font-size: 17.5px;
  line-height: 1.72;
  animation: sd-fade-up 0.7s var(--sd-ease-out) 0.32s both;
}

.hero-section__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  animation: sd-fade-up 0.7s var(--sd-ease-out) 0.42s both;
}

.hero-section__visual {
  position: relative;
  width: 440px;
  height: 440px;
  flex-shrink: 0;
  animation: sd-fade-in 1s var(--sd-ease-out) 0.5s both;
}

.hero-section__visual-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-section__line {
  stroke: rgba(174, 185, 255, 0.12);
  stroke-width: 1;
  stroke-dasharray: 5 5;
}

.hero-section__ring {
  fill: none;
  stroke: rgba(174, 185, 255, 0.08);
  stroke-width: 1;
}

.hero-section__ring--soft {
  stroke: rgba(174, 185, 255, 0.04);
}

.hero-section__hub {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
}

.hero-section__hub-icon {
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
}

.hero-section__hub-icon img {
  width: 38px;
  height: 38px;
  object-fit: contain;
}

.hero-section__hub-label {
  color: var(--sd-accent);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  letter-spacing: 0.02em;
}

.hero-section__node {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-raised);
  cursor: default;
  transition:
    transform 250ms ease,
    border-color var(--sd-transition),
    background var(--sd-transition);
}

.hero-section__node:hover {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg);
  transform: scale(1.04);
}

.hero-section__node-dot {
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  border-radius: var(--sd-radius-full);
}

.hero-section__node-dot--vix {
  background: var(--sd-vix);
}

.hero-section__node-dot--softadastra {
  background: var(--sd-softadastra);
}

.hero-section__node-dot--kordex {
  background: var(--sd-kordex);
}

.hero-section__node-dot--cnerium {
  background: var(--sd-cnerium);
}

.hero-section__node-dot--pulsegrid {
  background: var(--sd-pulsegrid);
}

.hero-section__node-name {
  color: var(--sd-text);
  font-size: 13.5px;
  font-weight: 650;
  white-space: nowrap;
}

.hero-section__node--0 {
  top: 18px;
  left: 50%;
  animation: sd-float 5s ease-in-out infinite;
  transform: translateX(-50%);
}

.hero-section__node--0:hover {
  transform: translateX(-50%) scale(1.04);
}

.hero-section__node--1 {
  top: 31%;
  right: 4px;
  animation: sd-float 5s ease-in-out 0.5s infinite;
}

.hero-section__node--2 {
  right: 20px;
  bottom: 18%;
  animation: sd-float 5s ease-in-out 1s infinite;
}

.hero-section__node--3 {
  bottom: 18%;
  left: 20px;
  animation: sd-float 5s ease-in-out 1.5s infinite;
}

.hero-section__node--4 {
  top: 31%;
  left: 4px;
  animation: sd-float 5s ease-in-out 2s infinite;
}

@media (max-width: 1080px) {
  .hero-section {
    padding: 72px 0 56px;
  }

  .hero-section__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-section__visual {
    width: 360px;
    height: 360px;
    margin-inline: auto;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 48px 0 36px;
  }

  .hero-section__inner {
    width: min(100% - 32px, var(--sd-container));
  }

  .hero-section__title {
    font-size: clamp(39px, 12vw, 48px);
  }

  .hero-section__desc {
    font-size: 16px;
  }

  .hero-section__visual {
    width: 290px;
    height: 290px;
  }

  .hero-section__node {
    padding: 6px 12px;
  }

  .hero-section__node-dot {
    width: 7px;
    height: 7px;
  }

  .hero-section__node-name {
    font-size: 12px;
  }
}

@media (max-width: 420px) {
  .hero-section__visual {
    width: 260px;
    height: 260px;
  }

  .hero-section__node--1 {
    right: -8px;
  }

  .hero-section__node--4 {
    left: -8px;
  }
}
</style>
