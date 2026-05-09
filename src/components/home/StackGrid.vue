<template>
  <section class="stack-grid sd-section">
    <div class="sd-section__inner">
      <div class="sd-section__header sd-reveal">
        <SectionHeading
          eyebrow="Maintained Stack"
          title="Open source. MIT licensed. Production ready."
          text="Five interconnected projects: runtime, durability, sync, framework, deployment. All under the MIT license."
        />
      </div>

      <div class="stack-grid__grid sd-reveal">
        <article
          v-for="stack in stacks"
          :key="stack.id"
          :class="[
            'stack-grid__card',
            `stack-grid__card--${stack.color}`,
          ]"
        >
          <div class="stack-grid__top">
            <div
              :class="[
                'stack-grid__icon',
                `stack-grid__icon--${stack.color}`,
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
                v-else-if="stack.icon === 'network'"
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

            <div class="stack-grid__meta">
              <span class="stack-grid__badge stack-grid__badge--mit">
                {{ stack.license }}
              </span>

              <span class="stack-grid__badge stack-grid__badge--active">
                {{ stack.status }}
              </span>
            </div>
          </div>

          <h3 class="stack-grid__name">
            {{ stack.name }}
          </h3>

          <p
            :class="[
              'stack-grid__role',
              `stack-grid__role--${stack.color}`,
            ]"
          >
            {{ stack.role }}
          </p>

          <p class="stack-grid__tagline">
            {{ stack.tagline }}
          </p>

          <div class="stack-grid__links">
            <a
              v-if="stack.docsHref && stack.docsHref !== '#'"
              :href="stack.docsHref"
              class="stack-grid__link stack-grid__link--accent"
            >
              Docs

              <svg
                viewBox="0 0 12 12"
                fill="none"
                width="11"
                height="11"
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
              class="stack-grid__link stack-grid__link--dim"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stacks } from "../../data/stacks";

import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.stack-grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: var(--sd-border);
}

.stack-grid__card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: 34px 28px;
  background: var(--sd-bg);
  transition: background var(--sd-transition);
}

.stack-grid__card:hover {
  background: var(--sd-accent-bg-soft);
}

.stack-grid__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;
}

.stack-grid__icon {
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.stack-grid__icon svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stack-grid__icon--vix {
  background: var(--sd-vix-bg);
  color: var(--sd-vix);
}

.stack-grid__icon--softadastra {
  background: var(--sd-softadastra-bg);
  color: var(--sd-softadastra);
}

.stack-grid__icon--kordex {
  background: var(--sd-kordex-bg);
  color: var(--sd-kordex);
}

.stack-grid__icon--cnerium {
  background: var(--sd-cnerium-bg);
  color: var(--sd-cnerium);
}

.stack-grid__icon--pulsegrid {
  background: var(--sd-pulsegrid-bg);
  color: var(--sd-pulsegrid);
}

.stack-grid__meta {
  display: flex;
  align-items: center;
  gap: 7px;
}

.stack-grid__badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.stack-grid__badge--mit {
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-muted);
}

.stack-grid__badge--active {
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.stack-grid__name {
  margin: 0 0 3px;
  color: var(--sd-text);
  font-size: 21px;
  font-weight: 760;
  letter-spacing: -0.025em;
}

.stack-grid__role {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 620;
}

.stack-grid__role--vix {
  color: var(--sd-vix);
}

.stack-grid__role--softadastra {
  color: var(--sd-softadastra);
}

.stack-grid__role--kordex {
  color: var(--sd-kordex);
}

.stack-grid__role--cnerium {
  color: var(--sd-cnerium);
}

.stack-grid__role--pulsegrid {
  color: var(--sd-pulsegrid);
}

.stack-grid__tagline {
  flex-grow: 1;
  margin: 0 0 22px;
  color: var(--sd-text-muted);
  font-size: 14.5px;
  line-height: 1.58;
}

.stack-grid__links {
  display: flex;
  gap: 16px;
  margin-top: auto;
}

.stack-grid__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13.5px;
  font-weight: 620;
  transition:
    gap var(--sd-transition),
    color var(--sd-transition-fast);
}

.stack-grid__link--accent {
  color: var(--sd-accent);
}

.stack-grid__link--accent:hover {
  gap: 8px;
  color: var(--sd-accent-strong);
}

.stack-grid__link--dim {
  color: var(--sd-text-muted);
}

.stack-grid__link--dim:hover {
  color: var(--sd-text-soft);
}

@media (max-width: 960px) {
  .stack-grid__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stack-grid__grid {
    grid-template-columns: 1fr;
  }

  .stack-grid__card {
    padding: 26px 22px;
  }
}

@media (max-width: 420px) {
  .stack-grid__top {
    flex-direction: column;
  }

  .stack-grid__meta {
    flex-wrap: wrap;
  }
}
</style>
