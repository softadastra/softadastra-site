<template>
  <section class="company-section sd-section">
    <div class="sd-section__inner company-section__inner">
      <div class="company-section__copy sd-reveal">
        <p class="company-section__eyebrow">The company</p>
        <h2>The company behind the tooling</h2>
        <p>
          Softadastra is a developer tooling company focused on modern C++
          applications. It develops open foundations for local development and
          runtime workflows, together with team tools for packages, project
          metadata, diagnostics, and collaboration.
        </p>
        <p>
          The company is building one coherent path from creating a native
          application to organizing its development across a team.
        </p>
        <a class="company-section__link" :href="links.company">Learn about Softadastra</a>
      </div>

      <div class="company-section__principles sd-reveal sd-reveal-d2">
        <article v-for="principle in principles" :key="principle.title">
          <span>{{ principle.number }}</span>
          <h3>{{ principle.title }}</h3>
          <p>{{ principle.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

const principles = [
  {
    number: "01",
    title: "Open foundations",
    text: "The core development workflow remains inspectable and usable locally.",
  },
  {
    number: "02",
    title: "Native applications",
    text: "The platform is designed around compiled applications and native performance.",
  },
  {
    number: "03",
    title: "Coherent tooling",
    text: "Each product solves one layer of the same development workflow.",
  },
];
</script>

<style scoped>
.company-section {
  background: var(--sd-bg-soft);
  border-block: 1px solid var(--sd-border);
}

.company-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.8fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.company-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.company-section h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.company-section__copy p:not(.company-section__eyebrow) {
  max-width: 690px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.company-section__link {
  display: inline-flex;
  margin-top: 24px;
  color: var(--sd-orange-dark);
  font-size: 13.5px;
  font-weight: 720;
  text-decoration: none;
}

.company-section__link:hover {
  color: var(--sd-orange);
}

.company-section__principles {
  display: grid;
  gap: 10px;
}

.company-section__principles article {
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.company-section__principles span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
}

.company-section__principles h3 {
  margin: 10px 0 6px;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 730;
  letter-spacing: -0.015em;
}

.company-section__principles p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  line-height: 1.55;
}

@media (max-width: 860px) {
  .company-section__inner {
    grid-template-columns: 1fr;
  }
}
</style>
