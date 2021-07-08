<template>
  <div class="grid grid-cols-12 py-20 md:py-36 min-h-screen">
    <div
      class="col-start-2 col-span-10 sm:col-start-3 sm:col-span-8 xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4 rounded-xl flex flex-col md:flex-row"
    >
      <div class="md:mr-12 md:pr-6 w-full md:w-72 mb-16 md:mb-0">
        <div v-if="$store.state.currentUser" class="mb-12 font-medium text-3xl">
          {{ $store.state.currentUser.displayName }}
        </div>

        <div
          class="text-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-y-3 auto-rows-min select-none"
        >
          <l-anchor
            variant
            to="?tab=orders"
            class="md:ml-4 px-4 py-3 rounded-xl flex items-center"
            :class="[$route.query.tab == 'orders' ? activeTab : '']"
          >
            <span class="material-icons icon">
              local_offer
            </span>
            Commandes
          </l-anchor>
          <l-anchor
            variant
            to="?tab=invoices"
            class="md:ml-4 px-4 py-3 rounded-xl flex items-center"
            :class="[$route.query.tab == 'invoices' ? activeTab : '']"
          >
            <span class="material-icons icon">
              receipt_long
            </span>
            Factures
          </l-anchor>
          <!-- <l-anchor
            variant
            to="?tab=chat"
            class="ml-4 px-4 py-3 rounded-xl flex items-center"
            :class="[$route.query.tab == 'chat' ? activeTab : '']"
          >
            <span class="material-icons icon">
              chat_bubble
            </span>
            Chat
          </l-anchor>
          <l-anchor
            variant
            to="?tab=settings"
            class="ml-4 px-4 py-3 rounded-xl flex items-center"
            :class="[$route.query.tab == 'settings' ? activeTab : '']"
          >
            <span class="material-icons icon">
              settings
            </span>
            Paramètres
          </l-anchor> -->
        </div>
      </div>

      <div class="flex-1 flex">
        <div v-if="$route.query.tab == 'orders'" class="w-full">
          <orders-list :orders="orders" :invoices="invoices" />
        </div>
        <div v-if="$route.query.tab == 'invoices'" class="w-full">
          <invoices-list :invoices="invoices" />
        </div>
        <!-- <div v-if="$route.query.tab == 'chat'" class="w-full">
          chat
        </div>
        <div v-if="$route.query.tab == 'settings'" class="w-full">
          <ul class="flex flex-col">
            <li class="flex border-b pb-4">
              <span>
                M'envoyer un email lors de l'avancement de status de ma commande
              </span>
              <span class="ml-12">toggle</span>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import LAnchor from '../../components/common/LAnchor.vue'
import InvoicesList from '../../components/panel/InvoicesList.vue'
import OrdersList from '../../components/panel/OrdersList.vue'

export default {
  layout: 'MainLayout',
  components: { LAnchor, OrdersList, InvoicesList },

  data () {
    return {
      activeTab: 'bg-gray-50',
      orders: [],
      invoices: []
    }
  },

  created () {
    this.$fire.firestore
      .collection('orders')
      .where('userId', '==', this.$store.state.currentUser.uid)
      .orderBy('date', 'desc')
      .onSnapshot((querySnapshot) => {
        this.orders = []
        querySnapshot.forEach((doc) => {
          this.orders.push({ ...doc.data(), id: doc.id })
        })
      })

    this.$fire.firestore
      .collection('invoices')
      .where('email', '==', this.$store.state.currentUser.email)
      .onSnapshot((querySnapshot) => {
        this.invoices = []
        querySnapshot.forEach((doc) => {
          this.invoices.push({ ...doc.data(), id: doc.id })
        })
      })
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
  font-size: 1.5rem;
  margin-right: 1rem;
}
</style>
