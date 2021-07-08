<template>
  <NuxtLink
    v-slot="{ navigate }"
    custom
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
        'hover:text-purple-400': variant && !disabled
      },
      'align-middle',
      'focus:outline-none',
      'text-2xl',
      'duration-150',
      'transition',
      'cursor-pointer'
    ]"
    @click="$emit('click')"
  >
    <span @click="navigate" @keypress.enter="navigate">
      <slot />
    </span>
  </NuxtLink>
</template>

<script>
export default {
  name: 'LAnchor',

  props: {
    to: {
      type: String,
      default: '#'
    },
    variant: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
