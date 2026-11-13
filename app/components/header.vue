<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Expertise', to: '/#expertise', active: false },
  { label: 'Engineering', to: '/#engineering', active: false },
  { label: 'À propos', to: '/#about', active: false },
]
</script>

<template>
  <UHeader
    title="Samuel Lefèvre"
    to="/"
    class="portfolio-header"
  >
    <template #left>
      <ULink
        to="/"
        aria-label="Samuel Lefèvre, accueil"
        class="portfolio-wordmark"
      >
        SL<span>.</span>
      </ULink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      class="portfolio-nav"
    />

    <template #right>
      <UColorModeButton
        color="neutral"
        variant="ghost"
        aria-label="Changer de thème clair ou sombre"
        class="portfolio-theme-toggle"
      />
      <UButton
        to="/#contact"
        label="Me contacter"
        trailing-icon="i-lucide-arrow-up-right"
        color="neutral"
        variant="outline"
        class="portfolio-header-contact hidden sm:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        variant="link"
        class="-mx-2"
      />
      <USeparator class="my-5" />
      <UButton
        to="/#contact"
        label="Me contacter"
        trailing-icon="i-lucide-arrow-up-right"
        block
      />
    </template>
  </UHeader>
</template>
