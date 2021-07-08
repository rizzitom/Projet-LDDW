<template>
  <div
    class="p-6 rounded-xl shadow-sm border cursor-pointer"
    @click="openOrderDetails()"
  >
    <div class="flex justify-between items-center font-medium">
      <h2 class="text-2xl flex flex-1">
        {{ order.subject }}
      </h2>
      <span v-if="invoice" class="text-xl">
        {{
          `${invoice.items[0].amount /
            100} ${invoice.items[0].currency.toUpperCase()}`
        }}
      </span>
    </div>

    <p class="text-2xl my-6 leading-relaxed">
      {{ order.message }}
    </p>

    <hr class="mb-4">

    <div class="text-xl flex justify-between items-center">
      <order-step :step="order.step" :canceled="order.canceled" />
      <span>{{ returnDate }}</span>
    </div>

    <order-details
      v-if="showOrderDetails"
      :order="order"
      :invoice="invoice"
      @close="closeOrderDetails()"
    />
  </div>
</template>

<script>
import moment from 'moment'
import OrderStep from './OrderStep.vue'
import OrderDetails from './OrderDetails.vue'

export default {
  name: 'OrderCard',

  components: { OrderStep, OrderDetails },

  props: {
    order: {
      type: Object,
      required: true
    },
    invoice: {
      type: Object,
      default: null
    }
  },

  data () {
    return {
      showOrderDetails: false
    }
  },

  computed: {
    returnDate () {
      return moment(this.order.date.toDate()).format('l')
    }
  },

  methods: {
    openOrderDetails () {
      this.showOrderDetails = true
    },

    closeOrderDetails () {
      this.showOrderDetails = false
    }
  }
}
</script>
