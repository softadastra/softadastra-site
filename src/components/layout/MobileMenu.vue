<template>
  <Transition name="mobile-menu">
    <div
      v-if="open"
      class="mobile-menu"
    >
      <div class="mobile-menu__inner">
        <div
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
              <span>{{ item.label }}</span>
              <small>{{ item.description }}</small>
            </component>
          </div>
        </div>

        <div class="mobile-menu__actions">
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
  background: #0c1015;
  overscroll-behavior: contain;
}

.mobile-menu__inner {
  width: min(100% - 40px, var(--sd-container));
  margin-inline: auto;
  padding: 22px 0 34px;
}

.mobile-menu__group {
  padding: 18px 0;
  border-bottom: 1px solid var(--sd-border);
}

.mobile-menu__group:first-child {
  padding-top: 0;
}

.mobile-menu__group h3 {
  margin: 0 0 12px;
  color: var(--sd-text);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mobile-menu__links {
  display: grid;
  gap: 6px;
}

.mobile-menu__link {
  display: grid;
  gap: 4px;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--sd-text-soft);
  transition:
    background var(--sd-transition-fast),
    border-color var(--sd-transition-fast),
    color var(--sd-transition-fast);
}

.mobile-menu__link:hover {
  border-color: var(--sd-border);
  background: rgba(255, 255, 255, 0.035);
  color: var(--sd-text);
}

.mobile-menu__link span {
  color: var(--sd-text);
  font-size: 15px;
  font-weight: 750;
}

.mobile-menu__link small {
  color: var(--sd-text-muted);
  font-size: 13px;
  line-height: 1.45;
}

.mobile-menu__actions {
  display: grid;
  gap: 12px;
  padding-top: 22px;
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
    width: min(100% - 28px, var(--sd-container));
  }
}
</style>
