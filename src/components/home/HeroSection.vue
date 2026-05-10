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
          Softadastra maintains an open infrastructure stack for local-first
          software, durable writes, sync engines, runtimes, registries, and
          cloud products designed for real-world network failures.
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
        aria-label="Softadastra reliability ecosystem"
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
            <span>Company</span>
          </div>
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

            <p>
              <span class="hero-section__terminal-muted">verdict</span>
              explainable
            </p>
          </div>
        </div>

        <a
          v-for="(stack, index) in heroStacks"
          :key="stack.id"
          :href="stack.href"
          :class="[
            'hero-section__node',
            `hero-section__node--${index}`,
            `hero-section__node--${stack.color}`,
          ]"
          :style="{ '--node-index': index }"
        >
          <span
            class="hero-section__node-logo"
            :class="`hero-section__node-logo--${stack.color}`"
          >
            <img
              :src="stack.logo"
              :alt="`${stack.name} logo`"
              @error="handleLogoError"
            />

            <span class="hero-section__node-fallback">
              {{ stack.short }}
            </span>
          </span>

          <span class="hero-section__node-copy">
            <strong>{{ stack.name }}</strong>
            <small>{{ stack.role }}</small>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

import { links } from "../../data/links";
import { stacks } from "../../data/stacks";

import BaseButton from "../ui/BaseButton.vue";

const logoMap = {
  vix: "/logos/vix.svg",
  softadastra: "/logo.svg",
  kordex: "/logos/kordex.svg",
  cnerium: "/logos/cnerium.svg",
  pulsegrid: "/logos/pulsegrid.svg",
  registry: "/logos/vix-registry.svg",
  converdict: "/logos/converdict.svg",
};

const extraHeroStacks = [
  {
    id: "registry",
    name: "Registry",
    role: "Packages",
    color: "registry",
    href: links.vixRegistry,
    logo: logoMap.registry,
    short: "VR",
  },
  {
    id: "converdict",
    name: "Converdict",
    role: "Verdicts",
    color: "converdict",
    href: links.converdict,
    logo: logoMap.converdict,
    short: "CV",
  },
];

const heroStacks = computed(() => {
  const baseStacks = stacks
    .slice(0, 5)
    .map((stack) => ({
      ...stack,
      href: stack.href || stack.docsHref || links.docs,
      logo: logoMap[stack.id] || "/logo.svg",
      short: stack.name.slice(0, 2).toUpperCase(),
    }));

  return [...baseStacks, ...extraHeroStacks];
});

function handleLogoError(event) {
  event.target.style.display = "none";
}
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
  grid-template-columns: minmax(0, 1fr) minmax(520px, 580px);
  gap: clamp(56px, 7vw, 112px);
  width: min(100% - 48px, var(--sd-container));
  align-items: center;
  margin-inline: auto;
}

.hero-section__content {
  min-width: 0;
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

.hero-section__visual {
  position: relative;
  width: 580px;
  height: 580px;
  justify-self: end;
  flex-shrink: 0;
  animation: hero-visual-enter 900ms var(--sd-ease-out) 0.35s both;
}

.hero-section__visual::before {
  position: absolute;
  inset: 58px;
  border-radius: 999px;
  background:
    radial-gradient(circle at center, rgba(255, 153, 0, 0.08), transparent 52%),
    radial-gradient(circle at center, rgba(110, 231, 183, 0.06), transparent 68%);
  filter: blur(18px);
  content: "";
  animation: hero-pulse 4.5s ease-in-out infinite;
}

.hero-section__orbit {
  position: absolute;
  border: 1px solid rgba(174, 185, 255, 0.1);
  border-radius: 999px;
  inset: 50%;
  transform: translate(-50%, -50%);
}

.hero-section__orbit--outer {
  width: 530px;
  height: 530px;
  border-style: dashed;
  animation: hero-spin 38s linear infinite;
}

.hero-section__orbit--middle {
  width: 400px;
  height: 400px;
  border-color: rgba(174, 185, 255, 0.08);
  animation: hero-spin-reverse 28s linear infinite;
}

.hero-section__orbit--inner {
  width: 260px;
  height: 260px;
  border-color: rgba(110, 231, 183, 0.12);
  animation: hero-breathe 4s ease-in-out infinite;
}

.hero-section__signal {
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 153, 0, 0.45),
    rgba(110, 231, 183, 0.38),
    transparent
  );
  transform-origin: left center;
  animation: hero-signal 2.8s ease-in-out infinite;
}

.hero-section__signal--one {
  top: 150px;
  left: 110px;
  width: 300px;
  transform: rotate(24deg);
}

