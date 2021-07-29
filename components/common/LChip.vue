<template>
  <div
    class="rounded-full py-1 px-3 flex items-center text-lg text-white h-full"
    :class="[`bg-${color}`]"
  >
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <span v-if="icon && !loading" class="material-icons mr-1 chip-icon">
      {{ icon }}
    </span>

    <span v-if="!loading">{{ title }}</span>
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
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.chip-icon {
  font-size: 16px;
}
</style>
