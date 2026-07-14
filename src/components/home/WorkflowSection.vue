<template>
  <section class="workflow-section sd-section">
    <div class="sd-section__inner workflow-section__inner">
      <div class="workflow-section__copy sd-reveal">
        <p class="workflow-section__eyebrow">Workflow</p>
        <h2>From a local C++ application to organized team operations.</h2>
        <p>
          The platform starts with a working native application. Vix.cpp owns the
          local workflow, Rix adds reusable application capabilities, and
          Softadastra Cloud organizes the project metadata around the team.
        </p>

        <ol class="workflow-section__steps">
          <li v-for="step in steps" :key="step.title">
            <span>{{ step.number }}</span>
            <div>
              <strong>{{ step.title }}</strong>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="workflow-section__terminal sd-reveal sd-reveal-d2" aria-label="Verified Vix.cpp workflow commands">
        <div class="workflow-section__terminal-bar">
          <span />
          <strong>local workflow</strong>
        </div>
        <pre><code>$ vix new
$ vix build
$ vix run main.cpp</code></pre>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: "01",
    title: "Create a C++ application",
    text: "Start with a project shape that belongs to the C++ workflow instead of stitching together unrelated tools.",
  },
  {
    number: "02",
    title: "Build and run it with Vix.cpp",
    text: "Use the Vix.cpp command surface for local builds, runs, diagnostics, modules, packages, and application tooling.",
  },
  {
    number: "03",
    title: "Add reusable capabilities from Rix",
    text: "Pull common application capabilities into the Vix.cpp application through a focused userland library layer.",
  },
  {
    number: "04",
    title: "Organize the work with Softadastra Cloud",
    text: "Track packages, versions, lockfiles, build reports, permissions, tokens, and project metadata around the team.",
  },
];
</script>

<style scoped>
.workflow-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.78fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.workflow-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.workflow-section h2 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.workflow-section__copy > p:not(.workflow-section__eyebrow) {
  max-width: 680px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.workflow-section__steps {
  display: grid;
  gap: 10px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
}

.workflow-section__steps li {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.workflow-section__steps span {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-muted);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
}

.workflow-section__steps strong {
  display: block;
  color: var(--sd-text);
  font-size: 14px;
  font-weight: 730;
}

.workflow-section__steps p {
  margin: 5px 0 0;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  line-height: 1.55;
}

.workflow-section__terminal {
  overflow: hidden;
  border: 1px solid #23262d;
  border-radius: var(--sd-radius-lg);
  background: #101216;
  box-shadow: var(--sd-shadow-soft);
}

.workflow-section__terminal-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-bottom: 1px solid #252932;
  background: #151821;
}

.workflow-section__terminal-bar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--sd-orange);
}

.workflow-section__terminal-bar strong {
  color: #d8dce6;
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.workflow-section__terminal pre {
  overflow-x: auto;
  margin: 0;
  padding: 22px;
}

.workflow-section__terminal code {
  color: #f3f5f7;
  font-family: var(--sd-font-mono);
  font-size: 13.5px;
  line-height: 1.8;
  white-space: pre;
}

@media (max-width: 900px) {
  .workflow-section__inner {
    grid-template-columns: 1fr;
  }
}
</style>
