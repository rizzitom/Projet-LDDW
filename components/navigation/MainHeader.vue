<template>
  <header
    class="shadow-sm grid grid-cols-12 h-20 text-purple-600 auto-cols-auto"
  >
    <div
      class="flex col-start-2 sm:col-start-2 sm:col-span-2 col-span-6 items-center"
    >
      <span class="font-black">Le design du web</span>
    </div>

    <div class="col-span-2 col-end-12 items-center justify-end flex">
      <l-button class="ml-5 hidden sm:block" anchor to="test">
        Se connecter
      </l-button>
      <l-button class="sm:hidden">
        <menu-icon />
      </l-button>
    </div>
  </header>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import LButton from '../common/LButton.vue'
export default {
  name: 'MainHeader',
  components: { LButton, MenuIcon }
}
</script>
