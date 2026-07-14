<template>
  <SiteShell>
    <section ref="root" class="cp">
      <!-- ==================== HERO ==================== -->
      <div class="cp__hero sd-container">
        <div class="cp__hero-bg" aria-hidden="true">
          <span class="cp__hero-grid" />
          <span class="cp__hero-glow" />
        </div>

        <div class="cp__hero-inner">
          <span class="cp__eyebrow" data-reveal>
            <span class="cp__eyebrow-dot" aria-hidden="true" />
            Softadastra Company
          </span>

          <h1 data-reveal>
            The
            <span class="cp__rotator" aria-hidden="true">
              <span class="cp__rotator-track">
                <em>C++</em>
                <em>runtime</em>
                <em>tooling</em>
                <em>C++</em>
              </span>
            </span>
            <span class="sr-only">C++</span>
            company.
          </h1>

          <p data-reveal>
            Softadastra builds and maintains open tooling for modern C++
            development. The mission is to make C++ simpler, faster, more
            productive, and more accessible for developers building real
            applications.
          </p>

          <div class="cp__hero-meta" data-reveal>
            <span>C++ tooling</span>
            <span>Open foundations</span>
            <span>Developer-first</span>
          </div>
        </div>

        <!-- scrolling values marquee -->
        <div class="cp__marquee" data-reveal aria-hidden="true">
          <div class="cp__marquee-track">
            <span v-for="w in marqueeWords" :key="`a-${w}`">{{ w }}</span>
            <span v-for="w in marqueeWords" :key="`b-${w}`">{{ w }}</span>
          </div>
        </div>
      </div>

      <!-- ==================== COMPANY MODEL ==================== -->
      <div class="cp__model sd-container">
        <div class="cp__model-head" data-reveal>
          <span class="cp__eyebrow">
            <span class="cp__eyebrow-dot" aria-hidden="true" />
            Company model
          </span>
          <h2>A focused company for C++ tooling.</h2>
          <p>
            Softadastra is not trying to become a broad software company with
            many unrelated products. It exists to build a coherent tooling
            ecosystem around modern C++: runtime foundations, developer
            workflows, backend reliability, local-first runtime layers, and
            practical validation applications.
          </p>
        </div>

        <!-- Orbit diagram -->
        <div class="cp__orbit" data-reveal aria-label="Softadastra ecosystem">
          <div class="cp__orbit-core">
            <span class="cp__orbit-logo">
              <img src="/logo.svg" alt="" aria-hidden="true" />
            </span>
            <strong>Softadastra</strong>
            <small>Builds and maintains C++ tooling</small>
          </div>

          <ul class="cp__orbit-ring">
            <li
              v-for="(item, i) in ecosystemItems"
              :key="item.name"
              class="cp__orbit-node"
              :style="{ '--d': `${0.2 + i * 0.1}s` }"
            >
              <span class="cp__orbit-node-logo">
                <img :src="item.logo" :alt="`${item.name} logo`" />
              </span>
              <div>
                <strong>{{ item.name }}</strong>
                <small>{{ item.role }}</small>
              </div>
              <span class="cp__orbit-wire" aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>

      <!-- ==================== MANIFESTO ==================== -->
      <div class="cp__manifesto sd-container">
        <div class="cp__manifesto-inner" data-reveal>
          <span class="cp__eyebrow cp__eyebrow--light">
            <span class="cp__eyebrow-dot" aria-hidden="true" />
            What we optimize for
          </span>
          <div class="cp__manifesto-grid">
            <article
              v-for="(m, i) in manifesto"
              :key="m.title"
              class="cp__manifesto-item"
              :style="{ '--d': `${0.1 + i * 0.12}s` }"
            >
              <span class="cp__manifesto-num">{{ m.num }}</span>
              <h3>{{ m.title }}</h3>
              <p>{{ m.text }}</p>
            </article>
          </div>
        </div>
      </div>

      <!-- ==================== STRUCTURE / RESOURCES ==================== -->
      <div class="cp__sections sd-container">
        <div class="cp__sections-head" data-reveal>
          <span class="cp__eyebrow">
            <span class="cp__eyebrow-dot" aria-hidden="true" />
            Structure
          </span>
          <h2>A small ecosystem with clear responsibilities.</h2>
          <p>
            Softadastra.com is the company hub. Vix.cpp is the C++ foundation.
            Softadastra Engine, Cnerium, and Kordex are focused technical
            layers. The registry, docs, and engineering notes help developers
            understand and use the ecosystem.
          </p>
        </div>

        <div class="cp__grid">
          <a
            v-for="(section, i) in sections"
            :key="section.title"
            :href="section.href"
            class="cp__card"
            data-reveal
            :style="{ '--d': `${0.05 + i * 0.07}s` }"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="cp__card-glow" aria-hidden="true" />
            <div class="cp__card-top">
              <span class="cp__card-label">{{ section.label }}</span>
              <span class="cp__card-arrow" aria-hidden="true">
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 10L10 2M10 2H5M10 2v5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <h3>{{ section.title }}</h3>
            <p>{{ section.text }}</p>
          </a>
        </div>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { links } from "../data/links";

