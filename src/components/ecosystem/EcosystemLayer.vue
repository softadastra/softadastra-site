<template>
  <article class="ecosystem-layer">
    <div class="ecosystem-layer__glow" aria-hidden="true" />

    <div class="ecosystem-layer__number">
      {{ number }}
    </div>

    <div class="ecosystem-layer__content">
      <span class="ecosystem-layer__label">
        {{ layer }}
      </span>

      <h3>
        {{ title }}
      </h3>

      <p>
        {{ text }}
      </p>
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
  position: relative;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 18px;
  overflow: hidden;
  padding: 22px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.038), rgba(255, 255, 255, 0.014)),
    #0d1319;
  transition:
    transform 220ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 220ms ease;
}

.ecosystem-layer:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.065), rgba(255, 255, 255, 0.018)),
    #0f161d;
  box-shadow:
    0 18px 56px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-3px);
}

.ecosystem-layer__glow {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 190px;
  height: 190px;
  border-radius: 999px;
  background: rgba(174, 185, 255, 0.08);
  filter: blur(40px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 220ms ease;
}

.ecosystem-layer:hover .ecosystem-layer__glow {
  opacity: 1;
}

.ecosystem-layer__number {
  position: relative;
  z-index: 1;
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(174, 185, 255, 0.2);
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.1), rgba(174, 185, 255, 0.035)),
    rgba(255, 255, 255, 0.02);
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.ecosystem-layer__content {
  position: relative;
  z-index: 1;
  min-width: 0;
}

.ecosystem-layer__label {
  display: inline-flex;
  width: fit-content;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ecosystem-layer__content h3 {
  margin: 9px 0 0;
  color: var(--sd-text);
  font-size: 20px;
  font-weight: 780;
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.ecosystem-layer__content p {
  margin: 10px 0 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.62;
}

@media (max-width: 620px) {
  .ecosystem-layer {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
  }

  .ecosystem-layer__content h3 {
    font-size: 19px;
  }
}
</style>
