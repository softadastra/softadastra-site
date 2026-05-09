<template>
  <section class="stack-grid sd-section">
    <div class="sd-container">
      <div class="stack-grid__top">
        <SectionHeading
          eyebrow="Maintained stack"
          title="Open foundations maintained under Softadastra Company."
          text="Each stack is part of the same ecosystem and can evolve independently without breaking the global structure."
        />
      </div>

      <div class="stack-grid__list">
        <BaseCard
          v-for="stack in stacks"
          :key="stack.id"
          class="stack-grid__card"
        >
          <div class="stack-grid__card-top">
            <BaseBadge>
              {{ stack.layer }}
            </BaseBadge>

            <span class="stack-grid__status">
              {{ stack.status }}
            </span>
          </div>

          <h3>{{ stack.name }}</h3>

          <p class="stack-grid__tagline">
            {{ stack.tagline }}
          </p>

          <p class="stack-grid__description">
            {{ stack.description }}
          </p>

          <div class="stack-grid__meta">
            <span>{{ stack.license }}</span>
            <span>{{ stack.label }}</span>
          </div>

          <div class="stack-grid__actions">
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { stacks } from "../../data/stacks";

import BaseBadge from "../ui/BaseBadge.vue";
import BaseCard from "../ui/BaseCard.vue";
import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.stack-grid {
  background: rgba(255, 255, 255, 0.015);
}

.stack-grid__top {
  display: flex;
  justify-content: space-between;
  gap: 28px;
}

.stack-grid__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 46px;
}

.stack-grid__card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.stack-grid__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.stack-grid__status {
  color: var(--sd-accent);
  font-size: 0.82rem;
  font-weight: 800;
}

.stack-grid__card h3 {
  margin: 24px 0 0;
  color: var(--sd-text);
  font-size: 1.55rem;
  letter-spacing: -0.045em;
}

.stack-grid__tagline {
  margin: 10px 0 0;
  color: var(--sd-text-soft);
  font-weight: 700;
  line-height: 1.45;
}

.stack-grid__description {
  margin: 16px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.95rem;
}

.stack-grid__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 22px;
}

.stack-grid__meta span {
  padding: 7px 10px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  color: var(--sd-text-muted);
  font-size: 0.78rem;
  font-weight: 750;
}

.stack-grid__actions {
  display: flex;
  gap: 14px;
  margin-top: 22px;
}

.stack-grid__actions a {
  color: var(--sd-primary);
  font-size: 0.92rem;
  font-weight: 850;
}

.stack-grid__actions a:hover {
  color: var(--sd-text);
}

@media (max-width: 1080px) {
  .stack-grid__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .stack-grid__list {
    grid-template-columns: 1fr;
  }
}
</style>
