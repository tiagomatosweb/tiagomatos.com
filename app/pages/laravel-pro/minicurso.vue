<template>
  <div>
    <UPageSection
      orientation="horizontal"
      headline="🎁 Minicurso gratuito"
      title="Domine os 7 princípios que sustentam o Laravel moderno"
      :ui="{
        title: 'lg:text-4xl'
      }"
    >
      <template #leading>
        <UIcon name="i-custom-laravel" class="size-[56px]"/>
      </template>
      
      <template #description>
        <div class="heading-3 text-toned">Aprenda o que separa o dev que copia do que domina de verdade.</div>

        <div class="mt-3">
          Mais de <span class="tm-gradient font-bold">4K devs</span> já estão recebendo dicas práticas por e-mail.
          Entre pro grupo que está elevando o nível com fundamentos sólidos e aplicáveis no mundo real.
        </div>
      </template>

      <CodeIDE>
        <div
          v-if="isSent"
          class="text-lg flex flex-col gap-4"
        >
          <p>Boa {{ user?.name || 'jovem' }}, seu e-mail foi adicionado com sucesso!</p>
          <p>Fica de olho que em breve você vai começar a receber os conteúdos sobre os 7 Princípios Essenciais do
            Laravel.</p>
          <p>Bora dominar esse framework do jeito certo! 💻🔥</p>
          <p>Abs, TM</p>
        </div>

        <LeadGenForm
          v-else
          :button-props="{
            label: 'Começar o minicurso gratuito'
          }"
          :group-ids="[mailerliteGroups.LARAVEL_INTERESSE]"
          @done="onDone"
        />
      </CodeIDE>
    </UPageSection>

    <PageTryFirst
      accent="laravel"
      :to="{ name: 'laravel-pro-2-dias-gratis' }"
    />
  </div>
</template>

<script setup>
import CodeIDE from '~/components/Codesnippet/CodeIDE.vue';
import LeadGenForm from '~/components/Leadgen/LeadGenForm.vue';
import PageTryFirst from '~/components/Page/PageTryFirst.vue'

definePageMeta({
  layout: 'lp',
})

const user = ref({});
const isSent = ref(false);

function onDone(data) {
  isSent.value = true
  user.value = data
}
</script>
