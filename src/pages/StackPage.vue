<template>
  <SiteShell>
    <section class="stack-page">
      <div class="stack-page__hero sd-container">
        <BaseBadge>
          {{ currentStack.layer }}
        </BaseBadge>

        <h1>
          {{ currentStack.name }}
        </h1>

        <p>
          {{ currentStack.tagline }}
        </p>
      </div>

      <div class="stack-page__content sd-container">
        <BaseCard class="stack-page__main-card">
          <div class="stack-page__card-top">
            <span>{{ currentStack.label }}</span>
            <strong>{{ currentStack.status }}</strong>
          </div>

          <h2>
            {{ currentStack.name }} inside the Softadastra ecosystem
          </h2>

          <p>
            {{ currentStack.description }}
          </p>

          <div class="stack-page__meta">
            <span>Layer: {{ currentStack.layer }}</span>
            <span>License: {{ currentStack.license }}</span>
            <span>Status: {{ currentStack.status }}</span>
          </div>

          <div class="stack-page__actions">
            <BaseButton
              v-if="currentStack.href && currentStack.href !== '#'"
              :href="currentStack.href"
            >
              Visit project
            </BaseButton>

            <BaseButton
              v-if="currentStack.docsHref && currentStack.docsHref !== '#'"
              :href="currentStack.docsHref"
              variant="secondary"
            >
              Read docs
            </BaseButton>
          </div>
        </BaseCard>

        <div class="stack-page__side">
          <SectionHeading
            eyebrow="Role"
            title="A clear layer in the platform."
            text="Every stack maintained by Softadastra has a defined position. This keeps the ecosystem easy to understand as new projects are added."
          />

          <div class="stack-page__relations">
            <div
              v-for="stack in relatedStacks"
              :key="stack.id"
              class="stack-page__relation"
            >
              <span>{{ stack.layer }}</span>

              <RouterLink :to="`/stacks/${stack.id}`">
                {{ stack.name }}
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

import { stacks } from "../data/stacks";

import SiteShell from "../components/layout/SiteShell.vue";

import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseCard from "../components/ui/BaseCard.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

const route = useRoute();

const currentStack = computed(() => {
  return (
    stacks.find((stack) => stack.id === route.params.id) || {
      id: "unknown",
      name: "Stack not found",
      label: "Unknown stack",
      tagline: "This stack does not exist in the current Softadastra ecosystem.",
      description:
        "The requested stack could not be found. Go back to the ecosystem page to see the maintained projects.",
      status: "Unknown",
      license: "Unknown",
      layer: "Unknown",
      href: "#",
      docsHref: "#",
    }
  );
});

const relatedStacks = computed(() => {
  return stacks.filter((stack) => stack.id !== currentStack.value.id);
});
</script>

<style scoped>
.stack-page {
  padding-bottom: 96px;
}

.stack-page__hero {
  padding: 96px 0 52px;
  text-align: center;
}

.stack-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.stack-page__hero h1 {
  max-width: 860px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3.4rem, 8vw, 6.4rem);
  line-height: 0.92;
  letter-spacing: -0.085em;
}

.stack-page__hero p {
  max-width: 720px;
  margin: 24px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.7;
}

.stack-page__content {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 28px;
}

.stack-page__main-card {
  padding: 34px;
}

.stack-page__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.stack-page__card-top span {
  color: var(--sd-primary);
  font-size: 0.8rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.stack-page__card-top strong {
  color: var(--sd-accent);
  font-size: 0.88rem;
}

.stack-page__main-card h2 {
  margin: 28px 0 0;
  color: var(--sd-text);
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.stack-page__main-card p {
  margin: 20px 0 0;
  color: var(--sd-text-muted);
  font-size: 1.02rem;
}

.stack-page__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.stack-page__meta span {
  padding: 8px 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  color: var(--sd-text-muted);
  font-size: 0.85rem;
  font-weight: 750;
}

.stack-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.stack-page__side {
  padding: 30px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background: var(--sd-surface);
}

.stack-page__relations {
  display: grid;
  gap: 12px;
  margin-top: 32px;
}

.stack-page__relation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 15px 16px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: rgba(7, 11, 20, 0.42);
}

.stack-page__relation span {
  color: var(--sd-text-muted);
  font-size: 0.82rem;
  font-weight: 750;
}

.stack-page__relation a {
  color: var(--sd-text);
  font-weight: 850;
}

.stack-page__relation a:hover {
  color: var(--sd-primary);
}

@media (max-width: 920px) {
  .stack-page__content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .stack-page {
    padding-bottom: 64px;
  }

  .stack-page__hero {
    padding: 72px 0 42px;
  }

  .stack-page__hero h1 {
    letter-spacing: -0.06em;
  }

  .stack-page__main-card,
  .stack-page__side {
    padding: 24px;
  }

  .stack-page__card-top,
  .stack-page__relation {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
