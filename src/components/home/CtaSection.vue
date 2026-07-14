<template>
  <section class="cta-section">
    <div class="cta-section__pattern" aria-hidden="true" />
    <div class="cta-section__glow" aria-hidden="true" />

    <div class="cta-section__inner">
      <div class="cta-section__copy sd-reveal">
        <p class="cta-section__eyebrow">
          <span aria-hidden="true" />
          Begin here
        </p>

        <h2>
          Start building with
          <span>Vix.cpp.</span>
        </h2>

        <p class="cta-section__intro">
          Create a native C++ application, build it locally, and adopt the rest
          of the Softadastra platform only when your project needs it.
        </p>

        <div class="cta-section__actions">
          <BaseButton :href="links.vix" arrow>
            Get started with Vix.cpp
          </BaseButton>

          <BaseButton :href="links.vixGithub" variant="secondary">
            View the repository
          </BaseButton>
        </div>

        <div class="cta-section__facts">
          <span>
            <i aria-hidden="true">✓</i>
            Native C++
          </span>

          <span>
            <i aria-hidden="true">✓</i>
            Local builds
          </span>

          <span>
            <i aria-hidden="true">✓</i>
            Open tooling
          </span>
        </div>
      </div>

      <div
        class="cta-terminal sd-reveal sd-reveal-d2"
        aria-label="Animated Vix.cpp project creation and local build"
      >
        <header class="cta-terminal__header">
          <div class="cta-terminal__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div class="cta-terminal__title">
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="m7 9 3 3-3 3" />
              <path d="M12 15h5" />
            </svg>

            <span>native-service</span>
          </div>

          <span class="cta-terminal__mode"> local </span>
        </header>

        <div class="cta-terminal__body">
          <div
            v-for="(step, index) in commands"
            :key="step.command"
            class="cta-command"
            :style="{ '--delay': `${index * 1.8}s` }"
          >
            <div class="cta-command__input">
              <span>$</span>
              <code>{{ step.command }}</code>
            </div>

            <div class="cta-command__output">
              <span>{{ step.icon }}</span>
              <code>{{ step.output }}</code>
            </div>
          </div>

          <div class="cta-terminal__success">
            <span class="cta-terminal__success-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            </span>

            <div>
              <span>Application running</span>
              <strong>http://localhost:8080</strong>
            </div>

            <span class="cta-terminal__live">
              <i aria-hidden="true" />
              Live
            </span>
          </div>

          <div class="cta-terminal__cursor" aria-hidden="true">
            <span>$</span>
            <i />
          </div>
        </div>

        <footer class="cta-terminal__footer">
          <span>
            <i aria-hidden="true" />
            GCC 14
          </span>

          <span>C++20</span>
          <span>linux-x86_64</span>

          <strong>0 errors</strong>
        </footer>

        <span class="cta-terminal__scan" aria-hidden="true" />
      </div>
    </div>

    <div class="cta-section__bottom sd-reveal sd-reveal-d3">
      <span>01</span>

      <p>
        Start with the runtime. Extend with Rix. Connect the team when the
        project is ready.
      </p>

      <svg
        viewBox="0 0 24 24"
        width="17"
        height="17"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

import BaseButton from "../ui/BaseButton.vue";

const commands = [
  {
    command: "vix new native-service --app",
    icon: "→",
    output: "Application structure created",
  },
  {
    command: "cd native-service",
    icon: "→",
    output: "Project workspace selected",
  },
  {
    command: "vix run",
    icon: "✓",
    output: "Build completed and server started",
  },
];
</script>

<style scoped>
.cta-section {
  --cta-bg: #102f28;
  --cta-bg-deep: #091d19;
  --cta-surface: #12251f;
  --cta-border: rgba(255, 255, 255, 0.11);

  position: relative;
  overflow: hidden;
  padding: clamp(76px, 10vw, 124px) 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  background:
    radial-gradient(
      circle at 13% 15%,
      rgba(216, 111, 31, 0.22),
      transparent 31%
    ),
    radial-gradient(
      circle at 85% 74%,
      rgba(71, 151, 122, 0.16),
      transparent 34%
    ),
    linear-gradient(
      145deg,
      var(--cta-bg) 0%,
      #0e2923 48%,
      var(--cta-bg-deep) 100%
    );

  color: #ffffff;
}

.cta-section__pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 15%,
    #000 88%,
    transparent
  );
  pointer-events: none;
}

.cta-section__glow {
  position: absolute;
  top: 7%;
  left: 12%;
  width: 390px;
  height: 390px;
  border-radius: 50%;
  background: rgba(216, 111, 31, 0.1);
  filter: blur(80px);
  pointer-events: none;
}

