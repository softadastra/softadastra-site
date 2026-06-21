<template>
  <SiteShell>
    <section class="ecosystem-page">
      <div class="ecosystem-page__hero sd-container">
        <h1>A focused ecosystem around modern C++ tooling.</h1>

        <p>
          Softadastra builds products on top of the Vix.cpp foundation. The goal
          is simple: make C++ development easier, more reliable, and more useful
          for real applications.
        </p>

        <div class="ecosystem-page__hero-meta">
          <span>C++ tooling</span>
          <span>Built on Vix.cpp</span>
          <span>Open source foundations</span>
        </div>
      </div>

      <div class="ecosystem-page__diagram sd-container">
        <EcosystemDiagram />
      </div>

      <div class="ecosystem-page__stacks sd-container">
        <div class="ecosystem-page__section-top">
          <SectionHeading
            eyebrow="Ecosystem layers"
            title="A clear stack built around Vix.cpp."
            text="Vix.cpp is the foundation. Softadastra Engine, Cnerium, and Kordex extend it into local-first storage, backend reliability, and JavaScript runtime tooling. Pico validates the stack in a real C++ backend application."
          />
        </div>

        <div class="ecosystem-page__stack-grid">
          <StackCard v-for="stack in stacks" :key="stack.id" :stack="stack" />
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { stacks } from "../data/stacks";

import SiteShell from "../components/layout/SiteShell.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

import EcosystemDiagram from "../components/ecosystem/EcosystemDiagram.vue";
import StackCard from "../components/ecosystem/StackCard.vue";
</script>

<style scoped>
.ecosystem-page {
  position: relative;
  overflow: hidden;
  padding-bottom: 104px;
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  );
}

.ecosystem-page::before,
.ecosystem-page::after {
  display: none;
}

.ecosystem-page__hero,
.ecosystem-page__diagram,
.ecosystem-page__layers,
.ecosystem-page__stacks {
  position: relative;
  z-index: 1;
}

.ecosystem-page__hero {
  padding: 104px 0 58px;
  text-align: center;
}

.ecosystem-page__hero h1 {
  max-width: 980px;
  margin: 0 auto;
  color: var(--sd-text);
  font-size: clamp(3.2rem, 7vw, 6.4rem);
  font-weight: 850;
  line-height: 0.92;
  letter-spacing: -0.085em;
}

.ecosystem-page__hero p {
  max-width: 780px;
  margin: 28px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.72;
}

.ecosystem-page__hero-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.ecosystem-page__hero-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.ecosystem-page__diagram {
  margin-top: 18px;
}

.ecosystem-page__layers {
  padding-top: 88px;
}

.ecosystem-page__section-top {
  max-width: 780px;
}

.ecosystem-page__layer-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 34px;
}

.ecosystem-page__layer-card {
  padding: 16px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.028);
  transition:
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.ecosystem-page__layer-card:hover {
  border-color: rgba(213, 122, 42, 0.28);
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-2px);
}

.ecosystem-page__layer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.ecosystem-page__layer-number {
  display: inline-flex;
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(213, 122, 42, 0.28);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 850;
}

.ecosystem-page__layer-label {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 820;
  letter-spacing: 0.07em;
  text-align: right;
  text-transform: uppercase;
}

.ecosystem-page__layer-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 820;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.ecosystem-page__layer-card p {
  margin: 8px 0 0;
  color: var(--sd-text-muted);
  font-size: 13px;
  line-height: 1.5;
}

.ecosystem-page__stacks {
  padding-top: 88px;
}

.ecosystem-page__stack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 34px;
}

@media (max-width: 1080px) {
  .ecosystem-page__stack-grid {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }
}

@media (max-width: 760px) {
  .ecosystem-page {
    padding-bottom: 72px;
  }

  .ecosystem-page__hero {
    padding: 76px 0 46px;
  }

  .ecosystem-page__hero h1 {
    letter-spacing: -0.065em;
  }

  .ecosystem-page__hero p {
    margin-top: 22px;
  }

  .ecosystem-page__layers,
  .ecosystem-page__stacks {
    padding-top: 72px;
  }

  .ecosystem-page__layer-grid,
  .ecosystem-page__stack-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .ecosystem-page__hero h1 {
    font-size: clamp(2.7rem, 14vw, 3.7rem);
  }

  .ecosystem-page__hero-meta {
    justify-content: flex-start;
    text-align: left;
  }
}

