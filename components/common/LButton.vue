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
    }
  },

  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
