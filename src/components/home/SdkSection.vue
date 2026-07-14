<template>
  <section class="sdk-section sd-section">
    <div class="sd-section__inner sdk-section__inner">
      <header class="sdk-section__header sd-reveal">
        <p class="sdk-section__eyebrow">
          <span aria-hidden="true" />
          Softadastra SDK
        </p>

        <h2>A native C++ SDK for durable local applications.</h2>

        <p>
          Store application data locally, preserve it across restarts, and
          prepare it for synchronization without turning a native application
          into a cloud-dependent system.
        </p>
      </header>

      <div class="sdk-section__content">
        <div class="sdk-section__copy sd-reveal">
          <p class="sdk-section__copy-label">SDK capabilities</p>

          <div class="sdk-section__features">
            <article
              v-for="feature in features"
              :key="feature.title"
              class="sdk-feature"
            >
              <span class="sdk-feature__icon" aria-hidden="true">
                <component :is="feature.icon" />
              </span>

              <div>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </article>
          </div>

          <div class="sdk-section__actions">
            <a
              :href="links.sdkGithub"
              class="sdk-section__button sdk-section__button--primary"
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" />
                <path d="m3.3 8.3 8.7 4.8 8.7-4.8" />
                <path d="M12 13v8" />
              </svg>

              View SDK repository
            </a>

            <a
              :href="links.softadastraDocs"
              class="sdk-section__button sdk-section__button--secondary"
            >
              Read SDK documentation

              <svg
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
            </a>
          </div>

          <div class="sdk-section__metadata">
            <div>
              <span>Main API</span>
              <code>softadastra::sdk::Client</code>
            </div>

            <div>
              <span>CMake target</span>
              <code>softadastra::sdk</code>
            </div>
          </div>
        </div>

        <div
          class="sdk-visual sd-reveal sd-reveal-d2"
          aria-label="Animated example of the Softadastra C++ SDK storing persistent local data"
        >
          <div class="sdk-visual__pattern" aria-hidden="true" />
          <div class="sdk-visual__glow" aria-hidden="true" />

          <div class="sdk-code">
            <header class="sdk-code__bar">
              <div class="sdk-code__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div class="sdk-code__file">
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M15 3v4h4" />
                </svg>

                <span>main.cpp</span>
              </div>

              <span class="sdk-code__standard">C++20</span>
            </header>

            <div class="sdk-code__editor">
              <ol class="sdk-code__lines">
                <li>
                  <code>
                    <span class="code-preprocessor">#include</span>
                    <span class="code-header">
                      &lt;softadastra/sdk.hpp&gt;
                    </span>
                  </code>
                </li>

                <li>
                  <code>
                    <span class="code-keyword">using namespace</span>
                    <span class="code-namespace">softadastra::sdk</span
                    ><span class="code-operator">;</span>
                  </code>
                </li>

                <li>
                  <code>&nbsp;</code>
                </li>

                <li>
                  <code>
                    <span class="code-keyword">int</span>
                    <span class="code-function">main</span
                    ><span class="code-operator">()</span>
                  </code>
                </li>

                <li>
                  <code>
                    <span class="code-operator">{</span>
                  </code>
                </li>

                <li>
                  <code>
                    &nbsp;&nbsp;<span class="code-type">Client</span>
                    <span class="code-variable">client</span
                    ><span class="code-operator">{</span>
                  </code>
                </li>

                <li>
                  <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-type">
                      ClientOptions </span
                    ><span class="code-operator">::</span
                    ><span class="code-function">persistent</span
                    ><span class="code-operator">(</span>
                  </code>
                </li>

                <li>
                  <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                      class="code-string"
                    >
                      "native-service" </span
                    ><span class="code-operator">,</span>
                  </code>
                </li>

                <li>
                  <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                      class="code-string"
                    >
                      "data/app.wal"
                    </span>
                  </code>
                </li>

                <li>
                  <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-operator">)</span>
                  </code>
                </li>

                <li>
                  <code>
                    &nbsp;&nbsp;<span class="code-operator">};</span>
                  </code>
                </li>

                <li>
                  <code>&nbsp;</code>
                </li>

                <li class="sdk-code__operation sdk-code__operation--open">
                  <code>
                    &nbsp;&nbsp;<span class="code-variable">client</span
                    ><span class="code-operator">.</span
                    ><span class="code-function">open</span
                    ><span class="code-operator">();</span>
                  </code>
                </li>

                <li class="sdk-code__operation sdk-code__operation--put">
                  <code>
                    &nbsp;&nbsp;<span class="code-variable">client</span
                    ><span class="code-operator">.</span
                    ><span class="code-function">put</span
                    ><span class="code-operator">(</span
                    ><span class="code-string">"user:name"</span
                    ><span class="code-operator">,</span>
                    <span class="code-string">"Ada"</span
                    ><span class="code-operator">);</span>
                  </code>
                </li>

                <li class="sdk-code__operation sdk-code__operation--get">
                  <code>
                    &nbsp;&nbsp;<span class="code-keyword">const auto</span>
                    <span class="code-variable">name</span>
                    <span class="code-operator">=</span>
                    <span class="code-variable">client</span
                    ><span class="code-operator">.</span
                    ><span class="code-function">get</span
                    ><span class="code-operator">(</span
                    ><span class="code-string">"user:name"</span
                    ><span class="code-operator">);</span>
                  </code>
                </li>

                <li class="sdk-code__operation sdk-code__operation--close">
                  <code>
                    &nbsp;&nbsp;<span class="code-variable">client</span
                    ><span class="code-operator">.</span
                    ><span class="code-function">close</span
                    ><span class="code-operator">();</span>
                  </code>
                </li>

                <li>
                  <code>&nbsp;</code>
                </li>

                <li>
                  <code>
                    &nbsp;&nbsp;<span class="code-keyword">return</span>
                    <span class="code-number">0</span
                    ><span class="code-operator">;</span>
                  </code>
                </li>

                <li>
                  <code>
                    <span class="code-operator">}</span>
                  </code>
                </li>
              </ol>

              <span class="sdk-code__scan" aria-hidden="true" />
            </div>

            <footer class="sdk-code__footer">
              <div>
                <span class="sdk-code__footer-dot" aria-hidden="true" />
                Softadastra SDK
              </div>

              <div>
                <span>UTF-8</span>
                <span>Ln 15, Col 3</span>
              </div>
            </footer>
          </div>

          <div class="sdk-status sdk-status--storage">
            <span class="sdk-status__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
              </svg>
            </span>

            <div>
              <span>Local storage</span>
              <strong>data/app.wal</strong>
            </div>

            <span class="sdk-status__state"> Open </span>
          </div>

          <div class="sdk-status sdk-status--write">
            <span class="sdk-status__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <rect x="4" y="18" width="16" height="3" rx="1" />
              </svg>
            </span>

            <div>
              <span>Write operation</span>
              <strong>user:name → Ada</strong>
            </div>

            <span class="sdk-status__state"> Saved </span>
          </div>

          <div class="sdk-status sdk-status--durable">
            <span class="sdk-status__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z" />
                <path d="m8.5 12 2.2 2.2 4.8-5" />
              </svg>
            </span>

            <div>
              <span>Durability</span>
              <strong>Available after restart</strong>
            </div>

            <span class="sdk-status__state"> Verified </span>
          </div>

          <div class="sdk-visual__flow" aria-hidden="true">
            <span class="sdk-visual__flow-line" />
            <span class="sdk-visual__flow-packet" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from "vue";
import { links } from "../../data/links";

const IconLocal = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "13",
        rx: "2",
      }),
      h("path", { d: "M8 21h8M12 17v4" }),
    ],
  );

