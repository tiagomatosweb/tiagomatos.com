<template>
  <div :class="ui({ class: props.class })">
    <p>Atuo como engenheiro de software no mercado australiano e dedico parte do meu tempo a
      entregar conteúdo de qualidade para programadores Laravel e Vue.</p>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { tv } from '@nuxt/ui/utils/tv'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ui = tv({
  base: 'leading-7 text-gray-600 dark:text-gray-400',
})
</script>
