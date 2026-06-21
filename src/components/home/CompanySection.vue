<template>
  <section class="company-section sd-section">
    <div class="sd-section__inner">
      <div class="company-section__grid">
        <div class="company-section__content sd-reveal">
          <SectionHeading
            eyebrow="Company Model"
            title="Focused C++ tooling. Open foundations. Clear direction."
            text="Softadastra is a C++ tooling company. It builds and maintains a focused technical ecosystem for modern C++ development: runtime foundations, developer workflows, backend reliability, local-first runtime layers, and real validation applications."
          />

          <div class="company-section__metrics">
            <div class="company-section__metric">
              <strong>C++</strong>
              <span>Tooling focus</span>
            </div>

            <div class="company-section__metric">
              <strong>Open</strong>
              <span>Technical foundations</span>
            </div>

            <div class="company-section__metric">
              <strong>Focused</strong>
              <span>No product noise</span>
            </div>
          </div>
        </div>

        <div class="company-section__model sd-reveal sd-reveal-d2">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            :class="[
              'company-section__step',
              step.accent ? 'company-section__step--accent' : '',
            ]"
          >
            <div class="company-section__step-head">
              <span
                :class="[
                  'company-section__num',
                  step.green ? 'company-section__num--green' : '',
                  step.accent ? 'company-section__num--accent' : '',
                ]"
              >
                {{ step.number }}
              </span>

              <div class="company-section__body">
                <strong>{{ step.title }}</strong>
                <span>{{ step.text }}</span>
              </div>
            </div>

            <div
              v-if="index < steps.length - 1"
              class="company-section__connector"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../ui/SectionHeading.vue";

const steps = [
  {
    number: "01",
    title: "Softadastra Company",
    text: "Maintains one clear direction: make modern C++ development simpler, faster, and more accessible.",
  },
  {
    number: "02",
    title: "Vix.cpp foundation",
    text: "The open C++ runtime and developer toolkit that gives the ecosystem its technical base.",
  },
  {
    number: "03",
    title: "Focused tooling layers",
    text: "Softadastra Engine, Cnerium, and Kordex extend the ecosystem with offline-first foundations, backend reliability, and local-first runtime work.",
  },
  {
    number: "04",
    title: "Real validation",
    text: "Pico proves the stack inside a real C++ backend application instead of staying only as isolated examples.",
    green: true,
  },
  {
    number: "05",
    title: "Developer adoption",
    text: "Documentation, registry, engineering notes, and open repositories help developers understand, use, and trust the tooling.",
    accent: true,
  },
];
</script>

<style scoped>
.company-section {
  position: relative;
  overflow: hidden;
}

.company-section::before {
  position: absolute;
  top: 12%;
  right: -220px;
  width: 520px;
  height: 520px;
  border-radius: 999px;
  background: radial-gradient(
    circle at center,
    rgba(110, 231, 183, 0.08),
    transparent 68%
  );
  filter: blur(60px);
  pointer-events: none;
  content: "";
}

.company-section__grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
  gap: 72px;
  align-items: center;
}

.company-section__content {
  min-width: 0;
}

.company-section__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  max-width: 520px;
  margin-top: 36px;
}

.company-section__metric {
  padding: 16px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.038),
      rgba(255, 255, 255, 0.014)
    ),
    #0d1319;
}

.company-section__metric strong {
  display: block;
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 14px;
  font-weight: 820;
  letter-spacing: 0.03em;
}

.company-section__metric span {
  display: block;
  margin-top: 6px;
  color: var(--sd-text-muted);
  font-size: 13px;
  line-height: 1.35;
}

.company-section__model {
  position: relative;
  display: grid;
  gap: 0;
  padding: 26px;
  border: 1px solid var(--sd-border);
  border-radius: 24px;
  background:
    radial-gradient(
      circle at top right,
      rgba(174, 185, 255, 0.1),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.012)
    ),
    #0d1319;
  box-shadow:
    0 26px 90px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
}

.company-section__step {
  position: relative;
}

