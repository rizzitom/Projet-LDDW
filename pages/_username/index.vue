<template>
  <div class="grid grid-cols-12 py-36 min-h-screen">
    <div class="col-start-4 col-span-6 rounded-xl flex">
      <div class="mr-12 pr-6 w-72">
        <div v-if="$store.state.currentUser" class="mb-12 font-medium text-3xl">
          {{ $store.state.currentUser.displayName }}
        </div>

        <ul class="text-2xl grid gap-y-3">
          <li
            class="px-4 py-3 rounded-xl"
            :class="[$route.query.tab == 'quotes' ? activeTab : '']"
          >
            <l-button variant anchor to="?tab=quotes">
              <span class="material-icons icon">
                description
              </span>
              <span class="ml-4">Devis</span>
            </l-button>
          </li>
          <li
            class="px-4 py-3 rounded-xl"
            :class="[$route.query.tab == 'orders' ? activeTab : '']"
          >
            <l-button variant anchor to="?tab=orders">
              <span class="material-icons icon">
                local_offer
              </span>
              <span class="ml-4">Commandes</span>
            </l-button>
          </li>
          <li
            class="px-4 py-3 rounded-xl"
            :class="[$route.query.tab == 'invoices' ? activeTab : '']"
          >
            <l-button variant anchor to="?tab=invoices">
              <span class="material-icons icon">
                receipt_long
              </span>
              <span class="ml-4">Factures</span>
            </l-button>
          </li>
          <li
            class="px-4 py-3 rounded-xl"
            :class="[$route.query.tab == 'settings' ? activeTab : '']"
          >
            <l-button variant anchor to="?tab=settings">
              <span class="material-icons icon"> settings </span>
              <span class="ml-4">Paramètres</span>
            </l-button>
          </li>
        </ul>
      </div>

      <div class="flex-1 flex">
        <div v-if="$route.query.tab == 'quotes'" class="w-full">
          devis
        </div>
        <div v-if="$route.query.tab == 'orders'" class="w-full">
          commandes
        </div>
        <div v-if="$route.query.tab == 'invoices'" class="w-full">
          factures
        </div>
        <div v-if="$route.query.tab == 'settings'" class="w-full">
          paramètres
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LButton from '../../components/common/LButton.vue'

export default {
  layout: 'MainLayout',
  components: { LButton },

  data () {
    return {
      activeTab: 'bg-gray-50',
      quotes: [],
      orders: [],
      invoices: []
    }
  },

  head () {
    return {
      title: 'Le design du web - ' + this.$route.params.username
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 16px;
}
</style>
