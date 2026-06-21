<template>
  <article class="ecosystem-layer">
    <div class="ecosystem-layer__head">
      <span class="ecosystem-layer__number">
        {{ number }}
      </span>

      <span class="ecosystem-layer__label">
        {{ layer }}
      </span>
    </div>

    <h3>
      {{ title }}
    </h3>

    <p>
      {{ text }}
    </p>
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
  padding: 16px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.028);
  transition:
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.ecosystem-layer:hover {
  border-color: rgba(213, 122, 42, 0.28);
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-2px);
}

.ecosystem-layer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.ecosystem-layer__number {
  display: inline-flex;
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(213, 122, 42, 0.28);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 850;
}

.ecosystem-layer__label {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 820;
  letter-spacing: 0.07em;
  text-align: right;
  text-transform: uppercase;
}

.ecosystem-layer h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 820;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.ecosystem-layer p {
  margin: 8px 0 0;
  color: var(--sd-text-muted);
  font-size: 13px;
  line-height: 1.5;
}

/* ==========================================================================
   Softadastra Engine ecosystem layer override
   ========================================================================== */

.ecosystem-layer {
  position: relative;
  overflow: hidden;
  padding: 16px;
  border: 1px solid rgba(255, 244, 224, 0.1);
  border-radius: 16px;

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(255, 244, 224, 0.055),
      rgba(255, 244, 224, 0.022)
    );

  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  transition:
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    box-shadow var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.ecosystem-layer::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background: linear-gradient(
    145deg,
    transparent 0%,
    transparent 48%,
    rgba(213, 122, 42, 0.1) 49%,
    rgba(226, 154, 85, 0.07) 58%,
    transparent 66%
  );

  opacity: 0;
  transition: opacity var(--sd-transition-fast);
}

.ecosystem-layer:hover {
  border-color: rgba(226, 154, 85, 0.3);
  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.1),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(213, 122, 42, 0.09),
      rgba(255, 244, 224, 0.035)
    );

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.22),
    0 8px 28px rgba(213, 122, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transform: translateY(-2px);
}

.ecosystem-layer:hover::before {
  opacity: 1;
}

.ecosystem-layer__head,
.ecosystem-layer h3,
.ecosystem-layer p {
  position: relative;
  z-index: 1;
}

.ecosystem-layer__number {
  border-color: rgba(226, 154, 85, 0.3);
  background: linear-gradient(
    180deg,
    rgba(213, 122, 42, 0.18),
    rgba(213, 122, 42, 0.08)
  );
  color: var(--sd-orange-strong);
  box-shadow:
    0 8px 24px rgba(213, 122, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.ecosystem-layer__label {
  color: rgba(246, 232, 204, 0.46);
}

.ecosystem-layer h3 {
  color: rgba(255, 248, 235, 0.95);
}

.ecosystem-layer p {
  color: rgba(246, 232, 204, 0.58);
}

.ecosystem-layer:hover h3 {
  color: var(--sd-orange-strong);
}

.ecosystem-layer:hover .ecosystem-layer__label {
  color: rgba(246, 232, 204, 0.62);
}
</style>
