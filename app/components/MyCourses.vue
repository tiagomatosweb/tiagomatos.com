<template>
  <div>
    <h2 class="heading-5 mb-4">
      👨🏻‍💻&nbsp;&nbsp;<span class="tm-gradient">Meus treinamentos</span>
    </h2>

    <div class="grid md:grid-cols-2 gap-8">
      <NuxtLink :to="{ name: 'laravel-pro' }">
          <img
            src="@/assets/img/laravelpro-banner.webp"
            alt="Laravel PRO"
            class="rounded-lg"
          >
        </NuxtLink>
        
        <NuxtLink :to="{ name: 'vue-pro' }">
          <img
            src="@/assets/img/vuepro-banner.webp"
            alt="Vue PRO"
            class="rounded-lg"
          >
      </NuxtLink>
    </div>
  </div>
</template>