import SiteShell from "../components/layout/SiteShell.vue";

const root = ref(null);
let observer = null;

const marqueeWords = [
  "C++ tooling",
  "Open foundations",
  "Native performance",
  "Developer-first",
  "Local-first runtime",
  "Coherent ecosystem",
];

const ecosystemItems = [
  { name: "Vix.cpp", role: "C++ foundation", logo: "/logos/vix.svg" },
  {
    name: "Softadastra Engine",
    role: "Offline-first layer",
    logo: "/logos/softadastra.svg",
  },
  { name: "Cnerium", role: "Backend reliability", logo: "/logos/cnerium.svg" },
  { name: "Kordex", role: "JS/TS runtime", logo: "/logos/kordex.svg" },
  { name: "Registry", role: "C++ packages", logo: "/logos/vix-registry.svg" },
];

const manifesto = [
  {
    num: "01",
    title: "Open foundations",
    text: "The core development workflow stays inspectable and usable locally, not locked behind a black box.",
  },
  {
    num: "02",
    title: "Native applications",
    text: "Every layer is designed around compiled applications and native performance, not convenience wrappers.",
  },
  {
    num: "03",
    title: "Coherent tooling",
    text: "Each product owns one layer of the same development workflow — nothing stitched together.",
  },
];

const sections = [
  {
    label: "Company hub",
    title: "softadastra.com",
    text: "The main website for Softadastra, its mission, its tooling direction, and the structure of the C++ ecosystem.",
    href: links.main,
  },
  {
    label: "C++ foundation",
    title: "vixcpp.com",
    text: "The public home of Vix.cpp, the modern C++ runtime and developer toolkit used as the technical foundation of the ecosystem.",
    href: links.vix,
  },
  {
    label: "Documentation",
    title: "docs.vixcpp.com",
    text: "The main documentation for learning Vix.cpp, its CLI, runtime modules, project workflow, and application model.",
    href: links.vixDocs,
  },
  {
    label: "Packages",
    title: "registry.vixcpp.com",
    text: "The registry for Vix packages, reusable modules, dependency metadata, and ecosystem distribution.",
    href: links.vixRegistry,
  },
  {
    label: "Engineering",
    title: "blog.vixcpp.com",
    text: "Engineering notes, release updates, benchmarks, technical decisions, and development progress around Vix.cpp.",
    href: links.vixBlog,
  },
  {
    label: "Open source",
    title: "github.com/softadastra",
    text: "The Softadastra GitHub organization for maintained tooling, technical layers, experiments, and public ecosystem work.",
    href: links.github,
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
.cp {
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

/* ==================== HERO ==================== */
.cp__hero {
  position: relative;
  padding: 104px 0 0;
}

.cp__hero-bg {
  position: absolute;
  inset: -60px 0 0;
  z-index: 0;
  pointer-events: none;
}

.cp__hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--sd-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--sd-border) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: 0.4;
  mask-image: radial-gradient(closest-side at 50% 30%, #000, transparent 80%);
}

.cp__hero-glow {
  position: absolute;
  top: -140px;
  left: 50%;
  width: 640px;
  height: 400px;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(213, 122, 42, 0.14),
    transparent 65%
  );
}

.cp__hero-inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.cp__eyebrow {
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

.cp__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px rgba(213, 122, 42, 0.14);
  animation: cp-pulse 2.4s ease infinite;
}

@keyframes cp-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 3px rgba(213, 122, 42, 0.14);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(213, 122, 42, 0.08);
  }
}

.cp__hero h1 {
  max-width: 960px;
  margin: 24px auto 0;
  color: var(--sd-text);
  font-size: clamp(3rem, 6.7vw, 6rem);
  font-weight: 850;
  line-height: 0.98;
  letter-spacing: -0.07em;
}

/* rotating word */
.cp__rotator {
  display: inline-flex;
  height: 1em;
  overflow: hidden;
  vertical-align: bottom;
  color: var(--sd-orange-strong);
}

