<script setup lang="ts">
useSeoMeta({
  title: 'À propos — Samuel Lefèvre',
  description: 'Samuel Lefèvre, développeur full-stack TypeScript indépendant en France : expertise, méthode de travail et identité professionnelle.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://samuel-lefevre.com/about' }] })
</script>

<template>
  <InformationPage
    title="À propos"
    description="Samuel Lefèvre · Développeur full-stack TypeScript indépendant, basé en France et travaillant à distance."
  >
    <section>
      <h2>Des applications pensées pour durer</h2>
      <p>Je conçois et développe des applications web robustes et maintenables, de l’architecture métier jusqu’au déploiement. Spécialisé dans l’écosystème TypeScript et Nuxt, j’interviens sur les applications SaaS, les outils métier et les plateformes web. Mon travail couvre les interfaces, les API, les données, l’authentification et l’automatisation, avec une attention particulière à la clarté du code et à son évolution.</p>
      <p>Ma stack comprend notamment Vue, Nuxt, Nitro, Node.js, PostgreSQL, Drizzle et Better Auth. Pour le cloud et la livraison, je travaille avec Cloudflare Workers, NuxtHub, Docker et l’intégration continue. Je développe également des applications mobiles multiplateformes avec Flutter et Dart.</p>
    </section>
    <section>
      <h2>Une méthode guidée par le métier</h2>
      <p>Je commence par comprendre le besoin, les règles métier et les contraintes du produit. Je définis ensuite des responsabilités explicites entre interface, application, domaine et infrastructure. L’objectif est de conserver un logiciel testable et adaptable, sans rendre les règles du produit dépendantes d’un framework ou d’un fournisseur. Les tests, le déploiement et l’observation font partie de cette démarche.</p>
      <p>Le travail présenté sur le socle SaaS modulaire est une étude en cours, et non un produit commercial déjà disponible. Les modalités d’une collaboration, les disponibilités et le calendrier sont à préciser ensemble depuis la <ULink to="/contact">page de contact</ULink>.</p>
    </section>
    <section>
      <h2>Identité professionnelle</h2>
      <p>J’exerce sous le nom Samuel LEFEVRE EI, en tant qu’entrepreneur individuel, immatriculé au RCS de Saint-Quentin sous le numéro SIREN 853 383 883. Les coordonnées de l’éditeur et les informations d’hébergement sont publiées dans les <ULink to="/mentions-legales">mentions légales</ULink>. Mes profils <ULink to="https://github.com/samulefevre">GitHub</ULink> et <ULink to="https://www.malt.fr/profile/samuel-lefevre">Malt</ULink> permettent de retrouver ma présence professionnelle.</p>
    </section>
  </InformationPage>
</template>
