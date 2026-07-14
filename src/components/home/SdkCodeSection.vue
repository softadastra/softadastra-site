<template>
  <section class="sdk-showcase sd-section">
    <div class="sdk-showcase__inner sd-section__inner">
      <div class="sdk-showcase__header">
        <div class="sdk-showcase__eyebrow">
          <span />
          Softadastra C++ SDK
        </div>

        <div class="sdk-showcase__heading-grid">
          <div>
            <h2>Embed local-first storage and sync directly inside C++ apps.</h2>
            <p>
              The Softadastra SDK gives C++ developers a compact public API for
              local writes, WAL-backed recovery, sync state, manual ticks,
              transport, discovery, and node metadata.
            </p>
          </div>

          <div class="sdk-showcase__actions">
            <a
              class="sdk-showcase__button sdk-showcase__button--primary"
              :href="`${links.softadastraDocs}/sdk-cpp/`"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read SDK docs
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              class="sdk-showcase__button sdk-showcase__button--secondary"
              :href="links.sdkGithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="sdk-showcase__workspace">
        <div class="sdk-showcase__rail" aria-hidden="true">
          <span class="sdk-showcase__rail-label">Install</span>
          <span class="sdk-showcase__rail-label">Open</span>
          <span class="sdk-showcase__rail-label">Write</span>
          <span class="sdk-showcase__rail-label">Recover</span>
          <span class="sdk-showcase__rail-label">Sync</span>
        </div>

        <div class="sdk-showcase__code-card">
          <div class="sdk-showcase__code-topbar">
            <div class="sdk-showcase__file">
              <span class="sdk-showcase__file-dot" />
              main.cpp
            </div>
            <div class="sdk-showcase__pills">
              <span>C++20</span>
              <span>WAL-backed</span>
            </div>
          </div>

          <pre><code><span class="sdk-token sdk-token--muted">#include</span> <span class="sdk-token sdk-token--string">&lt;softadastra/sdk.hpp&gt;</span>

<span class="sdk-token sdk-token--keyword">using namespace</span> softadastra::sdk;

Client client{
  ClientOptions::persistent(
    <span class="sdk-token sdk-token--string">"quick-start-app"</span>,
    <span class="sdk-token sdk-token--string">"data/quick-start.wal"</span>
  )
};

<span class="sdk-token sdk-token--call">client.open</span>();
<span class="sdk-token sdk-token--call">client.put</span>(<span class="sdk-token sdk-token--string">"hello"</span>, <span class="sdk-token sdk-token--string">"world"</span>);

<span class="sdk-token sdk-token--keyword">auto</span> value = <span class="sdk-token sdk-token--call">client.get</span>(<span class="sdk-token sdk-token--string">"hello"</span>);
<span class="sdk-token sdk-token--keyword">auto</span> state = <span class="sdk-token sdk-token--call">client.sync_state</span>();
<span class="sdk-token sdk-token--keyword">auto</span> tick = <span class="sdk-token sdk-token--call">client.tick</span>();</code></pre>

          <div class="sdk-showcase__terminal" aria-label="Expected SDK output">
            <div class="sdk-showcase__terminal-line">
              <span>$</span>
              <strong>./app</strong>
            </div>
            <div class="sdk-showcase__terminal-line">
              <span>→</span>
              value: world
            </div>
            <div class="sdk-showcase__terminal-line">
              <span>→</span>
              queued operations: 1
            </div>
            <div class="sdk-showcase__terminal-line">
              <span>→</span>
              tick batch size: 1
            </div>
          </div>
        </div>

        <div class="sdk-showcase__side">
          <article class="sdk-showcase__card sdk-showcase__card--accent">
            <span class="sdk-showcase__card-kicker">Entry point</span>
            <h3>One client API.</h3>
            <p>
              Start with <code>softadastra::sdk::Client</code>. Keep runtime
              internals behind a small C++ interface.
            </p>
          </article>

          <div class="sdk-showcase__mini-grid">
            <article class="sdk-showcase__card">
              <span class="sdk-showcase__icon">01</span>
              <h3>Local-first writes</h3>
              <p>Accept important writes without requiring a live network.</p>
            </article>

            <article class="sdk-showcase__card">
              <span class="sdk-showcase__icon">02</span>
              <h3>Restart recovery</h3>
              <p>Use persistent WAL storage to recover data after restart.</p>
            </article>

            <article class="sdk-showcase__card">
              <span class="sdk-showcase__icon">03</span>
              <h3>Explicit sync</h3>
              <p>Inspect sync state and advance work with manual ticks.</p>
            </article>

            <article class="sdk-showcase__card">
              <span class="sdk-showcase__icon">04</span>
              <h3>Nodes and metadata</h3>
              <p>Add transport, discovery, peers, and local node details later.</p>
            </article>
          </div>
        </div>
      </div>

      <div class="sdk-showcase__docs">
        <a
          v-for="item in docLinks"
          :key="item.label"
          :href="`${links.softadastraDocs}${item.href}`"
          target="_blank"
          rel="noopener noreferrer"
          class="sdk-showcase__doc-link"
        >
          <span>{{ item.label }}</span>
          <small>{{ item.desc }}</small>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

