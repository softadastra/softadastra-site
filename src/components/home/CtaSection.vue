<template>
  <section class="cta-section">
    <div
      class="cta-section__glow"
      aria-hidden="true"
    />

    <div class="cta-section__inner sd-reveal">
      <h2 class="cta-section__title">
        Start with the docs, explore the cloud when you need it.
      </h2>

      <p class="cta-section__desc">
        Read the documentation to understand the architecture, then reach for the
        commercial layer when your project needs cloud services.
      </p>

      <div class="cta-section__actions">
        <BaseButton
          :href="links.docs"
          arrow
        >
          Read the docs
        </BaseButton>

        <BaseButton
          :href="links.business"
          variant="secondary"
        >
          Open Business
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
  overflow: hidden;
  padding: 120px 0;
  border-top: 1px solid var(--sd-border);
  text-align: center;
}

.cta-section__glow {
  position: absolute;
  bottom: -140px;
  left: 50%;
  width: 800px;
  height: 400px;
  background: radial-gradient(
    ellipse at center,
    rgba(174, 185, 255, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
  transform: translateX(-50%);
}

.cta-section__inner {
  position: relative;
  max-width: 640px;
  margin-inline: auto;
  padding: 0 24px;
}

.cta-section__title {
  margin: 0 0 18px;
  color: var(--sd-text);
  font-size: clamp(30px, 3.8vw, 48px);
  font-weight: 780;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.cta-section__desc {
  margin: 0 0 36px;
  color: var(--sd-text-soft);
  font-size: 17px;
  line-height: 1.68;
}

.cta-section__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}

@media (max-width: 640px) {
  .cta-section {
    padding: 72px 0;
  }

  .cta-section__inner {
    padding: 0 16px;
  }

  .cta-section__title {
    letter-spacing: -0.035em;
  }
}
</style>
