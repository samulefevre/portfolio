<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Samuel Lefèvre',
  description: 'Contacter Samuel Lefèvre pour un projet Nuxt, TypeScript, SaaS, backend, Cloudflare ou Flutter : coordonnées et informations utiles pour un premier échange.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://samuel-lefevre.com/contact' }] })
</script>

<template>
  <InformationPage
    title="Contact"
    description="Parlons de votre projet, de vos contraintes et de la meilleure façon d’avancer."
  >
    <section>
      <h2>Échanger directement</h2>
      <p>Vous pouvez m’écrire à <ULink to="mailto:samuel.lefevr@gmail.com">samuel.lefevr@gmail.com</ULink> ou me joindre au <ULink to="tel:+33622925141">06 22 92 51 41</ULink>. Mon profil <ULink to="https://www.malt.fr/profile/samuel-lefevre">Malt</ULink> constitue un autre canal pour présenter votre besoin professionnel. Basé en France, je travaille à distance sur des applications web et mobiles. Le site ne propose ni formulaire de collecte, ni réservation automatique : la prise de contact se fait directement par ces canaux.</p>
    </section>
    <section>
      <h2>Préparer un premier échange</h2>
      <p>Pour situer votre projet, décrivez les utilisateurs concernés, le problème à résoudre et les principales fonctionnalités attendues. Si une application existe déjà, précisez sa stack, son hébergement et les difficultés rencontrées. Les contraintes de calendrier, le périmètre souhaité et les intégrations à prévoir sont également utiles pour comprendre votre contexte. Ne transmettez pas de mots de passe, de clés d’API ou de données confidentielles dans un premier message.</p>
      <p>Je peux intervenir sur une application Nuxt et TypeScript, une architecture SaaS, les API et les données, l’authentification, les paiements, le déploiement Cloudflare ou une application Flutter. La disponibilité, le tarif, le calendrier et l’acceptation d’une mission sont à confirmer directement ; cette page ne constitue pas un engagement de prestation ou de délai de réponse.</p>
    </section>
    <section>
      <h2>Retrouver les informations de l’entreprise</h2>
      <p>L’activité est exercée par Samuel LEFEVRE EI, entrepreneur individuel, SIREN 853 383 883, RCS Saint-Quentin. L’adresse de l’éditeur est : 10 place Jacques Prévert, appartement 24, résidence Balzac, 02000 Laon, France. Consultez les <ULink to="/mentions-legales">mentions légales</ULink> pour les informations d’édition et la <ULink to="/privacy">politique de confidentialité</ULink> pour le traitement des données communiquées lors de nos échanges.</p>
    </section>
  </InformationPage>
</template>
