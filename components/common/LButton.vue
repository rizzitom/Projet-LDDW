<template>
  <div>
    <NuxtLink
      v-if="anchor"
      :to="to"
      :type="type"
      class="bg-purple-600 text-white py-2 px-4 rounded-xl text-2xl hover:bg-purple-700 duration-150"
      @click="$emit('click')"
    >
      <slot />
    </NuxtLink>
    <button
      v-else
      :type="type"
      class="bg-purple-600 text-white py-2 px-4 rounded-xl text-2xl hover:bg-purple-700 focus:bg-purple-700 focus:outline-none duration-150"
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
    }
  }
}
</script>
