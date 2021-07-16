<template>
  <button
    :event="disabled ? '' : 'click'"
    :type="type"
    :disabled="disabled"
    :class="[
      {
        'bg-purple-600': !variant,
        'text-white': !variant,
        transition: !variant,
        'py-2': !variant && !small,
        'px-5': !variant && !small,
        'rounded-xl': !variant,
        'hover:bg-purple-700': !variant && !disabled,
        'font-semibold': !variant && !small,

        'font-medium': variant || small,
        'text-purple-600': variant,
        'hover:text-purple-400': variant && !disabled,

        'text-2xl': !small,
        'text-xl': small,
        'py-1.5': small,
        'px-4': small
      },
      'align-middle',
      'focus:outline-none',
      'duration-150',
      'transition'
    ]"
    @click="handleClick"
  >
    <slot />
    <svg
      v-if="loading"
      class="animate-spin ml-3 h-5 w-5 text-white"
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
  </button>
</template>

<script>
export default {
  name: 'LButton',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
