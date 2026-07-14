<template>
  <section ref="root" class="pr sd-section">
    <div class="sd-section__inner pr__inner">
      <header class="pr__header" data-reveal>
        <div class="pr__heading">
          <p class="pr__eyebrow">
            <span aria-hidden="true" />
            Proof
          </p>

          <h2>
            Inspect the work.
            <span>Verify the platform yourself.</span>
          </h2>
        </div>

        <div class="pr__intro">
          <p>
            Softadastra presents public source code, documentation, working
            applications, and SDK artifacts instead of relying on unverifiable
            adoption claims.
          </p>

          <div class="pr__signals">
            <span>
              <i aria-hidden="true" />
              Public source
            </span>

            <span>
              <i aria-hidden="true" />
              Inspectable APIs
            </span>

            <span>
              <i aria-hidden="true" />
              Working software
            </span>
          </div>
        </div>
      </header>

      <div
        class="pr-board"
        data-reveal
        aria-label="Softadastra public repositories, documentation, applications, and SDK artifacts"
      >
        <div class="pr-board__pattern" aria-hidden="true" />
        <span class="pr-board__scanner" aria-hidden="true" />

        <header class="pr-board__topbar">
          <div class="pr-board__identity">
            <span class="pr-board__mark" aria-hidden="true"> S </span>

            <div>
              <strong>Softadastra evidence center</strong>
              <small>Public surfaces available for inspection</small>
            </div>
          </div>

          <div class="pr-board__summary">
            <span class="pr-board__summary-status">
              <i aria-hidden="true" />
              Verification sequence active
            </span>

            <code>4 public destinations</code>
          </div>
        </header>

        <div class="pr-board__body">
          <!-- Public destinations -->
          <nav
            class="pr-evidence"
            aria-label="Inspectable Softadastra resources"
          >
            <p class="pr-evidence__label">Evidence surfaces</p>

            <a
              v-for="(item, index) in proofItems"
              :key="item.title"
              :href="item.href"
              class="pr-evidence__item"
              :class="`pr-evidence__item--${item.tone}`"
              :style="{ '--phase': `${index * 1.6}s` }"
            >
              <span class="pr-evidence__number">
                {{ item.number }}
              </span>

              <span class="pr-evidence__icon" aria-hidden="true">
                <component :is="item.icon" />
              </span>

              <div class="pr-evidence__content">
                <small>{{ item.label }}</small>
                <strong>{{ item.title }}</strong>
                <span>{{ item.destination }}</span>
              </div>

              <span class="pr-evidence__state">
                <i aria-hidden="true" />
                Inspectable
              </span>

              <svg
                class="pr-evidence__arrow"
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

              <span class="pr-evidence__progress" aria-hidden="true" />
            </a>
          </nav>

          <!-- Verification console -->
          <section class="pr-console">
            <header class="pr-console__header">
              <div class="pr-console__tabs">
                <span class="pr-console__tab pr-console__tab--active">
                  Verification
                </span>

                <span class="pr-console__tab"> Activity </span>

                <span class="pr-console__tab"> Destinations </span>
              </div>

              <span class="pr-console__mode">
                <i aria-hidden="true" />
                Public inspection
              </span>
            </header>

            <div class="pr-console__main">
              <div class="pr-console__result">
                <div class="pr-score">
                  <svg viewBox="0 0 104 104" aria-hidden="true">
                    <circle class="pr-score__track" cx="52" cy="52" r="42" />

                    <circle class="pr-score__progress" cx="52" cy="52" r="42" />
                  </svg>

                  <div class="pr-score__value">
                    <strong>4/4</strong>
                    <span>surfaces</span>
                  </div>
                </div>

                <div class="pr-console__result-copy">
                  <span>Inspection result</span>

                  <h3>Real development work is publicly reachable.</h3>

                  <p>
                    Source, documentation, applications, and SDK artifacts can
                    be opened directly and evaluated independently.
                  </p>
                </div>
              </div>

              <div class="pr-console__checks">
                <article
                  v-for="(item, index) in proofItems"
                  :key="`check-${item.title}`"
                  class="pr-check"
                  :class="`pr-check--${item.tone}`"
                  :style="{ '--phase': `${index * 1.6}s` }"
                >
                  <span class="pr-check__icon" aria-hidden="true">
                    <component :is="item.icon" />
                  </span>

                  <div>
                    <span>{{ item.label }}</span>
                    <strong>{{ item.check }}</strong>
                    <small>{{ item.detail }}</small>
                  </div>

                  <span class="pr-check__result">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>

                    Available
                  </span>
                </article>
              </div>

              <div class="pr-terminal">
                <header class="pr-terminal__header">
                  <div class="pr-terminal__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>

                  <strong>public-inspection.log</strong>

                  <span>read only</span>
                </header>

                <div class="pr-terminal__body">
                  <div class="pr-terminal__command">
                    <span>$</span>
                    <code>softadastra verify --public-surfaces</code>
                  </div>

                  <div
                    v-for="(line, index) in verificationLines"
                    :key="line.text"
                    class="pr-terminal__line"
                    :class="`pr-terminal__line--${line.type}`"
                    :style="{ '--line-delay': `${0.5 + index * 0.8}s` }"
                  >
                    <span>{{ line.prefix }}</span>
                    <code>{{ line.text }}</code>
                  </div>

                  <div class="pr-terminal__cursor" aria-hidden="true">
                    <span>$</span>
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer class="pr-board__footer">
          <div class="pr-board__footer-message">
            <span class="pr-board__footer-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            </span>

            <div>
              <span>Open verification</span>
              <strong>
                Developers do not need to trust a presentation. They can open
                the work.
              </strong>
            </div>
          </div>

          <div class="pr-board__footer-items">
            <span>
              <i aria-hidden="true">01</i>
              Inspect the source
            </span>

            <span>
              <i aria-hidden="true">02</i>
              Read the documentation
            </span>

            <span>
              <i aria-hidden="true">03</i>
              Examine working applications
            </span>
          </div>

          <span class="pr-board__footer-sweep" aria-hidden="true" />
        </footer>
      </div>

      <div class="pr__principles" data-reveal>
        <article
          v-for="principle in principles"
          :key="principle.title"
          class="pr-principle"
        >
          <span class="pr-principle__icon" aria-hidden="true">
            <component :is="principle.icon" />
          </span>

          <div>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, ref, onMounted, onBeforeUnmount } from "vue";
