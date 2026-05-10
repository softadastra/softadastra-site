<template>
  <section class="hero-section">
    <div
      class="hero-section__bg-grid"
      aria-hidden="true"
    />

    <div
      class="hero-section__noise"
      aria-hidden="true"
    />

    <div
      class="hero-section__glow hero-section__glow--primary"
      aria-hidden="true"
    />

    <div
      class="hero-section__glow hero-section__glow--green"
      aria-hidden="true"
    />

    <div class="hero-section__inner">
      <div class="hero-section__content">
        <h1 class="hero-section__title">
          Build apps that keep working offline.
        </h1>

        <p class="hero-section__desc">
          Softadastra maintains an open infrastructure stack for local-first software, durable writes, sync engines, runtimes, and cloud products designed for real-world network failures.
        </p>

        <div class="hero-section__actions">
          <BaseButton
            :href="links.docs"
            arrow
          >
            Explore docs
          </BaseButton>

          <BaseButton
            :href="links.business"
            variant="secondary"
          >
            Softadastra Cloud
          </BaseButton>
        </div>

      </div>

      <div
        class="hero-section__visual"
        aria-label="Softadastra reliability core"
      >
        <div
          class="hero-section__orbit hero-section__orbit--outer"
          aria-hidden="true"
        />

        <div
          class="hero-section__orbit hero-section__orbit--middle"
          aria-hidden="true"
        />

        <div
          class="hero-section__orbit hero-section__orbit--inner"
          aria-hidden="true"
        />

        <div
          class="hero-section__signal hero-section__signal--one"
          aria-hidden="true"
        />

        <div
          class="hero-section__signal hero-section__signal--two"
          aria-hidden="true"
        />

        <div
          class="hero-section__signal hero-section__signal--three"
          aria-hidden="true"
        />

        <div class="hero-section__core">
          <div class="hero-section__core-shell">
            <span class="hero-section__core-logo">
              <img
                src="/logo.svg"
                alt=""
                aria-hidden="true"
              />
            </span>

            <strong>Softadastra</strong>
            <span>Reliability Core</span>
          </div>
        </div>

        <div class="hero-section__pipeline hero-section__pipeline--left">
          <span>local write</span>
          <strong>persisted</strong>
        </div>

        <div class="hero-section__pipeline hero-section__pipeline--right">
          <span>network fails</span>
          <strong>replayed</strong>
        </div>

        <div class="hero-section__terminal">
          <div class="hero-section__terminal-top">
            <span />
            <span />
            <span />
          </div>

          <div class="hero-section__terminal-body">
            <p>
              <span class="hero-section__terminal-muted">status</span>
              local-first
            </p>

            <p>
              <span class="hero-section__terminal-muted">wal</span>
              durable
            </p>

            <p>
              <span class="hero-section__terminal-muted">sync</span>
              converging
            </p>
          </div>
        </div>

        <div
          v-for="(stack, index) in heroStacks"
          :key="stack.id"
          :class="[
            'hero-section__node',
            `hero-section__node--${index}`,
            `hero-section__node--${stack.color}`,
          ]"
        >
          <span
            class="hero-section__node-dot"
            :class="`hero-section__node-dot--${stack.color}`"
          />

          <span class="hero-section__node-copy">
            <strong>{{ stack.name }}</strong>
            <small>{{ stack.role }}</small>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

import { links } from "../../data/links";
import { stacks } from "../../data/stacks";

import BaseButton from "../ui/BaseButton.vue";

const heroStacks = computed(() => {
  return stacks.slice(0, 5);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 72px 0 64px;
  border-bottom: 1px solid var(--sd-border);
}

.hero-section__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
  background-size: 64px 64px;
  animation: sd-grid-scroll 14s linear infinite;
  mask-image: radial-gradient(
    ellipse 86% 76% at 50% 18%,
    black 0%,
    transparent 72%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 86% 76% at 50% 18%,
    black 0%,
    transparent 72%
  );
}

