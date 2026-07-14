<template>
  <section class="proof-section sd-section">
    <div class="sd-section__inner">
      <div class="proof-section__header sd-reveal">
        <p class="proof-section__eyebrow">Proof</p>
        <h2>Real work that developers can inspect.</h2>
        <p>
          Softadastra presents its platform through public repositories,
          documentation, released tooling destinations, and working applications
          instead of unverifiable adoption claims.
        </p>
      </div>

      <div class="proof-section__grid sd-reveal sd-reveal-d2">
        <article v-for="item in proofItems" :key="item.title">
          <span>{{ item.label }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <a :href="item.href">{{ item.action }}</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

const proofItems = [
  {
    label: "Source",
    title: "Open repositories",
    text: "The Vix.cpp, Softadastra, SDK, Cnerium, Kordex, and Pico repositories are available for developers to inspect.",
    href: links.github,
    action: "View GitHub",
  },
  {
    label: "Docs",
    title: "Documentation",
    text: "The public documentation covers guides, commands, modules, and examples across the Softadastra and Vix.cpp tooling.",
    href: links.docs,
    action: "Read docs",
  },
  {
    label: "Runtime",
    title: "Working applications",
    text: "Pico is a production-style validation application that exercises Vix.cpp modules, runtime state, and Rix integrations.",
    href: links.pico,
    action: "Open Pico",
  },
  {
    label: "Tooling",
    title: "SDK artifacts",
    text: "The Softadastra SDK repository and documentation provide an inspectable foundation for local development and integration work.",
    href: links.sdkGithub,
    action: "View SDK",
  },
];
</script>

<style scoped>
.proof-section__header {
  max-width: 760px;
  margin-bottom: 30px;
}

.proof-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.proof-section h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.proof-section__header p:not(.proof-section__eyebrow) {
  max-width: 680px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.proof-section__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.proof-section__grid article {
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.proof-section__grid span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.proof-section__grid h3 {
  margin: 12px 0 8px;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 730;
  letter-spacing: -0.015em;
}

.proof-section__grid p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  line-height: 1.55;
}

.proof-section__grid a {
  display: inline-flex;
  margin-top: 16px;
  color: var(--sd-orange-dark);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.proof-section__grid a:hover {
  color: var(--sd-orange);
}

@media (max-width: 980px) {
  .proof-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .proof-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
