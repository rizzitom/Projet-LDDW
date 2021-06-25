<template>
  <div>
    <NuxtLink
      v-if="anchor"
      :event="disabled ? '' : 'click'"
      :to="to"
      :class="[
        {
          'bg-purple-600': !variant,
          'text-white': !variant,
          'py-2': !variant,
          'px-5': !variant,
          'rounded-xl': !variant,
          'hover:bg-purple-700': !variant && !disabled,
          'font-semibold': !variant,

          'font-medium': variant,
          'text-purple-600': variant,
          'hover:text-purple-400': variant && !disabled,

          'cursor-default': defaultCursor
        },
        'align-middle',
        'focus:outline-none',
        'text-2xl',
        'duration-150',
        'transition'
      ]"
      @click="$emit('click')"
    >
      <slot />
    </NuxtLink>
    <button
      v-else
      :type="type"
      :disabled="disabled"
      :class="[
        {
          'bg-purple-600': !variant,
          'text-white': !variant,
          transition: !variant,
          'py-2': !variant,
          'px-5': !variant,
          'rounded-xl': !variant,
          'hover:bg-purple-700': !variant && !disabled,
          'font-semibold': !variant,

          'font-medium': variant,
          'text-purple-600': variant,
          'hover:text-purple-400': variant && !disabled,

          'cursor-default': defaultCursor
        },
        'align-middle',
        'focus:outline-none',
        'text-2xl',
        'duration-150',
        'transition'
      ]"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LButton',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    anchor: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: null
    },
    variant: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultCursor: {
      type: Boolean,
      default: false
    }
  }
}
</script>
