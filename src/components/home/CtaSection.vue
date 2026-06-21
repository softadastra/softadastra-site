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
  border-top: 1px solid rgba(255, 244, 224, 0.09);
  text-align: center;
  background: transparent;
}

.cta-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 50% 12%,
      rgba(246, 222, 184, 0.14) 0%,
      transparent 34%
    ),
    radial-gradient(
      circle at 50% 88%,
      rgba(213, 122, 42, 0.18) 0%,
      transparent 42%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 34%,
      rgba(213, 122, 42, 0.12) 35%,
      rgba(226, 154, 85, 0.08) 42%,
      transparent 51%
    );
}

.cta-section::after {
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

  opacity: 0.24;
  mix-blend-mode: soft-light;
}

.cta-section__glow {
  position: absolute;
  bottom: -190px;
  left: 50%;
  z-index: 1;
  width: min(900px, 92vw);
  height: 480px;
  pointer-events: none;
  transform: translateX(-50%);

  background: radial-gradient(
    ellipse at center,
    rgba(213, 122, 42, 0.2) 0%,
    rgba(246, 222, 184, 0.08) 36%,
    transparent 70%
  );

  filter: blur(18px);
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
  color: rgba(255, 248, 235, 0.96);
  font-size: clamp(30px, 3.8vw, 50px);
  font-weight: 820;
  line-height: 1.06;
  letter-spacing: -0.045em;
}

.cta-section__desc {
  max-width: 640px;
  margin: 0 auto 36px;
  color: rgba(246, 232, 204, 0.68);
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

.cta-section__actions :deep(.sd-button-primary:hover) {
  box-shadow:
    0 14px 34px rgba(213, 122, 42, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.32);
}

.cta-section__actions :deep(.sd-button-secondary) {
  border-color: rgba(255, 244, 224, 0.13);
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.cta-section__actions :deep(.sd-button-secondary:hover) {
  border-color: rgba(255, 244, 224, 0.22);
  background: rgba(255, 244, 224, 0.075);
  color: rgba(255, 248, 235, 0.96);
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
