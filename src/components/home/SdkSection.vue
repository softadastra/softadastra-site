<template>
  <section class="sdk-section sd-section">
    <div class="sd-section__inner sdk-section__inner">
      <div class="sdk-section__preview sd-reveal" aria-label="Softadastra C++ SDK usage preview">
        <div class="sdk-section__preview-top">
          <span>Softadastra C++ SDK</span>
          <strong>Developer API</strong>
        </div>
        <pre><code><span class="code-preprocessor">#include</span> <span class="code-header">&lt;softadastra/sdk.hpp&gt;</span>

<span class="code-keyword">using namespace</span> <span class="code-namespace">softadastra::sdk</span>;

<span class="code-type">Client</span> <span class="code-variable">client</span>{
  <span class="code-type">ClientOptions</span><span class="code-operator">::</span><span class="code-function">persistent</span>(
    <span class="code-string">"my-app"</span>,
    <span class="code-string">"data/app.wal"</span>
  )
};

<span class="code-variable">client</span><span class="code-operator">.</span><span class="code-function">open</span>();
<span class="code-variable">client</span><span class="code-operator">.</span><span class="code-function">put</span>(<span class="code-string">"user:name"</span>, <span class="code-string">"Ada"</span>);
<span class="code-variable">client</span><span class="code-operator">.</span><span class="code-function">get</span>(<span class="code-string">"user:name"</span>);
<span class="code-variable">client</span><span class="code-operator">.</span><span class="code-function">close</span>();</code></pre>
      </div>

      <div class="sdk-section__copy sd-reveal sd-reveal-d2">
        <p class="sdk-section__eyebrow">Softadastra SDK</p>
        <h2>A simple C++ API for local data and offline-ready applications.</h2>
        <p>
          The Softadastra C++ SDK gives application developers a focused API for
          saving data locally, reading it back later, keeping important data
          after restart, and preparing for synchronization with other nodes.
        </p>

        <div class="sdk-section__facts">
          <article>
            <span>Main API</span>
            <strong>softadastra::sdk::Client</strong>
          </article>
          <article>
            <span>CMake</span>
            <strong>softadastra::sdk</strong>
          </article>
        </div>

        <div class="sdk-section__actions">
          <a :href="links.sdkGithub">View SDK repository</a>
          <a :href="links.softadastraDocs">Read SDK docs</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";
</script>

<style scoped>
.sdk-section__inner {
  display: grid;
  grid-template-columns: minmax(340px, 0.82fr) minmax(0, 0.95fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.sdk-section__preview {
  overflow: hidden;
  border: 1px solid #252932;
  border-radius: var(--sd-radius-xl);
  background: #101216;
  box-shadow: var(--sd-shadow-soft);
}

.sdk-section__preview-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 13px 15px;
  border-bottom: 1px solid #252932;
  background: #151821;
}

.sdk-section__preview-top span {
  color: #9aa4b2;
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sdk-section__preview-top strong {
  color: #eef2f7;
  font-size: 13px;
}

.sdk-section pre {
  overflow-x: auto;
  margin: 0;
  padding: 18px;
}

.sdk-section code {
  color: #f3f5f7;
  font-family: var(--sd-font-mono);
  font-size: 12.5px;
  line-height: 1.72;
  white-space: pre;
}

.sdk-section .code-preprocessor {
  color: #ffb86b;
}

.sdk-section .code-header,
.sdk-section .code-string {
  color: #7dd3fc;
}

.sdk-section .code-keyword {
  color: #c084fc;
}

.sdk-section .code-namespace,
.sdk-section .code-type {
  color: #facc15;
}

.sdk-section .code-variable {
  color: #e5e7eb;
}

.sdk-section .code-function {
  color: #86efac;
}

.sdk-section .code-operator {
  color: #94a3b8;
}

.sdk-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sdk-section h2 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 740;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.sdk-section__copy p:not(.sdk-section__eyebrow) {
  max-width: 680px;
  margin: 16px 0 0;
  color: var(--sd-text-soft);
  font-size: 15.5px;
  line-height: 1.68;
}

.sdk-section__facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 24px;
}

.sdk-section__facts article {
  padding: 13px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.sdk-section__facts span {
  display: block;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sdk-section__facts strong {
  display: block;
  margin-top: 7px;
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 12px;
  line-height: 1.45;
}

.sdk-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.sdk-section__actions a {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  padding: 0 13px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.sdk-section__actions a:first-child {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
}

.sdk-section__actions a:hover {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

.sdk-section__actions a:first-child:hover {
  background: var(--sd-orange-dark);
  color: #ffffff;
}

@media (max-width: 900px) {
  .sdk-section__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .sdk-section__facts {
    grid-template-columns: 1fr;
  }
}
</style>
