<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <RouterLink
          to="/"
          class="site-footer__logo-link"
          aria-label="Softadastra home"
        >
          <span class="site-footer__logo-mark">
            <img src="/logo.svg" alt="" aria-hidden="true" />
          </span>

          <span class="site-footer__logo-text">
            <strong>{{ footerMeta.brand }}</strong>
            <small>The C++ Tooling Company</small>
          </span>
        </RouterLink>

        <p class="site-footer__tagline">
          {{ footerMeta.tagline }}
        </p>

        <p class="site-footer__desc">
          Softadastra builds and maintains open tooling for modern C++
          development: runtime foundations, developer workflows, backend
          reliability, local-first runtime layers, and practical validation
          applications.
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
              v-else-if="social.icon === 'x'"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M15.27 2h2.51l-5.49 6.28L18.6 18h-5.06l-3.96-5.18L5.12 18H2.6l5.87-6.71L2.24 2h5.19l3.58 4.73L15.27 2zm-.88 14.37h1.39L6.53 3.43H5.04l9.35 12.94z"
              />
            </svg>

            <svg
              v-else-if="social.icon === 'discord'"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M16.07 3.92A15.4 15.4 0 0012.18 2.8a.06.06 0 00-.06.03c-.17.3-.36.7-.49 1a14.3 14.3 0 00-4.26 0 10.3 10.3 0 00-.5-1 .06.06 0 00-.06-.03c-1.35.23-2.65.63-3.89 1.12a.05.05 0 00-.02.02C.84 7.2.2 10.38.54 13.52a.06.06 0 00.02.04 15.5 15.5 0 004.7 2.38.06.06 0 00.07-.02c.36-.5.68-1.02.96-1.58a.06.06 0 00-.03-.08 10.2 10.2 0 01-1.47-.7.06.06 0 01-.01-.1c.1-.07.2-.15.29-.23a.06.06 0 01.06-.01c3.08 1.41 6.42 1.41 9.47 0a.06.06 0 01.06 0c.1.08.2.16.3.23a.06.06 0 010 .1c-.47.28-.96.51-1.48.7a.06.06 0 00-.03.09c.28.56.6 1.08.95 1.57a.06.06 0 00.07.02 15.45 15.45 0 004.71-2.38.06.06 0 00.03-.04c.4-3.65-.67-6.81-2.82-9.62a.05.05 0 00-.03-.02zM6.68 11.6c-.83 0-1.52-.77-1.52-1.71s.67-1.71 1.52-1.71c.86 0 1.53.77 1.52 1.71 0 .94-.68 1.71-1.52 1.71zm5.63 0c-.83 0-1.52-.77-1.52-1.71s.67-1.71 1.52-1.71c.86 0 1.53.77 1.52 1.71 0 .94-.67 1.71-1.52 1.71z"
              />
            </svg>

            <svg v-else viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle
                cx="10"
                cy="10"
                r="7"
                stroke="currentColor"
                stroke-width="1.4"
              />
              <path
                d="M7 10l2 2 4-4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
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
          <h4 class="site-footer__col-title">
            {{ group.title }}
          </h4>

          <ul class="site-footer__list">
            <li v-for="item in group.links" :key="item.label">
              <a
                :href="item.href"
                class="site-footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="site-footer__bottom-inner">
        <span class="site-footer__copyright">
          {{ footerMeta.copyright }}
        </span>

        <div class="site-footer__bottom-links">
          <a :href="links.vixDocs" target="_blank" rel="noopener noreferrer">
            Vix Docs
          </a>

          <a :href="links.vixBlog" target="_blank" rel="noopener noreferrer">
            Vix Blog
          </a>

          <a
            :href="links.vixRegistry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registry
          </a>

          <a :href="links.github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { links } from "../../data/links";
import { footerGroups, footerMeta, footerSocialLinks } from "../../data/footer";
</script>

<style scoped>
/* ==========================================================================
   SiteFooter — Softadastra
   ========================================================================== */

.site-footer {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(8, 34, 27, 1);
}

/* Subtle top-edge highlight */
.site-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(47, 212, 156, 0.25),
    rgba(213, 122, 42, 0.2),
    transparent
  );
}

/* ── Inner grid ── */
.site-footer__inner {
  position: relative;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: clamp(40px, 6vw, 88px);
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
  padding: 56px 0 48px;
}

/* ── Brand column ── */
.site-footer__brand {
  max-width: 320px;
}

.site-footer__logo-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--sd-text);
  text-decoration: none;
  transition: opacity 150ms ease;
}

.site-footer__logo-link:hover {
  opacity: 0.85;
}

.site-footer__logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
}

.site-footer__logo-text {
  display: grid;
  gap: 3px;
}

.site-footer__logo-text strong {
  color: var(--sd-text);
  font-size: 20px;
  font-weight: 840;
  line-height: 1;
  letter-spacing: -0.04em;
}

