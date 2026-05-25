<template>
  <SiteShell>
    <div class="home-page">
      <HeroSection />
      <EcosystemMap />
      <SdkCodeSection />
      <ProductGrid />
      <CtaSection />
    </div>
  </SiteShell>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

import SiteShell from "../components/layout/SiteShell.vue";

import HeroSection from "../components/home/HeroSection.vue";
import EcosystemMap from "../components/home/EcosystemMap.vue";
import SdkCodeSection from "../components/home/SdkCodeSection.vue";
import ProductGrid from "../components/home/ProductGrid.vue";
import CtaSection from "../components/home/CtaSection.vue";

let revealObserver = null;

function initScrollReveal() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".sd-reveal").forEach((element) => {
      element.classList.add("visible");
    });

    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll(".sd-reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}

onMounted(() => {
  initScrollReveal();
});

onUnmounted(() => {
  if (revealObserver) {
    revealObserver.disconnect();
  }
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: var(--sd-bg);
}
</style>