.company-section__step-head {
  position: relative;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
  padding: 16px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.014)
    ),
    rgba(12, 16, 21, 0.74);
  transition:
    transform 220ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 220ms ease;
}

.company-section__step-head:hover {
  border-color: rgba(174, 185, 255, 0.24);
  background:
    linear-gradient(
      180deg,
      rgba(174, 185, 255, 0.065),
      rgba(255, 255, 255, 0.018)
    ),
    rgba(12, 16, 21, 0.8);
  box-shadow:
    0 18px 56px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-2px);
}

.company-section__step--accent .company-section__step-head {
  border-color: rgba(110, 231, 183, 0.2);
  background:
    linear-gradient(
      180deg,
      rgba(110, 231, 183, 0.075),
      rgba(255, 255, 255, 0.016)
    ),
    rgba(12, 16, 21, 0.78);
}

.company-section__num {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(174, 185, 255, 0.16);
  border-radius: 15px;
  background:
    linear-gradient(
      180deg,
      rgba(174, 185, 255, 0.1),
      rgba(174, 185, 255, 0.035)
    ),
    rgba(255, 255, 255, 0.02);
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 820;
  letter-spacing: 0.03em;
}

.company-section__num--green {
  border-color: rgba(110, 231, 183, 0.18);
  background: var(--sd-green-bg);
  color: var(--sd-green);
}

.company-section__num--accent {
  border-color: rgba(174, 185, 255, 0.2);
  background: var(--sd-accent-bg);
  color: var(--sd-accent);
}

.company-section__body {
  min-width: 0;
}

.company-section__body strong {
  display: block;
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 760;
  line-height: 1.28;
  letter-spacing: -0.015em;
}

.company-section__body span {
  display: block;
  margin-top: 5px;
  color: var(--sd-text-muted);
  font-size: 13.5px;
  line-height: 1.45;
}

.company-section__connector {
  width: 1px;
  height: 26px;
  margin-left: 40px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(174, 185, 255, 0.24),
    transparent
  );
}

@media (max-width: 960px) {
  .company-section__grid {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .company-section__model {
    max-width: 720px;
  }
}

@media (max-width: 640px) {
  .company-section__metrics {
    grid-template-columns: 1fr;
  }

  .company-section__model {
    padding: 20px;
    border-radius: 20px;
  }

  .company-section__step-head {
    grid-template-columns: 44px minmax(0, 1fr);
    padding: 15px;
  }

  .company-section__num {
    width: 44px;
    height: 44px;
  }

  .company-section__connector {
    margin-left: 37px;
  }
}

@media (max-width: 420px) {
  .company-section__step-head {
    grid-template-columns: 1fr;
  }

  .company-section__connector {
    margin-left: 22px;
  }
}

/* ==========================================================================
   Softadastra Engine company section override
   ========================================================================== */

.company-section.sd-section {
  position: relative;
  overflow: hidden;
  background: transparent;
  border-top: 1px solid rgba(255, 244, 224, 0.09);
}

.company-section::before {
  content: "";
  position: absolute;
  top: 8%;
  right: -220px;
  width: 560px;
  height: 560px;
  border-radius: 999px;
  pointer-events: none;

  background: radial-gradient(
    circle at center,
    rgba(213, 122, 42, 0.15),
    rgba(246, 222, 184, 0.06) 34%,
    transparent 68%
  );

  filter: blur(58px);
}

.company-section::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 12% 22%,
      rgba(246, 222, 184, 0.08) 0%,
      transparent 32%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 34%,
      rgba(213, 122, 42, 0.11) 35%,
      rgba(226, 154, 85, 0.08) 42%,
      transparent 51%
    ),
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.014) 0px,
      rgba(255, 255, 255, 0.014) 1px,
      transparent 1px,
      transparent 4px
    );

  opacity: 0.8;
  mix-blend-mode: soft-light;
}

.company-section .sd-section__inner {
  position: relative;
  z-index: 2;
}

/* ==========================================================================
   Company metrics override
   ========================================================================== */

