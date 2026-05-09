<template>
  <div class="sd-section-heading">
    <p
      v-if="eyebrow"
      class="sd-section-heading__eyebrow"
    >
      {{ eyebrow }}
    </p>

    <h2 class="sd-section-heading__title">
      {{ title }}
    </h2>

    <p
      v-if="text"
      class="sd-section-heading__text"
    >
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "",
  },
});
</script>
