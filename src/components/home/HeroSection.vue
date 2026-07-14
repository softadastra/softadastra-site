<template>
  <section id="top" class="hero">
    <div class="hero__inner">
      <div class="hero__message sd-reveal">
        <h1>
          Modern C++ tooling,
          <span>from code to cloud.</span>
          One unified workflow.
        </h1>

        <div class="hero__support">
          <p>
            Build native applications locally with Vix.cpp, extend them with
            Rix, and organize packages, lockfiles, projects, and build
            information through Softadastra Cloud.
          </p>

          <div class="hero__actions" aria-label="Hero actions">
            <BaseButton :href="links.cloud" arrow>Get started</BaseButton>
            <BaseButton href="#platform" variant="secondary">
              Explore the platform
            </BaseButton>
          </div>
        </div>
      </div>

      <HeroProductVisual class="sd-reveal sd-reveal-d2" />

      <!-- Logos marquee -->
      <div class="hero__ecosystem sd-reveal sd-reveal-d3">
        <p>Designed for the modern C++ ecosystem</p>

        <div
          class="hero__marquee"
          aria-label="Modern C++ companies and development ecosystems"
        >
          <div class="hero__marquee-track" aria-hidden="true">
            <!-- set A -->
            <span
              v-for="c in companies"
              :key="`a-${c.name}`"
              class="hero__logo"
            >
              <component :is="c.svg" />
              <strong>{{ c.name }}</strong>
            </span>
            <!-- set B (duplicate for seamless loop) -->
            <span
              v-for="c in companies"
              :key="`b-${c.name}`"
              class="hero__logo"
              aria-hidden="true"
            >
              <component :is="c.svg" />
              <strong>{{ c.name }}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from "vue";
import { links } from "../../data/links";

import BaseButton from "../ui/BaseButton.vue";
import HeroProductVisual from "./HeroProductVisual.vue";

/* ── SVG logos (monochrome, currentColor) ── */

const Microsoft = () =>
  h(
    "svg",
    {
      viewBox: "0 0 21 21",
      width: 20,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("rect", {
        x: 0,
        y: 0,
        width: 10,
        height: 10,
        fill: "#f25022",
        opacity: 0.85,
      }),
      h("rect", {
        x: 11,
        y: 0,
        width: 10,
        height: 10,
        fill: "#7fba00",
        opacity: 0.85,
      }),
      h("rect", {
        x: 0,
        y: 11,
        width: 10,
        height: 10,
        fill: "#00a4ef",
        opacity: 0.85,
      }),
      h("rect", {
        x: 11,
        y: 11,
        width: 10,
        height: 10,
        fill: "#ffb900",
        opacity: 0.85,
      }),
    ],
  );

const Nvidia = () =>
  h(
    "svg",
    {
      viewBox: "0 0 60 24",
      width: 52,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M22.6 8.4V6.7c.2 0 .4-.1.6-.1 2.2 0 3.6 1.7 3.6 4.6 0 3.1-1.4 4.9-3.7 4.9-.2 0-.4 0-.5-.1v-1.7c.1 0 .2.1.3.1 1.2 0 1.9-1.2 1.9-3.2 0-1.9-.7-3.1-2-3.1-.1.1-.2.2-.2.3zM20.4 16v-9.4h2.2V16h-2.2zM9.8 11.7v4.3H7.6V6.6h2.9c2.4 0 3.6 1 3.6 3 0 1.5-.7 2.5-2 2.9l2.7 3.5h-2.5l-2.3-4.3h-.2zm0-3.7v2.4h.5c.9 0 1.4-.4 1.4-1.2s-.5-1.2-1.4-1.2h-.5zM30.2 6.6h2.3l2.8 9.4h-2.3l-.5-1.9H30l-.5 1.9h-2.2l2.9-9.4zm1.2 2.4l-.9 3.3h1.8l-.9-3.3zM38.8 16l-2.8-9.4h2.3l1.7 6.3 1.7-6.3h2.2L41.1 16h-2.3zM45.1 6.6h5.7v1.8h-3.5v2h3.2v1.8h-3.2v2h3.6V16h-5.8V6.6zM52.5 6.6h2.4l1.8 3.1 1.8-3.1H61l-3 4.6 3.2 4.8h-2.5l-2-3.3-2 3.3h-2.4l3.2-4.8-3-4.6z",
      }),
      h("path", {
        d: "M4.1 10.1V9c0-.1.1-.1.1-.1 2.1-.7 4.3.4 4.3 3.2v.1C8.5 9.3 6.6 8 4.2 9v-.1c0-.1 0-.1.1-.1 1.8-.5 3.6.5 3.6 3v.1C7.9 9.6 6.3 8.4 4.1 10.1zM3.3 10.8v4.3c1.9-1.2 3.2-3 3.2-5.3-1.4.5-2.5 1.6-3.2 3zM3.3 8.8V7.5C1.5 8.8.3 10.8.3 13.1c0 1.3.4 2.5 1 3.4.5.8 1.2 1.4 2 1.8V16c-.5-.5-.9-1.2-1.1-2-.3-.7-.4-1.5-.4-2.3 0-1.2.5-2.3 1.5-2.9z",
      }),
    ],
  );

