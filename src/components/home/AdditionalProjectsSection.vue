<template>
  <section ref="root" class="ap sd-section">
    <div class="sd-section__inner ap__inner">
      <header class="ap__header" data-reveal>
        <p class="ap__eyebrow">
          <span aria-hidden="true" />
          Additional projects
        </p>

        <h2>Specialized projects built around the platform.</h2>

        <p>
          Softadastra also develops runtimes, frameworks, reliability tools, and
          validation applications for workloads that need more focused
          foundations.
        </p>
      </header>

      <div class="ap__directory">
        <!-- Runtime and framework projects -->
        <section class="ap__group" data-reveal>
          <h3>Build specialized systems</h3>

          <div class="ap__list">
            <a
              v-for="(project, index) in foundationProjects"
              :key="project.id"
              :href="project.href"
              class="ap-project"
              :class="`ap-project--${project.id}`"
              :style="{ '--delay': `${index * 0.12}s` }"
            >
              <span class="ap-project__visual" aria-hidden="true">
                <span class="ap-project__visual-grid" />

                <component :is="project.icon" />

                <span class="ap-project__visual-scan" />
              </span>

              <div class="ap-project__content">
                <div class="ap-project__title">
                  <strong>{{ project.name }}</strong>

                  <span v-if="project.status" class="ap-project__status">
                    <i aria-hidden="true" />
                    {{ project.status }}
                  </span>
                </div>

                <p>{{ project.description }}</p>

                <div class="ap-project__tags">
                  <span v-for="tag in project.tags" :key="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <svg
                class="ap-project__arrow"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>

        <!-- Validation application -->
        <section class="ap__group" data-reveal>
          <h3>Validate real application workflows</h3>

          <div class="ap__list">
            <a
              v-for="(project, index) in validationProjects"
              :key="project.id"
              :href="project.href"
              class="ap-project ap-project--featured"
              :class="`ap-project--${project.id}`"
              :style="{ '--delay': `${0.16 + index * 0.12}s` }"
            >
              <span class="ap-project__visual" aria-hidden="true">
                <span class="ap-project__visual-grid" />

                <component :is="project.icon" />

                <span class="ap-project__visual-scan" />
              </span>

              <div class="ap-project__content">
                <div class="ap-project__title">
                  <strong>{{ project.name }}</strong>

                  <span v-if="project.status" class="ap-project__status">
                    <i aria-hidden="true" />
                    {{ project.status }}
                  </span>
                </div>

                <p>{{ project.description }}</p>

                <div class="ap-project__tags">
                  <span v-for="tag in project.tags" :key="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <svg
                class="ap-project__arrow"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

              <div v-if="project.id === 'pico'" class="ap-project__validation">
                <article>
                  <span>Runtime</span>
                  <strong>Vix.cpp</strong>
                </article>

                <article>
                  <span>Libraries</span>
                  <strong>Rix</strong>
                </article>

                <article>
                  <span>Purpose</span>
                  <strong>Platform validation</strong>
                </article>
              </div>
            </a>

            <div class="ap__ecosystem-note">
              <span class="ap__ecosystem-note-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="19" cy="6" r="2" />
                  <circle cx="19" cy="18" r="2" />
                  <path d="m7 11 10-4" />
                  <path d="m7 13 10 4" />
                </svg>
              </span>

              <div>
                <strong>Built as one ecosystem</strong>
                <p>
                  These projects explore specialized use cases while remaining
                  connected to the same native tooling and package workflow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, h, ref, onMounted, onBeforeUnmount } from "vue";

import { stacks } from "../../data/stacks";

const root = ref(null);
let observer = null;

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.8",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true",
};

const IconCnerium = () =>
  h("svg", svgProps, [
    h("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "3",
    }),
    h("rect", {
      x: "9",
      y: "9",
      width: "6",
      height: "6",
      rx: "1",
    }),
    h("path", {
      d: "M9 1v3M15 1v3M9 20v3M15 20v3",
    }),
    h("path", {
      d: "M1 9h3M1 15h3M20 9h3M20 15h3",
    }),
  ]);

const IconKordex = () =>
  h("svg", svgProps, [
    h("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "16",
      rx: "2",
    }),
    h("path", { d: "M3 9h18" }),
    h("path", { d: "m9 13-2 2 2 2" }),
    h("path", { d: "m15 13 2 2-2 2" }),
  ]);

const IconPico = () =>
  h("svg", svgProps, [
    h("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "16",
      rx: "2",
    }),
    h("path", { d: "M3 9h18" }),
    h("path", { d: "M7 13h4M7 16h7" }),
    h("circle", {
      cx: "17",
      cy: "15",
      r: "2",
    }),
  ]);

const projectConfig = {
  cnerium: {
    icon: IconCnerium,
    group: "foundation",
    tags: ["Runtime", "C++", "Specialized systems"],
  },

  kordex: {
    icon: IconKordex,
    group: "foundation",
    tags: ["Framework", "JavaScript", "TypeScript"],
  },

  pico: {
    icon: IconPico,
    group: "validation",
    tags: ["Application", "Vix.cpp", "Rix"],
  },
};

