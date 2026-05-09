<template>
  <BaseCard class="product-card">
    <div class="product-card__top">
      <BaseBadge>
        {{ product.category }}
      </BaseBadge>

      <span class="product-card__status">
        {{ product.status }}
      </span>
    </div>

    <h3>{{ product.name }}</h3>

    <p class="product-card__tagline">
      {{ product.tagline }}
    </p>

    <p class="product-card__description">
      {{ product.description }}
    </p>

    <a
      v-if="product.href"
      :href="product.href"
      class="product-card__link"
    >
      Learn more
    </a>
  </BaseCard>
</template>

<script setup>
import BaseBadge from "../ui/BaseBadge.vue";
import BaseCard from "../ui/BaseCard.vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.product-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.product-card__status {
  color: var(--sd-accent);
  font-size: 0.82rem;
  font-weight: 800;
  white-space: nowrap;
}

.product-card h3 {
  margin: 24px 0 0;
  color: var(--sd-text);
  font-size: 1.55rem;
  letter-spacing: -0.045em;
}

.product-card__tagline {
  margin: 10px 0 0;
  color: var(--sd-text-soft);
  font-weight: 750;
  line-height: 1.45;
}

.product-card__description {
  margin: 16px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.95rem;
}

.product-card__link {
  display: inline-flex;
  width: fit-content;
  margin-top: auto;
  padding-top: 24px;
  color: var(--sd-primary);
  font-size: 0.92rem;
  font-weight: 850;
}

.product-card__link:hover {
  color: var(--sd-text);
}

@media (max-width: 620px) {
  .product-card__top {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