const AMD = () =>
  h(
    "svg",
    {
      viewBox: "0 0 60 24",
      width: 48,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M13.5 4L20 20h-4.2l-1.3-3.3H8.2L6.9 20H2.8L9.3 4h4.2zm-2 3.8L9.4 13.6h4.2L11.5 7.8zM21.2 4h6.7l3.5 10.2L34.9 4h6.6v16h-3.9V8.1L33 20h-4.1l-4.6-11.9V20h-3.1V4zM43.2 4h6.3c4.8 0 8.2 3.3 8.2 8s-3.4 8-8.2 8h-6.3V4zm4.1 3.4v9.2h2.1c2.6 0 4.2-1.8 4.2-4.6s-1.6-4.6-4.2-4.6h-2.1z",
      }),
    ],
  );

const Intel = () =>
  h(
    "svg",
    {
      viewBox: "0 0 60 24",
      width: 36,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M7.8 5.5h3.4v13H7.8V5.5zM9.5 2a2 2 0 110 4 2 2 0 010-4zM14 8.5h3.2v1.3c.8-1 2-1.6 3.3-1.6 2.5 0 4.2 1.7 4.2 4.5v5.8h-3.2v-5.3c0-1.4-.7-2.2-1.9-2.2s-2 .8-2 2.2v5.3H14V8.5zM26.5 8.5h3.2v10h-3.2v-10zM28.1 5a2 2 0 110 4 2 2 0 010-4zM31.5 8.5h2v-3h3.2v3H39v2.7h-2.3v4.1c0 .8.4 1.2 1.2 1.2h1.1v2.6h-1.8c-2.3 0-3.5-1.1-3.5-3.3V11.2h-2V8.5zM40.8 13.5c0-3 2.2-5.3 5.4-5.3 3 0 5.1 2 5.1 5v.9H44c.2 1.2 1.1 2 2.5 2 1 0 1.9-.5 2.4-1.2l2.2 1.5c-.9 1.4-2.6 2.2-4.6 2.2-3.4 0-5.7-2.2-5.7-5.1zm3.3-1.2h4.1c-.2-1.1-1-1.8-2-1.8s-1.9.7-2.1 1.8z",
      }),
    ],
  );

const GitHub = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: 20,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
      }),
    ],
  );

const JetBrains = () =>
  h(
    "svg",
    { viewBox: "0 0 24 24", width: 20, height: 20, "aria-hidden": "true" },
    [
      h("rect", { width: 24, height: 24, rx: 3, fill: "currentColor" }),
      h("rect", { x: 4, y: 4, width: 10, height: 3, fill: "#fff" }),
      h("rect", { x: 4, y: 9, width: 7, height: 3, fill: "#fff" }),
      h("rect", { x: 4, y: 17, width: 16, height: 3, fill: "#fff" }),
    ],
  );

const Google = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: 20,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
        fill: "#4285F4",
      }),
      h("path", {
        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
        fill: "#34A853",
      }),
      h("path", {
        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
        fill: "#FBBC05",
      }),
      h("path", {
        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
        fill: "#EA4335",
      }),
    ],
  );

const Apple = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: 18,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z",
      }),
    ],
  );

