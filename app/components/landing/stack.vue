<script setup lang="ts">
import { splitSectionUi } from '~/utils/portfolio-ui'

const groups = [
  { name: 'Frontend', tools: 'Nuxt · Vue · TypeScript · Tailwind CSS · Nuxt UI' },
  { name: 'Backend & data', tools: 'Nitro · Node.js · PostgreSQL · Drizzle · Better Auth' },
  { name: 'Cloud & delivery', tools: 'NuxtHub · Cloudflare Workers · Docker · CI/CD' },
  { name: 'Mobile', tools: 'Flutter · Dart' },
]
</script>

<template>
  <UPageSection
    headline="Stack"
    orientation="horizontal"
    class="portfolio-section portfolio-stack"
    :ui="splitSectionUi"
  >
    <template #title>
      Les outils au&nbsp;service<br><em>des enjeux.</em>
    </template>
    <dl class="portfolio-stack-list">
      <div
        v-for="group in groups"
        :key="group.name"
      >
        <dt>{{ group.name }}</dt><dd>{{ group.tools }}</dd>
      </div>
    </dl>
  </UPageSection>
</template>
