<template>
  <SiteShell>
    <article class="stack-page">
      <header class="stack-page__hero">
        <div class="sd-container stack-page__hero-inner">
          <RouterLink to="/stacks" class="stack-page__back">
            Back to stacks
          </RouterLink>

          <div class="stack-page__meta">
            <span>{{ currentStack.layer }}</span>
            <span>{{ currentStack.status }}</span>
            <span>{{ currentStack.license }}</span>
          </div>

          <h1>{{ currentStack.name }}</h1>

          <p class="stack-page__tagline">
            {{ currentStack.tagline }}
          </p>

          <p class="stack-page__description">
            {{ currentStack.description }}
          </p>

          <div class="stack-page__actions">
            <a
              v-if="currentStack.docsHref && currentStack.docsHref !== '#'"
              :href="currentStack.docsHref"
              class="stack-page__button stack-page__button--primary"
            >
              Read the docs
            </a>

            <a
              v-if="currentStack.githubHref && currentStack.githubHref !== '#'"
              :href="currentStack.githubHref"
              class="stack-page__button"
            >
              GitHub
            </a>

            <a
              v-if="currentStack.href && currentStack.href !== '#'"
              :href="currentStack.href"
              class="stack-page__button"
            >
              Website
            </a>
          </div>
        </div>
      </header>

      <main class="stack-page__content sd-container">
        <section
          v-if="currentStack.highlights?.length"
          class="stack-page__section"
        >
          <p class="stack-page__eyebrow">Overview</p>
          <h2>What you should know first</h2>

          <ul class="stack-page__cards">
            <li
              v-for="item in currentStack.highlights.slice(0, 3)"
              :key="item"
              class="stack-page__card"
            >
              {{ item }}
            </li>
          </ul>
        </section>

        <section
          v-if="currentStack.features?.length"
          class="stack-page__section"
        >
          <p class="stack-page__eyebrow">Capabilities</p>
          <h2>What it helps you build</h2>

          <div class="stack-page__features">
            <div
              v-for="feature in currentStack.features.slice(0, 4)"
              :key="feature.label"
              class="stack-page__feature"
            >
              <h3>{{ feature.label }}</h3>
              <p>{{ feature.detail }}</p>
            </div>
          </div>
        </section>

        <section v-if="currentStack.quickstart" class="stack-page__section">
          <p class="stack-page__eyebrow">Start</p>
          <h2>Try it quickly</h2>

          <pre
            class="stack-page__code"
          ><code>{{ currentStack.quickstart }}</code></pre>
        </section>

        <section class="stack-page__section stack-page__section--next">
          <p class="stack-page__eyebrow">Next step</p>
          <h2>Go deeper when you are ready</h2>

          <p>
            This page gives a simple introduction to {{ currentStack.name }}.
            For architecture details, internals, commands, modules, and advanced
            usage, continue with the documentation.
          </p>

          <a
            v-if="currentStack.docsHref && currentStack.docsHref !== '#'"
            :href="currentStack.docsHref"
            class="stack-page__text-link"
          >
            Open documentation
          </a>
        </section>

        <section v-if="relatedStacks.length" class="stack-page__section">
          <p class="stack-page__eyebrow">Ecosystem</p>
          <h2>Other parts of the stack</h2>

          <div class="stack-page__related">
            <RouterLink
              v-for="stack in relatedStacks"
              :key="stack.id"
              :to="`/stacks/${stack.id}`"
              class="stack-page__related-card"
            >
              <span>{{ stack.layer }}</span>
              <strong>{{ stack.name }}</strong>
              <p>{{ stack.tagline }}</p>
            </RouterLink>
          </div>
        </section>
      </main>
    </article>
  </SiteShell>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { stacks } from "../data/stacks";
import SiteShell from "../components/layout/SiteShell.vue";

const route = useRoute();

const currentStack = computed(() => {
  return (
    stacks.find((stack) => stack.id === route.params.id) || {
      id: "unknown",
      name: "Stack not found",
      role: "Unknown",
      layer: "Unknown",
      tagline:
        "This stack does not exist in the current Softadastra ecosystem.",
      description:
        "The requested stack could not be found. Go back to the ecosystem page.",
      status: "Unknown",
      license: "Unknown",
      color: "default",
      href: "#",
      docsHref: "#",
      githubHref: "#",
    }
  );
});

const relatedStacks = computed(() => {
  return stacks.filter((stack) => stack.id !== currentStack.value.id);
});
</script>

<style scoped>
.stack-page {
  min-height: 100vh;
  background: var(--sd-bg);
  color: var(--sd-text);
}

.stack-page__hero {
  border-bottom: 1px solid var(--sd-border);
  padding: 72px 0 56px;
}

.stack-page__hero-inner {
  max-width: 820px;
}

