<template>
  <SiteShell>
    <div class="home-page">
      <HeroSection />
      <EcosystemMap />
      <StackGrid />
      <ProductGrid />
      <CompanySection />
      <CtaSection />
    </div>
  </SiteShell>
</template>

<script setup>
import SiteShell from "../components/layout/SiteShell.vue";

import HeroSection from "../components/home/HeroSection.vue";
import EcosystemMap from "../components/home/EcosystemMap.vue";
import StackGrid from "../components/home/StackGrid.vue";
import ProductGrid from "../components/home/ProductGrid.vue";
import CompanySection from "../components/home/CompanySection.vue";
import CtaSection from "../components/home/CtaSection.vue";
</script>
