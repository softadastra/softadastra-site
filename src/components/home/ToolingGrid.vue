<template>
  <section class="tooling-grid sd-section">
    <div class="sd-section__inner">
      <div class="tooling-grid__layout">
        <div class="tooling-grid__header sd-reveal">
          <SectionHeading
            eyebrow="Tooling"
            title="Open tooling maintained by Softadastra."
            text="Softadastra builds and maintains focused tooling for modern C++ development. The ecosystem stays small, technical, and useful: offline-first foundations, backend reliability, local-first runtime work, and validation through real applications."
          />

          <div class="tooling-grid__summary">
            <span>C++ Tooling</span>
            <span>Local-first</span>
            <span>Reliability</span>
            <span>Runtime</span>
          </div>
        </div>

        <div class="tooling-grid__list">
          <a
            v-for="(tool, index) in tooling"
            :key="tool.id"
            :href="tool.href"
            :class="[
              'tooling-grid__item',
              `tooling-grid__item--${tool.icon}`,
              'sd-reveal',
              `sd-reveal-d${Math.min(index + 1, 3)}`,
            ]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="tooling-grid__index">
              {{ formatIndex(index) }}
            </span>

            <span class="tooling-grid__icon">
              <svg
                v-if="tool.icon === 'database'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
              </svg>

              <svg
                v-else-if="tool.icon === 'shield'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-5" />
              </svg>

              <svg
                v-else-if="tool.icon === 'code'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 9l-4 3 4 3" />
                <path d="M16 9l4 3-4 3" />
                <path d="M14 4l-4 16" />
              </svg>

              <svg
                v-else-if="tool.icon === 'terminal'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M7 9l3 3-3 3" />
                <path d="M13 15h4" />
              </svg>

              <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
                <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
              </svg>
            </span>

            <span class="tooling-grid__main">
              <span class="tooling-grid__meta">
                <span class="tooling-grid__category">
                  {{ tool.category }}
                </span>

                <span class="tooling-grid__status">
                  {{ tool.status }}
                </span>
              </span>

              <span class="tooling-grid__name">
                {{ tool.name }}
              </span>

              <span class="tooling-grid__tagline">
                {{ tool.tagline }}
              </span>

              <span class="tooling-grid__description">
                {{ tool.description }}
              </span>
            </span>

            <span class="tooling-grid__action">
              <span>Open</span>

              <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2 10L10 2M10 2H5M10 2v5"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { tooling } from "../../data/tooling.js";

import SectionHeading from "../ui/SectionHeading.vue";

function formatIndex(index) {
  return String(index + 1).padStart(2, "0");
}
</script>

<style scoped>
.tooling-grid {
  position: relative;
  overflow: hidden;
}

.tooling-grid::before {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      760px 320px at 12% 0%,
      rgba(213, 122, 42, 0.14),
      transparent 60%
    ),
    radial-gradient(
      680px 360px at 86% 24%,
      rgba(47, 212, 156, 0.08),
      transparent 62%
    );
  pointer-events: none;
  content: "";
}

.tooling-grid__layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(42px, 6vw, 96px);
  align-items: start;
}

.tooling-grid__header {
  position: sticky;
  top: calc(var(--sd-header-height) + 32px);
  max-width: 520px;
}

.tooling-grid__summary {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.tooling-grid__summary span {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: rgba(255, 255, 255, 0.045);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.tooling-grid__list {
  display: grid;
  gap: 14px;
}

.tooling-grid__item {
  position: relative;
  display: grid;
  grid-template-columns: 42px 52px minmax(0, 1fr) auto;
  gap: 18px;
  align-items: start;
  padding: 22px 0;
  border-bottom: 1px solid var(--sd-border);
  color: inherit;
  text-decoration: none;
  isolation: isolate;
}

.tooling-grid__item::before {
  position: absolute;
  inset: 0 -18px;
  z-index: -1;
  border: 1px solid transparent;
  border-radius: 22px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.065),
    rgba(255, 255, 255, 0.018)
  );
  opacity: 0;
  transform: scale(0.985);
  transition:
    opacity 220ms ease,
    transform 220ms ease,
    border-color 220ms ease,
    background 220ms ease;
  content: "";
}

.tooling-grid__item:hover::before {
  opacity: 1;
  border-color: var(--sd-border);
  background:
    radial-gradient(
      420px 160px at 12% 0%,
      rgba(213, 122, 42, 0.13),
      transparent 64%
    ),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.022)
    );
  transform: scale(1);
}

