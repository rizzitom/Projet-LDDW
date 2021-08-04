<template>
  <select
    :value="value"
    class="text-2xl py-3 px-5 rounded-xl border focus:border-purple-700 focus:shadow-input focus:outline-none transition duration-150"
    @change="$emit('input', $event.target.value)"
  >
    <option selected disabled hidden value="">
      {{ placeholder }}
    </option>
    <slot />
  </select>
</template>

<script>
export default {
  name: 'LSelect',

  props: {
    value: {
      type: [String, Number],
      default: undefined
    },
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>
