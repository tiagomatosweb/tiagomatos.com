<template>
  <div>
    <LandingHero
      lead-group-id="118070622771218165"
      @lead-done="onDone"
    >
      <template #title>
        Conteúdo dev direto na sua inbox!
      </template>

      <template #description>
        Junte-se a <span class="tm-gradient font-bold">4k+ leitores</span> e receba dicas, lições e insights retirados do campo de batalha de
        quem respira programação web há mais de 2 décadas.
      </template>

      <template #extra>
        <div class="flex items-center justify-center lg:justify-start gap-2 mt-10">
          <Badge class="border-0 bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-500 text-yellow-800">Javascript</Badge>
          <Badge class="border-0 bg-green-50 dark:bg-green-500/10 dark:text-green-400 text-green-700">Vue</Badge>
          <Badge class="border-0 bg-indigo-50 dark:bg-indigo-400/10 dark:text-indigo-400 text-indigo-700">PHP</Badge>
          <Badge class="border-0 bg-red-50 dark:bg-red-400/10 dark:text-red-400 text-red-700">Laravel</Badge>
          <Badge class="border-0">Carreira</Badge>
        </div>
      </template>
    </LandingHero>

    <SectionTestimonial/>

    <SectionAbout wrap-class="max-w-2xl"/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'lp',
})

const router = useRouter()
function onDone() {
  router.push({ name: 'newsletter-obrigado' })
}
</script>