.tooling-grid__index {
  padding-top: 5px;
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.tooling-grid__icon {
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background:
    radial-gradient(
      circle at 50% 28%,
      rgba(255, 255, 255, 0.12),
      transparent 58%
    ),
    rgba(255, 255, 255, 0.045);
  color: var(--sd-accent);
  transition:
    color 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    transform 220ms ease;
}

.tooling-grid__item:hover .tooling-grid__icon {
  border-color: var(--sd-border-highlight);
  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(213, 122, 42, 0.2),
      transparent 62%
    ),
    rgba(255, 255, 255, 0.055);
  transform: translateY(-2px);
}

.tooling-grid__item--database .tooling-grid__icon {
  color: var(--sd-green);
}

.tooling-grid__item--shield .tooling-grid__icon {
  color: var(--sd-orange);
}

.tooling-grid__item--code .tooling-grid__icon {
  color: var(--sd-blue);
}

.tooling-grid__item--terminal .tooling-grid__icon {
  color: var(--sd-cyan);
}

.tooling-grid__icon svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tooling-grid__main {
  display: grid;
  min-width: 0;
}

.tooling-grid__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 9px;
}

.tooling-grid__category,
.tooling-grid__status {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  width: fit-content;
  padding: 0 9px;
  border-radius: var(--sd-radius-full);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.045em;
  text-transform: uppercase;
}

.tooling-grid__category {
  border: 1px solid rgba(213, 122, 42, 0.22);
  background: rgba(213, 122, 42, 0.1);
  color: var(--sd-orange-strong);
}

.tooling-grid__status {
  border: 1px solid var(--sd-border);
  background: rgba(255, 255, 255, 0.035);
  color: var(--sd-text-muted);
}

.tooling-grid__name {
  color: var(--sd-text);
  font-size: clamp(23px, 2.4vw, 34px);
  font-weight: 820;
  line-height: 1.04;
  letter-spacing: -0.045em;
  transition: color 180ms ease;
}

.tooling-grid__item:hover .tooling-grid__name {
  color: var(--sd-orange-strong);
}

.tooling-grid__tagline {
  max-width: 620px;
  margin-top: 10px;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  font-weight: 650;
  line-height: 1.5;
}

.tooling-grid__description {
  max-width: 680px;
  margin-top: 10px;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.65;
}

.tooling-grid__action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-top: 7px;
  color: var(--sd-text-muted);
  font-size: 13px;
  font-weight: 760;
  white-space: nowrap;
  transition:
    color 180ms ease,
    gap 180ms ease,
    transform 180ms ease;
}

.tooling-grid__item:hover .tooling-grid__action {
  gap: 12px;
  color: var(--sd-orange-strong);
  transform: translateX(2px);
}

.tooling-grid__action svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

@media (max-width: 1080px) {
  .tooling-grid__layout {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .tooling-grid__header {
    position: relative;
    top: auto;
    max-width: 760px;
  }
}

@media (max-width: 760px) {
  .tooling-grid__item {
    grid-template-columns: 34px 46px minmax(0, 1fr);
    gap: 14px;
    padding: 20px 0;
  }

  .tooling-grid__icon {
    width: 46px;
    height: 46px;
  }

  .tooling-grid__icon svg {
    width: 22px;
    height: 22px;
  }

  .tooling-grid__action {
    grid-column: 3;
    padding-top: 2px;
  }
}

@media (max-width: 520px) {
  .tooling-grid__summary {
    display: none;
  }

  .tooling-grid__item {
    grid-template-columns: 42px minmax(0, 1fr);
  }

  .tooling-grid__index {
    display: none;
  }

  .tooling-grid__icon {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .tooling-grid__main,
  .tooling-grid__action {
    grid-column: 2;
  }

  .tooling-grid__name {
    font-size: 24px;
  }

  .tooling-grid__description {
    font-size: 13.5px;
  }
}

/* ==========================================================================
   Softadastra Engine tooling grid override
   ========================================================================== */

.tooling-grid.sd-section {
  position: relative;
  overflow: hidden;
  background: transparent;
  border-top: 1px solid rgba(255, 244, 224, 0.09);
}

.tooling-grid::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 14% 8%,
      rgba(246, 222, 184, 0.1) 0%,
      transparent 34%
    ),
    radial-gradient(
      circle at 86% 20%,
      rgba(213, 122, 42, 0.14) 0%,
      transparent 38%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 32%,
      rgba(213, 122, 42, 0.12) 33%,
      rgba(226, 154, 85, 0.08) 40%,
      transparent 49%
    );

  opacity: 0.9;
}