import { links } from "../../data/links";

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

const IconSource = () =>
  h("svg", svgProps, [
    h("path", { d: "m9 8-4 4 4 4" }),
    h("path", { d: "m15 8 4 4-4 4" }),
    h("path", { d: "M10 19 14 5" }),
  ]);

const IconDocs = () =>
  h("svg", svgProps, [
    h("path", { d: "M6 3h9l4 4v14H6z" }),
    h("path", { d: "M14 3v5h5" }),
    h("path", { d: "M9 13h6M9 17h6" }),
  ]);

const IconRuntime = () =>
  h("svg", svgProps, [
    h("circle", { cx: "12", cy: "12", r: "9" }),
    h("path", { d: "m10 8 5 4-5 4z" }),
  ]);

const IconTooling = () =>
  h("svg", svgProps, [
    h("path", { d: "M14 7a4 4 0 1 1-4 4" }),
    h("path", { d: "m11.5 12.5-7 7" }),
    h("path", { d: "M6 18l2 2" }),
  ]);

const IconInspect = () =>
  h("svg", svgProps, [
    h("circle", { cx: "11", cy: "11", r: "7" }),
    h("path", { d: "m20 20-4-4" }),
    h("path", { d: "M8 11h6M11 8v6" }),
  ]);

const IconClaims = () =>
  h("svg", svgProps, [
    h("path", { d: "M4 5h16v14H4z" }),
    h("path", { d: "M8 9h8M8 13h5" }),
    h("path", { d: "m16 16 1.5 1.5L21 14" }),
  ]);

const IconApplication = () =>
  h("svg", svgProps, [
    h("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "16",
      rx: "2",
    }),
    h("path", { d: "M3 9h18" }),
    h("path", { d: "m8 14 2 2 5-5" }),
  ]);

