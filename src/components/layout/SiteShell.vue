<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="site-shell__main">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteFooter from "./SiteFooter.vue";
import SiteHeader from "./SiteHeader.vue";
</script>

<style scoped>
.site-shell {
  min-height: 100vh;
  background: var(--sd-bg);
  color: var(--sd-text);
}

.site-shell__main {
  min-height: calc(100vh - var(--sd-header-height));
}
</style>