.hero-section__signal--two {
  right: 96px;
  bottom: 178px;
  width: 250px;
  animation-delay: 0.75s;
  transform: rotate(-32deg);
}

.hero-section__signal--three {
  bottom: 118px;
  left: 135px;
  width: 210px;
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
    0 0 70px rgba(255, 153, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transform: translate(-50%, -50%) rotate(45deg);
  animation: hero-core-float 5.8s ease-in-out infinite;
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

.hero-section__terminal {
  position: absolute;
  right: 42px;
  bottom: 18px;
  z-index: 4;
  width: 204px;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: #0a0f14;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  animation: hero-card-enter 700ms var(--sd-ease-out) 0.82s both;
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
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 10px;
  min-width: 154px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.062), rgba(255, 255, 255, 0.018)),
    #111920;
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
  text-decoration: none;
  cursor: pointer;
  animation:
    hero-node-enter 640ms var(--sd-ease-out) both,
    hero-node-float 5.4s ease-in-out infinite;
  animation-delay:
    calc(0.58s + (var(--node-index) * 90ms)),
    calc(var(--node-index) * 220ms);
  transition:
    transform 220ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}

.hero-section__node:hover {
  border-color: var(--sd-border-highlight);
  background:
    linear-gradient(180deg, rgba(255, 153, 0, 0.09), rgba(255, 255, 255, 0.02)),
    #111920;
  box-shadow:
    0 18px 58px rgba(0, 0, 0, 0.34),
    0 0 36px rgba(255, 153, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.055);
}

.hero-section__node-logo {
  position: relative;
  display: flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.045);
}

.hero-section__node-logo::before {
  position: absolute;
  inset: -10px;
  opacity: 0.4;
  background: radial-gradient(circle, currentColor, transparent 62%);
  content: "";
}

.hero-section__node-logo img {
  position: relative;
  z-index: 2;
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.hero-section__node-fallback {
  position: absolute;
  z-index: 1;
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 800;
}

.hero-section__node-logo--vix {
  color: var(--sd-vix);
}

.hero-section__node-logo--softadastra {
  color: var(--sd-softadastra);
}

.hero-section__node-logo--kordex {
  color: var(--sd-kordex);
}

.hero-section__node-logo--cnerium {
  color: var(--sd-cnerium);
}

.hero-section__node-logo--pulsegrid {
  color: var(--sd-pulsegrid);
}

.hero-section__node-logo--registry {
  color: var(--sd-registry);
}

.hero-section__node-logo--converdict {
  color: var(--sd-converdict);
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
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
}

.hero-section__node--1 {
  top: 106px;
  right: 0;
}

.hero-section__node--2 {
  right: 36px;
  bottom: 126px;
}

.hero-section__node--3 {
  bottom: 104px;
  left: 34px;
}

.hero-section__node--4 {
  top: 126px;
  left: 0;
}

.hero-section__node--5 {
  top: 252px;
  left: -10px;
}

.hero-section__node--6 {
  top: 252px;
  right: -10px;
}

@keyframes hero-visual-enter {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes hero-card-enter {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes hero-node-enter {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.94);
  }

  to {
    opacity: 1;
  }
}

@keyframes hero-node-float {
  0%,
  100% {
    margin-top: 0;
  }

  50% {
    margin-top: -8px;
  }
}

@keyframes hero-core-float {
  0%,
  100% {
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
  }

  50% {
    transform: translate(-50%, -53%) rotate(45deg) scale(1.025);
  }
}

@keyframes hero-pulse {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(0.96);
  }

  50% {
    opacity: 1;
    transform: scale(1.04);
  }
}

@keyframes hero-breathe {
  0%,
  100% {
    opacity: 0.55;
  }

  50% {
    opacity: 1;
  }
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
    opacity: 0.12;
    filter: blur(0);
  }

  50% {
    opacity: 0.85;
    filter: blur(0.3px);
  }
}
.hero-section__node-logo {
  position: relative;
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
}