.site-footer__logo-text small {
  color: var(--sd-green, #2fd49c);
  font-family: var(--sd-font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.site-footer__tagline {
  margin: 22px 0 0;
  color: var(--sd-text);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.02em;
}

.site-footer__desc {
  margin: 10px 0 0;
  color: rgba(220, 235, 228, 0.5);
  font-size: 13.5px;
  line-height: 1.65;
}

/* Socials */
.site-footer__socials {
  display: flex;
  gap: 8px;
  margin-top: 24px;
}

.site-footer__social {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(220, 235, 228, 0.5);
  transition: all 180ms ease;
}

.site-footer__social:hover {
  border-color: rgba(47, 212, 156, 0.3);
  background: rgba(47, 212, 156, 0.08);
  color: var(--sd-green, #2fd49c);
  transform: translateY(-1px);
}

.site-footer__social svg {
  width: 16px;
  height: 16px;
}

/* ── Link columns ── */
.site-footer__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 16px 20px;
}

.site-footer__col-title {
  margin: 0 0 14px;
  color: var(--sd-text);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  opacity: 0.75;
}

.site-footer__list {
  display: grid;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-footer__link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 8px;
  margin-left: -8px;
  border-radius: 7px;
  color: rgba(220, 235, 228, 0.65);
  font-size: 13.5px;
  line-height: 1.3;
  text-decoration: none;
  transition: all 150ms ease;
}

.site-footer__link:hover {
  background: rgba(47, 212, 156, 0.07);
  color: var(--sd-text);
}

.site-footer__link-arrow {
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  opacity: 0;
  transform: translate(-3px, 1px);
  transition: all 180ms ease;
}

.site-footer__link:hover .site-footer__link-arrow {
  opacity: 0.6;
  transform: translate(0, 0);
}

/* ── Bottom bar ── */
.site-footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.15);
}

.site-footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
  padding: 16px 0;
}

.site-footer__copyright {
  color: rgba(220, 235, 228, 0.35);
  font-size: 12px;
}

.site-footer__bottom-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.site-footer__bottom-links a {
  color: rgba(220, 235, 228, 0.4);
  font-size: 12px;
  text-decoration: none;
  transition: color 150ms ease;
}

.site-footer__bottom-links a:hover {
  color: var(--sd-green, #2fd49c);
}

/* ── Responsive ── */
@media (max-width: 1080px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .site-footer__brand {
    max-width: 520px;
  }

  .site-footer__cols {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 720px) {
  .site-footer__inner {
    padding: 44px 0 40px;
  }

  .site-footer__inner,
  .site-footer__bottom-inner {
    width: min(100% - 36px, var(--sd-container));
  }

  .site-footer__cols {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 20px;
  }

  .site-footer__bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .site-footer__inner,
  .site-footer__bottom-inner {
    width: min(100% - 24px, var(--sd-container));
  }

  .site-footer__inner {
    padding: 36px 0 32px;
  }

  .site-footer__cols {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .site-footer__link {
    margin-left: 0;
    padding: 8px 0;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    width: 100%;
    justify-content: space-between;
  }

  .site-footer__link:hover {
    background: transparent;
    border-bottom-color: rgba(47, 212, 156, 0.15);
  }

  .site-footer__link-arrow {
    opacity: 0.35;
    transform: none;
  }

  .site-footer__tagline {
    font-size: 15px;
  }

  .site-footer__desc {
    font-size: 13px;
  }
}

/* ==========================================================================
   Softadastra Engine footer override
   ========================================================================== */

.site-footer {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 244, 224, 0.09);

  background:
    radial-gradient(
      circle at 18% 0%,
      rgba(246, 222, 184, 0.08) 0%,
      transparent 32%
    ),
    radial-gradient(
      circle at 82% 18%,
      rgba(213, 122, 42, 0.12) 0%,
      transparent 36%
    ),
    linear-gradient(
      180deg,
      rgba(11, 43, 34, 0.88) 0%,
      rgba(8, 34, 27, 0.96) 58%,
      rgba(5, 24, 19, 1) 100%
    );
}

/* replace the old thin green/orange footer highlight */
.site-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(226, 154, 85, 0.22) 28%,
    rgba(246, 222, 184, 0.16) 50%,
    rgba(213, 122, 42, 0.18) 72%,
    transparent 100%
  );

  height: 1px;
  top: 0;
  left: 8%;
  right: 8%;
}

.site-footer::after {
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

  opacity: 0.24;
  mix-blend-mode: soft-light;
}

.site-footer__inner,
.site-footer__bottom {
  position: relative;
  z-index: 1;
}

.site-footer__bottom {
  border-top: 1px solid rgba(255, 244, 224, 0.08);
  background: rgba(0, 0, 0, 0.16);
}

/* ==========================================================================
   Footer colors override
   ========================================================================== */

.site-footer__logo-text strong {
  color: rgba(255, 248, 235, 0.96);
}

.site-footer__logo-text small {
  color: var(--sd-orange-strong);
}

.site-footer__tagline {
  color: rgba(255, 248, 235, 0.94);
}

.site-footer__desc {
  color: rgba(246, 232, 204, 0.56);
}

.site-footer__col-title {
  color: rgba(255, 248, 235, 0.78);
}

.site-footer__link {
  color: rgba(246, 232, 204, 0.62);
}

.site-footer__link:hover {
  background: rgba(213, 122, 42, 0.08);
  color: rgba(255, 248, 235, 0.96);
}

.site-footer__social {
  border-color: rgba(255, 244, 224, 0.1);
  background: rgba(255, 244, 224, 0.04);
  color: rgba(246, 232, 204, 0.56);
}

.site-footer__social:hover {
  border-color: rgba(226, 154, 85, 0.3);
  background: rgba(213, 122, 42, 0.12);
  color: var(--sd-orange-strong);
}

.site-footer__copyright,
.site-footer__bottom-links a {
  color: rgba(246, 232, 204, 0.42);
}

.site-footer__bottom-links a:hover {
  color: var(--sd-orange-strong);
}
</style>
