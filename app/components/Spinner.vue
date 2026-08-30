<template>
  <div :class="ui.root({ class: props.class })">
    <UIcon
      name="i-lucide-loader-circle"
      :class="ui.icon({ class: props.iconClass })"
      :size="props.size"
    />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { tv } from '@nuxt/ui/utils/tv'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  iconClass?: HTMLAttributes['class']
  size?: string | number
}>(), {
  class: null,
  iconClass: 'text-primary',
  size: '24',
})

const ui = tv({
  slots: {
    root: '',
    icon: 'animate-spin text-primary',
  },
})
</script>
