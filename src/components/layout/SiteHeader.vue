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
        <div
          v-for="group in navigationGroups"
          :key="group.label"
          class="site-header__group"
          @mouseenter="openDropdown(group.label)"
          @mouseleave="scheduleCloseDropdown"
          @focusin="openDropdown(group.label)"
          @focusout="scheduleCloseDropdown"
        >
          <button
            class="site-header__group-button"
            type="button"
            :aria-expanded="activeDropdown === group.label"
            @click="toggleDropdown(group.label)"
          >
            {{ group.label }}

            <svg
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4.5 6 7.5 9 4.5"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <Transition name="site-header-dropdown">
            <div
              v-if="activeDropdown === group.label"
              class="site-header__dropdown"
              @mouseenter="cancelCloseDropdown"
              @mouseleave="scheduleCloseDropdown"
            >
              <div
                :class="[
                  'site-header__dropdown-panel',
                  group.items.length > 3 ? 'site-header__dropdown-panel--grid' : '',
                ]"
              >
                <component
                  :is="item.to ? 'RouterLink' : 'a'"
                  v-for="item in group.items"
                  :key="item.label"
                  :to="item.to || undefined"
                  :href="item.href || undefined"
                  class="site-header__dropdown-item"
                  @click="closeDropdown"
                >
                  <span class="site-header__dropdown-title">
                    {{ item.label }}
                  </span>

                  <span class="site-header__dropdown-desc">
                    {{ item.description }}
                  </span>
                </component>
              </div>
            </div>
          </Transition>
        </div>
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

          <span>102K</span>
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
      :groups="mobileNavigationGroups"
      :actions="headerActions"
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
  mobileNavigationGroups,
  navigationGroups,
} from "../../data/navigation";

import BaseButton from "../ui/BaseButton.vue";
import MobileMenu from "./MobileMenu.vue";

const route = useRoute();

const menuOpen = ref(false);
const activeDropdown = ref("");

let closeTimer = null;

function clearCloseTimer() {
  if (closeTimer) {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function openDropdown(label) {
  clearCloseTimer();
  activeDropdown.value = label;
}

function closeDropdown() {
  clearCloseTimer();
  activeDropdown.value = "";
}

function scheduleCloseDropdown() {
  clearCloseTimer();

  closeTimer = window.setTimeout(() => {
    activeDropdown.value = "";
  }, 160);
}

function cancelCloseDropdown() {
  clearCloseTimer();
}

function toggleDropdown(label) {
  if (activeDropdown.value === label) {
    closeDropdown();
    return;
  }

  openDropdown(label);
}

function closeMenu() {
  menuOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function handleEscape(event) {
  if (event.key === "Escape") {
    closeDropdown();
    closeMenu();
  }
}

watch(
  () => route.fullPath,
  () => {
    closeDropdown();
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
  clearCloseTimer();
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
  background: #0c1015;
}

.site-header__inner {
  display: flex;
  width: min(100% - 48px, var(--sd-container));
  height: var(--sd-header-height);
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  margin-inline: auto;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  color: var(--sd-text);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.site-header__logo {
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
}

.site-header__logo img {
  width: 30px;
  height: 30px;
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

.site-header__group {
  position: relative;
}

.site-header__group-button {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
  border-radius: var(--sd-radius-xs);
  background: transparent;
  color: var(--sd-text-soft);
  font-size: 14px;
  font-weight: 600;
  transition:
    background var(--sd-transition-fast),
    color var(--sd-transition-fast);
}

.site-header__group-button svg {
  width: 12px;
  height: 12px;
  color: var(--sd-text-muted);
  transition: transform 180ms ease;
}

.site-header__group-button:hover,
.site-header__group-button[aria-expanded="true"] {
  background: rgba(255, 255, 255, 0.055);
  color: var(--sd-text);
}

.site-header__group-button[aria-expanded="true"] svg {
  transform: rotate(180deg);
}

.site-header__dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  z-index: 30;
  padding-top: 8px;
  transform: translateX(-50%);
}

.site-header__dropdown-panel {
  position: relative;
  display: grid;
  width: max-content;
  min-width: 270px;
  max-width: min(620px, calc(100vw - 48px));
  gap: 4px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 14px;
  background: #111920;
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);
}

.site-header__dropdown-panel--grid {
  width: 520px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.site-header__dropdown-panel::before {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 12px;
  height: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  border-left: 1px solid rgba(255, 255, 255, 0.09);
  background: #111920;
  content: "";
  transform: translateX(-50%) rotate(45deg);
}

.site-header__dropdown-item {
  position: relative;
  display: grid;
  gap: 4px;
  min-width: 0;
  padding: 10px 11px;
  border-radius: 10px;
  transition:
    background 150ms ease,
    transform 150ms ease;
}

.site-header__dropdown-item:hover {
  background: rgba(174, 185, 255, 0.08);
  transform: translateX(2px);
}

.site-header__dropdown-title {
  color: var(--sd-text);
  font-size: 13.5px;
  font-weight: 720;
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.site-header__dropdown-desc {
  max-width: 220px;
  color: var(--sd-text-muted);
  font-size: 12px;
  line-height: 1.35;
}

.site-header__right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}

.site-header__github {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  gap: 7px;
  padding: 0 8px;
  border-radius: var(--sd-radius-xs);
  color: var(--sd-text-soft);
  font-size: 12.5px;
  font-weight: 600;
  transition:
    background var(--sd-transition-fast),
    color var(--sd-transition-fast);
}

.site-header__github:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--sd-text);
}

.site-header__github svg {
  width: 18px;
  height: 18px;
  color: var(--sd-text-muted);
}

.site-header__right :deep(.sd-button) {
  min-height: 34px;
  padding: 0 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 650;
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

.site-header-dropdown-enter-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.site-header-dropdown-leave-active {
  transition:
    opacity 120ms ease,
    transform 120ms ease;
}

.site-header-dropdown-enter-from,
.site-header-dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px) scale(0.98);
}

.site-header-dropdown-enter-to,
.site-header-dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

@media (max-width: 1180px) {
  .site-header__inner {
    gap: 16px;
  }

  .site-header__group-button {
    padding: 0 9px;
    font-size: 13.5px;
  }

  .site-header__right :deep(.sd-button-secondary) {
    display: none;
  }
}

@media (max-width: 980px) {
  .site-header__github span {
    display: none;
  }

  .site-header__dropdown-panel--grid {
    width: 480px;
  }
}

@media (max-width: 900px) {
  .site-header__nav,
  .site-header__right {
    display: none;
  }

  .site-header__mobile-button {
    display: flex;
  }
}

@media (max-width: 860px) {
  .site-header__inner {
    width: min(100% - 40px, var(--sd-container));
  }
}

@media (max-width: 520px) {
  .site-header__inner {
    width: min(100% - 28px, var(--sd-container));
  }
}
</style>
