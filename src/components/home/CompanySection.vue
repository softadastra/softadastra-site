<template>
  <section class="company-section sd-section">
    <div class="sd-section__inner">
      <div class="company-section__grid">
        <div class="company-section__content sd-reveal">
          <SectionHeading
            eyebrow="Company Model"
            title="Open stack first. Commercial products around it."
            text="Softadastra Company maintains open source infrastructure under the MIT license. Adoption drives the ecosystem. Commercial products provide cloud, observability, and enterprise tooling on top."
          />
        </div>

        <div class="company-section__flow sd-reveal sd-reveal-d2">
          <div class="company-section__step">
            <div class="company-section__num">
              1
            </div>

            <div class="company-section__body">
              <strong>Softadastra Company</strong>
              <span>Maintains the stack</span>
            </div>
          </div>

          <div class="company-section__arrow">
            <svg
              viewBox="0 0 24 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 0v34M7 29l5 5 5-5"
                stroke="rgba(174,185,255,0.25)"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="company-section__step">
            <div class="company-section__num">
              2
            </div>

            <div class="company-section__body">
              <strong>Vix · Softadastra · Kordex · Cnerium · PulseGrid</strong>
              <span>Open source stack</span>
            </div>
          </div>

          <div class="company-section__arrow">
            <svg
              viewBox="0 0 24 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 0v34M7 29l5 5 5-5"
                stroke="rgba(174,185,255,0.25)"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="company-section__step">
            <div class="company-section__num company-section__num--green">
              MIT
            </div>

            <div class="company-section__body">
              <strong>MIT License</strong>
              <span>Free to use, fork, and extend</span>
            </div>
          </div>

          <div class="company-section__arrow">
            <svg
              viewBox="0 0 24 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 0v34M7 29l5 5 5-5"
                stroke="rgba(174,185,255,0.25)"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="company-section__step">
            <div class="company-section__num">
              4
            </div>

            <div class="company-section__body">
              <strong>Developer Adoption</strong>
              <span>Ecosystem growth</span>
            </div>
          </div>

          <div class="company-section__arrow">
            <svg
              viewBox="0 0 24 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 0v34M7 29l5 5 5-5"
                stroke="rgba(174,185,255,0.25)"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="company-section__step company-section__step--end">
            <div class="company-section__num company-section__num--accent">
              5
            </div>

            <div class="company-section__body">
              <strong>Commercial Products &amp; Services</strong>
              <span>Cloud · Docs · Builds · Enterprise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.company-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 1fr);
  gap: 72px;
  align-items: start;
}

.company-section__flow {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.company-section__step {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 15px 22px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-card);
  transition: background var(--sd-transition);
}

.company-section__step:hover {
  background: var(--sd-accent-bg-soft);
}

.company-section__step--end {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
}

.company-section__num {
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--sd-radius-sm);
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 13px;
  font-weight: 750;
}

.company-section__num--green {
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.company-section__num--accent {
  background: var(--sd-accent-bg);
  color: var(--sd-accent);
}

.company-section__body strong {
  display: block;
  color: var(--sd-text);
  font-size: 14.5px;
  font-weight: 680;
  line-height: 1.4;
}

.company-section__body span {
  display: block;
  color: var(--sd-text-muted);
  font-size: 13px;
}

.company-section__arrow {
  display: flex;
  width: 36px;
  height: 32px;
  justify-content: center;
  margin-left: 22px;
}

.company-section__arrow svg {
  width: 18px;
  height: 32px;
}

@media (max-width: 960px) {
  .company-section__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .company-section__step {
    align-items: flex-start;
    padding: 15px 18px;
  }

  .company-section__body strong {
    font-size: 14px;
  }
}

@media (max-width: 420px) {
  .company-section__step {
    flex-direction: column;
  }

  .company-section__arrow {
    margin-left: 18px;
  }
}
</style>
