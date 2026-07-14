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
            :class="{
              'site-header__link--open': activeDropdown === group.label,
            }"
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
            <span class="site-header__link-indicator" aria-hidden="true" />
          </component>

          <Transition name="dropdown">
            <div
              v-if="group.items && activeDropdown === group.label"
              class="site-header__dropdown"
              @mouseenter="cancelClose"
              @mouseleave="scheduleClose"
            >
              <div class="site-header__dropdown-arrow" />

              <div
                class="site-header__dropdown-panel"
                :class="{
                  'site-header__dropdown-panel--wide': group.items.length > 3,
                }"
              >
                <p class="site-header__dropdown-label">{{ group.label }}</p>

                <div
                  class="site-header__dropdown-grid"
                  :class="{
                    'site-header__dropdown-grid--wide': group.items.length > 3,
                  }"
                >
                  <component
                    :is="item.to ? 'RouterLink' : 'a'"
                    v-for="(item, i) in group.items"
                    :key="item.label"
                    :to="item.to || undefined"
                    :href="item.href || undefined"
                    class="site-header__dropdown-card"
                    :style="{ '--i': i }"
                    @click="closeDropdown"
                  >
                    <span class="site-header__dropdown-icon">
                      <component :is="getIcon(item.label)" />
                    </span>
                    <span class="site-header__dropdown-text">
                      <strong>
                        {{ item.label }}
                        <svg
                          class="site-header__dropdown-go"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 6h7M6.5 3l3 3-3 3"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </strong>
                      <small>{{ item.description }}</small>
                    </span>
                  </component>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </nav>

      <!-- Right actions -->
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
        <span
          class="site-header__burger"
          :class="{ 'site-header__burger--open': menuOpen }"
          aria-hidden="true"
        >
          <i /><i /><i />
        </span>
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
const stroke = (extra = {}) => ({
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  ...extra,
});

const iconDefs = {
  Converdict: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h(
        "path",
        stroke({
          d: "M10 2l2.5 5H18l-4 3.5 1.5 5.5L10 13l-5.5 3 1.5-5.5L2 7h5.5z",
        }),
      ),
    ]),

  PulseGrid: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("rect", stroke({ x: 2, y: 2, width: 7, height: 7, rx: 1.5 })),
      h("rect", stroke({ x: 11, y: 2, width: 7, height: 7, rx: 1.5 })),
      h("rect", stroke({ x: 2, y: 11, width: 7, height: 7, rx: 1.5 })),
      h("rect", stroke({ x: 11, y: 11, width: 7, height: 7, rx: 1.5 })),
    ]),

  "Vix Runtime": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("polygon", stroke({ points: "10,2 18,7 18,13 10,18 2,13 2,7" })),
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
      h("path", stroke({ d: "M10 2v16M2 10h16" })),
      h("circle", stroke({ cx: 10, cy: 10, r: 6 })),
    ]),

  Kordex: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", stroke({ d: "M4 4h12v12H4z" })),
      h(
        "path",
        stroke({ d: "M4 10h12M10 4v12", "stroke-width": "1.2", opacity: 0.5 }),
      ),
    ]),

  "Vix Agent": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("circle", stroke({ cx: 10, cy: 8, r: 4 })),
      h("path", stroke({ d: "M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" })),
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
      h("rect", stroke({ x: 3, y: 5, width: 14, height: 10, rx: 2.5 })),
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
      h("path", stroke({ d: "M4 4l6 12 6-12", "stroke-width": "1.5" })),
    ]),

  Rix: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", stroke({ d: "M3 10a7 7 0 1114 0 7 7 0 01-14 0z" })),
      h("path", stroke({ d: "M10 6v4l2.5 2.5" })),
    ]),

  Communities: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("circle", stroke({ cx: 7, cy: 7, r: 3, "stroke-width": "1.3" })),
      h("circle", stroke({ cx: 13, cy: 7, r: 3, "stroke-width": "1.3" })),
      h("circle", stroke({ cx: 10, cy: 14, r: 3, "stroke-width": "1.3" })),
    ]),

  "Vix Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h(
        "path",
        stroke({
          d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        }),
      ),
      h(
        "path",
        stroke({ d: "M7 9h6M7 12h4", "stroke-width": "1.2", opacity: 0.6 }),
      ),
    ]),

  "Cnerium Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h(
        "path",
        stroke({
          d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        }),
      ),
      h(
        "path",
        stroke({ d: "M7 9h6M7 12h4", "stroke-width": "1.2", opacity: 0.6 }),
      ),
    ]),

  "Softadastra Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h(
        "path",
        stroke({
          d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        }),
      ),
      h(
        "circle",
        stroke({ cx: 10, cy: 11, r: 2.5, "stroke-width": "1.2", opacity: 0.5 }),
      ),
    ]),

  "Kordex Docs": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h(
        "path",
        stroke({
          d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
        }),
      ),
      h(
        "path",
        stroke({ d: "M7 9h6M7 12h4", "stroke-width": "1.2", opacity: 0.6 }),
      ),
    ]),

  "Engineering Blog": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", stroke({ d: "M14.5 3.5l2 2-9 9H5.5v-2z" })),
      h("path", stroke({ d: "M4 17h12", opacity: 0.4 })),
    ]),

  Company: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", stroke({ d: "M3 17V6l7-4 7 4v11H3z" })),
      h(
        "rect",
        stroke({ x: 8, y: 11, width: 4, height: 6, "stroke-width": "1.2" }),
      ),
    ]),

  Ecosystem: () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("circle", stroke({ cx: 10, cy: 10, r: 3 })),
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
      h(
        "path",
        stroke({
          d: "M10 6v-1.5M12.6 11.5l2 1M7.4 11.5l-2 1",
          "stroke-width": "1.2",
          opacity: 0.45,
        }),
      ),
    ]),

  "Open Source Model": () =>
    h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
      h("path", stroke({ d: "M10 2a8 8 0 100 16 8 8 0 000-16z" })),
      h("path", stroke({ d: "M7 10l2 2 4-4", "stroke-width": "1.5" })),
    ]),
};

