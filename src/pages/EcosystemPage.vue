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

      <div class="ecosystem-page__layers sd-container">
        <div class="ecosystem-page__section-top">
          <SectionHeading
            eyebrow="Architecture"
            title="The stack is organized by layers."
            text="This structure keeps the company website simple today while making it easy to add future stacks and products later."
          />
        </div>

        <div class="ecosystem-page__layer-list">
          <EcosystemLayer
            number="01"
            layer="Foundation"
            title="Vix"
            text="The C++ runtime foundation that provides low-level runtime, networking, async, process, CLI, and system primitives."
          />

          <EcosystemLayer
            number="02"
            layer="Reliability"
            title="Softadastra"
            text="The local-first reliability engine that provides WAL-based durability, replay, sync, storage, and convergence guarantees."
          />

          <EcosystemLayer
            number="03"
            layer="Application runtime"
            title="Kordex"
            text="The JavaScript and TypeScript runtime layer for reliable local-first applications, built on Vix and Softadastra."
          />

          <EcosystemLayer
            number="04"
            layer="Framework"
            title="Cnerium"
            text="The web framework layer for building clean, production-ready applications on top of the Vix runtime foundation."
          />

          <EcosystemLayer
            number="05"
            layer="Business"
            title="Softadastra Cloud"
            text="The commercial SaaS and business layer for reliability observability, managed services, reports, and enterprise use cases."
          />
        </div>
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

import BaseBadge from "../components/ui/BaseBadge.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

import EcosystemDiagram from "../components/ecosystem/EcosystemDiagram.vue";
import EcosystemLayer from "../components/ecosystem/EcosystemLayer.vue";
import StackCard from "../components/ecosystem/StackCard.vue";
</script>

<style scoped>
.ecosystem-page {
  position: relative;
  overflow: hidden;
  padding-bottom: 104px;
  background: var(--sd-bg);
}

.ecosystem-page::before {
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
  content: "";
  transform: translateX(-50%);
}

.ecosystem-page::after {
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
  content: "";
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

.ecosystem-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.ecosystem-page__hero h1 {
  max-width: 980px;
  margin: 26px auto 0;
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
  padding-top: 104px;
}

.ecosystem-page__section-top {
  max-width: 780px;
}

.ecosystem-page__layer-list {
  display: grid;
  gap: 16px;
  margin-top: 42px;
}

.ecosystem-page__stacks {
  padding-top: 104px;
}

.ecosystem-page__stack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 42px;
}

@media (max-width: 1080px) {
  .ecosystem-page__stack-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
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
    padding-top: 76px;
  }

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
