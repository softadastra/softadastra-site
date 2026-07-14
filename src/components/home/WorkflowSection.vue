<template>
  <section ref="root" class="wf sd-section">
    <div class="sd-section__inner">
      <div class="wf__head" data-reveal>
        <p class="wf__eyebrow">
          <span class="wf__eyebrow-dot" aria-hidden="true" />
          Workflow
        </p>
        <h2>From a local C++ application to organized team operations.</h2>
        <p>
          The platform starts with a working native application. Vix.cpp owns
          the local workflow, Rix adds reusable application capabilities, and
          Softadastra Cloud organizes the project metadata around the team.
        </p>
      </div>

      <div class="wf__grid">
        <!-- Timeline -->
        <ol class="wf__steps" aria-label="Workflow steps">
          <li
            v-for="(step, i) in steps"
            :key="step.title"
            class="wf__step"
            data-reveal
            :style="{ '--d': `${i * 0.09}s` }"
          >
            <div class="wf__marker" aria-hidden="true">
              <span class="wf__num">{{ step.number }}</span>
              <span v-if="i < steps.length - 1" class="wf__line" />
            </div>
            <div class="wf__step-body">
              <span class="wf__owner">{{ step.owner }}</span>
              <strong>{{ step.title }}</strong>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>

        <!-- Terminal -->
        <div
          class="wf__term"
          data-reveal
          aria-label="Verified Vix.cpp workflow commands"
        >
          <div class="wf__term-bar">
            <div class="wf__dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <strong>native-app — vix</strong>
            <span class="wf__tag">local</span>
          </div>

          <pre
            class="wf__term-body"
          ><code><span class="wf__ln"><span class="wf__p">$</span> vix new native-app</span>
<span class="wf__out">✓ project created · .vix/ scaffolded</span>
<span class="wf__ln"><span class="wf__p">$</span> vix build --release</span>
<span class="wf__out">✓ compiled in <b>12.4s</b> · 0 warnings</span>
<span class="wf__ln"><span class="wf__p">$</span> vix run main.cpp</span>
<span class="wf__out">→ server listening on :8080</span>
<span class="wf__ln"><span class="wf__p">$</span> vix cloud publish<span class="wf__cursor" aria-hidden="true" /></span></code></pre>

          <div class="wf__term-foot">
            <span class="wf__foot-dot" aria-hidden="true" />
            build stays local · metadata syncs to cloud
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const root = ref(null);
let observer = null;

const steps = [
  {
    number: "01",
    owner: "Project",
    title: "Create the application",
    text: "Start with a clear C++ project structure designed for native application development.",
  },
  {
    number: "02",
    owner: "Vix.cpp",
    title: "Build and run with Vix.cpp",
    text: "Use one command surface for local builds, development, diagnostics, modules, packages, servers, and application tooling.",
  },
  {
    number: "03",
    owner: "Rix",
    title: "Extend the application with Rix",
    text: "Add reusable application capabilities through focused libraries and simple APIs built for Vix.cpp.",
  },
  {
    number: "04",
    owner: "Cloud",
    title: "Organize the work in Softadastra Cloud",
    text: "Manage workspaces, private packages, versions, lockfiles, build reports, permissions, tokens, and project metadata while builds remain local.",
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
    opacity 0.7s var(--sd-ease-out),
    transform 0.7s var(--sd-ease-out);
  transition-delay: var(--d, 0s);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* ---------- head ---------- */
.wf__head {
  max-width: 720px;
  margin-bottom: 44px;
}

.wf__eyebrow {
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

.wf__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
  animation: wf-pulse 2.4s ease infinite;
}

@keyframes wf-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 3px var(--sd-accent-bg);
  }
  50% {
    box-shadow: 0 0 0 5px var(--sd-accent-bg);
  }
}

.wf h2 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.wf__head > p {
  max-width: 680px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

/* ---------- grid ---------- */
.wf__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
}

/* ---------- steps timeline ---------- */
.wf__steps {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.wf__step {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  gap: 14px;
  padding-bottom: 22px;
}

.wf__step:last-child {
  padding-bottom: 0;
}

.wf__marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wf__num {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-raised);
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11.5px;
  font-weight: 780;
  box-shadow: var(--sd-shadow-soft);
  transition:
    border-color 0.2s var(--sd-ease-out),
    transform 0.2s var(--sd-ease-out);
}

