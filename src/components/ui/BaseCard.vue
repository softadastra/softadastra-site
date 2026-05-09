<template>
  <article :class="cardClass">
    <slot />
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  hover: {
    type: Boolean,
    default: false,
  },
  raised: {
    type: Boolean,
    default: false,
  },
});

const cardClass = computed(() => [
  "sd-card",
  props.hover ? "sd-card-hover" : "",
  props.raised ? "sd-card-raised" : "",
]);
</script>
