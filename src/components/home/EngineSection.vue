<template>
  <section class="engine-section sd-section">
    <div class="sd-section__inner engine-section__inner">
      <header class="engine-section__header sd-reveal">
        <p class="engine-section__eyebrow">Softadastra Engine</p>

        <h2>Durable local state for applications that must keep working.</h2>

        <p class="engine-section__intro">
          An offline-first runtime layer for local state, durable operations,
          retry, synchronization, and transport when networks are unstable.
        </p>

        <div class="engine-section__actions">
          <a :href="links.softadastraEngine">
            View repository
            <span aria-hidden="true">↗</span>
          </a>

          <a :href="links.softadastraDocs">
            Read documentation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <div class="engine-section__grid">
        <article class="engine-card sd-reveal">
          <div class="engine-card__copy">
            <h3>Keep working locally</h3>

            <p>
              Accept useful application work before depending on a remote
              service or a stable network connection.
            </p>
          </div>

          <div
            class="engine-card__visual engine-card__visual--local"
            aria-hidden="true"
          >
            <div class="local-metric">
              <div class="local-metric__label">
                <strong>Local runtime</strong>
                <span>available</span>
              </div>

              <div class="local-metric__line local-metric__line--active" />
            </div>

            <div class="local-metric">
              <div class="local-metric__label">
                <strong>Remote service</strong>
                <span>optional</span>
              </div>

              <div class="local-metric__line" />
            </div>

            <div class="local-status">
              <span class="local-status__mark">S</span>
              <span>Application remains useful</span>
            </div>
          </div>
        </article>

        <article class="engine-card sd-reveal sd-reveal-d1">
          <div class="engine-card__copy">
            <h3>One durable runtime model</h3>

            <p>
              Local state, write-ahead logging, storage, and synchronization
              follow one coherent operation flow.
            </p>
          </div>

          <div
            class="engine-card__visual engine-card__visual--runtime"
            aria-hidden="true"
          >
            <svg
              class="runtime-connections"
              viewBox="0 0 300 150"
              preserveAspectRatio="none"
            >
              <path d="M54 18 V76 C54 110 118 92 150 138" />
              <path d="M150 18 V138" />
              <path d="M246 18 V76 C246 110 182 92 150 138" />
            </svg>

            <div class="runtime-nodes">
              <div class="runtime-node runtime-node--wal">
                <span>W</span>
                <small>wal</small>
              </div>

              <div class="runtime-node runtime-node--store">
                <span>S</span>
                <small>store</small>
              </div>

              <div class="runtime-node runtime-node--sync">
                <span>Y</span>
                <small>sync</small>
              </div>
            </div>

            <div class="runtime-core">
              <span>Softadastra Engine</span>
            </div>
          </div>
        </article>

        <article class="engine-card sd-reveal sd-reveal-d2">
          <div class="engine-card__copy">
            <h3>Retry and synchronize safely</h3>

            <p>
              Track pending operations, retry delivery, and synchronize state
              when the network becomes available again.
            </p>
          </div>

          <div
            class="engine-card__visual engine-card__visual--sync"
            aria-hidden="true"
          >
            <svg
              class="sync-chart"
              viewBox="0 0 300 170"
              preserveAspectRatio="none"
            >
              <line x1="18" y1="146" x2="282" y2="146" />

              <path
                class="sync-chart__line sync-chart__line--muted"
                d="M18 140 C80 138 126 127 166 103 C215 73 241 42 268 14"
              />

              <path
                class="sync-chart__line sync-chart__line--soft"
                d="M18 143 C78 142 127 136 170 121 C214 105 244 82 273 54"
              />

              <path
                class="sync-chart__line sync-chart__line--active"
                d="M18 145 C84 145 132 142 178 136 C220 131 250 124 280 115"
              />
            </svg>

            <div class="sync-chart__labels">
              <span>offline</span>
              <span>retry</span>
              <span>synced</span>
            </div>

            <div class="sync-chart__engine">
              <span>S</span>
            </div>
          </div>
        </article>
      </div>

      <div class="engine-section__modules sd-reveal">
        <span>wal</span>
        <span>store</span>
        <span>sync</span>
        <span>transport</span>
        <span>metadata</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";
</script>

<style scoped>
.engine-section {
  overflow: hidden;
  border-block: 1px solid var(--sd-border);
  background: var(--sd-bg-raised);
}

.engine-section__inner {
  display: block;
  max-width: 1040px;
}

.engine-section__header {
  max-width: 720px;
  margin: 0 auto 38px;
  text-align: center;
}

.engine-section__eyebrow {
  margin: 0 0 10px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.055em;
  text-transform: uppercase;
}

.engine-section h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 750;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.engine-section__intro {
  max-width: 650px;
  margin: 13px auto 0;
  color: var(--sd-text-soft);
  font-size: 15px;
  line-height: 1.55;
}

.engine-section__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  margin-top: 20px;
}

.engine-section__actions a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition:
    color var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.engine-section__actions a:first-child {
  color: var(--sd-orange-dark);
}

.engine-section__actions a:hover {
  color: var(--sd-orange);
  transform: translateX(2px);
}

.engine-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.engine-card {
  display: flex;
  min-width: 0;
  min-height: 330px;
  flex-direction: column;
  overflow: hidden;

  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);

  background: #ffffff;
  box-shadow: var(--sd-shadow-card);

  transition:
    border-color var(--sd-transition),
    box-shadow var(--sd-transition),
    transform var(--sd-transition);
}