.cp__rotator-track {
  display: inline-flex;
  flex-direction: column;
  animation: cp-rotate 7.5s cubic-bezier(0.76, 0, 0.24, 1) infinite;
}

.cp__rotator-track em {
  display: block;
  height: 1em;
  font-style: normal;
  line-height: 1;
}

@keyframes cp-rotate {
  0%,
  22% {
    transform: translateY(0);
  }
  30%,
  52% {
    transform: translateY(-1em);
  }
  60%,
  82% {
    transform: translateY(-2em);
  }
  90%,
  100% {
    transform: translateY(-3em);
  }
}

.cp__hero p {
  max-width: 720px;
  margin: 26px auto 0;
  color: var(--sd-text-soft);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
}

.cp__hero-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
}

.cp__hero-meta span {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
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

/* ---------- marquee ---------- */
.cp__marquee {
  position: relative;
  margin-top: 58px;
  padding: 16px 0;
  border-block: 1px solid var(--sd-border);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
}

.cp__marquee-track {
  display: flex;
  gap: 40px;
  width: max-content;
  animation: cp-marquee 28s linear infinite;
}

.cp__marquee-track span {
  display: inline-flex;
  align-items: center;
  gap: 40px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.cp__marquee-track span::after {
  content: "◆";
  color: var(--sd-orange);
  font-size: 8px;
}

@keyframes cp-marquee {
  to {
    transform: translateX(-50%);
  }
}

/* ==================== COMPANY MODEL ==================== */
.cp__model {
  margin-top: 90px;
}

.cp__model-head {
  max-width: 720px;
  margin-bottom: 40px;
}

.cp__model-head h2 {
  margin: 18px 0 0;
  color: var(--sd-text);
  font-size: clamp(2rem, 4.4vw, 3.4rem);
  font-weight: 830;
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.cp__model-head p {
  max-width: 660px;
  margin: 18px 0 0;
  color: var(--sd-text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

/* ---------- orbit diagram ---------- */
.cp__orbit {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
  padding: clamp(28px, 4vw, 44px);
  border: 1px solid var(--sd-border);
  border-radius: 26px;
  background:
    radial-gradient(
      90% 120% at 0% 50%,
      rgba(213, 122, 42, 0.06),
      transparent 60%
    ),
    var(--sd-bg-raised);
}

.cp__orbit-core {
  position: relative;
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 32px 24px;
  border: 1px solid rgba(213, 122, 42, 0.26);
  border-radius: 22px;
  background: rgba(213, 122, 42, 0.06);
  overflow: hidden;
}

.cp__orbit-core::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(213, 122, 42, 0.12),
    transparent
  );
  transform: translateX(-100%);
  animation: cp-sweep 4s ease-in-out infinite;
}

@keyframes cp-sweep {
  0%,
  55% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.cp__orbit-logo {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin-bottom: 14px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: var(--sd-bg-raised);
}

.cp__orbit-logo img {
  width: 60%;
  height: 60%;
  object-fit: contain;
}

.cp__orbit-core strong {
  color: var(--sd-text);
  font-size: 1.15rem;
  font-weight: 830;
  letter-spacing: -0.03em;
}

.cp__orbit-core small {
  margin-top: 5px;
  color: var(--sd-text-muted);
  font-size: 0.85rem;
}

.cp__orbit-ring {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.cp__orbit-node {
  position: relative;
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid var(--sd-border);
  border-radius: 16px;
  background: var(--sd-bg-raised);
  opacity: 0;
  transform: translateX(16px);
  transition:
    opacity 0.6s var(--sd-ease-out),
    transform 0.6s var(--sd-ease-out),
    border-color 0.2s var(--sd-ease-out);
  transition-delay: var(--d, 0s);
}

.cp__orbit.is-visible .cp__orbit-node {
  opacity: 1;
  transform: none;
}

.cp__orbit-node:hover {
  border-color: rgba(213, 122, 42, 0.3);
}

.cp__orbit-node-logo {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: var(--sd-bg-soft);
}

.cp__orbit-node-logo img {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.cp__orbit-node strong {
  display: block;
  color: var(--sd-text);
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1.15;
}

.cp__orbit-node small {
  display: block;
  margin-top: 2px;
  color: var(--sd-text-muted);
  font-size: 0.8rem;
}

.cp__orbit-wire {
  position: absolute;
  top: 50%;
  left: -28px;
  width: 28px;
  height: 1px;
  background: linear-gradient(90deg, rgba(213, 122, 42, 0.4), transparent);
}

/* ==================== MANIFESTO ==================== */
.cp__manifesto {
  margin-top: 90px;
}

.cp__manifesto-inner {
  padding: clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px);
  border-radius: 26px;
  background:
    radial-gradient(
      120% 140% at 90% 0%,
      rgba(213, 122, 42, 0.28),
      transparent 55%
    ),
    linear-gradient(160deg, #1b1410, #14100c);
  color: #f3f0ec;
}

.cp__eyebrow--light {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: #f0b483;
}

.cp__manifesto-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 40px);
  margin-top: 32px;
}

.cp__manifesto-item {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.7s var(--sd-ease-out),
    transform 0.7s var(--sd-ease-out);
  transition-delay: var(--d, 0s);
}

.cp__manifesto-inner.is-visible .cp__manifesto-item {
  opacity: 1;
  transform: none;
}

.cp__manifesto-num {
  display: block;
  color: #e07b2f;
  font-family: var(--sd-font-mono);
  font-size: 2.4rem;
  font-weight: 850;
  letter-spacing: -0.05em;
  line-height: 1;
}

.cp__manifesto-item h3 {
  margin: 14px 0 8px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 820;
  letter-spacing: -0.03em;
}

.cp__manifesto-item p {
  margin: 0;
  color: rgba(243, 240, 236, 0.72);
  font-size: 0.92rem;
  line-height: 1.62;
}

/* ==================== STRUCTURE ==================== */
.cp__sections {
  margin-top: 90px;
}

.cp__sections-head {
  max-width: 780px;
  margin-bottom: 34px;
}

.cp__sections-head h2 {
  margin: 18px 0 0;
  color: var(--sd-text);
  font-size: clamp(2rem, 4.4vw, 3.4rem);
  font-weight: 830;
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.cp__sections-head p {
  max-width: 700px;
  margin: 18px 0 0;
  color: var(--sd-text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.cp__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.cp__card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background: var(--sd-bg-raised);
  text-decoration: none;
  transition:
    border-color 0.2s var(--sd-ease-out),
    box-shadow 0.2s var(--sd-ease-out),
    transform 0.2s var(--sd-ease-out),
    opacity 0.6s var(--sd-ease-out);
}

.cp__card:hover {
  border-color: rgba(213, 122, 42, 0.3);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.cp__card-glow {
  position: absolute;
  top: -50%;
  right: -30%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(213, 122, 42, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s var(--sd-ease-out);
  pointer-events: none;
}

.cp__card:hover .cp__card-glow {
  opacity: 1;
}

.cp__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.cp__card-label {
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cp__card-arrow {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  color: var(--sd-text-muted);
  transition:
    background 0.2s var(--sd-ease-out),
    color 0.2s var(--sd-ease-out),
    transform 0.2s var(--sd-ease-out);
}

.cp__card-arrow svg {
  width: 12px;
  height: 12px;
}

.cp__card:hover .cp__card-arrow {
  background: rgba(213, 122, 42, 0.1);
  color: var(--sd-orange-strong);
  transform: translate(2px, -2px);
}

.cp__card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 20px;
  font-weight: 830;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.cp__card p {
  flex: 1;
  margin: 10px 0 0;
  color: var(--sd-text-muted);
  font-size: 13.5px;
  line-height: 1.56;
}

/* ==================== MOTION / RESPONSIVE ==================== */
@media (prefers-reduced-motion: reduce) {
  .cp__rotator-track,
  .cp__marquee-track,
  .cp__orbit-core::before,
  .cp__eyebrow-dot {
    animation: none;
  }

  .cp__rotator {
    height: auto;
  }
}

@media (max-width: 1080px) {
  .cp__orbit {
    grid-template-columns: 1fr;
  }

  .cp__manifesto-grid,
  .cp__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .cp__hero {
    padding-top: 80px;
  }

  .cp__hero h1 {
    letter-spacing: -0.06em;
  }

  .cp__model,
  .cp__manifesto,
  .cp__sections {
    margin-top: 68px;
  }

  .cp__orbit {
    padding: 22px;
    border-radius: 22px;
  }

  .cp__manifesto-grid,
  .cp__grid {
    grid-template-columns: 1fr;
  }

  .cp__orbit-wire {
    display: none;
  }
}

@media (max-width: 420px) {
  .cp__hero h1 {
    font-size: clamp(2.7rem, 13vw, 3.7rem);
  }

  .cp__hero-meta {
    justify-content: flex-start;
  }

  .cp__card {
    padding: 16px;
  }
}
</style>
