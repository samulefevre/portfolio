<script setup lang="ts">
defineProps<{ title: string, description: string }>()

const heroUi = {
  container: 'portfolio-legal-hero-container block lg:block',
  wrapper: 'max-w-[760px] text-left',
  title: 'm-0 text-left text-[clamp(2.3rem,6vw,5.5rem)] sm:text-[clamp(2.3rem,6vw,5.5rem)] leading-[1.1]',
  description: 'mt-6 max-w-[760px] text-left text-[1.05rem]',
}
</script>

<template>
  <UPage>
    <UPageHero
      :title="title"
      :description="description"
      :ui="heroUi"
    />
    <UContainer class="pb-20">
      <div class="portfolio-legal-card portfolio-legal-prose max-w-[760px] space-y-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold">
        <slot />
      </div>
    </UContainer>
  </UPage>
</template>