const IconDurable = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z",
      }),
      h("path", { d: "m8.5 12 2.2 2.2 4.8-5" }),
    ],
  );

const IconSync = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("path", { d: "M20 7h-6V1" }),
      h("path", { d: "m20 7-4-4a8 8 0 1 0 2 8" }),
    ],
  );

const features = [
  {
    title: "Local-first storage",
    description:
      "Application data is written and read directly on the local device without requiring a permanent network connection.",
    icon: IconLocal,
  },
  {
    title: "Durable by default",
    description:
      "Important state survives process restarts through a persistent write-ahead log owned by the application.",
    icon: IconDurable,
  },
  {
    title: "Ready for synchronization",
    description:
      "The same local state model can later participate in controlled synchronization across trusted nodes.",
    icon: IconSync,
  },
];
</script>

<style scoped>
.sdk-section {
  position: relative;
  overflow: hidden;
  border-block: 1px solid var(--sd-border);
  background: #ffffff;
}

.sdk-section::before {
  position: absolute;
  top: -230px;
  left: 50%;
  width: 720px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(104, 93, 222, 0.055),
    transparent 68%
  );
  content: "";
  pointer-events: none;
  transform: translateX(-50%);
}

.sdk-section__inner {
  position: relative;
  z-index: 1;
}