.hero-section__noise {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.16) 0 1px, transparent 1px);
  background-size: 36px 36px;
}

.hero-section__glow {
  position: absolute;
  pointer-events: none;
  border-radius: 999px;
  filter: blur(70px);
}

.hero-section__glow--primary {
  top: -220px;
  left: 50%;
  width: 980px;
  height: 560px;
  background: radial-gradient(
    ellipse at center,
    rgba(174, 185, 255, 0.12) 0%,
    rgba(174, 185, 255, 0.035) 42%,
    transparent 72%
  );
  transform: translateX(-50%);
}

.hero-section__glow--green {
  right: -260px;
  bottom: -220px;
  width: 560px;
  height: 560px;
  background: radial-gradient(
    circle at center,
    rgba(110, 231, 183, 0.11),
    transparent 68%
  );
}

.hero-section__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(520px, 560px);
  gap: clamp(56px, 7vw, 112px);
  width: min(100% - 48px, var(--sd-container));
  align-items: center;
  margin-inline: auto;
}

.hero-section__content {
  min-width: 0;
}

.hero-section__badge {
  margin-bottom: 28px;
  animation: sd-fade-up 0.6s var(--sd-ease-out) 0.1s both;
}

.hero-section__title {
  max-width: 760px;
  margin: 0 0 24px;
  color: var(--sd-text);
  font-size: clamp(46px, 5.6vw, 76px);
  font-weight: 850;
  line-height: 0.98;
  letter-spacing: -0.06em;
  animation: sd-fade-up 0.7s var(--sd-ease-out) 0.2s both;
}

.hero-section__desc {
  max-width: 620px;
  margin: 0 0 36px;
  color: var(--sd-text-soft);
  font-size: 18px;
  line-height: 1.72;
  animation: sd-fade-up 0.7s var(--sd-ease-out) 0.32s both;
}

.hero-section__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  animation: sd-fade-up 0.7s var(--sd-ease-out) 0.42s both;
}

.hero-section__proof {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
  animation: sd-fade-up 0.7s var(--sd-ease-out) 0.52s both;
}

.hero-section__proof-item {
  min-width: 118px;
  padding: 12px 14px;
  border: 1px solid var(--sd-border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.025);
}

.hero-section__proof-item strong {
  display: block;
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.hero-section__proof-item span {
  display: block;
  margin-top: 4px;
  color: var(--sd-text-muted);
  font-size: 12.5px;
  line-height: 1.35;
}

.hero-section__visual {
  position: relative;
  width: 560px;
  height: 560px;
  justify-self: end;
  flex-shrink: 0;
  animation: sd-fade-in 1s var(--sd-ease-out) 0.45s both;
}

.hero-section__orbit {
  position: absolute;
  border: 1px solid rgba(174, 185, 255, 0.1);
  border-radius: 999px;
  inset: 50%;
  transform: translate(-50%, -50%);
}

.hero-section__orbit--outer {
  width: 510px;
  height: 510px;
  border-style: dashed;
  animation: hero-spin 34s linear infinite;
}

.hero-section__orbit--middle {
  width: 380px;
  height: 380px;
  border-color: rgba(174, 185, 255, 0.08);
  animation: hero-spin-reverse 26s linear infinite;
}

.hero-section__orbit--inner {
  width: 250px;
  height: 250px;
  border-color: rgba(110, 231, 183, 0.11);
}

.hero-section__signal {
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(174, 185, 255, 0.42),
    transparent
  );
  transform-origin: left center;
  animation: hero-signal 2.8s ease-in-out infinite;
}

.hero-section__signal--one {
  top: 150px;
  left: 110px;
  width: 260px;
  transform: rotate(24deg);
}

.hero-section__signal--two {
  right: 96px;
  bottom: 178px;
  width: 230px;
  animation-delay: 0.75s;
  transform: rotate(-32deg);
}

