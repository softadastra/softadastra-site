<template>
  <article class="ecosystem-layer">
    <div class="ecosystem-layer__number">
      {{ number }}
    </div>

    <div class="ecosystem-layer__content">
      <span>{{ layer }}</span>

      <h3>{{ title }}</h3>

      <p>{{ text }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true,
  },
  layer: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.ecosystem-layer {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 18px;
  padding: 22px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: rgba(255, 255, 255, 0.045);
}

.ecosystem-layer__number {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(56, 189, 248, 0.34);
  border-radius: 16px;
  background: rgba(56, 189, 248, 0.08);
  color: var(--sd-primary);
  font-size: 0.85rem;
  font-weight: 900;
}

.ecosystem-layer__content span {
  color: var(--sd-primary);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.ecosystem-layer__content h3 {
  margin: 8px 0 0;
  color: var(--sd-text);
  font-size: 1.18rem;
  letter-spacing: -0.035em;
}

.ecosystem-layer__content p {
  margin: 10px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.95rem;
}

@media (max-width: 620px) {
  .ecosystem-layer {
    grid-template-columns: 1fr;
  }
}
</style>