/* Header */

.sdk-section__header {
  max-width: 760px;
  margin: 0 auto clamp(66px, 9vw, 108px);
  text-align: center;
}

.sdk-section__eyebrow {
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

.sdk-section__eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 4px var(--sd-accent-bg-soft);
}

.sdk-section h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(34px, 4.5vw, 55px);
  font-weight: 720;
  line-height: 1.02;
  letter-spacing: -0.052em;
}

.sdk-section__header > p:not(.sdk-section__eyebrow) {
  max-width: 670px;
  margin: 15px auto 0;
  color: var(--sd-text-soft);
  font-size: 14.5px;
  line-height: 1.62;
}

/* Main composition */

.sdk-section__content {
  display: grid;
  grid-template-columns: minmax(290px, 0.7fr) minmax(560px, 1.3fr);
  gap: clamp(44px, 8vw, 112px);
  align-items: center;
}

/* Copy */

.sdk-section__copy {
  padding-block: 20px;
}

.sdk-section__copy-label {
  margin: 0 0 28px;
  color: #6764dd;
  font-size: 21px;
  font-weight: 730;
  letter-spacing: -0.025em;
}

.sdk-section__features {
  display: grid;
  gap: 22px;
}

.sdk-feature {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.sdk-feature__icon {
  display: grid;
  width: 35px;
  height: 35px;
  place-items: center;
  border: 1px solid rgba(103, 100, 221, 0.15);
  border-radius: 8px;
  background: #f3f2ff;
  color: #6764dd;
}

.sdk-feature__icon svg {
  width: 17px;
  height: 17px;
}

.sdk-feature h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 14px;
  font-weight: 720;
  letter-spacing: -0.015em;
}

.sdk-feature p {
  max-width: 390px;
  margin: 4px 0 0;
  color: var(--sd-text-soft);
  font-size: 12px;
  line-height: 1.55;
}

.sdk-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 30px;
}

.sdk-section__button {
  display: inline-flex;
  min-height: 39px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 13px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 710;
  text-decoration: none;
  transition:
    border-color var(--sd-transition),
    background var(--sd-transition),
    color var(--sd-transition),
    box-shadow var(--sd-transition),
    transform var(--sd-transition);
}

.sdk-section__button--primary {
  border: 1px solid #6764dd;
  background: #6764dd;
  color: #ffffff;
  box-shadow:
    0 2px 4px rgba(74, 70, 178, 0.12),
    0 9px 22px rgba(103, 100, 221, 0.18);
}

.sdk-section__button--primary:hover {
  border-color: #5551c5;
  background: #5551c5;
  box-shadow:
    0 3px 6px rgba(74, 70, 178, 0.16),
    0 13px 28px rgba(103, 100, 221, 0.23);
  transform: translateY(-1px);
}

.sdk-section__button--secondary {
  border: 1px solid var(--sd-border-strong);
  background: #ffffff;
  color: var(--sd-text-soft);
}