const fallbackIcon = () =>
  h("svg", { viewBox: "0 0 20 20", width: 18, height: 18 }, [
    h("circle", stroke({ cx: 10, cy: 10, r: 7 })),
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
  border-bottom: 1px solid var(--sd-border);
  background: color-mix(in srgb, var(--sd-bg-raised) 82%, transparent);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  transition:
    background 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease;
}

.site-header--scrolled {
  background: color-mix(in srgb, var(--sd-bg-raised) 92%, transparent);
  border-bottom-color: var(--sd-border-strong);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(0, 0, 0, 0.04);
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
}

.site-header__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transition: transform 300ms var(--sd-ease-out, ease);
}

.site-header__brand:hover .site-header__logo {
  transform: rotate(-8deg) scale(1.05);
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
  position: relative;
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
.site-header__link--open {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

/* animated underline indicator */
.site-header__link-indicator {
  position: absolute;
  bottom: -1px;
  left: 12px;
  right: 12px;
  height: 2px;
  border-radius: 2px;
  background: var(--sd-orange);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 220ms var(--sd-ease-out, ease);
}

.site-header__link--open .site-header__link-indicator {
  transform: scaleX(1);
}

.site-header__chevron {
  width: 10px;
  height: 10px;
  opacity: 0.55;
  transition:
    transform 220ms var(--sd-ease-out, ease),
    opacity 150ms ease;
}

.site-header__link--open .site-header__chevron {
  transform: rotate(180deg);
  opacity: 0.85;
}

/* ── Dropdown ── */
.site-header__dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  z-index: 50;
  transform: translateX(-50%);
}

.site-header__dropdown-arrow {
  position: absolute;
  top: -5px;
  left: 50%;
  z-index: 1;
  width: 10px;
  height: 10px;
  border-top: 1px solid var(--sd-border);
  border-left: 1px solid var(--sd-border);
  border-radius: 2px 0 0 0;
  background: var(--sd-bg-raised);
  transform: translateX(-50%) rotate(45deg);
}

.site-header__dropdown-panel {
  min-width: 300px;
  max-width: min(600px, calc(100vw - 48px));
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: var(--sd-bg-raised);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.1),
    0 4px 14px rgba(0, 0, 0, 0.05);
}

.site-header__dropdown-panel--wide {
  width: 560px;
}