.engine-card:hover {
  border-color: var(--sd-border-strong);
  box-shadow: var(--sd-shadow-card-hover);
  transform: translateY(-3px);
}

.engine-card__copy {
  padding: 20px 20px 0;
}

.engine-card h3 {
  margin: 0;
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: -0.015em;
}

.engine-card__copy p {
  margin: 7px 0 0;
  color: var(--sd-text-soft);
  font-size: 13px;
  line-height: 1.46;
}

.engine-card__visual {
  position: relative;
  min-height: 170px;
  margin: 18px 14px 14px;

  overflow: hidden;
  border: 1px solid #f0f0f0;
  border-radius: var(--sd-radius-sm);

  background: #fafafa;
}

/* Local state card */

.engine-card__visual--local {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 22px;
  padding: 24px 18px 18px;
}

.local-metric__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 7px;
}

.local-metric__label strong,
.local-metric__label span {
  font-family: var(--sd-font-mono);
  font-size: 9px;
  line-height: 1;
}

.local-metric__label strong {
  color: var(--sd-text-soft);
  font-weight: 700;
}

.local-metric__label span {
  color: var(--sd-text-dim);
}

.local-metric__line {
  width: 100%;
  height: 9px;
  background: repeating-linear-gradient(
    90deg,
    #d9d9d9 0,
    #d9d9d9 2px,
    transparent 2px,
    transparent 4px
  );
}

.local-metric__line--active {
  width: 48%;
  background: repeating-linear-gradient(
    90deg,
    var(--sd-orange) 0,
    var(--sd-orange) 2px,
    transparent 2px,
    transparent 4px
  );
}

.local-status {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9px;
}

.local-status__mark {
  display: grid;
  width: 19px;
  height: 19px;
  place-items: center;
  border-radius: 4px;
  background: var(--sd-orange);
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
}

/* Runtime model card */

.engine-card__visual--runtime {
  min-height: 190px;
  padding: 25px 22px 15px;
}

.runtime-connections {
  position: absolute;
  inset: 30px 27px 26px;
  width: calc(100% - 54px);
  height: calc(100% - 56px);
  overflow: visible;
  pointer-events: none;
}

.runtime-connections path {
  fill: none;
  stroke: rgba(216, 111, 31, 0.36);
  stroke-width: 1.5;
}

.runtime-nodes {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.runtime-node {
  display: grid;
  min-width: 0;
  aspect-ratio: 1;
  place-items: center;
  border: 4px solid rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.08),
    0 5px 14px rgba(0, 0, 0, 0.07);
}

.runtime-node span {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.86);
  font-size: 12px;
  font-weight: 800;
}

.runtime-node small {
  margin-top: -13px;
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 750;
}

.runtime-node--wal {
  background: #f4c19a;
  color: #8b3d0f;
}

.runtime-node--store {
  background: #e9a16c;
  color: #75310b;
}

.runtime-node--sync {
  background: #d86f1f;
  color: #ffffff;
}

.runtime-core {
  position: absolute;
  z-index: 2;
  right: 50%;
  bottom: 15px;
  padding: 7px 10px;
  border: 1px solid rgba(216, 111, 31, 0.24);
  border-radius: 5px;
  background: #ffffff;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 760;
  transform: translateX(50%);
  white-space: nowrap;
}

/* Retry and sync card */

.engine-card__visual--sync {
  min-height: 190px;
  padding: 13px 15px 12px;
}

.sync-chart {
  width: 100%;
  height: 145px;
  overflow: visible;
}

.sync-chart line {
  stroke: #dddddd;
  stroke-width: 1;
}

.sync-chart__line {
  fill: none;
  stroke-width: 1.6;
}

.sync-chart__line--muted {
  stroke: #dddddd;
}

.sync-chart__line--soft {
  stroke: #c9c9c9;
}

.sync-chart__line--active {
  stroke: var(--sd-orange);
  stroke-width: 2;
}

.sync-chart__labels {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 8px;
}

.sync-chart__engine {
  position: absolute;
  right: 13px;
  bottom: 47px;
}

.sync-chart__engine span {
  display: grid;
  width: 19px;
  height: 19px;
  place-items: center;
  border-radius: 4px;
  background: var(--sd-orange);
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  box-shadow: 0 3px 10px rgba(216, 111, 31, 0.22);
}

.engine-section__modules {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px;
  margin-top: 18px;
}

.engine-section__modules span {
  padding: 5px 8px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 700;
}

.engine-section__modules span:not(:last-child)::after {
  margin-left: 14px;
  color: var(--sd-border-strong);
  content: "/";
}

@media (max-width: 900px) {
  .engine-section__grid {
    grid-template-columns: 1fr;
  }

  .engine-card {
    min-height: 300px;
  }

  .engine-card__visual {
    min-height: 180px;
  }
}

@media (max-width: 560px) {
  .engine-section__header {
    margin-bottom: 28px;
    text-align: left;
  }

  .engine-section__intro {
    margin-inline: 0;
  }

  .engine-section__actions {
    justify-content: flex-start;
  }

  .engine-card__copy {
    padding: 18px 18px 0;
  }

  .engine-section__modules {
    justify-content: flex-start;
  }
}
</style>
