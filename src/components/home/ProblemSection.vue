<template>
  <section class="problem-section sd-section">
    <div class="sd-section__inner problem-section__inner">
      <div class="problem-section__copy sd-reveal">
        <p class="problem-section__eyebrow">The problem</p>
        <h2>C++ development is still fragmented.</h2>
        <p>
          Modern C++ teams often assemble build tools, application libraries,
          package workflows, diagnostics, runtime infrastructure, and team
          operations from unrelated systems.
        </p>
        <p>
          Softadastra is building these layers as one coherent toolchain.
        </p>
      </div>

      <div class="problem-section__model sd-reveal sd-reveal-d2" aria-label="Fragmented C++ workflow model">
        <span>Build tools</span>
        <span>Runtime libraries</span>
        <span>Packages</span>
        <span>Diagnostics</span>
        <span>Team operations</span>
        <strong>One C++ platform path</strong>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.8fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.problem-section__eyebrow {
  margin: 0 0 12px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.problem-section h2 {
  max-width: 680px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.problem-section p:not(.problem-section__eyebrow) {
  max-width: 640px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.problem-section__model {
  display: grid;
  gap: 8px;
  padding: 14px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.problem-section__model span,
.problem-section__model strong {
  display: flex;
  min-height: 38px;
  align-items: center;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
  font-size: 13px;
  font-weight: 650;
}

.problem-section__model strong {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

@media (max-width: 860px) {
  .problem-section__inner {
    grid-template-columns: 1fr;
  }
}
</style>
