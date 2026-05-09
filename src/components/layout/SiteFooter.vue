<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <RouterLink
          to="/"
          class="site-footer__brand-link"
        >
          <span class="site-footer__logo">
            <img
              src="/logo.svg"
              alt=""
              aria-hidden="true"
            />
          </span>

          <span class="site-footer__brand-name">
            {{ footerMeta.brand }}
          </span>
        </RouterLink>

        <p class="site-footer__tagline">
          {{ footerMeta.tagline }}
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

          <a
            v-for="item in group.links"
            :key="item.label"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <span>{{ footerMeta.copyright }}</span>

      <a
        :href="links.github"
        aria-label="Softadastra GitHub"
      >
        GitHub
      </a>
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
  border-top: 1px solid var(--sd-border);
  background: #0c1015;
  padding: 40px 0 0;
}

.site-footer__inner {
  display: grid;
  grid-template-columns: minmax(240px, 0.9fr) minmax(0, 3fr);
  gap: 52px;
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
  padding: 0 0 44px;
}

.site-footer__brand {
  max-width: 320px;
}

.site-footer__brand-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--sd-text);
}

.site-footer__logo {
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
}

.site-footer__logo img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.site-footer__brand-name {
  font-size: 23px;
  font-weight: 820;
  line-height: 1;
  letter-spacing: -0.055em;
}

.site-footer__tagline {
  max-width: 280px;
  margin-top: 18px;
  color: var(--sd-text-soft);
  font-size: 14px;
  line-height: 1.55;
}

.site-footer__socials {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
}

.site-footer__social {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  color: var(--sd-text-muted);
  transition:
    color var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.site-footer__social:hover {
  color: var(--sd-text);
  transform: translateY(-1px);
}

.site-footer__social svg {
  width: 21px;
  height: 21px;
}

.site-footer__cols {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 30px;
}

.site-footer__col h4 {
  margin: 0 0 14px;
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 760;
  line-height: 1.3;
}

.site-footer__col a {
  display: block;
  padding: 4px 0;
  color: var(--sd-text-soft);
  font-size: 14px;
  line-height: 1.35;
  transition: color var(--sd-transition-fast);
}

.site-footer__col a:hover {
  color: var(--sd-accent);
}

.site-footer__bottom {
  display: flex;
  width: min(100% - 48px, var(--sd-container));
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-inline: auto;
  padding: 18px 0;
  border-top: 1px solid var(--sd-border);
  color: var(--sd-text-muted);
  font-size: 12.5px;
}

.site-footer__bottom a {
  color: var(--sd-text-muted);
  transition: color var(--sd-transition-fast);
}

.site-footer__bottom a:hover {
  color: var(--sd-accent);
}

@media (max-width: 1100px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .site-footer__brand {
    max-width: 420px;
  }

  .site-footer__cols {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .site-footer__inner,
  .site-footer__bottom {
    width: min(100% - 40px, var(--sd-container));
  }

  .site-footer__cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 28px;
  }
}

@media (max-width: 520px) {
  .site-footer {
    padding-top: 34px;
  }

  .site-footer__inner,
  .site-footer__bottom {
    width: min(100% - 28px, var(--sd-container));
  }

  .site-footer__cols {
    grid-template-columns: 1fr;
  }

  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
