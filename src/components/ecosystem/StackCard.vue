<template>
  <article
    :class="[
      'stack-card',
      `stack-card--${stack.color}`,
    ]"
  >
    <div class="stack-card__glow" aria-hidden="true" />

    <div class="stack-card__top">
      <div
        :class="[
          'stack-card__icon',
          `stack-card__icon--${stack.color}`,
        ]"
      >
        <svg
          v-if="stack.icon === 'layers'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>

        <svg
          v-else-if="stack.icon === 'shield'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>

        <svg
          v-else-if="stack.icon === 'runtime'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
          />
          <path d="M8 16V8l8 4-8 4z" />
        </svg>

        <svg
          v-else-if="stack.icon === 'framework'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
        </svg>

        <svg
          v-else
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="3"
          />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
          <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
        </svg>
      </div>

      <div class="stack-card__badges">
        <span class="stack-card__badge">
          {{ stack.license }}
        </span>

        <span class="stack-card__badge stack-card__badge--status">
          {{ stack.status }}
        </span>
      </div>
    </div>

    <div class="stack-card__body">
      <span
        :class="[
          'stack-card__layer',
          `stack-card__layer--${stack.color}`,
        ]"
      >
        {{ stack.layer }}
      </span>

      <h3>
        {{ stack.name }}
      </h3>

      <p class="stack-card__role">
        {{ stack.role }}
      </p>

      <p class="stack-card__tagline">
        {{ stack.tagline }}
      </p>

      <p class="stack-card__description">
        {{ stack.description }}
      </p>
    </div>

    <div class="stack-card__actions">
      <a
        v-if="stack.docsHref && stack.docsHref !== '#'"
        :href="stack.docsHref"
        class="stack-card__link stack-card__link--primary"
      >
        Docs

        <svg
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 6h8M7 3l3 3-3 3"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <a
        v-if="stack.githubHref && stack.githubHref !== '#'"
        :href="stack.githubHref"
        class="stack-card__link"
      >
        GitHub
      </a>

      <a
        v-if="stack.href && stack.href !== '#'"
        :href="stack.href"
        class="stack-card__link"
      >
        Visit
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  stack: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.stack-card {
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

.stack-card:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.065), rgba(255, 255, 255, 0.018)),
    #0f161d;
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-4px);
}

.stack-card__glow {
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

.stack-card:hover .stack-card__glow {
  opacity: 1;
}

.stack-card--vix .stack-card__glow {
  background: rgba(139, 154, 255, 0.1);
}

.stack-card--softadastra .stack-card__glow {
  background: rgba(110, 231, 183, 0.1);
}

.stack-card--kordex .stack-card__glow {
  background: rgba(251, 191, 36, 0.1);
}

.stack-card--cnerium .stack-card__glow {
  background: rgba(244, 114, 182, 0.1);
}

.stack-card--pulsegrid .stack-card__glow {
  background: rgba(103, 232, 249, 0.1);
}

.stack-card__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.stack-card__icon {
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
}

.stack-card__icon svg {
  width: 23px;
  height: 23px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stack-card__icon--vix {
  background: var(--sd-vix-bg);
  color: var(--sd-vix);
}

.stack-card__icon--softadastra {
  background: var(--sd-softadastra-bg);
  color: var(--sd-softadastra);
}

.stack-card__icon--kordex {
  background: var(--sd-kordex-bg);
  color: var(--sd-kordex);
}

.stack-card__icon--cnerium {
  background: var(--sd-cnerium-bg);
  color: var(--sd-cnerium);
}

.stack-card__icon--pulsegrid {
  background: var(--sd-pulsegrid-bg);
  color: var(--sd-pulsegrid);
}

.stack-card__badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 7px;
}

.stack-card__badge {
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

.stack-card__badge--status {
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.stack-card__body {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 34px;
}

.stack-card__layer {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 12px;
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stack-card__layer--vix {
  color: var(--sd-vix);
}

.stack-card__layer--softadastra {
  color: var(--sd-softadastra);
}

.stack-card__layer--kordex {
  color: var(--sd-kordex);
}

.stack-card__layer--cnerium {
  color: var(--sd-cnerium);
}

.stack-card__layer--pulsegrid {
  color: var(--sd-pulsegrid);
}

.stack-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 25px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.stack-card__role {
  margin: 8px 0 0;
  color: var(--sd-text-soft);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.45;
}

.stack-card__tagline {
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15px;
  font-weight: 620;
  line-height: 1.5;
}

.stack-card__description {
  margin: 14px 0 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.62;
}

.stack-card__actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid var(--sd-border);
}

.stack-card__link {
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

.stack-card__link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.stack-card__link:hover {
  color: var(--sd-text);
}

.stack-card__link--primary {
  color: var(--sd-accent);
}

.stack-card__link--primary:hover {
  gap: 9px;
  color: var(--sd-accent-strong);
}

@media (max-width: 620px) {
  .stack-card {
    padding: 24px;
  }

  .stack-card__top {
    flex-direction: column;
  }

  .stack-card__badges {
    justify-content: flex-start;
  }

  .stack-card__body {
    margin-top: 28px;
  }

  .stack-card h3 {
    font-size: 23px;
  }
}
</style>
