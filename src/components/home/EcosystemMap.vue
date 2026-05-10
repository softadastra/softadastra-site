<template>
  <section class="ecosystem-map sd-section">
    <div class="sd-section__inner">
      <div class="ecosystem-map__grid">
        <div class="ecosystem-map__copy sd-reveal">
          <SectionHeading
            eyebrow="Ecosystem"
            title="One company. Six layers. One architecture."
            text="Every layer builds on the one below. From the C++ foundation to cloud operations, the stack is designed to be adopted incrementally."
          />
        </div>

        <div
          class="ecosystem-map__system sd-reveal sd-reveal-d2"
          aria-label="Softadastra ecosystem layers"
        >
          <RouterLink
            v-for="(layer, index) in ecosystemLayers"
            :key="layer.id"
            :to="`/stacks/${layer.stackId}`"
            class="ecosystem-map__row"
          >
            <span
              class="ecosystem-map__plate"
              :class="`ecosystem-map__plate--${index + 1}`"
              aria-hidden="true"
            />

            <span class="ecosystem-map__content">
              <span
                class="ecosystem-map__icon"
                aria-hidden="true"
              >
                <svg
                  v-if="layer.stackId === 'vix'"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>

                <svg
                  v-else-if="layer.stackId === 'softadastra'"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>

                <svg
                  v-else-if="layer.stackId === 'kordex'"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                  />
                  <path d="M8 16V8l8 4-8 4z" />
                </svg>

                <svg
                  v-else-if="layer.stackId === 'cnerium'"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M4 6h16M4 10h16M4 14h10M4 18h12" />
                </svg>

                <svg
                  v-else
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
                  <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
                </svg>
              </span>

              <span class="ecosystem-map__body">
                <strong>
                  {{ layer.name }}
                </strong>

                <small>
                  {{ layer.tagline }}
                </small>
              </span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ecosystemLayers } from "../../data/stacks";

import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>
.ecosystem-map__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(520px, 560px);
  gap: clamp(56px, 7vw, 118px);
  align-items: center;
}

.ecosystem-map__copy {
  min-width: 0;
}

.ecosystem-map__system {
  display: grid;
  width: 100%;
  max-width: 560px;
  grid-template-columns: 230px 280px;
  grid-template-rows: repeat(6, 86px);
  column-gap: 34px;
  row-gap: 10px;
  align-items: center;
  justify-content: end;
  justify-self: end;
}
.ecosystem-map__row {
  display: contents;
  color: inherit;
  text-decoration: none;
}

.ecosystem-map__plate--6 {
  grid-column: 1;
  grid-row: 6;
  background: linear-gradient(
    135deg,
    var(--sd-orange-strong),
    var(--sd-orange),
    var(--sd-orange-dark)
  );
}
.ecosystem-map__plate {
  position: relative;
  display: block;
  width: 150px;
  height: 150px;
  align-self: center;
  justify-self: center;
  border-radius: 8px;
  box-shadow:
    0 16px 22px rgba(0, 0, 0, 0.24),
    inset 0 -13px 0 rgba(0, 0, 0, 0.16);
  transform:
    rotateX(62deg)
    rotateZ(45deg)
    scaleY(0.52);
  transform-origin: center;
  transition:
    filter var(--sd-transition),
    transform var(--sd-transition);
}

.ecosystem-map__plate::after {
  position: absolute;
  right: 0;
  bottom: -10px;
  left: 0;
  height: 10px;
  border-radius: 0 0 8px 8px;
  background: rgba(0, 0, 0, 0.16);
  content: "";
}

.ecosystem-map__plate--1 {
  grid-column: 1;
  grid-row: 1;
  background: #b8c4ff;
}

.ecosystem-map__plate--2 {
  grid-column: 1;
  grid-row: 2;
  background: #9fb0f7;
}

.ecosystem-map__plate--3 {
  grid-column: 1;
  grid-row: 3;
  background: #7f91df;
}

.ecosystem-map__plate--4 {
  grid-column: 1;
  grid-row: 4;
  background: #6274c8;
}

.ecosystem-map__plate--5 {
  grid-column: 1;
  grid-row: 5;
  background: #4252ad;
}
.ecosystem-map__plate--6 {
  grid-column: 1;
  grid-row: 6;
  background: linear-gradient(
    135deg,
    var(--sd-orange-strong),
    var(--sd-orange),
    var(--sd-orange-dark)
  );
}
.ecosystem-map__content {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  gap: 14px;
  align-items: flex-start;
  align-self: center;
  padding: 10px 0;
}

