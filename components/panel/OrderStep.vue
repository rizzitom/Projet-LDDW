<template>
  <div
    class="rounded-full py-1 px-3 flex items-center text-lg bg-purple-600 text-white"
  >
    <span v-if="step == 1" class="material-icons step-icon"> schedule </span>
    <span v-if="step == 2" class="material-icons step-icon"> attach_money </span>
    <span v-if="step == 3" class="material-icons step-icon">
      published_with_changes
    </span>
    <span v-if="step == 4" class="material-icons step-icon"> schedule </span>
    <span class="ml-1">{{ returnStep }}</span>
  </div>
</template>

<script>
export default {
  name: 'OrderStep',

  props: {
    step: { type: Number, required: true }
  },

  computed: {
    returnStep () {
      switch (this.step) {
        case 1:
          return 'En attente de validation'
        case 2:
          return 'En attente de paiement'
        case 3:
          return 'Révisions en attente'
        case 4:
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