const proofItems = [
  {
    number: "01",
    label: "Source",
    title: "Open repositories",
    destination: "GitHub organization",
    icon: IconSource,
    tone: "source",
    text: "Public repositories allow developers to inspect the code, structure, releases, and implementation direction.",
    check: "Source repositories reachable",
    detail: "Vix.cpp, Softadastra, SDK, Cnerium, Kordex, and Pico",
    href: links.github,
  },
  {
    number: "02",
    label: "Documentation",
    title: "Technical documentation",
    destination: "Public documentation",
    icon: IconDocs,
    tone: "docs",
    text: "Guides, commands, modules, examples, and public APIs document how the platform is intended to be used.",
    check: "Documentation available",
    detail: "Guides, commands, modules, APIs, and examples",
    href: links.docs,
  },
  {
    number: "03",
    label: "Application",
    title: "Working applications",
    destination: "Pico validation application",
    icon: IconRuntime,
    tone: "runtime",
    text: "Pico exercises Vix.cpp modules, native runtime behavior, application state, and Rix integrations.",
    check: "Application implementation visible",
    detail: "Runtime behavior and package integrations can be examined",
    href: links.pico,
  },
  {
    number: "04",
    label: "SDK",
    title: "Inspectable SDK artifacts",
    destination: "Softadastra SDK repository",
    icon: IconTooling,
    tone: "sdk",
    text: "The SDK source and documentation expose the local data and integration foundation used by applications.",
    check: "SDK artifacts available",
    detail: "Source, API examples, CMake integration, and documentation",
    href: links.sdkGithub,
  },
];

const verificationLines = [
  {
    prefix: "[01]",
    text: "source repositories available for inspection",
    type: "source",
  },
  {
    prefix: "[02]",
    text: "technical documentation and examples available",
    type: "docs",
  },
  {
    prefix: "[03]",
    text: "working application implementation reachable",
    type: "runtime",
  },
  {
    prefix: "[04]",
    text: "SDK source and integration artifacts reachable",
    type: "sdk",
  },
  {
    prefix: "done",
    text: "public verification surfaces: 4/4",
    type: "success",
  },
];

const principles = [
  {
    title: "Evidence before claims",
    text: "The platform is presented through artifacts that developers can open, read, build, and evaluate themselves.",
    icon: IconClaims,
  },
  {
    title: "Documentation beside implementation",
    text: "The public explanation stays connected to source code, commands, examples, and actual API behavior.",
    icon: IconInspect,
  },
  {
    title: "Applications exercise the platform",
    text: "Working applications help expose integration gaps that isolated feature demonstrations may not reveal.",
    icon: IconApplication,
  },
];

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const targets = root.value?.querySelectorAll("[data-reveal]") ?? [];

  if (reduce) {
    targets.forEach((element) => element.classList.add("is-visible"));
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
.pr {
  --pr-bg: #0d0f12;
  --pr-bg-raised: #14171c;
  --pr-bg-soft: #111419;
  --pr-surface: #191d23;

  --pr-border: rgba(255, 255, 255, 0.09);
  --pr-border-strong: rgba(255, 255, 255, 0.15);

  --pr-text: #f5f4f2;
  --pr-text-soft: #b0b5bc;
  --pr-text-muted: #747b85;

  --pr-orange: #ee8335;
  --pr-orange-soft: rgba(238, 131, 53, 0.13);

  --pr-green: #55c990;
  --pr-green-soft: rgba(85, 201, 144, 0.12);

  --pr-blue: #79a7ec;
  --pr-blue-soft: rgba(121, 167, 236, 0.12);

  --pr-purple: #ad8cd6;
  --pr-purple-soft: rgba(173, 140, 214, 0.12);

  --pr-cyan: #67bdc8;
  --pr-cyan-soft: rgba(103, 189, 200, 0.12);

  position: relative;
  overflow: hidden;
  border-block: 1px solid #20242a;

  background:
    radial-gradient(
      circle at 12% 16%,
      rgba(216, 111, 31, 0.12),
      transparent 31%
    ),
    radial-gradient(
      circle at 88% 72%,
      rgba(116, 51, 32, 0.14),
      transparent 32%
    ),
    linear-gradient(150deg, #0d0f12 0%, #111317 46%, #0c0e11 100%);

  color: var(--pr-text);
}

.pr::before {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
  background-size: 48px 48px;
  content: "";
  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 15%,
    #000 85%,
    transparent
  );
  pointer-events: none;
}

.pr__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(42px, 6vw, 70px);
}

