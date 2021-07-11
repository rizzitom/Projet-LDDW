<template>
  <div class="flex flex-col h-screen">
    <l-header />
    <main class="pt-20 flex flex-1 justify-center items-center">
      <div class="flex flex-col items-center w-full">
        <div
          class="bg-center bg-contain bg-no-repeat bg-not-found-illustration w-full h-72 md:w-96 md:h-96"
        />
        <h1
          v-if="error.statusCode === 404"
          class="font-medium text-3xl md:text-4xl mt-14"
        >
          {{ getHeading }}
        </h1>
      </div>
    </main>
  </div>
</template>

<script>
import LHeader from '../components/navigation/LHeader.vue'

export default {
  components: { LHeader },
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  computed: {
    getHeading () {
      switch (this.error.statusCode) {
        case 404:
          return 'Page non trouvée'
        default:
          return 'Une erreur est survenue'
      }
    }
  },

  head () {
    return {
      title: 'Le design du web - Une erreur est survenue'
    }
  }
}
</script>
