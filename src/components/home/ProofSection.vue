<template>
  <section ref="root" class="pr sd-section">
    <div class="sd-section__inner">
      <div class="pr__head" data-reveal>
        <p class="pr__eyebrow">
          <span class="pr__eyebrow-dot" aria-hidden="true" />
          Proof
        </p>
        <h2>Real work that developers can inspect.</h2>
        <p>
          Softadastra presents its platform through public repositories,
          documentation, released tooling destinations, and working applications
          instead of unverifiable adoption claims.
        </p>
      </div>

      <div class="pr__grid">
        <a
          v-for="(item, i) in proofItems"
          :key="item.title"
          :href="item.href"
          class="pr__card"
          data-reveal
          :style="{ '--d': `${0.1 + i * 0.09}s` }"
        >
          <span class="pr__card-glow" aria-hidden="true" />
          <div class="pr__card-top">
            <span class="pr__card-icon" aria-hidden="true">
              <component :is="item.icon" />
            </span>
            <span class="pr__card-label">{{ item.label }}</span>
          </div>

          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>

          <span class="pr__card-action">
            {{ item.action }}
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
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, ref, onMounted, onBeforeUnmount } from "vue";
import { links } from "../../data/links";

const root = ref(null);
let observer = null;

const IconSource = () =>
  h("svg", { viewBox: "0 0 24 24" }, [
    h("path", { d: "m9 8-4 4 4 4" }),
    h("path", { d: "m15 8 4 4-4 4" }),
  ]);

const IconDocs = () =>
  h("svg", { viewBox: "0 0 24 24" }, [
    h("path", { d: "M6 3h9l4 4v14H6z" }),
    h("path", { d: "M14 3v5h5" }),
    h("path", { d: "M9 13h6M9 17h6" }),
  ]);

const IconRuntime = () =>
  h("svg", { viewBox: "0 0 24 24" }, [
    h("circle", { cx: "12", cy: "12", r: "9" }),
    h("path", { d: "m10 8 5 4-5 4z" }),
  ]);

const IconTooling = () =>
  h("svg", { viewBox: "0 0 24 24" }, [
    h("path", { d: "M14 7a4 4 0 1 1-4 4" }),
    h("path", { d: "m11.5 12.5-7 7" }),
    h("path", { d: "M6 18l2 2" }),
  ]);

const proofItems = [
  {
    label: "Source",
    title: "Open repositories",
    icon: IconSource,
    text: "The Vix.cpp, Softadastra, SDK, Cnerium, Kordex, and Pico repositories are available for developers to inspect.",
    href: links.github,
    action: "View GitHub",
  },
  {
    label: "Docs",
    title: "Documentation",
    icon: IconDocs,
    text: "The public documentation covers guides, commands, modules, and examples across the Softadastra and Vix.cpp tooling.",
    href: links.docs,
    action: "Read docs",
  },
  {
    label: "Runtime",
    title: "Working applications",
    icon: IconRuntime,
    text: "Pico is a production-style validation application that exercises Vix.cpp modules, runtime state, and Rix integrations.",
    href: links.pico,
    action: "Open Pico",
  },
  {
    label: "Tooling",
    title: "SDK artifacts",
    icon: IconTooling,
    text: "The Softadastra SDK repository and documentation provide an inspectable foundation for local development and integration work.",
    href: links.sdkGithub,
    action: "View SDK",
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
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );

  targets.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
[data-reveal] {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.6s var(--sd-ease-out),
    transform 0.6s var(--sd-ease-out);
  transition-delay: var(--d, 0s);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* ---------- head (centered) ---------- */
.pr__head {
  max-width: 720px;
  margin: 0 auto 40px;
  text-align: center;
}

.pr__eyebrow {
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

.pr__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
}

.pr h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.pr__head p:not(.pr__eyebrow) {
  max-width: 620px;
  margin: 16px auto 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

/* ---------- cards ---------- */
.pr__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.pr__card {
  position: relative;
  display: grid;
  align-content: start;
  overflow: hidden;
  padding: 22px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
  text-decoration: none;
  transition:
    border-color 0.2s var(--sd-ease-out),
    box-shadow 0.2s var(--sd-ease-out),
    transform 0.2s var(--sd-ease-out),
    opacity 0.6s var(--sd-ease-out);
}

.pr__card:hover {
  border-color: var(--sd-border-highlight);
  box-shadow: var(--sd-shadow-card);
  transform: translateY(-3px);
}

.pr__card-glow {
  position: absolute;
  top: -40%;
  right: -30%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--sd-accent-bg-soft),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s var(--sd-ease-out);
  pointer-events: none;
}

.pr__card:hover .pr__card-glow {
  opacity: 1;
}

.pr__card-top {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 16px;
}

.pr__card-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-soft);
  color: var(--sd-orange-dark);
  transition:
    background 0.2s var(--sd-ease-out),
    border-color 0.2s var(--sd-ease-out),
    transform 0.2s var(--sd-ease-out);
}

.pr__card:hover .pr__card-icon {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
  transform: scale(1.05);
}

.pr__card-icon svg {
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pr__card-label {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.pr h3 {
  margin: 0 0 8px;
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 740;
  letter-spacing: -0.02em;
}

.pr__card p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  line-height: 1.58;
}

.pr__card-action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  color: var(--sd-orange-dark);
  font-size: 13px;
  font-weight: 700;
}

.pr__card-action svg {
  transition: transform 0.18s var(--sd-ease-out);
}

.pr__card:hover .pr__card-action {
  color: var(--sd-orange);
}

.pr__card:hover .pr__card-action svg {
  transform: translateX(3px);
}

@media (max-width: 760px) {
  .pr__grid {
    grid-template-columns: 1fr;
  }

  .pr__card {
    padding: 18px;
  }
}
</style>