const secondaryProjectIds = ["cnerium", "kordex", "pico"];

const projects = stacks
  .filter((project) => secondaryProjectIds.includes(project.id))
  .map((project) => {
    const config = projectConfig[project.id];

    return {
      id: project.id,
      name: project.name,
      layer: project.layer,
      description: project.tagline,
      status: project.status,
      href: project.href,
      icon: config.icon,
      group: config.group,
      tags: config.tags,
    };
  });

const foundationProjects = computed(() =>
  projects.filter((project) => project.group === "foundation"),
);

const validationProjects = computed(() =>
  projects.filter((project) => project.group === "validation"),
);

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const targets = root.value?.querySelectorAll("[data-reveal]") ?? [];

  if (reduce) {
    targets.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -7% 0px",
    },
  );

  targets.forEach((element) => observer.observe(element));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
.ap {
  position: relative;
  overflow: hidden;
  border-block: 1px solid var(--sd-border);
  background: #ffffff;
}

.ap::before {
  position: absolute;
  top: -230px;
  left: 50%;
  width: 760px;
  height: 430px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(216, 111, 31, 0.065),
    transparent 69%
  );
  content: "";
  pointer-events: none;
  transform: translateX(-50%);
}

.ap__inner {
  position: relative;
  z-index: 1;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.75s var(--sd-ease-out),
    transform 0.75s var(--sd-ease-out);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* Header */

.ap__header {
  max-width: 800px;
  margin: 0 auto clamp(60px, 8vw, 92px);
  text-align: center;
}

.ap__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 14px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.ap__eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 4px var(--sd-accent-bg-soft);
  animation: ap-eyebrow-pulse 2.2s ease-in-out infinite;
}

@keyframes ap-eyebrow-pulse {
  50% {
    box-shadow: 0 0 0 8px rgba(216, 111, 31, 0);
  }
}

.ap h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(34px, 4.5vw, 55px);
  font-weight: 720;
  line-height: 1.02;
  letter-spacing: -0.052em;
}

.ap__header > p:not(.ap__eyebrow) {
  max-width: 700px;
  margin: 15px auto 0;
  color: var(--sd-text-soft);
  font-size: 14.5px;
  line-height: 1.62;
}

/* Two-column project directory */

.ap__directory {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(48px, 8vw, 104px);
  max-width: 1040px;
  margin-inline: auto;
}

.ap__group {
  min-width: 0;
}

.ap__group > h3 {
  margin: 0 0 26px;
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 730;
  letter-spacing: -0.02em;
}

.ap__list {
  display: grid;
  gap: 22px;
}

/* Project row */

.ap-project {
  --project-accent: var(--sd-orange);
  --project-accent-soft: var(--sd-accent-bg-soft);

  position: relative;
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  align-items: start;
  gap: 17px;
  color: inherit;
  text-decoration: none;
  animation: ap-project-enter 0.7s var(--sd-ease-out) both;
  animation-delay: var(--delay);
}

@keyframes ap-project-enter {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

.ap-project--cnerium {
  --project-accent: var(--sd-pink);
  --project-accent-soft: var(--sd-pink-bg);
}

.ap-project--kordex {
  --project-accent: var(--sd-yellow);
  --project-accent-soft: var(--sd-yellow-bg);
}

.ap-project--pico {
  --project-accent: var(--sd-orange);
  --project-accent-soft: var(--sd-accent-bg-soft);
}

/* Visual tile */

.ap-project__visual {
  position: relative;
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 13px;
  background: #ffffff;
  color: var(--project-accent);
  box-shadow:
    0 3px 7px rgba(15, 23, 42, 0.04),
    0 9px 22px rgba(15, 23, 42, 0.065);
  transition:
    border-color var(--sd-transition),
    box-shadow var(--sd-transition),
    color var(--sd-transition),
    transform var(--sd-transition);
}

.ap-project:hover .ap-project__visual {
  border-color: color-mix(in srgb, var(--project-accent) 35%, var(--sd-border));

  box-shadow:
    0 5px 12px rgba(15, 23, 42, 0.06),
    0 14px 30px rgba(15, 23, 42, 0.1);

  transform: translateY(-3px);
}

.ap-project__visual > svg {
  position: relative;
  z-index: 2;
  width: 27px;
  height: 27px;
}

.ap-project__visual-grid {
  position: absolute;
  inset: 5px;
  border-radius: 9px;
  background-image:
    linear-gradient(
      color-mix(in srgb, var(--project-accent) 12%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      color-mix(in srgb, var(--project-accent) 12%, transparent) 1px,
      transparent 1px
    );
  background-size: 7px 7px;
  opacity: 0.7;
  mask-image: radial-gradient(circle, #000, transparent 78%);
}

.ap-project__visual::after {
  position: absolute;
  inset: 8px;
  border-radius: 9px;
  background: radial-gradient(
    circle,
    var(--project-accent-soft),
    transparent 72%
  );
  content: "";
}

.ap-project__visual-scan {
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  width: 16px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.78),
    transparent
  );
  opacity: 0;
  transform: translateX(-55px);
  animation: ap-project-scan 5s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes ap-project-scan {
  0%,
  62% {
    opacity: 0;
    transform: translateX(-55px);
  }

  70% {
    opacity: 0.8;
  }

  88% {
    opacity: 0.55;
    transform: translateX(55px);
  }

  100% {
    opacity: 0;
    transform: translateX(55px);
  }
}

/* Project content */

.ap-project__content {
  min-width: 0;
  padding-top: 2px;
}

.ap-project__title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.ap-project__title strong {
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 740;
  letter-spacing: -0.024em;
  transition: color var(--sd-transition);
}

.ap-project:hover .ap-project__title strong {
  color: var(--project-accent);
}

.ap-project__status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-height: 20px;
  padding: 0 7px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: #fafafa;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 720;
  text-transform: uppercase;
}

.ap-project__status i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--project-accent);
  box-shadow: 0 0 0 3px var(--project-accent-soft);
}

