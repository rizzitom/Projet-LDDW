<template>
  <div class="relative text-gray-700 h-3/4">
    <div
      v-if="$store && $store.state.currentUser"
      class="flex items-center select-none cursor-pointer h-full hover:text-gray-400 duration-150"
      @click="toggleMenu"
    >
      {{ $store.state.currentUser.displayName }}
      <span class="material-icons ml-1 menu-icon">
        expand_more
      </span>
    </div>

    <div
      class="right-0 top-100 absolute w-72 rounded-xl overflow-hidden bg-white border"
      :class="{ hidden: !menu }"
    >
      <ul class="py-3 text-2xl">
        <NuxtLink
          class="py-2 px-5 hover:bg-purple-700 hover:text-white cursor-pointer flex transition-colors duration-75"
          to="#"
        >
          <li>Mon compte</li>
        </NuxtLink>
        <NuxtLink
          class="py-2 px-5 hover:bg-purple-700 hover:text-white cursor-pointer flex transition-colors duration-75"
          to="#"
        >
          <li>Paramètres</li>
        </NuxtLink>
        <li
          class="py-2 px-5 hover:bg-purple-700 hover:text-white cursor-pointer transition-colors duration-75"
          @click="logout"
        >
          Se déconnecter
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LUserMenu',

  data () {
    return {
      menu: false
    }
  },

  methods: {
    toggleMenu () {
      this.menu = !this.menu
    },

    logout () {
      this.$fire.auth
        .signOut()
        .then(() => {
          this.$router.push('/login')
        })
        .catch((e) => {
          throw new Error(e)
        })
    }
  }
}
</script>

<style scoped>
.menu-icon {
  font-size: 16px;
}
</style>