const docLinks = [
  {
    label: "Installation",
    desc: "Install the C++ package and CMake integration.",
    href: "/sdk-cpp/installation",
  },
  {
    label: "Quick Start",
    desc: "Open a client, write locally, read back, tick sync.",
    href: "/sdk-cpp/quick-start",
  },
  {
    label: "Client Options",
    desc: "Choose memory-only, persistent, or fast mode.",
    href: "/sdk-cpp/client-options",
  },
  {
    label: "Sync State",
    desc: "Inspect queued operations and local sync progress.",
    href: "/sdk-cpp/sync-state",
  },
];
</script>

<style scoped>
.sdk-showcase {
  overflow: hidden;
  background: var(--sd-bg);
}

.sdk-showcase__inner {
  display: grid;
  gap: 28px;
}

.sdk-showcase__header {
  display: grid;
  gap: 16px;
}

.sdk-showcase__eyebrow {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-raised);
  color: var(--sd-orange-dark);
  font-size: 11.5px;
  font-weight: 700;
}

.sdk-showcase__eyebrow span {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
}

.sdk-showcase__heading-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: end;
}

.sdk-showcase h2 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 760;
  line-height: 1.04;
  letter-spacing: -0.04em;
}

.sdk-showcase__heading-grid p {
  max-width: 700px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 16px;
  line-height: 1.7;
}

.sdk-showcase__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}

.sdk-showcase__button {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 16px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
  font-size: 13.5px;
  font-weight: 650;
  text-decoration: none;
  transition:
    transform var(--sd-transition-fast),
    background var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    color var(--sd-transition-fast),
    box-shadow var(--sd-transition-fast);
}

.sdk-showcase__button:hover {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
  transform: translateY(-1px);
}

.sdk-showcase__button svg {
  width: 14px;
  height: 14px;
}

