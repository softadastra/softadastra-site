<template>
  <footer class="site-footer">
    <div class="site-footer__inner sd-container">
      <div class="site-footer__brand">
        <RouterLink
          to="/"
          class="site-footer__logo"
        >
          <span class="site-footer__mark">S</span>
          <span>Softadastra</span>
        </RouterLink>

        <p>
          Reliable local-first infrastructure for applications that must keep
          working when the network fails.
        </p>
      </div>

      <div class="site-footer__groups">
        <div
          v-for="group in footerGroups"
          :key="group.title"
          class="site-footer__group"
        >
          <h3>{{ group.title }}</h3>

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

    <div class="site-footer__bottom sd-container">
      <span>{{ footerMeta.copyright }}</span>
      <span>{{ footerMeta.license }}</span>
    </div>
  </footer>
</template>

<script setup>
import { footerGroups, footerMeta } from "../../data/footer";
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--sd-border);
  background: rgba(7, 11, 20, 0.72);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 2fr);
  gap: 64px;
  padding: 64px 0 42px;
}

.site-footer__brand {
  max-width: 420px;
}

.site-footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--sd-text);
  font-weight: 900;
  letter-spacing: -0.04em;
}

.site-footer__mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 12px;
  background: var(--sd-surface);
}

.site-footer__brand p {
  margin: 18px 0 0;
  color: var(--sd-text-muted);
}

.site-footer__groups {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.site-footer__group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.site-footer__group h3 {
  margin: 0 0 8px;
  color: var(--sd-text);
  font-size: 0.92rem;
}

.site-footer__group a {
  color: var(--sd-text-muted);
  font-size: 0.94rem;
  transition: color var(--sd-transition);
}

.site-footer__group a:hover {
  color: var(--sd-text);
}

.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 0 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--sd-text-muted);
  font-size: 0.9rem;
}

@media (max-width: 860px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .site-footer__groups {
    grid-template-columns: 1fr;
  }

  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
