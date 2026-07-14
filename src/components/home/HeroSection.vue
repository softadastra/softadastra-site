<template>
  <section class="hero" id="top">
    <div class="hero__inner">
      <div class="hero__copy sd-reveal">
        <div class="hero__eyebrow">
          <span />
          The C++ Tooling Company
        </div>

        <h1>Build modern C++ applications with one coherent toolchain.</h1>

        <p>
          Softadastra builds the tools C++ teams use to develop, run, extend,
          and manage applications, from the local development workflow to team
          operations.
        </p>

        <div class="hero__actions">
          <a class="hero__button hero__button--primary" :href="links.vix">
            Explore Vix.cpp
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a class="hero__button hero__button--secondary" href="#platform">
            Discover the platform
          </a>
        </div>
      </div>

      <div class="hero__visual sd-reveal sd-reveal-d2" aria-label="Softadastra platform overview" role="img">
        <div class="hero__visual-top">
          <span>Softadastra Platform</span>
          <strong>C++ application workflow</strong>
        </div>

        <div class="hero__platform-list">
          <div class="hero__platform-item hero__platform-item--active">
            <span>01</span>
            <div>
              <strong>Vix.cpp</strong>
              <small>Build and run native C++ applications</small>
            </div>
          </div>
          <div class="hero__platform-item">
            <span>02</span>
            <div>
              <strong>Rix</strong>
              <small>Add reusable userland libraries</small>
            </div>
          </div>
          <div class="hero__platform-item">
            <span>03</span>
            <div>
              <strong>Softadastra Cloud</strong>
              <small>Organize packages, reports, and teams</small>
            </div>
          </div>
        </div>

        <div class="hero__command">
          <span>$</span>
          <code>vix new && vix build</code>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";
</script>

<style scoped>
.hero {
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg);
  padding: 58px 0 76px;
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.8fr);
  gap: clamp(38px, 6vw, 84px);
  align-items: center;
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-bottom: 18px;
  padding: 5px 10px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-raised);
  color: var(--sd-orange-dark);
  font-size: 11.5px;
  font-weight: 700;
}

.hero__eyebrow span {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
}

.hero h1 {
  max-width: 760px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 760;
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.hero p {
  max-width: 620px;
  margin: 22px 0 0;
  color: var(--sd-text-soft);
  font-size: 16px;
  line-height: 1.72;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.hero__button {
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
  transition: transform var(--sd-transition-fast), background var(--sd-transition-fast), border-color var(--sd-transition-fast), color var(--sd-transition-fast), box-shadow var(--sd-transition-fast);
}

.hero__button:hover {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
  transform: translateY(-1px);
}

.hero__button svg {
  width: 14px;
  height: 14px;
}

.hero__button--primary {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #fff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.hero__button--primary:hover {
  border-color: var(--sd-orange-dark);
  background: var(--sd-orange-dark);
  color: #fff;
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.hero__visual {
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.hero__visual-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.hero__visual-top span,
.hero__platform-item span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero__visual-top strong {
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 720;
}

.hero__platform-list {
  display: grid;
  gap: 10px;
  padding: 16px;
}

.hero__platform-item {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.hero__platform-item--active {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
}

.hero__platform-item strong {
  display: block;
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 740;
}

.hero__platform-item small {
  display: block;
  margin-top: 3px;
  color: var(--sd-text-soft);
  font-size: 12.5px;
  line-height: 1.45;
}

.hero__command {
  display: flex;
  gap: 9px;
  align-items: center;
  margin: 0 16px 16px;
  padding: 12px;
  border-radius: var(--sd-radius-md);
  background: #111417;
  color: #eef2f0;
  font-family: var(--sd-font-mono);
  font-size: 12px;
  overflow-x: auto;
}

.hero__command span {
  color: var(--sd-orange-strong);
}

.hero__command code {
  white-space: nowrap;
}

@media (max-width: 920px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 42px 0 58px;
  }

  .hero__inner {
    width: min(100% - 28px, var(--sd-container));
  }

  .hero__actions,
  .hero__button {
    width: 100%;
  }

  .hero__visual-top {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
