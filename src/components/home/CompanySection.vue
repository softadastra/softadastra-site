<template>
  <section ref="root" class="cs sd-section">
    <div class="sd-section__inner cs__inner">
      <header class="cs__header" data-reveal>
        <p class="cs__eyebrow">
          <span aria-hidden="true" />
          The company
        </p>

        <h2>One company, every layer of the C++ workflow.</h2>

        <p>
          Softadastra builds open development tools, reusable application
          foundations, and team infrastructure for modern native applications.
        </p>
      </header>

      <div
        class="cs-map"
        data-reveal
        aria-label="Softadastra connecting Vix.cpp, Rix, Engine, Cloud, and Registry"
      >
        <div class="cs-map__background" aria-hidden="true" />
        <div class="cs-map__glow" aria-hidden="true" />

        <!-- Animated connections -->
        <svg
          class="cs-map__connections"
          viewBox="0 0 1000 430"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cs-orange-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#ad5117" />
              <stop offset="50%" stop-color="#d86f1f" />
              <stop offset="100%" stop-color="#ed9b5e" />
            </linearGradient>

            <filter id="cs-packet-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            class="cs-map__connection-base"
            d="M330 215 C470 215 485 64 630 64"
          />
          <path
            class="cs-map__connection-base"
            d="M330 215 C470 215 485 139 630 139"
          />
          <path
            class="cs-map__connection-base"
            d="M330 215 C470 215 485 215 630 215"
          />
          <path
            class="cs-map__connection-base"
            d="M330 215 C470 215 485 291 630 291"
          />
          <path
            class="cs-map__connection-base"
            d="M330 215 C470 215 485 366 630 366"
          />

          <path
            class="cs-map__connection-active"
            d="M330 215 C470 215 485 64 630 64"
          />
          <path
            class="cs-map__connection-active"
            d="M330 215 C470 215 485 139 630 139"
          />
          <path
            class="cs-map__connection-active"
            d="M330 215 C470 215 485 215 630 215"
          />
          <path
            class="cs-map__connection-active"
            d="M330 215 C470 215 485 291 630 291"
          />
          <path
            class="cs-map__connection-active"
            d="M330 215 C470 215 485 366 630 366"
          />

          <circle class="cs-map__packet" r="5" filter="url(#cs-packet-glow)">
            <animateMotion
              dur="5.5s"
              begin="0s"
              repeatCount="indefinite"
              path="M330 215 C470 215 485 64 630 64"
            />
          </circle>

          <circle class="cs-map__packet" r="5" filter="url(#cs-packet-glow)">
            <animateMotion
              dur="5.5s"
              begin="-1.1s"
              repeatCount="indefinite"
              path="M330 215 C470 215 485 139 630 139"
            />
          </circle>

          <circle class="cs-map__packet" r="5" filter="url(#cs-packet-glow)">
            <animateMotion
              dur="5.5s"
              begin="-2.2s"
              repeatCount="indefinite"
              path="M330 215 C470 215 485 215 630 215"
            />
          </circle>

          <circle class="cs-map__packet" r="5" filter="url(#cs-packet-glow)">
            <animateMotion
              dur="5.5s"
              begin="-3.3s"
              repeatCount="indefinite"
              path="M330 215 C470 215 485 291 630 291"
            />
          </circle>

          <circle class="cs-map__packet" r="5" filter="url(#cs-packet-glow)">
            <animateMotion
              dur="5.5s"
              begin="-4.4s"
              repeatCount="indefinite"
              path="M330 215 C470 215 485 366 630 366"
            />
          </circle>
        </svg>

        <!-- Company mark -->
        <div class="cs-map__company">
          <span class="cs-map__plate cs-map__plate--back" aria-hidden="true" />
          <span
            class="cs-map__plate cs-map__plate--middle"
            aria-hidden="true"
          />

          <div class="cs-map__mark">
            <span class="cs-map__mark-grid" aria-hidden="true" />
            <strong>S</strong>
          </div>

          <div class="cs-map__company-label">
            <strong>Softadastra</strong>
            <span>C++ tooling company</span>
          </div>

          <span class="cs-map__company-ring" aria-hidden="true" />
        </div>

        <!-- Connected products -->
        <div class="cs-map__products">
          <article
            v-for="(product, index) in products"
            :key="product.name"
            class="cs-product"
            :style="{ '--product-delay': `${index * 1.1}s` }"
          >
            <span class="cs-product__icon" aria-hidden="true">
              <component :is="product.icon" />
            </span>

            <div class="cs-product__content">
              <strong>{{ product.name }}</strong>
              <small>{{ product.description }}</small>
            </div>

            <span class="cs-product__role">
              {{ product.role }}
            </span>

            <span class="cs-product__pulse" aria-hidden="true" />
          </article>
        </div>

        <div class="cs-map__status">
          <span class="cs-map__status-dot" aria-hidden="true" />

          <div>
            <strong>Connected platform</strong>
            <small>Five products, one development direction</small>
          </div>
        </div>
      </div>

      <div class="cs__principles">
        <article
          v-for="(principle, index) in principles"
          :key="principle.title"
          class="cs-principle"
          data-reveal
          :style="{ '--d': `${index * 0.1}s` }"
        >
          <span class="cs-principle__icon" aria-hidden="true">
            <component :is="principle.icon" />
          </span>

          <div>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.text }}</p>
          </div>
        </article>
      </div>

      <a class="cs__link" :href="links.company" data-reveal>
        Learn about Softadastra

        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
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
      </a>
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

