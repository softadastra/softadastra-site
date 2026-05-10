<template>
  <footer class="site-footer">
    <div
      class="site-footer__glow site-footer__glow--orange"
      aria-hidden="true"
    />

    <div
      class="site-footer__glow site-footer__glow--green"
      aria-hidden="true"
    />

    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <RouterLink
          to="/"
          class="site-footer__brand-link"
          aria-label="Softadastra home"
        >
          <span class="site-footer__logo">
            <img
              src="/logo.svg"
              alt=""
              aria-hidden="true"
            />
          </span>

          <span class="site-footer__brand-stack">
            <span class="site-footer__brand-name">
              {{ footerMeta.brand }}
            </span>

            <span class="site-footer__brand-label">
              Company
            </span>
          </span>
        </RouterLink>

        <p class="site-footer__tagline">
          {{ footerMeta.tagline }}
        </p>

        <p class="site-footer__description">
          Building reliable local-first infrastructure, runtimes, sync engines,
          registries, and cloud products for software that must keep working
          when networks fail.
        </p>

        <div class="site-footer__socials">
          <a
            v-for="social in footerSocialLinks"
            :key="social.label"
            :href="social.href"
            class="site-footer__social"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              v-if="social.icon === 'github'"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
              />
            </svg>

            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 4 6 20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6 4 18 20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="site-footer__cols">
        <div
          v-for="group in footerGroups"
          :key="group.title"
          class="site-footer__col"
        >
          <h4>{{ group.title }}</h4>

          <div class="site-footer__links">
            <a
              v-for="item in group.links"
              :key="item.label"
              :href="item.href"
            >
              <span>{{ item.label }}</span>

              <svg
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 10L10 2M10 2H5M10 2v5"
                  stroke="currentColor"
                  stroke-width="1.35"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <span>{{ footerMeta.copyright }}</span>

      <div class="site-footer__bottom-links">
        <a :href="links.docs">
          Docs
        </a>

        <a :href="links.vixRegistry">
          Registry
        </a>

        <a
          :href="links.github"
          aria-label="Softadastra GitHub"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { links } from "../../data/links";
import {
  footerGroups,
  footerMeta,
  footerSocialLinks,
} from "../../data/footer";
</script>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  padding: 58px 0 0;
  border-top: 1px solid var(--sd-border);
  background:
    radial-gradient(
      820px 320px at 16% 0%,
      rgba(213, 122, 42, 0.14),
      transparent 62%
    ),
    radial-gradient(
      760px 360px at 90% 18%,
      rgba(47, 212, 156, 0.08),
      transparent 64%
    ),
    linear-gradient(
      90deg,
      rgba(11, 43, 34, 1),
      rgba(11, 43, 34, 0.82)
    );
}

.site-footer__glow {
  position: absolute;
  pointer-events: none;
  border-radius: 999px;
  filter: blur(80px);
}

.site-footer__glow--orange {
  top: -180px;
  left: 12%;
  width: 520px;
  height: 300px;
  background: rgba(213, 122, 42, 0.16);
}

.site-footer__glow--green {
  right: -180px;
  bottom: -160px;
  width: 420px;
  height: 420px;
  background: rgba(47, 212, 156, 0.08);
}

.site-footer__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 2.8fr);
  gap: clamp(44px, 6vw, 92px);
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
  padding: 0 0 46px;
}

.site-footer__brand {
  max-width: 420px;
}

.site-footer__brand-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  color: var(--sd-text);
  text-decoration: none;
}

.site-footer__logo {
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(255, 255, 255, 0.12),
      transparent 58%
    ),
    rgba(255, 255, 255, 0.045);
}

.site-footer__logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.site-footer__brand-stack {
  display: grid;
  gap: 4px;
}

.site-footer__brand-name {
  color: var(--sd-text);
  font-size: 24px;
  font-weight: 860;
  line-height: 0.95;
  letter-spacing: -0.055em;
}

.site-footer__brand-label {
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-footer__tagline {
  max-width: 320px;
  margin: 24px 0 0;
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 720;
  line-height: 1.35;
  letter-spacing: -0.025em;
}

.site-footer__description {
  max-width: 380px;
  margin: 12px 0 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.7;
}

.site-footer__socials {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 26px;
}

.site-footer__social {
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-muted);
  transition:
    color var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.site-footer__social:hover {
  border-color: rgba(213, 122, 42, 0.34);
  background: rgba(213, 122, 42, 0.1);
  color: var(--sd-orange-strong);
  transform: translateY(-2px);
}

.site-footer__social svg {
  width: 19px;
  height: 19px;
}

.site-footer__cols {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.site-footer__col {
  min-width: 0;
}

.site-footer__col h4 {
  margin: 0 0 14px;
  color: var(--sd-text);
  font-size: 12px;
  font-weight: 850;
  line-height: 1.3;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.site-footer__links {
  display: grid;
  gap: 6px;
}

.site-footer__links a {
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  align-items: center;
  gap: 7px;
  padding: 7px 9px;
  margin-left: -9px;
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--sd-text-soft);
  font-size: 14px;
  line-height: 1.25;
  text-decoration: none;
  transition:
    color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.site-footer__links a:hover {
  border-color: rgba(213, 122, 42, 0.22);
  background: rgba(213, 122, 42, 0.08);
  color: var(--sd-orange-strong);
  transform: translateX(2px);
}

.site-footer__links a svg {
  width: 11px;
  height: 11px;
  flex: 0 0 auto;
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.site-footer__links a:hover svg {
  opacity: 1;
  transform: translateX(0);
}

.site-footer__bottom {
  position: relative;
  display: flex;
  width: min(100% - 48px, var(--sd-container));
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-inline: auto;
  padding: 20px 0;
  border-top: 1px solid var(--sd-border);
  color: var(--sd-text-muted);
  font-size: 12.5px;
}

.site-footer__bottom-links {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.site-footer__bottom a {
  color: var(--sd-text-muted);
  text-decoration: none;
  transition: color var(--sd-transition-fast);
}

.site-footer__bottom a:hover {
  color: var(--sd-orange-strong);
}

@media (max-width: 1120px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .site-footer__brand {
    max-width: 680px;
  }

  .site-footer__description {
    max-width: 620px;
  }

  .site-footer__cols {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px 24px;
  }
}

@media (max-width: 760px) {
  .site-footer {
    padding-top: 46px;
  }

  .site-footer__inner,
  .site-footer__bottom {
    width: min(100% - 40px, var(--sd-container));
  }

  .site-footer__cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 520px) {
  .site-footer__inner,
  .site-footer__bottom {
    width: min(100% - 28px, var(--sd-container));
  }

  .site-footer__cols {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .site-footer__links a {
    width: 100%;
    justify-content: space-between;
    margin-left: 0;
    padding: 9px 0;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .site-footer__links a:hover {
    border-color: transparent;
    border-bottom-color: rgba(213, 122, 42, 0.22);
    background: transparent;
  }

  .site-footer__links a svg {
    opacity: 1;
    transform: none;
  }

  .site-footer__tagline {
    font-size: 17px;
  }
}
/* ==========================================================================
   SiteFooter background override
   Simple Softadastra green background
   ========================================================================== */

.site-footer {
  background: linear-gradient(
    90deg,
    rgba(11, 43, 34, 1),
    rgba(11, 43, 34, 0.72)
  ) !important;
  border-top-color: var(--sd-border) !important;
}

.site-footer::before,
.site-footer__glow,
.site-footer__glow--orange,
.site-footer__glow--green {
  display: none !important;
}
</style>
