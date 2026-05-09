<template>
  <section class="ecosystem-map sd-section">
    <div class="sd-container">
      <div class="ecosystem-map__header">
        <SectionHeading
          eyebrow="Ecosystem"
          title="One company, one stack, multiple layers."
          text="Softadastra.com acts as the central hub. Each stack has a clear role, so new products can be added without making the ecosystem feel scattered."
        />
      </div>

      <div class="ecosystem-map__diagram">
        <div class="ecosystem-map__center">
          <span>Softadastra</span>
          <strong>Company</strong>
        </div>

        <div class="ecosystem-map__items">
          <article
            v-for="stack in stacks"
            :key="stack.id"
            class="ecosystem-map__item"
          >
            <div>
              <span>{{ stack.layer }}</span>
              <strong>{{ stack.name }}</strong>
            </div>

            <p>{{ stack.label }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stacks } from "../../data/stacks";

import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.ecosystem-map {
  position: relative;
}

.ecosystem-map__header {
  display: flex;
  justify-content: center;
  text-align: center;
}

.ecosystem-map__header :deep(.sd-section-heading) {
  margin-inline: auto;
}

.ecosystem-map__diagram {
  position: relative;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  align-items: center;
  gap: 36px;
  margin-top: 54px;
  padding: 28px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background:
    radial-gradient(circle at left, rgba(56, 189, 248, 0.12), transparent 28rem),
    var(--sd-surface);
  box-shadow: var(--sd-shadow-card);
}

.ecosystem-map__center {
  display: grid;
  min-height: 220px;
  place-items: center;
  border: 1px solid rgba(56, 189, 248, 0.36);
  border-radius: var(--sd-radius-xl);
  background: rgba(56, 189, 248, 0.08);
  text-align: center;
}

.ecosystem-map__center span {
  color: var(--sd-text-muted);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ecosystem-map__center strong {
  display: block;
  margin-top: 4px;
  color: var(--sd-text);
  font-size: 2rem;
  letter-spacing: -0.055em;
}

.ecosystem-map__items {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.ecosystem-map__item {
  padding: 20px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: rgba(7, 11, 20, 0.44);
}

.ecosystem-map__item span {
  color: var(--sd-primary);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.ecosystem-map__item strong {
  display: block;
  margin-top: 6px;
  color: var(--sd-text);
  font-size: 1.22rem;
  letter-spacing: -0.035em;
}

.ecosystem-map__item p {
  margin: 12px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.94rem;
}

@media (max-width: 980px) {
  .ecosystem-map__diagram {
    grid-template-columns: 1fr;
  }

  .ecosystem-map__center {
    min-height: 180px;
  }
}

@media (max-width: 680px) {
  .ecosystem-map__diagram {
    padding: 18px;
  }

  .ecosystem-map__items {
    grid-template-columns: 1fr;
  }
}
</style>
