<template>
  <section class="ecosystem-map sd-section">
    <div class="sd-section__inner">
      <div class="sd-section__header sd-reveal">
        <SectionHeading
          eyebrow="Ecosystem"
          title="One company. Five layers. One architecture."
          text="Every layer builds on the one below. From the C++ foundation to cloud operations, the stack is designed to be adopted incrementally."
        />
      </div>

      <div class="ecosystem-map__stack">
        <div
          v-for="(layer, index) in ecosystemLayers"
          :key="layer.id"
          :class="[
            'ecosystem-map__layer',
            'sd-reveal',
            `sd-reveal-d${Math.min(index + 1, 4)}`,
          ]"
        >
          <RouterLink
            :to="`/stacks/${layer.stackId}`"
            class="ecosystem-map__bar"
          >
            <span class="ecosystem-map__bar-label">
              {{ layer.label }}
            </span>

            <span class="ecosystem-map__bar-arrow">
              →
            </span>

            <span class="ecosystem-map__bar-name">
              {{ layer.name }}
            </span>
          </RouterLink>

          <p class="ecosystem-map__tagline">
            {{ layer.tagline }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ecosystemLayers } from "../../data/stacks";

import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.ecosystem-map__stack {
  display: flex;
  max-width: 820px;
  flex-direction: column;
  gap: 6px;
}

.ecosystem-map__layer {
  cursor: default;
}

.ecosystem-map__bar {
  display: grid;
  grid-template-columns: 160px 24px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-card);
  transition:
    transform var(--sd-transition),
    border-color var(--sd-transition),
    background var(--sd-transition);
}

.ecosystem-map__layer:hover .ecosystem-map__bar {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
  transform: translateX(6px);
}

.ecosystem-map__bar-label {
  color: var(--sd-text-muted);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.ecosystem-map__bar-arrow {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 15px;
}

.ecosystem-map__bar-name {
  min-width: 0;
  color: var(--sd-text);
  font-size: 16.5px;
  font-weight: 720;
}

.ecosystem-map__tagline {
  margin: 4px 0 6px 24px;
  color: var(--sd-text-muted);
  font-size: 13.5px;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .ecosystem-map__bar {
    grid-template-columns: auto auto minmax(0, 1fr);
    gap: 8px;
    padding: 14px 16px;
  }

  .ecosystem-map__bar-label {
    font-size: 10.5px;
  }

  .ecosystem-map__tagline {
    margin-left: 16px;
  }
}

@media (max-width: 420px) {
  .ecosystem-map__bar {
    grid-template-columns: 1fr auto;
  }

  .ecosystem-map__bar-label {
    grid-column: 1 / -1;
  }

  .ecosystem-map__bar-arrow {
    order: 3;
  }
}
</style>
