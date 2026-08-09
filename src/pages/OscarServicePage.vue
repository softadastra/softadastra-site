<template>
  <SiteShell>
    <section class="oscar-service">
      <div class="oscar-service__inner sd-container">
        <BaseBadge>Oscar Service</BaseBadge>
        <h1>Oscar Service</h1>
        <p class="oscar-service__description">Un logiciel simple pour gérer les transactions, les calculs et les rapports de votre activité.</p>

        <BaseCard class="oscar-service__download-card">
          <p class="oscar-service__label">Version actuelle</p>
          <p class="oscar-service__version">{{ release ? `v${release.version}` : "Préparation du téléchargement…" }}</p>
          <p v-if="release" class="oscar-service__platform">Pour ordinateur {{ platformLabel }}<template v-if="formattedSize"> · {{ formattedSize }}</template></p>
          <BaseButton v-if="release?.platform === 'windows'" :href="release.downloadUrl" :download="downloadFileName">Télécharger Oscar Service</BaseButton>
          <p v-else class="oscar-service__unavailable" role="status">La version Windows est en cours de préparation.</p>
        </BaseCard>

        <p class="oscar-service__hint">Les mises à jour suivantes pourront être installées directement depuis Oscar Service.</p>
        <p class="oscar-service__mobile-hint">Oscar Service s’installe sur ordinateur.</p>
      </div>
    </section>
  </SiteShell>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import SiteShell from "../components/layout/SiteShell.vue";
import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseCard from "../components/ui/BaseCard.vue";

const release = ref(null);
const loadError = ref(false);
const formattedSize = computed(() => release.value?.downloadSizeBytes ? `${(release.value.downloadSizeBytes / 1024 / 1024).toFixed(1)} MB` : "");
const downloadFileName = computed(() => release.value?.downloadUrl?.split("/").pop() || "Oscar-Service.AppImage");
const platformLabel = computed(() => release.value?.platform === "windows" ? "Windows" : "Linux");

onMounted(async () => {
  try {
    const response = await fetch("/updates/oscar-service/release.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Release manifest unavailable");
    const candidate = await response.json();
    if (typeof candidate?.version !== "string" || typeof candidate?.downloadUrl !== "string" || !["windows", "linux"].includes(candidate.platform)) throw new Error("Release manifest invalid");
    release.value = candidate;
  } catch {
    loadError.value = true;
  }
});
</script>

<style scoped>
.oscar-service { min-height: calc(100vh - var(--sd-header-height)); display: grid; place-items: center; padding: 80px 0; }
.oscar-service__inner { max-width: 720px; text-align: center; }
.oscar-service__inner :deep(.sd-badge) { margin-inline: auto; }
.oscar-service h1 { margin: 22px 0 0; font-size: clamp(2.8rem, 10vw, 4.8rem); line-height: .98; letter-spacing: -.07em; }
.oscar-service__description { max-width: 600px; margin: 22px auto 0; color: var(--sd-text-soft); font-size: clamp(1.05rem, 3.5vw, 1.2rem); line-height: 1.65; }
.oscar-service__download-card { display: grid; justify-items: center; gap: 12px; margin-top: 38px; padding: 32px; border-color: var(--sd-border-highlight); box-shadow: var(--sd-shadow-accent); }
.oscar-service__label, .oscar-service__platform, .oscar-service__hint, .oscar-service__mobile-hint, .oscar-service__unavailable { margin: 0; color: var(--sd-text-soft); }
.oscar-service__label { font-size: .8rem; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; }
.oscar-service__version { margin: 0; color: var(--sd-deep-green); font-size: 1.55rem; font-weight: 800; }
.oscar-service__platform { font-size: .9rem; }
.oscar-service__download-card :deep(.sd-button) { margin-top: 12px; }
.oscar-service__hint { margin: 26px auto 0; font-size: .9rem; }
.oscar-service__mobile-hint { display: none; margin-top: 14px; font-size: .82rem; }
.oscar-service__unavailable { font-size: .92rem; }
@media (max-width: 620px) { .oscar-service { align-items: start; padding: 62px 0; } .oscar-service__download-card { margin-top: 30px; padding: 26px 20px; } .oscar-service__download-card :deep(.sd-button) { width: 100%; justify-content: center; } .oscar-service__mobile-hint { display: block; } }
</style>
