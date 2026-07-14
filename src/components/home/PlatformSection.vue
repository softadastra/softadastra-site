<template>
  <section id="platform" class="platform-section sd-section">
    <div class="sd-section__inner">
      <div class="platform-section__header sd-reveal">
        <p class="platform-section__eyebrow">
          <span class="platform-section__eyebrow-dot" aria-hidden="true" />
          The platform
        </p>

        <h2>One connected platform for modern C++ applications.</h2>

        <p>
          Vix.cpp, Rix, and Softadastra Cloud cover the core layers of the same
          workflow, from local development and reusable libraries to private
          packages and team operations.
        </p>
      </div>

      <div
        class="platform-section__stack sd-reveal sd-reveal-d2"
        aria-label="Softadastra platform layers"
      >
        <span class="platform-section__spine" aria-hidden="true" />

        <article v-for="layer in layers" :key="layer.name" class="pl-layer">
          <div class="pl-layer__rail" aria-hidden="true">
            <span class="pl-layer__node">
              <component :is="layer.icon" />
            </span>
          </div>

          <div class="pl-layer__card">
            <div class="pl-layer__top">
              <span class="pl-layer__step">{{ layer.step }}</span>
              <span class="pl-layer__label">{{ layer.label }}</span>
            </div>

            <h3>{{ layer.name }}</h3>
            <p>{{ layer.description }}</p>

            <a :href="layer.href" class="pl-layer__action">
              {{ layer.action }}
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from "vue";
import { links } from "../../data/links";

// Inline stroke icons (no external deps)
const IconBuild = () =>
  h("svg", { viewBox: "0 0 24 24" }, [
    h("path", { d: "m8 6-5 6 5 6" }),
    h("path", { d: "m16 6 5 6-5 6" }),
  ]);

const IconExtend = () =>
  h("svg", { viewBox: "0 0 24 24" }, [
    h("rect", { x: "3", y: "3", width: "8", height: "8", rx: "1.5" }),
    h("rect", { x: "13", y: "3", width: "8", height: "8", rx: "1.5" }),
    h("rect", { x: "3", y: "13", width: "8", height: "8", rx: "1.5" }),
    h("path", { d: "M17 13v8M13 17h8" }),
  ]);

const IconCloud = () =>
  h("svg", { viewBox: "0 0 24 24" }, [
    h("path", { d: "M21 16V8l-9-5-9 5v8l9 5 9-5z" }),
    h("path", { d: "M3.3 8.3 12 13l8.7-4.7" }),
    h("path", { d: "M12 22V13" }),
  ]);

const layers = [
  {
    step: "01",
    label: "Build and run",
    name: "Vix.cpp",
    icon: IconBuild,
    description:
      "A C++ runtime and CLI for creating projects, building applications, managing modules and packages, running servers and jobs, and diagnosing native workflows.",
    href: links.vix,
    action: "Explore Vix.cpp",
  },
  {
    step: "02",
    label: "Extend",
    name: "Rix",
    icon: IconExtend,
    description:
      "A userland library layer providing reusable packages and simple APIs for applications built with Vix.cpp.",
    href: links.rix,
    action: "Explore Rix",
  },
  {
    step: "03",
    label: "Organize with the team",
    name: "Softadastra Cloud",
    icon: IconCloud,
    description:
      "Workspaces, private packages, versions, lockfiles, build reports, permissions, tokens, and project metadata, while builds remain local.",
    href: links.cloud,
    action: "Explore Cloud",
  },
];
</script>

<style scoped>
.platform-section {
  background: var(--sd-bg-soft);
  border-block: 1px solid var(--sd-border);
}

/* ---------- Header (centered, Modular-style) ---------- */
.platform-section__header {
  max-width: 720px;
  margin: 0 auto 48px;
  text-align: center;
}

.platform-section__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.platform-section__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
}

.platform-section h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.platform-section__header > p:not(.platform-section__eyebrow) {
  max-width: 620px;
  margin: 16px auto 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

/* ---------- Vertical stack with connecting spine ---------- */
.platform-section__stack {
  position: relative;
  display: grid;
  gap: 18px;
  max-width: 860px;
  margin-inline: auto;
}

.platform-section__spine {
  position: absolute;
  top: 34px;
  bottom: 34px;
  left: 26px;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--sd-orange) 0%,
    var(--sd-border-strong) 12%,
    var(--sd-border-strong) 88%,
    var(--sd-orange) 100%
  );
}

/* ---------- Layer row ---------- */
.pl-layer {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
}

.pl-layer__rail {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.pl-layer__node {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
  color: var(--sd-orange-dark);
  box-shadow: var(--sd-shadow-soft);
}

.pl-layer__node svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* highlight the last node (Cloud = destination) */
.pl-layer:last-child .pl-layer__node {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #fff;
  box-shadow: 0 2px 10px rgba(173, 81, 23, 0.28);
}

/* ---------- Card ---------- */
.pl-layer__card {
  min-width: 0;
  padding: 20px 22px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
  transition:
    border-color 0.18s var(--sd-ease-out),
    box-shadow 0.18s var(--sd-ease-out),
    transform 0.18s var(--sd-ease-out);
}

.pl-layer__card:hover {
  border-color: var(--sd-border-highlight);
  box-shadow: var(--sd-shadow-card);
  transform: translateY(-2px);
}

.pl-layer__top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.pl-layer__step {
  display: inline-grid;
  place-items: center;
  min-width: 26px;
  height: 22px;
  padding: 0 7px;
  border: 1px solid var(--sd-border-highlight);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
}

.pl-layer__label {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 740;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.platform-section h3 {
  margin: 0 0 8px;
  color: var(--sd-text);
  font-size: 22px;
  font-weight: 740;
  letter-spacing: -0.02em;
}

.pl-layer__card p {
  margin: 0;
  max-width: 620px;
  color: var(--sd-text-soft);
  font-size: 14px;
  line-height: 1.62;
}

.pl-layer__action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  color: var(--sd-orange-dark);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.pl-layer__action svg {
  transition: transform 0.18s var(--sd-ease-out);
}

.pl-layer__action:hover {
  color: var(--sd-orange);
}

.pl-layer__action:hover svg {
  transform: translateX(3px);
}

/* ---------- Responsive ---------- */
@media (max-width: 640px) {
  .platform-section__stack {
    gap: 14px;
  }

  .platform-section__spine {
    left: 20px;
  }

  .pl-layer {
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 14px;
  }

  .pl-layer__rail {
    padding-top: 18px;
  }

  .pl-layer__node {
    width: 42px;
    height: 42px;
  }

  .pl-layer__node svg {
    width: 19px;
    height: 19px;
  }

  .pl-layer__card {
    padding: 16px 17px;
  }

  .platform-section h3 {
    font-size: 19px;
  }
}
</style>