.sdk-section__button--secondary:hover {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

.sdk-section__button svg {
  flex-shrink: 0;
}

.sdk-section__metadata {
  display: grid;
  gap: 9px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--sd-border);
}

.sdk-section__metadata > div {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
}

.sdk-section__metadata span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 720;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.sdk-section__metadata code {
  overflow: hidden;
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 9px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* SDK visual */

.sdk-visual {
  position: relative;
  min-height: 570px;
  overflow: hidden;
  border-radius: 3px;
  background:
    radial-gradient(
      circle at 18% 7%,
      rgba(174, 163, 255, 0.54),
      transparent 31%
    ),
    radial-gradient(circle at 82% 91%, rgba(40, 35, 99, 0.58), transparent 39%),
    linear-gradient(145deg, #7773db 0%, #4f4b9e 50%, #232052 100%);
  box-shadow:
    0 3px 8px rgba(30, 28, 79, 0.08),
    0 28px 75px rgba(30, 28, 79, 0.2);
}

.sdk-visual::before {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent 42%),
    linear-gradient(180deg, transparent 55%, rgba(15, 13, 51, 0.25));
  content: "";
  pointer-events: none;
}

.sdk-visual__pattern {
  position: absolute;
  top: -4%;
  left: 16%;
  width: 74%;
  height: 42%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 8px 8px;
  mask-image: radial-gradient(circle at 50% 25%, #000, transparent 72%);
  opacity: 0.62;
  pointer-events: none;
}

.sdk-visual__glow {
  position: absolute;
  top: 12%;
  left: 50%;
  width: 68%;
  height: 48%;
  border-radius: 50%;
  background: rgba(183, 175, 255, 0.17);
  filter: blur(55px);
  pointer-events: none;
  transform: translateX(-50%);
}

/* Code window */

.sdk-code {
  position: absolute;
  z-index: 2;
  top: 9%;
  right: -1px;
  width: 89%;
  height: 82%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-right: 0;
  border-radius: 6px 0 0 6px;
  background: #f7f8fb;
  box-shadow:
    0 30px 70px rgba(18, 16, 58, 0.34),
    0 8px 22px rgba(18, 16, 58, 0.19);
}

.sdk-code__bar {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  min-height: 42px;
  align-items: center;
  gap: 12px;
  padding: 0 13px;
  border-bottom: 1px solid #dfe2e9;
  background: #ffffff;
}

.sdk-code__dots {
  display: flex;
  gap: 5px;
}

.sdk-code__dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.sdk-code__dots span:nth-child(1) {
  background: #dc6959;
}

.sdk-code__dots span:nth-child(2) {
  background: #e0ad37;
}

.sdk-code__dots span:nth-child(3) {
  background: #60a55d;
}

.sdk-code__file {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #5d6470;
  font-family: var(--sd-font-mono);
  font-size: 8px;
}

.sdk-code__file svg {
  color: #8b91a0;
}

.sdk-code__standard {
  padding: 3px 6px;
  border: 1px solid #e0e3e9;
  border-radius: 4px;
  background: #f8f9fb;
  color: #7f8591;
  font-family: var(--sd-font-mono);
  font-size: 6px;
  font-weight: 720;
}

/* Code editor */

.sdk-code__editor {
  position: relative;
  height: calc(100% - 70px);
  overflow: hidden;
  padding: 12px 0;
  background: linear-gradient(90deg, #f0f2f6 0, #f0f2f6 42px, #f7f8fb 42px);
}

.sdk-code__lines {
  margin: 0;
  padding: 0;
  counter-reset: sdk-line;
  list-style: none;
}

.sdk-code__lines li {
  position: relative;
  min-height: 20px;
  padding: 0 14px 0 55px;
  counter-increment: sdk-line;
  font-family: var(--sd-font-mono);
  font-size: 8.1px;
  line-height: 20px;
  white-space: nowrap;
}

.sdk-code__lines li::before {
  position: absolute;
  left: 0;
  width: 34px;
  color: #acb1bc;
  content: counter(sdk-line);
  font-size: 7px;
  text-align: right;
}

.sdk-code__lines code {
  color: #303540;
  font-family: inherit;
}

.code-preprocessor,
.code-keyword {
  color: #5555e5;
}

.code-header,
.code-string {
  color: #44a16d;
}

.code-namespace,
.code-type {
  color: #2c67c5;
}

.code-variable {
  color: #252a32;
}

.code-function {
  color: #a053b8;
}

.code-operator {
  color: #6f7580;
}

.code-number {
  color: #d45c5c;
}

.sdk-code__operation {
  overflow: hidden;
}

.sdk-code__operation::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(103, 100, 221, 0.09),
    rgba(103, 100, 221, 0.025)
  );
  border-left: 2px solid #6764dd;
  content: "";
  opacity: 0;
  animation: sdk-code-highlight 8s ease-in-out infinite;
}

.sdk-code__operation--open::after {
  animation-delay: 0s;
}

.sdk-code__operation--put::after {
  animation-delay: 2s;
}

.sdk-code__operation--get::after {
  animation-delay: 4s;
}

.sdk-code__operation--close::after {
  animation-delay: 6s;
}

@keyframes sdk-code-highlight {
  0%,
  20% {
    opacity: 1;
  }

  25%,
  100% {
    opacity: 0;
  }
}

.sdk-code__scan {
  position: absolute;
  right: 0;
  left: 42px;
  height: 24px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(103, 100, 221, 0.06),
    transparent
  );
  pointer-events: none;
  animation: sdk-code-scan 8s ease-in-out infinite;
}

