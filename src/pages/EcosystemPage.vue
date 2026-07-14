<template>
  <SiteShell>
    <section ref="root" class="eco">
      <!-- ==================== HERO ==================== -->
      <div class="eco__hero sd-container">
        <div class="eco__hero-bg" aria-hidden="true">
          <span class="eco__hero-grid" />
          <span class="eco__hero-glow" />
        </div>

        <div class="eco__hero-inner">
          <span class="eco__eyebrow" data-reveal>
            <span class="eco__eyebrow-dot" aria-hidden="true" />
            The ecosystem
          </span>

          <h1 data-reveal>A focused ecosystem around modern C++ tooling.</h1>

          <p data-reveal>
            Softadastra builds products on top of the Vix.cpp foundation. The
            goal is simple: make C++ development easier, more reliable, and more
            useful for real applications.
          </p>

          <div class="eco__hero-meta" data-reveal>
            <span>C++ tooling</span>
            <span>Built on Vix.cpp</span>
            <span>Open source foundations</span>
          </div>
        </div>
      </div>

      <!-- ==================== DIAGRAM ==================== -->
      <div class="eco__diagram sd-container" data-reveal>
        <EcosystemDiagram />
      </div>

      <!-- ==================== LAYERS ==================== -->
      <div class="eco__layers sd-container">
        <div class="eco__section-top" data-reveal>
          <span class="eco__eyebrow">
            <span class="eco__eyebrow-dot" aria-hidden="true" />
            Ecosystem layers
          </span>
          <h2>A clear stack built around Vix.cpp.</h2>
          <p>
            Vix.cpp is the foundation. Softadastra Engine, Cnerium, and Kordex
            extend it into local-first storage, backend reliability, and
            JavaScript runtime tooling. Pico validates the stack in a real C++
            backend application.
          </p>
        </div>

        <div class="eco__layer-grid">
          <article
            v-for="(layer, i) in layers"
            :key="layer.title"
            class="eco__layer-card"
            data-reveal
            :style="{ '--d': `${0.05 + i * 0.07}s` }"
          >
            <span class="eco__layer-glow" aria-hidden="true" />
            <div class="eco__layer-head">
              <span class="eco__layer-number">{{ layer.number }}</span>
              <span class="eco__layer-label">{{ layer.label }}</span>
            </div>
            <h3>{{ layer.title }}</h3>
            <p>{{ layer.text }}</p>
          </article>
        </div>
      </div>

      <!-- ==================== STACKS ==================== -->
      <div class="eco__stacks sd-container">
        <div class="eco__section-top" data-reveal>
          <span class="eco__eyebrow">
            <span class="eco__eyebrow-dot" aria-hidden="true" />
            Products
          </span>
          <h2>What each layer becomes in practice.</h2>
          <p>
            Every layer of the stack ships as a real, inspectable product —
            documented, versioned, and validated against working applications.
          </p>
        </div>

        <div class="eco__stack-grid">
          <div
            v-for="(stack, i) in stacks"
            :key="stack.id"
            class="eco__stack-reveal"
            data-reveal
            :style="{ '--d': `${0.05 + i * 0.08}s` }"
          >
            <StackCard :stack="stack" />
          </div>
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { stacks } from "../data/stacks";

import SiteShell from "../components/layout/SiteShell.vue";
import EcosystemDiagram from "../components/ecosystem/EcosystemDiagram.vue";
import StackCard from "../components/ecosystem/StackCard.vue";

const root = ref(null);
let observer = null;

const layers = [
  {
    number: "01",
    label: "Foundation",
    title: "Vix.cpp",
    text: "The modern C++ runtime and CLI that everything else is built on — builds, runs, modules, packages, servers, and diagnostics.",
  },
  {
    number: "02",
    label: "Local-first",
    title: "Softadastra Engine",
    text: "An offline-first runtime layer for local storage and state, keeping applications resilient when the network falls away.",
  },
  {
    number: "03",
    label: "Reliability",
    title: "Cnerium",
    text: "Backend reliability tooling — the operational layer that keeps C++ services observable, recoverable, and dependable.",
  },
  {
    number: "04",
    label: "JS / TS runtime",
    title: "Kordex",
    text: "A JavaScript and TypeScript runtime layer that bridges the C++ foundation with web-facing tooling and interfaces.",
  },
];

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = root.value?.querySelectorAll("[data-reveal]") ?? [];

  if (reduce) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
  );

  targets.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
.eco {
  position: relative;
  overflow: hidden;
  padding-bottom: 104px;
  background: var(--sd-bg);
}

