<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <div class="site-header__inner">
      <!-- Brand -->
      <RouterLink
        to="/"
        class="site-header__brand"
        aria-label="Softadastra home"
      >
        <span class="site-header__logo">
          <img src="/logo.svg" alt="" aria-hidden="true" />
        </span>
        <span class="site-header__wordmark">Softadastra</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="site-header__nav" aria-label="Main navigation">
        <div
          v-for="group in navigationGroups"
          :key="group.label"
          class="site-header__group"
          @mouseenter="group.items ? openDropdown(group.label) : null"
          @mouseleave="group.items ? scheduleClose() : null"
          @focusin="group.items ? openDropdown(group.label) : null"
          @focusout="group.items ? scheduleClose() : null"
        >
          <component
            :is="group.href ? 'a' : 'button'"
            class="site-header__link"
            :type="group.href ? undefined : 'button'"
            :href="group.href || undefined"
            :aria-expanded="
              group.items ? activeDropdown === group.label : undefined
            "
            @click="group.items ? toggleDropdown(group.label) : closeDropdown()"
          >
            {{ group.label }}
            <svg
              v-if="group.items"
              class="site-header__chevron"
              viewBox="0 0 10 10"
              aria-hidden="true"
            >
              <path
                d="M2.5 3.8 5 6.2 7.5 3.8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </component>

          <!-- Desktop dropdown (Transition OK here, not scoped issue) -->
          <Transition name="dropdown">
            <div
              v-if="group.items && activeDropdown === group.label"
              class="site-header__dropdown"
              @mouseenter="cancelClose"
              @mouseleave="scheduleClose"
            >
              <div class="site-header__dropdown-arrow" />
              <div
                class="site-header__dropdown-grid"
                :class="{
                  'site-header__dropdown-grid--wide': group.items.length > 3,
                }"
              >
                <component
                  :is="item.to ? 'RouterLink' : 'a'"
                  v-for="item in group.items"
                  :key="item.label"
                  :to="item.to || undefined"
                  :href="item.href || undefined"
                  class="site-header__dropdown-card"
                  @click="closeDropdown"
                >
                  <span class="site-header__dropdown-icon">
                    <component :is="getIcon(item.label)" />
                  </span>
                  <span class="site-header__dropdown-text">
                    <strong>{{ item.label }}</strong>
                    <small>{{ item.description }}</small>
                  </span>
                </component>
              </div>
            </div>
          </Transition>
        </div>
      </nav>

      <!-- Right: actions -->
      <div class="site-header__actions">
        <a
          :href="links.github"
          class="site-header__icon-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
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
          class="site-header__cta"
        >
          {{ action.label }}
        </BaseButton>
      </div>

      <!-- Mobile toggle -->
      <button
        class="site-header__mobile-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="
          menuOpen ? 'Close navigation menu' : 'Open navigation menu'
        "
        @click="toggleMenu"
      >
        <svg
          v-if="!menuOpen"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>

        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
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
import { h, onMounted, onUnmounted, ref, watch } from "vue";
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

// ── State ──
const scrolled = ref(false);
const menuOpen = ref(false);
const activeDropdown = ref("");
const mobileExpanded = ref("");
let closeTimer = null;

// ── Dropdown logic ──
function clearTimer() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}
function openDropdown(label) {
  clearTimer();
  activeDropdown.value = label;
}
function closeDropdown() {
  clearTimer();
  activeDropdown.value = "";
}
function scheduleClose() {
  clearTimer();
  closeTimer = setTimeout(() => {
    activeDropdown.value = "";
  }, 150);
}
function cancelClose() {
  clearTimer();
}
function toggleDropdown(label) {
  activeDropdown.value === label ? closeDropdown() : openDropdown(label);
}

// ── Mobile ──
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
  mobileExpanded.value = "";
}
function toggleMobileGroup(label) {
  mobileExpanded.value = mobileExpanded.value === label ? "" : label;
}

// ── Scroll detection ──
function onScroll() {
  scrolled.value = window.scrollY > 8;
}

// ── Keyboard ──
function onKeydown(e) {
  if (e.key === "Escape") {
    closeDropdown();
    closeMenu();
  }
}

function onResize() {
  if (window.innerWidth > 1100) {
    closeMenu();
  }
}

// ── Route change closes everything ──
watch(
  () => route.fullPath,
  () => {
    closeDropdown();
    closeMenu();
  },
);

// ── Lifecycle ──
onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("resize", onResize);

  onScroll();
  onResize();
});

onUnmounted(() => {
  clearTimer();
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("resize", onResize);
});

