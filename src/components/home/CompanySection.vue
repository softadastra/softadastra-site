<template>
  <section ref="root" class="cs sd-section">
    <div class="sd-section__inner cs__inner">
      <div class="cs__copy" data-reveal>
        <p class="cs__eyebrow">
          <span class="cs__eyebrow-dot" aria-hidden="true" />
          The company
        </p>

        <h2>The company behind the platform.</h2>

        <p>
          Softadastra is a C++ tooling company building open foundations for
          local development, reusable application libraries, and team
          operations.
        </p>

        <p>
          From Vix.cpp and Rix to Softadastra Cloud, each product covers a clear
          layer of the same workflow, from creating native applications to
          managing private packages, build information, and projects across a
          team.
        </p>

        <a class="cs__link" :href="links.company">
          Learn about Softadastra
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

      <div class="cs__principles" data-reveal>
        <p class="cs__principles-label">Operating principles</p>

        <article
          v-for="(p, i) in principles"
          :key="p.title"
          class="cs__row"
          :style="{ '--d': `${0.15 + i * 0.1}s` }"
        >
          <span class="cs__row-bar" aria-hidden="true" />
          <span class="cs__row-num">{{ p.number }}</span>

          <div class="cs__row-body">
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { links } from "../../data/links";

const root = ref(null);
let observer = null;

const principles = [
  {
    number: "01",
    title: "Open foundations",
    text: "The core development tools remain inspectable, usable locally, and independent from the cloud.",
  },
  {
    number: "02",
    title: "Native by design",
    text: "The platform is built around compiled C++ applications, predictable workflows, and native performance.",
  },
  {
    number: "03",
    title: "One connected workflow",
    text: "Each product owns a clear layer, from local development to private packages and team operations.",
  },
];
onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = root.value?.querySelectorAll("[data-reveal], .cs__row") ?? [];

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
.cs {
  background: var(--sd-bg-soft);
  border-block: 1px solid var(--sd-border);
}

[data-reveal],
.cs__row {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.7s var(--sd-ease-out),
    transform 0.7s var(--sd-ease-out);
  transition-delay: var(--d, 0s);
}

[data-reveal].is-visible,
.cs__row.is-visible {
  opacity: 1;
  transform: none;
}

.cs__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.82fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: start;
}

/* ---------- copy ---------- */
.cs__eyebrow {
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

.cs__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
}

.cs h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.cs__copy p:not(.cs__eyebrow) {
  max-width: 620px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.cs__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 26px;
  color: var(--sd-orange-dark);
  font-size: 13.5px;
  font-weight: 720;
  text-decoration: none;
}

.cs__link svg {
  transition: transform 0.18s var(--sd-ease-out);
}

.cs__link:hover {
  color: var(--sd-orange);
}

.cs__link:hover svg {
  transform: translateX(3px);
}

/* ---------- principles ---------- */
.cs__principles {
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.cs__principles-label {
  margin: 0;
  padding: 13px 20px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.cs__row {
  position: relative;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 14px;
  padding: 18px 20px 18px 22px;
  border-bottom: 1px solid var(--sd-border);
  transition:
    background 0.2s var(--sd-ease-out),
    opacity 0.7s var(--sd-ease-out),
    transform 0.7s var(--sd-ease-out);
}

.cs__row:last-child {
  border-bottom: 0;
}

.cs__row-bar {
  position: absolute;
  top: 18px;
  bottom: 18px;
  left: 0;
  width: 3px;
  background: var(--sd-orange);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.24s var(--sd-ease-out);
}

.cs__row:hover {
  background: var(--sd-accent-bg-soft);
}

.cs__row:hover .cs__row-bar {
  transform: scaleY(1);
}

.cs__row-num {
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 20px;
  font-weight: 780;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.cs__row-body h3 {
  margin: 0 0 5px;
  color: var(--sd-text);
  font-size: 16px;
  font-weight: 730;
  letter-spacing: -0.015em;
}

.cs__row-body p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  line-height: 1.55;
}

@media (max-width: 860px) {
  .cs__inner {
    grid-template-columns: 1fr;
  }
}
</style>
