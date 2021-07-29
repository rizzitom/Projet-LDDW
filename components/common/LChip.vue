<template>
  <div
    class="rounded-full py-1 px-3 flex items-center text-lg text-white"
    :class="[`bg-${color}`]"
  >
    <span v-if="icon" class="material-icons mr-1 chip-icon"> {{ icon }} </span>

    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'LChip',

  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'gray-500'
    }
  }
}
</script>

<style scoped>
.chip-icon {
  font-size: 16px;
}
</style>