.sdk-showcase__button--primary {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.sdk-showcase__button--primary:hover {
  border-color: var(--sd-orange-dark);
  background: var(--sd-orange-dark);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.sdk-showcase__workspace {
  display: grid;
  grid-template-columns: 84px minmax(0, 1.25fr) minmax(320px, 0.85fr);
  gap: 14px;
  align-items: stretch;
}

.sdk-showcase__rail {
  display: grid;
  align-content: stretch;
  gap: 8px;
}

.sdk-showcase__rail-label {
  display: grid;
  min-height: 62px;
  place-items: center;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 760;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.sdk-showcase__code-card,
.sdk-showcase__card,
.sdk-showcase__doc-link {
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.025);
}

.sdk-showcase__code-card {
  overflow: hidden;
  min-width: 0;
}

.sdk-showcase__code-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.sdk-showcase__file {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  font-weight: 720;
}

.sdk-showcase__file-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
}

.sdk-showcase__pills,
.sdk-showcase__tokens {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.sdk-showcase__pills span,
.sdk-showcase__tokens span {
  display: inline-flex;
  min-height: 23px;
  align-items: center;
  padding: 0 7px;
  border: 1px solid var(--sd-border);
  border-radius: 5px;
  background: var(--sd-bg-raised);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 650;
}

.sdk-showcase pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  background: #111417;
  color: #eef2f0;
  font-family: var(--sd-font-mono);
  font-size: 12.5px;
  line-height: 1.7;
}

.sdk-showcase code {
  font-family: inherit;
}

.sdk-token--muted {
  color: #9aa3a1;
}

.sdk-token--string {
  color: #f7b267;
}

.sdk-token--keyword {
  color: #9fc5ff;
}

.sdk-token--call {
  color: #f59e5b;
}

.sdk-showcase__terminal {
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border-top: 1px solid #272c31;
  background: #181c20;
  color: #dce4e1;
  font-family: var(--sd-font-mono);
  font-size: 12px;
}

.sdk-showcase__terminal-line {
  display: flex;
  gap: 9px;
  align-items: center;
}

.sdk-showcase__terminal-line span {
  color: var(--sd-orange-strong);
}

.sdk-showcase__terminal-line strong {
  color: #ffffff;
  font-weight: 650;
}

.sdk-showcase__side {
  display: grid;
  gap: 14px;
  min-width: 0;
}

.sdk-showcase__card {
  display: grid;
  gap: 10px;
  min-width: 0;
  padding: 16px;
}

.sdk-showcase__card--accent {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
}

.sdk-showcase__card-kicker {
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sdk-showcase__card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 740;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.sdk-showcase__card p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 13px;
  line-height: 1.55;
}

.sdk-showcase__card code {
  padding: 1px 4px;
  border: 1px solid var(--sd-border);
  border-radius: 4px;
  background: var(--sd-bg-raised);
  color: var(--sd-orange-dark);
  font-size: 0.9em;
}

.sdk-showcase__mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.sdk-showcase__icon {
  display: inline-flex;
  width: fit-content;
  min-height: 24px;
  align-items: center;
  padding: 0 7px;
  border: 1px solid var(--sd-border);
  border-radius: 5px;
  background: var(--sd-bg-soft);
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
}

.sdk-showcase__docs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.sdk-showcase__doc-link {
  display: grid;
  gap: 5px;
  min-height: 92px;
  padding: 14px;
  text-decoration: none;
  transition:
    transform var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    box-shadow var(--sd-transition-fast);
}

.sdk-showcase__doc-link:hover {
  border-color: var(--sd-border-strong);
  background: var(--sd-bg-soft);
  transform: translateY(-2px);
  box-shadow: var(--sd-shadow-soft);
}

.sdk-showcase__doc-link span {
  color: var(--sd-text);
  font-size: 13.5px;
  font-weight: 720;
}

.sdk-showcase__doc-link small {
  color: var(--sd-text-muted);
  font-size: 12px;
  line-height: 1.45;
}

@media (max-width: 1120px) {
  .sdk-showcase__workspace {
    grid-template-columns: minmax(0, 1fr);
  }

  .sdk-showcase__rail {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .sdk-showcase__rail-label {
    min-height: 36px;
    writing-mode: initial;
    transform: none;
  }
}

@media (max-width: 860px) {
  .sdk-showcase__heading-grid {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .sdk-showcase__actions {
    justify-content: flex-start;
  }

  .sdk-showcase__docs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .sdk-showcase__rail,
  .sdk-showcase__mini-grid,
  .sdk-showcase__docs {
    grid-template-columns: 1fr;
  }

  .sdk-showcase__button,
  .sdk-showcase__actions {
    width: 100%;
  }

  .sdk-showcase__code-topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .sdk-showcase pre {
    padding: 16px;
    font-size: 11.5px;
  }
}
</style>
