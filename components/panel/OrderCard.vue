<template>
  <div
    class="p-6 rounded-xl shadow-sm border cursor-pointer"
  >
    <div class="flex justify-between items-center">
      <h2 class="font-medium text-2xl flex flex-1">
        {{ order.subject }}
      </h2>
      <span class="text-xl">#{{ order.id }}</span>
    </div>

    <p class="text-2xl my-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
      accusamus illum minima blanditiis quia hic voluptatibus excepturi nam
      recusandae, beatae esse deserunt, possimus rem, pariatur ducimus eaque
      fugit aliquid dolor?
    </p>

    <hr class="mb-4">

    <div class="text-xl flex justify-between items-center">
      <order-step :step="order.step" />
      <span>{{ returnDate }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import OrderStep from './OrderStep.vue'

export default {
  name: 'OrderCard',

  components: { OrderStep },

  props: {
    order: {
      type: Object,
      required: true
    }
  },

  computed: {
    returnDate () {
      return moment(this.order.date).format('l')
    }
  }
}
</script>
