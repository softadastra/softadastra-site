<template>
  <component
    :is="tagName"
    :href="isExternalLink ? href : undefined"
    :to="isRouterLink ? to : undefined"
    :type="isButton ? type : undefined"
    :target="isExternalLink && external ? '_blank' : undefined"
    :rel="isExternalLink && external ? 'noopener noreferrer' : undefined"
    :class="buttonClass"
  >
    <slot />

    <svg
      v-if="arrow"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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
  arrow: {
    type: Boolean,
    default: false,
  },
  external: {
    type: Boolean,
    default: false,
  },
});

const isExternalLink = computed(() => props.href.length > 0);
const isRouterLink = computed(() => props.to.length > 0);
const isButton = computed(() => !isExternalLink.value && !isRouterLink.value);

const tagName = computed(() => {
  if (isRouterLink.value) {
    return "RouterLink";
  }

  if (isExternalLink.value) {
    return "a";
  }

  return "button";
});

const buttonClass = computed(() => [
  "sd-button",
  props.variant === "primary" ? "sd-button-primary" : "sd-button-secondary",
]);
</script>
