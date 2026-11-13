<script setup lang="ts">
import { splitSectionUi } from '~/utils/portfolio-ui'
</script>

<template>
  <UPageSection
    id="about"
    headline="À propos"
    orientation="horizontal"
    class="portfolio-section portfolio-about"
    :ui="splitSectionUi"
  >
    <template #title>
      Bonjour, moi&nbsp;c’est<br><em>Samuel.</em>
    </template>
    <div class="portfolio-about-copy">
      <p>Développeur full-stack spécialisé dans l’écosystème TypeScript et Nuxt, je travaille sur des applications SaaS, des architectures modulaires et des environnements cloud modernes.</p>
      <p>J’interviens sur les choix d’architecture comme sur leur mise en œuvre : interface, API, données, authentification et automatisation.</p>
      <span>Basé en France · Travail à distance</span>
    </div>
  </UPageSection>
</template>