const IconVix = () =>
  h("svg", svgProps, [
    h("path", { d: "m8 6-5 6 5 6" }),
    h("path", { d: "m16 6 5 6-5 6" }),
    h("path", { d: "M10 19 14 5" }),
  ]);

const IconRix = () =>
  h("svg", svgProps, [
    h("rect", {
      x: "3",
      y: "3",
      width: "8",
      height: "8",
      rx: "1.5",
    }),
    h("rect", {
      x: "13",
      y: "3",
      width: "8",
      height: "8",
      rx: "1.5",
    }),
    h("rect", {
      x: "3",
      y: "13",
      width: "8",
      height: "8",
      rx: "1.5",
    }),
    h("path", { d: "M17 13v8M13 17h8" }),
  ]);

const IconEngine = () =>
  h("svg", svgProps, [
    h("circle", { cx: "12", cy: "12", r: "3" }),
    h("path", {
      d: "M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.7a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.4 2.7h4l.4-2.7a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z",
    }),
  ]);

const IconCloud = () =>
  h("svg", svgProps, [
    h("path", { d: "M21 16V8l-9-5-9 5v8l9 5 9-5Z" }),
    h("path", { d: "m3.3 8.3 8.7 4.8 8.7-4.8" }),
    h("path", { d: "M12 13v8" }),
  ]);

const IconRegistry = () =>
  h("svg", svgProps, [
    h("ellipse", { cx: "12", cy: "5", rx: "8", ry: "3" }),
    h("path", { d: "M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" }),
    h("path", { d: "M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" }),
  ]);

const IconOpen = () =>
  h("svg", svgProps, [
    h("path", { d: "M8 9 4 12l4 3" }),
    h("path", { d: "m16 9 4 3-4 3" }),
    h("path", { d: "m14 5-4 14" }),
  ]);

const IconWorkflow = () =>
  h("svg", svgProps, [
    h("circle", { cx: "5", cy: "12", r: "2" }),
    h("circle", { cx: "19", cy: "6", r: "2" }),
    h("circle", { cx: "19", cy: "18", r: "2" }),
    h("path", { d: "m7 11 10-4" }),
    h("path", { d: "m7 13 10 4" }),
  ]);

const products = [
  {
    name: "Vix.cpp",
    description: "Runtime, CLI, builds, modules, and native workflows",
    role: "Build",
    icon: IconVix,
  },
  {
    name: "Rix",
    description: "Reusable application libraries and unified APIs",
    role: "Extend",
    icon: IconRix,
  },
  {
    name: "Softadastra Engine",
    description: "Durable local state and synchronization foundations",
    role: "Persist",
    icon: IconEngine,
  },
  {
    name: "Softadastra Cloud",
    description: "Private packages, projects, reports, and team operations",
    role: "Organize",
    icon: IconCloud,
  },
  {
    name: "Vix Registry",
    description: "Public package discovery and version resolution",
    role: "Share",
    icon: IconRegistry,
  },
];

