<template>
  <section class="engine-section sd-section">
    <div class="sd-section__inner engine-section__inner">
      <div class="engine-section__copy sd-reveal">
        <p class="engine-section__eyebrow">Softadastra Engine</p>
        <h2>Durable local state for applications that must keep working.</h2>
        <p>
          Softadastra Engine is the offline-first runtime layer behind the
          Softadastra C++ tooling work. It focuses on local state, write-ahead
          logging, store, sync, retry, delivery, and transport for applications
          that need useful behavior when networks are unstable.
        </p>

        <div class="engine-section__actions">
          <a :href="links.softadastraEngine">View repository</a>
          <a :href="links.softadastraDocs">Read documentation</a>
        </div>
      </div>

      <div class="engine-section__visual sd-reveal sd-reveal-d2" aria-label="Softadastra Engine local-first model">
        <div class="engine-section__window">
          <div class="engine-section__window-top">
            <span>Runtime model</span>
            <strong>Local-first flow</strong>
          </div>

          <div class="engine-section__flow">
            <article v-for="item in flow" :key="item.title">
              <span>{{ item.step }}</span>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </article>
          </div>
        </div>

        <div class="engine-section__modules">
          <span v-for="module in modules" :key="module">{{ module }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

const flow = [
  {
    step: "01",
    title: "Write locally",
    text: "Accept useful work before depending on a remote service.",
  },
  {
    step: "02",
    title: "Persist operation",
    text: "Record important operations through durable local state and WAL behavior.",
  },
  {
    step: "03",
    title: "Retry and sync",
    text: "Track pending work, retry safely, and synchronize when possible.",
  },
];

const modules = ["wal", "store", "sync", "transport", "metadata"];
</script>

<style scoped>
.engine-section {
  background: var(--sd-bg-soft);
  border-block: 1px solid var(--sd-border);
}

.engine-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 0.82fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.engine-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.engine-section h2 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.engine-section__copy p:not(.engine-section__eyebrow) {
  max-width: 680px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.engine-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.engine-section__actions a {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  padding: 0 13px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.engine-section__actions a:first-child {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
}

.engine-section__actions a:hover {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

.engine-section__actions a:first-child:hover {
  background: var(--sd-orange-dark);
  color: #ffffff;
}

.engine-section__visual {
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.engine-section__window-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 13px 15px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.engine-section__window-top span,
.engine-section__flow article > span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.engine-section__window-top strong {
  color: var(--sd-text);
  font-size: 13px;
}

.engine-section__flow {
  display: grid;
  gap: 10px;
  padding: 14px;
}

.engine-section__flow article {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: 12px;
  padding: 13px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.engine-section__flow article > span {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: var(--sd-radius-sm);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.engine-section__flow strong {
  display: block;
  color: var(--sd-text);
  font-size: 14px;
}

.engine-section__flow p {
  margin: 4px 0 0;
  color: var(--sd-text-soft);
  font-size: 13px;
  line-height: 1.5;
}

.engine-section__modules {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 14px 14px;
}

.engine-section__modules span {
  padding: 6px 9px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 700;
}

@media (max-width: 900px) {
  .engine-section__inner {
    grid-template-columns: 1fr;
  }
}
</style>
