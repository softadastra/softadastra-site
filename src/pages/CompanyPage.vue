<template>
  <SiteShell>
    <section class="company-page">
      <div class="company-page__hero sd-container">
        <h1>
          The company behind reliable local-first infrastructure.
        </h1>

        <p>
          Softadastra maintains open runtimes, sync engines, frameworks, and
          developer tools while building commercial products around reliability,
          observability, cloud infrastructure, and enterprise services.
        </p>

        <div class="company-page__hero-meta">
          <span>Open foundations</span>
          <span>MIT licensed stack</span>
          <span>Commercial services around it</span>
        </div>
      </div>

      <div class="company-page__model sd-container">
        <div class="company-page__model-card">
          <div class="company-page__model-copy">
            <span class="company-page__eyebrow">
              Company model
            </span>

            <h2>
              Open foundations, commercial services around them.
            </h2>

            <p>
              The core stack is designed to stay open and easy to adopt. The
              business layer lives around the ecosystem through Softadastra
              Cloud, managed services, builds, support, and reliability tooling.
            </p>
          </div>

          <div class="company-page__flow">
            <div class="company-page__flow-item company-page__flow-item--main">
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
        </div>
      </div>

      <div class="company-page__sections sd-container">
        <div class="company-page__section-top">
          <SectionHeading
            eyebrow="Structure"
            title="A simple structure that can grow over time."
            text="Softadastra.com is the company and ecosystem hub. Specialized subdomains handle docs, business, builds, and engineering content."
          />
        </div>

        <div class="company-page__grid">
          <article
            v-for="section in sections"
            :key="section.title"
            class="company-page__section-card"
          >
            <div class="company-page__section-glow" aria-hidden="true" />

            <span class="company-page__section-label">
              {{ section.label }}
            </span>

            <h3>{{ section.title }}</h3>

            <p>{{ section.text }}</p>

            <a
              v-if="section.href"
              :href="section.href"
              class="company-page__section-link"
            >
              Open

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
          </article>
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { links } from "../data/links";

import SiteShell from "../components/layout/SiteShell.vue";

import BaseBadge from "../components/ui/BaseBadge.vue";
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
  position: relative;
  overflow: hidden;
  padding-bottom: 104px;
  background: var(--sd-bg);
}

.company-page::before {
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

.company-page::after {
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

.company-page__hero,
.company-page__model,
.company-page__sections {
  position: relative;
  z-index: 1;
}

.company-page__hero {
  padding: 104px 0 58px;
  text-align: center;
}

.company-page__hero :deep(.sd-badge) {
  margin-inline: auto;
}

.company-page__hero h1 {
  max-width: 980px;
  margin: 26px auto 0;
  color: var(--sd-text);
  font-size: clamp(3.2rem, 7vw, 6.4rem);
  font-weight: 850;
  line-height: 0.92;
  letter-spacing: -0.085em;
}

.company-page__hero p {
  max-width: 780px;
  margin: 28px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.72;
}

.company-page__hero-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.company-page__hero-meta span {
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

.company-page__model {
  margin-top: 18px;
}

.company-page__model-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
  gap: 56px;
  align-items: center;
  overflow: hidden;
  padding: 42px;
  border: 1px solid var(--sd-border);
  border-radius: 26px;
  background:
    radial-gradient(circle at top right, rgba(174, 185, 255, 0.1), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012)),
    #0d1319;
  box-shadow:
    0 26px 90px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
}

.company-page__model-card::before {
  position: absolute;
  right: -160px;
  bottom: -160px;
  width: 420px;
  height: 420px;
  border-radius: 999px;
  background: radial-gradient(
    circle at center,
    rgba(110, 231, 183, 0.08),
    transparent 68%
  );
  filter: blur(56px);
  pointer-events: none;
  content: "";
}

.company-page__model-copy,
.company-page__flow {
  position: relative;
  z-index: 1;
}

.company-page__eyebrow {
  display: inline-flex;
  width: fit-content;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.company-page__model-copy h2 {
  max-width: 720px;
  margin: 18px 0 0;
  color: var(--sd-text);
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 820;
  line-height: 1.02;
  letter-spacing: -0.065em;
}

.company-page__model-copy p {
  max-width: 680px;
  margin: 20px 0 0;
  color: var(--sd-text-muted);
  font-size: 1.02rem;
  line-height: 1.7;
}

.company-page__flow {
  display: grid;
  gap: 16px;
}

.company-page__flow-item {
  padding: 20px;
  border: 1px solid rgba(174, 185, 255, 0.18);
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.08), rgba(255, 255, 255, 0.016)),
    rgba(12, 16, 21, 0.82);
  text-align: center;
}

