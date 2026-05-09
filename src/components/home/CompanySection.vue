<template>
  <section class="company-section sd-section">
    <div class="company-section__inner sd-container">
      <div class="company-section__content">
        <SectionHeading
          eyebrow="Company model"
          title="Open stack first. Commercial products around it."
          text="Softadastra Company maintains the foundations as open source while building commercial services around reliability, cloud infrastructure, builds, observability, and enterprise support."
        />

        <div class="company-section__points">
          <div
            v-for="point in points"
            :key="point.title"
            class="company-section__point"
          >
            <span>{{ point.number }}</span>

            <div>
              <h3>{{ point.title }}</h3>
              <p>{{ point.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="company-section__model">
        <div class="company-section__model-card company-section__model-card--top">
          <span>Softadastra Company</span>
          <strong>Maintains the ecosystem</strong>
        </div>

        <div class="company-section__model-arrow" />

        <div class="company-section__model-grid">
          <div
            v-for="item in modelItems"
            :key="item"
            class="company-section__model-card"
          >
            {{ item }}
          </div>
        </div>

        <div class="company-section__model-arrow" />

        <div class="company-section__model-card company-section__model-card--bottom">
          <span>MIT License</span>
          <strong>Adoption, ecosystem, and commercial services</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../ui/SectionHeading.vue";

const points = [
  {
    number: "01",
    title: "Clear ownership",
    text: "Vix, Softadastra, Kordex, Cnerium, and future projects stay connected under one company and one technical direction.",
  },
  {
    number: "02",
    title: "Low adoption friction",
    text: "The core stack stays open and permissive, so developers and companies can integrate it without heavy legal or platform friction.",
  },
  {
    number: "03",
    title: "Commercial focus",
    text: "Business products are built around the stack without confusing the main website with a single SaaS dashboard.",
  },
];

const modelItems = [
  "Vix",
  "Softadastra",
  "Kordex",
  "Cnerium",
  "PulseGrid",
  "Softadastra Cloud",
];
</script>

<style scoped>
.company-section {
  background:
    radial-gradient(circle at right, rgba(34, 197, 94, 0.1), transparent 30rem),
    rgba(255, 255, 255, 0.018);
}

.company-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  align-items: center;
  gap: 58px;
}

.company-section__points {
  display: grid;
  gap: 18px;
  margin-top: 38px;
}

.company-section__point {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 18px;
  padding: 20px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: rgba(7, 11, 20, 0.42);
}

.company-section__point span {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(56, 189, 248, 0.32);
  border-radius: 14px;
  background: rgba(56, 189, 248, 0.08);
  color: var(--sd-primary);
  font-size: 0.82rem;
  font-weight: 900;
}

.company-section__point h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 1.08rem;
  letter-spacing: -0.025em;
}

.company-section__point p {
  margin: 8px 0 0;
  color: var(--sd-text-muted);
  font-size: 0.95rem;
}

.company-section__model {
  padding: 24px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.035)),
    rgba(7, 11, 20, 0.72);
  box-shadow: var(--sd-shadow-card);
}

.company-section__model-card {
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: rgba(255, 255, 255, 0.045);
  color: var(--sd-text-soft);
  font-weight: 800;
  text-align: center;
}

.company-section__model-card span {
  display: block;
  color: var(--sd-primary);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.company-section__model-card strong {
  display: block;
  margin-top: 8px;
  color: var(--sd-text);
  font-size: 1.24rem;
  line-height: 1.28;
  letter-spacing: -0.035em;
}

.company-section__model-card--top {
  border-color: rgba(56, 189, 248, 0.34);
  background: rgba(56, 189, 248, 0.08);
}

.company-section__model-card--bottom {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.07);
}

.company-section__model-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.company-section__model-arrow {
  width: 1px;
  height: 34px;
  margin: 12px auto;
  background: linear-gradient(180deg, transparent, var(--sd-border), transparent);
}

@media (max-width: 980px) {
  .company-section__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .company-section__point {
    grid-template-columns: 1fr;
  }

  .company-section__model {
    padding: 18px;
  }

  .company-section__model-grid {
    grid-template-columns: 1fr;
  }
}
</style>
