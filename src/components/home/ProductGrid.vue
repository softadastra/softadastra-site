<template>
  <section class="product-grid sd-section">
    <div class="sd-section__inner">
      <div class="product-grid__header sd-reveal">
        <SectionHeading
          eyebrow="Products"
          title="Tools and services built around Softadastra."
          text="Softadastra products connect the open ecosystem to real usage: cloud services, technical documentation, builds, binaries, SDK packages, and release infrastructure."
        />
      </div>

      <div class="product-grid__grid">
        <a
          v-for="(product, index) in products"
          :key="product.id"
          :href="product.href"
          :class="[
            'product-grid__card',
            `product-grid__card--${product.icon}`,
            'sd-reveal',
            `sd-reveal-d${Math.min(index + 1, 3)}`,
          ]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="product-grid__card-glow" aria-hidden="true" />

          <div class="product-grid__top">
            <div class="product-grid__icon">
              <svg
                v-if="product.icon === 'cloud'"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 10a6 6 0 00-11.18-2A5 5 0 006 18h12a4 4 0 000-8z" />
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
            </div>

            <span class="product-grid__badge">
              {{ product.category }}
            </span>
          </div>

          <div class="product-grid__content">
            <h3 class="product-grid__name">
              {{ product.name }}
            </h3>

            <p class="product-grid__tagline">
              {{ product.tagline }}
            </p>

            <p class="product-grid__description">
              {{ product.description }}
            </p>
          </div>

          <div class="product-grid__footer">
            <span class="product-grid__status">
              {{ product.status }}
            </span>

            <span class="product-grid__visit">
              Visit

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
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from "../../data/products";

import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.product-grid {
  overflow: hidden;
}

.product-grid__header {
  max-width: 760px;
}

.product-grid__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.product-grid__card {
  position: relative;
  display: flex;
  min-height: 360px;
  flex-direction: column;
  overflow: hidden;
  padding: 26px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.036), rgba(255, 255, 255, 0.016)),
    #0d1319;
  transition:
    transform 260ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 260ms ease;
}

.product-grid__card:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.07), rgba(255, 255, 255, 0.018)),
    #0f161d;
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-5px);
}

.product-grid__card-glow {
  position: absolute;
  top: -90px;
  right: -90px;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  background: rgba(174, 185, 255, 0.08);
  filter: blur(42px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 260ms ease;
}

.product-grid__card:hover .product-grid__card-glow {
  opacity: 1;
}

.product-grid__card--cloud .product-grid__card-glow {
  background: rgba(110, 231, 183, 0.1);
}

.product-grid__card--docs .product-grid__card-glow {
  background: rgba(174, 185, 255, 0.1);
}

.product-grid__card--package .product-grid__card-glow {
  background: rgba(103, 232, 249, 0.1);
}

.product-grid__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.product-grid__icon {
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(174, 185, 255, 0.12);
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.1), rgba(174, 185, 255, 0.035)),
    rgba(255, 255, 255, 0.02);
  color: var(--sd-accent);
}

.product-grid__card--cloud .product-grid__icon {
  border-color: rgba(110, 231, 183, 0.18);
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.product-grid__card--docs .product-grid__icon {
  border-color: rgba(174, 185, 255, 0.18);
  background: var(--sd-accent-bg);
  color: var(--sd-accent);
}

.product-grid__card--package .product-grid__icon {
  border-color: rgba(103, 232, 249, 0.18);
  background: var(--sd-cyan-bg);
  color: var(--sd-cyan);
}

.product-grid__icon svg {
  width: 23px;
  height: 23px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.product-grid__badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 24px;
  padding: 0 10px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.product-grid__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 34px;
}

.product-grid__name {
  margin: 0;
  color: var(--sd-text);
  font-size: 24px;
  font-weight: 780;
  line-height: 1.1;
  letter-spacing: -0.035em;
}

.product-grid__tagline {
  margin: 12px 0 0;
  color: var(--sd-text-soft);
  font-size: 15px;
  font-weight: 620;
  line-height: 1.5;
}

.product-grid__description {
  margin: 16px 0 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.6;
}

.product-grid__footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 34px;
  padding-top: 18px;
  border-top: 1px solid var(--sd-border);
}

.product-grid__status {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.product-grid__visit {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--sd-accent);
  font-size: 14px;
  font-weight: 700;
  transition:
    gap var(--sd-transition),
    color var(--sd-transition-fast);
}

.product-grid__card:hover .product-grid__visit {
  gap: 10px;
  color: var(--sd-accent-strong);
}

.product-grid__visit svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

@media (max-width: 1080px) {
  .product-grid__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-grid__card {
    min-height: 330px;
  }
}

@media (max-width: 760px) {
  .product-grid__grid {
    grid-template-columns: 1fr;
  }

  .product-grid__card {
    min-height: auto;
    padding: 24px;
  }

  .product-grid__content {
    margin-top: 28px;
  }
}

@media (max-width: 420px) {
  .product-grid__top,
  .product-grid__footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .product-grid__name {
    font-size: 22px;
  }
}
</style>
