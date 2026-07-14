<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__copy">
        <div class="hero__badge">
          <span class="hero__badge-dot" />
          Softadastra Cloud + Vix.cpp
        </div>

        <h1 class="hero__title">
          C++ tooling, packages, and project state in one professional workspace.
        </h1>

        <p class="hero__desc">
          Softadastra builds the cloud layer around Vix: private packages,
          lockfiles, build reports, access tokens, workspaces, and project
          activity for teams that keep their C++ workflow local and reliable.
        </p>

        <div class="hero__actions">
          <a :href="links.cloud" class="hero__btn hero__btn--primary">
            Open Softadastra Cloud
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

          <a :href="links.vix" class="hero__btn hero__btn--secondary">
            Explore Vix.cpp
          </a>

          <a href="/ecosystem" class="hero__btn hero__btn--ghost">
            View ecosystem
          </a>
        </div>

        <div class="hero__stats" aria-label="Softadastra platform summary">
          <div class="hero__stat">
            <strong>Private registry</strong>
            <span>Packages and versions</span>
          </div>
          <div class="hero__stat-div" />
          <div class="hero__stat">
            <strong>Team control</strong>
            <span>Members, roles, tokens</span>
          </div>
          <div class="hero__stat-div" />
          <div class="hero__stat">
            <strong>Build memory</strong>
            <span>Reports and lockfiles</span>
          </div>
        </div>
      </div>

      <div
        class="cloud-preview"
        role="img"
        aria-label="Softadastra Cloud dashboard preview showing workspace, packages, build reports, lockfiles, and access controls."
      >
        <div class="cloud-preview__topbar">
          <div class="cloud-preview__brand">
            <span class="cloud-preview__logo">S</span>
            <div>
              <strong>Softadastra Cloud</strong>
              <span>vix-production</span>
            </div>
          </div>

          <div class="cloud-preview__status">
            <span />
            Active workspace
          </div>
        </div>

        <div class="cloud-preview__body">
          <aside class="cloud-preview__sidebar" aria-hidden="true">
            <span class="cloud-preview__nav cloud-preview__nav--active">
              Dashboard
            </span>
            <span class="cloud-preview__nav">Projects</span>
            <span class="cloud-preview__nav">Packages</span>
            <span class="cloud-preview__nav">Lockfiles</span>
            <span class="cloud-preview__nav">Build reports</span>
            <span class="cloud-preview__nav">Tokens</span>
          </aside>

          <div class="cloud-preview__main">
            <div class="cloud-preview__heading">
              <div>
                <span class="cloud-preview__eyebrow">Workspace</span>
                <h2>Production C++ platform state</h2>
              </div>
              <span class="cloud-preview__role">Owner</span>
            </div>

            <div class="cloud-preview__metrics">
              <div class="cloud-preview__metric">
                <span>Projects</span>
                <strong>12</strong>
              </div>
              <div class="cloud-preview__metric">
                <span>Packages</span>
                <strong>48</strong>
              </div>
              <div class="cloud-preview__metric">
                <span>Build reports</span>
                <strong>1.2k</strong>
              </div>
            </div>

            <div class="cloud-preview__grid">
              <section class="cloud-preview__panel cloud-preview__panel--wide">
                <div class="cloud-preview__panel-head">
                  <span>Recent build reports</span>
                  <strong>Clean</strong>
                </div>

                <div class="cloud-preview__report">
                  <span class="cloud-preview__report-dot" />
                  <div>
                    <strong>api-service</strong>
                    <span>release · tests passed · 42s</span>
                  </div>
                  <em>vix check</em>
                </div>

                <div class="cloud-preview__report">
                  <span class="cloud-preview__report-dot cloud-preview__report-dot--warn" />
                  <div>
                    <strong>registry-worker</strong>
                    <span>debug · warnings reviewed · 31s</span>
                  </div>
                  <em>vix build</em>
                </div>
              </section>

              <section class="cloud-preview__panel">
                <div class="cloud-preview__panel-head">
                  <span>Registry</span>
                  <strong>Private</strong>
                </div>
                <ul class="cloud-preview__list">
                  <li>core@1.4.2</li>
                  <li>http@0.9.8</li>
                  <li>storage@0.3.1</li>
                </ul>
              </section>

              <section class="cloud-preview__panel">
                <div class="cloud-preview__panel-head">
                  <span>Access</span>
                  <strong>Scoped</strong>
                </div>
                <div class="cloud-preview__tokens">
                  <span>registry:read</span>
                  <span>projects:write</span>
                  <span>reports:read</span>
                </div>
              </section>
            </div>
          </div>
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
  position: relative;
  overflow: hidden;
  padding: 56px 0 76px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg);
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
  gap: clamp(40px, 6vw, 84px);
  align-items: center;
  width: min(100% - 48px, 1240px);
  margin-inline: auto;
}

.hero__copy {
  min-width: 0;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  padding: 5px 10px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-raised);
  color: var(--sd-orange-dark);
  font-size: 11.5px;
  font-weight: 650;
  line-height: 1.4;
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  box-shadow: 0 0 0 3px var(--sd-accent-bg);
}

