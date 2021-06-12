<template>
  <div class="rounded-xl shadow-sm border bg-white p-8">
    <div class="flex items-center mb-5">
      <div
        v-if="icon"
        class="bg-purple-600 w-min text-white p-4 rounded-xl shadow mr-5 flex"
      >
        <div class="material-icons">
          {{ icon }}
        </div>
      </div>
      <h3 class="font-medium text-3xl col-span-6 leading-none flex-1">
        <slot name="name" />
      </h3>
    </div>

    <p>
      <slot name="description" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'StrenghtCard',

  props: {
    icon: {
      type: String,
      default: null
    }
  }
}
</script>
