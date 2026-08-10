<script setup>
import { computed } from "vue";

const release = {
  version: "0.1.0",
  platform: "windows",
  downloadUrl:
    "https://updates.softadastra.com/oscar-service/Oscar-Service-Setup-0.1.0.exe",
  size: 111965163,
};

const downloadFileName = `Oscar-Service-Setup-${release.version}.exe`;

const formattedSize = computed(() => {
  if (!release.size) {
    return "";
  }

  const megabytes = release.size / 1024 / 1024;

  return `${Math.round(megabytes)} Mo`;
});
</script>

<template>
  <main class="oscar-service">
    <!-- Hero -->
    <section class="oscar-service__hero">
      <div class="oscar-service__container">
        <p class="oscar-service__eyebrow">Softadastra</p>

        <h1 class="oscar-service__title">Oscar Service</h1>

        <p class="oscar-service__subtitle">
          Gérez simplement vos transactions et vos rapports depuis votre
          ordinateur.
        </p>

        <a
          class="oscar-service__primary-button"
          :href="release.downloadUrl"
          :download="downloadFileName"
        >
          Télécharger pour Windows
        </a>

        <p class="oscar-service__hero-meta">
          Windows 10 / 11 · {{ formattedSize }}
        </p>
      </div>
    </section>

    <!-- Ce que permet Oscar Service -->
    <section class="oscar-service__section">
      <div class="oscar-service__container">
        <div class="oscar-service__section-heading">
          <p class="oscar-service__section-label">Simple au quotidien</p>

          <h2 class="oscar-service__section-title">
            Tout ce qu’il faut pour gérer votre travail
          </h2>

          <p class="oscar-service__section-description">
            Oscar Service rassemble vos opérations dans une seule application
            facile à utiliser.
          </p>
        </div>

        <div class="oscar-service__features">
          <article class="oscar-service__feature">
            <div class="oscar-service__feature-icon" aria-hidden="true">01</div>

            <div>
              <h3>Enregistrez vos transactions</h3>
              <p>
                Ajoutez rapidement les informations d’une nouvelle opération.
              </p>
            </div>
          </article>

          <article class="oscar-service__feature">
            <div class="oscar-service__feature-icon" aria-hidden="true">02</div>

            <div>
              <h3>Retrouvez vos opérations</h3>
              <p>Consultez facilement les transactions déjà enregistrées.</p>
            </div>
          </article>

          <article class="oscar-service__feature">
            <div class="oscar-service__feature-icon" aria-hidden="true">03</div>

            <div>
              <h3>Corrigez quand nécessaire</h3>
              <p>
                Modifiez une transaction lorsque vous devez corriger une
                information.
              </p>
            </div>
          </article>

          <article class="oscar-service__feature">
            <div class="oscar-service__feature-icon" aria-hidden="true">04</div>

            <div>
              <h3>Créez vos rapports</h3>
              <p>Préparez vos rapports et enregistrez-les facilement en PDF.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Téléchargement -->
    <section class="oscar-service__section oscar-service__section--download">
      <div class="oscar-service__container">
        <div class="oscar-service__download-card">
          <div class="oscar-service__download-content">
            <p class="oscar-service__section-label">
              Oscar Service pour Windows
            </p>

            <h2 class="oscar-service__download-title">
              Installez Oscar Service sur votre ordinateur
            </h2>

            <p class="oscar-service__download-description">
              Téléchargez l’application et commencez simplement à gérer vos
              transactions.
            </p>

            <a
              class="oscar-service__primary-button"
              :href="release.downloadUrl"
              :download="downloadFileName"
            >
              Télécharger pour Windows
            </a>

            <p class="oscar-service__release-info">
              Windows 10 / 11
              <template v-if="formattedSize"> · {{ formattedSize }} </template>
              · Version {{ release.version }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation -->
    <section class="oscar-service__section">
      <div class="oscar-service__container oscar-service__install-container">
        <div class="oscar-service__section-heading">
          <p class="oscar-service__section-label">Installation</p>

          <h2 class="oscar-service__section-title">Comment l’installer ?</h2>

          <p class="oscar-service__section-description">
            Trois étapes suffisent.
          </p>
        </div>

        <ol class="oscar-service__steps">
          <li class="oscar-service__step">
            <span class="oscar-service__step-number"> 1 </span>

            <div>
              <h3>Téléchargez Oscar Service</h3>
              <p>Cliquez sur le bouton de téléchargement.</p>
            </div>
          </li>

          <li class="oscar-service__step">
            <span class="oscar-service__step-number"> 2 </span>

            <div>
              <h3>Ouvrez le fichier téléchargé</h3>
              <p>
                Une fois le téléchargement terminé, ouvrez le fichier
                d’installation.
              </p>
            </div>
          </li>

          <li class="oscar-service__step">
            <span class="oscar-service__step-number"> 3 </span>

            <div>
              <h3>Suivez l’installation</h3>
              <p>
                Oscar Service sera ensuite disponible directement sur votre
                ordinateur.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Windows warning -->
    <section class="oscar-service__section oscar-service__section--compact">
      <div class="oscar-service__container">
        <details class="oscar-service__warning">
          <summary>Windows affiche un avertissement ?</summary>

          <div class="oscar-service__warning-content">
            <p>
              Sur certains ordinateurs, Windows peut demander une confirmation
              avant l’installation.
            </p>

            <p>
              Cliquez sur
              <strong>Informations complémentaires</strong>, puis sur
              <strong>Exécuter quand même</strong>.
            </p>
          </div>
        </details>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="oscar-service__final">
      <div class="oscar-service__container oscar-service__final-inner">
        <div>
          <p class="oscar-service__section-label">Oscar Service</p>

          <h2>Prêt à commencer ?</h2>

          <p>Installez Oscar Service sur votre ordinateur Windows.</p>
        </div>

        <a
          class="oscar-service__primary-button"
          :href="release.downloadUrl"
          :download="downloadFileName"
        >
          Télécharger pour Windows
        </a>
      </div>
    </section>

    <section class="oscar-service__footer-note">
      <div class="oscar-service__container">
        <p>
          Les prochaines mises à jour pourront être installées directement
          depuis Oscar Service.
        </p>

        <p>Développé par Softadastra.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.oscar-service {
  --oscar-bg: #08090b;
  --oscar-surface: #101216;
  --oscar-surface-soft: #15181d;
  --oscar-border: rgba(255, 255, 255, 0.09);
  --oscar-text: #f4f5f7;
  --oscar-muted: #999fa8;
  --oscar-orange: #ff7a1a;
  --oscar-orange-hover: #ff8b38;

  min-height: 100vh;
  background:
    radial-gradient(
      circle at 50% -15%,
      rgba(255, 122, 26, 0.1),
      transparent 34rem
    ),
    var(--oscar-bg);
  color: var(--oscar-text);
}

.oscar-service__container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.oscar-service__hero {
  padding: 150px 0 110px;
  text-align: center;
}

.oscar-service__hero .oscar-service__container {
  max-width: 780px;
}

.oscar-service__eyebrow,
.oscar-service__section-label {
  margin: 0 0 14px;
  color: var(--oscar-orange);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.oscar-service__title {
  margin: 0;
  font-size: clamp(3.4rem, 9vw, 6.8rem);
  font-weight: 750;
  letter-spacing: -0.065em;
  line-height: 0.95;
}

.oscar-service__subtitle {
  max-width: 660px;
  margin: 30px auto 36px;
  color: var(--oscar-muted);
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  line-height: 1.65;
}

.oscar-service__primary-button {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  border-radius: 10px;
  background: var(--oscar-orange);
  color: #111;
  font-size: 1rem;
  font-weight: 750;
  text-decoration: none;
  transition:
    transform 160ms ease,
    background 160ms ease;
}

.oscar-service__primary-button:hover {
  background: var(--oscar-orange-hover);
  transform: translateY(-1px);
}

.oscar-service__primary-button:focus-visible {
  outline: 3px solid rgba(255, 122, 26, 0.35);
  outline-offset: 4px;
}

.oscar-service__hero-meta,
.oscar-service__release-info {
  margin: 17px 0 0;
  color: var(--oscar-muted);
  font-size: 0.88rem;
}

.oscar-service__section {
  padding: 90px 0;
}

.oscar-service__section--compact {
  padding-top: 20px;
  padding-bottom: 100px;
}

.oscar-service__section-heading {
  max-width: 650px;
  margin-bottom: 48px;
}

.oscar-service__section-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.oscar-service__section-description {
  margin: 20px 0 0;
  color: var(--oscar-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.oscar-service__features {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--oscar-border);
  border-left: 1px solid var(--oscar-border);
}

.oscar-service__feature {
  display: flex;
  gap: 22px;
  padding: 34px;
  border-right: 1px solid var(--oscar-border);
  border-bottom: 1px solid var(--oscar-border);
}

.oscar-service__feature-icon {
  flex: 0 0 auto;
  color: var(--oscar-orange);
  font-size: 0.82rem;
  font-weight: 700;
}

.oscar-service__feature h3,
.oscar-service__step h3 {
  margin: 0 0 9px;
  font-size: 1.05rem;
}

.oscar-service__feature p,
.oscar-service__step p {
  margin: 0;
  color: var(--oscar-muted);
  line-height: 1.65;
}

.oscar-service__section--download {
  padding-top: 70px;
  padding-bottom: 70px;
}

.oscar-service__download-card {
  position: relative;
  overflow: hidden;
  padding: clamp(38px, 7vw, 72px);
  border: 1px solid var(--oscar-border);
  border-radius: 22px;
  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(255, 122, 26, 0.12),
      transparent 24rem
    ),
    var(--oscar-surface);
}

.oscar-service__download-content {
  max-width: 650px;
}

.oscar-service__download-title {
  max-width: 620px;
  margin: 0;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  letter-spacing: -0.05em;
  line-height: 1.05;
}

.oscar-service__download-description {
  max-width: 570px;
  margin: 20px 0 30px;
  color: var(--oscar-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.oscar-service__install-container {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(40px, 8vw, 110px);
  align-items: start;
}

.oscar-service__steps {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.oscar-service__step {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 18px;
  padding: 26px 0;
  border-bottom: 1px solid var(--oscar-border);
}

.oscar-service__step:first-child {
  padding-top: 0;
}

.oscar-service__step-number {
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 122, 26, 0.3);
  border-radius: 50%;
  color: var(--oscar-orange);
  font-size: 0.86rem;
  font-weight: 700;
}

.oscar-service__warning {
  border: 1px solid var(--oscar-border);
  border-radius: 14px;
  background: var(--oscar-surface);
}

.oscar-service__warning summary {
  position: relative;
  padding: 22px 56px 22px 24px;
  cursor: pointer;
  font-weight: 650;
  list-style: none;
}

.oscar-service__warning summary::-webkit-details-marker {
  display: none;
}

.oscar-service__warning summary::after {
  position: absolute;
  top: 50%;
  right: 24px;
  content: "+";
  color: var(--oscar-orange);
  font-size: 1.4rem;
  transform: translateY(-50%);
}

.oscar-service__warning[open] summary::after {
  content: "−";
}

.oscar-service__warning-content {
  max-width: 720px;
  padding: 0 24px 24px;
  color: var(--oscar-muted);
  line-height: 1.7;
}

.oscar-service__warning-content p {
  margin: 0;
}

.oscar-service__warning-content p + p {
  margin-top: 10px;
}

.oscar-service__warning-content strong {
  color: var(--oscar-text);
}

.oscar-service__final {
  padding: 72px 0;
  border-top: 1px solid var(--oscar-border);
  border-bottom: 1px solid var(--oscar-border);
  background: var(--oscar-surface);
}

.oscar-service__final-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.oscar-service__final h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.045em;
}

.oscar-service__final p:not(.oscar-service__section-label) {
  margin: 14px 0 0;
  color: var(--oscar-muted);
}

.oscar-service__footer-note {
  padding: 35px 0 55px;
  color: var(--oscar-muted);
  font-size: 0.86rem;
  text-align: center;
}

.oscar-service__footer-note p {
  margin: 7px 0;
}

@media (max-width: 760px) {
  .oscar-service__container {
    width: min(100% - 28px, 1120px);
  }

  .oscar-service__hero {
    padding: 110px 0 75px;
  }

  .oscar-service__section {
    padding: 65px 0;
  }

  .oscar-service__section--compact {
    padding-top: 10px;
    padding-bottom: 70px;
  }

  .oscar-service__features {
    grid-template-columns: 1fr;
  }

  .oscar-service__feature {
    padding: 26px 22px;
  }

  .oscar-service__download-card {
    padding: 32px 22px;
    border-radius: 17px;
  }

  .oscar-service__install-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .oscar-service__final-inner {
    align-items: stretch;
    flex-direction: column;
  }

  .oscar-service__final .oscar-service__primary-button {
    width: 100%;
  }

  .oscar-service__hero .oscar-service__primary-button,
  .oscar-service__download-card .oscar-service__primary-button {
    width: 100%;
  }
}
</style>
