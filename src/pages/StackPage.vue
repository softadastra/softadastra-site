<template>
  <SiteShell>
    <section
      :class="[
        'stack-page',
        `stack-page--${currentStack.color || 'default'}`,
      ]"
    >
      <div class="stack-page__bg-grid" aria-hidden="true" />
      <div class="stack-page__glow" aria-hidden="true" />

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

        <div class="stack-page__hero-meta">
          <span>{{ currentStack.role }}</span>
          <span>{{ currentStack.license }}</span>
          <span>{{ currentStack.status }}</span>
        </div>
      </div>

      <div class="stack-page__content sd-container">
        <article class="stack-page__main-card">
          <div class="stack-page__card-glow" aria-hidden="true" />

          <div class="stack-page__card-top">
            <div
              :class="[
                'stack-page__icon',
                `stack-page__icon--${currentStack.color || 'default'}`,
              ]"
              aria-hidden="true"
            >
              <svg
                v-if="currentStack.icon === 'layers'"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>

              <svg
                v-else-if="currentStack.icon === 'shield'"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>

              <svg
                v-else-if="currentStack.icon === 'runtime'"
                viewBox="0 0 24 24"
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
                v-else-if="currentStack.icon === 'framework'"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
              </svg>

              <svg
                v-else
                viewBox="0 0 24 24"
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

            <div class="stack-page__badges">
              <span>{{ currentStack.license }}</span>
              <span>{{ currentStack.status }}</span>
            </div>
          </div>

          <div class="stack-page__card-body">
            <span class="stack-page__eyebrow">
              {{ currentStack.role }}
            </span>

            <h2>
              {{ currentStack.name }} inside the Softadastra ecosystem.
            </h2>

            <p>
              {{ currentStack.description }}
            </p>
          </div>

          <div class="stack-page__meta">
            <span>Layer: {{ currentStack.layer }}</span>
            <span>Role: {{ currentStack.role }}</span>
            <span>License: {{ currentStack.license }}</span>
            <span>Status: {{ currentStack.status }}</span>
          </div>

          <div class="stack-page__actions">
            <BaseButton
              v-if="currentStack.docsHref && currentStack.docsHref !== '#'"
              :href="currentStack.docsHref"
              arrow
            >
              Read docs
            </BaseButton>

            <BaseButton
              v-if="currentStack.href && currentStack.href !== '#'"
              :href="currentStack.href"
              variant="secondary"
            >
              Visit project
            </BaseButton>

            <BaseButton
              v-if="currentStack.githubHref && currentStack.githubHref !== '#'"
              :href="currentStack.githubHref"
              variant="secondary"
            >
              GitHub
            </BaseButton>
          </div>
        </article>

        <aside class="stack-page__side">
          <div class="stack-page__side-card">
            <SectionHeading
              eyebrow="Role"
              title="A clear layer in the platform."
              text="Every stack maintained by Softadastra has a defined position. This keeps the ecosystem easy to understand as new projects are added."
            />

            <div class="stack-page__relations">
              <RouterLink
                v-for="stack in relatedStacks"
                :key="stack.id"
                :to="`/stacks/${stack.id}`"
                class="stack-page__relation"
              >
                <span>{{ stack.layer }}</span>
                <strong>{{ stack.name }}</strong>
              </RouterLink>
            </div>
          </div>

          <div class="stack-page__side-card stack-page__side-card--compact">
            <span class="stack-page__side-label">
              Ecosystem rule
            </span>

            <p>
              One stack can evolve independently, but every stack must keep the
              Softadastra architecture coherent.
            </p>
          </div>
        </aside>
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
import SectionHeading from "../components/ui/SectionHeading.vue";

const route = useRoute();

const currentStack = computed(() => {
  return (
    stacks.find((stack) => stack.id === route.params.id) || {
      id: "unknown",
      name: "Stack not found",
      role: "Unknown role",
      label: "Unknown stack",
      tagline: "This stack does not exist in the current Softadastra ecosystem.",
      description:
        "The requested stack could not be found. Go back to the ecosystem page to see the maintained projects.",
      status: "Unknown",
      license: "Unknown",
      layer: "Unknown",
      color: "default",
      icon: "network",
      href: "#",
      docsHref: "#",
      githubHref: "#",
    }
  );
});

const relatedStacks = computed(() => {
  return stacks.filter((stack) => stack.id !== currentStack.value.id);
});
</script>

<style scoped>
.stack-page {
  position: relative;
  overflow: hidden;
  padding-bottom: 104px;
  background: var(--sd-bg);
}

.stack-page__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(
    ellipse 80% 55% at 50% 0%,
    black 0%,
    transparent 70%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 80% 55% at 50% 0%,
    black 0%,
    transparent 70%
  );
  pointer-events: none;
}

.stack-page__glow {
  position: absolute;
  top: -260px;
  left: 50%;
  width: 980px;
  height: 520px;
  border-radius: 999px;
  background: radial-gradient(
    ellipse at center,
    rgba(174, 185, 255, 0.12) 0%,
    rgba(110, 231, 183, 0.035) 42%,
    transparent 72%
  );
  filter: blur(72px);
  pointer-events: none;
  transform: translateX(-50%);
}

