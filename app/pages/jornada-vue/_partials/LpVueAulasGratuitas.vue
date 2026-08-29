<template>
  <PageFreeLectures
    v-if="lectures.length"
    headline="Experimente Antes de Decidir"
    title="Ainda em dúvida sobre se matricular?"
    description="Assista às nossas aulas gratuitas e descubra como a Jornada Vue pode transformar suas habilidades em desenvolvimento web!"
    :lectures="lectures"
  />
</template>

<script setup>
import PageFreeLectures from '~/components/Page/PageFreeLectures.vue';

const { data } = useApiFetch('api/course-by-slug/vue-pro', {
  lazy: true,
  transform: (response) => response.data,
})

const lectures = computed(() => (data.value?.free_lectures || []).slice(0, 3))
</script>
