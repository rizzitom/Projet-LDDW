<template>
  <header
    class="shadow-sm grid grid-cols-12 h-20 text-purple-600 auto-cols-auto"
  >
    <div
      class="bg-blue-400 flex col-start-2 sm:col-start-2 sm:col-span-3 col-span-6 items-center"
    >
      <span class="font-black">Le design du web</span>
    </div>

    <div
      class="bg-red-400 col-span-4 col-end-12 items-center justify-end hidden sm:flex"
    >
      <l-button>Devis gratuit</l-button>
      <l-button class="ml-5">
        Se connecter
      </l-button>
    </div>
    <l-button>
      <menu-icon />
    </l-button>
  </header>
</template>

<script>
import { MenuIcon } from '@heroicons/vue/solid'
import LButton from '../common/LButton.vue'
export default {
  name: 'MainHeader',
  components: { LButton, MenuIcon }
}
</script>