const Meta = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: 20,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973.14.58.32 1.098.56 1.524.493.855 1.176 1.39 1.982 1.39.97 0 1.723-.442 2.753-1.905.998-1.42 2.109-3.574 3.17-5.406l1.556-2.678c1.089-1.87 2.28-3.842 3.79-3.842 1.276 0 2.39.827 3.243 2.243a17.06 17.06 0 011.91 5.18c.158.756.264 1.582.264 2.41 0 1.152-.282 2.04-.712 2.6-.45.59-.99.91-1.699.91-.96 0-1.804-.572-2.832-2.1-.53-.78-1.1-1.8-1.73-2.98l-.664-1.24c-.48-.9-.96-1.8-1.44-2.62-.36-.62-.74-1.16-1.14-1.54L9 7.75l-.5.68c-.53.72-1.08 1.6-1.64 2.62l-1.22 2.2c-1.03 1.86-1.55 2.72-2.18 3.38C2.67 17.5 2.1 18 1.2 18c-.65 0-1.22-.31-1.63-.85C.19 16.58 0 15.6 0 14.45c0-2.68.76-5.49 2.15-7.56C3.41 4.93 5.1 3.9 6.915 3.9v.13zM17 4.27c1.512 0 2.856.927 3.95 2.44.61.838 1.12 1.876 1.51 3.044.37 1.11.54 2.27.54 3.45 0 1.94-.55 3.39-1.5 4.21-.67.58-1.39.85-2.1.85-.97 0-1.83-.56-2.75-1.87-.3-.42-.62-.93-.96-1.52l-.4-.7c.36.54.74 1.02 1.13 1.4.52.5 1.02.77 1.56.77.43 0 .83-.19 1.14-.57.41-.5.64-1.34.64-2.4 0-.93-.13-1.87-.4-2.8-.35-1.21-.9-2.28-1.55-3.06-.76-.92-1.61-1.4-2.45-1.4-.5 0-1 .2-1.48.58l-.18.15c.45.57.88 1.26 1.27 2.04L17 8.1l.13-.27c.34-.72.4-1.16.4-1.63 0-.36-.07-.7-.2-1.02L17 4.27z",
      }),
    ],
  );

const Amazon = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: 20,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M13.958 10.09c0 1.232.029 2.256-.59 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.698-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.87-1.233-1.274-1.808-2.105-1.73 1.764-2.953 2.292-5.19 2.292-2.652 0-4.714-1.637-4.714-4.91 0-2.556 1.383-4.298 3.357-5.149 1.713-.754 4.104-.891 5.93-1.097V6.5c0-.753.06-1.642-.384-2.295-.384-.583-1.132-.822-1.788-.822-1.213 0-2.292.623-2.557 1.913-.054.285-.261.57-.547.584l-3.074-.332c-.259-.06-.548-.266-.473-.66C5.74 2.202 8.923 1 11.783 1c1.46 0 3.369.389 4.52 1.498 1.46 1.36 1.319 3.174 1.319 5.148v4.665c0 1.402.582 2.016 1.131 2.772.19.266.231.584-.01.783l-1.6 1.929zm3.955 2.208C19.513 21.97 16.165 24 12.48 24c-4.93 0-9.348-1.82-12.702-4.849-.263-.237-.028-.561.289-.376 3.616 2.103 8.087 3.363 12.703 3.363 3.114 0 6.539-.647 9.688-1.985.475-.203.875.311.441.65zM21.5 21c-.36-.461-2.368-.218-3.27-.11-.274.035-.316-.205-.069-.378 1.601-1.127 4.231-.802 4.537-.424.306.378-.08 3.004-1.584 4.257-.23.193-.451.09-.348-.166.338-.839 1.097-2.72.734-3.179z",
      }),
    ],
  );

const Qualcomm = () =>
  h(
    "svg",
    {
      viewBox: "0 0 60 24",
      width: 50,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M30 2C18.95 2 10 10.95 10 22h3c0-9.37 7.63-17 17-17s17 7.63 17 17h3C50 10.95 41.05 2 30 2zm0 8c-6.63 0-12 5.37-12 12h3c0-4.97 4.03-9 9-9s9 4.03 9 9h3c0-6.63-5.37-12-12-12zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
      }),
    ],
  );

const ARM = () =>
  h(
    "svg",
    {
      viewBox: "0 0 60 24",
      width: 40,
      height: 20,
      fill: "currentColor",
      "aria-hidden": "true",
    },
    [
      h("path", {
        d: "M6.5 4h4.8l2.3 5.8L16 4h4.7L15 16H11L6.5 4zM21 4h3.2v12H21V4zM26 4h5.4c3 0 4.8 1.6 4.8 4.2 0 1.8-1 3.2-2.6 3.8L36.8 16h-3.7l-2.7-3.6H29V16h-3V4zm3 2.6v3.2h2c1.1 0 1.8-.6 1.8-1.6 0-1-.7-1.6-1.8-1.6H29zM38 4h5l2 8.4L47 4h5l2.5 12H51l-1.6-8.7L47 16h-4l-2.4-8.7L39 16h-3.5L38 4z",
      }),
    ],
  );

