<template>
  <SiteShell>
    <section class="not-found-page">
      <div class="not-found-page__inner sd-container">
        <BaseBadge>
          404
        </BaseBadge>

        <h1>
          Page not found.
        </h1>

        <p>
          The page you are looking for does not exist or has moved. Return to the
          Softadastra ecosystem hub to explore the maintained stacks and products.
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

import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseButton from "../components/ui/BaseButton.vue";
</script>

<style scoped>
.not-found-page {
  display: grid;
  min-height: calc(100vh - var(--sd-header-height));
  place-items: center;
  padding: 96px 0;
}

.not-found-page__inner {
  text-align: center;
}

.not-found-page__inner :deep(.sd-badge) {
  margin-inline: auto;
}

.not-found-page h1 {
  margin: 24px 0 0;
  color: var(--sd-text);
  font-size: clamp(3.4rem, 9vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.085em;
}

.not-found-page p {
  max-width: 620px;
  margin: 26px auto 0;
  color: var(--sd-text-soft);
  font-size: 1.08rem;
  line-height: 1.7;
}

.not-found-page__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

@media (max-width: 620px) {
  .not-found-page {
    padding: 72px 0;
  }

  .not-found-page h1 {
    letter-spacing: -0.06em;
  }
}
</style>