.hero-section__signal--three {
  bottom: 118px;
  left: 135px;
  width: 190px;
  animation-delay: 1.35s;
  transform: rotate(12deg);
}

.hero-section__core {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  display: grid;
  width: 184px;
  height: 184px;
  place-items: center;
  border-radius: 42px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.018)),
    #111920;
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transform: translate(-50%, -50%) rotate(45deg);
}

.hero-section__core::before {
  position: absolute;
  inset: -14px;
  border: 1px solid rgba(174, 185, 255, 0.15);
  border-radius: 52px;
  content: "";
}

.hero-section__core::after {
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(110, 231, 183, 0.12);
  border-radius: 30px;
  content: "";
}

.hero-section__core-shell {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  text-align: center;
  transform: rotate(-45deg);
}

.hero-section__core-logo {
  display: flex;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.hero-section__core-logo img {
  width: 46px;
  height: 46px;
  object-fit: contain;
}

.hero-section__core-shell strong {
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 820;
  letter-spacing: -0.03em;
}

.hero-section__core-shell span {
  margin-top: 3px;
  color: var(--sd-accent);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.hero-section__pipeline {
  position: absolute;
  z-index: 4;
  padding: 10px 12px;
  border: 1px solid var(--sd-border);
  border-radius: 12px;
  background: #0c1015;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
}

.hero-section__pipeline span {
  display: block;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-section__pipeline strong {
  display: block;
  margin-top: 4px;
  color: var(--sd-green);
  font-size: 13px;
  font-weight: 760;
}

.hero-section__pipeline--left {
  top: 212px;
  left: 4px;
}

.hero-section__pipeline--right {
  right: 0;
  bottom: 188px;
}

.hero-section__terminal {
  position: absolute;
  right: 42px;
  bottom: 18px;
  z-index: 4;
  width: 190px;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: #0a0f14;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
}

.hero-section__terminal-top {
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--sd-border);
}

.hero-section__terminal-top span {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
}

.hero-section__terminal-body {
  display: grid;
  gap: 7px;
  padding: 12px;
}

.hero-section__terminal-body p {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 11px;
}

.hero-section__terminal-muted {
  color: var(--sd-text-muted);
}

.hero-section__node {
  position: absolute;
  z-index: 6;
  display: grid;
  grid-template-columns: 9px minmax(0, 1fr);
  gap: 9px;
  min-width: 142px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid var(--sd-border);
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.052), rgba(255, 255, 255, 0.018)),
    #111920;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
  cursor: default;
  transition:
    transform 220ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.hero-section__node:hover {
  border-color: var(--sd-border-highlight);
  background:
    linear-gradient(180deg, rgba(174, 185, 255, 0.08), rgba(255, 255, 255, 0.02)),
    #111920;
  transform: translateY(-3px);
}

.hero-section__node-dot {
  width: 9px;
  height: 9px;
  border-radius: var(--sd-radius-full);
}

.hero-section__node-dot--vix {
  background: var(--sd-vix);
}

.hero-section__node-dot--softadastra {
  background: var(--sd-softadastra);
}

.hero-section__node-dot--kordex {
  background: var(--sd-kordex);
}

.hero-section__node-dot--cnerium {
  background: var(--sd-cnerium);
}

.hero-section__node-dot--pulsegrid {
  background: var(--sd-pulsegrid);
}

.hero-section__node-copy {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.hero-section__node-copy strong {
  color: var(--sd-text);
  font-size: 13.5px;
  font-weight: 760;
  line-height: 1.1;
}

.hero-section__node-copy small {
  overflow: hidden;
  color: var(--sd-text-muted);
  font-size: 11px;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hero-section__node--0 {
  top: 18px;
  left: 50%;
  animation: sd-float 5s ease-in-out infinite;
  transform: translateX(-50%);
}

.hero-section__node--0:hover {
  transform: translateX(-50%) translateY(-3px);
}

.hero-section__node--1 {
  top: 126px;
  right: 0;
  animation: sd-float 5s ease-in-out 0.4s infinite;
}

.hero-section__node--2 {
  right: 54px;
  bottom: 104px;
  animation: sd-float 5s ease-in-out 0.8s infinite;
}

.hero-section__node--3 {
  bottom: 92px;
  left: 40px;
  animation: sd-float 5s ease-in-out 1.2s infinite;
}

.hero-section__node--4 {
  top: 132px;
  left: 0;
  animation: sd-float 5s ease-in-out 1.6s infinite;
}

@keyframes hero-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes hero-spin-reverse {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes hero-signal {
  0%,
  100% {
    opacity: 0.15;
  }

  50% {
    opacity: 0.75;
  }
}

@media (max-width: 1180px) {
  .hero-section__inner {
    grid-template-columns: minmax(0, 1fr) 500px;
    gap: 56px;
  }

  .hero-section__visual {
    width: 500px;
    height: 500px;
  }

  .hero-section__orbit--outer {
    width: 460px;
    height: 460px;
  }
}

@media (max-width: 1080px) {
  .hero-section {
    padding: 78px 0 62px;
  }

  .hero-section__inner {
    grid-template-columns: 1fr;
  }

  .hero-section__visual {
    width: 520px;
    height: 520px;
    justify-self: center;
  }

  .hero-section__title {
    max-width: 850px;
  }

  .hero-section__desc {
    max-width: 680px;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 54px 0 42px;
  }

  .hero-section__inner {
    width: min(100% - 32px, var(--sd-container));
    gap: 44px;
  }

  .hero-section__title {
    font-size: clamp(42px, 13vw, 56px);
    letter-spacing: -0.055em;
  }

  .hero-section__desc {
    font-size: 16px;
  }

  .hero-section__proof {
    display: grid;
    grid-template-columns: 1fr;
  }

  .hero-section__visual {
    width: 330px;
    height: 430px;
  }

  .hero-section__orbit--outer {
    width: 320px;
    height: 320px;
  }

  .hero-section__orbit--middle {
    width: 250px;
    height: 250px;
  }

  .hero-section__orbit--inner {
    width: 170px;
    height: 170px;
  }

  .hero-section__core {
    width: 132px;
    height: 132px;
    border-radius: 32px;
  }

  .hero-section__core::before {
    inset: -10px;
    border-radius: 40px;
  }

  .hero-section__core-logo {
    width: 34px;
    height: 34px;
    margin-bottom: 7px;
  }

  .hero-section__core-logo img {
    width: 34px;
    height: 34px;
  }

  .hero-section__core-shell strong {
    font-size: 12.5px;
  }

  .hero-section__core-shell span {
    font-size: 9px;
  }

  .hero-section__pipeline,
  .hero-section__terminal,
  .hero-section__signal {
    display: none;
  }

  .hero-section__node {
    min-width: 118px;
    padding: 8px 10px;
  }

  .hero-section__node-copy small {
    display: none;
  }

  .hero-section__node--0 {
    top: 8px;
  }

  .hero-section__node--1 {
    top: 112px;
    right: -4px;
  }

  .hero-section__node--2 {
    right: 18px;
    bottom: 110px;
  }

  .hero-section__node--3 {
    bottom: 110px;
    left: 18px;
  }

  .hero-section__node--4 {
    top: 112px;
    left: -4px;
  }
}

@media (max-width: 420px) {
  .hero-section__visual {
    width: 292px;
    height: 390px;
  }

  .hero-section__node {
    min-width: 106px;
  }

  .hero-section__node-copy strong {
    font-size: 12.5px;
  }
}
@media (max-width: 1080px) {
  .hero-section {
    padding: 56px 0 52px;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 38px 0 36px;
  }
}
</style>
