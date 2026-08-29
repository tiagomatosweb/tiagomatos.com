<template>
  <PageFreeLectures
    v-if="lectures.length"
    headline="Experimente Agora"
    title="Ainda em dúvida se vale a pena?"
    description="Assista a estas aulas gratuitas sem compromisso e descubra por si mesmo como meu curso pode transformar suas habilidades em Laravel. Valide seu interesse e comece sua jornada!"
    :lectures="lectures"
  />
</template>

<script setup>
import PageFreeLectures from '~/components/Page/PageFreeLectures.vue';

const { data } = useApiFetch('api/course-by-slug/laravel-pro', {
  lazy: true,
  transform: (response) => response.data,
})

const lectures = computed(() => (data.value?.free_lectures || []).slice(0, 3))
</script>
