<template>
  <textarea
    :value="value"
    :rows="rows"
    :required="required"
    class="text-2xl py-3 px-5 rounded-xl border focus:border-purple-700 focus:outline-none transition duration-150"
    @change="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'LTextArea',

  props: {
    value: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: '5'
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
