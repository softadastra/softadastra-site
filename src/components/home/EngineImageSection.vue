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
  border-top: 1px solid rgba(255, 244, 224, 0.09);
  background: transparent;
}

.engine-image-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 82% 42%,
      rgba(213, 122, 42, 0.16) 0%,
      transparent 38%
    ),
    radial-gradient(
      circle at 18% 18%,
      rgba(246, 222, 184, 0.09) 0%,
      transparent 34%
    ),
    linear-gradient(
      160deg,
      transparent 0%,
      transparent 34%,
      rgba(213, 122, 42, 0.12) 35%,
      rgba(226, 154, 85, 0.08) 42%,
      transparent 51%
    );
}

.engine-image-section::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.014) 0px,
    rgba(255, 255, 255, 0.014) 1px,
    transparent 1px,
    transparent 4px
  );

  opacity: 0.24;
  mix-blend-mode: soft-light;
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
  border: 1px solid rgba(226, 154, 85, 0.28);
  border-radius: 999px;
  background: rgba(213, 122, 42, 0.12);
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
  color: rgba(255, 248, 235, 0.96);
  font-size: clamp(32px, 4.5vw, 58px);
  font-weight: 850;
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.engine-image-section p {
  max-width: 560px;
  margin: 22px 0 0;
  color: rgba(246, 232, 204, 0.68);
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
  border: 1px solid rgba(255, 215, 168, 0.18);
  background: linear-gradient(
    180deg,
    var(--sd-orange-strong),
    var(--sd-orange)
  );
  color: #102b23;

  box-shadow:
    0 10px 28px rgba(213, 122, 42, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.26);
}

.engine-image-section__actions :deep(.sd-button-primary:hover) {
  box-shadow:
    0 14px 34px rgba(213, 122, 42, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.32);
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
  border: 1px solid rgba(255, 244, 224, 0.11);
  border-radius: 999px;
  background: rgba(255, 244, 224, 0.045);
  color: rgba(246, 232, 204, 0.62);
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
  border: 1px solid rgba(255, 244, 224, 0.13);
  border-radius: 28px;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(246, 222, 184, 0.12),
      transparent 34%
    ),
    linear-gradient(180deg, rgba(22, 75, 60, 0.74), rgba(11, 43, 34, 0.72));

  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.34),
    0 0 0 1px rgba(255, 244, 224, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.engine-image-section__frame::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  background:
    linear-gradient(
      145deg,
      transparent 0%,
      transparent 46%,
      rgba(213, 122, 42, 0.12) 47%,
      rgba(226, 154, 85, 0.08) 58%,
      transparent 66%
    ),
    radial-gradient(
      circle at 82% 12%,
      rgba(213, 122, 42, 0.16),
      transparent 34%
    );
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
