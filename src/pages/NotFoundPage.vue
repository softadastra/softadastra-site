<template>
  <SiteShell>
    <section class="not-found-page">
      <div class="not-found-page__inner sd-container">
        <div class="not-found-page__code">
          404
        </div>

        <h1>
          Page not found.
        </h1>

        <p>
          This page does not exist or has moved. Go back to the Softadastra hub
          to explore the ecosystem, products, documentation, and maintained
          projects.
        </p>

        <div class="not-found-page__actions">
          <BaseButton to="/">
            Back home
          </BaseButton>

          <BaseButton
            to="/ecosystem"
            variant="secondary"
          >
            View ecosystem
          </BaseButton>
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import SiteShell from "../components/layout/SiteShell.vue";

import BaseButton from "../components/ui/BaseButton.vue";
</script>

<style scoped>
.not-found-page {
  display: grid;
  min-height: calc(100vh - var(--sd-header-height));
  place-items: center;
  padding: 96px 0;
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  );
}

.not-found-page__inner {
  display: grid;
  justify-items: center;
  text-align: center;
}

.not-found-page__code {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid rgba(213, 122, 42, 0.28);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0.12em;
}

.not-found-page h1 {
  max-width: 760px;
  margin: 24px 0 0;
  color: var(--sd-text);
  font-size: clamp(3.2rem, 8vw, 6.4rem);
  font-weight: 850;
  line-height: 0.92;
  letter-spacing: -0.08em;
}

.not-found-page p {
  max-width: 620px;
  margin: 24px auto 0;
  color: var(--sd-text-soft);
  font-size: 1.05rem;
  line-height: 1.7;
}

.not-found-page__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

@media (max-width: 620px) {
  .not-found-page {
    padding: 72px 0;
  }

  .not-found-page h1 {
    letter-spacing: -0.06em;
  }

  .not-found-page p {
    font-size: 1rem;
  }
}
</style>
