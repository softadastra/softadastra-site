<template>
  <section class="cta-section">
    <div class="cta-section__glow" aria-hidden="true" />

    <div class="cta-section__inner sd-reveal">
      <h2 class="cta-section__title">
        Start with Vix.cpp, then explore the Softadastra ecosystem.
      </h2>

      <p class="cta-section__desc">
        Learn the C++ tooling foundation, explore the technical layers around
        it, and follow the engineering work behind modern C++ development.
      </p>

      <div class="cta-section__actions">
        <BaseButton :href="links.vix" arrow> Explore Vix.cpp </BaseButton>

        <BaseButton to="/ecosystem" variant="secondary">
          View ecosystem
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

import BaseButton from "../ui/BaseButton.vue";
</script>

<style scoped>
.cta-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 120px 0;
  border-top: 1px solid var(--sd-border);
  text-align: center;
  background: var(--sd-bg);
}

.cta-section::before,
.cta-section::after {
  content: none;
}

.cta-section__glow {
  display: none;
}

.cta-section__inner {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin-inline: auto;
  padding: 0 24px;
}

.cta-section__title {
  margin: 0 0 18px;
  color: var(--sd-text);
  font-size: clamp(30px, 3.8vw, 50px);
  font-weight: 820;
  line-height: 1.06;
  letter-spacing: -0.045em;
}

.cta-section__desc {
  max-width: 640px;
  margin: 0 auto 36px;
  color: var(--sd-text-soft);
  font-size: 17px;
  line-height: 1.68;
}

.cta-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  justify-content: center;
}

.cta-section__actions :deep(.sd-button-primary) {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.cta-section__actions :deep(.sd-button-primary:hover) {
  background: var(--sd-orange-dark);
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.cta-section__actions :deep(.sd-button-secondary) {
  border-color: var(--sd-border-strong);
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
  
}

.cta-section__actions :deep(.sd-button-secondary:hover) {
  border-color: var(--sd-border-strong);
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

@media (max-width: 640px) {
  .cta-section {
    padding: 78px 0;
  }

  .cta-section__inner {
    padding: 0 16px;
  }

  .cta-section__title {
    letter-spacing: -0.038em;
  }

  .cta-section__desc {
    margin-bottom: 30px;
    font-size: 16px;
  }

  .cta-section__actions {
    align-items: stretch;
    flex-direction: column;
    max-width: 320px;
    margin-inline: auto;
  }

  .cta-section__actions :deep(.sd-button) {
    width: 100%;
  }
}
</style>