.stack-page__back {
  display: inline-flex;
  margin-bottom: 28px;
  color: var(--sd-text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}

.stack-page__back:hover {
  color: var(--sd-text);
}

.stack-page__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.stack-page__meta span {
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  padding: 6px 10px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.stack-page__hero h1 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-weight: 850;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.stack-page__tagline {
  max-width: 720px;
  margin: 22px 0 0;
  color: var(--sd-text);
  font-size: clamp(1.15rem, 2.4vw, 1.55rem);
  font-weight: 650;
  line-height: 1.45;
  letter-spacing: -0.025em;
}

.stack-page__description {
  max-width: 700px;
  margin: 18px 0 0;
  color: var(--sd-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.stack-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.stack-page__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border: 1px solid var(--sd-border);
  border-radius: 10px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--sd-text-soft);
  font-size: 0.92rem;
  font-weight: 650;
  text-decoration: none;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.stack-page__button:hover {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: var(--sd-text);
  transform: translateY(-1px);
}

.stack-page__button--primary {
  border-color: rgba(47, 212, 156, 0.35);
  background: rgba(47, 212, 156, 0.1);
  color: var(--sd-green, #2fd49c);
}

.stack-page__button--primary:hover {
  border-color: rgba(47, 212, 156, 0.55);
  background: rgba(47, 212, 156, 0.15);
  color: var(--sd-green, #2fd49c);
}

.stack-page__content {
  max-width: 820px;
  padding-top: 64px;
  padding-bottom: 110px;
}

.stack-page__section {
  margin-bottom: 64px;
}

.stack-page__section:last-child {
  margin-bottom: 0;
}

.stack-page__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-green, #2fd49c);
  font-family: var(--sd-font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stack-page__section h2 {
  max-width: 620px;
  margin: 0 0 24px;
  color: var(--sd-text);
  font-size: clamp(1.45rem, 3vw, 2rem);
  font-weight: 780;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.stack-page__section p {
  max-width: 680px;
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 0.98rem;
  line-height: 1.75;
}

.stack-page__cards {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.stack-page__card {
  border: 1px solid var(--sd-border);
  border-radius: 14px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--sd-text-soft);
  font-size: 0.98rem;
  line-height: 1.6;
}

.stack-page__features {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.stack-page__feature {
  border: 1px solid var(--sd-border);
  border-radius: 14px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
}

.stack-page__feature h3 {
  margin: 0 0 8px;
  color: var(--sd-text);
  font-size: 1rem;
  font-weight: 720;
  letter-spacing: -0.015em;
}

.stack-page__feature p {
  color: var(--sd-text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.stack-page__code {
  margin: 0;
  border: 1px solid var(--sd-border);
  border-radius: 14px;
  padding: 18px 20px;
  background: rgba(0, 0, 0, 0.25);
  overflow-x: auto;
}

.stack-page__code code {
  color: var(--sd-green, #2fd49c);
  font-family: var(--sd-font-mono);
  font-size: 0.88rem;
  line-height: 1.7;
  white-space: pre;
}

.stack-page__section--next {
  border: 1px solid rgba(47, 212, 156, 0.2);
  border-radius: 18px;
  padding: 28px;
  background: rgba(47, 212, 156, 0.055);
}

.stack-page__text-link {
  display: inline-flex;
  margin-top: 18px;
  color: var(--sd-green, #2fd49c);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
}

.stack-page__text-link:hover {
  text-decoration: underline;
}

.stack-page__related {
  display: grid;
  gap: 12px;
}

.stack-page__related-card {
  display: block;
  border: 1px solid var(--sd-border);
  border-radius: 14px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    transform 160ms ease;
}

.stack-page__related-card:hover {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-1px);
}

.stack-page__related-card span {
  display: block;
  margin-bottom: 6px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 0.7rem;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.stack-page__related-card strong {
  display: block;
  margin-bottom: 6px;
  color: var(--sd-text);
  font-size: 1rem;
  font-weight: 720;
}

.stack-page__related-card p {
  color: var(--sd-text-muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

@media (max-width: 720px) {
  .stack-page__hero {
    padding: 52px 0 42px;
  }

  .stack-page__content {
    padding-top: 48px;
    padding-bottom: 80px;
  }

  .stack-page__features {
    grid-template-columns: 1fr;
  }

  .stack-page__section {
    margin-bottom: 52px;
  }
}

@media (max-width: 480px) {
  .stack-page__actions {
    flex-direction: column;
  }

  .stack-page__button {
    width: 100%;
  }

  .stack-page__section--next {
    padding: 22px;
  }
}

/* ==========================================================================
   Softadastra Engine stack page override
   ========================================================================== */

.stack-page {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 100vh;
  background: transparent;
  color: var(--sd-text);
}

.stack-page::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 50% -8%,
      rgba(246, 222, 184, 0.46) 0%,
      rgba(222, 174, 111, 0.16) 20%,
      transparent 44%
    ),
    radial-gradient(
      circle at 84% 22%,
      rgba(213, 122, 42, 0.14) 0%,
      transparent 38%
    ),
    radial-gradient(
      circle at 12% 58%,
      rgba(246, 222, 184, 0.08) 0%,
      transparent 34%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 33%,
      rgba(213, 122, 42, 0.12) 34%,
      rgba(226, 154, 85, 0.08) 42%,
      transparent 51%
    );

  opacity: 0.95;
}

.stack-page::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.014) 0px,
    rgba(255, 255, 255, 0.014) 1px,
    transparent 1px,
    transparent 4px
  );

  opacity: 0.26;
  mix-blend-mode: soft-light;
}

.stack-page__hero,
.stack-page__content {
  position: relative;
  z-index: 2;
}

/* ==========================================================================
   Stack page hero override
   ========================================================================== */

.stack-page__hero {
  border-bottom: 1px solid rgba(255, 244, 224, 0.09);
  padding: 72px 0 56px;
}

.stack-page__back {
  color: rgba(246, 232, 204, 0.56);
}

.stack-page__back:hover {
  color: var(--sd-orange-strong);
}

.stack-page__meta span {
  border-color: rgba(255, 244, 224, 0.11);
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.62);
}

.stack-page__hero h1 {
  color: rgba(255, 248, 235, 0.96);
}

.stack-page__tagline {
  color: rgba(255, 248, 235, 0.9);
}

.stack-page__description {
  color: rgba(246, 232, 204, 0.68);
}

/* ==========================================================================
   Stack page buttons override
   ========================================================================== */

.stack-page__button {
  border-color: rgba(255, 244, 224, 0.13);
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.82);

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.stack-page__button:hover {
  border-color: rgba(255, 244, 224, 0.22);
  background: rgba(255, 244, 224, 0.075);
  color: rgba(255, 248, 235, 0.96);
  transform: translateY(-1px);
}

.stack-page__button--primary {
  border-color: rgba(226, 154, 85, 0.32);
  background: linear-gradient(
    180deg,
    rgba(213, 122, 42, 0.18),
    rgba(213, 122, 42, 0.08)
  );
  color: var(--sd-orange-strong);

  box-shadow:
    0 10px 28px rgba(213, 122, 42, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.stack-page__button--primary:hover {
  border-color: rgba(226, 154, 85, 0.42);
  background: linear-gradient(
    180deg,
    rgba(213, 122, 42, 0.24),
    rgba(213, 122, 42, 0.11)
  );
  color: #ffc184;
}

/* ==========================================================================
   Stack page sections and cards override
   ========================================================================== */

.stack-page__eyebrow {
  color: var(--sd-orange-strong);
}

.stack-page__section h2 {
  color: rgba(255, 248, 235, 0.96);
}

.stack-page__section p {
  color: rgba(246, 232, 204, 0.64);
}

.stack-page__card,
.stack-page__feature,
.stack-page__related-card {
  position: relative;
  overflow: hidden;
  border-color: rgba(255, 244, 224, 0.1);

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(255, 244, 224, 0.055),
      rgba(255, 244, 224, 0.022)
    );

  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.stack-page__card {
  color: rgba(246, 232, 204, 0.72);
}

.stack-page__feature h3 {
  color: rgba(255, 248, 235, 0.95);
}

.stack-page__feature p {
  color: rgba(246, 232, 204, 0.56);
}

.stack-page__related-card:hover {
  border-color: rgba(226, 154, 85, 0.3);
  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.1),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(213, 122, 42, 0.09),
      rgba(255, 244, 224, 0.035)
    );

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.22),
    0 8px 28px rgba(213, 122, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transform: translateY(-2px);
}

.stack-page__related-card span {
  color: rgba(246, 232, 204, 0.44);
}

.stack-page__related-card strong {
  color: rgba(255, 248, 235, 0.95);
}

.stack-page__related-card p {
  color: rgba(246, 232, 204, 0.56);
}

.stack-page__related-card:hover strong {
  color: var(--sd-orange-strong);
}

/* ==========================================================================
   Stack page code override
   ========================================================================== */

.stack-page__code {
  border-color: rgba(255, 244, 224, 0.11);
  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(213, 122, 42, 0.08),
      transparent 34%
    ),
    rgba(6, 24, 19, 0.64);

  box-shadow:
    0 18px 54px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

.stack-page__code code {
  color: #f6d6aa;
}

/* ==========================================================================
   Stack page next section override
   ========================================================================== */

.stack-page__section--next {
  border: 1px solid rgba(226, 154, 85, 0.24);
  border-radius: 18px;

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08),
      transparent 34%
    ),
    linear-gradient(180deg, rgba(213, 122, 42, 0.11), rgba(255, 244, 224, 0.03));

  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.18),
    0 8px 28px rgba(213, 122, 42, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.stack-page__text-link {
  color: var(--sd-orange-strong);
}

.stack-page__text-link:hover {
  color: #ffc184;
  text-decoration: none;
}
</style>