.tooling-grid::after {
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

.tooling-grid .sd-section__inner {
  position: relative;
  z-index: 2;
}

/* ==========================================================================
   Tooling summary override
   ========================================================================== */

.tooling-grid__summary span {
  border-color: rgba(255, 244, 224, 0.11);
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.62);
}

.tooling-grid__summary span:hover {
  border-color: rgba(226, 154, 85, 0.24);
  background: rgba(213, 122, 42, 0.09);
  color: rgba(255, 248, 235, 0.9);
}

/* ==========================================================================
   Tooling items override
   ========================================================================== */

.tooling-grid__item {
  border-bottom-color: rgba(255, 244, 224, 0.09);
}

.tooling-grid__item::before {
  border-color: transparent;
  background: linear-gradient(
    135deg,
    rgba(255, 244, 224, 0.055),
    rgba(255, 244, 224, 0.018)
  );
}

.tooling-grid__item:hover::before {
  border-color: rgba(255, 244, 224, 0.12);
  background:
    radial-gradient(
      420px 160px at 12% 0%,
      rgba(213, 122, 42, 0.14),
      transparent 64%
    ),
    linear-gradient(
      135deg,
      rgba(255, 244, 224, 0.075),
      rgba(255, 244, 224, 0.025)
    );

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

.tooling-grid__index {
  color: rgba(246, 232, 204, 0.34);
}

.tooling-grid__icon {
  border-color: rgba(255, 244, 224, 0.11);
  background:
    radial-gradient(
      circle at 50% 28%,
      rgba(255, 244, 224, 0.13),
      transparent 58%
    ),
    rgba(255, 244, 224, 0.045);
  color: var(--sd-orange-strong);
}

.tooling-grid__item:hover .tooling-grid__icon {
  border-color: rgba(226, 154, 85, 0.34);
  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(213, 122, 42, 0.22),
      transparent 62%
    ),
    rgba(255, 244, 224, 0.055);
}

/* ==========================================================================
   Tooling icon colors override
   ========================================================================== */

.tooling-grid__item--database .tooling-grid__icon {
  color: #f6d6aa;
}

.tooling-grid__item--shield .tooling-grid__icon {
  color: var(--sd-orange-strong);
}

.tooling-grid__item--code .tooling-grid__icon {
  color: #e29a55;
}

.tooling-grid__item--terminal .tooling-grid__icon {
  color: #f5b84b;
}

/* ==========================================================================
   Tooling text override
   ========================================================================== */

.tooling-grid__category {
  border-color: rgba(226, 154, 85, 0.24);
  background: rgba(213, 122, 42, 0.11);
  color: var(--sd-orange-strong);
}

.tooling-grid__status {
  border-color: rgba(255, 244, 224, 0.1);
  background: rgba(255, 244, 224, 0.04);
  color: rgba(246, 232, 204, 0.56);
}

.tooling-grid__name {
  color: rgba(255, 248, 235, 0.95);
}

.tooling-grid__item:hover .tooling-grid__name {
  color: var(--sd-orange-strong);
}

.tooling-grid__tagline {
  color: rgba(246, 232, 204, 0.74);
}

.tooling-grid__description {
  color: rgba(246, 232, 204, 0.54);
}

.tooling-grid__action {
  color: rgba(246, 232, 204, 0.5);
}

.tooling-grid__item:hover .tooling-grid__action {
  color: var(--sd-orange-strong);
}

/* ==========================================================================
   Tooling heading override
   ========================================================================== */

.tooling-grid :deep(.sd-section-heading__eyebrow) {
  color: var(--sd-orange-strong);
}

.tooling-grid :deep(.sd-section-heading__eyebrow::before) {
  background: var(--sd-orange);
  opacity: 0.65;
}

.tooling-grid :deep(.sd-section-heading__title) {
  color: rgba(255, 248, 235, 0.96);
}

.tooling-grid :deep(.sd-section-heading__text) {
  color: rgba(246, 232, 204, 0.62);
}
</style>
