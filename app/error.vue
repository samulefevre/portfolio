<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: 'Page introuvable — Samuel Lefèvre',
  description: 'Cette page est introuvable.',
})
</script>

<template>
  <UApp>
    <div
      id="top"
      class="min-h-screen"
    >
      <Header />
      <UMain id="main-content">
        <UPageHero
          :headline="`Erreur ${props.error.status}`"
          title="Cette page est introuvable."
          description="Le lien a peut-être changé. Vous pouvez revenir à l’accueil."
          :links="[{ label: 'Retour à l’accueil', to: '/', trailingIcon: 'i-lucide-arrow-up-right' }]"
          :ui="{ title: 'font-display tracking-tight' }"
        />
      </UMain>
      <Footer />
    </div>
  </UApp>
</template>
