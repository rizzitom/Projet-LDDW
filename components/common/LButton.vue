<template>
  <div>
    <NuxtLink
      v-if="anchor"
      :to="to"
      class="bg-purple-600 font-semibold text-white py-2 px-5 rounded-xl text-2xl hover:bg-purple-700 duration-150"
      @click="$emit('click')"
    >
      <slot />
    </NuxtLink>
    <button
      v-else
      :type="type"
      :class="[
        {
          'bg-purple-600': !variant,
          'text-white': !variant,
          'duration-150': !variant,
          'py-2': !variant,
          'px-5': !variant,
          'rounded-xl': !variant,
          'hover:bg-purple-700': !variant,
          'focus:bg-purple-700': !variant,
          'font-semibold': !variant,

          'font-medium': variant,
          'text-purple-600': variant,
          'hover:text-purple-400': variant,
          'focus:text-purple-400': variant,
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
