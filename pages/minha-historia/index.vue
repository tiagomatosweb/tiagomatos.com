<template>
  <NuxtLayout
    name="lp"
    :background="operahouse"
  >
    <div>
      <LandingHero
        lead-group-id="133312048173942337"
        title-class="text-4xl"
        @lead-done="onDone"
      >
        <template #title>
          Como saí da corrida dos ratos na Bahia para fazer projetos de até <span class="tm-gradient font-bold">80 mil dólares</span>
          na Austrália 🦘
        </template>

        <template #description>
          Saiba um pouco mais sobre a minha carreira como dev full stack.
        </template>
      </LandingHero>

      <SectionTestimonial/>

      <SectionAbout wrap-class="max-w-2xl"/>
    </div>
  </NuxtLayout>
</template>

<script setup>
import operahouse from '@/assets/img/opera-house.webp'
import {leadAPI} from '~/api/lead';

definePageMeta({
  layout: false,
  middleware: async (to) => {
    const leadGroupId = '133312048173942337'

    if (to.query?.email) {
      const data = {
        name: to.query?.name,
        email: to.query?.email,
        group_id: leadGroupId,
      }

      await leadAPI.storeLead(data)
      return navigateTo({name: 'minha-historia-obrigado'})
    }
  }
})

const router = useRouter()

function onDone() {
  router.push({name: 'minha-historia-obrigado'})
}
</script>
