<template>
  <button
    :type="type"
    class="bg-purple-600 text-white py-2 px-4 rounded-xl text-2xl"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'LButton',

  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>
