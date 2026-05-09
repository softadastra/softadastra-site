<template>
  <section class="company-section sd-section">
    <div class="sd-section__inner">
      <div class="company-section__grid">
        <div class="company-section__content sd-reveal">
          <SectionHeading
            eyebrow="Company Model"
            title="Open foundations. Commercial products around them."
            text="Softadastra Company maintains the core stack as open source infrastructure. The ecosystem grows through developer adoption, while commercial products provide cloud, observability, builds, and enterprise services around the foundation."
          />

          <div class="company-section__metrics">
            <div class="company-section__metric">
              <strong>MIT</strong>
              <span>Permissive core</span>
            </div>

            <div class="company-section__metric">
              <strong>5</strong>
              <span>Maintained layers</span>
            </div>

            <div class="company-section__metric">
              <strong>Cloud</strong>
              <span>Business layer</span>
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
    text: "Maintains the ecosystem and gives every stack a clear direction.",
  },
  {
    number: "02",
    title: "Open infrastructure stack",
    text: "Vix, Softadastra, Kordex, Cnerium, and PulseGrid evolve as one architecture.",
  },
  {
    number: "MIT",
    title: "MIT License",
    text: "Developers can use, fork, study, and extend the core foundation freely.",
    green: true,
  },
  {
    number: "04",
    title: "Developer adoption",
    text: "The open stack creates trust, usage, community, and ecosystem growth.",
  },
  {
    number: "05",
    title: "Commercial products and services",
    text: "Cloud, builds, observability, enterprise support, and managed services.",
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
    linear-gradient(180deg, rgba(255, 255, 255, 0.038), rgba(255, 255, 255, 0.014)),
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
    radial-gradient(circle at top right, rgba(174, 185, 255, 0.1), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012)),
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
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.014)),
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
    linear-gradient(180deg, rgba(174, 185, 255, 0.065), rgba(255, 255, 255, 0.018)),
    rgba(12, 16, 21, 0.8);
  box-shadow:
    0 18px 56px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transform: translateY(-2px);
}

.company-section__step--accent .company-section__step-head {
  border-color: rgba(110, 231, 183, 0.2);
  background:
    linear-gradient(180deg, rgba(110, 231, 183, 0.075), rgba(255, 255, 255, 0.016)),
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
    linear-gradient(180deg, rgba(174, 185, 255, 0.1), rgba(174, 185, 255, 0.035)),
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
</style>
