<template>
  <section class="engine-image-section sd-section">
    <div class="engine-image-section__inner sd-section__inner">
      <div class="engine-image-section__copy sd-reveal">
        <span class="engine-image-section__eyebrow"> Softadastra Engine </span>

        <h2>Offline-first runtime foundations for modern C++ apps.</h2>

        <p>
          Softadastra Engine extends the Vix.cpp foundation with a local-first
          runtime layer for storage, sync, nodes, and resilient application
          behavior.
        </p>

        <div class="engine-image-section__actions">
          <BaseButton :href="links.softadastraDocs" arrow>
            Read documentation
          </BaseButton>
        </div>

        <div class="engine-image-section__meta">
          <span>Offline-first</span>
          <span>Local runtime</span>
          <span>Built on Vix.cpp</span>
        </div>
      </div>

      <div class="engine-image-section__visual sd-reveal sd-reveal-d2">
        <div class="engine-image-section__frame">
          <img
            src="https://res.cloudinary.com/dwjbed2xb/image/upload/v1782029840/Softadastra-engine_vqww2g.png"
            alt="Softadastra Engine visual"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from "../../data/links";

import BaseButton from "../ui/BaseButton.vue";
</script>

<style scoped>
.engine-image-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-top: 1px solid var(--sd-border);
  background: var(--sd-bg);
}

.engine-image-section::before,
.engine-image-section::after {
  content: none;
}

.engine-image-section__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(420px, 1.18fr);
  gap: clamp(40px, 6vw, 90px);
  align-items: center;
}

.engine-image-section__copy {
  max-width: 560px;
}

.engine-image-section__eyebrow {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  min-height: 28px;
  padding: 0 11px;
  border: 1px solid var(--sd-border-strong);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-raised);
  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.engine-image-section h2 {
  max-width: 620px;
  margin: 20px 0 0;
  color: var(--sd-text);
  font-size: clamp(32px, 4.5vw, 58px);
  font-weight: 850;
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.engine-image-section p {
  max-width: 560px;
  margin: 22px 0 0;
  color: var(--sd-text-soft);
  font-size: 16.5px;
  line-height: 1.7;
}

.engine-image-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.engine-image-section__actions :deep(.sd-button-primary) {
  border-color: var(--sd-orange);
  background: var(--sd-orange);
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(173, 81, 23, 0.16);
}

.engine-image-section__actions :deep(.sd-button-primary:hover) {
  background: var(--sd-orange-dark);
  box-shadow: 0 4px 14px rgba(173, 81, 23, 0.18);
}

.engine-image-section__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.engine-image-section__meta span {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 12px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: var(--sd-bg-soft);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 760;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.engine-image-section__visual {
  min-width: 0;
}

.engine-image-section__frame {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 28px;

  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);

  
}

.engine-image-section__frame::before {
  content: none;
}

.engine-image-section__frame img {
  position: relative;
  z-index: 0;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 1080px) {
  .engine-image-section__inner {
    grid-template-columns: 1fr;
  }

  .engine-image-section__copy {
    max-width: 760px;
  }
}

@media (max-width: 720px) {
  .engine-image-section__inner {
    gap: 34px;
  }

  .engine-image-section__frame {
    border-radius: 22px;
  }
}

@media (max-width: 420px) {
  .engine-image-section h2 {
    font-size: clamp(2.4rem, 13vw, 3.5rem);
    letter-spacing: -0.055em;
  }

  .engine-image-section__actions :deep(.sd-button) {
    width: 100%;
  }

  .engine-image-section__meta {
    display: none;
  }
}
</style>