.site-header__dropdown-label {
  margin: 0;
  padding: 11px 16px 9px;
  border-bottom: 1px solid var(--sd-border);
  background: var(--sd-bg-soft);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.site-header__dropdown-grid {
  display: grid;
  gap: 2px;
  padding: 6px;
}

.site-header__dropdown-grid--wide {
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
  opacity: 0;
  transform: translateY(4px);
  animation: card-in 260ms var(--sd-ease-out, ease) forwards;
  animation-delay: calc(40ms + var(--i, 0) * 30ms);
  transition: background 140ms ease;
}

@keyframes card-in {
  to {
    opacity: 1;
    transform: none;
  }
}

.site-header__dropdown-card:hover {
  background: var(--sd-bg-muted);
}

.site-header__dropdown-icon {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--sd-border);
  border-radius: 8px;
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange);
  flex-shrink: 0;
  transition:
    transform 180ms var(--sd-ease-out, ease),
    border-color 150ms ease;
}

.site-header__dropdown-card:hover .site-header__dropdown-icon {
  border-color: var(--sd-border-highlight);
  transform: scale(1.07);
}

.site-header__dropdown-text {
  display: grid;
  gap: 3px;
  min-width: 0;
  padding-top: 2px;
}

.site-header__dropdown-text strong {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
}

.site-header__dropdown-go {
  width: 11px;
  height: 11px;
  color: var(--sd-orange-dark);
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity 160ms ease,
    transform 160ms var(--sd-ease-out, ease);
}

.site-header__dropdown-card:hover .site-header__dropdown-go {
  opacity: 1;
  transform: none;
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
    color 150ms ease,
    transform 200ms var(--sd-ease-out, ease);
}

.site-header__icon-link:hover {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
  transform: translateY(-1px);
}

.site-header__actions :deep(.sd-button) {
  height: 34px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 650;
  transition:
    background 150ms ease,
    box-shadow 200ms ease,
    transform 200ms var(--sd-ease-out, ease);
}

.site-header__actions :deep(.sd-button:hover) {
  transform: translateY(-1px);
}

.site-header__actions :deep(.sd-button-primary) {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.site-header__actions :deep(.sd-button-primary:hover) {
  box-shadow: 0 6px 18px rgba(173, 81, 23, 0.24);
}

.site-header__actions :deep(.sd-button-secondary) {
  border: 1px solid var(--sd-border-strong);
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
}

.site-header__actions :deep(.sd-button-secondary:hover) {
  background: var(--sd-bg-muted);
  color: var(--sd-text);
}

/* ── Mobile button (animated burger) ── */
.site-header__mobile-button {
  display: none;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--sd-border-strong);
  border-radius: 10px;
  background: var(--sd-bg-raised);
  color: var(--sd-text-soft);
  cursor: pointer;
  transition:
    background 150ms ease,
    border-color 150ms ease,
    color 150ms ease;
}

.site-header__mobile-button:hover,
.site-header__mobile-button[aria-expanded="true"] {
  border-color: var(--sd-border-highlight);
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange-dark);
}

.site-header__burger {
  position: relative;
  display: block;
  width: 18px;
  height: 14px;
}

.site-header__burger i {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition:
    transform 280ms var(--sd-ease-out, ease),
    opacity 200ms ease,
    top 280ms var(--sd-ease-out, ease);
}

.site-header__burger i:nth-child(1) {
  top: 0;
}
.site-header__burger i:nth-child(2) {
  top: 6px;
}
.site-header__burger i:nth-child(3) {
  top: 12px;
}

.site-header__burger--open i:nth-child(1) {
  top: 6px;
  transform: rotate(45deg);
}

.site-header__burger--open i:nth-child(2) {
  opacity: 0;
  transform: scaleX(0.4);
}

.site-header__burger--open i:nth-child(3) {
  top: 6px;
  transform: rotate(-45deg);
}

/* ── Dropdown transition ── */
.dropdown-enter-active {
  transition:
    opacity 200ms var(--sd-ease-out, ease),
    transform 220ms var(--sd-ease-out, ease);
}

.dropdown-leave-active {
  transition:
    opacity 130ms ease,
    transform 130ms ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px) scale(0.985);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .site-header__dropdown-card {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .site-header__link-indicator,
  .site-header__chevron,
  .site-header__logo,
  .site-header__burger i {
    transition: none;
  }
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
}
</style>