const principles = [
  {
    title: "Open foundations",
    text: "The core development tools remain inspectable, usable locally, and independent from a mandatory cloud runtime.",
    icon: IconOpen,
  },
  {
    title: "One connected workflow",
    text: "Each product owns a clear layer while preserving one coherent path from local C++ development to team operations.",
    icon: IconWorkflow,
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
.cs {
  position: relative;
  overflow: hidden;
  border-block: 1px solid var(--sd-border);
  background: #ffffff;
}

.cs::before {
  position: absolute;
  top: -250px;
  left: 50%;
  width: 760px;
  height: 460px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(216, 111, 31, 0.07),
    transparent 68%
  );
  content: "";
  pointer-events: none;
  transform: translateX(-50%);
}

.cs__inner {
  position: relative;
  z-index: 1;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.75s var(--sd-ease-out),
    transform 0.75s var(--sd-ease-out);
  transition-delay: var(--d, 0s);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* Header */

.cs__header {
  max-width: 780px;
  margin: 0 auto clamp(50px, 7vw, 82px);
  text-align: center;
}

.cs__eyebrow {
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

.cs__eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 4px var(--sd-accent-bg-soft);
  animation: cs-eyebrow-pulse 2.2s ease-in-out infinite;
}

@keyframes cs-eyebrow-pulse {
  50% {
    box-shadow: 0 0 0 8px rgba(216, 111, 31, 0);
  }
}

.cs h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(34px, 4.5vw, 55px);
  font-weight: 720;
  line-height: 1.02;
  letter-spacing: -0.052em;
}

.cs__header > p:not(.cs__eyebrow) {
  max-width: 680px;
  margin: 15px auto 0;
  color: var(--sd-text-soft);
  font-size: 14.5px;
  line-height: 1.62;
}

/* Company map */

.cs-map {
  position: relative;
  min-height: 510px;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-xl);
  background:
    radial-gradient(
      circle at 28% 50%,
      rgba(216, 111, 31, 0.095),
      transparent 27%
    ),
    linear-gradient(180deg, #ffffff, #fcfcfc);
  box-shadow:
    0 2px 5px rgba(15, 23, 42, 0.035),
    0 22px 62px rgba(15, 23, 42, 0.08);
}

.cs-map__background {
  position: absolute;
  top: -3%;
  left: 12%;
  width: 62%;
  height: 46%;
  background-image:
    linear-gradient(rgba(216, 111, 31, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(216, 111, 31, 0.1) 1px, transparent 1px);
  background-size: 8px 8px;
  mask-image: radial-gradient(circle at 45% 20%, #000, transparent 72%);
  opacity: 0.44;
  pointer-events: none;
}

.cs-map__glow {
  position: absolute;
  top: 50%;
  left: 27%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(216, 111, 31, 0.08);
  filter: blur(65px);
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.cs-map__connections {
  position: absolute;
  inset: 7% 2%;
  z-index: 1;
  width: 96%;
  height: 86%;
  overflow: visible;
  pointer-events: none;
}

.cs-map__connection-base {
  stroke: rgba(216, 111, 31, 0.16);
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.cs-map__connection-active {
  stroke: url("#cs-orange-line");
  stroke-width: 2.2;
  stroke-dasharray: 8 9;
  opacity: 0.82;
  vector-effect: non-scaling-stroke;
  animation: cs-connection-flow 1.6s linear infinite;
}

.cs-map__connection-active:nth-of-type(7) {
  animation-delay: -0.3s;
}

.cs-map__connection-active:nth-of-type(8) {
  animation-delay: -0.6s;
}

.cs-map__connection-active:nth-of-type(9) {
  animation-delay: -0.9s;
}

.cs-map__connection-active:nth-of-type(10) {
  animation-delay: -1.2s;
}

@keyframes cs-connection-flow {
  to {
    stroke-dashoffset: -34;
  }
}

.cs-map__packet {
  fill: var(--sd-orange);
}

/* Company mark */

.cs-map__company {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 26%;
  width: 170px;
  height: 205px;
  transform: translate(-50%, -50%);
}

.cs-map__plate {
  position: absolute;
  top: 18px;
  left: 20px;
  width: 132px;
  height: 132px;
  border: 1px solid rgba(173, 81, 23, 0.16);
  border-radius: 3px;
  background: linear-gradient(145deg, #f4a268, #ba4d17);
  box-shadow: 0 18px 42px rgba(114, 42, 10, 0.14);
}

.cs-map__plate--back {
  opacity: 0.5;
  transform: translate(-20px, 20px);
  animation: cs-plate-back 6s ease-in-out infinite;
}

.cs-map__plate--middle {
  opacity: 0.72;
  transform: translate(20px, 12px);
  animation: cs-plate-middle 6s ease-in-out infinite;
}

@keyframes cs-plate-back {
  50% {
    transform: translate(-25px, 15px);
  }
}

@keyframes cs-plate-middle {
  50% {
    transform: translate(24px, 17px);
  }
}

.cs-map__mark {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 19px;
  display: grid;
  width: 132px;
  height: 132px;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 3px;
  background:
    radial-gradient(
      circle at 25% 15%,
      rgba(255, 222, 196, 0.52),
      transparent 35%
    ),
    linear-gradient(145deg, #ed8a45, #c25819 58%, #7f2c0d);
  box-shadow:
    0 28px 60px rgba(112, 39, 10, 0.25),
    0 8px 20px rgba(112, 39, 10, 0.13);
  animation: cs-company-float 5s ease-in-out infinite;
}

.cs-map__mark-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 12px 12px;
  mask-image: radial-gradient(circle at 50% 50%, #000, transparent 80%);
}

.cs-map__mark strong {
  position: relative;
  z-index: 2;
  color: #ffffff;
  font-size: 70px;
  font-weight: 430;
  letter-spacing: -0.08em;
  line-height: 1;
  text-shadow: 0 5px 22px rgba(91, 29, 7, 0.18);
}

@keyframes cs-company-float {
  50% {
    transform: translateY(-7px);
  }
}

.cs-map__company-label {
  position: absolute;
  right: 0;
  bottom: 4px;
  left: 0;
  display: grid;
  justify-items: center;
  line-height: 1.35;
  text-align: center;
}

.cs-map__company-label strong {
  color: var(--sd-text);
  font-size: 12px;
  font-weight: 760;
}

.cs-map__company-label span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.cs-map__company-ring {
  position: absolute;
  z-index: -1;
  top: -16px;
  left: 2px;
  width: 164px;
  height: 164px;
  border: 1px solid rgba(216, 111, 31, 0.2);
  border-radius: 50%;
  animation: cs-company-ring 2.8s ease-in-out infinite;
}

@keyframes cs-company-ring {
  50% {
    border-color: rgba(216, 111, 31, 0);
    transform: scale(1.15);
  }
}

/* Products */

.cs-map__products {
  position: absolute;
  z-index: 3;
  top: 50%;
  right: 6%;
  display: grid;
  width: 39%;
  gap: 11px;
  transform: translateY(-50%);
}

.cs-product {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 11px;
  min-height: 61px;
  overflow: hidden;
  padding: 9px 11px;
  border: 1px solid var(--sd-border);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    0 4px 12px rgba(15, 23, 42, 0.035),
    0 1px 2px rgba(15, 23, 42, 0.025);
  animation: cs-product-cycle 5.5s ease-in-out infinite;
  animation-delay: var(--product-delay);
}

@keyframes cs-product-cycle {
  0%,
  16% {
    border-color: rgba(216, 111, 31, 0.34);
    box-shadow:
      0 9px 22px rgba(216, 111, 31, 0.1),
      inset 3px 0 0 var(--sd-orange);
    transform: translateX(5px);
  }

  23%,
  100% {
    border-color: var(--sd-border);
    box-shadow:
      0 4px 12px rgba(15, 23, 42, 0.035),
      0 1px 2px rgba(15, 23, 42, 0.025);
    transform: none;
  }
}

.cs-product__icon {
  display: grid;
  width: 35px;
  height: 35px;
  place-items: center;
  border: 1px solid rgba(216, 111, 31, 0.16);
  border-radius: 7px;
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.cs-product__icon svg {
  width: 16px;
  height: 16px;
}

.cs-product__content {
  display: grid;
  min-width: 0;
  line-height: 1.3;
}

.cs-product__content strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 10px;
  font-weight: 730;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cs-product__content small {
  overflow: hidden;
  color: var(--sd-text-muted);
  font-size: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cs-product__role {
  padding: 4px 7px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: #fafafa;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6px;
  font-weight: 720;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cs-product__pulse {
  position: absolute;
  top: 50%;
  left: -5px;
  width: 9px;
  height: 9px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 4px rgba(216, 111, 31, 0.12);
  transform: translateY(-50%);
}

/* Map status */

.cs-map__status {
  position: absolute;
  z-index: 4;
  bottom: 17px;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 11px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 7px 20px rgba(15, 23, 42, 0.06);
  transform: translateX(-50%);
}

.cs-map__status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 4px var(--sd-accent-bg-soft);
  animation: cs-status-pulse 1.8s ease-in-out infinite;
}

@keyframes cs-status-pulse {
  50% {
    box-shadow: 0 0 0 8px rgba(216, 111, 31, 0);
  }
}

.cs-map__status > div {
  display: grid;
  line-height: 1.25;
}

.cs-map__status strong {
  color: var(--sd-text);
  font-size: 7px;
}

.cs-map__status small {
  color: var(--sd-text-muted);
  font-size: 6px;
}

/* Principles */

.cs__principles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(24px, 6vw, 78px);
  max-width: 850px;
  margin: 42px auto 0;
}

.cs-principle {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: 13px;
}

.cs-principle__icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid rgba(216, 111, 31, 0.17);
  border-radius: 9px;
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.cs-principle__icon svg {
  width: 18px;
  height: 18px;
}

.cs-principle h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 14px;
  font-weight: 730;
  letter-spacing: -0.018em;
}

.cs-principle p {
  margin: 5px 0 0;
  color: var(--sd-text-soft);
  font-size: 12px;
  line-height: 1.55;
}

/* Company link */

.cs__link {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 7px;
  margin: 31px auto 0;
  padding: 9px 13px;
  border: 1px solid var(--sd-orange);
  border-radius: 5px;
  background: var(--sd-orange);
  color: #ffffff;
  font-size: 11px;
  font-weight: 720;
  text-decoration: none;
  box-shadow:
    0 2px 4px rgba(173, 81, 23, 0.12),
    0 9px 22px rgba(216, 111, 31, 0.17);
  transition:
    background var(--sd-transition),
    border-color var(--sd-transition),
    box-shadow var(--sd-transition),
    transform var(--sd-transition);
}

.cs__link:hover {
  border-color: var(--sd-orange-dark);
  background: var(--sd-orange-dark);
  box-shadow:
    0 4px 8px rgba(173, 81, 23, 0.16),
    0 13px 28px rgba(216, 111, 31, 0.22);
  transform: translateY(-2px);
}

.cs__link svg {
  transition: transform var(--sd-transition-fast);
}

.cs__link:hover svg {
  transform: translateX(3px);
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .cs__eyebrow > span,
  .cs-map__connection-active,
  .cs-map__plate,
  .cs-map__mark,
  .cs-map__company-ring,
  .cs-product,
  .cs-map__status-dot {
    animation: none;
  }

  .cs-map__packet {
    display: none;
  }
}

/* Responsive */

@media (max-width: 900px) {
  .cs-map {
    min-height: 680px;
  }

  .cs-map__connections {
    display: none;
  }

  .cs-map::after {
    position: absolute;
    z-index: 1;
    top: 235px;
    bottom: 120px;
    left: 50%;
    width: 2px;
    background: linear-gradient(
      180deg,
      var(--sd-orange),
      rgba(216, 111, 31, 0.12)
    );
    content: "";
    transform: translateX(-50%);
  }

  .cs-map__company {
    top: 135px;
    left: 50%;
  }

  .cs-map__products {
    top: 305px;
    right: 50%;
    width: min(88%, 520px);
    transform: translateX(50%);
  }

  .cs-product__pulse {
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
  }

  .cs-map__status {
    bottom: 18px;
  }
}

@media (max-width: 680px) {
  .cs h2 {
    font-size: clamp(2.3rem, 11vw, 3rem);
  }

  .cs-map {
    min-height: 720px;
  }

  .cs-map__products {
    width: calc(100% - 28px);
  }

  .cs-product {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .cs-product__role {
    display: none;
  }

  .cs__principles {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .cs-map {
    min-height: 750px;
    border-radius: var(--sd-radius-lg);
  }

  .cs-map__company {
    transform: translate(-50%, -50%) scale(0.88);
  }

  .cs-product {
    min-height: 64px;
  }

  .cs-map__status {
    width: calc(100% - 28px);
    justify-content: center;
    border-radius: 8px;
  }
}
</style>
