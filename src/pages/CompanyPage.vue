<template>
  <SiteShell>
    <section class="company-page">
      <div class="company-page__hero sd-container">
        <span class="company-page__eyebrow"> Softadastra Company </span>

        <h1>The C++ Tooling Company.</h1>

        <p>
          Softadastra builds and maintains open tooling for modern C++
          development. The mission is to make C++ simpler, faster, more
          productive, and more accessible for developers building real
          applications.
        </p>

        <div class="company-page__hero-meta">
          <span>C++ tooling</span>
          <span>Open foundations</span>
          <span>Developer-first</span>
        </div>
      </div>

      <div class="company-page__model sd-container">
        <div class="company-page__model-card">
          <div class="company-page__model-copy">
            <span class="company-page__eyebrow"> Company model </span>

            <h2>A focused company for C++ tooling.</h2>

            <p>
              Softadastra is not trying to become a broad software company with
              many unrelated products. The company exists to build a coherent
              tooling ecosystem around modern C++: runtime foundations,
              developer workflows, backend reliability, local-first runtime
              layers, and practical validation applications.
            </p>
          </div>

          <div class="company-page__flow">
            <div class="company-page__flow-main">
              <span class="company-page__flow-logo">
                <img src="/logo.svg" alt="" aria-hidden="true" />
              </span>

              <div>
                <strong>Softadastra Company</strong>
                <span>Builds and maintains C++ tooling</span>
              </div>
            </div>

            <div class="company-page__flow-grid">
              <div
                v-for="item in ecosystemItems"
                :key="item.name"
                class="company-page__flow-item"
              >
                <span class="company-page__flow-item-logo">
                  <img :src="item.logo" :alt="`${item.name} logo`" />
                </span>

                <strong>{{ item.name }}</strong>
                <small>{{ item.role }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="company-page__sections sd-container">
        <div class="company-page__section-top">
          <SectionHeading
            eyebrow="Structure"
            title="A small ecosystem with clear responsibilities."
            text="Softadastra.com is the company hub. Vix.cpp is the C++ foundation. Softadastra Engine, Cnerium, and Kordex are focused technical layers. The registry, docs, and engineering notes help developers understand and use the ecosystem."
          />
        </div>

        <div class="company-page__grid">
          <article
            v-for="section in sections"
            :key="section.title"
            class="company-page__section-card"
          >
            <span class="company-page__section-label">
              {{ section.label }}
            </span>

            <h3>{{ section.title }}</h3>

            <p>{{ section.text }}</p>

            <a
              v-if="section.href"
              :href="section.href"
              class="company-page__section-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open

              <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
import SectionHeading from "../components/ui/SectionHeading.vue";

const ecosystemItems = [
  {
    name: "Vix.cpp",
    role: "C++ foundation",
    logo: "/logos/vix.svg",
  },
  {
    name: "Softadastra Engine",
    role: "Offline-first layer",
    logo: "/logos/softadastra.svg",
  },
  {
    name: "Cnerium",
    role: "Backend reliability",
    logo: "/logos/cnerium.svg",
  },
  {
    name: "Kordex",
    role: "JS/TS runtime",
    logo: "/logos/kordex.svg",
  },
  {
    name: "Registry",
    role: "C++ packages",
    logo: "/logos/vix-registry.svg",
  },
];

const sections = [
  {
    label: "Company hub",
    title: "softadastra.com",
    text: "The main website for Softadastra, its mission, its tooling direction, and the structure of the C++ ecosystem.",
    href: links.main,
  },
  {
    label: "C++ foundation",
    title: "vixcpp.com",
    text: "The public home of Vix.cpp, the modern C++ runtime and developer toolkit used as the technical foundation of the ecosystem.",
    href: links.vix,
  },
  {
    label: "Documentation",
    title: "docs.vixcpp.com",
    text: "The main documentation for learning Vix.cpp, its CLI, runtime modules, project workflow, and application model.",
    href: links.vixDocs,
  },
  {
    label: "Packages",
    title: "registry.vixcpp.com",
    text: "The registry for Vix packages, reusable modules, dependency metadata, and ecosystem distribution.",
    href: links.vixRegistry,
  },
  {
    label: "Engineering",
    title: "blog.vixcpp.com",
    text: "Engineering notes, release updates, benchmarks, technical decisions, and development progress around Vix.cpp.",
    href: links.vixBlog,
  },
  {
    label: "Open source",
    title: "github.com/softadastra",
    text: "The Softadastra GitHub organization for maintained tooling, technical layers, experiments, and public ecosystem work.",
    href: links.github,
  },
];
</script>

<style scoped>
.company-page {
  position: relative;
  overflow: hidden;
  padding-bottom: 96px;
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  );
}

