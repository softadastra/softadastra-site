<template>
  <section class="product-grid sd-section">
    <div class="sd-section__inner">
      <div class="product-grid__layout">
        <div class="product-grid__header sd-reveal">
          <SectionHeading
            eyebrow="Products"
            title="Products built around the Softadastra ecosystem."
            text="Softadastra connects open infrastructure with real products: reliability cloud, verdicts, documentation, builds, SDK packages, and release infrastructure."
          />

          <div class="product-grid__summary">
            <span>Cloud</span>
            <span>Reliability</span>
            <span>Docs</span>
            <span>Builds</span>
          </div>
        </div>

        <div class="product-grid__list">
          <a
            v-for="(product, index) in products"
            :key="product.id"
            :href="product.href"
            :class="[
              'product-grid__item',
              `product-grid__item--${product.icon}`,
              'sd-reveal',
              `sd-reveal-d${Math.min(index + 1, 3)}`,
            ]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="product-grid__index">
              {{ formatIndex(index) }}
            </span>

            <span class="product-grid__icon">
              <svg
                v-if="product.icon === 'cloud'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 10a6 6 0 00-11.18-2A5 5 0 006 18h12a4 4 0 000-8z" />
              </svg>

              <svg
                v-else-if="product.icon === 'shield'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-5" />
              </svg>

              <svg
                v-else-if="product.icon === 'docs'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="3"
                  width="16"
                  height="18"
                  rx="2"
                />
                <path d="M8 7h8M8 11h6M8 15h4" />
              </svg>

              <svg
                v-else-if="product.icon === 'package'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>

              <svg
                v-else
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              </svg>
            </span>

            <span class="product-grid__main">
              <span class="product-grid__meta">
                <span class="product-grid__category">
                  {{ product.category }}
                </span>

                <span class="product-grid__status">
                  {{ product.status }}
                </span>
              </span>

              <span class="product-grid__name">
                {{ product.name }}
              </span>

              <span class="product-grid__tagline">
                {{ product.tagline }}
              </span>

              <span class="product-grid__description">
                {{ product.description }}
              </span>
            </span>

            <span class="product-grid__action">
              <span>Open</span>

              <svg
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
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
import { products } from "../../data/products";

import SectionHeading from "../ui/SectionHeading.vue";

function formatIndex(index) {
  return String(index + 1).padStart(2, "0");
}
</script>

<style scoped>
.product-grid {
  position: relative;
  overflow: hidden;
}

.product-grid::before {
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

.product-grid__layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(42px, 6vw, 96px);
  align-items: start;
}

.product-grid__header {
  position: sticky;
  top: calc(var(--sd-header-height) + 32px);
  max-width: 520px;
}

.product-grid__summary {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.product-grid__summary span {
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

.product-grid__list {
  display: grid;
  gap: 14px;
}

.product-grid__item {
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

.product-grid__item::before {
  position: absolute;
  inset: 0 -18px;
  z-index: -1;
  border: 1px solid transparent;
  border-radius: 22px;
  background:
    linear-gradient(
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

.product-grid__item:hover::before {
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

.product-grid__index {
  padding-top: 5px;
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.product-grid__icon {
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

.product-grid__item:hover .product-grid__icon {
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

.product-grid__item--cloud .product-grid__icon {
  color: var(--sd-green);
}

.product-grid__item--shield .product-grid__icon {
  color: var(--sd-orange);
}

.product-grid__item--docs .product-grid__icon {
  color: var(--sd-blue);
}

.product-grid__item--package .product-grid__icon {
  color: var(--sd-cyan);
}

.product-grid__icon svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.product-grid__main {
  display: grid;
  min-width: 0;
}

.product-grid__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 9px;
}

.product-grid__category,
.product-grid__status {
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

.product-grid__category {
  border: 1px solid rgba(213, 122, 42, 0.22);
  background: rgba(213, 122, 42, 0.1);
  color: var(--sd-orange-strong);
}

.product-grid__status {
  border: 1px solid var(--sd-border);
  background: rgba(255, 255, 255, 0.035);
  color: var(--sd-text-muted);
}

.product-grid__name {
  color: var(--sd-text);
  font-size: clamp(23px, 2.4vw, 34px);
  font-weight: 820;
  line-height: 1.04;
  letter-spacing: -0.045em;
  transition: color 180ms ease;
}

.product-grid__item:hover .product-grid__name {
  color: var(--sd-orange-strong);
}

.product-grid__tagline {
  max-width: 620px;
  margin-top: 10px;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  font-weight: 650;
  line-height: 1.5;
}

.product-grid__description {
  max-width: 680px;
  margin-top: 10px;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.65;
}

.product-grid__action {
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

.product-grid__item:hover .product-grid__action {
  gap: 12px;
  color: var(--sd-orange-strong);
  transform: translateX(2px);
}

.product-grid__action svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

@media (max-width: 1080px) {
  .product-grid__layout {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .product-grid__header {
    position: relative;
    top: auto;
    max-width: 760px;
  }
}

@media (max-width: 760px) {
  .product-grid__item {
    grid-template-columns: 34px 46px minmax(0, 1fr);
    gap: 14px;
    padding: 20px 0;
  }

  .product-grid__icon {
    width: 46px;
    height: 46px;
  }

  .product-grid__icon svg {
    width: 22px;
    height: 22px;
  }

  .product-grid__action {
    grid-column: 3;
    padding-top: 2px;
  }
}

@media (max-width: 520px) {
  .product-grid__summary {
    display: none;
  }

  .product-grid__item {
    grid-template-columns: 42px minmax(0, 1fr);
  }

  .product-grid__index {
    display: none;
  }

  .product-grid__icon {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .product-grid__main,
  .product-grid__action {
    grid-column: 2;
  }

  .product-grid__name {
    font-size: 24px;
  }

  .product-grid__description {
    font-size: 13.5px;
  }
}
</style>
