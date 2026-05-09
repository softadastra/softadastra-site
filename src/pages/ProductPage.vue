<template>
  <SiteShell>
    <section class="product-page">
      <div class="product-page__hero sd-container">
        <BaseBadge>
          {{ currentProduct.category }}
        </BaseBadge>

        <h1>
          {{ currentProduct.name }}
        </h1>

        <p>
          {{ currentProduct.tagline }}
        </p>
      </div>

      <div class="product-page__content sd-container">
        <BaseCard class="product-page__main-card">
          <div class="product-page__card-top">
            <span>{{ currentProduct.label }}</span>
            <strong>{{ currentProduct.status }}</strong>
          </div>

          <h2>
            Built around the Softadastra reliability foundation.
          </h2>

          <p>
            {{ currentProduct.description }}
          </p>

          <div class="product-page__meta">
            <span>Category: {{ currentProduct.category }}</span>
            <span>Status: {{ currentProduct.status }}</span>
          </div>

          <div class="product-page__actions">
            <BaseButton
              v-if="currentProduct.href && currentProduct.href !== '#'"
              :href="currentProduct.href"
            >
              Open product
            </BaseButton>

            <BaseButton
              to="/ecosystem"
              variant="secondary"
            >
              View ecosystem
            </BaseButton>
          </div>
        </BaseCard>

        <div class="product-page__side">
          <SectionHeading
            eyebrow="Commercial layer"
            title="Products stay connected to the open stack."
            text="Softadastra products are built around the same runtime, durability, sync, and reliability foundations maintained by the company."
          />

          <div class="product-page__products">
            <div
              v-for="product in relatedProducts"
              :key="product.id"
              class="product-page__product"
            >
              <span>{{ product.category }}</span>

              <RouterLink :to="`/products/${product.id}`">
                {{ product.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { products } from "../data/products";

import SiteShell from "../components/layout/SiteShell.vue";

import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseCard from "../components/ui/BaseCard.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

const route = useRoute();

const currentProduct = computed(() => {
  return (
    products.find((product) => product.id === route.params.id) || {
      id: "unknown",
      name: "Product not found",
      label: "Unknown product",
      tagline: "This product does not exist in the current Softadastra product list.",
      description:
        "The requested product could not be found. Go back to the ecosystem page to see the maintained products.",
      status: "Unknown",
      category: "Unknown",
      href: "#",
    }
  );
});

const relatedProducts = computed(() => {
  return products.filter((product) => product.id !== currentProduct.value.id);
});
</script>

<style scoped>
.product-page {
  padding-bottom: 96px;
}

.product-page__hero {
  padding: 96px 0 52px;
  text-align: center;
}

.product-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.product-page__hero h1 {
  max-width: 880px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3.2rem, 8vw, 6rem);
  line-height: 0.94;
  letter-spacing: -0.085em;
}

.product-page__hero p {
  max-width: 720px;
  margin: 24px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.7;
}

.product-page__content {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 28px;
}

.product-page__main-card {
  padding: 34px;
}

.product-page__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.product-page__card-top span {
  color: var(--sd-primary);
  font-size: 0.8rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.product-page__card-top strong {
  color: var(--sd-accent);
  font-size: 0.88rem;
}

.product-page__main-card h2 {
  margin: 28px 0 0;
  color: var(--sd-text);
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.product-page__main-card p {
  margin: 20px 0 0;
  color: var(--sd-text-muted);
  font-size: 1.02rem;
}

.product-page__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.product-page__meta span {
  padding: 8px 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  color: var(--sd-text-muted);
  font-size: 0.85rem;
  font-weight: 750;
}

.product-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.product-page__side {
  padding: 30px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background: var(--sd-surface);
}

.product-page__products {
  display: grid;
  gap: 12px;
  margin-top: 32px;
}

.product-page__product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 15px 16px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: rgba(7, 11, 20, 0.42);
}

.product-page__product span {
  color: var(--sd-text-muted);
  font-size: 0.82rem;
  font-weight: 750;
}

.product-page__product a {
  color: var(--sd-text);
  font-weight: 850;
}

.product-page__product a:hover {
  color: var(--sd-primary);
}

@media (max-width: 920px) {
  .product-page__content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .product-page {
    padding-bottom: 64px;
  }

  .product-page__hero {
    padding: 72px 0 42px;
  }

  .product-page__hero h1 {
    letter-spacing: -0.06em;
  }

  .product-page__main-card,
  .product-page__side {
    padding: 24px;
  }

  .product-page__card-top,
  .product-page__product {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
