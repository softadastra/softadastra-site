<template>
  <footer class="sf">
    <div class="sf__inner">
      <div class="sf__brand">
        <RouterLink to="/" class="sf__logo" aria-label="Softadastra home">
          <span class="sf__logo-mark">
            <img src="/logo.svg" alt="" aria-hidden="true" />
          </span>

          <span class="sf__logo-copy">
            <strong>{{ footerMeta.brand }}</strong>
            <small>The C++ Tooling Company</small>
          </span>
        </RouterLink>

        <p>{{ footerMeta.tagline }}</p>

        <div class="sf__socials" aria-label="Softadastra social links">
          <a
            v-for="social in footerSocialLinks"
            :key="social.label"
            :href="social.href"
            class="sf__social"
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

      <nav class="sf__navigation" aria-label="Footer navigation">
        <section
          v-for="group in footerGroups"
          :key="group.title"
          class="sf__group"
        >
          <h2>{{ group.title }}</h2>

          <ul>
            <li v-for="item in group.links" :key="item.label">
              <a :href="item.href" target="_blank" rel="noopener noreferrer">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </div>

    <div class="sf__bottom">
      <div class="sf__bottom-inner">
        <span>{{ footerMeta.copyright }}</span>

        <span class="sf__built">
          Built with
          <a :href="links.vix" target="_blank" rel="noopener noreferrer">
            Vix.cpp
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { links } from "../../data/links";
import { footerGroups, footerMeta, footerSocialLinks } from "../../data/footer";
</script>

<style scoped>
.sf {
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  background: #0b0d10;
  color: rgba(245, 244, 242, 0.82);
}

.sf::before {
  position: absolute;
  top: -1px;
  left: 50%;
  width: 90px;
  height: 2px;
  border-radius: 0 0 2px 2px;
  background: var(--sd-orange);
  content: "";
  transform: translateX(-50%);
}

.sf__inner {
  display: grid;
  width: min(100% - 48px, var(--sd-container));
  grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
  gap: clamp(48px, 8vw, 110px);
  margin-inline: auto;
  padding: 58px 0 50px;
}

/* Brand */

.sf__brand {
  max-width: 310px;
}

.sf__logo {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: inherit;
  text-decoration: none;
}

.sf__logo-mark {
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.045);
}

.sf__logo-mark img {
  width: 25px;
  height: 25px;
  object-fit: contain;
}

.sf__logo-copy {
  display: grid;
  line-height: 1.2;
}

.sf__logo-copy strong {
  color: #ffffff;
  font-size: 18px;
  font-weight: 780;
  letter-spacing: -0.035em;
}

.sf__logo-copy small {
  margin-top: 3px;
  color: var(--sd-orange);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  font-weight: 720;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.sf__brand > p {
  max-width: 290px;
  margin: 18px 0 0;
  color: rgba(245, 244, 242, 0.48);
  font-size: 12.5px;
  line-height: 1.6;
}

/* Social links */

.sf__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 21px;
}

.sf__social {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.025);
  color: rgba(245, 244, 242, 0.45);
  text-decoration: none;
  transition:
    border-color var(--sd-transition-fast),
    background var(--sd-transition-fast),
    color var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.sf__social:hover {
  border-color: rgba(216, 111, 31, 0.32);
  background: rgba(216, 111, 31, 0.09);
  color: #f19a5b;
  transform: translateY(-2px);
}

.sf__social svg {
  width: 15px;
  height: 15px;
}

/* Navigation */

.sf__navigation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 34px 26px;
}

.sf__group h2 {
  margin: 0 0 15px;
  color: rgba(245, 244, 242, 0.34);
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 760;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.sf__group ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sf__group a {
  color: rgba(245, 244, 242, 0.58);
  font-size: 12.5px;
  text-decoration: none;
  transition:
    color var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.sf__group a:hover {
  color: #ffffff;
}

/* Bottom */

.sf__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.sf__bottom-inner {
  display: flex;
  width: min(100% - 48px, var(--sd-container));
  min-height: 58px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-inline: auto;
  color: rgba(245, 244, 242, 0.3);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
}

.sf__built {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.sf__built a {
  color: rgba(245, 244, 242, 0.5);
  text-decoration: none;
  transition: color var(--sd-transition-fast);
}

.sf__built a:hover {
  color: var(--sd-orange);
}

@media (max-width: 860px) {
  .sf__inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .sf__brand {
    max-width: 480px;
  }
}

@media (max-width: 640px) {
  .sf__inner,
  .sf__bottom-inner {
    width: min(100% - 28px, var(--sd-container));
  }

  .sf__inner {
    padding: 46px 0 40px;
  }

  .sf__navigation {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sf__bottom-inner {
    min-height: auto;
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
    padding: 16px 0;
  }
}

@media (max-width: 420px) {
  .sf__navigation {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
