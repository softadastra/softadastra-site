<template>
  <div
    class="hpv"
    role="group"
    aria-label="Softadastra platform workflow demonstration"
  >
    <div class="hpv__scene">
      <!-- ============ Central cloud dashboard ============ -->
      <div class="hpv__app">
        <!-- Browser chrome -->
        <div class="hpv__chrome">
          <div class="hpv__chrome-left" aria-hidden="true">
            <span class="hpv__dot" />
            <span class="hpv__dot" />
            <span class="hpv__dot" />
          </div>
          <span class="hpv__chrome-url">
            <svg
              viewBox="0 0 24 24"
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              aria-hidden="true"
            >
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            cloud.softadastra.com
          </span>
          <span class="hpv__chrome-badge">
            <i aria-hidden="true" />
            Live
          </span>
        </div>

        <div class="hpv__dash">
          <!-- Sidebar -->
          <aside class="hpv__side" aria-label="Cloud navigation">
            <div class="hpv__side-org">
              <span class="hpv__side-avatar" aria-hidden="true">S</span>
              <div>
                <strong>softadastra</strong>
                <em>Pro workspace</em>
              </div>
            </div>

            <span class="hpv__side-label">Platform</span>
            <span class="hpv__side-item hpv__side-item--active">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="7" height="9" rx="1.5" />
                <rect x="14" y="3" width="7" height="5" rx="1.5" />
                <rect x="14" y="12" width="7" height="9" rx="1.5" />
                <rect x="3" y="16" width="7" height="5" rx="1.5" />
              </svg>
              Overview
            </span>
            <span class="hpv__side-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
                <path d="M3.3 8.3 12 13l8.7-4.7" />
                <path d="M12 22V13" />
              </svg>
              Packages
            </span>
            <span class="hpv__side-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <rect x="4" y="17" width="16" height="4" rx="1.5" />
              </svg>
              Lockfiles
            </span>
            <span class="hpv__side-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19V5" />
                <path d="M4 19h16" />
                <rect x="7" y="11" width="3" height="5" rx="0.8" />
                <rect x="12" y="8" width="3" height="8" rx="0.8" />
                <rect x="17" y="13" width="3" height="3" rx="0.8" />
              </svg>
              Build reports
            </span>

            <span class="hpv__side-label">Workspace</span>
            <span class="hpv__side-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3.5 20c.8-3 3-4.5 5.5-4.5S13.7 17 14.5 20" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M16 15.7c2.4.2 4 1.6 4.5 4.3" />
              </svg>
              Members
            </span>
            <span class="hpv__side-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 7a4 4 0 1 1-4 4" />
                <path d="m11.5 12.5-7 7" />
                <path d="M6 18l2 2" />
                <path d="M8.5 15.5l2 2" />
              </svg>
              Tokens
            </span>
            <span class="hpv__side-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3.2" />
                <path
                  d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.7a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.4 2.7h4l.4-2.7a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.06-.4.1-.8.1-1.2z"
                />
              </svg>
              Settings
            </span>
          </aside>

          <!-- Main -->
          <div class="hpv__main">
            <!-- Topbar -->
            <div class="hpv__topbar">
              <div class="hpv__crumb">
                <span>softadastra</span>
                <svg
                  viewBox="0 0 24 24"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  aria-hidden="true"
                >
                  <path d="m9 5 7 7-7 7" />
                </svg>
                <strong>native-app</strong>
                <em class="hpv__env">production</em>
              </div>
              <div class="hpv__topbar-right">
                <span class="hpv__search" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="11"
                    height="11"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.4"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m20 20-3.8-3.8" />
                  </svg>
                  Search…
                  <kbd>⌘K</kbd>
                </span>
                <span class="hpv__user" aria-hidden="true">GK</span>
              </div>
            </div>

            <div class="hpv__content">
              <!-- Page head -->
              <div class="hpv__page-head">
                <div>
                  <h2>Workspace operations</h2>
                  <p>
                    Private packages, lockfiles, and build reports synced to the
                    cloud. Builds stay local.
                  </p>
                </div>
                <span class="hpv__cta" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="11"
                    height="11"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.6"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  New project
                </span>
              </div>

              <!-- Stat cards -->
              <div class="hpv__stats">
                <div class="hpv__stat">
                  <span>Packages</span>
                  <strong>24</strong>
                  <em class="hpv__delta hpv__delta--up">+3 this week</em>
                </div>
                <div class="hpv__stat">
                  <span>Lockfiles</span>
                  <strong>128</strong>
                  <em class="hpv__delta hpv__delta--up">+12 synced</em>
                </div>
                <div class="hpv__stat">
                  <span>Build reports</span>
                  <strong>1,043</strong>
                  <em class="hpv__delta">98.7% pass</em>
                </div>
                <div class="hpv__stat hpv__stat--chart">
                  <span>Publish activity</span>
                  <div class="hpv__bars" aria-hidden="true">
                    <i style="--h: 34%" /><i style="--h: 52%" /><i
                      style="--h: 40%"
                    />
                    <i style="--h: 68%" /><i style="--h: 46%" /><i
                      style="--h: 78%"
                    />
                    <i style="--h: 58%" /><i
                      style="--h: 88%"
                      class="hpv__bar--hot"
                    />
                    <i style="--h: 64%" /><i style="--h: 72%" />
                  </div>
                </div>
              </div>

              <!-- Recent operations table -->
              <div class="hpv__table">
                <div class="hpv__table-head">
                  <span>Recent operations</span>
                  <em>native-app · main</em>
                </div>

                <div class="hpv__row hpv__row--one">
                  <span class="hpv__row-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
                    </svg>
                  </span>
                  <div class="hpv__row-main">
                    <strong>vix cloud publish</strong>
                    <em>native-app@1.4.2 · linux-x86_64</em>
                  </div>
                  <span class="hpv__pill hpv__pill--ok">
                    <i aria-hidden="true" />published
                  </span>
                  <time>2m</time>
                </div>

                <div class="hpv__row hpv__row--two">
                  <span class="hpv__row-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3v12" />
                      <path d="m7 10 5 5 5-5" />
                      <rect x="4" y="17" width="16" height="4" rx="1.5" />
                    </svg>
                  </span>
                  <div class="hpv__row-main">
                    <strong>vix cloud lockfile upload</strong>
                    <em>vix.lock · 47 dependencies</em>
                  </div>
                  <span class="hpv__pill hpv__pill--ok">
                    <i aria-hidden="true" />synced
                  </span>
                  <time>9m</time>
                </div>

                <div class="hpv__row hpv__row--three">
                  <span class="hpv__row-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 19V5" />
                      <path d="M4 19h16" />
                      <rect x="7" y="11" width="3" height="5" rx="0.8" />
                      <rect x="12" y="8" width="3" height="8" rx="0.8" />
                      <rect x="17" y="13" width="3" height="3" rx="0.8" />
                    </svg>
                  </span>
                  <div class="hpv__row-main">
                    <strong>local build report</strong>
                    <em>vix build · release · 12.4s</em>
                  </div>
                  <span class="hpv__pill hpv__pill--run">
                    <i aria-hidden="true" />submitting
                  </span>
                  <time>now</time>
                </div>

                <div class="hpv__row hpv__row--four">
                  <span class="hpv__row-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M14 7a4 4 0 1 1-4 4" />
                      <path d="m11.5 12.5-7 7" />
                      <path d="M6 18l2 2" />
                    </svg>
                  </span>
                  <div class="hpv__row-main">
                    <strong>token rotation</strong>
                    <em>ci-deploy · role: publisher</em>
                  </div>
                  <span class="hpv__pill">
                    <i aria-hidden="true" />checked
                  </span>
                  <time>1h</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ Floating terminal (bottom-left) ============ -->
      <div
        class="hpv__float hpv__float--term"
        aria-label="Vix.cpp local workflow commands"
      >
        <header class="hpv__float-head">
          <span>Local development</span>
          <strong>Vix.cpp</strong>
        </header>
        <pre
          class="hpv__term"
        ><code><span class="hpv__prompt">$</span> vix build
