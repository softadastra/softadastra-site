<template>
  <Teleport to="body">
    <div
      class="mobile-menu"
      :class="{ 'mobile-menu--open': open }"
      aria-label="Mobile navigation"
    >
      <div
        class="mobile-menu__backdrop"
        aria-hidden="true"
        @click="$emit('close')"
      />

      <div class="mobile-menu__panel">
        <div class="mobile-menu__scroll">
          <div class="mobile-menu__content">
            <section
              v-for="group in groups"
              :key="group.label"
              class="mobile-menu__group"
            >
              <component
                :is="group.to ? 'RouterLink' : 'a'"
                v-if="isDirectGroup(group)"
                :to="group.to || undefined"
                :href="group.href || undefined"
                class="mobile-menu__direct"
                @click="$emit('close')"
              >
                <span>{{ group.label }}</span>

                <svg
                  viewBox="0 0 12 12"
                  width="12"
                  height="12"
                  aria-hidden="true"
                >
                  <path
                    d="M4 2l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </component>

              <template v-else>
                <button
                  class="mobile-menu__trigger"
                  type="button"
                  :aria-expanded="expandedGroup === group.label"
                  @click="toggleGroup(group.label)"
                >
                  <span>{{ group.label }}</span>

                  <svg
                    class="mobile-menu__arrow"
                    :class="{
                      'mobile-menu__arrow--open': expandedGroup === group.label,
                    }"
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

                <div
                  class="mobile-menu__items"
                  :class="{
                    'mobile-menu__items--open': expandedGroup === group.label,
                  }"
                >
                  <div class="mobile-menu__items-inner">
                    <component
                      :is="item.to ? 'RouterLink' : 'a'"
                      v-for="item in group.items"
                      :key="item.label"
                      :to="item.to || undefined"
                      :href="item.href || undefined"
                      class="mobile-menu__item"
                      @click="$emit('close')"
                    >
                      <span class="mobile-menu__item-icon">
                        <component :is="getIcon(item.label)" />
                      </span>

                      <span class="mobile-menu__item-copy">
                        <strong>{{ item.label }}</strong>
                        <small>{{ item.description }}</small>
                      </span>
                    </component>
                  </div>
                </div>
              </template>
            </section>
          </div>

          <div v-if="actions.length" class="mobile-menu__actions">
            <BaseButton
              v-for="action in actions"
              :key="action.label"
              :href="action.href"
              :variant="action.variant"
              class="mobile-menu__action"
              @click="$emit('close')"
            >
              {{ action.label }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { h, ref, watch } from "vue";

import BaseButton from "../ui/BaseButton.vue";

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  groups: {
    type: Array,
    required: true,
  },
  actions: {
    type: Array,
    default() {
      return [];
    },
  },
});

defineEmits(["close"]);

const expandedGroup = ref("");

watch(
  () => props.open,
  (open) => {
    if (!open) {
      expandedGroup.value = "";
      return;
    }

    const firstGroup = props.groups.find((group) => hasItems(group));

    if (!expandedGroup.value && firstGroup) {
      expandedGroup.value = firstGroup.label;
    }
  },
);

function hasItems(group) {
  return Array.isArray(group.items) && group.items.length > 0;
}

function isDirectGroup(group) {
  return Boolean(group.href || group.to) && !hasItems(group);
}

function toggleGroup(label) {
  expandedGroup.value = expandedGroup.value === label ? "" : label;
}

function makeSvg(children) {
  return h(
    "svg",
    {
      viewBox: "0 0 20 20",
      width: 18,
      height: 18,
      fill: "none",
      "aria-hidden": "true",
    },
    children,
  );
}

