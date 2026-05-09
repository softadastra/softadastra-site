<template>
  <header class="site-header">
    <div class="site-header__inner sd-container">
      <RouterLink
        to="/"
        class="site-header__brand"
        aria-label="Softadastra home"
      >
        <span class="site-header__mark">S</span>

        <span class="site-header__brand-text">
          Softadastra
        </span>
      </RouterLink>

      <nav class="site-header__nav">
        <component
          :is="item.to ? 'RouterLink' : 'a'"
          v-for="item in navigation"
          :key="item.label"
          :to="item.to || undefined"
          :href="item.href || undefined"
          class="site-header__link"
        >
          {{ item.label }}
        </component>
      </nav>

      <div class="site-header__actions">
        <BaseButton
          v-for="action in headerActions"
          :key="action.label"
          :href="action.href"
          :to="action.to"
          :variant="action.variant"
        >
          {{ action.label }}
        </BaseButton>
      </div>

      <button
        class="site-header__menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span />
        <span />
      </button>
    </div>

    <MobileMenu
      :open="menuOpen"
      :navigation="navigation"
      :actions="headerActions"
      @close="closeMenu"
    />
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { headerActions, navigation } from "../../data/navigation";

import BaseButton from "../ui/BaseButton.vue";
import MobileMenu from "./MobileMenu.vue";

const route = useRoute();
const menuOpen = ref(false);

function closeMenu() {
  menuOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

watch(
  () => route.fullPath,
  () => {
    closeMenu();
  },
);

watch(menuOpen, (value) => {
  document.body.classList.toggle("no-scroll", value);
});

function handleEscape(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
  document.body.classList.remove("no-scroll");
});
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 90;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(7, 11, 20, 0.76);
  backdrop-filter: blur(18px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--sd-header-height);
  gap: 24px;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.site-header__mark {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(34, 197, 94, 0.12)),
    var(--sd-surface);
  color: var(--sd-text);
  box-shadow: 0 12px 34px rgba(56, 189, 248, 0.14);
}

.site-header__brand-text {
  font-size: 1.02rem;
}

.site-header__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
}

.site-header__link {
  padding: 9px 12px;
  border-radius: 999px;
  color: var(--sd-text-muted);
  font-size: 0.92rem;
  font-weight: 750;
  transition:
    background var(--sd-transition),
    color var(--sd-transition);
}

.site-header__link:hover,
.site-header__link.router-link-active {
  background: var(--sd-surface);
  color: var(--sd-text);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}

.site-header__menu-button {
  display: none;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: var(--sd-surface);
  color: var(--sd-text);
}

.site-header__menu-button span {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
}

.site-header__menu-button span + span {
  margin-top: -13px;
}

@media (max-width: 860px) {
  .site-header__nav,
  .site-header__actions {
    display: none;
  }

  .site-header__menu-button {
    display: grid;
  }
}
</style>