// ── SVG Icon components (inline, no images) ──
const iconDefs = {
  Converdict: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M10 2l2.5 5H18l-4 3.5 1.5 5.5L10 13l-5.5 3 1.5-5.5L2 7h5.5z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
    ]),

  PulseGrid: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("rect", {
        x: 2,
        y: 2,
        width: 7,
        height: 7,
        rx: 1.5,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("rect", {
        x: 11,
        y: 2,
        width: 7,
        height: 7,
        rx: 1.5,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("rect", {
        x: 2,
        y: 11,
        width: 7,
        height: 7,
        rx: 1.5,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("rect", {
        x: 11,
        y: 11,
        width: 7,
        height: 7,
        rx: 1.5,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
    ]),

  "Vix Runtime": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("polygon", {
        points: "10,2 18,7 18,13 10,18 2,13 2,7",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("circle", {
        cx: 10,
        cy: 10,
        r: 2.5,
        fill: "currentColor",
        opacity: 0.5,
      }),
    ]),

  Cnerium: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M10 2v16M2 10h16",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linecap": "round",
      }),
      h("circle", {
        cx: 10,
        cy: 10,
        r: 6,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
    ]),

  Kordex: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M4 4h12v12H4z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M4 10h12M10 4v12",
        stroke: "currentColor",
        "stroke-width": "1.2",
        opacity: 0.5,
      }),
    ]),

  "Vix Agent": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("circle", {
        cx: 10,
        cy: 8,
        r: 4,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("path", {
        d: "M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linecap": "round",
      }),
      h("circle", {
        cx: 10,
        cy: 8,
        r: 1.5,
        fill: "currentColor",
        opacity: 0.45,
      }),
    ]),

  "Vix Game": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("rect", {
        x: 3,
        y: 5,
        width: 14,
        height: 10,
        rx: 2.5,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("circle", {
        cx: 7.5,
        cy: 10,
        r: 1.5,
        fill: "currentColor",
        opacity: 0.5,
      }),
      h("circle", {
        cx: 12.5,
        cy: 10,
        r: 1.5,
        fill: "currentColor",
        opacity: 0.5,
      }),
    ]),

  "Ivi.hpp": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M4 4l6 12 6-12",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]),

  Rix: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M3 10a7 7 0 1114 0 7 7 0 01-14 0z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("path", {
        d: "M10 6v4l2.5 2.5",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]),

  Communities: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("circle", {
        cx: 7,
        cy: 7,
        r: 3,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.3",
      }),
      h("circle", {
        cx: 13,
        cy: 7,
        r: 3,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.3",
      }),
      h("circle", {
        cx: 10,
        cy: 14,
        r: 3,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.3",
      }),
    ]),

  "Vix Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M7 9h6M7 12h4",
        stroke: "currentColor",
        "stroke-width": "1.2",
        "stroke-linecap": "round",
        opacity: 0.6,
      }),
    ]),

  "Cnerium Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M7 9h6M7 12h4",
        stroke: "currentColor",
        "stroke-width": "1.2",
        "stroke-linecap": "round",
        opacity: 0.6,
      }),
    ]),

  "Softadastra Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("circle", {
        cx: 10,
        cy: 11,
        r: 2.5,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.2",
        opacity: 0.5,
      }),
    ]),

  "Kordex Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M7 9h6M7 12h4",
        stroke: "currentColor",
        "stroke-width": "1.2",
        "stroke-linecap": "round",
        opacity: 0.6,
      }),
    ]),

  "Engineering Blog": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M14.5 3.5l2 2-9 9H5.5v-2z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M4 17h12",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linecap": "round",
        opacity: 0.4,
      }),
    ]),

  Company: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M3 17V6l7-4 7 4v11H3z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
      h("rect", {
        x: 8,
        y: 11,
        width: 4,
        height: 6,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.2",
      }),
    ]),

  Ecosystem: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("circle", {
        cx: 10,
        cy: 10,
        r: 3,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("circle", {
        cx: 10,
        cy: 3,
        r: 1.5,
        fill: "currentColor",
        opacity: 0.5,
      }),
      h("circle", {
        cx: 16,
        cy: 14,
        r: 1.5,
        fill: "currentColor",
        opacity: 0.5,
      }),
      h("circle", {
        cx: 4,
        cy: 14,
        r: 1.5,
        fill: "currentColor",
        opacity: 0.5,
      }),
      h("path", {
        d: "M10 6v-1.5M12.6 11.5l2 1M7.4 11.5l-2 1",
        stroke: "currentColor",
        "stroke-width": "1.2",
        opacity: 0.45,
      }),
    ]),

  "Open Source Model": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", {
        d: "M10 2a8 8 0 100 16 8 8 0 000-16z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("path", {
        d: "M7 10l2 2 4-4",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]),
};