@keyframes sdk-code-scan {
  0%,
  8% {
    top: 270px;
    opacity: 0;
  }

  12% {
    opacity: 1;
  }

  25% {
    top: 290px;
  }

  37% {
    top: 310px;
  }

  50% {
    top: 330px;
  }

  62% {
    top: 350px;
  }

  75%,
  88% {
    top: 350px;
    opacity: 1;
  }

  100% {
    top: 270px;
    opacity: 0;
  }
}

/* Code footer */

.sdk-code__footer {
  display: flex;
  min-height: 28px;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 0 12px;
  border-top: 1px solid #dfe2e9;
  background: #ffffff;
  color: #8c929e;
  font-family: var(--sd-font-mono);
  font-size: 6px;
}

.sdk-code__footer > div {
  display: flex;
  align-items: center;
  gap: 9px;
}

.sdk-code__footer-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #5bad76;
}

/* Floating SDK states */

.sdk-status {
  position: absolute;
  z-index: 4;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 9px;
  min-width: 255px;
  padding: 10px 11px;
  border: 1px solid rgba(31, 31, 31, 0.09);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.97);
  box-shadow:
    0 18px 40px rgba(18, 16, 58, 0.23),
    0 4px 12px rgba(18, 16, 58, 0.12);
  opacity: 0;
  transform: translateY(8px);
  animation: sdk-status-cycle 8s ease-in-out infinite;
}

.sdk-status--storage {
  bottom: 28%;
  left: 4%;
  animation-delay: 0s;
}

.sdk-status--write {
  bottom: 17%;
  left: 7%;
  animation-delay: 2.65s;
}

.sdk-status--durable {
  right: 4%;
  bottom: 5%;
  animation-delay: 5.3s;
}

@keyframes sdk-status-cycle {
  0%,
  5% {
    opacity: 0;
    transform: translateY(8px);
  }

  10%,
  27% {
    opacity: 1;
    transform: none;
  }

  33%,
  100% {
    opacity: 0;
    transform: translateY(-5px);
  }
}

.sdk-status__icon {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 7px;
  background: #efefff;
  color: #6764dd;
}

.sdk-status__icon svg {
  width: 15px;
  height: 15px;
}

