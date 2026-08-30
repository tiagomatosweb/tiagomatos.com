<template>
  <div :class="ui.root({ class: props.rootClass })">
    <div :class="ui.wrap({ class: props.wrapClass })">
      <LandingSectionHeader
        v-if="props.headline || props.title || props.description"
        :headline="props.headline"
        :title="props.title"
        :description="props.description"
      />

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { tv } from '@nuxt/ui/utils/tv'
import LandingSectionHeader from '~/components/Landing/LandingSectionHeader.vue'

const props = defineProps<{
  rootClass?: HTMLAttributes['class']
  wrapClass?: HTMLAttributes['class']
  title?: string
  description?: string
  headline?: string
}>()

const ui = tv({
  slots: {
    root: 'py-10 md:py-24',
    wrap: 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
  },
})
</script>