<span class="hpv__ok">✓</span> release build in 12.4s
<span class="hpv__prompt">$</span> vix cloud publish<span class="hpv__cursor" aria-hidden="true" /></code></pre>
      </div>

      <!-- ============ Floating Rix card (bottom-right) ============ -->
      <div
        class="hpv__float hpv__float--rix"
        aria-label="Rix reusable application capabilities"
      >
        <header class="hpv__float-head hpv__float-head--light">
          <span>Extend</span>
          <strong>Rix</strong>
        </header>
        <ul class="hpv__rix-list">
          <li><i aria-hidden="true" />CSV export</li>
          <li><i aria-hidden="true" />Auth diagnostics</li>
          <li><i aria-hidden="true" />PDF generation</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ================= Dark gradient stage ================= */
.hpv {
  position: relative;
  overflow: hidden;
  border-radius: var(--sd-radius-xl);
  background:
    radial-gradient(
      120% 140% at 85% 0%,
      rgba(214, 106, 40, 0.32),
      transparent 55%
    ),
    radial-gradient(
      90% 120% at 10% 100%,
      rgba(173, 81, 23, 0.22),
      transparent 60%
    ),
    linear-gradient(160deg, #1b1410 0%, #241a13 45%, #14100c 100%);
}

.hpv::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 55%;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.14) 1px,
    transparent 1px
  );
  background-size: 14px 14px;
  mask-image: radial-gradient(closest-side at 80% 20%, #000, transparent);
  pointer-events: none;
}

