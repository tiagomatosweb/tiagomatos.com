<template>
  <PageProjects
    :items="items"
  />
</template>

<script setup>
import PageProjects from '~/components/Page/PageProjects.vue';
import ScreenshotAgendaMe from 'assets/img/screenshot-agendame.webp';
const { data } = useApiFetch('api/course-by-slug/agendame-saas', {
  lazy: true,
  transform: (response) => response.data,
})

const items = computed(() => {
  if (!data.value?.id) {
    return []
  }

  return [{
    id: data.value.id,
    img: ScreenshotAgendaMe,
    headline: 'MULTI-TENANT',
    title: data.value.title,
    subtitle: 'Construa um projeto SaaS completo de agendamento de consultas.',
    description: 'Prepare-se para criar um SaaS poderoso e funcional, aplicando as melhores práticas e funcionalidades como fluxo de autenticação, planos de assinaturas e cargos e permissões.',
    duration: data.value.duration,
    lectures_count: data.value.lectures_count,
  }]
})
</script>