.hero-section__node-logo img {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media (max-width: 1180px) {
  .hero-section__inner {
    grid-template-columns: minmax(0, 1fr) 520px;
    gap: 56px;
  }

  .hero-section__visual {
    width: 520px;
    height: 540px;
  }

  .hero-section__orbit--outer {
    width: 470px;
    height: 470px;
  }

  .hero-section__node {
    min-width: 142px;
  }
}

@media (max-width: 1080px) {
  .hero-section {
    padding: 56px 0 52px;
  }

  .hero-section__inner {
    grid-template-columns: 1fr;
  }

  .hero-section__visual {
    width: 540px;
    height: 550px;
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
    padding: 38px 0 36px;
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

  .hero-section__visual {
    width: 330px;
    height: 470px;
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
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 8px;
    min-width: 126px;
    padding: 8px 10px;
  }

 .hero-section__node-logo {
  width: 32px;
  height: 32px;
  border-radius: 999px;
}

.hero-section__node-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

  .hero-section__node-copy strong {
    font-size: 12.5px;
  }

  .hero-section__node-copy small {
    display: none;
  }

  .hero-section__node--0 {
    top: 8px;
  }

  .hero-section__node--1 {
    top: 92px;
    right: -4px;
  }

  .hero-section__node--2 {
    right: 18px;
    bottom: 128px;
  }

  .hero-section__node--3 {
    bottom: 128px;
    left: 18px;
  }

  .hero-section__node--4 {
    top: 92px;
    left: -4px;
  }

  .hero-section__node--5 {
    top: 184px;
    left: -2px;
  }

  .hero-section__node--6 {
    top: 184px;
    right: -2px;
  }
}

@media (max-width: 420px) {
  .hero-section__visual {
    width: 292px;
    height: 440px;
  }

  .hero-section__node {
    min-width: 112px;
  }

  .hero-section__node-copy strong {
    font-size: 12px;
  }
}
.hero-section__bg-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
}

.hero-section__glow--primary {
  background: radial-gradient(
    ellipse at center,
    rgba(213, 122, 42, 0.18) 0%,
    rgba(213, 122, 42, 0.055) 42%,
    transparent 72%
  );
}

.hero-section__glow--green {
  background: radial-gradient(
    circle at center,
    rgba(47, 212, 156, 0.12),
    transparent 68%
  );
}

.hero-section__visual::before {
  background:
    radial-gradient(circle at center, rgba(213, 122, 42, 0.16), transparent 52%),
    radial-gradient(circle at center, rgba(47, 212, 156, 0.08), transparent 68%);
}

.hero-section__orbit {
  border-color: rgba(213, 122, 42, 0.16);
}

.hero-section__orbit--middle {
  border-color: rgba(255, 255, 255, 0.1);
}

.hero-section__orbit--inner {
  border-color: rgba(47, 212, 156, 0.16);
}

.hero-section__signal {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(213, 122, 42, 0.58),
    rgba(47, 212, 156, 0.36),
    transparent
  );
}

.hero-section__core {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.025)),
    var(--sd-bg-raised);
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.42),
    0 0 76px rgba(213, 122, 42, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.hero-section__core::before {
  border-color: rgba(213, 122, 42, 0.22);
}

.hero-section__core::after {
  border-color: rgba(47, 212, 156, 0.16);
}

.hero-section__core-shell span {
  color: var(--sd-accent);
}

.hero-section__pipeline,
.hero-section__terminal,
.hero-section__node {
  border-color: var(--sd-border);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.02)),
    var(--sd-bg-raised);
  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.hero-section__pipeline strong {
  color: var(--sd-green);
}

.hero-section__terminal-top {
  border-bottom-color: var(--sd-border);
}

.hero-section__node:hover {
  border-color: var(--sd-border-highlight);
  background:
    linear-gradient(180deg, rgba(213, 122, 42, 0.13), rgba(255, 255, 255, 0.025)),
    var(--sd-bg-raised);
  box-shadow:
    0 20px 64px rgba(0, 0, 0, 0.36),
    0 0 42px rgba(213, 122, 42, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.065);
}

.hero-section__node-logo {
  border-color: rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.1), transparent 58%),
    rgba(255, 255, 255, 0.05);
}

.hero-section__node-logo--vix {
  color: var(--sd-vix);
}

.hero-section__node-logo--softadastra {
  color: var(--sd-softadastra);
}

.hero-section__node-logo--kordex {
  color: var(--sd-kordex);
}

.hero-section__node-logo--cnerium {
  color: var(--sd-cnerium);
}

.hero-section__node-logo--pulsegrid {
  color: var(--sd-pulsegrid);
}

.hero-section__node-logo--registry {
  color: var(--sd-registry);
}

.hero-section__node-logo--converdict {
  color: var(--sd-converdict);
}
/* ==========================================================================
   HeroSection background override
   Simple Softadastra green background
   ========================================================================== */

.hero-section {
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  ) !important;
  border-bottom-color: var(--sd-border) !important;
}

.hero-section__glow,
.hero-section__glow--primary,
.hero-section__glow--green {
  display: none !important;
}

.hero-section__visual::before {
  display: none !important;
}
@keyframes sd-dots-drift {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 34px 34px;
  }
}
.hero-section__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(
      circle,
      rgba(255, 255, 255, 0.12) 1px,
      transparent 1.5px
    );
  background-size: 42px 42px;
  opacity: 0.26;
  animation: sd-dots-drift 22s linear infinite;
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
</style>
