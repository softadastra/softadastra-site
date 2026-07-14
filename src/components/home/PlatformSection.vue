<template>
  <section id="platform" class="platform-section sd-section">
    <div class="sd-section__inner">
      <div class="platform-section__header sd-reveal">
        <p class="platform-section__eyebrow">The platform</p>
        <h2>One platform path for modern C++ applications.</h2>
        <p>
          Vix.cpp, Rix, and Softadastra Cloud form the primary Softadastra
          platform. Each product owns one layer of the same development
          workflow.
        </p>
      </div>

      <div class="platform-section__stack sd-reveal sd-reveal-d2" aria-label="Softadastra platform layers">
        <article
          v-for="layer in layers"
          :key="layer.name"
          class="platform-section__layer"
        >
          <div class="platform-section__label">{{ layer.label }}</div>
          <div class="platform-section__body">
            <span>{{ layer.step }}</span>
            <h3>{{ layer.name }}</h3>
            <p>{{ layer.description }}</p>
            <a :href="layer.href">{{ layer.action }}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

const layers = [
  {
    step: "01",
    label: "Build and run",
    name: "Vix.cpp",
    description:
      "A runtime and CLI for project creation, builds, development workflows, modules, packages, servers, jobs, WebSockets, diagnostics, and native application tooling.",
    href: links.vix,
    action: "Explore Vix.cpp",
  },
  {
    step: "02",
    label: "Extend",
    name: "Rix",
    description:
      "A userland library layer with reusable packages and simple APIs for applications built with Vix.cpp.",
    href: links.rix,
    action: "Explore Rix",
  },
  {
    step: "03",
    label: "Organize with the team",
    name: "Softadastra Cloud",
    description:
      "Workspaces, packages, versions, lockfiles, build reports, permissions, tokens, and project metadata while keeping the build workflow local.",
    href: links.cloud,
    action: "Explore Cloud",
  },
];
</script>

<style scoped>
.platform-section {
  background: var(--sd-bg-soft);
  border-block: 1px solid var(--sd-border);
}

.platform-section__header {
  max-width: 760px;
  margin-bottom: 34px;
}

.platform-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.platform-section h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.platform-section__header > p:not(.platform-section__eyebrow) {
  max-width: 680px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.platform-section__stack {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.platform-section__layer {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 0;
  border-right: 1px solid var(--sd-border);
}

.platform-section__layer:last-child {
  border-right: 0;
}

.platform-section__layer::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -7px;
  z-index: 1;
  width: 12px;
  height: 12px;
  border-top: 1px solid var(--sd-border-strong);
  border-right: 1px solid var(--sd-border-strong);
  background: var(--sd-bg-raised);
  transform: translateY(-50%) rotate(45deg);
}

.platform-section__layer:last-child::after {
  content: none;
}

.platform-section__label {
  padding: 12px 16px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-muted);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 740;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.platform-section__body {
  padding: 22px;
}

.platform-section__body span {
  display: inline-grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--sd-border-highlight);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
}

.platform-section h3 {
  margin: 16px 0 8px;
  color: var(--sd-text);
  font-size: 22px;
  font-weight: 740;
  letter-spacing: -0.02em;
}

.platform-section__body p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 14px;
  line-height: 1.62;
}

.platform-section__body a {
  display: inline-flex;
  margin-top: 18px;
  color: var(--sd-orange-dark);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.platform-section__body a:hover {
  color: var(--sd-orange);
}

@media (max-width: 860px) {
  .platform-section__stack {
    grid-template-columns: 1fr;
  }

  .platform-section__layer {
    border-right: 0;
    border-bottom: 1px solid var(--sd-border);
  }

  .platform-section__layer:last-child {
    border-bottom: 0;
  }

  .platform-section__layer::after {
    top: auto;
    right: auto;
    bottom: -7px;
    left: 24px;
    transform: rotate(135deg);
  }
}
</style>
