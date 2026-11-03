<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Samuel Lefèvre — Développeur full-stack TypeScript',
  ogUrl: 'https://samuel-lefevre.com/',
  ogType: 'website',
  ogImage: 'https://samuel-lefevre.com/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Samuel Lefèvre — Développeur full-stack TypeScript. Des logiciels pensés pour durer.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://samuel-lefevre.com/' },
    { rel: 'alternate', type: 'text/markdown', href: '/index.md' },
  ],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Samuel Lefèvre',
      'description': 'Développeur full-stack TypeScript indépendant. Architecture web et SaaS, Nuxt, backend et Cloudflare, de la conception au déploiement.',
      'url': 'https://samuel-lefevre.com/',
      'jobTitle': 'Développeur full-stack TypeScript indépendant',
      'email': 'mailto:samuel.lefevr@gmail.com',
      'knowsAbout': ['TypeScript', 'Nuxt', 'Architecture SaaS', 'PostgreSQL', 'Cloudflare Workers', 'Flutter'],
      'sameAs': [
        'https://www.malt.fr/profile/samuel-lefevre',
        'https://github.com/samulefevre',
        'https://www.linkedin.com/in/samuel-lefevre',
      ],
    }),
  }],
})
</script>

<template>
  <UPage>
    <LandingHero />
    <LandingExpertise />
    <LandingEngineering />
    <LandingArchitecture />
    <LandingStack />
    <LandingAbout />
    <LandingContact />
  </UPage>
</template>