.stack-page__hero,
.stack-page__content {
  position: relative;
  z-index: 1;
}

.stack-page__hero {
  padding: 104px 0 58px;
  text-align: center;
}

.stack-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.stack-page__hero h1 {
  max-width: 900px;
  margin: 26px auto 0;
  color: var(--sd-text);
  font-size: clamp(3.4rem, 8vw, 6.8rem);
  font-weight: 860;
  line-height: 0.9;
  letter-spacing: -0.09em;
}

.stack-page__hero p {
  max-width: 760px;
  margin: 28px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.72;
}

.stack-page__hero-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.stack-page__hero-meta span {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.stack-page__content {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(330px, 0.82fr);
  gap: 28px;
  align-items: start;
}

.stack-page__main-card,
.stack-page__side-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012)),
    #0d1319;
  box-shadow:
    0 26px 90px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
}

.stack-page__main-card {
  padding: 34px;
  border-radius: 26px;
}

.stack-page__card-glow {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 320px;
  height: 320px;
  border-radius: 999px;
  background: rgba(174, 185, 255, 0.1);
  filter: blur(58px);
  pointer-events: none;
}

.stack-page--softadastra .stack-page__card-glow {
  background: rgba(110, 231, 183, 0.1);
}

.stack-page--kordex .stack-page__card-glow {
  background: rgba(251, 191, 36, 0.1);
}

.stack-page--cnerium .stack-page__card-glow {
  background: rgba(244, 114, 182, 0.1);
}

.stack-page--pulsegrid .stack-page__card-glow {
  background: rgba(103, 232, 249, 0.1);
}

.stack-page__card-top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.stack-page__icon {
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 18px;
  background: var(--sd-accent-bg);
  color: var(--sd-accent);
}

.stack-page__icon svg {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stack-page__icon--vix {
  background: var(--sd-vix-bg);
  color: var(--sd-vix);
}

.stack-page__icon--softadastra {
  background: var(--sd-softadastra-bg);
  color: var(--sd-softadastra);
}

.stack-page__icon--kordex {
  background: var(--sd-kordex-bg);
  color: var(--sd-kordex);
}

.stack-page__icon--cnerium {
  background: var(--sd-cnerium-bg);
  color: var(--sd-cnerium);
}

.stack-page__icon--pulsegrid {
  background: var(--sd-pulsegrid-bg);
  color: var(--sd-pulsegrid);
}

.stack-page__badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.stack-page__badges span {
  display: inline-flex;
  min-height: 24px;
  align-items: center;
  padding: 0 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.stack-page__card-body {
  position: relative;
  z-index: 1;
  margin-top: 42px;
}

.stack-page__eyebrow {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 18px;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 820;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stack-page__main-card h2 {
  max-width: 820px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(2.2rem, 4.8vw, 4.1rem);
  font-weight: 840;
  line-height: 1.02;
  letter-spacing: -0.07em;
}

.stack-page__main-card p {
  max-width: 780px;
  margin: 22px 0 0;
  color: var(--sd-text-muted);
  font-size: 1.02rem;
  line-height: 1.72;
}

.stack-page__meta {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.stack-page__meta span {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--sd-text-muted);
  font-size: 13px;
  font-weight: 720;
}

.stack-page__actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 38px;
  padding-top: 26px;
  border-top: 1px solid var(--sd-border);
}

.stack-page__side {
  display: grid;
  gap: 18px;
}

.stack-page__side-card {
  padding: 28px;
  border-radius: 24px;
}

.stack-page__side-card :deep(.sd-section-heading__title) {
  font-size: clamp(1.8rem, 3vw, 2.55rem);
}

.stack-page__relations {
  display: grid;
  gap: 10px;
  margin-top: 30px;
}

.stack-page__relation {
  display: grid;
  gap: 4px;
  padding: 14px;
  border: 1px solid var(--sd-border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.022);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.stack-page__relation:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background: rgba(174, 185, 255, 0.06);
  transform: translateX(3px);
}

.stack-page__relation span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.stack-page__relation strong {
  color: var(--sd-text);
  font-size: 14.5px;
  font-weight: 760;
}

.stack-page__side-card--compact {
  padding: 24px;
}

.stack-page__side-label {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 12px;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 820;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stack-page__side-card--compact p {
  margin: 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.62;
}

@media (max-width: 980px) {
  .stack-page__content {
    grid-template-columns: 1fr;
  }

  .stack-page__side {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .stack-page {
    padding-bottom: 72px;
  }

  .stack-page__hero {
    padding: 76px 0 46px;
  }

  .stack-page__hero h1 {
    letter-spacing: -0.065em;
  }

  .stack-page__main-card {
    padding: 26px;
    border-radius: 22px;
  }

  .stack-page__side-card {
    padding: 24px;
    border-radius: 22px;
  }

  .stack-page__card-top {
    flex-direction: column;
  }

  .stack-page__badges {
    justify-content: flex-start;
  }
}

@media (max-width: 420px) {
  .stack-page__hero h1 {
    font-size: clamp(2.8rem, 15vw, 4rem);
  }

  .stack-page__main-card,
  .stack-page__side-card {
    padding: 22px;
  }
}
</style>