/* ==========================================================================
   Softadastra Engine ecosystem page override
   ========================================================================== */

.ecosystem-page {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding-bottom: 104px;
  background: transparent;
}

.ecosystem-page::before {
  content: "";
  display: block;
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 50% -8%,
      rgba(246, 222, 184, 0.5) 0%,
      rgba(222, 174, 111, 0.18) 20%,
      transparent 44%
    ),
    radial-gradient(
      circle at 84% 24%,
      rgba(213, 122, 42, 0.14) 0%,
      transparent 38%
    ),
    radial-gradient(
      circle at 12% 56%,
      rgba(246, 222, 184, 0.08) 0%,
      transparent 34%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 33%,
      rgba(213, 122, 42, 0.12) 34%,
      rgba(226, 154, 85, 0.08) 42%,
      transparent 51%
    );

  opacity: 0.95;
}

.ecosystem-page::after {
  content: "";
  display: block;
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

.ecosystem-page__hero,
.ecosystem-page__diagram,
.ecosystem-page__layers,
.ecosystem-page__stacks {
  position: relative;
  z-index: 2;
}

/* ==========================================================================
   Ecosystem page hero override
   ========================================================================== */

.ecosystem-page__hero {
  padding: 92px 0 58px;
  text-align: center;
}

.ecosystem-page__hero h1 {
  color: rgba(255, 248, 235, 0.96);
}

.ecosystem-page__hero p {
  color: rgba(246, 232, 204, 0.72);
}

.ecosystem-page__hero-meta span {
  border-color: rgba(255, 244, 224, 0.11);
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.62);
}

.ecosystem-page__hero-meta span:hover {
  border-color: rgba(226, 154, 85, 0.24);
  background: rgba(213, 122, 42, 0.09);
  color: rgba(255, 248, 235, 0.9);
}

/* ==========================================================================
   Ecosystem layer cards override
   ========================================================================== */

.ecosystem-page__layer-card {
  position: relative;
  overflow: hidden;
  border-color: rgba(255, 244, 224, 0.1);

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(255, 244, 224, 0.055),
      rgba(255, 244, 224, 0.022)
    );

  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.ecosystem-page__layer-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background: linear-gradient(
    145deg,
    transparent 0%,
    transparent 48%,
    rgba(213, 122, 42, 0.1) 49%,
    rgba(226, 154, 85, 0.07) 58%,
    transparent 66%
  );

  opacity: 0;
  transition: opacity var(--sd-transition-fast);
}

.ecosystem-page__layer-card:hover {
  border-color: rgba(226, 154, 85, 0.3);

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.1),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(213, 122, 42, 0.09),
      rgba(255, 244, 224, 0.035)
    );

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.22),
    0 8px 28px rgba(213, 122, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transform: translateY(-2px);
}

.ecosystem-page__layer-card:hover::before {
  opacity: 1;
}

.ecosystem-page__layer-head,
.ecosystem-page__layer-card h3,
.ecosystem-page__layer-card p {
  position: relative;
  z-index: 1;
}

.ecosystem-page__layer-number {
  border-color: rgba(226, 154, 85, 0.28);
  background: linear-gradient(
    180deg,
    rgba(213, 122, 42, 0.18),
    rgba(213, 122, 42, 0.08)
  );
  color: var(--sd-orange-strong);
}

.ecosystem-page__layer-label {
  color: rgba(246, 232, 204, 0.46);
}

.ecosystem-page__layer-card h3 {
  color: rgba(255, 248, 235, 0.95);
}

.ecosystem-page__layer-card p {
  color: rgba(246, 232, 204, 0.58);
}

/* ==========================================================================
   Ecosystem page heading override
   ========================================================================== */

.ecosystem-page :deep(.sd-section-heading__eyebrow) {
  color: var(--sd-orange-strong);
}

.ecosystem-page :deep(.sd-section-heading__eyebrow::before) {
  background: var(--sd-orange);
  opacity: 0.65;
}

.ecosystem-page :deep(.sd-section-heading__title) {
  color: rgba(255, 248, 235, 0.96);
}

.ecosystem-page :deep(.sd-section-heading__text) {
  color: rgba(246, 232, 204, 0.62);
}
</style>
