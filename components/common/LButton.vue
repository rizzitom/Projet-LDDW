<template>
  <div>
    <NuxtLink
      v-if="anchor"
      :to="to"
      :class="[
        {
          'bg-gray-700': !variant,
          'text-white': !variant,
          'duration-150': !variant,
          'py-2': !variant,
          'px-5': !variant,
          'rounded-xl': !variant,
          'hover:bg-gray-900': !variant,
          'focus:bg-gray-900': !variant,
          'font-semibold': !variant,

          'font-medium': variant,
          'text-gray-700': variant,
          'hover:text-gray-900': variant,
          'focus:text-gray-900': variant,
          'duration-150': variant
        },
        'align-middle',
        'focus:outline-none',
        'text-2xl'
      ]"
      @click="$emit('click')"
    >
      <slot />
    </NuxtLink>
    <button
      v-else
      :type="type"
      :class="[
        {
          'bg-gray-700': !variant,
          'text-white': !variant,
          'duration-150': !variant,
          'py-2': !variant,
          'px-5': !variant,
          'rounded-xl': !variant,
          'hover:bg-gray-900': !variant,
          'focus:bg-gray-900': !variant,
          'font-semibold': !variant,

          'font-medium': variant,
          'text-gray-700': variant,
          'hover:text-gray-900': variant,
          'focus:text-gray-900': variant,
          'duration-150': variant
        },
        'align-middle',
        'focus:outline-none',
        'text-2xl'
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
    }
  }
}
</script>