.hpv__scene {
  position: relative;
  z-index: 1;
  padding: clamp(28px, 5vw, 60px) clamp(20px, 8vw, 104px) clamp(60px, 7vw, 92px);
}

/* ================= App window ================= */
.hpv__app {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.45),
    0 8px 24px rgba(0, 0, 0, 0.3);
}

.hpv__chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.hpv__chrome-left {
  display: flex;
  gap: 6px;
}

.hpv__dot {
  width: 10px;
  height: 10px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-muted);
}

.hpv__chrome-url {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
  max-width: 300px;
  margin-inline: auto;
  justify-content: center;
  padding: 4px 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 660;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hpv__chrome-url svg {
  flex-shrink: 0;
  color: var(--sd-text-muted);
}

.hpv__chrome-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 9px;
  border: 1px solid var(--sd-border-highlight);
  border-radius: var(--sd-radius-full);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hpv__chrome-badge i {
  width: 6px;
  height: 6px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
  animation: hpv-pulse 2.2s ease infinite;
}

@keyframes hpv-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 var(--sd-accent-bg);
  }
  50% {
    box-shadow: 0 0 0 4px var(--sd-accent-bg);
  }
}

/* ================= Dashboard layout ================= */
.hpv__dash {
  display: grid;
  grid-template-columns: 176px minmax(0, 1fr);
}

/* ---- Sidebar ---- */
.hpv__side {
  display: grid;
  align-content: start;
  gap: 3px;
  padding: 12px 10px;
  border-right: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.hpv__side-org {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.hpv__side-avatar {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: var(--sd-radius-sm);
  background: var(--sd-orange);
  color: #fff;
  font-size: 13px;
  font-weight: 780;
}

.hpv__side-org div {
  min-width: 0;
  display: grid;
  line-height: 1.25;
}

.hpv__side-org strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 12px;
  font-weight: 720;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__side-org em {
  color: var(--sd-text-muted);
  font-size: 10px;
  font-style: normal;
  font-weight: 640;
}

.hpv__side-label {
  margin: 8px 8px 3px;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 760;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hpv__side-item {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 29px;
  padding: 0 8px;
  border-radius: var(--sd-radius-sm);
  color: var(--sd-text-muted);
  font-size: 11.5px;
  font-weight: 660;
}

.hpv__side-item svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hpv__side-item--active {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
  box-shadow: inset 2px 0 0 var(--sd-orange);
}

/* ---- Topbar ---- */
.hpv__main {
  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 0;
}

.hpv__topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 9px 16px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-raised);
}

.hpv__crumb {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 660;
}

.hpv__crumb strong {
  color: var(--sd-text);
  font-weight: 720;
}

.hpv__env {
  padding: 2px 7px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
  font-size: 9.5px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hpv__topbar-right {
  display: flex;
  align-items: center;
  gap: 9px;
}

.hpv__search {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 9px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-soft);
  color: var(--sd-text-muted);
  font-size: 11px;
  font-weight: 620;
  white-space: nowrap;
}

.hpv__search kbd {
  padding: 1px 5px;
  border: 1px solid var(--sd-border);
  border-radius: 4px;
  background: var(--sd-bg-raised);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 700;
}

.hpv__user {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-muted);
  color: var(--sd-text-soft);
  font-size: 10px;
  font-weight: 760;
}

