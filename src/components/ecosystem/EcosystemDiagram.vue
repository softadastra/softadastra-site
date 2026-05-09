<template>
  <section class="ecosystem-diagram">
    <div class="ecosystem-diagram__main">
      <div class="ecosystem-diagram__node ecosystem-diagram__node--company">
        <span>Company</span>
        <strong>Softadastra</strong>
      </div>

      <div class="ecosystem-diagram__connector" />

      <div class="ecosystem-diagram__layers">
        <div
          v-for="stack in stacks"
          :key="stack.id"
          class="ecosystem-diagram__node"
        >
          <span>{{ stack.layer }}</span>
          <strong>{{ stack.name }}</strong>
          <p>{{ stack.label }}</p>
        </div>
      </div>

      <div class="ecosystem-diagram__connector" />

      <div class="ecosystem-diagram__node ecosystem-diagram__node--business">
        <span>Business layer</span>
        <strong>Softadastra Cloud</strong>
        <p>Commercial SaaS, observability, builds, and managed services.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stacks } from "../../data/stacks";
</script>

<style scoped>
.ecosystem-diagram {
  padding: 28px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 26rem),
    radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.1), transparent 26rem),
    var(--sd-surface);
  box-shadow: var(--sd-shadow-card);
}

.ecosystem-diagram__main {
  display: grid;
  gap: 18px;
}

.ecosystem-diagram__node {
  padding: 20px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: rgba(7, 11, 20, 0.48);
  text-align: center;
}

.ecosystem-diagram__node span {
  display: block;
  color: var(--sd-primary);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.ecosystem-diagram__node strong {
  display: block;
  margin-top: 7px;
  color: var(--sd-text);
  font-size: 1.35rem;
  letter-spacing: -0.045em;
}

.ecosystem-diagram__node p {
  max-width: 460px;
  margin: 10px auto 0;
  color: var(--sd-text-muted);
  font-size: 0.92rem;
}

.ecosystem-diagram__node--company {
  border-color: rgba(56, 189, 248, 0.34);
  background: rgba(56, 189, 248, 0.08);
}

.ecosystem-diagram__node--business {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.07);
}

.ecosystem-diagram__layers {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.ecosystem-diagram__layers .ecosystem-diagram__node {
  padding: 18px 14px;
}

.ecosystem-diagram__layers .ecosystem-diagram__node strong {
  font-size: 1rem;
}

.ecosystem-diagram__layers .ecosystem-diagram__node p {
  font-size: 0.82rem;
}

.ecosystem-diagram__connector {
  width: 1px;
  height: 34px;
  margin: 0 auto;
  background: linear-gradient(180deg, transparent, var(--sd-border), transparent);
}

@media (max-width: 1080px) {
  .ecosystem-diagram__layers {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .ecosystem-diagram {
    padding: 18px;
    border-radius: var(--sd-radius-lg);
  }

  .ecosystem-diagram__layers {
    grid-template-columns: 1fr;
  }
}
</style>
