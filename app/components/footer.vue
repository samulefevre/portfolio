<template>
  <UFooter class="portfolio-footer">
    <template #left>
      <div class="space-y-2">
        <p>© {{ new Date().getFullYear() }} Samuel Lefèvre</p>
        <p>Conçu et développé avec Nuxt.</p>
      </div>
    </template>

    <nav
      aria-label="Informations professionnelles"
      class="flex flex-wrap justify-center gap-2"
    >
      <UButton
        v-for="link in [{ to: '/about', label: 'À propos' }, { to: '/contact', label: 'Contact' }, { to: '/privacy', label: 'Confidentialité' }]"
        :key="link.to"
        :to="link.to"
        :label="link.label"
        color="neutral"
        variant="link"
        size="sm"
      />
    </nav>

    <template #right>
      <UButton
        to="/mentions-legales"
        label="Mentions légales"
        color="neutral"
        variant="link"
        size="sm"
      />
      <UButton
        to="/#top"
        label="Retour en haut"
        trailing-icon="i-lucide-arrow-up"
        color="neutral"
        variant="link"
        size="sm"
      />
    </template>
  </UFooter>
</template>
