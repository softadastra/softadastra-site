<template>
  <SiteShell>
    <section class="ecosystem-page">
      <div class="ecosystem-page__hero sd-container">
        <BaseBadge>
          Softadastra Ecosystem
        </BaseBadge>

        <h1>
          One ecosystem for reliable local-first software.
        </h1>

        <p>
          Softadastra Company maintains a connected stack of runtimes, engines,
          frameworks, and products. Each layer has a clear role, but all layers
          share the same reliability-first foundation.
        </p>
      </div>

      <div class="ecosystem-page__diagram sd-container">
        <EcosystemDiagram />
      </div>

      <div class="ecosystem-page__layers sd-container">
        <SectionHeading
          eyebrow="Architecture"
          title="The stack is organized by layers."
          text="This structure keeps the company website simple today while making it easy to add future stacks and products later."
        />

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
        <SectionHeading
          eyebrow="Maintained projects"
          title="Projects maintained under Softadastra Company."
          text="The ecosystem can grow without becoming scattered because every project has a defined position in the stack."
        />

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
  padding-bottom: 96px;
}

.ecosystem-page__hero {
  padding: 96px 0 52px;
  text-align: center;
}

.ecosystem-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.ecosystem-page__hero h1 {
  max-width: 900px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3rem, 7vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
}

.ecosystem-page__hero p {
  max-width: 760px;
  margin: 26px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.7;
}

.ecosystem-page__diagram {
  margin-top: 18px;
}

.ecosystem-page__layers {
  padding-top: 96px;
}

.ecosystem-page__layer-list {
  display: grid;
  gap: 16px;
  margin-top: 42px;
}

.ecosystem-page__stacks {
  padding-top: 96px;
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
    padding-bottom: 64px;
  }

  .ecosystem-page__hero {
    padding: 72px 0 42px;
  }

  .ecosystem-page__hero h1 {
    letter-spacing: -0.06em;
  }

  .ecosystem-page__layers,
  .ecosystem-page__stacks {
    padding-top: 72px;
  }

  .ecosystem-page__stack-grid {
    grid-template-columns: 1fr;
  }
}
</style>
