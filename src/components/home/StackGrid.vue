<template>
  <section class="stack-grid sd-section">
    <div class="sd-section__inner">
      <div class="sd-section__header sd-reveal">
        <SectionHeading
          eyebrow="Tooling Stack"
          title="Focused tooling for modern C++ development."
          text="Softadastra maintains a small technical ecosystem around C++ tooling. Vix.cpp is the open C++ foundation. Softadastra Engine, Cnerium, Kordex, and Pico each have a clear role in the stack."
        />
      </div>

      <div class="stack-grid__grid sd-reveal">
        <article
          v-for="stack in stacks"
          :key="stack.id"
          :class="['stack-grid__card', `stack-grid__card--${stack.color}`]"
        >
          <div class="stack-grid__top">
            <div
              :class="['stack-grid__icon', `stack-grid__icon--${stack.color}`]"
            >
              <svg
                v-if="stack.icon === 'layers'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>

              <svg
                v-else-if="stack.icon === 'shield'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-5" />
              </svg>

              <svg
                v-else-if="stack.icon === 'runtime'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M8 16V8l8 4-8 4z" />
              </svg>

              <svg
                v-else-if="stack.icon === 'framework'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
                <path d="M17 14l2 2 3-4" />
              </svg>

              <svg
                v-else-if="stack.icon === 'app'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="4" y="5" width="16" height="14" rx="2" />
                <path d="M8 9h8M8 13h5M8 17h8" />
              </svg>

              <svg
                v-else-if="stack.icon === 'database'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
              </svg>

              <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
                <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
              </svg>
            </div>

            <div class="stack-grid__meta">
              <span class="stack-grid__badge stack-grid__badge--license">
                {{ stack.license }}
              </span>

              <span class="stack-grid__badge stack-grid__badge--active">
                {{ stack.status }}
              </span>
            </div>
          </div>

          <h3 class="stack-grid__name">
            {{ stack.name }}
          </h3>

          <p :class="['stack-grid__role', `stack-grid__role--${stack.color}`]">
            {{ stack.role }}
          </p>

          <p class="stack-grid__tagline">
            {{ stack.tagline }}
          </p>

          <div class="stack-grid__links">
            <a
              v-if="stack.href && stack.href !== '#'"
              :href="stack.href"
              class="stack-grid__link stack-grid__link--accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open

              <svg
                viewBox="0 0 12 12"
                fill="none"
                width="11"
                height="11"
                aria-hidden="true"
              >
                <path
                  d="M2 6h8M7 3l3 3-3 3"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a
              v-if="stack.docsHref && stack.docsHref !== '#'"
              :href="stack.docsHref"
              class="stack-grid__link stack-grid__link--dim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>

            <a
              v-if="stack.githubHref && stack.githubHref !== '#'"
              :href="stack.githubHref"
              class="stack-grid__link stack-grid__link--dim"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stacks } from "../../data/stacks";

import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.stack-grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: var(--sd-border);
}

.stack-grid__card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: 34px 28px;
  background: var(--sd-bg);
  transition: background var(--sd-transition);
}

.stack-grid__card:hover {
  background: var(--sd-accent-bg-soft);
}

.stack-grid__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;
}

.stack-grid__icon {
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.stack-grid__icon svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stack-grid__icon--vix {
  background: var(--sd-vix-bg);
  color: var(--sd-vix);
}

.stack-grid__icon--softadastra {
  background: var(--sd-softadastra-bg);
  color: var(--sd-softadastra);
}

.stack-grid__icon--cnerium {
  background: var(--sd-cnerium-bg);
  color: var(--sd-cnerium);
}

.stack-grid__icon--kordex {
  background: var(--sd-kordex-bg);
  color: var(--sd-kordex);
}

.stack-grid__icon--pico {
  background: var(--sd-accent-bg);
  color: var(--sd-accent);
}

.stack-grid__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
}

.stack-grid__badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.stack-grid__badge--license {
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-muted);
}

.stack-grid__badge--active {
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.stack-grid__name {
  margin: 0 0 3px;
  color: var(--sd-text);
  font-size: 21px;
  font-weight: 760;
  letter-spacing: -0.025em;
}

.stack-grid__role {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 620;
}

.stack-grid__role--vix {
  color: var(--sd-vix);
}

.stack-grid__role--softadastra {
  color: var(--sd-softadastra);
}

.stack-grid__role--cnerium {
  color: var(--sd-cnerium);
}

.stack-grid__role--kordex {
  color: var(--sd-kordex);
}

.stack-grid__role--pico {
  color: var(--sd-accent);
}

.stack-grid__tagline {
  flex-grow: 1;
  margin: 0 0 22px;
  color: var(--sd-text-muted);
  font-size: 14.5px;
  line-height: 1.58;
}

.stack-grid__links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: auto;
}

.stack-grid__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13.5px;
  font-weight: 620;
  text-decoration: none;
  transition:
    gap var(--sd-transition),
    color var(--sd-transition-fast);
}

.stack-grid__link--accent {
  color: var(--sd-accent);
}

.stack-grid__link--accent:hover {
  gap: 8px;
  color: var(--sd-accent-strong);
}

.stack-grid__link--dim {
  color: var(--sd-text-muted);
}

.stack-grid__link--dim:hover {
  color: var(--sd-text-soft);
}

