<template>
  <section class="cta-section sd-section-sm">
    <div class="cta-section__inner sd-container">
      <div class="cta-section__content">
        <BaseBadge>
          Build with the stack
        </BaseBadge>

        <h2>
          Start with the docs, then explore the business layer when you need cloud services.
        </h2>

        <p>
          Softadastra.com stays the ecosystem hub. Documentation, business SaaS,
          builds, and engineering articles live on focused subdomains.
        </p>
      </div>

      <div class="cta-section__actions">
        <BaseButton href="https://docs.softadastra.com">
          Read the docs
        </BaseButton>

        <BaseButton
          href="https://business.softadastra.com"
          variant="secondary"
        >
          Open Business
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from "../ui/BaseBadge.vue";
import BaseButton from "../ui/BaseButton.vue";
</script>

<style scoped>
.cta-section {
  padding-bottom: 110px;
}

.cta-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) auto;
  align-items: center;
  gap: 32px;
  padding: 38px;
  border: 1px solid rgba(56, 189, 248, 0.24);
  border-radius: var(--sd-radius-xl);
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 24rem),
    radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.12), transparent 24rem),
    var(--sd-surface);
  box-shadow: var(--sd-shadow-card);
}

.cta-section__content h2 {
  max-width: 800px;
  margin: 20px 0 0;
  color: var(--sd-text);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.cta-section__content p {
  max-width: 720px;
  margin: 18px 0 0;
  color: var(--sd-text-muted);
  font-size: 1.04rem;
}

.cta-section__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 920px) {
  .cta-section {
    padding-bottom: 72px;
  }

  .cta-section__inner {
    grid-template-columns: 1fr;
  }

  .cta-section__actions {
    justify-content: flex-start;
  }
}

@media (max-width: 620px) {
  .cta-section__inner {
    padding: 24px;
    border-radius: var(--sd-radius-lg);
  }
}
</style>