const fallbackIcon = () =>
  h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
    h("circle", {
      cx: 10,
      cy: 10,
      r: 7,
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.4",
    }),
    h("circle", { cx: 10, cy: 10, r: 2, fill: "currentColor", opacity: 0.4 }),
  ]);

function getIcon(label) {
  return iconDefs[label] || fallbackIcon;
}
</script>

<style scoped>
/* ==========================================================================
   SiteHeader — Softadastra
   ========================================================================== */

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(11, 43, 34, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition:
    background 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease;
}

.site-header--scrolled {
  background: rgba(11, 43, 34, 0.97);
  border-bottom-color: rgba(255, 255, 255, 0.09);
  box-shadow: 0 1px 24px rgba(0, 0, 0, 0.25);
}

/* ── Inner ── */
.site-header__inner {
  position: relative;
  z-index: 1002;
  display: flex;
  align-items: center;
  gap: 8px;
  width: min(100% - 48px, var(--sd-container));
  height: var(--sd-header-height, 60px);
  margin-inline: auto;
}

/* ── Brand ── */
.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  margin-right: 12px;
  color: var(--sd-text);
  text-decoration: none;
  transition: opacity 150ms ease;
}

.site-header__brand:hover {
  opacity: 0.85;
}

.site-header__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}

.site-header__logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.site-header__wordmark {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
}

/* ── Desktop nav ── */
.site-header__nav {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  justify-content: center;
}

.site-header__group {
  position: relative;
}

.site-header__link {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 34px;
  padding: 0 11px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: var(--sd-text-soft);
  font-size: 13.5px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition:
    background 150ms ease,
    color 150ms ease;
}

.site-header__link:hover,
.site-header__link[aria-expanded="true"] {
  background: rgba(255, 255, 255, 0.06);
  color: var(--sd-text);
}

.site-header__chevron {
  width: 10px;
  height: 10px;
  opacity: 0.55;
  transition:
    transform 200ms ease,
    opacity 150ms ease;
}

.site-header__link[aria-expanded="true"] .site-header__chevron {
  transform: rotate(180deg);
  opacity: 0.8;
}

/* ── Dropdown ── */
.site-header__dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  z-index: 50;
  transform: translateX(-50%);
}

.site-header__dropdown-arrow {
  position: absolute;
  top: -5px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px 0 0 0;
  background: rgba(12, 44, 35, 0.99);
  transform: translateX(-50%) rotate(45deg);
}

.site-header__dropdown-grid {
  display: grid;
  gap: 2px;
  min-width: 280px;
  max-width: min(580px, calc(100vw - 48px));
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background: rgba(12, 44, 35, 0.99);
  box-shadow:
    0 20px 64px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.site-header__dropdown-grid--wide {
  width: 540px;
  grid-template-columns: repeat(2, 1fr);
}

.site-header__dropdown-card {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 10px;
  align-items: start;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 140ms ease;
}

.site-header__dropdown-card:hover {
  background: rgba(47, 212, 156, 0.08);
}

.site-header__dropdown-icon {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-green, #2fd49c);
  flex-shrink: 0;
}

.site-header__dropdown-text {
  display: grid;
  gap: 3px;
  min-width: 0;
  padding-top: 2px;
}

.site-header__dropdown-text strong {
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
}

.site-header__dropdown-text small {
  color: var(--sd-text-muted);
  font-size: 11.5px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Right actions ── */
.site-header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: 12px;
}

.site-header__icon-link {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  color: var(--sd-text-muted);
  transition:
    background 150ms ease,
    color 150ms ease;
}

.site-header__icon-link:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--sd-text);
}

.site-header__actions :deep(.sd-button) {
  height: 34px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 650;
}

.site-header__actions :deep(.sd-button-primary) {
  background: linear-gradient(
    180deg,
    var(--sd-orange-strong, #d57a2a),
    var(--sd-orange, #c06a22)
  );
  color: #111;
  border: none;
  box-shadow: 0 1px 8px rgba(213, 122, 42, 0.25);
}

.site-header__actions :deep(.sd-button-primary:hover) {
  box-shadow: 0 2px 16px rgba(213, 122, 42, 0.35);
}

.site-header__actions :deep(.sd-button-secondary) {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-soft);
}

.site-header__actions :deep(.sd-button-secondary:hover) {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.07);
  color: var(--sd-text);
}
/* ==========================================================================
   MOBILE MENU

   KEY FIX: No <Transition>, no v-if.
   The menu is ALWAYS in the DOM.
   Show/hide is done via CSS class .site-header__mobile--open
   using visibility, pointer-events, opacity, and transform.

   This avoids Vue scoped <Transition> race conditions where
   the menu element gets removed before the enter transition fires.
   ========================================================================== */

.site-header__mobile {
  position: fixed;
  inset: 0;
  z-index: 1001;
  pointer-events: none;
  visibility: hidden;
}