.company-section__metric {
  border-color: rgba(255, 244, 224, 0.1);

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(255, 244, 224, 0.055),
      rgba(255, 244, 224, 0.022)
    );

  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.company-section__metric strong {
  color: rgba(255, 248, 235, 0.95);
}

.company-section__metric span {
  color: rgba(246, 232, 204, 0.56);
}

/* ==========================================================================
   Company model override
   ========================================================================== */

.company-section__model {
  border-color: rgba(255, 244, 224, 0.12);
  border-radius: 24px;

  background:
    radial-gradient(
      circle at top right,
      rgba(213, 122, 42, 0.13),
      transparent 36%
    ),
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08),
      transparent 34%
    ),
    linear-gradient(180deg, rgba(22, 75, 60, 0.72), rgba(11, 43, 34, 0.72));

  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.28),
    0 0 0 1px rgba(255, 244, 224, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.055);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

/* ==========================================================================
   Company steps override
   ========================================================================== */

.company-section__step-head {
  border-color: rgba(255, 244, 224, 0.1);

  background:
    linear-gradient(
      180deg,
      rgba(255, 244, 224, 0.055),
      rgba(255, 244, 224, 0.022)
    ),
    rgba(11, 43, 34, 0.58);

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.company-section__step-head:hover {
  border-color: rgba(226, 154, 85, 0.28);

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(213, 122, 42, 0.09),
      rgba(255, 244, 224, 0.03)
    ),
    rgba(11, 43, 34, 0.64);

  box-shadow:
    0 18px 56px rgba(0, 0, 0, 0.24),
    0 8px 28px rgba(213, 122, 42, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transform: translateY(-2px);
}

.company-section__step--accent .company-section__step-head {
  border-color: rgba(226, 154, 85, 0.22);

  background:
    linear-gradient(
      180deg,
      rgba(213, 122, 42, 0.1),
      rgba(255, 244, 224, 0.025)
    ),
    rgba(11, 43, 34, 0.62);
}

/* ==========================================================================
   Company numbers override
   ========================================================================== */

.company-section__num {
  border-color: rgba(226, 154, 85, 0.24);

  background:
    linear-gradient(180deg, rgba(213, 122, 42, 0.18), rgba(213, 122, 42, 0.08)),
    rgba(255, 244, 224, 0.025);

  color: var(--sd-orange-strong);

  box-shadow:
    0 10px 28px rgba(213, 122, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.company-section__num--green {
  border-color: rgba(47, 212, 156, 0.22);
  background: linear-gradient(
    180deg,
    rgba(47, 212, 156, 0.14),
    rgba(47, 212, 156, 0.06)
  );
  color: var(--sd-green);
}

.company-section__num--accent {
  border-color: rgba(226, 154, 85, 0.28);
  background: linear-gradient(
    180deg,
    rgba(213, 122, 42, 0.2),
    rgba(213, 122, 42, 0.08)
  );
  color: var(--sd-orange-strong);
}

/* ==========================================================================
   Company text and connector override
   ========================================================================== */

.company-section__body strong {
  color: rgba(255, 248, 235, 0.95);
}

.company-section__body span {
  color: rgba(246, 232, 204, 0.58);
}

.company-section__step-head:hover .company-section__body strong {
  color: var(--sd-orange-strong);
}

.company-section__connector {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(226, 154, 85, 0.28),
    rgba(246, 222, 184, 0.12),
    transparent
  );
}

/* ==========================================================================
   Company heading override
   ========================================================================== */

.company-section :deep(.sd-section-heading__eyebrow) {
  color: var(--sd-orange-strong);
}

.company-section :deep(.sd-section-heading__eyebrow::before) {
  background: var(--sd-orange);
  opacity: 0.65;
}

.company-section :deep(.sd-section-heading__title) {
  color: rgba(255, 248, 235, 0.96);
}

.company-section :deep(.sd-section-heading__text) {
  color: rgba(246, 232, 204, 0.62);
}
</style>