/* ---------- reveal ---------- */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.75s var(--sd-ease-out),
    transform 0.75s var(--sd-ease-out);
  transition-delay: var(--d, 0s);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* ---------- shared eyebrow ---------- */
.eco__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 28px;
  padding: 0 12px;
  border: 1px solid rgba(213, 122, 42, 0.26);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eco__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px rgba(213, 122, 42, 0.14);
  animation: eco-pulse 2.4s ease infinite;
}

@keyframes eco-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 3px rgba(213, 122, 42, 0.14);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(213, 122, 42, 0.08);
  }
}

/* ==================== HERO ==================== */
.eco__hero {
  position: relative;
  padding: 104px 0 58px;
  text-align: center;
}

.eco__hero-bg {
  position: absolute;
  inset: -60px 0 0;
  z-index: 0;
  pointer-events: none;
}

.eco__hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--sd-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--sd-border) 1px, transparent 1px);
  background-size: 46px 46px;
  opacity: 0.4;
  mask-image: radial-gradient(closest-side at 50% 24%, #000, transparent 78%);
}

.eco__hero-glow {
  position: absolute;
  top: -150px;
  left: 50%;
  width: 680px;
  height: 420px;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(213, 122, 42, 0.13),
    transparent 65%
  );
}

.eco__hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
}

.eco__hero h1 {
  max-width: 980px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3.2rem, 7vw, 6.4rem);
  font-weight: 850;
  line-height: 0.94;
  letter-spacing: -0.08em;
}

.eco__hero p {
  max-width: 780px;
  margin: 28px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.72;
}

.eco__hero-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.eco__hero-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: var(--sd-bg-raised);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

/* ==================== DIAGRAM ==================== */
.eco__diagram {
  position: relative;
  z-index: 1;
  margin-top: 18px;
}

/* ==================== LAYERS ==================== */
.eco__layers {
  position: relative;
  z-index: 1;
  padding-top: 88px;
}

.eco__section-top {
  max-width: 780px;
  margin-bottom: 34px;
}

.eco__section-top h2 {
  margin: 18px 0 0;
  color: var(--sd-text);
  font-size: clamp(2rem, 4.4vw, 3.4rem);
  font-weight: 830;
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.eco__section-top p {
  max-width: 720px;
  margin: 16px 0 0;
  color: var(--sd-text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.eco__layer-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.eco__layer-card {
  position: relative;
  overflow: hidden;
  padding: 20px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background: var(--sd-bg-raised);
  transition:
    border-color 0.2s var(--sd-ease-out),
    box-shadow 0.2s var(--sd-ease-out),
    transform 0.2s var(--sd-ease-out),
    opacity 0.75s var(--sd-ease-out);
}

.eco__layer-card:hover {
  border-color: rgba(213, 122, 42, 0.3);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.eco__layer-glow {
  position: absolute;
  top: -50%;
  right: -30%;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(213, 122, 42, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s var(--sd-ease-out);
  pointer-events: none;
}

.eco__layer-card:hover .eco__layer-glow {
  opacity: 1;
}

.eco__layer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.eco__layer-number {
  display: inline-flex;
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(213, 122, 42, 0.28);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 850;
}

.eco__layer-label {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 820;
  letter-spacing: 0.07em;
  text-align: right;
  text-transform: uppercase;
}

.eco__layer-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 19px;
  font-weight: 820;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.eco__layer-card p {
  margin: 8px 0 0;
  color: var(--sd-text-muted);
  font-size: 13.5px;
  line-height: 1.55;
}

/* ==================== STACKS ==================== */
.eco__stacks {
  position: relative;
  z-index: 1;
  padding-top: 88px;
}

.eco__stack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 16px;
}

.eco__stack-reveal {
  transition:
    opacity 0.75s var(--sd-ease-out),
    transform 0.75s var(--sd-ease-out);
}

/* ==================== RESPONSIVE ==================== */
@media (prefers-reduced-motion: reduce) {
  .eco__eyebrow-dot {
    animation: none;
  }
}

@media (max-width: 1080px) {
  .eco__stack-grid {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }
}

@media (max-width: 760px) {
  .eco {
    padding-bottom: 72px;
  }

  .eco__hero {
    padding: 76px 0 46px;
  }

  .eco__hero h1 {
    letter-spacing: -0.065em;
  }

  .eco__hero p {
    margin-top: 22px;
  }

  .eco__layers,
  .eco__stacks {
    padding-top: 72px;
  }

  .eco__layer-grid,
  .eco__stack-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .eco__hero h1 {
    font-size: clamp(2.7rem, 14vw, 3.7rem);
  }

  .eco__hero-meta {
    justify-content: flex-start;
  }
}
</style>