@media (max-width: 960px) {
  .stack-grid__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stack-grid__grid {
    grid-template-columns: 1fr;
  }

  .stack-grid__card {
    padding: 26px 22px;
  }
}

@media (max-width: 420px) {
  .stack-grid__top {
    flex-direction: column;
  }

  .stack-grid__meta {
    justify-content: flex-start;
  }
}

/* ==========================================================================
   Softadastra Engine stack grid override
   ========================================================================== */

.stack-grid.sd-section {
  position: relative;
  overflow: hidden;
  background: transparent;
  border-top: 1px solid rgba(255, 244, 224, 0.09);
}

.stack-grid.sd-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 14% 10%,
      rgba(246, 222, 184, 0.08) 0%,
      transparent 34%
    ),
    radial-gradient(
      circle at 86% 22%,
      rgba(213, 122, 42, 0.13) 0%,
      transparent 38%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 34%,
      rgba(213, 122, 42, 0.11) 35%,
      rgba(226, 154, 85, 0.08) 42%,
      transparent 51%
    );

  opacity: 0.9;
}

.stack-grid.sd-section::after {
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

.stack-grid .sd-section__inner {
  position: relative;
  z-index: 2;
}

/* ==========================================================================
   Stack grid cards override
   ========================================================================== */

.stack-grid__grid {
  overflow: hidden;
  border: 1px solid rgba(255, 244, 224, 0.11);
  border-radius: 16px;
  background: rgba(255, 244, 224, 0.08);

  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.stack-grid__card {
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.07),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(255, 244, 224, 0.05),
      rgba(255, 244, 224, 0.018)
    ),
    rgba(11, 43, 34, 0.62);

  transition:
    background var(--sd-transition),
    transform var(--sd-transition-fast),
    box-shadow var(--sd-transition-fast);
}

.stack-grid__card::before {
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

.stack-grid__card:hover {
  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.1),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(213, 122, 42, 0.09),
      rgba(255, 244, 224, 0.03)
    ),
    rgba(11, 43, 34, 0.68);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.045),
    0 18px 56px rgba(0, 0, 0, 0.18);

  transform: translateY(-2px);
}

.stack-grid__card:hover::before {
  opacity: 1;
}

.stack-grid__top,
.stack-grid__name,
.stack-grid__role,
.stack-grid__tagline,
.stack-grid__links {
  position: relative;
  z-index: 1;
}

/* ==========================================================================
   Stack grid icons override
   ========================================================================== */

.stack-grid__icon {
  border: 1px solid rgba(255, 244, 224, 0.11);

  background:
    radial-gradient(
      circle at 50% 28%,
      rgba(255, 244, 224, 0.13),
      transparent 58%
    ),
    rgba(255, 244, 224, 0.045);

  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
}

.stack-grid__card:hover .stack-grid__icon {
  border-color: rgba(226, 154, 85, 0.32);

  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(213, 122, 42, 0.18),
      transparent 62%
    ),
    rgba(255, 244, 224, 0.055);
}

.stack-grid__icon--vix {
  color: #f6d6aa;
}

.stack-grid__icon--softadastra {
  color: var(--sd-orange-strong);
}

.stack-grid__icon--cnerium {
  color: #2fd49c;
}

.stack-grid__icon--kordex {
  color: #f5b84b;
}

.stack-grid__icon--pico {
  color: var(--sd-orange);
}

/* ==========================================================================
   Stack grid text override
   ========================================================================== */

.stack-grid__badge--license {
  border: 1px solid rgba(255, 244, 224, 0.1);
  background: rgba(255, 244, 224, 0.04);
  color: rgba(246, 232, 204, 0.56);
}

.stack-grid__badge--active {
  border: 1px solid rgba(47, 212, 156, 0.16);
  background: rgba(47, 212, 156, 0.1);
  color: var(--sd-green);
}

.stack-grid__name {
  color: rgba(255, 248, 235, 0.96);
}

.stack-grid__role--vix {
  color: #f6d6aa;
}

.stack-grid__role--softadastra {
  color: var(--sd-orange-strong);
}

.stack-grid__role--cnerium {
  color: #2fd49c;
}

.stack-grid__role--kordex {
  color: #f5b84b;
}

.stack-grid__role--pico {
  color: var(--sd-orange);
}

.stack-grid__tagline {
  color: rgba(246, 232, 204, 0.56);
}

.stack-grid__card:hover .stack-grid__name {
  color: var(--sd-orange-strong);
}

/* ==========================================================================
   Stack grid links override
   ========================================================================== */

.stack-grid__link--accent {
  color: var(--sd-orange-strong);
}

.stack-grid__link--accent:hover {
  color: #ffc184;
}

.stack-grid__link--dim {
  color: rgba(246, 232, 204, 0.48);
}

.stack-grid__link--dim:hover {
  color: rgba(255, 248, 235, 0.88);
}

/* ==========================================================================
   Stack grid heading override
   ========================================================================== */

.stack-grid :deep(.sd-section-heading__eyebrow) {
  color: var(--sd-orange-strong);
}

.stack-grid :deep(.sd-section-heading__eyebrow::before) {
  background: var(--sd-orange);
  opacity: 0.65;
}

.stack-grid :deep(.sd-section-heading__title) {
  color: rgba(255, 248, 235, 0.96);
}

.stack-grid :deep(.sd-section-heading__text) {
  color: rgba(246, 232, 204, 0.62);
}
</style>
