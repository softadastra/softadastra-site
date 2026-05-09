<template>
  <div
    v-if="open"
    class="mobile-menu"
  >
    <nav class="mobile-menu__nav">
      <component
        :is="item.to ? 'RouterLink' : 'a'"
        v-for="item in navigation"
        :key="item.label"
        :to="item.to || undefined"
        :href="item.href || undefined"
        class="mobile-menu__link"
        @click="$emit('close')"
      >
        {{ item.label }}
      </component>
    </nav>

    <div class="mobile-menu__actions">
      <BaseButton
        v-for="action in actions"
        :key="action.label"
        :href="action.href"
        :to="action.to"
        :variant="action.variant"
        @click="$emit('close')"
      >
        {{ action.label }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";

defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  navigation: {
    type: Array,
    required: true,
  },
  actions: {
    type: Array,
    required: true,
  },
});

defineEmits(["close"]);
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: var(--sd-header-height) 14px auto;
  z-index: 80;
  display: none;
  padding: 18px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-lg);
  background: rgba(7, 11, 20, 0.96);
  box-shadow: var(--sd-shadow-card);
  backdrop-filter: blur(18px);
}

.mobile-menu__nav {
  display: grid;
  gap: 6px;
}

.mobile-menu__link {
  padding: 13px 14px;
  border-radius: var(--sd-radius-md);
  color: var(--sd-text-soft);
  font-weight: 700;
  transition:
    background var(--sd-transition),
    color var(--sd-transition);
}

.mobile-menu__link:hover,
.mobile-menu__link.router-link-active {
  background: var(--sd-surface);
  color: var(--sd-text);
}

.mobile-menu__actions {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

@media (max-width: 860px) {
  .mobile-menu {
    display: block;
  }
}
</style>
