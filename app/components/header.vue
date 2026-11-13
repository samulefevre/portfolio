<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const menuOpen = ref(false)

const items: NavigationMenuItem[] = [
  { label: 'Expertise', to: '/#expertise', active: false, onSelect: closeMenu },
  { label: 'Engineering', to: '/#engineering', active: false, onSelect: closeMenu },
  { label: 'À propos', to: '/#about', active: false, onSelect: closeMenu },
]

const colorMode = useColorMode()
const appConfig = useAppConfig()

function closeMenu() {
  menuOpen.value = false
}

function restoreMenuFocus(event: Event) {
  event.preventDefault()
  document.querySelector<HTMLButtonElement>('.portfolio-header [data-slot="toggle"]')?.focus({ preventScroll: true })
}

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
    v-model:open="menuOpen"
    title="Samuel Lefèvre"
    to="/"
    class="portfolio-header"
    :menu="{ content: { onCloseAutoFocus: restoreMenuFocus } }"
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
        @click="closeMenu"
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
        @click="closeMenu"
      />
    </template>
  </UHeader>
</template>
