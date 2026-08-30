<template>
  <p :class="ui({ class: props.class })">
    <slot>{{ props.text }}</slot>
  </p>
</template>

<script setup lang="ts">
import { tv } from '@nuxt/ui/utils/tv'

const props = defineProps(['text', 'class'])

const ui = tv({
  base: 'text-2xl',
})
</script>