.ecosystem-map__row:nth-child(1) .ecosystem-map__content {
  grid-column: 2;
  grid-row: 1;
}

.ecosystem-map__row:nth-child(2) .ecosystem-map__content {
  grid-column: 2;
  grid-row: 2;
}

.ecosystem-map__row:nth-child(3) .ecosystem-map__content {
  grid-column: 2;
  grid-row: 3;
}

.ecosystem-map__row:nth-child(4) .ecosystem-map__content {
  grid-column: 2;
  grid-row: 4;
}

.ecosystem-map__row:nth-child(5) .ecosystem-map__content {
  grid-column: 2;
  grid-row: 5;
}

.ecosystem-map__icon {
  display: inline-flex;
  width: 22px;
  height: 22px;
  margin-top: 2px;
  color: var(--sd-text-muted);
  transition: color var(--sd-transition-fast);
}

.ecosystem-map__icon svg {
  width: 22px;
  height: 22px;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ecosystem-map__body {
  display: block;
}

.ecosystem-map__layer {
  display: block;
  margin-bottom: 4px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.ecosystem-map__body strong {
  display: block;
  margin-bottom: 5px;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 720;
  line-height: 1.2;
  transition: color var(--sd-transition-fast);
}

.ecosystem-map__body small {
  display: block;
  max-width: 250px;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.42;
}

.ecosystem-map__row:hover .ecosystem-map__plate {
  filter: brightness(1.08);
  transform:
    rotateX(62deg)
    rotateZ(45deg)
    scaleY(0.52)
    translateY(-3px);
}

.ecosystem-map__row:hover .ecosystem-map__body strong,
.ecosystem-map__row:hover .ecosystem-map__icon {
  color: var(--sd-accent);
}
.ecosystem-map__layer {
  display: block;
  margin-bottom: 6px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.ecosystem-map__body strong {
  display: block;
  margin-bottom: 7px;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 720;
  line-height: 1.2;
  transition: color var(--sd-transition-fast);
}

.ecosystem-map__body small {
  display: block;
  max-width: 270px;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.48;
}
@media (max-width: 1100px) {
  .ecosystem-map__grid {
    grid-template-columns: 1fr;
  }

  .ecosystem-map__system {
    justify-self: start;
  }
}

@media (max-width: 720px) {
  .ecosystem-map__system {
    grid-template-columns: 120px minmax(0, 1fr);
    grid-template-rows: repeat(6, 96px);
    column-gap: 20px;
    row-gap: 14px;
    justify-self: start;
  }

  .ecosystem-map__plate {
    width: 96px;
    height: 96px;
  }

  .ecosystem-map__content {
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 12px;
    padding: 8px 0;
  }

  .ecosystem-map__body strong {
    font-size: 15.5px;
  }

  .ecosystem-map__body small {
    max-width: 230px;
    font-size: 13px;
    line-height: 1.45;
  }
}
@media (max-width: 420px) {
  .ecosystem-map__system {
    grid-template-columns: 92px minmax(0, 1fr);
   grid-template-rows: repeat(6, 104px);
    column-gap: 14px;
  }

  .ecosystem-map__plate {
    width: 76px;
    height: 76px;
  }

  .ecosystem-map__content {
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 10px;
  }

  .ecosystem-map__icon {
    width: 20px;
    height: 20px;
  }

  .ecosystem-map__icon svg {
    width: 20px;
    height: 20px;
  }
}
.ecosystem-map__plate--1 {
  grid-column: 1;
  grid-row: 1;
  background: linear-gradient(
    135deg,
    var(--sd-blue),
    #6f86e8
  );
}

.ecosystem-map__plate--2 {
  grid-column: 1;
  grid-row: 2;
  background: linear-gradient(
    135deg,
    var(--sd-orange-strong),
    var(--sd-orange)
  );
}

.ecosystem-map__plate--3 {
  grid-column: 1;
  grid-row: 3;
  background: linear-gradient(
    135deg,
    var(--sd-yellow),
    #c98b22
  );
}

.ecosystem-map__plate--4 {
  grid-column: 1;
  grid-row: 4;
  background: linear-gradient(
    135deg,
    var(--sd-pink),
    #b44f86
  );
}

.ecosystem-map__plate--5 {
  grid-column: 1;
  grid-row: 5;
  background: linear-gradient(
    135deg,
    var(--sd-cyan),
    #2996a5
  );
}

.ecosystem-map__plate--6 {
  grid-column: 1;
  grid-row: 6;
  background: linear-gradient(
    135deg,
    var(--sd-orange-strong),
    var(--sd-orange),
    var(--sd-orange-dark)
  );
}
</style>
