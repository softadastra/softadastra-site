<template>
  <SiteShell>
    <section class="ecosystem-page">
      <div class="ecosystem-page__hero sd-container">
        <h1>
          One architecture for reliable local-first software.
        </h1>

        <p>
          Softadastra Company maintains a connected stack of runtimes, engines,
          frameworks, and products. Each layer has a clear role, but all layers
          share the same reliability-first foundation.
        </p>

        <div class="ecosystem-page__hero-meta">
          <span>MIT licensed stack</span>
          <span>Local-first foundation</span>
          <span>Commercial products around it</span>
        </div>
      </div>

      <div class="ecosystem-page__diagram sd-container">
        <EcosystemDiagram />
      </div>

      <div class="ecosystem-page__stacks sd-container">
        <div class="ecosystem-page__section-top">
          <SectionHeading
            eyebrow="Maintained projects"
            title="Projects maintained under Softadastra Company."
            text="The ecosystem can grow without becoming scattered because every project has a defined position in the stack."
          />
        </div>

        <div class="ecosystem-page__stack-grid">
          <StackCard
            v-for="stack in stacks"
            :key="stack.id"
            :stack="stack"
          />
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { stacks } from "../data/stacks";

import SiteShell from "../components/layout/SiteShell.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

import EcosystemDiagram from "../components/ecosystem/EcosystemDiagram.vue";
import StackCard from "../components/ecosystem/StackCard.vue";
</script>

<style scoped>
.ecosystem-page {
  position: relative;
  overflow: hidden;
  padding-bottom: 104px;
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  );
}

.ecosystem-page::before,
.ecosystem-page::after {
  display: none;
}

.ecosystem-page__hero,
.ecosystem-page__diagram,
.ecosystem-page__layers,
.ecosystem-page__stacks {
  position: relative;
  z-index: 1;
}

.ecosystem-page__hero {
  padding: 104px 0 58px;
  text-align: center;
}

.ecosystem-page__hero h1 {
  max-width: 980px;
  margin: 0 auto;
  color: var(--sd-text);
  font-size: clamp(3.2rem, 7vw, 6.4rem);
  font-weight: 850;
  line-height: 0.92;
  letter-spacing: -0.085em;
}

.ecosystem-page__hero p {
  max-width: 780px;
  margin: 28px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.72;
}

.ecosystem-page__hero-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.ecosystem-page__hero-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
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

.ecosystem-page__diagram {
  margin-top: 18px;
}

.ecosystem-page__layers {
  padding-top: 88px;
}

.ecosystem-page__section-top {
  max-width: 780px;
}

.ecosystem-page__layer-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 34px;
}

.ecosystem-page__layer-card {
  padding: 16px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.028);
  transition:
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.ecosystem-page__layer-card:hover {
  border-color: rgba(213, 122, 42, 0.28);
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-2px);
}

.ecosystem-page__layer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.ecosystem-page__layer-number {
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

.ecosystem-page__layer-label {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 820;
  letter-spacing: 0.07em;
  text-align: right;
  text-transform: uppercase;
}

.ecosystem-page__layer-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 820;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.ecosystem-page__layer-card p {
  margin: 8px 0 0;
  color: var(--sd-text-muted);
  font-size: 13px;
  line-height: 1.5;
}

.ecosystem-page__stacks {
  padding-top: 88px;
}

.ecosystem-page__stack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 34px;
}

@media (max-width: 1080px) {
  .ecosystem-page__stack-grid {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }
}

@media (max-width: 760px) {
  .ecosystem-page {
    padding-bottom: 72px;
  }

  .ecosystem-page__hero {
    padding: 76px 0 46px;
  }

  .ecosystem-page__hero h1 {
    letter-spacing: -0.065em;
  }

  .ecosystem-page__hero p {
    margin-top: 22px;
  }

  .ecosystem-page__layers,
  .ecosystem-page__stacks {
    padding-top: 72px;
  }

  .ecosystem-page__layer-grid,
  .ecosystem-page__stack-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .ecosystem-page__hero h1 {
    font-size: clamp(2.7rem, 14vw, 3.7rem);
  }

  .ecosystem-page__hero-meta {
    justify-content: flex-start;
    text-align: left;
  }
}
</style>
