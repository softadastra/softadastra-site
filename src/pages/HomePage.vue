<template>
  <SiteShell>
    <div class="home-page">
      <HeroSection />
      <ProblemSection />
      <PlatformSection />
      <WorkflowSection />
      <EngineSection />
      <SdkSection />
      <CompanySection />
      <ProofSection />
      <AdditionalProjectsSection />
      <CtaSection />
    </div>
  </SiteShell>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

import SiteShell from "../components/layout/SiteShell.vue";

import AdditionalProjectsSection from "../components/home/AdditionalProjectsSection.vue";
import CompanySection from "../components/home/CompanySection.vue";
import CtaSection from "../components/home/CtaSection.vue";
import EngineSection from "../components/home/EngineSection.vue";
import HeroSection from "../components/home/HeroSection.vue";
import PlatformSection from "../components/home/PlatformSection.vue";
import ProblemSection from "../components/home/ProblemSection.vue";
import ProofSection from "../components/home/ProofSection.vue";
import SdkSection from "../components/home/SdkSection.vue";
import WorkflowSection from "../components/home/WorkflowSection.vue";

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
  background: transparent;
}
</style>
