<template>
  <input
    :type="type"
    :value="value"
    class="text-2xl py-3 px-5 rounded-xl border focus:border-purple-700 focus:shadow-input focus:outline-none transition duration-150"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'LInput',

  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: undefined
    }
  }
}
</script>
