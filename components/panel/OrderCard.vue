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

    <hr v-if="isAdmin" class="mt-4">

    <div v-if="isAdmin" class="pt-4 flex">
      <l-button small class="mr-4" @click.stop="openStepDialog()">
        Changer d'étape
      </l-button>
      <l-dialog
        v-if="showStepDialog"
        title="Changer d'étape"
        @close.stop="closeStepDialog()"
      >
        <div class="p-6 flex flex-col">
          <l-input v-model="orderStep" type="number" min="1" max="5" />
          <div class="mt-5 flex justify-end">
            <l-button
              class="flex items-center"
              :loading="loading"
              :disabled="loading"
              @click.stop.prevent="setNewOrderStep()"
            >
              Changer
            </l-button>
          </div>
        </div>
      </l-dialog>

      <l-button v-if="!order.canceled" small class="mr-4">
        Annuler la commande
      </l-button>

      <l-button small class="mr-4">
        Joindre un fichier
      </l-button>
    </div>

    <order-details
      v-if="showOrderDetails"
      :order="order"
      :invoice="invoice"
      @close.stop="closeOrderDetails()"
    />
  </div>
</template>

<script>
import moment from 'moment'
import global from '../../mixins/global'
import LButton from '../common/LButton.vue'
import LDialog from '../common/LDialog.vue'
import LInput from '../common/LInput.vue'
import OrderStep from './OrderStep.vue'
import OrderDetails from './OrderDetails.vue'

export default {
  name: 'OrderCard',
  components: { OrderStep, OrderDetails, LButton, LDialog, LInput },
  mixins: [global],

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
      loading: false,
      showOrderDetails: false,
      showStepDialog: false,
      orderStep: null
    }
  },

  computed: {
    returnDate () {
      return moment(this.order.date.toDate()).format('l')
    }
  },

  watch: {
    order () {
      this.orderStep = this.order.step
    }
  },

  created () {
    if (this.order) {
      this.orderStep = this.order.step
    }
  },

  methods: {
    setLoadingState (bool) {
      this.loading = bool
    },

    openOrderDetails () {
      this.showOrderDetails = true
    },
    closeOrderDetails () {
      this.showOrderDetails = false
    },

    openStepDialog () {
      this.showStepDialog = true
    },
    closeStepDialog () {
      this.showStepDialog = false
    },

    setNewOrderStep () {
      this.setLoadingState(true)
      const newStep = parseInt(this.orderStep)

      setTimeout(() => {
        this.$fire.firestore
          .collection('orders')
          .doc(this.order.id)
          .update({
            step: newStep
          })
          .then(this.setLoadingState(false))
      }, 250)
    }
  }
}
</script>
