<template>
  <section class="sdk-code sd-reveal">
    <div class="sdk-code__glow" aria-hidden="true" />
    <div class="sdk-code__grid" aria-hidden="true" />

    <div class="sdk-code__inner">
      <!-- LEFT: copy -->
      <div class="sdk-code__copy">
        <div class="sdk-code__badge">
          <span class="sdk-code__badge-dot" />
          Developer SDKs
        </div>

        <h2 class="sdk-code__title">Start with one SDK.</h2>

        <p class="sdk-code__desc">
          Use Softadastra from C++ or JavaScript to save data locally first,
          then sync later when the network is available.
        </p>

        <ul class="sdk-code__bullets">
          <li>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8.5l3 3 7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <div>
              <strong>Write locally</strong>
              <span>No round-trip. Instant feedback.</span>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8.5l3 3 7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <div>
              <strong>Persist &amp; queue</strong>
              <span>Durable on disk, replayable on reconnect.</span>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8.5l3 3 7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <div>
              <strong>Sync when possible</strong>
              <span>Peer-to-peer reconciliation, no central server.</span>
            </div>
          </li>
        </ul>

        <div class="sdk-code__actions">
          <a
            class="sdk-code__btn sdk-code__btn--primary"
            href="https://docs.softadastra.com/sdk-cpp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SDK C++
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <a
            class="sdk-code__btn sdk-code__btn--secondary"
            href="https://docs.softadastra.com/sdk-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            SDK JS
          </a>
        </div>
      </div>

      <!-- RIGHT: stacked code windows -->
      <div class="sdk-code__stack">
        <!-- BACK window: JS -->
        <article class="sdk-code__window sdk-code__window--back">
          <header class="sdk-code__chrome">
            <div class="sdk-code__dots">
              <span class="sdk-code__dot sdk-code__dot--red" />
              <span class="sdk-code__dot sdk-code__dot--yellow" />
              <span class="sdk-code__dot sdk-code__dot--green" />
            </div>
            <div class="sdk-code__file">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M2.5 2.5h7l4 4v7a.5.5 0 0 1-.5.5h-10.5a.5.5 0 0 1-.5-.5v-10.5a.5.5 0 0 1 .5-.5z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                />
                <path
                  d="M9.5 2.5v4h4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                />
              </svg>
              <span>sync.js</span>
              <em>JavaScript</em>
            </div>
          </header>

          <pre
            class="sdk-code__block"
          ><code><span class="tk-k">import</span> { <span class="tk-v">Client</span>, <span class="tk-v">ClientOptions</span> } <span class="tk-k">from</span> <span class="tk-s">"@softadastra/sdk"</span>;

<span class="tk-k">const</span> <span class="tk-v">client</span> = <span class="tk-k">new</span> <span class="tk-t">Client</span>(
  <span class="tk-t">ClientOptions</span>.<span class="tk-fn">local</span>(<span class="tk-s">"node-local"</span>),
);
<span class="tk-k">await</span> client.<span class="tk-fn">open</span>();
<span class="tk-k">await</span> client.<span class="tk-fn">put</span>(<span class="tk-s">"app/name"</span>, <span class="tk-s">"Softadastra"</span>);
<span class="tk-k">await</span> client.<span class="tk-fn">close</span>();</code></pre>
        </article>

        <!-- FRONT window: C++ -->
        <article class="sdk-code__window sdk-code__window--front">
          <header class="sdk-code__chrome">
            <div class="sdk-code__dots">
              <span class="sdk-code__dot sdk-code__dot--red" />
              <span class="sdk-code__dot sdk-code__dot--yellow" />
              <span class="sdk-code__dot sdk-code__dot--green" />
            </div>
            <div class="sdk-code__file">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M2.5 2.5h7l4 4v7a.5.5 0 0 1-.5.5h-10.5a.5.5 0 0 1-.5-.5v-10.5a.5.5 0 0 1 .5-.5z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                />
                <path
                  d="M9.5 2.5v4h4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                />
              </svg>
              <span>main.cpp</span>
              <em>C++</em>
            </div>
            <div class="sdk-code__status">
              <span />
              local-first
            </div>
          </header>

          <pre
            class="sdk-code__block"
          ><code><span class="tk-pp">#include</span> <span class="tk-s">&lt;softadastra/sdk.hpp&gt;</span>

