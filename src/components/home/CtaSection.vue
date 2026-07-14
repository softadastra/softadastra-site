<template>
  <section class="cta-section">
    <div class="cta-section__inner sd-reveal">
      <p class="cta-section__eyebrow">Begin here</p>
      <h2>Start with Vix.cpp</h2>
      <p>
        Create a native C++ application, run it locally, and explore the rest of
        the Softadastra platform as your project grows.
      </p>

      <div class="cta-section__actions">
        <BaseButton :href="links.vix" arrow> Get started with Vix.cpp </BaseButton>
        <BaseButton :href="links.vixGithub" variant="secondary">
          View the repository
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
  padding: 78px 0 92px;
  border-top: 1px solid var(--sd-border);
  background: var(--sd-bg);
}

.cta-section__inner {
  width: min(100% - 48px, 780px);
  margin-inline: auto;
  padding: 28px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  text-align: center;
  box-shadow: var(--sd-shadow-soft);
}

.cta-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.cta-section h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 760;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.cta-section p:not(.cta-section__eyebrow) {
  max-width: 600px;
  margin: 14px auto 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.cta-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
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
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
}

.cta-section__actions :deep(.sd-button-secondary:hover) {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

@media (max-width: 640px) {
  .cta-section {
    padding: 58px 0 72px;
  }

  .cta-section__inner {
    width: min(100% - 32px, 780px);
    padding: 22px;
  }

  .cta-section__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .cta-section__actions :deep(.sd-button) {
    width: 100%;
  }
}
</style>