/* ---- Content ---- */
.hpv__content {
  display: grid;
  align-content: start;
  gap: 14px;
  min-width: 0;
  padding: 16px;
  background: var(--sd-bg-soft);
}

.hpv__page-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.hpv__page-head h2 {
  margin: 0;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 720;
  letter-spacing: -0.02em;
}

.hpv__page-head p {
  margin: 3px 0 0;
  color: var(--sd-text-muted);
  font-size: 11.5px;
  font-weight: 600;
}

.hpv__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 6px 11px;
  border-radius: var(--sd-radius-md);
  background: var(--sd-orange);
  color: #fff;
  font-size: 11.5px;
  font-weight: 720;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.2);
}

/* ---- Stat cards ---- */
.hpv__stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.hpv__stat {
  display: grid;
  align-content: start;
  gap: 4px;
  padding: 11px 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.hpv__stat > span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 760;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hpv__stat strong {
  color: var(--sd-text);
  font-size: 21px;
  font-weight: 720;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.hpv__delta {
  color: var(--sd-text-muted);
  font-size: 10px;
  font-style: normal;
  font-weight: 680;
}

.hpv__delta--up {
  color: var(--sd-orange-dark);
}

.hpv__stat--chart {
  gap: 8px;
}

.hpv__bars {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 34px;
}

.hpv__bars i {
  flex: 1;
  height: var(--h);
  border-radius: 2px 2px 0 0;
  background: var(--sd-accent-bg);
  animation: hpv-bar 5s ease infinite;
}

.hpv__bars i:nth-child(2n) {
  animation-delay: 0.6s;
}
.hpv__bars i:nth-child(3n) {
  animation-delay: 1.4s;
}

.hpv__bar--hot {
  background: var(--sd-orange) !important;
}

@keyframes hpv-bar {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.82);
  }
}

/* ---- Operations table ---- */
.hpv__table {
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-md);
  background: var(--sd-bg-raised);
}

.hpv__table-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 13px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
}

.hpv__table-head span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hpv__table-head em {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-style: normal;
  font-weight: 640;
}

.hpv__row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 11px;
  padding: 9px 13px;
  border-bottom: 1px solid var(--sd-border);
  animation: hpv-row 7s ease infinite;
}

.hpv__row:last-child {
  border-bottom: 0;
}

.hpv__row--two {
  animation-delay: 1.3s;
}
.hpv__row--three {
  animation-delay: 2.6s;
}
.hpv__row--four {
  animation-delay: 3.9s;
}

@keyframes hpv-row {
  0%,
  24%,
  100% {
    background: transparent;
  }
  8%,
  16% {
    background: var(--sd-accent-bg-soft);
  }
}

.hpv__row-icon {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
}