const companies = [
  { name: "Microsoft", svg: Microsoft },
  { name: "NVIDIA", svg: Nvidia },
  { name: "AMD", svg: AMD },
  { name: "Intel", svg: Intel },
  { name: "GitHub", svg: GitHub },
  { name: "JetBrains", svg: JetBrains },
  { name: "Google", svg: Google },
  { name: "Apple", svg: Apple },
  { name: "Meta", svg: Meta },
  { name: "Amazon", svg: Amazon },
  { name: "Qualcomm", svg: Qualcomm },
  { name: "Arm", svg: ARM },
];
</script>

<style scoped>
.hero {
  overflow: hidden;
  padding: 76px 0 0;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg);
}

.hero__inner {
  width: min(100% - 48px, 1200px);
  margin-inline: auto;
}

/* ---------- message ---------- */
.hero__message {
  display: grid;
  grid-template-columns: minmax(0, 1.22fr) minmax(320px, 0.72fr);
  gap: clamp(42px, 8vw, 112px);
  align-items: start;
  margin-bottom: 46px;
}

.hero h1 {
  max-width: 720px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(3rem, 5.25vw, 4.8rem);
  font-weight: 720;
  line-height: 0.99;
  letter-spacing: -0.055em;
}

.hero h1 span {
  display: block;
  color: var(--sd-orange);
}

.hero__support {
  max-width: 440px;
  padding-top: 6px;
}

.hero__support p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 14.5px;
  line-height: 1.62;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 21px;
}

.hero__actions :deep(.sd-button-primary) {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow:
    0 1px 2px rgba(173, 81, 23, 0.14),
    0 7px 18px rgba(216, 111, 31, 0.14);
}

.hero__actions :deep(.sd-button-primary:hover) {
  border-color: var(--sd-orange-dark);
  background: var(--sd-orange-dark);
  box-shadow:
    0 2px 4px rgba(173, 81, 23, 0.16),
    0 10px 25px rgba(216, 111, 31, 0.2);
}

.hero__actions :deep(.sd-button-secondary) {
  border-color: var(--sd-border-strong);
  background: var(--sd-bg);
  color: var(--sd-text-soft);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
}

.hero__actions :deep(.sd-button-secondary:hover) {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

/* ---------- ecosystem / marquee ---------- */
.hero__ecosystem {
  margin-top: 20px;
  padding: 28px 0 32px;
  border-top: 1px solid var(--sd-border);
}

.hero__ecosystem > p {
  margin: 0 0 20px;
  color: var(--sd-text-dim, var(--sd-text-muted));
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 720;
  letter-spacing: 0.09em;
  text-align: center;
  text-transform: uppercase;
}

/* marquee container — clips the scrolling track */
.hero__marquee {
  position: relative;
  overflow: hidden;
  /* fade edges */
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 10%,
    #000 90%,
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 10%,
    #000 90%,
    transparent 100%
  );
}

/* scrolling track — contains two identical sets for seamless loop */
.hero__marquee-track {
  display: flex;
  align-items: center;
  gap: 0;
  width: max-content;
  animation: marquee-scroll 38s linear infinite;
}

.hero__marquee:hover .hero__marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* individual logo pill */
.hero__logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 32px;
  color: var(--sd-text-muted);
  opacity: 0.55;
  filter: grayscale(1);
  white-space: nowrap;
  transition:
    opacity 220ms ease,
    filter 220ms ease,
    transform 220ms ease;
}

.hero__logo:hover {
  opacity: 0.95;
  filter: grayscale(0);
  transform: translateY(-1px);
}

.hero__logo strong {
  font-size: 13.5px;
  font-weight: 740;
  letter-spacing: -0.025em;
}

/* ---------- responsive ---------- */
@media (prefers-reduced-motion: reduce) {
  .hero__marquee-track {
    animation: none;
  }
}

@media (max-width: 920px) {
  .hero {
    padding-top: 54px;
  }

  .hero__message {
    grid-template-columns: 1fr;
    gap: 22px;
    margin-bottom: 32px;
  }

  .hero__support {
    max-width: 620px;
    padding-top: 0;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 42px 0 0;
  }

  .hero__inner {
    width: min(100% - 28px, 1200px);
  }

  .hero h1 {
    font-size: clamp(2.55rem, 12vw, 3.45rem);
  }

  .hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hero__actions :deep(.sd-button) {
    width: 100%;
  }

  .hero__marquee-track {
    animation-duration: 26s;
  }
}
</style>
