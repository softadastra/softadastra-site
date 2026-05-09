<template>
  <section class="product-grid sd-section">
    <div class="sd-section__inner">
      <div class="sd-section__header sd-reveal">
        <SectionHeading
          eyebrow="Products"
          title="Commercial layer, built on the open stack."
          text="Cloud, Docs, and Builds: commercial products designed around the same reliability primitives as the open source stack."
        />
      </div>

      <div class="product-grid__grid">
        <a
          v-for="(product, index) in products"
          :key="product.id"
          :href="product.href"
          :class="[
            'product-grid__card',
            'sd-reveal',
            `sd-reveal-d${Math.min(index + 1, 3)}`,
          ]"
          target="_blank"
          rel="noopener noreferrer"
        >
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

          <h3 class="product-grid__name">
            {{ product.name }}
          </h3>

          <p class="product-grid__tagline">
            {{ product.tagline }}
          </p>

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
.product-grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.product-grid__card {
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: 34px 28px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: var(--sd-bg-card);
  transition:
    transform 250ms ease,
    border-color var(--sd-transition),
    background var(--sd-transition);
}

.product-grid__card:hover {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
  transform: translateY(-4px);
}

.product-grid__icon {
  display: flex;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  border: 1px solid rgba(174, 185, 255, 0.1);
  border-radius: 12px;
  background: var(--sd-accent-bg);
  color: var(--sd-accent);
}

.product-grid__icon svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.product-grid__badge {
  position: absolute;
  top: 28px;
  right: 24px;
  padding: 3px 10px;
  border-radius: var(--sd-radius-full);
  background: rgba(255, 255, 255, 0.05);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.product-grid__name {
  margin: 0 0 8px;
  color: var(--sd-text);
  font-size: 21px;
  font-weight: 760;
  letter-spacing: -0.025em;
}

.product-grid__tagline {
  flex-grow: 1;
  margin: 0 0 24px;
  color: var(--sd-text-muted);
  font-size: 14.5px;
  line-height: 1.58;
}

.product-grid__visit {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 6px;
  color: var(--sd-accent);
  font-size: 14px;
  font-weight: 620;
  transition: gap var(--sd-transition);
}

.product-grid__card:hover .product-grid__visit {
  gap: 10px;
}

.product-grid__visit svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

@media (max-width: 960px) {
  .product-grid__grid {
    max-width: 460px;
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .product-grid__card {
    padding: 28px 22px;
  }

  .product-grid__badge {
    top: 24px;
    right: 20px;
  }
}
</style>
