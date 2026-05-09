<template>
  <article
    :class="[
      'product-card',
      `product-card--${product.icon}`,
    ]"
  >
    <div class="product-card__glow" aria-hidden="true" />

    <div class="product-card__top">
      <div class="product-card__icon">
        <svg
          v-if="product.icon === 'cloud'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18 10a6 6 0 00-11.18-2A5 5 0 006 18h12a4 4 0 000-8z" />
        </svg>

        <svg
          v-else-if="product.icon === 'docs'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="2"
          />
          <path d="M8 7h8M8 11h6M8 15h4" />
        </svg>

        <svg
          v-else-if="product.icon === 'package'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>

      <div class="product-card__badges">
        <span class="product-card__badge">
          {{ product.category }}
        </span>

        <span class="product-card__badge product-card__badge--status">
          {{ product.status }}
        </span>
      </div>
    </div>

    <div class="product-card__body">
      <span class="product-card__label">
        {{ product.label }}
      </span>

      <h3>
        {{ product.name }}
      </h3>

      <p class="product-card__tagline">
        {{ product.tagline }}
      </p>

      <p class="product-card__description">
        {{ product.description }}
      </p>
    </div>

    <div class="product-card__actions">
      <a
        v-if="product.href"
        :href="product.href"
        class="product-card__link product-card__link--primary"
      >
        Learn more

        <svg
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 10L10 2M10 2H5M10 2v5"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 26px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.038), rgba(255, 255, 255, 0.014)),
    #0d1319;
  transition:
    transform 240ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 240ms ease;
}

.product-card:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.065), rgba(255, 255, 255, 0.018)),
    #0f161d;
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-4px);
}

.product-card__glow {
  position: absolute;
  top: -90px;
  right: -90px;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  background: rgba(174, 185, 255, 0.08);
  filter: blur(42px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 240ms ease;
}

.product-card:hover .product-card__glow {
  opacity: 1;
}

.product-card--cloud .product-card__glow {
  background: rgba(110, 231, 183, 0.1);
}

.product-card--docs .product-card__glow {
  background: rgba(174, 185, 255, 0.1);
}

.product-card--package .product-card__glow {
  background: rgba(103, 232, 249, 0.1);
}

.product-card__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.product-card__icon {
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(174, 185, 255, 0.12);
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.1), rgba(174, 185, 255, 0.035)),
    rgba(255, 255, 255, 0.02);
  color: var(--sd-accent);
}

.product-card--cloud .product-card__icon {
  border-color: rgba(110, 231, 183, 0.18);
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.product-card--docs .product-card__icon {
  border-color: rgba(174, 185, 255, 0.18);
  background: var(--sd-accent-bg);
  color: var(--sd-accent);
}

.product-card--package .product-card__icon {
  border-color: rgba(103, 232, 249, 0.18);
  background: var(--sd-cyan-bg);
  color: var(--sd-cyan);
}

.product-card__icon svg {
  width: 23px;
  height: 23px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.product-card__badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 7px;
}

.product-card__badge {
  display: inline-flex;
  align-items: center;
  min-height: 23px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 750;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.product-card__badge--status {
  border: 1px solid rgba(110, 231, 183, 0.12);
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.product-card__body {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 34px;
}

.product-card__label {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 12px;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 25px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.product-card__tagline {
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15px;
  font-weight: 620;
  line-height: 1.5;
}

.product-card__description {
  margin: 14px 0 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.62;
}

.product-card__actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid var(--sd-border);
}

.product-card__link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--sd-text-muted);
  font-size: 13.5px;
  font-weight: 720;
  transition:
    color var(--sd-transition-fast),
    gap var(--sd-transition);
}

.product-card__link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.product-card__link:hover {
  color: var(--sd-text);
}

.product-card__link--primary {
  color: var(--sd-accent);
}

.product-card__link--primary:hover {
  gap: 9px;
  color: var(--sd-accent-strong);
}

@media (max-width: 620px) {
  .product-card {
    padding: 24px;
  }

  .product-card__top {
    flex-direction: column;
  }

  .product-card__badges {
    justify-content: flex-start;
  }

  .product-card__body {
    margin-top: 28px;
  }

  .product-card h3 {
    font-size: 23px;
  }
}
</style>
