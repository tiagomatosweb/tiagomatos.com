<template>
  <h1 :class="ui({ class: props.class })">
    <slot>{{ props.text }}</slot>
  </h1>
</template>

<script setup lang="ts">
import { tv } from '@nuxt/ui/utils/tv'

const props = defineProps(['text', 'class'])

const ui = tv({
  base: 'text-5xl font-black tracking-tight !leading-tight text-gray-900 dark:text-white mb-0',
})
</script>