.site-header__mobile--open {
  pointer-events: auto;
  visibility: visible;
}

/* Backdrop — separate element so @click works without .self */
.site-header__mobile-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 280ms ease;
}

.site-header__mobile--open .site-header__mobile-backdrop {
  opacity: 1;
}

/* Panel — slides down from header */
.site-header__mobile-panel {
  position: absolute;
  top: var(--sd-header-height, 60px);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 43, 34, 0.995);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 280ms ease,
    transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
}

.site-header__mobile--open .site-header__mobile-panel {
  opacity: 1;
  transform: translateY(0);
}

.site-header__mobile-scroll {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

/* ── Mobile body ── */
.site-header__mobile-body {
  flex: 1;
  padding: 12px 20px;
}

.site-header__mobile-group {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.site-header__mobile-group:last-child {
  border-bottom: none;
}

.site-header__mobile-trigger,
.site-header__mobile-direct {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 4px;
  border: none;
  background: transparent;
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 150ms ease;
}

.site-header__mobile-trigger:active,
.site-header__mobile-direct:active {
  color: var(--sd-green, #2fd49c);
}

.site-header__mobile-direct svg {
  opacity: 0.4;
}

.site-header__mobile-arrow {
  opacity: 0.5;
  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header__mobile-arrow--open {
  transform: rotate(180deg);
  opacity: 0.8;
}

/* Accordion — CSS grid-template-rows trick (no v-if needed) */
.site-header__mobile-items {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header__mobile-items--open {
  grid-template-rows: 1fr;
}

.site-header__mobile-items-inner {
  overflow: hidden;
  display: grid;
  gap: 2px;
  padding: 0;
  transition: padding 300ms ease;
}

.site-header__mobile-items--open .site-header__mobile-items-inner {
  padding: 0 0 12px;
}

.site-header__mobile-item {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  align-items: start;
  padding: 10px 8px;
  border-radius: 10px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background 150ms ease;
}

.site-header__mobile-item:active {
  background: rgba(47, 212, 156, 0.1);
}

.site-header__mobile-icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--sd-green, #2fd49c);
}

.site-header__mobile-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.site-header__mobile-copy strong {
  color: var(--sd-text);
  font-size: 13.5px;
  font-weight: 680;
}

.site-header__mobile-copy small {
  color: var(--sd-text-muted);
  font-size: 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Mobile footer ── */
.site-header__mobile-footer {
  display: grid;
  gap: 8px;
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

.site-header__mobile-cta {
  width: 100%;
  justify-content: center;
}

.site-header__mobile-footer :deep(.sd-button) {
  width: 100%;
  justify-content: center;
  height: 44px;
  font-size: 14px;
  border-radius: 10px;
}

.site-header__mobile-footer :deep(.sd-button-primary) {
  background: linear-gradient(
    180deg,
    var(--sd-orange-strong, #d57a2a),
    var(--sd-orange, #c06a22)
  );
  color: #111;
  border: none;
}

.site-header__mobile-footer :deep(.sd-button-secondary) {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-soft);
}

.site-header__mobile-button {
  display: none;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--sd-text-soft);
  cursor: pointer;
  transition:
    background var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    color var(--sd-transition-fast);
}

.site-header__mobile-button:hover,
.site-header__mobile-button[aria-expanded="true"] {
  border-color: rgba(213, 122, 42, 0.3);
  background: rgba(213, 122, 42, 0.12);
  color: var(--sd-orange-strong);
}

.site-header__mobile-button svg {
  width: 23px;
  height: 23px;
}

/* ── Desktop dropdown transitions (these work fine with scoped) ── */
.dropdown-enter-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.dropdown-leave-active {
  transition:
    opacity 120ms ease,
    transform 120ms ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* ── Responsive ── */
@media (max-width: 1200px) {
  .site-header__link {
    padding: 0 8px;
    font-size: 13px;
  }

  .site-header__actions :deep(.sd-button-secondary) {
    display: none;
  }
}

@media (max-width: 1100px) {
  .site-header__nav,
  .site-header__actions {
    display: none;
  }

  .site-header__mobile-button {
    display: flex;
    margin-left: auto;
  }

  .site-header__inner {
    width: min(100% - 36px, var(--sd-container));
  }
}

@media (max-width: 480px) {
  .site-header__inner {
    width: min(100% - 24px, var(--sd-container));
  }

  .site-header__wordmark {
    font-size: 15.5px;
  }

  .site-header__mobile-body {
    padding: 8px 16px;
  }

  .site-header__mobile-footer {
    padding: 12px 16px;
  }
}
@media (min-width: 1101px) {
  .mobile-menu {
    display: none !important;
  }
}
</style>
