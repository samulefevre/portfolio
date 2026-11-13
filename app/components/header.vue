<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Expertise', to: '/#expertise', active: false },
  { label: 'Engineering', to: '/#engineering', active: false },
  { label: 'À propos', to: '/#about', active: false },
]

const colorMode = useColorMode()
const appConfig = useAppConfig()

function toggleTheme() {
  const apply = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    return nextTick()
  }

  if (document.startViewTransition) {
    document.startViewTransition(apply)
  }
  else {
    void apply()
  }
}
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
      <UButton
        color="neutral"
        variant="ghost"
        aria-label="Changer de thème clair ou sombre"
        class="portfolio-theme-toggle"
        @click="toggleTheme"
      >
        <UIcon
          :name="appConfig.ui.icons.dark"
          class="size-5 hidden dark:inline-block"
        />
        <UIcon
          :name="appConfig.ui.icons.light"
          class="size-5 dark:hidden"
        />
      </UButton>
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
        color="neutral"
        variant="outline"
        class="portfolio-header-contact justify-between"
        block
      />
    </template>
  </UHeader>
</template>
