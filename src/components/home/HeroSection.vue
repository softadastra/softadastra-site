<template>
  <section class="hero" id="top">
    <div class="hero__inner">
      <div class="hero__message sd-reveal">
        <h1>
          Modern C++ tooling,
          <span>from code to cloud.</span>
          One unified workflow.
        </h1>

        <div class="hero__support">
          <p>
            Softadastra brings Vix.cpp, Rix, and Softadastra Cloud into one
            coherent workflow for building, extending, and managing native C++
            applications, from local development to team operations.
          </p>

          <div class="hero__actions" aria-label="Hero actions">
            <BaseButton :href="links.cloud" arrow>Get started</BaseButton>
            <BaseButton href="#platform" variant="secondary">
              Explore the platform
            </BaseButton>
          </div>
        </div>
      </div>

      <HeroProductVisual class="sd-reveal sd-reveal-d2" />

      <div
        class="hero__platform-row sd-reveal sd-reveal-d3"
        aria-label="Primary Softadastra platform products"
      >
        <span>Vix.cpp</span>
        <span>Rix</span>
        <span>Softadastra Cloud</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

import BaseButton from "../ui/BaseButton.vue";
import HeroProductVisual from "./HeroProductVisual.vue";
</script>

<style scoped>
.hero {
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg);
  padding: 72px 0 64px;
}

.hero__inner {
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
}

/* --- Modular-style header: big title left, support right, top-aligned --- */
.hero__message {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
  gap: clamp(32px, 6vw, 88px);
  align-items: start;
  margin-bottom: 44px;
}

.hero h1 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(2.9rem, 4.9vw, 4.6rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.045em;
}

.hero h1 span {
  color: var(--sd-orange-dark);
}

.hero__support {
  min-width: 0;
  padding-top: 8px;
}

.hero__support p {
  max-width: 460px;
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.65;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.hero__actions :deep(.sd-button-primary) {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.hero__actions :deep(.sd-button-primary:hover) {
  background: var(--sd-orange-dark);
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.hero__actions :deep(.sd-button-secondary) {
  border-color: var(--sd-border-strong);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
}

.hero__actions :deep(.sd-button-secondary:hover) {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

/* --- Logo/product row under the visual, quiet like Modular's logo strip --- */
.hero__platform-row {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(24px, 6vw, 64px);
  align-items: center;
  justify-content: center;
  margin-top: 34px;
}

.hero__platform-row span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 720;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.75;
}

@media (max-width: 920px) {
  .hero {
    padding: 52px 0 56px;
  }

  .hero__message {
    grid-template-columns: 1fr;
    gap: 22px;
    margin-bottom: 30px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 42px 0 48px;
  }

  .hero__inner {
    width: min(100% - 28px, var(--sd-container));
  }

  .hero h1 {
    font-size: clamp(2.4rem, 11.5vw, 3.3rem);
  }

  .hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hero__actions :deep(.sd-button) {
    width: 100%;
  }
}
</style>
