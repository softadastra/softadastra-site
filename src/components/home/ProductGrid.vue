<template>
  <section class="product-grid sd-section">
    <div class="sd-container">
      <div class="product-grid__top">
        <SectionHeading
          eyebrow="Products"
          title="Commercial products built around the same reliability foundation."
          text="The open stack stays MIT. Commercial products live around the ecosystem and provide cloud, business, distribution, and managed services."
        />
      </div>

      <div class="product-grid__list">
        <BaseCard
          v-for="product in products"
          :key="product.id"
          class="product-grid__card"
        >
          <div class="product-grid__card-top">
            <BaseBadge>
              {{ product.category }}
            </BaseBadge>

            <span class="product-grid__status">
              {{ product.status }}
            </span>
          </div>

          <h3>{{ product.name }}</h3>

          <p class="product-grid__tagline">
            {{ product.tagline }}
          </p>

          <p class="product-grid__description">
            {{ product.description }}
          </p>

          <a
            v-if="product.href"
            :href="product.href"
            class="product-grid__link"
          >
            Learn more
          </a>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from "../../data/products";

import BaseBadge from "../ui/BaseBadge.vue";
import BaseCard from "../ui/BaseCard.vue";
import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.product-grid {
  position: relative;
}

.product-grid__top {
  max-width: 840px;
}

.product-grid__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 46px;
}

.product-grid__card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.product-grid__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.product-grid__status {
  color: var(--sd-accent);
  font-size: 0.82rem;
  font-weight: 800;
  white-space: nowrap;
}

.product-grid__card h3 {
  margin: 24px 0 0;
  color: var(--sd-text);
  font-size: 1.55rem;
  letter-spacing: -0.045em;
}

.product-grid__tagline {
  margin: 10px 0 0;
  color: var(--sd-text-soft);
  font-weight: 750;
  line-height: 1.45;
}

.product-grid__description {
  margin: 16px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.95rem;
}

.product-grid__link {
  display: inline-flex;
  width: fit-content;
  margin-top: auto;
  padding-top: 24px;
  color: var(--sd-primary);
  font-size: 0.92rem;
  font-weight: 850;
}

.product-grid__link:hover {
  color: var(--sd-text);
}

@media (max-width: 1080px) {
  .product-grid__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .product-grid__list {
    grid-template-columns: 1fr;
  }

  .product-grid__card-top {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