.ap-project__content > p {
  max-width: 440px;
  margin: 6px 0 0;
  color: var(--sd-text-soft);
  font-size: 11.5px;
  line-height: 1.55;
}

.ap-project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 9px;
}

.ap-project__tags span {
  display: inline-flex;
  min-height: 20px;
  align-items: center;
  padding: 0 6px;
  border: 1px solid var(--sd-border);
  border-radius: 4px;
  background: #ffffff;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 670;
}

/* Arrow */

.ap-project__arrow {
  margin-top: 5px;
  color: var(--sd-text-dim);
  opacity: 0;
  transform: translateX(-5px);
  transition:
    color var(--sd-transition),
    opacity var(--sd-transition),
    transform var(--sd-transition);
}

.ap-project:hover .ap-project__arrow {
  color: var(--project-accent);
  opacity: 1;
  transform: none;
}

/* Pico featured content */

.ap-project--featured {
  grid-template-columns: 64px minmax(0, 1fr) auto;
}

.ap-project__validation {
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 7px;
  margin-top: -3px;
}

.ap-project__validation article {
  display: grid;
  gap: 3px;
  padding: 9px;
  border: 1px solid var(--sd-border);
  border-radius: 7px;
  background: #fafafa;
  transition:
    border-color var(--sd-transition),
    background var(--sd-transition),
    transform var(--sd-transition);
}

.ap-project:hover .ap-project__validation article {
  border-color: rgba(216, 111, 31, 0.17);
  background: var(--sd-accent-bg-soft);
  transform: translateY(-1px);
}

.ap-project__validation span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 5.8px;
  font-weight: 720;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.ap-project__validation strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Ecosystem note */

.ap__ecosystem-note {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 11px;
  margin-top: 7px;
  padding-top: 22px;
  border-top: 1px solid var(--sd-border);
}

.ap__ecosystem-note-icon {
  display: grid;
  width: 37px;
  height: 37px;
  place-items: center;
  border: 1px solid rgba(216, 111, 31, 0.17);
  border-radius: 9px;
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.ap__ecosystem-note-icon svg {
  width: 17px;
  height: 17px;
}

.ap__ecosystem-note > div {
  display: grid;
  line-height: 1.45;
}

.ap__ecosystem-note strong {
  color: var(--sd-text);
  font-size: 10px;
  font-weight: 720;
}

.ap__ecosystem-note p {
  max-width: 420px;
  margin: 4px 0 0;
  color: var(--sd-text-soft);
  font-size: 8px;
  line-height: 1.5;
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .ap__eyebrow > span,
  .ap-project,
  .ap-project__visual-scan {
    animation: none;
  }
}

/* Responsive */

@media (max-width: 880px) {
  .ap__directory {
    grid-template-columns: 1fr;
    gap: 52px;
    max-width: 680px;
  }

  .ap__group > h3 {
    margin-bottom: 24px;
  }
}

@media (max-width: 600px) {
  .ap h2 {
    font-size: clamp(2.3rem, 11vw, 3rem);
  }

  .ap__header {
    margin-bottom: 54px;
  }

  .ap-project {
    grid-template-columns: 54px minmax(0, 1fr);
    gap: 13px;
  }

  .ap-project__visual {
    width: 54px;
    height: 54px;
  }

  .ap-project__visual > svg {
    width: 23px;
    height: 23px;
  }

  .ap-project__arrow {
    display: none;
  }

  .ap-project__validation {
    grid-column: 1 / -1;
    margin-top: 4px;
  }
}

@media (max-width: 430px) {
  .ap-project__validation {
    grid-template-columns: 1fr;
  }

  .ap-project__tags {
    display: none;
  }
}
</style>
