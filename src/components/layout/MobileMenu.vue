<template>
  <Transition name="mobile-menu">
    <div
      v-if="open"
      class="mobile-menu"
    >
      <div class="mobile-menu__inner">

<template>
  <Transition name="mobile-menu">
    <div
      v-if="open"
      class="mobile-menu"
    >
      <div class="mobile-menu__inner">
        <div class="mobile-menu__content">
          <section
            v-for="group in groups"
            :key="group.label"
            class="mobile-menu__group"
          >
            <h3>
              {{ group.label }}
            </h3>

            <div class="mobile-menu__links">
              <component
                :is="item.to ? 'RouterLink' : 'a'"
                v-for="item in group.items"
                :key="item.label"
                :to="item.to || undefined"
                :href="item.href || undefined"
                class="mobile-menu__link"
                @click="$emit('close')"
              >
                <span class="mobile-menu__link-logo">
                  <img
                    :src="getItemLogo(item)"
                    :alt="`${item.label} logo`"
                    @error="handleLogoError"
                  />
                </span>

                <span class="mobile-menu__link-copy">
                  <span>{{ item.label }}</span>
                  <small>{{ item.description }}</small>
                </span>

                <svg
                  class="mobile-menu__link-arrow"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10L10 2M10 2H5M10 2v5"
                    stroke="currentColor"
                    stroke-width="1.35"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </component>
            </div>
          </section>
        </div>

        <div
          v-if="actions.length"
          class="mobile-menu__actions"
        >
          <BaseButton
            v-for="action in actions"
            :key="action.label"
            :href="action.href"
            :variant="action.variant"
            @click="$emit('close')"
          >
            {{ action.label }}
          </BaseButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

        <div class="mobile-menu__content">
          <section
            v-for="group in groups"
            :key="group.label"
            class="mobile-menu__group"
          >
            <h3>
              {{ group.label }}
            </h3>

            <div class="mobile-menu__links">
              <component
                :is="item.to ? 'RouterLink' : 'a'"
                v-for="item in group.items"
                :key="item.label"
                :to="item.to || undefined"
                :href="item.href || undefined"
                class="mobile-menu__link"
                @click="$emit('close')"
              >
                <span class="mobile-menu__link-logo">
                  <img
                    :src="getItemLogo(item)"
                    :alt="`${item.label} logo`"
                    @error="handleLogoError"
                  />
                </span>

                <span class="mobile-menu__link-copy">
                  <span>{{ item.label }}</span>
                  <small>{{ item.description }}</small>
                </span>

                <svg
                  class="mobile-menu__link-arrow"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10L10 2M10 2H5M10 2v5"
                    stroke="currentColor"
                    stroke-width="1.35"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </component>
            </div>
          </section>
        </div>

        <div
          v-if="actions.length"
          class="mobile-menu__actions"
        >
          <BaseButton
            v-for="action in actions"
            :key="action.label"
            :href="action.href"
            :variant="action.variant"
            @click="$emit('close')"
          >
            {{ action.label }}
          </BaseButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";

defineProps({
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

const logoMap = {
  Ecosystem: "/logos/softadastra.svg",
  Company: "/logos/softadastra.svg",
  Business: "/logos/softadastra.svg",
  Documentation: "/logos/softadastra.svg",
  GitHub: "/logos/softadastra.svg",
  Blog: "/logos/softadastra.svg",
  Builds: "/logos/softadastra.svg",
  Releases: "/logos/softadastra.svg",
  "Open source model": "/logos/softadastra.svg",
  "Reliability guides": "/logos/softadastra.svg",

  Vix: "/logos/vix.svg",
  "Vix Docs": "/logos/vix.svg",
  "Vix Registry": "/logos/vix-registry.svg",
  Registry: "/logos/vix-registry.svg",

  Softadastra: "/logos/softadastra.svg",
  "Softadastra Cloud": "/logos/softadastra.svg",
  "Softadastra Docs": "/logos/softadastra.svg",
  "Softadastra Builds": "/logos/softadastra.svg",

  Kordex: "/logos/kordex.svg",
  Cnerium: "/logos/cnerium.svg",
  PulseGrid: "/logos/pulsegrid.svg",
  Converdict: "/logos/converdict.svg",
};

function getItemLogo(item) {
  return logoMap[item.label] || "/logos/softadastra.svg";
}

function handleLogoError(event) {
  event.target.src = "/logos/softadastra.svg";
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: var(--sd-header-height);
  right: 0;
  left: 0;
  z-index: 9999;
  height: calc(100dvh - var(--sd-header-height));
  overflow-y: auto;
  border-top: 1px solid var(--sd-border);
  background: #0b2b22;
  overscroll-behavior: contain;
}

.mobile-menu__inner {
  width: min(100% - 32px, var(--sd-container));
  margin-inline: auto;
  padding: 18px 0 28px;
}
.mobile-menu__inner {
  width: min(100% - 32px, var(--sd-container));
  margin-inline: auto;
  padding: 24px 0 28px;
}
.mobile-menu__content {
  display: grid;
  gap: 18px;
}

.mobile-menu__group {
  padding: 16px;
  border: 1px solid var(--sd-border);
  border-radius: 18px;
  background: #0f372d;
}

.mobile-menu__group h3 {
  margin: 0 0 12px;
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mobile-menu__links {
  display: grid;
  gap: 6px;
}

.mobile-menu__link {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 14px;
  gap: 11px;
  align-items: center;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 14px;
  color: inherit;
  text-decoration: none;
  transition:
    background var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.mobile-menu__link:hover {
  border-color: rgba(213, 122, 42, 0.26);
  background: rgba(213, 122, 42, 0.1);
  transform: translateX(2px);
}

.mobile-menu__link-logo {
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 999px;
  background: #113f33;
}

.mobile-menu__link-logo img {
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.mobile-menu__link-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.mobile-menu__link-copy span {
  color: var(--sd-text);
  font-size: 14.5px;
  font-weight: 760;
  line-height: 1.15;
}

.mobile-menu__link-copy small {
  color: var(--sd-text-muted);
  font-size: 12.5px;
  line-height: 1.35;
}

.mobile-menu__link-arrow {
  width: 13px;
  height: 13px;
  color: var(--sd-text-dim);
  transition: color var(--sd-transition-fast);
}

.mobile-menu__link:hover .mobile-menu__link-arrow {
  color: var(--sd-orange-strong);
}

.mobile-menu__actions {
  position: sticky;
  bottom: 0;
  display: grid;
  gap: 10px;
  padding: 16px 0 0;
  margin-top: 18px;
  background: #0b2b22;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 520px) {
  .mobile-menu__inner {
    width: min(100% - 24px, var(--sd-container));
  }

  .mobile-menu__group {
    padding: 14px;
  }

  .mobile-menu__link {
    grid-template-columns: 34px minmax(0, 1fr) 12px;
    gap: 10px;
    padding: 9px;
  }

  .mobile-menu__link-logo {
    width: 34px;
    height: 34px;
  }

  .mobile-menu__link-logo img {
    width: 28px;
    height: 28px;
  }
}
</style>
