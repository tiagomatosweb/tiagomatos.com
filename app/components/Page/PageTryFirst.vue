<template>
  <UPageSection
    :ui="{
      root: 'relative isolate overflow-hidden border-t border-default bg-gradient-to-b from-elevated/50 via-default to-default',
      container: 'flex flex-col py-16 sm:py-20 lg:py-24',
    }"
  >
    <template #top>
      <div
        class="pointer-events-none absolute -left-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full blur-3xl"
        :class="accent.glow"
      />
    </template>

    <div class="relative mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <p class="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          O que os alunos falam
        </p>

        <div class="relative">
          <div class="space-y-3">
            <Motion
              v-for="(quote, index) in tropes"
              :key="quote"
              as="article"
              :initial="{ opacity: 0, y: 16 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :in-view-options="{ once: true, amount: 0.3 }"
              :transition="{ duration: 0.45, delay: index * 0.08 }"
              class="rounded-lg border border-default bg-default/70 p-3.5 sm:p-4"
            >
              <div class="mb-3 flex items-center gap-3">
                <span class="size-8 shrink-0 rounded-full bg-elevated ring-1 ring-default" />
                <span class="h-2 w-24 rounded-full bg-elevated" />
                <span class="ml-auto flex gap-0.5">
                  <UIcon
                    v-for="star in 5"
                    :key="star"
                    name="i-lucide-star"
                    class="size-3 text-muted"
                  />
                </span>
              </div>
              <p class="text-sm leading-relaxed text-muted line-through decoration-default decoration-2">
                {{ quote }}
              </p>
            </Motion>
          </div>

          <Motion
            class="pointer-events-none absolute -left-[6%] top-1/2 z-10 h-1 w-[112%] origin-left -rotate-[17deg]"
            :class="accent.slash"
            :initial="{ scaleX: 0 }"
            :while-in-view="{ scaleX: 1 }"
            :in-view-options="{ once: true, amount: 0.4 }"
            :transition="{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }"
          />

          <Motion
            class="pointer-events-none absolute right-1 top-[42%] z-10 -rotate-12 border-2 bg-default/80 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm"
            :class="accent.stamp"
            :initial="{ opacity: 0, scale: 0.86, rotate: -18 }"
            :while-in-view="{ opacity: 1, scale: 1, rotate: -12 }"
            :in-view-options="{ once: true, amount: 0.4 }"
            :transition="{ duration: 0.4, delay: 0.72, type: 'spring', stiffness: 260, damping: 18 }"
          >
            Não é prova
          </Motion>
        </div>
      </div>

      <div class="lg:col-span-7">
        <Motion
          as="p"
          class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em]"
          :class="accent.text"
          :initial="{ opacity: 0, y: 12 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.45, delay: 0.2 }"
        >
          A prova que importa
        </Motion>

        <Motion
          as="h2"
          class="mt-4 font-poppins text-3xl font-extrabold leading-[1.05] tracking-tight text-highlighted sm:text-4xl lg:text-5xl"
          :initial="{ opacity: 0, y: 18 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.55, delay: 0.28 }"
        >
          Você não precisa da opinião deles.
          <span class="block" :class="accent.text">Precisa da sua.</span>
        </Motion>

        <Motion
          as="p"
          class="mt-5 max-w-md text-base leading-relaxed text-muted"
          :initial="{ opacity: 0, y: 14 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.36 }"
        >
          Se o método é o que você quer. Se o resultado é o que você busca. Isso não cabe em depoimento. Cabe em aula.
        </Motion>

        <Motion
          class="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-default bg-default"
          :initial="{ opacity: 0, y: 14 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.44 }"
        >
          <div
            v-for="(step, index) in steps"
            :key="step"
            class="bg-elevated/30 px-3 py-3 sm:px-4"
          >
            <p class="font-mono text-[10px] font-bold" :class="accent.text">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <p class="mt-1 text-xs font-semibold text-highlighted sm:text-sm">
              {{ step }}
            </p>
          </div>
        </Motion>

        <Motion
          class="mt-8 flex flex-col items-start gap-3"
          :initial="{ opacity: 0, y: 14 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.52 }"
        >
          <UButton
            :to="props.to"
            color="cta"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            :label="props.buttonLabel"
          />
          <p class="text-sm text-muted">
            Sem cartão. Dois dias. Sua conclusão.
          </p>
        </Motion>
      </div>
    </div>
  </UPageSection>
</template>

<script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  buttonLabel: {
    type: String,
    default: 'Testar 2 dias grátis',
  },
  accent: {
    type: String,
    default: 'laravel',
  },
})

const tropes = [
  'Mudou minha carreira, melhor decisão que já tomei',
  'Professor incrível, recomendo de olhos fechados',
  'Melhor investimento que já fiz em curso',
]

const steps = ['Assiste', 'Sente', 'Decide']

const accent = computed(() => {
  if (props.accent === 'vue') {
    return {
      text: 'text-vue',
      glow: 'bg-vue/10',
      slash: 'bg-vue shadow-[0_0_16px_var(--color-vue)]',
      stamp: 'border-vue text-vue',
    }
  }

  return {
    text: 'text-laravel',
    glow: 'bg-laravel/10',
    slash: 'bg-laravel shadow-[0_0_16px_var(--color-laravel)]',
    stamp: 'border-laravel text-laravel',
  }
})
</script>
