<template>
  <div>
    <UPageSection
      id="formulario"
      orientation="horizontal"
      :ui="{
        title: 'lg:text-4xl text-left',
        wrapper: 'items-start text-left',
        headline: 'justify-start text-vue',
      }"
    >
      <template #headline>
        2 dias grátis
      </template>

      <template #title>
        Teste o Vue PRO por 2 dias e veja se essa trilha faz sentido pra você
      </template>

      <template #description>
        <p class="text-lg text-muted">
          Acesse o Vue PRO sem cartão, sem compromisso e conheça a trilha de frontend de produto em Vue — reatividade, router, Pinia, composables e deploy.
        </p>

        <ul class="mt-6 space-y-2.5">
          <li
            v-for="bullet in heroBullets"
            :key="bullet"
            class="flex items-start gap-2.5 text-sm text-toned"
          >
            <UIcon
              name="i-lucide-check"
              class="mt-0.5 size-4 shrink-0 text-vue"
            />
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </template>

      <CodeIDE>
        <div
          v-if="isSent"
          class="flex flex-col gap-4 text-lg"
        >
          <p>Boa {{ user?.first_name || 'jovem' }}, seu teste grátis foi iniciado com sucesso!</p>
          <p>Em breve você vai receber as instruções para acessar seus 2 dias grátis no Vue PRO.</p>
          <p>Bora ver por dentro como a trilha funciona na prática.</p>
          <p>Abs, TM</p>
        </div>

        <div
          v-else
          class="flex flex-col gap-6"
        >
          <p class="text-sm text-gray-300">
            Preencha seus dados abaixo para liberar seu acesso gratuito.
          </p>

          <StartTrialForm
            course-id="vue-pro"
            :button-props="{
              label: 'Liberar meus 2 dias grátis',
            }"
            @done="onDone"
          />

          <p class="text-center text-xs text-gray-400">
            Sem cartão. Sem pegadinha. Você entra, testa e decide se quer continuar.
          </p>
        </div>
      </CodeIDE>
    </UPageSection>

    <UPageSection
      :ui="{
        root: 'border-t border-default bg-elevated/15',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
        headline: 'justify-start text-vue',
        title: 'text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight text-left',
        description: 'text-left max-w-3xl space-y-3',
      }"
    >
      <template #headline>
        Por que testar?
      </template>

      <template #title>
        Antes de entrar de vez, veja como eu ensino Vue na prática
      </template>

      <template #description>
        <p>
          O Vue PRO não é só uma coleção de aulas soltas. A ideia é te mostrar como as partes de uma SPA se conectam: reatividade, router, Pinia, composables e deploy.
        </p>
        <p>
          Durante os 2 dias grátis, você consegue conhecer a didática, navegar pela trilha e entender se esse é o próximo passo certo pra você.
        </p>
      </template>

      <template #body>
        <div class="grid gap-6 sm:grid-cols-3">
          <UPageCard
            v-for="card in whyCards"
            :key="card.title"
            variant="subtle"
            class="h-full rounded-lg ring-1 ring-default"
            :ui="{ container: 'h-full p-5 sm:p-6' }"
          >
            <template #body>
              <UPageFeature
                orientation="vertical"
                :icon="card.icon"
                :title="card.title"
                :description="card.description"
                :ui="{
                  leading: 'flex size-9 items-center justify-center rounded-lg bg-vue/15 ring-1 ring-vue/25',
                  leadingIcon: 'size-5 text-vue',
                  description: 'text-sm leading-relaxed text-muted',
                }"
              />
            </template>
          </UPageCard>
        </div>
      </template>
    </UPageSection>

    <PageAbout />

    <UPageCTA
      variant="naked"
      :ui="{
        container: 'max-w-3xl pt-0 sm:pt-0 lg:pt-0',
        title: 'text-3xl sm:text-4xl font-extrabold',
        description: 'text-muted',
      }"
    >
      <template #title>
        Bora testar antes de decidir?
      </template>

      <template #description>
        Libere seu acesso gratuito por 2 dias e veja por dentro como o Vue PRO funciona.
      </template>

      <template #links>
        <div class="flex flex-col items-center gap-3">
          <UButton
            to="#formulario"
            color="cta"
            size="xl"
            label="Quero testar 2 dias grátis"
            trailing-icon="i-lucide-arrow-up"
          />
          <p class="text-sm text-muted">
            Sem cartão de crédito. Sem compromisso.
          </p>
        </div>
      </template>
    </UPageCTA>
  </div>
</template>

<script setup>
import CodeIDE from '~/components/Codesnippet/CodeIDE.vue'
import StartTrialForm from '~/components/Leadgen/StartTrialForm.vue'
import PageAbout from '~/components/Page/PageAbout.vue'

definePageMeta({
  layout: 'lp',
  logo: 'vue-pro',
})

useSeoMeta({
  title: 'Vue PRO — 2 dias grátis | Tiago Matos',
  description: 'Teste o Vue PRO por 2 dias sem cartão. Conheça a trilha de frontend de produto em Vue: reatividade, router, Pinia, composables e deploy.',
})

const user = ref({})
const isSent = ref(false)

const heroBullets = [
  'Acesso gratuito por 2 dias',
  'Sem cartão de crédito',
  'Veja a didática por dentro',
  'Conheça a estrutura da trilha',
  'Explore aulas, projetos e comunidade',
]

const whyCards = [
  {
    title: 'Didática direta',
    description: 'Aulas práticas, sem enrolação, mostrando o porquê das decisões.',
    icon: 'i-lucide-graduation-cap',
  },
  {
    title: 'Frontend de produto',
    description: 'Você vê Vue sendo usado para construir uma SPA mais próxima de um produto real.',
    icon: 'i-lucide-layout-dashboard',
  },
  {
    title: 'Sem compromisso',
    description: 'Você testa por 2 dias sem informar cartão e sem risco.',
    icon: 'i-lucide-shield-check',
  },
]

function onDone(data) {
  isSent.value = true
  user.value = data
}
</script>
