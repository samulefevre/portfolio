<script setup lang="ts">
import { introSectionUi } from '~/utils/portfolio-ui'

const areas = [
  { title: 'Architecture web & SaaS', description: 'Des applications Nuxt structurées pour évoluer : modules métier, API, authentification et gestion des données.', stack: 'Nuxt · TypeScript · Nitro · Architecture modulaire' },
  { title: 'Backend & data', description: 'Des modèles métier et des services fiables pour les données, les paiements et les traitements asynchrones.', stack: 'Node.js · PostgreSQL · Drizzle · Better Auth' },
  { title: 'Cloud & delivery', description: 'Des applications prêtes à être testées, déployées et maintenues sur des infrastructures modernes.', stack: 'Cloudflare Workers · NuxtHub · CI/CD' },
  { title: 'Applications mobiles', description: 'Des expériences multiplateformes avec une séparation claire entre interface, données et logique métier.', stack: 'Flutter · Dart' },
]

const cardUi = {
  root: 'min-h-[320px] max-[700px]:min-h-0',
  container: 'flex h-full flex-col gap-0 p-[2rem_2rem_2.4rem_0] sm:p-[2rem_2rem_2.4rem_0] max-[700px]:p-[1.7rem_0_2rem]',
  wrapper: 'flex flex-1 flex-col',
  leading: 'mb-8 font-mono text-[.72rem] font-medium text-primary max-[700px]:mb-4',
  title: 'mb-[.8rem] text-xl leading-[1.3]',
  description: 'm-0 text-[.88rem]',
  footer: 'mt-auto pt-6 font-mono text-[.72rem] leading-[1.65] text-primary',
}

const insetCardUi = {
  ...cardUi,
  container: `${cardUi.container} p-[2rem_2rem_2.4rem_2rem] sm:p-[2rem_2rem_2.4rem_2rem]`,
}
</script>

<template>
  <UPageSection
    id="expertise"
    headline="Expertise"
    description="J’interviens là où les choix techniques ont un impact durable sur le produit."
    class="portfolio-section portfolio-expertise"
    :ui="introSectionUi"
  >
    <template #title>
      De l’idée au&nbsp;produit,<br><em>avec les bonnes fondations.</em>
    </template>
    <UPageGrid class="portfolio-expertise-grid">
      <UPageCard
        v-for="(area, index) in areas"
        :key="area.title"
        :title="area.title"
        :description="area.description"
        variant="naked"
        class="portfolio-expertise-card"
        :ui="index === 0 ? cardUi : insetCardUi"
      >
        <template #leading>
          <span aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        </template>
        <template #title>
          <h3>{{ area.title }}</h3>
        </template>
        <template #footer>
          {{ area.stack }}
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