<span class="tk-ty">int</span> <span class="tk-fn">main</span>() {
    <span class="tk-k">using namespace</span> <span class="tk-v">softadastra::sdk</span>;
    <span class="tk-t">Client</span> client{
        <span class="tk-t">ClientOptions</span>::<span class="tk-fn">local</span>(<span class="tk-s">"node-local"</span>)
    };

    client.<span class="tk-fn">open</span>();
    client.<span class="tk-fn">put</span>(<span class="tk-s">"app/name"</span>, <span class="tk-s">"Softadastra"</span>);
    client.<span class="tk-fn">close</span>();

    <span class="tk-k">return</span> <span class="tk-n">0</span>;
}</code></pre>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// No tabs — both languages are shown stacked.
// Keeping the script lean on purpose; the visual is the value here.
</script>

<style scoped>
.sdk-code {
  --sdk-bg: #0b2b22;
  --sdk-surface: #102f27;
  --sdk-panel: #143a30;
  --sdk-border: rgba(255, 255, 255, 0.11);
  --sdk-border-strong: rgba(255, 255, 255, 0.18);
  --sdk-text: #f2fff8;
  --sdk-muted: rgba(224, 246, 235, 0.72);
  --sdk-hint: rgba(224, 246, 235, 0.5);
  --sdk-green: #2fd49c;
  --sdk-green-soft: rgba(47, 212, 156, 0.14);
  --sdk-orange: var(--sd-orange, #c06a22);
  --sdk-orange-strong: var(--sd-orange-strong, #d57a2a);

  /* syntax tokens */
  --tk-keyword: #ff7ab2;
  --tk-string: #9bd47a;
  --tk-fn: #6fb8ff;
  --tk-type: #f0c674;
  --tk-var: #e6f0ea;
  --tk-num: #f0a07a;
  --tk-pp: #b48ead;
  --tk-comment: rgba(224, 246, 235, 0.42);

  position: relative;
  overflow: hidden;
  padding: 110px 0;
  background:
    radial-gradient(
      ellipse 60% 80% at 90% 50%,
      rgba(47, 212, 156, 0.06),
      transparent 60%
    ),
    linear-gradient(180deg, #0a261f 0%, #0b2b22 100%);
  border-bottom: 1px solid var(--sdk-border);
}

.sdk-code__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(
    ellipse 80% 60% at 50% 50%,
    black 0%,
    transparent 75%
  );
  pointer-events: none;
}

.sdk-code__glow {
  position: absolute;
  right: -180px;
  top: 8%;
  width: 620px;
  height: 620px;
  border-radius: 999px;
  background: radial-gradient(
    circle,
    rgba(47, 212, 156, 0.14),
    transparent 70%
  );
  pointer-events: none;
  filter: blur(20px);
}

.sdk-code__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(40px, 6vw, 100px);
  align-items: center;
  width: min(100% - 48px, 1320px);
  margin-inline: auto;
}

/* ============== LEFT COPY ============== */

.sdk-code__copy {
  max-width: 540px;
}

.sdk-code__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 26px;
  padding: 6px 14px;
  border: 1px solid rgba(47, 212, 156, 0.28);
  border-radius: 999px;
  background: rgba(47, 212, 156, 0.09);
  color: rgba(220, 255, 240, 0.92);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sdk-code__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--sdk-green);
  box-shadow: 0 0 0 4px rgba(47, 212, 156, 0.15);
  animation: sdk-pulse 2.4s ease-in-out infinite;
}

@keyframes sdk-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 4px rgba(47, 212, 156, 0.15);
  }
  50% {
    box-shadow: 0 0 0 7px rgba(47, 212, 156, 0.04);
  }
}

.sdk-code__title {
  margin: 0;
  color: var(--sdk-text);
  font-size: clamp(40px, 4.6vw, 64px);
  font-weight: 860;
  line-height: 1.02;
  letter-spacing: -0.058em;
}

.sdk-code__title span {
  display: block;
  background: linear-gradient(125deg, #2fd49c 0%, #86efac 60%, #d9ffec 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sdk-code__desc {
  max-width: 520px;
  margin: 24px 0 0;
  color: var(--sdk-muted);
  font-size: 16px;
  line-height: 1.72;
}

.sdk-code__bullets {
  list-style: none;
  margin: 32px 0 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.sdk-code__bullets li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.sdk-code__bullets svg {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  padding: 2px;
  border-radius: 999px;
  background: var(--sdk-green-soft);
  color: var(--sdk-green);
}

.sdk-code__bullets strong {
  display: block;
  color: var(--sdk-text);
  font-size: 14.5px;
  font-weight: 760;
  letter-spacing: -0.015em;
}

.sdk-code__bullets span {
  display: block;
  margin-top: 2px;
  color: var(--sdk-hint);
  font-size: 13px;
  line-height: 1.55;
}

.sdk-code__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}

.sdk-code__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 24px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease;
}