function docIcon() {
  return makeSvg([
    h("path", {
      d: "M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",
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
  ]);
}

function companyIcon() {
  return makeSvg([
    h("path", {
      d: "M3 17V6l7-4 7 4v11H3z",
      stroke: "currentColor",
      "stroke-width": "1.4",
      "stroke-linejoin": "round",
    }),
    h("rect", {
      x: 8,
      y: 11,
      width: 4,
      height: 6,
      stroke: "currentColor",
      "stroke-width": "1.2",
    }),
  ]);
}

const iconDefs = {
  Converdict: () =>
    makeSvg([
      h("path", {
        d: "M10 2l2.5 5H18l-4 3.5 1.5 5.5L10 13l-5.5 3 1.5-5.5L2 7h5.5z",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linejoin": "round",
      }),
    ]),

  PulseGrid: () =>
    makeSvg([
      h("rect", {
        x: 2,
        y: 2,
        width: 7,
        height: 7,
        rx: 1.5,
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("rect", {
        x: 11,
        y: 2,
        width: 7,
        height: 7,
        rx: 1.5,
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("rect", {
        x: 2,
        y: 11,
        width: 7,
        height: 7,
        rx: 1.5,
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("rect", {
        x: 11,
        y: 11,
        width: 7,
        height: 7,
        rx: 1.5,
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
    ]),

  "Vix Runtime": () =>
    makeSvg([
      h("polygon", {
        points: "10,2 18,7 18,13 10,18 2,13 2,7",
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

  Vix: () =>
    makeSvg([
      h("polygon", {
        points: "10,2 18,7 18,13 10,18 2,13 2,7",
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
    makeSvg([
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
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
    ]),

  Kordex: () =>
    makeSvg([
      h("path", {
        d: "M4 4h12v12H4z",
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
    makeSvg([
      h("circle", {
        cx: 10,
        cy: 8,
        r: 4,
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("path", {
        d: "M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6",
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
    makeSvg([
      h("rect", {
        x: 3,
        y: 5,
        width: 14,
        height: 10,
        rx: 2.5,
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
    makeSvg([
      h("path", {
        d: "M4 4l6 12 6-12",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]),

  Rix: () =>
    makeSvg([
      h("path", {
        d: "M3 10a7 7 0 1114 0 7 7 0 01-14 0z",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("path", {
        d: "M10 6v4l2.5 2.5",
        stroke: "currentColor",
        "stroke-width": "1.4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]),

  Communities: () =>
    makeSvg([
      h("circle", {
        cx: 7,
        cy: 7,
        r: 3,
        stroke: "currentColor",
        "stroke-width": "1.3",
      }),
      h("circle", {
        cx: 13,
        cy: 7,
        r: 3,
        stroke: "currentColor",
        "stroke-width": "1.3",
      }),
      h("circle", {
        cx: 10,
        cy: 14,
        r: 3,
        stroke: "currentColor",
        "stroke-width": "1.3",
      }),
    ]),

  Ecosystem: () =>
    makeSvg([
      h("circle", {
        cx: 10,
        cy: 10,
        r: 3,
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
    makeSvg([
      h("path", {
        d: "M10 2a8 8 0 100 16 8 8 0 000-16z",
        stroke: "currentColor",
        "stroke-width": "1.4",
      }),
      h("path", {
        d: "M7 10l2 2 4-4",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]),

  Company: companyIcon,
  Business: companyIcon,

  Documentation: docIcon,
  "Vix Docs": docIcon,
  "Cnerium Docs": docIcon,
  "Softadastra Docs": docIcon,
  "Kordex Docs": docIcon,
  Blog: docIcon,
  "Engineering Blog": docIcon,
};

const fallbackIcon = () =>
  makeSvg([
    h("circle", {
      cx: 10,
      cy: 10,
      r: 7,
      stroke: "currentColor",
      "stroke-width": "1.4",
    }),
    h("circle", {
      cx: 10,
      cy: 10,
      r: 2,
      fill: "currentColor",
      opacity: 0.4,
    }),
  ]);

function getIcon(label) {
  return iconDefs[label] || fallbackIcon;
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: var(--sd-header-height, 60px);
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2147483000;
  pointer-events: none;
  visibility: hidden;
}
.mobile-menu--open {
  pointer-events: auto;
  visibility: visible;
}

.mobile-menu__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 260ms ease;
}

.mobile-menu--open .mobile-menu__backdrop {
  opacity: 1;
}

.mobile-menu__panel {
  position: absolute;
  inset: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(11, 43, 34, 0.995);
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 260ms ease,
    transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.site-header {
  z-index: 2147483001;
}
.mobile-menu--open .mobile-menu__panel {
  opacity: 1;
  transform: translateY(0);
}

.mobile-menu__scroll {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

.mobile-menu__content {
  display: grid;
  flex: 1;
  width: min(100% - 40px, var(--sd-container));
  margin-inline: auto;
  padding: 12px 0;
}

.mobile-menu__group {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile-menu__group:last-child {
  border-bottom: none;
}

.mobile-menu__trigger,
.mobile-menu__direct {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 14px 4px;
  border: none;
  background: transparent;
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.mobile-menu__trigger:active,
.mobile-menu__direct:active {
  color: var(--sd-green, #2fd49c);
}

.mobile-menu__direct svg {
  color: var(--sd-text-muted);
  opacity: 0.7;
}

.mobile-menu__arrow {
  width: 14px;
  height: 14px;
  color: var(--sd-text-muted);
  opacity: 0.7;
  transition:
    transform 260ms ease,
    color 160ms ease,
    opacity 160ms ease;
}

.mobile-menu__arrow--open {
  color: var(--sd-orange-strong);
  opacity: 1;
  transform: rotate(180deg);
}

.mobile-menu__items {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu__items--open {
  grid-template-rows: 1fr;
}

.mobile-menu__items-inner {
  display: grid;
  gap: 2px;
  overflow: hidden;
  padding: 0;
  transition: padding 240ms ease;
}

.mobile-menu__items--open .mobile-menu__items-inner {
  padding: 0 0 12px;
}

.mobile-menu__item {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
  padding: 10px 8px;
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background 150ms ease;
}

.mobile-menu__item:active {
  background: rgba(47, 212, 156, 0.1);
}

.mobile-menu__item-icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--sd-green, #2fd49c);
}

.mobile-menu__item-icon svg {
  width: 18px;
  height: 18px;
}

.mobile-menu__item-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.mobile-menu__item-copy strong {
  color: var(--sd-text);
  font-size: 13.5px;
  font-weight: 680;
  line-height: 1.2;
}

.mobile-menu__item-copy small {
  display: -webkit-box;
  overflow: hidden;
  color: var(--sd-text-muted);
  font-size: 12px;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.mobile-menu__actions {
  display: grid;
  gap: 8px;
  width: min(100% - 40px, var(--sd-container));
  margin-inline: auto;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.08);
}

.mobile-menu__actions :deep(.sd-button) {
  width: 100%;
  height: 44px;
  justify-content: center;
  border-radius: 10px;
  font-size: 14px;
}

.mobile-menu__actions :deep(.sd-button-primary) {
  border: none;
  background: linear-gradient(
    180deg,
    var(--sd-orange-strong, #d57a2a),
    var(--sd-orange, #c06a22)
  );
  color: #111;
}

.mobile-menu__actions :deep(.sd-button-secondary) {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--sd-text-soft);
}

@media (max-width: 480px) {
  .mobile-menu__content,
  .mobile-menu__actions {
    width: min(100% - 24px, var(--sd-container));
  }

  .mobile-menu__content {
    padding: 8px 0;
  }

  .mobile-menu__actions {
    padding: 12px 0;
  }
}
</style>
