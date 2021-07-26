<template>
  <div
    class="p-12 grid grid-cols-12 top-0 left-0 fixed w-full h-full bg-gray-800 bg-opacity-50 z-10 cursor-default items-center"
    @click="handleClose"
  >
    <div
      class="bg-white rounded-xl col-start-1 col-span-12 sm:col-start-3 sm:col-span-8 lg:col-start-5 lg:col-span-4 2xl:col-start-6 2xl:col-span-3 max-h-full overflow-y-scroll"
      @click.stop=""
    >
      <div
        class="py-4 px-6 flex justify-between items-center bg-purple-600 text-white rounded-t-xl"
      >
        <span class="text-2xl flex-1 truncate inline-block">{{ title }}</span>
        <l-button variant class="ml-12 md:ml-24" @click="handleClose">
          <span class="text-white">Fermer</span>
        </l-button>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
import LButton from '../common/LButton.vue'

export default {
  name: 'LDialog',
  components: { LButton },

  props: {
    title: {
      type: String,
      required: true
    }
  },

  methods: {
    handleClose (e) {
      this.$emit('close', e)
    }
  }
}
</script>
