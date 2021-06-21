<template>
  <input
    :type="type"
    class="text-2xl py-3 px-5 rounded-xl border focus:border-purple-700 focus:outline-none transition duration-150"
  >
</template>

<script>
export default {
  name: 'LInput',

  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>