.cta-section__inner {
  position: relative;
  z-index: 2;
  display: grid;
  width: min(100% - 48px, var(--sd-container));
  grid-template-columns: minmax(0, 0.86fr) minmax(500px, 1.14fr);
  gap: clamp(44px, 8vw, 110px);
  align-items: center;
  margin-inline: auto;
}

/* Copy */

.cta-section__copy {
  padding-block: 24px;
}

.cta-section__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 16px;
  color: #f4b082;
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cta-section__eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sd-orange);
  box-shadow: 0 0 0 4px rgba(216, 111, 31, 0.17);
  animation: cta-eyebrow-pulse 2s ease-in-out infinite;
}

@keyframes cta-eyebrow-pulse {
  50% {
    box-shadow: 0 0 0 9px rgba(216, 111, 31, 0);
  }
}

.cta-section h2 {
  max-width: 600px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(42px, 5vw, 66px);
  font-weight: 720;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.cta-section h2 span {
  display: block;
  color: #f19350;
}

.cta-section__intro {
  max-width: 540px;
  margin: 20px 0 0;
  color: rgba(240, 246, 243, 0.72);
  font-size: 14.5px;
  line-height: 1.66;
}

.cta-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.cta-section__actions :deep(.sd-button-primary) {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;

  box-shadow:
    0 2px 4px rgba(71, 24, 6, 0.16),
    0 12px 28px rgba(216, 111, 31, 0.25);
}

.cta-section__actions :deep(.sd-button-primary:hover) {
  border-color: var(--sd-orange-strong);
  background: var(--sd-orange-strong);

  box-shadow:
    0 4px 8px rgba(71, 24, 6, 0.2),
    0 16px 36px rgba(216, 111, 31, 0.31);
}

.cta-section__actions :deep(.sd-button-secondary) {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.055);
  color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
}

.cta-section__actions :deep(.sd-button-secondary:hover) {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.cta-section__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
  margin-top: 29px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-section__facts span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(234, 242, 239, 0.68);
  font-size: 9px;
  font-weight: 650;
}

.cta-section__facts i {
  display: grid;
  width: 17px;
  height: 17px;
  place-items: center;
  border-radius: 50%;
  background: rgba(85, 201, 144, 0.13);
  color: #67d39d;
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
}

/* Terminal */

.cta-terminal {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 13px;
  background: #0b0e11;

  box-shadow:
    0 38px 90px rgba(0, 0, 0, 0.42),
    0 12px 36px rgba(0, 0, 0, 0.26);
}

.cta-terminal__header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  min-height: 48px;
  align-items: center;
  gap: 13px;
  padding: 0 14px;
  border-bottom: 1px solid #262c32;
  background: #15191e;
}

.cta-terminal__dots {
  display: flex;
  gap: 5px;
}

.cta-terminal__dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.cta-terminal__dots span:nth-child(1) {
  background: #dd6a58;
}

.cta-terminal__dots span:nth-child(2) {
  background: #dba840;
}

.cta-terminal__dots span:nth-child(3) {
  background: #5ea85f;
}

.cta-terminal__title {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #9aa3ad;
  font-family: var(--sd-font-mono);
  font-size: 8px;
}

.cta-terminal__mode {
  padding: 3px 6px;
  border: 1px solid #30373f;
  border-radius: 4px;
  color: #737d88;
  font-family: var(--sd-font-mono);
  font-size: 6px;
  text-transform: uppercase;
}

.cta-terminal__body {
  min-height: 330px;
  padding: 25px 22px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), #0b0e11;
  background-size: 100% 31px;
}