.sdk-status > div {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.sdk-status > div span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6px;
  font-weight: 710;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.sdk-status > div strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sdk-status__state {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 6px;
  border-radius: 999px;
  background: var(--sd-green-bg);
  color: var(--sd-green);
  font-size: 6px;
  font-weight: 720;
}

.sdk-status__state::before {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  content: "";
}

/* Animated data flow */

.sdk-visual__flow {
  position: absolute;
  z-index: 3;
  right: 2%;
  bottom: 17%;
  left: 4%;
  height: 2px;
}

.sdk-visual__flow-line {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.12),
    rgba(184, 177, 255, 0.72),
    rgba(255, 255, 255, 0.12)
  );
}

.sdk-visual__flow-packet {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 8px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: #6764dd;
  box-shadow: 0 0 14px rgba(255, 255, 255, 0.65);
  transform: translateY(-50%);
  animation: sdk-data-packet 8s var(--sd-ease-out) infinite;
}

@keyframes sdk-data-packet {
  0%,
  8% {
    left: 0;
  }

  31% {
    left: 34%;
  }

  62% {
    left: 68%;
  }

  88% {
    left: 100%;
  }

  100% {
    left: 0;
  }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .sdk-code__operation::after,
  .sdk-code__scan,
  .sdk-status,
  .sdk-visual__flow-packet {
    animation: none;
  }

  .sdk-status {
    opacity: 1;
    transform: none;
  }

  .sdk-status--storage {
    display: grid;
  }

  .sdk-status--write,
  .sdk-status--durable {
    display: none;
  }
}

/* Responsive */

@media (max-width: 1040px) {
  .sdk-section__content {
    grid-template-columns: minmax(260px, 0.72fr) minmax(470px, 1.28fr);
    gap: 42px;
  }

  .sdk-visual {
    min-height: 530px;
  }

  .sdk-code {
    width: 92%;
  }
}

