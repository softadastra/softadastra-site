<template>
  <section class="company-logos sd-section">
    <div class="company-logos__inner sd-section__inner">
      <div class="company-logos__head sd-reveal">
        <span class="company-logos__eyebrow"> C++ at global scale </span>

        <h2>The language behind some of the world’s most demanding systems.</h2>

        <p>
          Softadastra is building tooling for the same kind of language used in
          large-scale infrastructure, developer platforms, graphics, runtime
          systems, databases, AI acceleration, and high-performance computing.
        </p>
      </div>

      <div class="company-logos__cloud sd-reveal sd-reveal-d2">
        <a
          v-for="company in companies"
          :key="company.name"
          :href="company.href"
          class="company-logos__item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="company-logos__mark">
            {{ company.short }}
          </span>

          <span class="company-logos__copy">
            <strong>{{ company.name }}</strong>
            <small>{{ company.note }}</small>
          </span>
        </a>
      </div>

      <p class="company-logos__disclaimer sd-reveal sd-reveal-d3">
        Company names are shown as public examples of C++ usage, tooling, or
        ecosystem presence. No affiliation, sponsorship, or partnership is
        implied.
      </p>
    </div>
  </section>
</template>

<script setup>
const companies = [
  {
    name: "Google",
    short: "G",
    note: "C++ style and large-scale codebase discipline",
    href: "https://google.github.io/styleguide/cppguide.html",
  },
  {
    name: "Microsoft",
    short: "MS",
    note: "MSVC, Visual Studio, and C++ standard library tooling",
    href: "https://github.com/microsoft/STL",
  },
  {
    name: "Meta",
    short: "M",
    note: "Folly and performance-focused C++ infrastructure",
    href: "https://github.com/facebook/folly",
  },
  {
    name: "NVIDIA",
    short: "NV",
    note: "CUDA C++ and accelerated computing",
    href: "https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html",
  },
];
</script>

<style scoped>
.company-logos {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-top: 1px solid var(--sd-border);
  background: var(--sd-bg);
}

.company-logos::before,
.company-logos::after {
  content: none;
}

.company-logos__inner {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 42px;
}

.company-logos__head {
  max-width: 780px;
  margin-inline: auto;
  text-align: center;
}

.company-logos__eyebrow {
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

.company-logos__head h2 {
  max-width: 820px;
  margin: 20px auto 0;
  color: var(--sd-text);
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 840;
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.company-logos__head p {
  max-width: 720px;
  margin: 18px auto 0;
  color: var(--sd-text-soft);
  font-size: 16px;
  line-height: 1.7;
}

.company-logos__cloud {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--sd-border);
  border-radius: 24px;

  background: var(--sd-bg-raised);
  box-shadow: var(--sd-shadow-soft);

  
}

.company-logos__item {
  position: relative;
  display: grid;
  min-height: 156px;
  place-items: center;
  gap: 14px;
  padding: 28px 20px;
  border-right: 1px solid var(--sd-border);
  color: inherit;
  text-align: center;
  text-decoration: none;

  transition:
    background var(--sd-transition-fast),
    transform var(--sd-transition-fast);
}

.company-logos__item:last-child {
  border-right: none;
}

.company-logos__item::before {
  content: none;
}

.company-logos__item:hover {
  background: var(--sd-accent-bg-soft);
  transform: translateY(-2px);
}

.company-logos__item:hover::before {
  opacity: 1;
}

.company-logos__mark {
  position: relative;
  z-index: 1;
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);

  background: var(--sd-accent-bg-soft);

  color: var(--sd-orange-strong);
  font-family: var(--sd-font-mono);
  font-size: 16px;
  font-weight: 900;
  letter-spacing: -0.04em;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.company-logos__copy {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 6px;
}

.company-logos__copy strong {
  color: rgba(255, 248, 235, 0.94);
  font-size: 17px;
  font-weight: 820;
  letter-spacing: -0.035em;
}

.company-logos__copy small {
  max-width: 210px;
  color: var(--sd-text-muted);
  font-size: 12.5px;
  line-height: 1.4;
}

.company-logos__item:hover .company-logos__copy strong {
  color: var(--sd-orange-strong);
}

.company-logos__disclaimer {
  max-width: 760px;
  margin: -12px auto 0;
  color: var(--sd-text-muted);
  font-size: 12.5px;
  line-height: 1.55;
  text-align: center;
}

@media (max-width: 1080px) {
  .company-logos__cloud {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .company-logos__item:nth-child(2n) {
    border-right: none;
  }

  .company-logos__item:nth-child(n + 3) {
    border-top: 1px solid var(--sd-border);
  }
}

@media (max-width: 640px) {
  .company-logos__cloud {
    grid-template-columns: 1fr;
    border-radius: 20px;
  }

  .company-logos__item {
    min-height: 138px;
    border-right: none;
    border-top: 1px solid var(--sd-border);
  }

  .company-logos__item:first-child {
    border-top: none;
  }
}
</style>