.sdk-code__btn:hover {
  transform: translateY(-1px);
}

.sdk-code__btn--primary {
  border: 1px solid transparent;
  background: linear-gradient(
    180deg,
    var(--sdk-orange-strong),
    var(--sdk-orange)
  );
  color: #1a0a02;
  box-shadow: 0 8px 24px rgba(213, 122, 42, 0.25);
}

.sdk-code__btn--primary:hover {
  box-shadow: 0 12px 32px rgba(213, 122, 42, 0.38);
}

.sdk-code__btn--secondary {
  border: 1px solid var(--sdk-border-strong);
  background: rgba(255, 255, 255, 0.05);
  color: var(--sdk-text);
}

.sdk-code__btn--secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(47, 212, 156, 0.3);
}

/* ============== RIGHT STACKED WINDOWS ============== */

.sdk-code__stack {
  position: relative;
  min-height: 540px;
}

.sdk-code__window {
  position: absolute;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--sdk-border-strong);
  border-radius: 16px;
  background: #0d2820;
  box-shadow:
    0 32px 64px -16px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

/* Back window: smaller, offset top-right, slightly faded */
.sdk-code__window--back {
  top: 0;
  right: -2%;
  width: 78%;
  transform: rotate(0.6deg);
  z-index: 1;
  opacity: 0.94;
}

/* Front window: larger, offset bottom-left, fully prominent */
.sdk-code__window--front {
  bottom: 0;
  left: -2%;
  width: 88%;
  transform: rotate(-0.4deg);
  z-index: 2;
  box-shadow:
    0 40px 80px -20px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(47, 212, 156, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.sdk-code__chrome {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
}

.sdk-code__dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.sdk-code__dot {
  width: 11px;
  height: 11px;
  border-radius: 999px;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.25);
}

.sdk-code__dot--red {
  background: #ff5f56;
}
.sdk-code__dot--yellow {
  background: #ffbd2e;
}
.sdk-code__dot--green {
  background: #27c93f;
}

.sdk-code__file {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px 5px 9px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(224, 246, 235, 0.78);
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 11.5px;
  font-weight: 600;
}

.sdk-code__file svg {
  width: 12px;
  height: 12px;
  color: var(--sdk-green);
  opacity: 0.85;
}

.sdk-code__file em {
  margin-left: 4px;
  padding-left: 8px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--sdk-hint);
  font-style: normal;
  font-size: 10.5px;
  font-weight: 600;
}

.sdk-code__status {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--sdk-green-soft);
  color: var(--sdk-green);
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 10.5px;
  font-weight: 700;
}

.sdk-code__status span {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 8px currentColor;
}

/* ============== CODE BLOCK + SYNTAX HIGHLIGHTING ============== */

.sdk-code__block {
  margin: 0;
  padding: 22px 26px;
  overflow-x: auto;
  color: var(--tk-var);
  font-family: "SF Mono", "JetBrains Mono", "Fira Code", Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.72;
  tab-size: 4;
}

.sdk-code__window--back .sdk-code__block {
  font-size: 12.5px;
  padding: 18px 22px;
}

.sdk-code__block code {
  font: inherit;
  display: block;
  white-space: pre;
}

/* Syntax tokens — readable, distinct hues that work on dark green */
.tk-k {
  color: var(--tk-keyword);
  font-weight: 600;
} /* keyword */
.tk-s {
  color: var(--tk-string);
} /* string */
.tk-fn {
  color: var(--tk-fn);
} /* function call */
.tk-t {
  color: var(--tk-type);
} /* type/class */
.tk-ty {
  color: var(--tk-type);
  font-weight: 600;
} /* primitive type */
.tk-v {
  color: var(--tk-var);
} /* variable / namespace */
.tk-n {
  color: var(--tk-num);
} /* number */
.tk-pp {
  color: var(--tk-pp);
  font-weight: 600;
} /* preprocessor */
.tk-c {
  color: var(--tk-comment);
  font-style: italic;
} /* comment */

/* ============== RUN LINE (front window only) ============== */

.sdk-code__runline {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.18);
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 12px;
}

