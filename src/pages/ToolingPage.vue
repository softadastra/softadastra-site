<template>
  <SiteShell>
    <section class="tooling-page">
      <div class="tooling-page__hero sd-container">
        <BaseBadge>
          {{ currentTool.category }}
        </BaseBadge>

        <h1>
          {{ currentTool.name }}
        </h1>

        <p>
          {{ currentTool.tagline }}
        </p>
      </div>

      <div class="tooling-page__content sd-container">
        <BaseCard class="tooling-page__main-card">
          <div class="tooling-page__card-top">
            <span>{{ currentTool.label }}</span>
            <strong>{{ currentTool.status }}</strong>
          </div>

          <h2>Built as part of Softadastra C++ tooling.</h2>

          <p>
            {{ currentTool.description }}
          </p>

          <div class="tooling-page__meta">
            <span>Category: {{ currentTool.category }}</span>
            <span>Status: {{ currentTool.status }}</span>
          </div>

          <div class="tooling-page__actions">
            <BaseButton
              v-if="currentTool.href && currentTool.href !== '#'"
              :href="currentTool.href"
            >
              Open tooling
            </BaseButton>

            <BaseButton to="/ecosystem" variant="secondary">
              View ecosystem
            </BaseButton>
          </div>
        </BaseCard>

        <div class="tooling-page__side">
          <SectionHeading
            eyebrow="Tooling layer"
            title="Focused tools, not commercial product noise."
            text="Softadastra maintains a small technical ecosystem around modern C++ development. Each tool has a clear role: offline-first foundations, backend reliability, local-first runtime work, or validation inside real applications."
          />

          <div class="tooling-page__tools">
            <div
              v-for="tool in relatedTools"
              :key="tool.id"
              class="tooling-page__tool"
            >
              <span>{{ tool.category }}</span>

              <RouterLink :to="`/tooling/${tool.id}`">
                {{ tool.name }}
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

import { tooling } from "../data/tooling.js";

import SiteShell from "../components/layout/SiteShell.vue";

import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseCard from "../components/ui/BaseCard.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

const route = useRoute();

const currentTool = computed(() => {
  return (
    tooling.find((tool) => tool.id === route.params.id) || {
      id: "unknown",
      name: "Tooling item not found",
      label: "Unknown tooling",
      tagline:
        "This item does not exist in the current Softadastra tooling list.",
      description:
        "The requested tooling item could not be found. Go back to the ecosystem page to see the maintained tools.",
      status: "Unknown",
      category: "Unknown",
      href: "#",
    }
  );
});

const relatedTools = computed(() => {
  return tooling.filter((tool) => tool.id !== currentTool.value.id);
});
</script>

<style scoped>
.tooling-page {
  padding-bottom: 96px;
}

.tooling-page__hero {
  padding: 96px 0 52px;
  text-align: center;
}

.tooling-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.tooling-page__hero h1 {
  max-width: 880px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3.2rem, 8vw, 6rem);
  line-height: 0.94;
  letter-spacing: -0.085em;
}

.tooling-page__hero p {
  max-width: 720px;
  margin: 24px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.7;
}

.tooling-page__content {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 28px;
}

.tooling-page__main-card {
  padding: 34px;
}

.tooling-page__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.tooling-page__card-top span {
  color: var(--sd-primary);
  font-size: 0.8rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tooling-page__card-top strong {
  color: var(--sd-accent);
  font-size: 0.88rem;
}

.tooling-page__main-card h2 {
  margin: 28px 0 0;
  color: var(--sd-text);
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.tooling-page__main-card p {
  margin: 20px 0 0;
  color: var(--sd-text-muted);
  font-size: 1.02rem;
}

.tooling-page__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.tooling-page__meta span {
  padding: 8px 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  color: var(--sd-text-muted);
  font-size: 0.85rem;
  font-weight: 750;
}

.tooling-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.tooling-page__side {
  padding: 30px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background: var(--sd-surface);
}

.tooling-page__tools {
  display: grid;
  gap: 12px;
  margin-top: 32px;
}

.tooling-page__tool {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 15px 16px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: rgba(7, 11, 20, 0.42);
}

.tooling-page__tool span {
  color: var(--sd-text-muted);
  font-size: 0.82rem;
  font-weight: 750;
}

.tooling-page__tool a {
  color: var(--sd-text);
  font-weight: 850;
}

.tooling-page__tool a:hover {
  color: var(--sd-primary);
}

@media (max-width: 920px) {
  .tooling-page__content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .tooling-page {
    padding-bottom: 64px;
  }

  .tooling-page__hero {
    padding: 72px 0 42px;
  }

  .tooling-page__hero h1 {
    letter-spacing: -0.06em;
  }

  .tooling-page__main-card,
  .tooling-page__side {
    padding: 24px;
  }

  .tooling-page__card-top,
  .tooling-page__tool {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
