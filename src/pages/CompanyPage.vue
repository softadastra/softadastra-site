<template>
  <SiteShell>
    <section class="company-page">
      <div class="company-page__hero sd-container">
        <BaseBadge>
          Softadastra Company
        </BaseBadge>

        <h1>
          The company behind reliable local-first infrastructure.
        </h1>

        <p>
          Softadastra maintains open runtimes, sync engines, frameworks, and
          developer tools while building commercial products around reliability,
          observability, cloud infrastructure, and enterprise services.
        </p>
      </div>

      <div class="company-page__model sd-container">
        <BaseCard class="company-page__model-card">
          <span>Company model</span>

          <h2>
            Open foundations, commercial services around them.
          </h2>

          <p>
            The core stack is designed to stay open and easy to adopt. The
            business layer lives around the ecosystem through Softadastra Cloud,
            managed services, builds, support, and reliability tooling.
          </p>

          <div class="company-page__flow">
            <div class="company-page__flow-item">
              <strong>Softadastra Company</strong>
              <span>Maintains the ecosystem</span>
            </div>

            <div class="company-page__flow-line" />

            <div class="company-page__flow-grid">
              <div>Vix</div>
              <div>Softadastra</div>
              <div>Kordex</div>
              <div>Cnerium</div>
              <div>PulseGrid</div>
              <div>Softadastra Cloud</div>
            </div>

            <div class="company-page__flow-line" />

            <div class="company-page__flow-item company-page__flow-item--accent">
              <strong>MIT License</strong>
              <span>Adoption, ecosystem, and business products</span>
            </div>
          </div>
        </BaseCard>
      </div>

      <div class="company-page__sections sd-container">
        <SectionHeading
          eyebrow="Structure"
          title="A simple structure that can grow over time."
          text="Softadastra.com is the company and ecosystem hub. Specialized subdomains handle docs, business, builds, and engineering content."
        />

        <div class="company-page__grid">
          <BaseCard
            v-for="section in sections"
            :key="section.title"
            class="company-page__section-card"
          >
            <span>{{ section.label }}</span>

            <h3>{{ section.title }}</h3>

            <p>{{ section.text }}</p>

            <a
              v-if="section.href"
              :href="section.href"
            >
              Open
            </a>
          </BaseCard>
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { links } from "../data/links";

import SiteShell from "../components/layout/SiteShell.vue";

import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseCard from "../components/ui/BaseCard.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

const sections = [
  {
    label: "Main hub",
    title: "softadastra.com",
    text: "The central company website for the ecosystem, maintained stacks, products, and global positioning.",
    href: links.main,
  },
  {
    label: "Technical docs",
    title: "docs.softadastra.com",
    text: "The documentation portal for concepts, engine internals, SDKs, CLI, modules, and developer guides.",
    href: links.docs,
  },
  {
    label: "Business layer",
    title: "business.softadastra.com",
    text: "The home for Softadastra Cloud, SaaS products, pricing, dashboards, enterprise services, and managed offerings.",
    href: links.business,
  },
  {
    label: "Distribution",
    title: "builds.softadastra.com",
    text: "The future home for official builds, binaries, SDK packages, installers, releases, and nightly artifacts.",
    href: links.builds,
  },
  {
    label: "Engineering",
    title: "blog.softadastra.com",
    text: "Engineering articles about reliability, runtimes, WAL, sync, local-first systems, and infrastructure design.",
    href: links.blog,
  },
];
</script>

<style scoped>
.company-page {
  padding-bottom: 96px;
}

.company-page__hero {
  padding: 96px 0 52px;
  text-align: center;
}

.company-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.company-page__hero h1 {
  max-width: 980px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3rem, 7vw, 5.9rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
}

.company-page__hero p {
  max-width: 780px;
  margin: 26px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.7;
}

.company-page__model {
  margin-top: 18px;
}

.company-page__model-card {
  padding: 38px;
}

.company-page__model-card > span {
  color: var(--sd-primary);
  font-size: 0.8rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.company-page__model-card h2 {
  max-width: 840px;
  margin: 18px 0 0;
  color: var(--sd-text);
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.065em;
}

.company-page__model-card p {
  max-width: 780px;
  margin: 20px 0 0;
  color: var(--sd-text-muted);
  font-size: 1.02rem;
}

.company-page__flow {
  display: grid;
  gap: 16px;
  margin-top: 36px;
}

.company-page__flow-item {
  padding: 22px;
  border: 1px solid rgba(56, 189, 248, 0.34);
  border-radius: var(--sd-radius-lg);
  background: rgba(56, 189, 248, 0.08);
  text-align: center;
}

.company-page__flow-item strong {
  display: block;
  color: var(--sd-text);
  font-size: 1.26rem;
  letter-spacing: -0.035em;
}

.company-page__flow-item span {
  display: block;
  margin-top: 6px;
  color: var(--sd-text-muted);
  font-size: 0.94rem;
}

.company-page__flow-item--accent {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.07);
}

.company-page__flow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.company-page__flow-grid div {
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: rgba(7, 11, 20, 0.42);
  color: var(--sd-text-soft);
  font-weight: 850;
  text-align: center;
}

.company-page__flow-line {
  width: 1px;
  height: 34px;
  margin: 0 auto;
  background: linear-gradient(180deg, transparent, var(--sd-border), transparent);
}

.company-page__sections {
  padding-top: 96px;
}

.company-page__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 42px;
}

.company-page__section-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.company-page__section-card span {
  color: var(--sd-primary);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.company-page__section-card h3 {
  margin: 16px 0 0;
  color: var(--sd-text);
  font-size: 1.35rem;
  letter-spacing: -0.04em;
}

.company-page__section-card p {
  margin: 12px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.95rem;
}

.company-page__section-card a {
  display: inline-flex;
  width: fit-content;
  margin-top: auto;
  padding-top: 24px;
  color: var(--sd-primary);
  font-size: 0.92rem;
  font-weight: 850;
}

.company-page__section-card a:hover {
  color: var(--sd-text);
}

@media (max-width: 1080px) {
  .company-page__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .company-page {
    padding-bottom: 64px;
  }

  .company-page__hero {
    padding: 72px 0 42px;
  }

  .company-page__hero h1 {
    letter-spacing: -0.06em;
  }

  .company-page__model-card {
    padding: 24px;
  }

  .company-page__flow-grid,
  .company-page__grid {
    grid-template-columns: 1fr;
  }

  .company-page__sections {
    padding-top: 72px;
  }
}
</style>