.sdk-code__prompt {
  color: var(--sdk-green);
  font-weight: 700;
}
.sdk-code__cmd {
  color: rgba(224, 246, 235, 0.78);
}
.sdk-code__out {
  margin-left: auto;
  color: var(--sdk-green);
  opacity: 0.85;
}
.sdk-code__stack {
  position: relative;
  min-height: 620px;
}

.sdk-code__window--back {
  top: 0;
  right: -2%;
  width: 78%;
  transform: rotate(0.6deg);
  z-index: 1;
  opacity: 0.94;
}

.sdk-code__window--front {
  top: 96px;
  left: -2%;
  width: 88%;
  transform: rotate(-0.4deg);
  z-index: 2;
  box-shadow:
    0 40px 80px -20px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(47, 212, 156, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.sdk-code__stack {
  position: relative;
  min-height: 720px;
}

.sdk-code__window--back {
  top: 0;
  right: -1%;
  width: 78%;
  transform: rotate(0.6deg);
  z-index: 1;
  opacity: 0.96;
}

.sdk-code__window--front {
  top: 220px;
  left: -2%;
  width: 88%;
  transform: rotate(-0.4deg);
  z-index: 2;
  box-shadow:
    0 40px 80px -20px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(47, 212, 156, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.sdk-code__stack {
  position: relative;
  min-height: 640px;
}

.sdk-code__window--front {
  top: 220px;
  left: -2%;
  width: 82%;
  transform: rotate(-0.4deg);
  z-index: 2;
  box-shadow:
    0 40px 80px -20px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(47, 212, 156, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.sdk-code__window--front .sdk-code__block {
  padding: 18px 24px;
  font-size: 12.5px;
  line-height: 1.55;
}
.sdk-code__stack {
  position: relative;
  min-height: 560px;
}

.sdk-code__window--front {
  top: 230px;
  left: -2%;
  width: 76%;
  transform: rotate(-0.4deg);
  z-index: 2;
  box-shadow:
    0 34px 70px -22px rgba(0, 0, 0, 0.68),
    0 0 0 1px rgba(47, 212, 156, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.sdk-code__window--front .sdk-code__block {
  padding: 14px 20px;
  font-size: 11.5px;
  line-height: 1.42;
}
.sdk-code__window--front .sdk-code__chrome {
  padding: 9px 14px;
}

.sdk-code__window--front .sdk-code__dot {
  width: 9px;
  height: 9px;
}

.sdk-code__window--front .sdk-code__file {
  padding: 4px 10px 4px 8px;
  font-size: 10.5px;
}
.sdk-code__stack {
  position: relative;
  min-height: 580px;
}

.sdk-code__window--back {
  top: -14px;
  right: -1%;
  width: 78%;
  transform: rotate(0.6deg);
  z-index: 1;
  opacity: 0.96;
}

.sdk-code__window--front {
  top: 230px;
  left: -2%;
  width: 76%;
  transform: rotate(-0.4deg);
  z-index: 2;
}
/* ============== RESPONSIVE ============== */

@media (max-width: 1100px) {
  .sdk-code__inner {
    grid-template-columns: 1fr;
  }

  .sdk-code__copy {
    max-width: 720px;
    margin-inline: auto;
  }

  .sdk-code__stack {
    max-width: 720px;
    margin-inline: auto;
    min-height: 580px;
  }
}

@media (max-width: 760px) {
  .sdk-code {
    padding: 64px 0;
    overflow: hidden;
  }

  .sdk-code__inner {
    width: min(100% - 32px, 1320px);
  }

  .sdk-code__stack {
    min-height: 0;
    display: grid;
    gap: 20px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .sdk-code__window {
    position: relative;
    width: 100%;
    max-width: 100%;
    inset: auto;
    transform: none;
    opacity: 1;
    overflow: hidden;
  }

  .sdk-code__window--back {
    order: 2;
  }

  .sdk-code__window--front {
    order: 1;
  }

  .sdk-code__block {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 14px 14px;
    font-size: 11.5px;
    line-height: 1.45;
    overflow-x: auto;
  }

  .sdk-code__window--back .sdk-code__block {
    font-size: 11px;
  }

  .sdk-code__block code {
    display: block;
    min-width: max-content;
  }

  .sdk-code__file {
    max-width: calc(100% - 90px);
    overflow: hidden;
  }

  .sdk-code__file span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sdk-code__file em {
    display: none;
  }
}
</style>