.company-page::before,
.company-page::after {
  display: none;
}

.company-page__hero,
.company-page__model,
.company-page__sections {
  position: relative;
  z-index: 1;
}

.company-page__hero {
  padding: 96px 0 54px;
  text-align: center;
}

.company-page__eyebrow {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  min-height: 28px;
  padding: 0 11px;
  border: 1px solid rgba(213, 122, 42, 0.26);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.company-page__hero h1 {
  max-width: 960px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3rem, 6.7vw, 6rem);
  font-weight: 850;
  line-height: 0.94;
  letter-spacing: -0.08em;
}

.company-page__hero p {
  max-width: 760px;
  margin: 26px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1rem, 2vw, 1.18rem);
  line-height: 1.7;
}

.company-page__hero-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
}

.company-page__hero-meta span {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.028);
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
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(420px, 1.12fr);
  gap: clamp(36px, 5vw, 72px);
  align-items: center;
  padding: clamp(28px, 4vw, 42px);
  border: 1px solid var(--sd-border);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.028);
}

.company-page__model-copy h2 {
  max-width: 720px;
  margin: 18px 0 0;
  color: var(--sd-text);
  font-size: clamp(2.1rem, 4.6vw, 3.8rem);
  font-weight: 830;
  line-height: 1.02;
  letter-spacing: -0.065em;
}

.company-page__model-copy p {
  max-width: 660px;
  margin: 18px 0 0;
  color: var(--sd-text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.company-page__flow {
  display: grid;
  gap: 18px;
}

.company-page__flow-main {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border: 1px solid rgba(213, 122, 42, 0.24);
  border-radius: 20px;
  background: rgba(213, 122, 42, 0.07);
}

.company-page__flow-logo {
  display: flex;
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
}

.company-page__flow-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.company-page__flow-main strong {
  display: block;
  color: var(--sd-text);
  font-size: 1.05rem;
  font-weight: 820;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.company-page__flow-main span:not(.company-page__flow-logo) {
  display: block;
  margin-top: 4px;
  color: var(--sd-text-muted);
  font-size: 0.9rem;
}

.company-page__flow-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.company-page__flow-item {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  min-height: 64px;
  padding: 12px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.026);
}

.company-page__flow-item-logo {
  display: flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  overflow: visible;
  border-radius: 999px;
}

.company-page__flow-item-logo img {
  display: block;
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.company-page__flow-item strong {
  display: block;
  color: var(--sd-text);
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.1;
}

.company-page__flow-item small {
  display: block;
  margin-top: 3px;
  color: var(--sd-text-muted);
  font-size: 0.78rem;
  line-height: 1.25;
}

.company-page__sections {
  padding-top: 88px;
}

.company-page__section-top {
  max-width: 780px;
}

.company-page__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 34px;
}

.company-page__section-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.028);
  transition:
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.company-page__section-card:hover {
  border-color: rgba(213, 122, 42, 0.28);
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-2px);
}

.company-page__section-label {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 14px;
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.company-page__section-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 20px;
  font-weight: 830;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.company-page__section-card p {
  flex: 1;
  margin: 10px 0 0;
  color: var(--sd-text-muted);
  font-size: 13.5px;
  line-height: 1.56;
}

.company-page__section-link {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  color: var(--sd-orange-strong);
  font-size: 13px;
  font-weight: 760;
  text-decoration: none;
  transition:
    gap var(--sd-transition-fast),
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
    padding: 24px;
    border-radius: 22px;
  }

  .company-page__flow-grid,
  .company-page__grid {
    grid-template-columns: 1fr;
  }

  .company-page__sections {
    padding-top: 72px;
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
    padding: 20px;
  }

  .company-page__section-card {
    padding: 16px;
  }
}
</style>