.cta-command {
  min-height: 82px;
  opacity: 0;
  animation: cta-command-cycle 6.8s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes cta-command-cycle {
  0%,
  7% {
    opacity: 0;
    transform: translateX(-7px);
  }

  14%,
  82% {
    opacity: 1;
    transform: none;
  }

  94%,
  100% {
    opacity: 0;
  }
}

.cta-command__input,
.cta-command__output {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  align-items: center;
  min-height: 29px;
  font-family: var(--sd-font-mono);
  font-size: 9px;
}

.cta-command__input span {
  color: var(--sd-orange);
  font-weight: 800;
}

.cta-command__input code {
  color: #e2e6ea;
}

.cta-command__output span,
.cta-command__output code {
  color: #6f7984;
}

.cta-command:last-of-type .cta-command__output span,
.cta-command:last-of-type .cta-command__output code {
  color: #5fc98f;
}

.cta-terminal code {
  overflow: hidden;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cta-terminal__success {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  padding: 12px;
  border: 1px solid rgba(85, 201, 144, 0.18);
  border-radius: 8px;
  background: rgba(85, 201, 144, 0.075);
  opacity: 0;
  animation: cta-success-cycle 6.8s ease-in-out infinite;
  animation-delay: 4.8s;
}

@keyframes cta-success-cycle {
  0%,
  9% {
    opacity: 0;
    transform: translateY(6px);
  }

  18%,
  78% {
    opacity: 1;
    transform: none;
  }

  92%,
  100% {
    opacity: 0;
  }
}

.cta-terminal__success-icon {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 7px;
  background: rgba(85, 201, 144, 0.13);
  color: #63cf96;
}

.cta-terminal__success-icon svg {
  width: 15px;
  height: 15px;
}

.cta-terminal__success > div {
  display: grid;
  min-width: 0;
  line-height: 1.3;
}

.cta-terminal__success span:not(.cta-terminal__success-icon) {
  color: #78848e;
  font-size: 6.5px;
  text-transform: uppercase;
}

.cta-terminal__success strong {
  overflow: hidden;
  color: #d8e0dc;
  font-family: var(--sd-font-mono);
  font-size: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cta-terminal__live {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #63cf96 !important;
  font-size: 6.5px !important;
  font-weight: 720;
}

.cta-terminal__live i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation: cta-live-pulse 1.6s ease-in-out infinite;
}

@keyframes cta-live-pulse {
  50% {
    box-shadow: 0 0 0 7px rgba(85, 201, 144, 0);
  }
}

.cta-terminal__cursor {
  display: flex;
  min-height: 30px;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: var(--sd-orange);
  font-family: var(--sd-font-mono);
  font-size: 9px;
}

.cta-terminal__cursor i {
  width: 7px;
  height: 13px;
  background: #dce2e6;
  animation: cta-cursor 0.9s steps(1) infinite;
}

@keyframes cta-cursor {
  50% {
    opacity: 0;
  }
}

.cta-terminal__footer {
  display: flex;
  min-height: 39px;
  align-items: center;
  gap: 13px;
  padding: 0 14px;
  border-top: 1px solid #262c32;
  background: #13171b;
  color: #68727d;
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.cta-terminal__footer span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.cta-terminal__footer i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #5fc98f;
}

.cta-terminal__footer strong {
  margin-left: auto;
  color: #5fc98f;
  font-size: 6.5px;
}

.cta-terminal__scan {
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(216, 111, 31, 0.8),
    transparent
  );
  box-shadow: 0 0 14px rgba(216, 111, 31, 0.35);
  opacity: 0;
  animation: cta-terminal-scan 6.8s ease-in-out infinite;
}

@keyframes cta-terminal-scan {
  0% {
    top: 48px;
    opacity: 0;
  }

  10% {
    opacity: 0.8;
  }

  82% {
    top: calc(100% - 40px);
    opacity: 0.45;
  }

  94%,
  100% {
    opacity: 0;
  }
}

/* Bottom statement */

.cta-section__bottom {
  position: relative;
  z-index: 2;
  display: grid;
  width: min(100% - 48px, var(--sd-container));
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 15px;
  margin: clamp(72px, 9vw, 110px) auto 0;
  padding: 21px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  color: rgba(240, 246, 243, 0.64);
}

.cta-section__bottom > span {
  color: #f19350;
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 760;
}

.cta-section__bottom p {
  margin: 0;
  font-size: 10px;
  line-height: 1.45;
}

.cta-section__bottom svg {
  color: #f19350;
  animation: cta-bottom-arrow 2s ease-in-out infinite;
}

@keyframes cta-bottom-arrow {
  50% {
    transform: translateX(5px);
  }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .cta-section__eyebrow > span,
  .cta-command,
  .cta-terminal__success,
  .cta-terminal__live i,
  .cta-terminal__cursor i,
  .cta-terminal__scan,
  .cta-section__bottom svg {
    animation: none;
  }

  .cta-command,
  .cta-terminal__success {
    opacity: 1;
    transform: none;
  }
}

/* Responsive */

@media (max-width: 960px) {
  .cta-section__inner {
    grid-template-columns: 1fr;
    max-width: 760px;
  }

  .cta-section__copy {
    padding-block: 0;
  }
}

@media (max-width: 640px) {
  .cta-section {
    padding-top: 70px;
  }

  .cta-section__inner,
  .cta-section__bottom {
    width: min(100% - 28px, var(--sd-container));
  }

  .cta-section h2 {
    font-size: clamp(2.7rem, 12vw, 3.7rem);
  }

  .cta-section__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .cta-section__actions :deep(.sd-button) {
    width: 100%;
  }

  .cta-terminal__body {
    min-height: 360px;
    padding-inline: 15px;
  }

  .cta-terminal__footer span:nth-of-type(2),
  .cta-terminal__footer span:nth-of-type(3) {
    display: none;
  }

  .cta-section__bottom {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .cta-section__bottom svg {
    display: none;
  }
}

@media (max-width: 430px) {
  .cta-section__facts {
    display: grid;
  }

  .cta-terminal {
    border-radius: 10px;
  }

  .cta-terminal__success {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .cta-terminal__live {
    display: none;
  }
}
</style>
