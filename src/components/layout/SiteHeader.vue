<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink
        to="/"
        class="site-header__brand"
        aria-label="Softadastra home"
      >
        <span class="site-header__logo">
          <img
            src="/logo.svg"
            alt=""
            aria-hidden="true"
          />
        </span>

        <span class="site-header__brand-text">
          Softadastra
        </span>
      </RouterLink>

      <nav
        class="site-header__nav"
        aria-label="Main navigation"
      >
        <a
          v-for="item in navigation"
          :key="item.label"
          :href="item.href"
          class="site-header__link"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="site-header__right">
        <a
          :href="links.github"
          class="site-header__github"
          aria-label="Softadastra on GitHub"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
            />
          </svg>
        </a>

        <BaseButton
          v-for="action in headerActions"
          :key="action.label"
          :href="action.href"
          :variant="action.variant"
        >
          {{ action.label }}
        </BaseButton>
      </div>

      <button
        class="site-header__mobile-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <line
            x1="4"
            y1="7"
            x2="20"
            y2="7"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
          />
          <line
            x1="4"
            y1="17"
            x2="20"
            y2="17"
          />
        </svg>
      </button>
    </div>

    <MobileMenu
      id="mobile-menu"
      :open="menuOpen"
      :items="mobileNavigation"
      @close="closeMenu"
    />
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { links } from "../../data/links";
import {
  headerActions,
  mobileNavigation,
  navigation,
} from "../../data/navigation";

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

function handleEscape(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
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
  z-index: 100;
  border-bottom: 1px solid var(--sd-border);
  background: rgba(12, 16, 21, 0.78);
  backdrop-filter: blur(20px) saturate(1.7);
  -webkit-backdrop-filter: blur(20px) saturate(1.7);
}

.site-header__inner {
  display: flex;
  width: min(100% - 48px, var(--sd-container));
  height: var(--sd-header-height);
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-inline: auto;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  color: var(--sd-text);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.site-header__logo {
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  color: var(--sd-accent);
}

.site-header__logo img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.site-header__brand-text {
  line-height: 1;
}

.site-header__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1;
}

.site-header__link {
  padding: 6px 14px;
  border-radius: var(--sd-radius-xs);
  color: var(--sd-text-soft);
  font-size: 14px;
  font-weight: 500;
  transition:
    background var(--sd-transition-fast),
    color var(--sd-transition-fast);
}

.site-header__link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--sd-text);
}

.site-header__right {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 0 0 auto;
}

.site-header__github {
  display: flex;
  color: var(--sd-text-muted);
  transition: color var(--sd-transition-fast);
}

.site-header__github:hover {
  color: var(--sd-text);
}

.site-header__mobile-button {
  display: none;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--sd-text-soft);
}

.site-header__mobile-button svg {
  width: 22px;
  height: 22px;
}

@media (max-width: 860px) {
  .site-header__inner {
    width: min(100% - 40px, var(--sd-container));
  }

  .site-header__nav,
  .site-header__right {
    display: none;
  }

  .site-header__mobile-button {
    display: flex;
  }
}

@media (max-width: 520px) {
  .site-header__inner {
    width: min(100% - 28px, var(--sd-container));
  }
}
</style>
