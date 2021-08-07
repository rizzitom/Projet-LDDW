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

    <div class="text-xl flex justify-between items-start">
      <div class="flex-1 flex pr-4 flex-wrap">
        <order-step :step="order.step" :canceled="order.canceled" />

        <a
          v-for="(file, i) in orderFiles"
          :key="i"
          :href="file.fullPath ? file.fullPath : '#'"
          target="_blank"
          class="flex mb-3"
          @click.stop=""
        >
          <l-chip
            :key="i"
            class="ml-4"
            icon="attach_file"
            :title="file.name"
            :loading="file.loading"
          />
        </a>
      </div>
      <span>{{ returnDate }}</span>
    </div>

    <hr v-if="isAdmin && !order.canceled" class="mt-4">

    <div v-if="isAdmin && !order.canceled" class="pt-4 flex flex-col sm:flex-row">
      <l-button
        small
        class="sm:mr-4 mb-4 sm:mb-0"
        @click.stop="openStepDialog()"
      >
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

      <l-button
        v-if="order.step < 5"
        small
        class="sm:mr-4 mb-4 sm:mb-0"
        @click.stop="openCancelDialog()"
      >
        Annuler la commande
      </l-button>
      <l-dialog
        v-if="showCancelDialog"
        title="Annuler la commande"
        @close.stop="closeCancelDialog()"
      >
        <form class="p-6 flex flex-col" @submit.stop.prevent="cancelOrder()">
          <div class="w-full flex flex-col">
            <label for="cancel-order" class="mb-2">
              Motif
            </label>
            <l-text-area
              id="cancel-order"
              v-model="cancelationReason"
              required
            />
          </div>
          <div class="mt-5 flex justify-end">
            <l-button
              class="flex items-center"
              type="submit"
              :loading="loading"
              :disabled="loading"
            >
              Annuler la commande
            </l-button>
          </div>
        </form>
      </l-dialog>

      <l-button
        v-if="order.step === 1 && !invoice"
        small
        class="sm:mr-4 mb-4 sm:mb-0"
        @click.stop="openInvoiceDialog()"
      >
        Envoyer la facture
      </l-button>
      <l-dialog
        v-if="showInvoiceDialog"
        title="Envoyer la facture"
        @close.stop="closeInvoiceDialog()"
      >
        <form
          class="p-6 flex flex-col"
          @submit.stop.prevent="sendOrderInvoice()"
        >
          <div class="w-full flex flex-col">
            <label for="invoice-amount" class="mb-2">
              Montant de la facture
            </label>
            <l-input
              id="invoice-amount"
              v-model="invoiceAmount"
              type="number"
              required
              min="1"
            />
            <small class="mt-2 text-lg">
              montant en centimes (10000 = 100.00€)
            </small>

            <label for="invoice-description" class="mt-8 mb-2">
              Description de la facture
            </label>
            <l-text-area
              id="invoice-description"
              v-model="invoiceDescription"
              required
            />
          </div>
          <div class="mt-5 flex justify-end">
            <l-button
              class="flex items-center"
              type="submit"
              :loading="loading"
              :disabled="loading"
            >
              Envoyer
            </l-button>
          </div>
        </form>
      </l-dialog>

      <l-button v-if="order.step != 1" small @click.stop="openFileDialog()">
        Joindre un fichier
      </l-button>
      <l-dialog
        v-if="showFileDialog"
        title="Joindre un fichier"
        @close.stop="closeFileDialog()"
      >
        <form
          class="p-6 flex flex-col"
          @submit.stop.prevent="uploadOrderFile()"
        >
          <div class="w-full flex flex-col">
            <div
              v-if="showSuccessfulUpload && newOrderFile"
              class="bg-green-600 py-2 px-4 text-lg rounded-xl text-white mb-4"
            >
              {{ newOrderFile.name }} transféré avec succès
            </div>

            <label for="order-file" class="mb-2">
              Nouveau fichier
            </label>
            <l-file-input id="order-file" required @change="setNewOrderFile" />
          </div>
          <div class="mt-5 flex justify-end">
            <l-button
              class="flex items-center"
              type="submit"
              :loading="loading"
              :disabled="loading"
            >
              Envoyer
            </l-button>
          </div>
        </form>
      </l-dialog>
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
import LTextArea from '../common/LTextArea.vue'
import LFileInput from '../common/LFileInput.vue'
import LChip from '../common/LChip.vue'
import OrderStep from './OrderStep.vue'
import OrderDetails from './OrderDetails.vue'

export default {
  name: 'OrderCard',
  components: {
    OrderStep,
    OrderDetails,
    LButton,
    LDialog,
    LInput,
    LTextArea,
    LFileInput,
    LChip
  },
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
      orderFiles: [],

      loading: false,
      showOrderDetails: false,
      showStepDialog: false,
      showCancelDialog: false,
      orderStep: null,
      cancelationReason: '',
      showInvoiceDialog: false,
      invoiceDescription: '',
      invoiceAmount: null,
      showFileDialog: false,
      newOrderFile: null,
      showSuccessfulUpload: false
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

    this.$fire.storage
      .ref(`orders/${this.order.id}`)
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          const itemRefObj = { name: itemRef.name, loading: true }
          this.orderFiles.push(itemRefObj)

          itemRef.getDownloadURL().then((url) => {
            const file = this.orderFiles[this.orderFiles.indexOf(itemRefObj)]
            file.fullPath = url
            file.loading = false
          })
        })
      })
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
    },

    openCancelDialog () {
      this.showCancelDialog = true
    },
    closeCancelDialog () {
      this.showCancelDialog = false
    },
    cancelOrder () {
      this.setLoadingState(true)

      setTimeout(() => {
        this.$fire.firestore
          .collection('orders')
          .doc(this.order.id)
          .update({
            canceled: true,
            cancelationReason: this.cancelationReason
          })
          .then(this.setLoadingState(false))
          .then(this.closeCancelDialog())
      }, 250)
    },

    openInvoiceDialog () {
      this.showInvoiceDialog = true
    },
    closeInvoiceDialog () {
      this.showInvoiceDialog = false
    },
    sendOrderInvoice () {
      this.setLoadingState(true)

      setTimeout(() => {
        this.$fire.firestore
          .collection('invoices')
          .add({
            email: this.order.email,
            items: [
              {
                amount: parseInt(this.invoiceAmount),
                currency: 'eur',
                description: this.invoiceDescription
              }
            ],
            orderId: this.order.id
          })
          .then(this.setLoadingState(false))
          .then(this.closeInvoiceDialog())
      }, 250)
    },

    openFileDialog () {
      this.showFileDialog = true
    },
    closeFileDialog () {
      this.showFileDialog = false
    },
    setNewOrderFile (file) {
      this.newOrderFile = file
    },
    uploadOrderFile () {
      this.setLoadingState(true)

      const storageRef = this.$fire.storage.ref(
        `orders/${this.order.id}/${this.newOrderFile.name}`
      )
      storageRef.put(this.newOrderFile).then(() => {
        this.setLoadingState(false)
        this.showSuccessfulUpload = true
        setTimeout(() => {
          this.showSuccessfulUpload = false
          this.newOrderFile = null
        }, 4000)
      })
    }
  }
}
</script>
