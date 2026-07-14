<template>
  <section class="additional-projects sd-section">
    <div class="sd-section__inner">
      <div class="additional-projects__header sd-reveal">
        <p class="additional-projects__eyebrow">Additional projects</p>
        <h2>More from Softadastra</h2>
        <p>
          Softadastra also develops specialized runtimes, frameworks,
          reliability tools, and validation applications across C++, JavaScript,
          and TypeScript.
        </p>
      </div>

      <div class="additional-projects__grid sd-reveal sd-reveal-d2">
        <article v-for="project in projects" :key="project.id">
          <div class="additional-projects__meta">
            <span>{{ project.layer }}</span>
            <span v-if="project.status">{{ project.status }}</span>
          </div>
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.href">Open {{ project.name }}</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stacks } from "../../data/stacks";

const secondaryProjectIds = ["cnerium", "kordex", "pico"];

const projects = stacks
  .filter((project) => secondaryProjectIds.includes(project.id))
  .map((project) => ({
    id: project.id,
    name: project.name,
    layer: project.layer,
    description: project.tagline,
    status: project.status,
    href: project.href,
  }));
</script>

<style scoped>
.additional-projects {
  background: var(--sd-bg-soft);
  border-block: 1px solid var(--sd-border);
}

.additional-projects__header {
  max-width: 760px;
  margin-bottom: 30px;
}

.additional-projects__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.additional-projects h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.additional-projects__header p:not(.additional-projects__eyebrow) {
  max-width: 680px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.additional-projects__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.additional-projects__grid article {
  padding: 16px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
  transition: transform var(--sd-transition-fast), border-color var(--sd-transition-fast), box-shadow var(--sd-transition-fast);
}

.additional-projects__grid article:hover {
  border-color: var(--sd-border-strong);
  box-shadow: 0 6px 18px rgba(18, 24, 33, 0.08);
  transform: translateY(-2px);
}

.additional-projects__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.additional-projects__meta span {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-soft);
  color: var(--sd-text-muted);
  font-size: 11px;
  font-weight: 650;
}

.additional-projects__grid h3 {
  margin: 0 0 8px;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 730;
  letter-spacing: -0.015em;
}

.additional-projects__grid p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  line-height: 1.55;
}

.additional-projects__grid a {
  display: inline-flex;
  margin-top: 16px;
  color: var(--sd-orange-dark);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.additional-projects__grid a:hover {
  color: var(--sd-orange);
}

@media (max-width: 1100px) {
  .additional-projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .additional-projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
