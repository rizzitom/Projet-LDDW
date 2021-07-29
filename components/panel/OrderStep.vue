<template>
  <l-chip
    :title="canceled ? 'Projet annulé' : returnStep"
    :icon="canceled ? 'close' : returnIcon"
    :color="returnColor"
  />
</template>

<script>
import LChip from '../common/LChip.vue'

export default {
  name: 'OrderStep',
  components: { LChip },

  props: {
    step: { type: Number, default: null },
    canceled: { type: Boolean, default: false }
  },

  computed: {
    returnStep () {
      switch (this.step) {
        case 1:
          return 'Validation en attente'
        case 2:
          return 'Paiement en attente'
        case 3:
          return 'Révision(s) en attente'
        case 4:
          return 'Livraison en attente'
        case 5:
          return 'Projet livré'
        default:
          return null
      }
    },

    returnIcon () {
      switch (this.step) {
        case 1:
          return 'schedule'
        case 2:
          return 'attach_money'
        case 3:
          return 'published_with_changes'
        case 4:
          return 'schedule'
        case 5:
          return 'done'
        default:
          return null
      }
    },

    returnColor () {
      if (this.step < 5 && !this.canceled) {
        return 'purple-600'
      } else if (this.step === 5 && !this.canceled) {
        return 'green-600'
      } else if (this.canceled) {
        return 'red-600'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
.step-icon {
  font-size: 16px;
}
</style>
