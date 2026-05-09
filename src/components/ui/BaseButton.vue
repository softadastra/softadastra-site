<template>
  <component
    :is="tagName"
    :href="isLink ? href : undefined"
    :to="isRouterLink ? to : undefined"
    :type="isButton ? type : undefined"
    :class="buttonClass"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
});

const isLink = computed(() => props.href.length > 0);
const isRouterLink = computed(() => props.to.length > 0);
const isButton = computed(() => !isLink.value && !isRouterLink.value);

const tagName = computed(() => {
  if (isRouterLink.value) {
    return "RouterLink";
  }

  if (isLink.value) {
    return "a";
  }

  return "button";
});

const buttonClass = computed(() => [
  "sd-button",
  props.variant === "primary" ? "sd-button-primary" : "sd-button-secondary",
]);
</script>
