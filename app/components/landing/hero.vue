<script setup lang="ts">
const steps = [
  { title: 'Comprendre', description: 'Le besoin et les règles métier' },
  { title: 'Concevoir', description: 'Des frontières claires' },
  { title: 'Développer', description: 'Une base testable et évolutive' },
  { title: 'Déployer', description: 'Automatiser et observer' },
]

const heroUi = {
  container: 'portfolio-hero-container grid grid-cols-[minmax(0,1fr)_minmax(330px,440px)] lg:grid-cols-[minmax(0,1fr)_minmax(330px,440px)] items-center gap-[8%] max-[1000px]:grid-cols-1 max-[1000px]:gap-16 max-[700px]:gap-12',
  title: 'max-w-[800px] text-[clamp(3.6rem,6.1vw,6.1rem)] sm:text-[clamp(3.6rem,6.1vw,6.1rem)] max-[700px]:text-[clamp(3.3rem,12vw,5rem)] leading-[1.08]',
  description: 'mt-[2.2rem] max-w-[570px] text-[1.19rem] max-[700px]:text-[1.03rem]',
  footer: 'mt-[2.2rem]',
}

const diagramNodeUi = {
  body: 'grid grid-cols-[2.6rem_1fr] items-center gap-4 p-[1.1rem_1rem] sm:p-[1.1rem_1rem] max-[700px]:grid-cols-[2rem_1fr] max-[700px]:p-[.8rem]',
}

const diagramUi = {
  root: 'divide-y-0',
  header: 'p-0 sm:p-0',
  body: 'p-0 sm:p-0',
  footer: 'p-0 sm:p-0',
}
</script>

<template>
  <UPageHero
    orientation="horizontal"
    class="portfolio-hero"
    :ui="heroUi"
  >
    <template #headline>
      <span class="portfolio-eyebrow"><span class="portfolio-status-dot" />Samuel Lefèvre · Développeur full-stack TypeScript</span>
    </template>

    <template #title>
      Des logiciels pensés <em>pour durer.</em>
    </template>

    <template #description>
      Je conçois et développe des applications web robustes et maintenables, de l’architecture métier jusqu’au déploiement.
    </template>

    <template #footer>
      <div class="portfolio-hero-actions">
        <UButton
          to="/#contact"
          label="Parlons de votre projet"
          trailing-icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="solid"
          class="portfolio-primary-button"
        />
        <UButton
          to="/#expertise"
          label="Explorer mon expertise"
          trailing-icon="i-lucide-arrow-down"
          color="neutral"
          variant="link"
          class="portfolio-text-button"
        />
      </div>
      <p class="portfolio-hero-stack">
        Nuxt <span>·</span> TypeScript <span>·</span> PostgreSQL <span>·</span> Cloudflare <span>·</span> Flutter
      </p>
    </template>

    <UCard
      variant="soft"
      class="portfolio-diagram blueprint-grid"
      aria-label="Du besoin métier à une application déployée"
      :ui="diagramUi"
    >
      <template #header>
        <div class="portfolio-diagram-header">
          <span class="portfolio-diagram-mark">//</span> UNE APPLICATION, DE BOUT EN BOUT <span class="portfolio-diagram-index">01—04</span>
        </div>
      </template>
      <template
        v-for="(step, index) in steps"
        :key="step.title"
      >
        <UCard
          variant="outline"
          class="portfolio-diagram-node"
          :class="{ 'portfolio-diagram-node-last': index === steps.length - 1 }"
          :ui="diagramNodeUi"
        >
          <span class="portfolio-node-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div><strong>{{ step.title }}</strong><small>{{ step.description }}</small></div>
        </UCard>
        <div
          v-if="index < steps.length - 1"
          class="portfolio-diagram-connector"
          aria-hidden="true"
        />
      </template>
      <template #footer>
        <span class="portfolio-diagram-footer"><span class="portfolio-pulse-line" /> SOFTWARE ENGINEERING, PAS À PAS</span>
      </template>
    </UCard>
  </UPageHero>
</template>
