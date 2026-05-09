<template>
  <section class="hero-section">
    <div class="hero-section__inner sd-container">
      <div class="hero-section__content">
        <BaseBadge>
          Softadastra Company
        </BaseBadge>

        <h1>
          Reliable local-first infrastructure for real-world applications.
        </h1>

        <p>
          Softadastra maintains an open stack of runtimes, sync engines,
          developer tools, and cloud products built for software that must keep
          working when the network fails.
        </p>

        <div class="hero-section__actions">
          <BaseButton href="https://docs.softadastra.com">
            Explore docs
          </BaseButton>

          <BaseButton
            href="https://business.softadastra.com"
            variant="secondary"
          >
            Softadastra Cloud
          </BaseButton>
        </div>
      </div>

      <div class="hero-section__panel">
        <div class="hero-section__panel-header">
          <span />
          <span />
          <span />
        </div>

        <div class="hero-section__stack">
          <div class="hero-section__stack-item hero-section__stack-item--main">
            <strong>Softadastra</strong>
            <span>Company hub</span>
          </div>

          <div class="hero-section__stack-grid">
            <div class="hero-section__stack-item">
              <strong>Vix</strong>
              <span>C++ runtime</span>
            </div>

            <div class="hero-section__stack-item">
              <strong>Softadastra</strong>
              <span>WAL + sync</span>
            </div>

            <div class="hero-section__stack-item">
              <strong>Kordex</strong>
              <span>JS runtime</span>
            </div>

            <div class="hero-section__stack-item">
              <strong>Cnerium</strong>
              <span>Web framework</span>
            </div>
          </div>

          <div class="hero-section__stack-item hero-section__stack-item--cloud">
            <strong>Softadastra Cloud</strong>
            <span>Commercial SaaS on business.softadastra.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from "../ui/BaseBadge.vue";
import BaseButton from "../ui/BaseButton.vue";
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 116px 0 92px;
}

.hero-section::before {
  position: absolute;
  inset: 4rem auto auto 50%;
  width: 42rem;
  height: 42rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.1);
  filter: blur(80px);
  content: "";
  transform: translateX(-10%);
}

.hero-section__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  align-items: center;
  gap: 56px;
}

.hero-section__content {
  max-width: 760px;
}

.hero-section__content h1 {
  margin: 24px 0 0;
  max-width: 780px;
  font-size: clamp(3rem, 7vw, 6.2rem);
  line-height: 0.93;
  letter-spacing: -0.085em;
}

.hero-section__content p {
  margin: 26px 0 0;
  max-width: 650px;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  line-height: 1.7;
}

.hero-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.hero-section__panel {
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.035)),
    rgba(7, 11, 20, 0.76);
  box-shadow: var(--sd-shadow-card);
  overflow: hidden;
}

.hero-section__panel-header {
  display: flex;
  gap: 8px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--sd-border);
}

.hero-section__panel-header span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--sd-surface-strong);
}

.hero-section__stack {
  display: grid;
  gap: 16px;
  padding: 24px;
}

.hero-section__stack-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.hero-section__stack-item {
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: rgba(255, 255, 255, 0.045);
}

.hero-section__stack-item strong {
  display: block;
  color: var(--sd-text);
  font-size: 1rem;
}

.hero-section__stack-item span {
  display: block;
  margin-top: 4px;
  color: var(--sd-text-muted);
  font-size: 0.9rem;
}

.hero-section__stack-item--main {
  border-color: rgba(56, 189, 248, 0.34);
  background: rgba(56, 189, 248, 0.08);
}

.hero-section__stack-item--cloud {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.07);
}

@media (max-width: 980px) {
  .hero-section {
    padding: 82px 0 62px;
  }

  .hero-section__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .hero-section__content h1 {
    letter-spacing: -0.065em;
  }

  .hero-section__panel {
    border-radius: var(--sd-radius-lg);
  }

  .hero-section__stack-grid {
    grid-template-columns: 1fr;
  }
}
</style>