.wf__step:hover .wf__num {
  border-color: var(--sd-orange);
  transform: scale(1.06);
}

.wf__line {
  flex: 1;
  width: 2px;
  margin-top: 6px;
  background: linear-gradient(180deg, var(--sd-border-strong), transparent);
}

.wf__step-body {
  padding-top: 4px;
  min-width: 0;
}

.wf__owner {
  display: inline-flex;
  align-items: center;
  height: 18px;
  margin-bottom: 7px;
  padding: 0 8px;
  border: 1px solid var(--sd-border-highlight);
  border-radius: var(--sd-radius-full);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 760;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.wf__step-body strong {
  display: block;
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 730;
  letter-spacing: -0.01em;
}

.wf__step-body p {
  margin: 5px 0 0;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  line-height: 1.55;
}

/* ---------- terminal ---------- */
.wf__term {
  position: sticky;
  top: 90px;
  overflow: hidden;
  border: 1px solid #23262d;
  border-radius: var(--sd-radius-lg);
  background: #101216;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.28),
    0 6px 18px rgba(0, 0, 0, 0.18);
}

.wf__term-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-bottom: 1px solid #252932;
  background: #151821;
}

.wf__dots {
  display: flex;
  gap: 6px;
}

.wf__dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2c313b;
}

.wf__dots span:first-child {
  background: var(--sd-orange);
}

.wf__term-bar strong {
  flex: 1;
  color: #9aa4b2;
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 660;
}

.wf__tag {
  padding: 2px 8px;
  border: 1px solid #2c313b;
  border-radius: var(--sd-radius-full);
  color: #d8dce6;
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.wf__term-body {
  overflow-x: auto;
  margin: 0;
  padding: 20px;
}

.wf__term-body code {
  display: block;
  color: #f3f5f7;
  font-family: var(--sd-font-mono);
  font-size: 13px;
  line-height: 1.95;
  white-space: pre;
}

.wf__ln {
  display: block;
}

.wf__p {
  color: var(--sd-orange);
  font-weight: 700;
}

.wf__out {
  display: block;
  color: #7f8a99;
}

.wf__out b {
  color: #cbd3dd;
  font-weight: 700;
}

/* staged reveal — synced with terminal is-visible */
.wf__term-body code > * {
  opacity: 0;
}

.wf__term.is-visible .wf__term-body code > * {
  animation: wf-appear 0.4s ease forwards;
}

.wf__term.is-visible .wf__term-body code > :nth-child(1) {
  animation-delay: 0.25s;
}
.wf__term.is-visible .wf__term-body code > :nth-child(2) {
  animation-delay: 0.85s;
}
.wf__term.is-visible .wf__term-body code > :nth-child(3) {
  animation-delay: 1.4s;
}
.wf__term.is-visible .wf__term-body code > :nth-child(4) {
  animation-delay: 2s;
}
.wf__term.is-visible .wf__term-body code > :nth-child(5) {
  animation-delay: 2.55s;
}
.wf__term.is-visible .wf__term-body code > :nth-child(6) {
  animation-delay: 3.1s;
}
.wf__term.is-visible .wf__term-body code > :nth-child(7) {
  animation-delay: 3.65s;
}

@keyframes wf-appear {
  from {
    opacity: 0;
    transform: translateY(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.wf__cursor {
  display: inline-block;
  width: 7px;
  height: 14px;
  margin-left: 4px;
  vertical-align: -2px;
  background: #f3f5f7;
  animation: wf-blink 1.1s steps(1) infinite;
}

@keyframes wf-blink {
  50% {
    opacity: 0;
  }
}

.wf__term-foot {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  border-top: 1px solid #252932;
  background: #0c0e12;
  color: #7f8a99;
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 640;
}

.wf__foot-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--sd-orange);
  animation: wf-pulse2 2s ease infinite;
}

@keyframes wf-pulse2 {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wf__term-body code > *,
  .wf__cursor,
  .wf__eyebrow-dot,
  .wf__foot-dot {
    opacity: 1;
    animation: none;
  }
}

@media (max-width: 900px) {
  .wf__grid {
    grid-template-columns: 1fr;
  }

  .wf__term {
    position: static;
    order: -1;
  }
}
</style>
