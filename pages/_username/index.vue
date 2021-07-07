<template>
  <div class="grid grid-cols-12 py-36 min-h-screen">
    <div class="col-start-4 col-span-6 rounded-xl flex">
      <div class="mr-12 pr-6 w-72">
        <div v-if="$store.state.currentUser" class="mb-12 font-medium text-3xl">
          {{ $store.state.currentUser.displayName }}
        </div>

        <div class="text-2xl grid gap-y-3 auto-rows-min select-none">
          <l-anchor
            variant
            to="?tab=orders"
            class="ml-4 px-4 py-3 rounded-xl flex items-center"
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
            class="ml-4 px-4 py-3 rounded-xl flex items-center"
            :class="[$route.query.tab == 'invoices' ? activeTab : '']"
          >
            <span class="material-icons icon">
              receipt_long
            </span>
            Factures
          </l-anchor>
          <l-anchor
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
          </l-anchor>
        </div>
      </div>

      <div class="flex-1 flex">
        <div v-if="$route.query.tab == 'orders'" class="w-full">
          <orders-list :orders="orders" />
        </div>
        <div v-if="$route.query.tab == 'invoices'" class="w-full">
          <invoices-list />
        </div>
        <div v-if="$route.query.tab == 'chat'" class="w-full">
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
        </div>
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
          this.orders.push(doc.data())
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