[data-reveal] {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.75s var(--sd-ease-out),
    transform 0.75s var(--sd-ease-out);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* Header */

.pr__header {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.72fr);
  gap: clamp(40px, 8vw, 112px);
  align-items: end;
}

.pr__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 15px;
  color: #f2a56e;
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pr__eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--pr-orange);
  box-shadow: 0 0 0 4px var(--pr-orange-soft);
  animation: pr-pulse 2.2s ease-in-out infinite;
}

@keyframes pr-pulse {
  50% {
    box-shadow: 0 0 0 8px rgba(238, 131, 53, 0);
  }
}

.pr h2 {
  max-width: 780px;
  margin: 0;
  color: var(--pr-text);
  font-size: clamp(35px, 4.5vw, 58px);
  font-weight: 720;
  line-height: 1.01;
  letter-spacing: -0.052em;
}

.pr h2 span {
  display: block;
  color: var(--pr-text-muted);
}

.pr__intro {
  max-width: 530px;
  padding-bottom: 4px;
}

.pr__intro > p {
  margin: 0;
  color: var(--pr-text-soft);
  font-size: 14.5px;
  line-height: 1.66;
}

.pr__signals {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.pr__signals span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 9px;
  border: 1px solid var(--pr-border);
  border-radius: var(--sd-radius-full);
  background: rgba(255, 255, 255, 0.035);
  color: #a8afb8;
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 700;
}

.pr__signals i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--pr-orange);
}

/* Main board */

.pr-board {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--pr-border-strong);
  border-radius: 17px;
  background:
    radial-gradient(
      circle at 55% -22%,
      rgba(238, 131, 53, 0.08),
      transparent 42%
    ),
    var(--pr-bg-raised);
  box-shadow:
    0 40px 110px rgba(0, 0, 0, 0.42),
    0 12px 38px rgba(0, 0, 0, 0.25);
}

.pr-board__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.09) 0.8px,
    transparent 0.8px
  );
  background-size: 17px 17px;
  opacity: 0.16;
  mask-image: radial-gradient(circle at 50% 4%, #000, transparent 45%);
  pointer-events: none;
}

.pr-board__scanner {
  position: absolute;
  z-index: 7;
  top: 66px;
  right: 0;
  left: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(238, 131, 53, 0.8),
    transparent
  );
  box-shadow: 0 0 18px rgba(238, 131, 53, 0.28);
  opacity: 0;
  pointer-events: none;
  animation: pr-board-scan 6.4s ease-in-out infinite;
}

@keyframes pr-board-scan {
  0% {
    top: 66px;
    opacity: 0;
  }

  8% {
    opacity: 0.8;
  }

  82% {
    top: calc(100% - 68px);
    opacity: 0.55;
  }

  92%,
  100% {
    top: calc(100% - 68px);
    opacity: 0;
  }
}

/* Board top bar */

.pr-board__topbar {
  position: relative;
  z-index: 3;
  display: flex;
  min-height: 68px;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 13px 18px;
  border-bottom: 1px solid var(--pr-border);
  background: rgba(13, 15, 18, 0.76);
  backdrop-filter: blur(16px);
}

.pr-board__identity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pr-board__mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid rgba(238, 131, 53, 0.28);
  border-radius: 8px;
  background: var(--pr-orange-soft);
  color: #ffac70;
  font-size: 14px;
  font-weight: 800;
}

.pr-board__identity > div {
  display: grid;
  line-height: 1.3;
}

.pr-board__identity strong {
  color: var(--pr-text);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 730;
}

