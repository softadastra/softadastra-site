<template>
  <BaseCard class="stack-card">
    <div class="stack-card__top">
      <BaseBadge>
        {{ stack.layer }}
      </BaseBadge>

      <span class="stack-card__status">
        {{ stack.status }}
      </span>
    </div>

    <h3>{{ stack.name }}</h3>

    <p class="stack-card__tagline">
      {{ stack.tagline }}
    </p>

    <p class="stack-card__description">
      {{ stack.description }}
    </p>

    <div class="stack-card__meta">
      <span>{{ stack.label }}</span>
      <span>{{ stack.license }}</span>
    </div>

    <div class="stack-card__actions">
      <a
        v-if="stack.href && stack.href !== '#'"
        :href="stack.href"
      >
        Visit
      </a>

      <a
        v-if="stack.docsHref && stack.docsHref !== '#'"
        :href="stack.docsHref"
      >
        Docs
      </a>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseBadge from "../ui/BaseBadge.vue";
import BaseCard from "../ui/BaseCard.vue";

defineProps({
  stack: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.stack-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.stack-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.stack-card__status {
  color: var(--sd-accent);
  font-size: 0.82rem;
  font-weight: 800;
}

.stack-card h3 {
  margin: 24px 0 0;
  color: var(--sd-text);
  font-size: 1.55rem;
  letter-spacing: -0.045em;
}

.stack-card__tagline {
  margin: 10px 0 0;
  color: var(--sd-text-soft);
  font-weight: 750;
  line-height: 1.45;
}

.stack-card__description {
  margin: 16px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.95rem;
}

.stack-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 22px;
}

.stack-card__meta span {
  padding: 7px 10px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  color: var(--sd-text-muted);
  font-size: 0.78rem;
  font-weight: 750;
}

.stack-card__actions {
  display: flex;
  gap: 14px;
  margin-top: 22px;
}

.stack-card__actions a {
  color: var(--sd-primary);
  font-size: 0.92rem;
  font-weight: 850;
}

.stack-card__actions a:hover {
  color: var(--sd-text);
}

@media (max-width: 620px) {
  .stack-card__top {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
