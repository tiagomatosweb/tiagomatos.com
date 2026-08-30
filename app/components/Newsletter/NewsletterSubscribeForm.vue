<template>
  <UForm
    class="flex flex-col gap-6"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <UFormField
      label="Primeiro nome"
      required
      name="name"
    >
      <UInput
        v-model="state.name"
        size="xl"
        :ui="{
          base: 'h-12',
        }"
      />
    </UFormField>

    <UFormField
      label="Seu melhor e-mail"
      required
      name="email"
    >
      <UInput
        v-model="state.email"
        type="email"
        autocomplete="email"
        placeholder="Aquele e-mail que você abre todos os dias"
        size="xl"
        :ui="{
          base: 'h-12',
        }"
      />
    </UFormField>

    <UAlert
      v-if="errorMessage"
      variant="soft"
      color="error"
      :description="errorMessage"
    />

    <UButton
      type="submit"
      color="cta"
      size="2xl"
      label="Quero receber"
      block
      :loading="isLoading"
    />
  </UForm>

  <p class="mt-4 text-center text-sm text-muted">
    Sem spam. Só quando tiver o que vale o e-mail.
  </p>
</template>

<script setup>
import { object, string } from 'yup'

const emit = defineEmits(['done'])

const isLoading = ref(false)
const errorMessage = ref('')
const state = ref({
  name: '',
  email: '',
})

const schema = object({
  name: string().required().label('Primeiro nome'),
  email: string().required().email().label('E-mail'),
})

async function onSubmit({ data }) {
  try {
    errorMessage.value = ''
    isLoading.value = true
    await $fetch('/api/newsletter', {
      method: 'POST',
      body: data,
    })
    emit('done', data)
  }
  catch (e) {
    errorMessage.value = e?.data?.statusMessage || e?.statusMessage || e?.message || 'Não deu pra cadastrar. Tenta de novo.'
  }
  finally {
    isLoading.value = false
  }
}
</script>