.hero__title {
  max-width: 720px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(38px, 5vw, 62px);
  font-weight: 760;
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.hero__desc {
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

.hero__btn {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: var(--sd-radius-sm);
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

.hero__btn:hover {
  transform: translateY(-1px);
}

.hero__btn:active {
  transform: translateY(0);
}

.hero__btn svg {
  width: 14px;
  height: 14px;
}

.hero__btn--primary {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.hero__btn--primary:hover {
  border-color: var(--sd-orange-dark);
  background: var(--sd-orange-dark);
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.hero__btn--secondary,
.hero__btn--ghost {
  border-color: var(--sd-border-strong);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
}

.hero__btn--secondary:hover,
.hero__btn--ghost:hover {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
  margin-top: 34px;
  padding-top: 18px;
  border-top: 1px solid var(--sd-border);
}

.hero__stat {
  display: grid;
  gap: 3px;
}

.hero__stat strong {
  color: var(--sd-text);
  font-size: 14px;
  font-weight: 720;
  letter-spacing: -0.01em;
}

.hero__stat span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
}

.hero__stat-div {
  width: 1px;
  height: 30px;
  background: var(--sd-border);
}

.cloud-preview {
  overflow: hidden;
  min-width: 0;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);
}

.cloud-preview__topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.cloud-preview__brand {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
}

.cloud-preview__brand div {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.cloud-preview__brand strong {
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 720;
}

.cloud-preview__brand span:not(.cloud-preview__logo) {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
}

.cloud-preview__logo {
  display: grid;
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 8px;
  background: var(--sd-orange);
  color: #ffffff;
  font-weight: 800;
}

.cloud-preview__status,
.cloud-preview__role {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 7px;
  padding: 4px 8px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
  font-size: 11px;
  font-weight: 650;
  white-space: nowrap;
}

.cloud-preview__status span {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-green);
}

.cloud-preview__body {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  min-height: 520px;
}

.cloud-preview__sidebar {
  display: grid;
  align-content: start;
  gap: 4px;
  padding: 14px;
  border-right: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.cloud-preview__nav {
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 0 9px;
  border-radius: var(--sd-radius-sm);
  color: var(--sd-text-muted);
  font-size: 12px;
  font-weight: 620;
}

.cloud-preview__nav--active {
  background: var(--sd-bg-raised);
  color: var(--sd-orange-dark);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.cloud-preview__main {
  display: grid;
  align-content: start;
  gap: 14px;
  min-width: 0;
  padding: 16px;
}

.cloud-preview__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.cloud-preview__eyebrow,
.cloud-preview__metric span,
.cloud-preview__panel-head span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.cloud-preview__heading h2 {
  margin: 4px 0 0;
  color: var(--sd-text);
  font-size: 20px;
  font-weight: 760;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.cloud-preview__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.cloud-preview__metric {
  display: grid;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.cloud-preview__metric strong {
  color: var(--sd-text);
  font-size: 22px;
  font-weight: 760;
  letter-spacing: -0.03em;
}

.cloud-preview__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 10px;
}

.cloud-preview__panel {
  min-width: 0;
  padding: 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.cloud-preview__panel--wide {
  grid-row: span 2;
}

.cloud-preview__panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.cloud-preview__panel-head strong {
  color: var(--sd-orange-dark);
  font-size: 11px;
  font-weight: 720;
}

.cloud-preview__report {
  display: grid;
  grid-template-columns: 8px minmax(0, 1fr) auto;
  gap: 10px;
  align-items: start;
  padding: 10px 0;
  border-top: 1px solid var(--sd-border);
}

.cloud-preview__report:first-of-type {
  border-top: 0;
}

.cloud-preview__report-dot {
  width: 7px;
  height: 7px;
  margin-top: 5px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-green);
}

.cloud-preview__report-dot--warn {
  background: var(--sd-yellow);
}

.cloud-preview__report div {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.cloud-preview__report strong,
.cloud-preview__list li {
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 680;
}

.cloud-preview__report span:not(.cloud-preview__report-dot) {
  color: var(--sd-text-muted);
  font-size: 12px;
}

.cloud-preview__report em {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-style: normal;
  white-space: nowrap;
}

.cloud-preview__list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.cloud-preview__list li {
  padding: 7px 8px;
  border: 1px solid var(--sd-border);
  border-radius: 6px;
  background: var(--sd-bg-soft);
}

.cloud-preview__tokens {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.cloud-preview__tokens span {
  padding: 5px 7px;
  border: 1px solid var(--sd-border);
  border-radius: 5px;
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
}

@media (max-width: 1100px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }

  .cloud-preview {
    max-width: 820px;
  }
}

@media (max-width: 760px) {
  .hero {
    padding: 42px 0 58px;
  }

  .hero__inner {
    width: min(100% - 32px, 1240px);
  }

  .hero__title {
    font-size: clamp(34px, 10vw, 48px);
  }

  .hero__stats {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero__stat-div {
    display: none;
  }

  .cloud-preview__body {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .cloud-preview__sidebar {
    display: none;
  }

  .cloud-preview__grid,
  .cloud-preview__metrics {
    grid-template-columns: 1fr;
  }

  .cloud-preview__panel--wide {
    grid-row: auto;
  }
}

@media (max-width: 520px) {
  .hero__inner {
    width: min(100% - 28px, 1240px);
  }

  .hero__actions,
  .hero__btn {
    width: 100%;
  }

  .cloud-preview__topbar,
  .cloud-preview__heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
