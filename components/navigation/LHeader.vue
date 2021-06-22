<template>
  <header
    class="fixed w-full bg-white grid grid-cols-12 h-20 text-purple-600 border border-gray-100 z-10"
  >
    <div
      class="col-start-2 sm:col-start-2 col-span-6 sm:col-span-3 font-bold flex items-center"
    >
      <NuxtLink to="/">
        Le design du web
      </NuxtLink>
    </div>

    <div class="hidden md:flex col-span-4 justify-center items-center">
      <l-button class="mx-5" variant anchor to="faq">
        FAQ
      </l-button>
      <l-button class="mx-5" variant anchor to="pricing">
        Tarifs
      </l-button>
      <l-button class="mx-5" variant>
        Contact
      </l-button>
    </div>

    <div
      class="col-start-10 sm:col-start-9 col-end-12 items-center justify-end flex"
    >
      <l-button
        v-if="!$store.state.currentUser"
        class="ml-5 hidden sm:block"
        anchor
        to="login"
      >
        Se connecter
      </l-button>
      <l-user-menu v-else class="hidden sm:block" />
      <l-button class="sm:hidden" variant>
        <span class="material-icons">
          menu
        </span>
      </l-button>
    </div>
  </header>
</template>

<script>
import LButton from '../common/LButton.vue'
import LUserMenu from './LUserMenu.vue'

export default {
  name: 'MainHeader',
  components: { LButton, LUserMenu }
}
</script>
