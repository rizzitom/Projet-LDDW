<template>
  <header
    class="fixed w-full bg-white grid grid-cols-12 h-20 text-purple-600 auto-cols-auto border border-gray-100 z-10"
  >
    <div class="col-start-2 sm:col-start-2 col-span-6 sm:col-span-4 font-bold flex items-center">
      <NuxtLink to="/">
        Le design du web
      </NuxtLink>
    </div>

    <div
      class="col-start-10 sm:col-start-8 col-end-12 items-center justify-end flex"
    >
      <l-button class="ml-5 hidden sm:block" anchor to="test">
        Se connecter
      </l-button>
      <l-button class="sm:hidden flex">
        <span class="material-icons flex">
          menu
        </span>
      </l-button>
    </div>
  </header>
</template>

<script>
import LButton from '../common/LButton.vue'

export default {
  name: 'MainHeader',
  components: { LButton }
}
</script>
