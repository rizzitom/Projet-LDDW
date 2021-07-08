<template>
  <header
    class="fixed w-full bg-white grid grid-cols-12 h-20 text-purple-600 border border-gray-100 z-10"
  >
    <div
      class="col-start-2 sm:col-start-2 col-span-6 sm:col-span-3 font-bold flex items-center"
    >
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo du studio" class="h-10">
      </NuxtLink>
    </div>

    <div class="hidden md:flex col-span-4 justify-center items-center">
      <l-anchor class="mx-5" variant to="/faq">
        FAQ
      </l-anchor>
      <l-anchor class="mx-5" variant to="/pricing">
        Tarifs
      </l-anchor>
      <l-anchor class="mx-5" variant to="#">
        Contact
      </l-anchor>
    </div>

    <div
      class="col-start-10 sm:col-start-9 col-end-12 items-center justify-end flex"
    >
      <l-user-menu v-if="$store.state.currentUser" class="hidden sm:block" />

      <l-anchor v-else class="ml-5 hidden sm:block" to="/login">
        Se connecter
      </l-anchor>

      <l-button class="sm:hidden flex" variant>
        <span class="material-icons">
          menu
        </span>
      </l-button>
    </div>
  </header>
</template>

<script>
import LButton from '../common/LButton.vue'
import LAnchor from '../common/LAnchor.vue'
import LUserMenu from './LUserMenu.vue'

export default {
  name: 'MainHeader',
  components: { LButton, LAnchor, LUserMenu }
}
</script>
