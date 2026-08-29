<template>
  <PageProjects
    :items="items"
  />
</template>

<script setup>
import PageProjects from '~/components/Page/PageProjects.vue';
import ScreenshotAgendaMe from 'assets/img/screenshot-agendame.webp';
import ScreenshotOrdemDeServico from 'assets/img/screenshot-ordem-de-servico.webp';
import ScreenshotVuetifyCart from 'assets/img/screenshot-vuetify-cart.webp';

const { data: saas } = useApiFetch('api/course-by-slug/agendame-saas', {
  lazy: true,
  transform: (response) => response.data,
})

const { data: vuePro } = useApiFetch('api/course-by-slug/vue-pro', {
  lazy: true,
  transform: (response) => response.data,
})

function lectureStats(node) {
  if (!node) {
    return { duration: 0, lectures_count: 0 }
  }

  if (node.type === 'lecture') {
    return { duration: node.duration || 0, lectures_count: 1 }
  }

  return (node.children || []).reduce((totals, child) => {
    const stats = lectureStats(child)

    return {
      duration: totals.duration + stats.duration,
      lectures_count: totals.lectures_count + stats.lectures_count,
    }
  }, { duration: 0, lectures_count: 0 })
}

function sectionByTitle(title) {
  return (vuePro.value?.nodes || []).find(node => node.title === title)
}

const items = computed(() => {
  const pinia = lectureStats(sectionByTitle('Vue Pinia'))
  const composables = lectureStats(sectionByTitle('Vue Composables'))
  const cards = []

  if (saas.value?.id) {
    cards.push({
      id: saas.value.id,
      img: ScreenshotAgendaMe,
      headline: 'MULTI-TENANT',
      title: saas.value.title,
      subtitle: 'Construa um projeto SaaS completo de agendamento de consultas.',
      description: 'Prepare-se para criar um SaaS poderoso e funcional, aplicando as melhores práticas e funcionalidades como fluxo de autenticação, planos de assinaturas e cargos e permissões.',
      duration: saas.value.duration,
      lectures_count: saas.value.lectures_count,
    })
  }

  cards.push({
    id: 'vue-pinia',
    img: ScreenshotOrdemDeServico,
    headline: 'Gereciamento de estado',
    title: 'Ordem de serviço',
    subtitle: 'Domine o gerenciamento de estado com Pinia.',
    description: 'Aprenda todas as técnicas de gerenciamento de estado usando Pinia, do básico ao avançado. No final, aplique o que aprendeu criando um gerador de ordens de serviço simples e funcional, totalmente controlado pelo estado do Pinia.',
    duration: pinia.duration,
    lectures_count: pinia.lectures_count,
  })

  cards.push({
    id: 'vue-composables',
    img: ScreenshotVuetifyCart,
    headline: 'VUETIFY',
    title: sectionByTitle('Vue Composables')?.title || 'Vue Composables',
    subtitle: 'Construa um carrinho de compras completo com Vuetify e Pinia.',
    description: 'Domine as técnicas fundamentais para criar um carrinho de compras eficiente: adicionar, remover itens, calcular subtotal e total. Tudo isso usando Pinia para gerenciar o estado do carrinho de forma prática e moderna, integrado ao Vuetify para uma interface elegante e responsiva.',
    duration: composables.duration,
    lectures_count: composables.lectures_count,
  })

  return cards
})
</script>
