<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <RouterLink
          to="/"
          class="site-footer__brand-name"
        >
          {{ footerMeta.brand }}
        </RouterLink>

        <p class="site-footer__tagline">
          {{ footerMeta.tagline }}
        </p>
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
      {{ footerMeta.copyright }}
    </div>
  </footer>
</template>

<script setup>
import { footerGroups, footerMeta } from "../../data/footer";
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--sd-border);
  padding: 60px 0 0;
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 48px;
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
  padding: 0 0 48px;
}

.site-footer__brand-name {
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 750;
  letter-spacing: -0.03em;
}

.site-footer__tagline {
  margin-top: 10px;
  color: var(--sd-text-muted);
  font-size: 14px;
  line-height: 1.6;
}

.site-footer__cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.site-footer__col h4 {
  margin-bottom: 16px;
  color: var(--sd-text-soft);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.site-footer__col a {
  display: block;
  padding: 4px 0;
  color: var(--sd-text-muted);
  font-size: 14px;
  transition: color var(--sd-transition-fast);
}

.site-footer__col a:hover {
  color: var(--sd-accent);
}

.site-footer__bottom {
  width: min(100% - 48px, var(--sd-container));
  margin-inline: auto;
  padding: 18px 0;
  border-top: 1px solid var(--sd-border);
  color: var(--sd-text-muted);
  font-size: 13px;
}

@media (max-width: 860px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    width: min(100% - 40px, var(--sd-container));
  }

  .site-footer__cols {
    grid-template-columns: repeat(2, 1fr);
  }

  .site-footer__bottom {
    width: min(100% - 40px, var(--sd-container));
  }
}

@media (max-width: 520px) {
  .site-footer__inner {
    width: min(100% - 28px, var(--sd-container));
  }

  .site-footer__cols {
    grid-template-columns: 1fr;
  }

  .site-footer__bottom {
    width: min(100% - 28px, var(--sd-container));
  }
}
</style>