.pr-board__identity small {
  color: var(--pr-text-muted);
  font-size: 8px;
}

.pr-board__summary {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pr-board__summary-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 9px;
  border: 1px solid rgba(85, 201, 144, 0.17);
  border-radius: var(--sd-radius-full);
  background: var(--pr-green-soft);
  color: var(--pr-green);
  font-size: 7px;
  font-weight: 720;
}

.pr-board__summary-status i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation: pr-status-pulse 1.8s ease-in-out infinite;
}

@keyframes pr-status-pulse {
  50% {
    box-shadow: 0 0 0 7px rgba(85, 201, 144, 0);
  }
}

.pr-board__summary code {
  color: var(--pr-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 8px;
}

/* Board body */

.pr-board__body {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
  min-height: 560px;
}

/* Evidence list */

.pr-evidence {
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 18px;
  border-right: 1px solid var(--pr-border);
  background: rgba(10, 12, 15, 0.34);
}

.pr-evidence__label {
  margin: 0 0 4px;
  color: var(--pr-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  font-weight: 740;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pr-evidence__item {
  position: relative;
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 9px;
  overflow: hidden;
  padding: 11px;
  border: 1px solid var(--pr-border);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.025);
  color: inherit;
  text-decoration: none;
  animation: pr-evidence-cycle 6.4s ease-in-out infinite;
  animation-delay: var(--phase);
  transition:
    border-color var(--sd-transition),
    background var(--sd-transition),
    transform var(--sd-transition);
}

.pr-evidence__item:hover {
  border-color: rgba(238, 131, 53, 0.32);
  background: rgba(238, 131, 53, 0.055);
  transform: translateX(3px);
}

@keyframes pr-evidence-cycle {
  0%,
  18% {
    border-color: rgba(238, 131, 53, 0.32);
    background: rgba(238, 131, 53, 0.06);
    transform: translateX(4px);
  }

  25%,
  100% {
    border-color: var(--pr-border);
    background: rgba(255, 255, 255, 0.025);
    transform: none;
  }
}

.pr-evidence__number {
  color: #565e69;
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 750;
}

.pr-evidence__icon {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 7px;
}

.pr-evidence__icon svg {
  width: 16px;
  height: 16px;
}

.pr-evidence__item--source .pr-evidence__icon {
  background: var(--pr-orange-soft);
  color: #ef9b5d;
}

.pr-evidence__item--docs .pr-evidence__icon {
  background: var(--pr-blue-soft);
  color: var(--pr-blue);
}

.pr-evidence__item--runtime .pr-evidence__icon {
  background: var(--pr-green-soft);
  color: var(--pr-green);
}

.pr-evidence__item--sdk .pr-evidence__icon {
  background: var(--pr-purple-soft);
  color: var(--pr-purple);
}

.pr-evidence__content {
  display: grid;
  min-width: 0;
  line-height: 1.28;
}

.pr-evidence__content small {
  color: var(--pr-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 5.8px;
  font-weight: 720;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.pr-evidence__content strong {
  overflow: hidden;
  color: var(--pr-text);
  font-size: 8.5px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pr-evidence__content span {
  overflow: hidden;
  color: var(--pr-text-muted);
  font-size: 6.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pr-evidence__state {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--pr-green);
  font-size: 5.8px;
  font-weight: 700;
}

.pr-evidence__state i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
}

.pr-evidence__arrow {
  color: var(--pr-text-muted);
  transition:
    color var(--sd-transition),
    transform var(--sd-transition);
}

.pr-evidence__item:hover .pr-evidence__arrow {
  color: var(--pr-orange);
  transform: translateX(2px);
}

.pr-evidence__progress {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--pr-orange);
  transform: scaleX(0);
  transform-origin: left;
  animation: pr-evidence-progress 6.4s ease-in-out infinite;
  animation-delay: var(--phase);
}

@keyframes pr-evidence-progress {
  0% {
    transform: scaleX(0);
  }

  18% {
    transform: scaleX(1);
  }

  24%,
  100% {
    transform: scaleX(0);
  }
}

/* Console */

.pr-console {
  display: grid;
  min-width: 0;
  grid-template-rows: auto 1fr;
  background: var(--pr-bg-soft);
}

.pr-console__header {
  display: flex;
  min-height: 51px;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 0 15px;
  border-bottom: 1px solid var(--pr-border);
  background: #12151a;
}

.pr-console__tabs {
  display: flex;
  gap: 5px;
}

.pr-console__tab {
  padding: 6px 8px;
  border-radius: 5px;
  color: #68717c;
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.pr-console__tab--active {
  background: #20252c;
  color: #e0e3e7;
}

.pr-console__mode {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--pr-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.pr-console__mode i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--pr-orange);
}

.pr-console__main {
  display: grid;
  align-content: start;
  gap: 14px;
  padding: 18px;
}

.pr-console__result {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 18px;
  padding: 17px;
  border: 1px solid var(--pr-border);
  border-radius: 10px;
  background:
    radial-gradient(
      circle at 0% 50%,
      rgba(238, 131, 53, 0.09),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.025);
}

.pr-score {
  position: relative;
  display: grid;
  width: 92px;
  height: 92px;
  place-items: center;
}

.pr-score svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.pr-score circle {
  fill: none;
  stroke-width: 7;
}

.pr-score__track {
  stroke: #282e35;
}

.pr-score__progress {
  stroke: var(--pr-orange);
  stroke-linecap: round;
  stroke-dasharray: 264;
  stroke-dashoffset: 264;
  animation: pr-score-progress 3s var(--sd-ease-out) infinite alternate;
}

@keyframes pr-score-progress {
  to {
    stroke-dashoffset: 0;
  }
}

.pr-score__value {
  display: grid;
  justify-items: center;
  line-height: 1.1;
}

.pr-score__value strong {
  color: var(--pr-text);
  font-size: 19px;
  font-weight: 750;
}

.pr-score__value span {
  color: var(--pr-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 5.5px;
  text-transform: uppercase;
}

.pr-console__result-copy {
  display: grid;
}

.pr-console__result-copy > span {
  color: var(--pr-orange);
  font-family: var(--sd-font-mono);
  font-size: 6px;
  font-weight: 730;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.pr-console__result-copy h3 {
  max-width: 440px;
  margin: 5px 0 0;
  color: var(--pr-text);
  font-size: 14px;
  font-weight: 710;
  letter-spacing: -0.02em;
}

.pr-console__result-copy p {
  max-width: 490px;
  margin: 6px 0 0;
  color: var(--pr-text-muted);
  font-size: 7.5px;
  line-height: 1.5;
}

/* Checks */

.pr-console__checks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
}

.pr-check {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--pr-border);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  animation: pr-check-cycle 6.4s ease-in-out infinite;
  animation-delay: var(--phase);
}

@keyframes pr-check-cycle {
  0%,
  18% {
    border-color: rgba(85, 201, 144, 0.22);
    background: rgba(85, 201, 144, 0.055);
  }

  25%,
  100% {
    border-color: var(--pr-border);
    background: rgba(255, 255, 255, 0.02);
  }
}

.pr-check__icon {
  display: grid;
  width: 31px;
  height: 31px;
  grid-row: 1 / 3;
  place-items: center;
  border-radius: 7px;
}

.pr-check__icon svg {
  width: 14px;
  height: 14px;
}

.pr-check--source .pr-check__icon {
  background: var(--pr-orange-soft);
  color: #ef9b5d;
}

.pr-check--docs .pr-check__icon {
  background: var(--pr-blue-soft);
  color: var(--pr-blue);
}

.pr-check--runtime .pr-check__icon {
  background: var(--pr-green-soft);
  color: var(--pr-green);
}

.pr-check--sdk .pr-check__icon {
  background: var(--pr-purple-soft);
  color: var(--pr-purple);
}

.pr-check > div {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.pr-check > div span {
  color: var(--pr-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 5.5px;
  text-transform: uppercase;
}

.pr-check > div strong {
  overflow: hidden;
  color: var(--pr-text);
  font-size: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pr-check > div small {
  overflow: hidden;
  color: var(--pr-text-muted);
  font-size: 5.7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pr-check__result {
  grid-column: 2;
  display: inline-flex;
  width: max-content;
  align-items: center;
  gap: 4px;
  color: var(--pr-green);
  font-size: 5.5px;
  font-weight: 700;
}

.pr-check__result svg {
  width: 9px;
  height: 9px;
}

/* Terminal */

.pr-terminal {
  overflow: hidden;
  border: 1px solid var(--pr-border);
  border-radius: 9px;
  background: #0b0d10;
}

.pr-terminal__header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  min-height: 38px;
  align-items: center;
  gap: 10px;
  padding: 0 11px;
  border-bottom: 1px solid var(--pr-border);
  background: #111419;
}

.pr-terminal__dots {
  display: flex;
  gap: 4px;
}

.pr-terminal__dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #353c45;
}

.pr-terminal__dots span:first-child {
  background: var(--pr-orange);
}

.pr-terminal__header strong,
.pr-terminal__header > span {
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.pr-terminal__header strong {
  overflow: hidden;
  color: #9da6b0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pr-terminal__header > span {
  color: #5e6772;
}

.pr-terminal__body {
  min-height: 190px;
  padding: 13px;
}

.pr-terminal__command,
.pr-terminal__line {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  align-items: center;
  min-height: 25px;
  font-family: var(--sd-font-mono);
  font-size: 7px;
}

.pr-terminal__command span {
  color: var(--pr-orange);
  font-weight: 800;
}

.pr-terminal__command code {
  color: #dfe3e8;
}

.pr-terminal__line {
  opacity: 0;
  animation: pr-terminal-line 6.4s ease infinite;
  animation-delay: var(--line-delay);
}

.pr-terminal__line span,
.pr-terminal__line code {
  color: #747e89;
}

.pr-terminal__line--source span,
.pr-terminal__line--source code {
  color: #ef9b5d;
}

.pr-terminal__line--docs span,
.pr-terminal__line--docs code {
  color: var(--pr-blue);
}

.pr-terminal__line--runtime span,
.pr-terminal__line--runtime code,
.pr-terminal__line--success span,
.pr-terminal__line--success code {
  color: var(--pr-green);
}

.pr-terminal__line--sdk span,
.pr-terminal__line--sdk code {
  color: var(--pr-purple);
}

@keyframes pr-terminal-line {
  0%,
  7% {
    opacity: 0;
    transform: translateX(-4px);
  }

  13%,
  84% {
    opacity: 1;
    transform: none;
  }

  94%,
  100% {
    opacity: 0;
  }
}

.pr-terminal code {
  overflow: hidden;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pr-terminal__cursor {
  display: flex;
  min-height: 25px;
  align-items: center;
  gap: 7px;
  color: var(--pr-orange);
  font-family: var(--sd-font-mono);
  font-size: 7px;
}

.pr-terminal__cursor i {
  width: 6px;
  height: 10px;
  background: #dce1e6;
  animation: pr-cursor 0.9s steps(1) infinite;
}

@keyframes pr-cursor {
  50% {
    opacity: 0;
  }
}

/* Board footer */

.pr-board__footer {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(290px, 0.88fr) minmax(0, 1.12fr);
  align-items: center;
  gap: 25px;
  overflow: hidden;
  padding: 17px 20px;
  border-top: 1px solid var(--pr-border);
  background:
    radial-gradient(
      circle at 12% 50%,
      rgba(238, 131, 53, 0.08),
      transparent 34%
    ),
    #111419;
}

.pr-board__footer-message {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
}

.pr-board__footer-icon {
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgba(238, 131, 53, 0.2);
  border-radius: 9px;
  background: var(--pr-surface);
  color: var(--pr-orange);
}

.pr-board__footer-icon svg {
  width: 17px;
  height: 17px;
}

.pr-board__footer-message > div {
  display: grid;
  line-height: 1.35;
}

.pr-board__footer-message span:not(.pr-board__footer-icon) {
  color: var(--pr-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6px;
  font-weight: 720;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.pr-board__footer-message strong {
  max-width: 410px;
  color: var(--pr-text);
  font-size: 8px;
}

.pr-board__footer-items {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.pr-board__footer-items span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 9px;
  border: 1px solid var(--pr-border);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--pr-text-soft);
  font-size: 6.5px;
}

.pr-board__footer-items i {
  color: var(--pr-orange);
  font-family: var(--sd-font-mono);
  font-size: 5.5px;
  font-style: normal;
  font-weight: 800;
}

.pr-board__footer-sweep {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    transparent 20%,
    rgba(255, 255, 255, 0.05),
    transparent 80%
  );
  transform: translateX(-100%);
  animation: pr-footer-sweep 5s ease-in-out infinite;
}

@keyframes pr-footer-sweep {
  0%,
  62% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

/* Principles */

.pr__principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.pr-principle {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: 11px;
  padding: 16px;
  border: 1px solid var(--pr-border);
  border-radius: 11px;
  background: rgba(20, 23, 28, 0.86);
  box-shadow:
    0 8px 22px rgba(0, 0, 0, 0.16),
    0 1px 2px rgba(0, 0, 0, 0.12);
  transition:
    border-color var(--sd-transition),
    background var(--sd-transition),
    box-shadow var(--sd-transition),
    transform var(--sd-transition);
}

.pr-principle:hover {
  border-color: var(--pr-border-strong);
  background: var(--pr-surface);
  box-shadow:
    0 18px 38px rgba(0, 0, 0, 0.27),
    0 4px 12px rgba(0, 0, 0, 0.17);
  transform: translateY(-3px);
}

.pr-principle__icon {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid rgba(238, 131, 53, 0.18);
  border-radius: 8px;
  background: var(--pr-orange-soft);
  color: #ef9b5d;
}

.pr-principle__icon svg {
  width: 16px;
  height: 16px;
}

.pr-principle h3 {
  margin: 0;
  color: var(--pr-text);
  font-size: 9px;
  font-weight: 710;
}

.pr-principle p {
  margin: 5px 0 0;
  color: var(--pr-text-soft);
  font-size: 7.5px;
  line-height: 1.5;
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .pr__eyebrow > span,
  .pr-board__scanner,
  .pr-board__summary-status i,
  .pr-evidence__item,
  .pr-evidence__progress,
  .pr-score__progress,
  .pr-check,
  .pr-terminal__line,
  .pr-terminal__cursor i,
  .pr-board__footer-sweep {
    animation: none;
  }

  .pr-terminal__line {
    opacity: 1;
    transform: none;
  }
}

/* Responsive */

@media (max-width: 960px) {
  .pr__header {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .pr__intro {
    max-width: 720px;
  }

  .pr-board__body {
    grid-template-columns: 1fr;
  }

  .pr-evidence {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-right: 0;
    border-bottom: 1px solid var(--pr-border);
  }

  .pr-evidence__label {
    grid-column: 1 / -1;
  }

  .pr-board__footer {
    grid-template-columns: 1fr;
  }

  .pr-board__footer-items {
    justify-content: flex-start;
  }
}

@media (max-width: 720px) {
  .pr h2 {
    font-size: clamp(2.3rem, 11vw, 3rem);
  }

  .pr-board__topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .pr-board__summary {
    width: 100%;
    justify-content: space-between;
  }

  .pr-console__checks {
    grid-template-columns: 1fr;
  }

  .pr__principles {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .pr-board {
    border-radius: 13px;
  }

  .pr-evidence {
    grid-template-columns: 1fr;
    padding: 13px;
  }

  .pr-evidence__state {
    display: none;
  }

  .pr-console__main {
    padding: 13px;
  }

  .pr-console__result {
    grid-template-columns: 1fr;
  }

  .pr-score {
    width: 78px;
    height: 78px;
  }

  .pr-board__summary code {
    display: none;
  }

  .pr-console__tabs .pr-console__tab:not(.pr-console__tab--active) {
    display: none;
  }

  .pr-board__footer {
    padding: 15px;
  }

  .pr-board__footer-items {
    display: grid;
  }
}
</style>