.company-page__flow-item strong {
  display: block;
  color: var(--sd-text);
  font-size: 1.22rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.04em;
}

.company-page__flow-item span {
  display: block;
  margin-top: 7px;
  color: var(--sd-text-muted);
  font-size: 0.94rem;
}

.company-page__flow-item--accent {
  border-color: rgba(110, 231, 183, 0.2);
  background:
    linear-gradient(180deg, rgba(110, 231, 183, 0.075), rgba(255, 255, 255, 0.016)),
    rgba(12, 16, 21, 0.82);
}

.company-page__flow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.company-page__flow-grid div {
  display: grid;
  min-height: 58px;
  place-items: center;
  padding: 14px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.038), rgba(255, 255, 255, 0.014)),
    rgba(12, 16, 21, 0.72);
  color: var(--sd-text-soft);
  font-size: 14px;
  font-weight: 780;
  text-align: center;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    transform 220ms ease;
}

.company-page__flow-grid div:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.065), rgba(255, 255, 255, 0.018)),
    rgba(12, 16, 21, 0.78);
  transform: translateY(-2px);
}

.company-page__flow-line {
  width: 1px;
  height: 34px;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(174, 185, 255, 0.24),
    transparent
  );
}

.company-page__sections {
  padding-top: 104px;
}

.company-page__section-top {
  max-width: 780px;
}

.company-page__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 42px;
}

.company-page__section-card {
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

.company-page__section-card:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.065), rgba(255, 255, 255, 0.018)),
    #0f161d;
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-4px);
}

.company-page__section-glow {
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

.company-page__section-card:hover .company-page__section-glow {
  opacity: 1;
}

.company-page__section-label {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: fit-content;
  margin-bottom: 18px;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.company-page__section-card h3 {
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--sd-text);
  font-size: 23px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.045em;
}

.company-page__section-card p {
  position: relative;
  z-index: 1;
  flex: 1;
  margin: 14px 0 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.62;
}

.company-page__section-link {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 6px;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--sd-border);
  color: var(--sd-accent);
  font-size: 13.5px;
  font-weight: 720;
  transition:
    gap var(--sd-transition),
    color var(--sd-transition-fast);
}

.company-page__section-link:hover {
  gap: 10px;
  color: var(--sd-accent-strong);
}

.company-page__section-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

@media (max-width: 1080px) {
  .company-page__model-card {
    grid-template-columns: 1fr;
  }

  .company-page__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .company-page {
    padding-bottom: 72px;
  }

  .company-page__hero {
    padding: 76px 0 46px;
  }

  .company-page__hero h1 {
    letter-spacing: -0.065em;
  }

  .company-page__hero p {
    margin-top: 22px;
  }

  .company-page__model-card {
    padding: 26px;
    border-radius: 22px;
  }

  .company-page__flow-grid,
  .company-page__grid {
    grid-template-columns: 1fr;
  }

  .company-page__sections {
    padding-top: 76px;
  }
}

@media (max-width: 420px) {
  .company-page__hero h1 {
    font-size: clamp(2.7rem, 14vw, 3.7rem);
  }

  .company-page__hero-meta {
    justify-content: flex-start;
    text-align: left;
  }

  .company-page__model-card {
    padding: 22px;
  }

  .company-page__section-card {
    padding: 24px;
  }
}
</style>
