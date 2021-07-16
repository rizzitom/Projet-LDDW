<template>
  <div
    class="rounded-full py-1 px-3 flex items-center text-lg text-white"
    :class="{
      'bg-purple-600': step < 5 && !canceled,
      'bg-green-600': step == 5 && !canceled,
      'bg-red-600': !step && canceled
    }"
  >
    <span v-if="step == 1" class="material-icons step-icon"> schedule </span>
    <span v-else-if="step == 2" class="material-icons step-icon">
      attach_money
    </span>
    <span v-else-if="step == 3" class="material-icons step-icon">
      published_with_changes
    </span>
    <span v-else-if="step == 4" class="material-icons step-icon"> schedule </span>
    <span v-else-if="step == 5" class="material-icons step-icon"> done </span>
    <span v-if="!canceled" class="ml-1">{{ returnStep }}</span>

    <span v-if="canceled" class="material-icons step-icon"> close </span>
    <span v-if="canceled">Projet annulé</span>
  </div>
</template>

<script>
export default {
  name: 'OrderStep',

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
    }
  }
}
</script>

<style scoped>
.step-icon {
  font-size: 16px;
}
</style>
