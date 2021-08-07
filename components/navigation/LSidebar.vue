<template>
  <div
    class="bg-gray-800 bg-opacity-50 w-screen h-screen top-0 left-0 fixed flex justify-end"
    @click="$emit('close')"
  >
    <div class="bg-white w-2/3 h-full p-8" @click.stop="">
      <div class="flex items-center justify-between">
        <l-anchor v-if="!$store.state.currentUser" to="/login">
          Se connecter
        </l-anchor>
        <span v-else class="text-black">
          {{ $store.state.currentUser.displayName }}
        </span>

        <l-button class="flex" variant @click="$emit('close')">
          <span class="material-icons">
            close
          </span>
        </l-button>
      </div>

      <div
        v-if="$store.state.currentUser"
        class="flex flex-col mt-10"
        @click="$emit('close')"
      >
        <l-anchor
          class="py-4 border-b flex items-center justify-between"
          variant
          to="/account?tab=orders"
        >
          Commandes
          <span class="material-icons">
            chevron_right
          </span>
        </l-anchor>
        <l-anchor
          v-if="!isAdmin"
          class="py-4 border-b flex items-center justify-between"
          variant
          to="/account?tab=invoices"
        >
          Factures
          <span class="material-icons">
            chevron_right
          </span>
        </l-anchor>
        <l-button
          class="py-4 border-b flex items-center justify-between"
          variant
          @click="logout"
        >
          Se déconnecter
        </l-button>
      </div>

      <div class="flex flex-col mt-16" @click="$emit('close')">
        <l-anchor
          class="py-4 border-b flex items-center justify-between"
          variant
          to="/faq"
        >
          FAQ
          <span class="material-icons">
            chevron_right
          </span>
        </l-anchor>
        <l-anchor
          class="py-4 border-b flex items-center justify-between"
          variant
          to="/pricing"
        >
          Tarifs
          <span class="material-icons">
            chevron_right
          </span>
        </l-anchor>
        <l-anchor
          class="py-4 border-b flex items-center justify-between"
          variant
          to="/contact"
        >
          Contact
          <span class="material-icons">
            chevron_right
          </span>
        </l-anchor>
      </div>
    </div>
  </div>
</template>

<script>
import LAnchor from '../common/LAnchor.vue'
import LButton from '../common/LButton.vue'
import global from '../../mixins/global'

export default {
  name: 'LSidebar',
  components: { LAnchor, LButton },
  mixins: [global],

  methods: {
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
