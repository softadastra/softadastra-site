<template>
  <div
    v-if="open"
    class="mobile-menu"
  >
    <a
      v-for="item in items"
      :key="item.label"
      :href="item.href"
      class="mobile-menu__link"
      @click="$emit('close')"
    >
      {{ item.label }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

defineEmits(["close"]);
</script>

<style scoped>
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 8px 24px 20px;
  border-top: 1px solid var(--sd-border);
  background: rgba(12, 16, 21, 0.96);
}

.mobile-menu__link {
  padding: 14px 0;
  border-bottom: 1px solid var(--sd-border);
  color: var(--sd-text-soft);
  font-size: 15px;
  font-weight: 500;
  transition: color var(--sd-transition-fast);
}

.mobile-menu__link:last-child {
  border-bottom: none;
}

.mobile-menu__link:hover {
  color: var(--sd-text);
}

@media (max-width: 860px) {
  .mobile-menu {
    display: flex;
  }
}
</style>
