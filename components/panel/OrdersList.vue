<template>
  <div class="h-full">
    <ul v-if="orders && orders.length > 0" class="grid gap-y-12">
      <li v-for="(o, i) in orders" :key="i">
        <order-card
          :order="o"
          :invoice="invoices ? getOrderInvoice(o.id) : null"
        />
      </li>
    </ul>
    <div v-else class="h-full flex justify-center items-center">
      <l-empty title="Aucune commande" />
    </div>
  </div>
</template>

<script>
import LEmpty from '../common/LEmpty.vue'
import OrderCard from './OrderCard.vue'

export default {
  name: 'OrdersList',
  components: { OrderCard, LEmpty },

  props: {
    orders: {
      type: Array,
      required: true
    },
    invoices: {
      type: Array,
      default: null
    }
  },

  methods: {
    getOrderInvoice (orderId) {
      return this.invoices.find(x => x.orderId === orderId)
    }
  }
}
</script>