.hpv__row-icon svg {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hpv__row-main {
  display: grid;
  gap: 1px;
  min-width: 0;
  line-height: 1.3;
}

.hpv__row-main strong {
  overflow: hidden;
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 11.5px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__row-main em {
  overflow: hidden;
  color: var(--sd-text-muted);
  font-size: 10.5px;
  font-style: normal;
  font-weight: 620;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hpv__pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.hpv__pill i {
  width: 5px;
  height: 5px;
  border-radius: var(--sd-radius-full);
  background: var(--sd-text-muted);
}

.hpv__pill--ok {
  border-color: rgba(34, 128, 62, 0.25);
  background: rgba(34, 128, 62, 0.07);
  color: #1f7a3d;
}

.hpv__pill--ok i {
  background: #2b9e50;
}

.hpv__pill--run {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.hpv__pill--run i {
  background: var(--sd-orange);
  animation: hpv-pulse 1.6s ease infinite;
}

.hpv__row time {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 660;
}

/* ================= Floating cards ================= */
.hpv__float {
  position: absolute;
  z-index: 2;
  overflow: hidden;
  border-radius: var(--sd-radius-lg);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.45),
    0 6px 18px rgba(0, 0, 0, 0.3);
}

.hpv__float--term {
  left: clamp(12px, 3.5vw, 44px);
  bottom: clamp(16px, 3vw, 36px);
  width: min(290px, 46%);
  border: 1px solid #2a2e38;
  background: #101216;
}

.hpv__float--rix {
  right: clamp(12px, 3.5vw, 44px);
  bottom: clamp(28px, 4vw, 56px);
  width: min(224px, 38%);
  border: 1px solid var(--sd-border);
  background: var(--sd-bg-raised);
}

.hpv__float-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 13px;
  border-bottom: 1px solid #252932;
  background: #151821;
}

.hpv__float-head span {
  color: #9aa4b2;
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hpv__float-head strong {
  color: #eef2f7;
  font-size: 12px;
  font-weight: 730;
}

.hpv__float-head--light {
  border-bottom-color: var(--sd-border);
  background: var(--sd-bg-soft);
}

.hpv__float-head--light span {
  color: var(--sd-text-muted);
}

.hpv__float-head--light strong {
  color: var(--sd-text);
}

.hpv__term {
  overflow-x: auto;
  margin: 0;
  padding: 13px 15px;
}

.hpv__term code {
  color: #eef2f7;
  font-family: var(--sd-font-mono);
  font-size: 12px;
  line-height: 1.85;
  white-space: pre;
}

.hpv__prompt {
  color: var(--sd-orange);
  font-weight: 700;
}

.hpv__ok {
  color: #4ade80;
  font-weight: 700;
}

.hpv__cursor {
  display: inline-block;
  width: 7px;
  height: 13px;
  margin-left: 4px;
  vertical-align: -2px;
  background: #eef2f7;
  animation: hpv-blink 1.1s steps(1) infinite;
}

@keyframes hpv-blink {
  50% {
    opacity: 0;
  }
}

.hpv__rix-list {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 11px 13px;
  list-style: none;
}

.hpv__rix-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 9px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-sm);
  background: var(--sd-bg-soft);
  color: var(--sd-text-soft);
  font-size: 11.5px;
  font-weight: 680;
}

.hpv__rix-list li i {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: var(--sd-radius-full);
  background: var(--sd-orange);
}

/* ================= Motion / responsive ================= */
@media (prefers-reduced-motion: reduce) {
  .hpv__cursor,
  .hpv__row,
  .hpv__bars i,
  .hpv__chrome-badge i,
  .hpv__pill--run i {
    animation: none;
  }
}

@media (max-width: 920px) {
  .hpv__scene {
    display: grid;
    gap: 14px;
    padding: 20px;
  }

  .hpv__float {
    position: static;
    width: 100%;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 820px) {
  .hpv__dash {
    grid-template-columns: 1fr;
  }

  .hpv__side {
    grid-template-columns: repeat(2, 1fr);
    border-right: 0;
    border-bottom: 1px solid var(--sd-border);
  }

  .hpv__side-org,
  .hpv__side-label {
    grid-column: 1 / -1;
  }

  .hpv__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .hpv__search,
  .hpv__env {
    display: none;
  }

  .hpv__row {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }

  .hpv__row time {
    display: none;
  }

  .hpv__side {
    grid-template-columns: 1fr;
  }
}
</style>