@media (max-width: 900px) {
  .sdk-section__header {
    margin-bottom: 54px;
  }

  .sdk-section__content {
    grid-template-columns: 1fr;
  }

  .sdk-section__copy {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    max-width: 680px;
    padding-block: 0;
  }

  .sdk-section__features {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .sdk-feature {
    grid-template-columns: 1fr;
    padding: 16px;
    border: 1px solid var(--sd-border);
    border-radius: 10px;
    background: #ffffff;
    box-shadow: var(--sd-shadow-soft);
  }

  .sdk-feature p {
    max-width: none;
  }

  .sdk-visual {
    min-height: 570px;
  }
}

@media (max-width: 680px) {
  .sdk-section h2 {
    font-size: clamp(2.3rem, 11vw, 3rem);
  }

  .sdk-section__features {
    grid-template-columns: 1fr;
  }

  .sdk-section__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .sdk-section__button {
    width: 100%;
  }

  .sdk-visual {
    min-height: 510px;
  }

  .sdk-code {
    top: 6%;
    width: 96%;
    height: 84%;
  }

  .sdk-code__lines li {
    padding-right: 8px;
    padding-left: 48px;
    font-size: 6.9px;
  }

  .sdk-status {
    min-width: 220px;
  }

  .sdk-status--storage,
  .sdk-status--write {
    left: 2%;
  }

  .sdk-status--durable {
    right: 2%;
  }
}

@media (max-width: 480px) {
  .sdk-section__metadata > div {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .sdk-visual {
    min-height: 470px;
  }

  .sdk-code {
    width: calc(100% - 14px);
  }

  .sdk-code__editor {
    background: linear-gradient(90deg, #f0f2f6 0, #f0f2f6 34px, #f7f8fb 34px);
  }

  .sdk-code__lines li {
    min-height: 18px;
    padding-left: 40px;
    font-size: 5.8px;
    line-height: 18px;
  }

  .sdk-code__lines li::before {
    width: 27px;
    font-size: 5.8px;
  }

  .sdk-status {
    min-width: 190px;
    max-width: calc(100% - 24px);
    padding: 8px;
  }

  .sdk-status__state {
    display: none;
  }
}
/* ==========================================================================
   Softadastra orange theme override
   Place at the end of SdkSection.vue <style scoped>
   ========================================================================== */

.sdk-section {
  --sdk-orange: var(--sd-orange);
  --sdk-orange-strong: var(--sd-orange-strong);
  --sdk-orange-dark: var(--sd-orange-dark);

  --sdk-orange-soft: var(--sd-accent-bg-soft);
  --sdk-orange-muted: var(--sd-accent-bg);
}

/* Background glow */

.sdk-section::before {
  background: radial-gradient(
    circle,
    rgba(216, 111, 31, 0.075),
    transparent 68%
  );
}

/* Copy accents */

.sdk-section__copy-label {
  color: var(--sdk-orange);
}

.sdk-feature__icon {
  border-color: rgba(216, 111, 31, 0.18);
  background: var(--sdk-orange-soft);
  color: var(--sdk-orange-dark);
}

/* Primary button */

.sdk-section__button--primary {
  border-color: var(--sdk-orange);
  background: var(--sdk-orange);
  color: #ffffff;

  box-shadow:
    0 2px 4px rgba(173, 81, 23, 0.14),
    0 9px 22px rgba(216, 111, 31, 0.19);
}

.sdk-section__button--primary:hover {
  border-color: var(--sdk-orange-dark);
  background: var(--sdk-orange-dark);

  box-shadow:
    0 3px 6px rgba(173, 81, 23, 0.17),
    0 14px 30px rgba(216, 111, 31, 0.24);
}

/* Main SDK visual */

.sdk-visual {
  background:
    radial-gradient(
      circle at 18% 7%,
      rgba(255, 193, 145, 0.48),
      transparent 31%
    ),
    radial-gradient(circle at 82% 91%, rgba(89, 31, 10, 0.52), transparent 39%),
    linear-gradient(145deg, #e58a48 0%, #c85d1b 48%, #5d250e 100%);

  box-shadow:
    0 3px 8px rgba(99, 39, 12, 0.1),
    0 28px 75px rgba(113, 43, 12, 0.24);
}

.sdk-visual::before {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 42%),
    linear-gradient(180deg, transparent 55%, rgba(65, 21, 6, 0.28));
}

.sdk-visual__glow {
  background: rgba(255, 184, 132, 0.2);
}

/* Code window shadow */

.sdk-code {
  box-shadow:
    0 30px 70px rgba(78, 27, 7, 0.32),
    0 8px 22px rgba(78, 27, 7, 0.18);
}

/* Active code lines */

.sdk-code__operation::after {
  border-left-color: var(--sdk-orange);

  background: linear-gradient(
    90deg,
    rgba(216, 111, 31, 0.12),
    rgba(216, 111, 31, 0.025)
  );
}

.sdk-code__scan {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(216, 111, 31, 0.09),
    transparent
  );
}

/* Syntax colors previously blue or purple */

.sdk-section .code-preprocessor,
.sdk-section .code-keyword {
  color: var(--sdk-orange-dark);
}

.sdk-section .code-namespace,
.sdk-section .code-type {
  color: #b95919;
}

.sdk-section .code-function {
  color: #d86f1f;
}

.sdk-section .code-header,
.sdk-section .code-string {
  color: #3d9160;
}

/* Floating status cards */

.sdk-status {
  box-shadow:
    0 18px 40px rgba(82, 29, 8, 0.22),
    0 4px 12px rgba(82, 29, 8, 0.12);
}

.sdk-status__icon {
  background: var(--sdk-orange-soft);
  color: var(--sdk-orange-dark);
}

/* Animated data route */

.sdk-visual__flow-line {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.14),
    rgba(255, 191, 142, 0.88),
    rgba(255, 255, 255, 0.14)
  );
}

.sdk-visual__flow-packet {
  border-color: #ffffff;
  background: var(--sdk-orange);

  box-shadow:
    0 0 0 4px rgba(216, 111, 31, 0.18),
    0 0 16px rgba(255, 255, 255, 0.58);
}

/* Editor footer indicator */

.sdk-code__footer-dot {
  background: var(--sdk-orange);
}
</style>
