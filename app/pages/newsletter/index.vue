<template>
  <div>
    <UPageSection
      id="formulario"
      orientation="horizontal"
      :ui="{
        title: 'lg:text-4xl text-left',
        wrapper: 'items-start text-left',
        headline: 'justify-start',
      }"
    >
      <template #headline>
        Newsletter
      </template>

      <template #title>
        Sistemas, SaaS e a vida de quem vive disso
      </template>

      <template #description>
        <p class="text-lg text-muted">
          Não é newsletter de framework. É o que eu tô vendo na prática: produto, carreira e decisões de quem constrói sistema de verdade.
        </p>

        <ul class="mt-6 space-y-2.5">
          <li
            v-for="bullet in bullets"
            :key="bullet"
            class="flex items-start gap-2.5 text-sm text-toned"
          >
            <UIcon
              name="i-lucide-check"
              class="mt-0.5 size-4 shrink-0 text-success"
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
          <p>Boa {{ subscriber?.name || 'jovem' }}, cadastro feito.</p>
          <p>Quando tiver conteúdo que vale o e-mail, cai na sua caixa.</p>
          <p>Abs, TM</p>
        </div>

        <NewsletterSubscribeForm
          v-else
          @done="onDone"
        />
      </CodeIDE>
    </UPageSection>

  </div>
</template>

<script setup>
import CodeIDE from '~/components/Codesnippet/CodeIDE.vue'
import NewsletterSubscribeForm from '~/components/Newsletter/NewsletterSubscribeForm.vue'

definePageMeta({
  layout: 'lp',
})

useSeoMeta({
  title: 'Newsletter — sistemas, SaaS e carreira | Tiago Matos',
  description: 'Newsletter pra quem vive de código: sistemas, SaaS, carreira e a vida profissional de dev. Sem enrolação.',
})

const subscriber = ref({})
const isSent = ref(false)

const bullets = [
  'SaaS, sistemas e carreira — o recorte é produto, não stack',
  'Pessoas e decisões reais, não teoria de influencer',
  'Sem clickbait e sem sequência de venda toda semana',
]

function onDone(data) {
  isSent.value = true
  subscriber.value = data
}
</script>
