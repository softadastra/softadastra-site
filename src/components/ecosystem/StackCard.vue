<template>
  <article
    :class="[
      'stack-card',
      `stack-card--${stack.color}`,
    ]"
  >
    <div class="stack-card__top">
     <div
  :class="[
    'stack-card__icon',
    `stack-card__icon--${stack.color}`,
  ]"
  aria-hidden="true"
>
  <img
    :src="logoSrc"
    :alt="`${stack.name} logo`"
  />
</div>

      <div class="stack-card__meta">
        <span
          :class="[
            'stack-card__layer',
            `stack-card__layer--${stack.color}`,
          ]"
        >
          {{ stack.layer }}
        </span>

        <span class="stack-card__status">
          {{ stack.status }}
        </span>
      </div>
    </div>

    <div class="stack-card__body">
      <h3>
        {{ stack.name }}
      </h3>

      <p class="stack-card__role">
        {{ stack.role }}
      </p>

      <p class="stack-card__tagline">
        {{ stack.tagline }}
      </p>
    </div>

    <div class="stack-card__actions">
      <a
        v-if="stack.docsHref && stack.docsHref !== '#'"
        :href="stack.docsHref"
        class="stack-card__link stack-card__link--primary"
      >
        Docs
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
const props = defineProps({
  stack: {
    type: Object,
    required: true,
  },
});

const logoMap = {
  vix: "/logos/vix.svg",
  softadastra: "/logos/softadastra.svg",
  kordex: "/logos/kordex.svg",
  cnerium: "/logos/cnerium.svg",
  pulsegrid: "/logos/pulsegrid.svg",
  registry: "/logos/vix-registry.svg",
  converdict: "/logos/converdict.svg",
};

const logoSrc = logoMap[props.stack.id] || logoMap[props.stack.color] || "/logos/softadastra.svg";
</script>

<style scoped>
.stack-card {
  position: relative;
  display: flex;
  min-height: auto;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.028);
  color: inherit;
  transition:
    transform var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast);
}

.stack-card:hover {
  border-color: rgba(213, 122, 42, 0.28);
  background: rgba(255, 255, 255, 0.045);
  transform: translateY(-2px);
}

.stack-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.stack-card__icon {
  display: flex;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-accent);
}
.stack-card__icon {
  display: flex;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
}

.stack-card__icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.stack-card__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.stack-card__layer,
.stack-card__status {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 820;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.stack-card__status {
  padding: 4px 7px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  color: var(--sd-text-muted);
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

.stack-card__layer--registry {
  color: var(--sd-registry);
}

.stack-card__layer--converdict {
  color: var(--sd-converdict);
}

.stack-card__body {
  margin-top: 22px;
}

.stack-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 24px;
  font-weight: 820;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.stack-card__role {
  margin: 8px 0 0;
  color: var(--sd-text-soft);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
}

.stack-card__tagline {
  margin: 14px 0 0;
  color: var(--sd-text-muted);
  font-size: 13.5px;
  line-height: 1.55;
}

.stack-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--sd-border);
}

.stack-card__link {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  padding: 0 10px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--sd-text-soft);
  font-size: 12.5px;
  font-weight: 740;
  text-decoration: none;
  transition:
    color var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast);
}

.stack-card__link:hover {
  border-color: rgba(213, 122, 42, 0.3);
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
}

.stack-card__link--primary {
  border-color: rgba(213, 122, 42, 0.26);
  background: rgba(213, 122, 42, 0.09);
  color: var(--sd-orange-strong);
}

@media (max-width: 620px) {
  .stack-card {
    padding: 18px;
  }

  .stack-card__top {
    flex-direction: column;
  }

  .stack-card__meta {
    justify-content: flex-start;
  }

  .stack-card h3 {
    font-size: 23px;
  }
}
</style>
